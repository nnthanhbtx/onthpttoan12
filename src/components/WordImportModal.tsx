import React, { useState } from 'react';
import { Question } from '../types';
import {
  extractTextFromDocx,
  extractTextFromPdf,
  parseExamText,
  aiParseExamDocumentAsync,
  SAMPLE_WORD_FORMAT,
  downloadSampleFormatFile,
} from '../lib/wordParser';
import { MathText } from './MathText';
import { QuestionDiagram } from './QuestionDiagram';

interface WordImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportQuestions: (newQuestions: Question[], title?: string) => void;
  defaultExamTitle?: string;
}

export const WordImportModal: React.FC<WordImportModalProps> = ({
  isOpen,
  onClose,
  onImportQuestions,
  defaultExamTitle = 'Đề nạp từ file',
}) => {
  const [activeTab, setActiveTab] = useState<'UPLOAD' | 'PREVIEW' | 'FORMAT_GUIDE' | 'PASTE'>('UPLOAD');
  const [pastedText, setPastedText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [examTitle, setExamTitle] = useState<string>(defaultExamTitle);
  const [parsedQuestions, setParsedQuestions] = useState<Question[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [isAiMode, setIsAiMode] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [parseTimeMs, setParseTimeMs] = useState<number | null>(null);
  const [previewFilter, setPreviewFilter] = useState<'ALL' | 'PART_I' | 'PART_II' | 'PART_III' | 'WITH_IMAGE'>('ALL');

  if (!isOpen) return null;

  const processFile = async (file: File) => {
    const startTime = performance.now();
    setSelectedFile(file);
    setFileName(file.name);
    const cleanName = file.name.replace(/\.[^/.]+$/, '');
    setExamTitle(cleanName || defaultExamTitle);
    setIsLoading(true);
    setErrors([]);
    setIsAiMode(false);
    setParseTimeMs(null);

    try {
      let rawText = '';
      if (file.name.toLowerCase().endsWith('.pdf')) {
        setLoadingStatus('Đang đọc cấu trúc file PDF...');
        try {
          rawText = await extractTextFromPdf(file);
        } catch {
          setLoadingStatus('Chuyển sang Quét đề thông minh bằng AI...');
          const aiResult = await aiParseExamDocumentAsync({ file, fileName: file.name });
          setParsedQuestions(aiResult.questions);
          if (aiResult.title) setExamTitle(aiResult.title);
          setIsAiMode(true);
          setParseTimeMs(Math.round(performance.now() - startTime));
          setIsLoading(false);
          if (aiResult.questions.length > 0) setActiveTab('PREVIEW');
          return;
        }
      } else if (file.name.toLowerCase().endsWith('.docx') || file.name.toLowerCase().endsWith('.doc')) {
        setLoadingStatus('Đang nhận diện siêu tốc văn bản, công thức & ảnh In Line with Text từ file Word (.docx)...');
        rawText = await extractTextFromDocx(file);
      } else {
        setLoadingStatus('Đang đọc nội dung văn bản...');
        rawText = await file.text();
      }

      setPastedText(rawText);
      const result = parseExamText(rawText);
      const elapsed = Math.max(12, Math.round(performance.now() - startTime));
      setParseTimeMs(elapsed);
      setParsedQuestions(result.questions);
      setErrors(result.errors);
      if (result.questions.length > 0) {
        setActiveTab('PREVIEW');
      }
    } catch (err: any) {
      setErrors([
        `Lỗi khi đọc file: ${err?.message || 'File không hợp lệ hoặc bị khóa.'}. Bạn có thể thử nút "Quét đề bằng AI" bên dưới.`,
      ]);
    } finally {
      setIsLoading(false);
      setLoadingStatus('');
    }
  };

  // Handle File Input Change (.docx, .pdf, .txt)
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await processFile(file);
  };

  // Handle Drag & Drop
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  // Handle AI Deep Parsing
  const handleAiDeepParse = async () => {
    if (!selectedFile && !pastedText.trim()) {
      setErrors(['Vui lòng chọn file Word/PDF hoặc dán nội dung văn bản đề thi trước.']);
      return;
    }

    const startTime = performance.now();
    setIsLoading(true);
    setLoadingStatus('Đang phân tích, nhận dạng công thức toán LaTeX & cấu trúc 3 phần bằng AI...');
    setErrors([]);

    try {
      const aiResult = await aiParseExamDocumentAsync({
        file: selectedFile || undefined,
        rawText: pastedText || undefined,
        fileName: fileName || examTitle,
      });

      if (aiResult.questions.length === 0) {
        throw new Error('AI không tìm thấy câu hỏi hợp lệ trong tài liệu.');
      }

      setParsedQuestions(aiResult.questions);
      if (aiResult.title) setExamTitle(aiResult.title);
      setIsAiMode(true);
      setParseTimeMs(Math.round(performance.now() - startTime));
      setActiveTab('PREVIEW');
    } catch (err: any) {
      setErrors([`Lỗi khi quét đề bằng AI: ${err?.message || 'Vui lòng kiểm tra kết nối mạng hoặc định dạng file.'}`]);
    } finally {
      setIsLoading(false);
      setLoadingStatus('');
    }
  };

  // Handle parse pasted text
  const handleParsePastedText = (text: string) => {
    setPastedText(text);
    if (!text.trim()) {
      setParsedQuestions([]);
      setErrors([]);
      return;
    }
    const startTime = performance.now();
    const result = parseExamText(text);
    setParseTimeMs(Math.max(5, Math.round(performance.now() - startTime)));
    setParsedQuestions(result.questions);
    setErrors(result.errors);
    setIsAiMode(false);
  };

  // Copy sample format
  const handleCopySample = () => {
    navigator.clipboard.writeText(SAMPLE_WORD_FORMAT);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Update a question's answer or image in the preview list
  const handleUpdateQuestionPartIAnswer = (qId: number, newKey: 'A' | 'B' | 'C' | 'D') => {
    setParsedQuestions((prev) =>
      prev.map((q) => (q.id === qId && q.section === 'PART_I' ? { ...q, correctAnswer: newKey } : q))
    );
  };

  const handleUpdateQuestionPartIIStatement = (qId: number, stmtKey: 'a' | 'b' | 'c' | 'd', val: boolean) => {
    setParsedQuestions((prev) =>
      prev.map((q) => {
        if (q.id === qId && q.section === 'PART_II') {
          return {
            ...q,
            statements: q.statements.map((s) => (s.key === stmtKey ? { ...s, correct: val } : s)),
          };
        }
        return q;
      })
    );
  };

  const handleUpdateQuestionPartIIIAnswer = (qId: number, newAns: string) => {
    setParsedQuestions((prev) =>
      prev.map((q) => (q.id === qId && q.section === 'PART_III' ? { ...q, correctAnswer: newAns } : q))
    );
  };

  const handleUploadQuestionImage = (qId: number, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setParsedQuestions((prev) =>
        prev.map((q) => (q.id === qId ? { ...q, imageUrl: dataUrl } : q))
      );
    };
    reader.readAsDataURL(file);
  };

  // Submit parsed questions to app
  const handleApplyQuestions = () => {
    if (parsedQuestions.length === 0) {
      setErrors(['Vui lòng tải file Word/PDF hoặc dán nội dung đề thi trước khi áp dụng.']);
      return;
    }
    onImportQuestions(parsedQuestions, examTitle.trim() || defaultExamTitle);
    onClose();
  };

  // Part counts & extracted image count
  const p1Questions = parsedQuestions.filter((q) => q.section === 'PART_I');
  const p2Questions = parsedQuestions.filter((q) => q.section === 'PART_II');
  const p3Questions = parsedQuestions.filter((q) => q.section === 'PART_III');
  const questionsWithImage = parsedQuestions.filter(
    (q) =>
      Boolean(q.imageUrl) ||
      Boolean(q.diagramType) ||
      /\[Hình\s*(?:ảnh|công\s*thức)\s*:/i.test(q.questionText)
  );

  const filteredPreviewQuestions = parsedQuestions.filter((q) => {
    if (previewFilter === 'PART_I') return q.section === 'PART_I';
    if (previewFilter === 'PART_II') return q.section === 'PART_II';
    if (previewFilter === 'PART_III') return q.section === 'PART_III';
    if (previewFilter === 'WITH_IMAGE') {
      return (
        Boolean(q.imageUrl) ||
        Boolean(q.diagramType) ||
        /\[Hình\s*(?:ảnh|công\s*thức)\s*:/i.test(q.questionText)
      );
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#08122c] border-2 border-amber-400/90 rounded-2xl max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden">
        {/* Modal Header */}
        <div className="p-3.5 sm:p-4 bg-[#040a1c] border-b border-[#1e345e] flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase shadow">
              WORD PRO
            </span>
            <div>
              <h2 className="text-sm sm:text-base font-black text-amber-300 tracking-wide uppercase font-serif">
                TẠO ĐỀ BẰNG FILE WORD (.DOCX) SIÊU TỐC & NHẬN DIỆN ẢNH TRỰC TIẾP
              </h2>
              <p className="text-[11px] text-slate-400 font-medium">
                Tự động trích xuất hình ảnh <strong className="text-emerald-300">In Line with Text</strong>, công thức Toán & đáp án chuẩn 3 phần
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 text-xl font-bold transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#1e345e] bg-[#030712] px-2 sm:px-3 gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
          <button
            onClick={() => setActiveTab('UPLOAD')}
            className={`py-2.5 px-3 sm:px-4 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'UPLOAD'
                ? 'border-amber-400 text-amber-300 bg-[#08122c]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>📁</span>
            <span>TẢI FILE WORD (.DOCX)</span>
          </button>

          <button
            onClick={() => setActiveTab('PREVIEW')}
            className={`py-2.5 px-3 sm:px-4 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'PREVIEW'
                ? 'border-emerald-400 text-emerald-300 bg-[#08122c]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>👁️</span>
            <span>XEM TRƯỚC ĐỀ & ẢNH ({parsedQuestions.length} CÂU)</span>
            {questionsWithImage.length > 0 && (
              <span className="px-1.5 py-0.5 rounded bg-emerald-900 text-emerald-300 text-[10px] border border-emerald-500/50">
                {questionsWithImage.length} ảnh
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('PASTE')}
            className={`py-2.5 px-3 sm:px-4 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'PASTE'
                ? 'border-amber-400 text-amber-300 bg-[#08122c]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>✏️</span>
            <span>DÁN VĂN BẢN ĐỀ THI</span>
          </button>

          <button
            onClick={() => setActiveTab('FORMAT_GUIDE')}
            className={`py-2.5 px-3 sm:px-4 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'FORMAT_GUIDE'
                ? 'border-amber-400 text-amber-300 bg-[#08122c]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>📋</span>
            <span>QUY TẮC & ĐỀ MẪU</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3.5 sm:p-5 flex-1 overflow-y-auto space-y-4">
          {/* TAB 1: UPLOAD FILE */}
          {activeTab === 'UPLOAD' && (
            <div className="space-y-4">
              {/* Highlight Features Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-[#040a1c] p-3 rounded-xl border border-cyan-500/40 text-xs">
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
                  <span className="text-emerald-400 font-bold text-base">🖼️</span>
                  <div>
                    <strong className="text-emerald-300 block font-bold">Nhận diện ảnh In Line with Text</strong>
                    <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                      Trích xuất trực tiếp toàn bộ hình vẽ, đồ thị, bảng biến thiên gắn trong file Word (.docx) đúng vị trí câu hỏi.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/30">
                  <span className="text-amber-400 font-bold text-base">⚡</span>
                  <div>
                    <strong className="text-amber-300 block font-bold">Tốc độ xử lý tức thì (&lt; 0.1 giây)</strong>
                    <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                      Đọc trực tiếp cấu trúc OpenXML của Word, hỗ trợ Equation Editor, LaTeX $...$ và bảng số liệu.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
                  <span className="text-cyan-400 font-bold text-base">🎯</span>
                  <div>
                    <strong className="text-cyan-300 block font-bold">Tự động nhận đáp án & lời giải</strong>
                    <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                      Nhận diện đáp án gạch chân, tô màu đỏ/highlight, dòng "Đáp án: A" hoặc Bảng đáp án cuối file.
                    </span>
                  </div>
                </div>
              </div>

              {/* Drag and Drop Upload Dropzone */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDragging(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDragging(false);
                }}
                onDrop={handleDrop}
                className={`border-2 border-dashed p-6 sm:p-8 rounded-xl text-center space-y-3 transition-all shadow-inner ${
                  isDragging
                    ? 'border-emerald-400 bg-emerald-950/30 scale-[1.01]'
                    : 'border-amber-400/70 bg-[#030712] hover:border-amber-400'
                }`}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-300 text-3xl font-bold shadow">
                  📄
                </div>
                <div>
                  <p className="text-sm sm:text-base font-extrabold text-slate-100">
                    Kéo thả file <strong className="text-amber-300">.DOCX (Word)</strong> vào đây hoặc nhấn nút bên dưới
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Hỗ trợ ảnh <strong className="text-emerald-300">In Line with Text</strong> trực tiếp trong Word • Hỗ trợ 3 phần (Phần I: 12 câu, Phần II: 4 câu, Phần III: 6 câu)
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <label className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-95 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider cursor-pointer shadow-lg transition-all border border-amber-300">
                    📂 CHỌN FILE WORD (.DOCX) / PDF
                    <input
                      type="file"
                      accept=".docx,.doc,.pdf,.txt"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </label>

                  {selectedFile && (
                    <button
                      onClick={handleAiDeepParse}
                      disabled={isLoading}
                      className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-95 text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-lg transition-all border border-cyan-300 flex items-center gap-1.5"
                      title="Sử dụng AI để quét tài liệu PDF scan hoặc cấu trúc đặc biệt"
                    >
                      <span>⚡ QUÉT BỔ SUNG BẰNG AI</span>
                    </button>
                  )}
                </div>

                {fileName && (
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-lg bg-emerald-950 border border-emerald-500 text-emerald-300 font-bold">
                      ✓ Đã nạp: {fileName}
                    </span>
                    {parseTimeMs !== null && (
                      <span className="px-2.5 py-1 rounded-lg bg-amber-950/80 border border-amber-400/60 text-amber-300 font-bold">
                        ⚡ Xử lý trong {parseTimeMs}ms
                      </span>
                    )}
                    {questionsWithImage.length > 0 && (
                      <span className="px-2.5 py-1 rounded-lg bg-cyan-950 border border-cyan-400 text-cyan-200 font-bold">
                        🖼️ Đã trích xuất {questionsWithImage.length} hình ảnh từ Word
                      </span>
                    )}
                  </div>
                )}
              </div>

              {isLoading && (
                <div className="p-3.5 bg-amber-950/50 border border-amber-500/60 rounded-xl text-center text-amber-300 text-xs font-bold space-y-1 animate-pulse">
                  <div className="text-base">⏳</div>
                  <div>{loadingStatus || 'Đang xử lý đề thi...'}</div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: VISUAL PREVIEW & EDITOR OF PARSED QUESTIONS */}
          {activeTab === 'PREVIEW' && (
            <div className="space-y-3.5">
              {parsedQuestions.length === 0 ? (
                <div className="p-8 text-center bg-[#040a1c] rounded-xl border border-slate-800 space-y-3">
                  <p className="text-sm text-slate-300 font-bold">
                    Chưa có câu hỏi nào được nạp. Vui lòng chọn một file Word (.docx) để xem trước!
                  </p>
                  <button
                    onClick={() => setActiveTab('UPLOAD')}
                    className="px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-black text-xs uppercase cursor-pointer"
                  >
                    Tải file Word ngay
                  </button>
                </div>
              ) : (
                <>
                  {/* Exam Title & Filter Bar */}
                  <div className="bg-[#040a1c] p-3 rounded-xl border border-[#1e345e] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <label className="text-[11px] font-bold text-amber-300 block mb-1">
                        Tên đề thi lưu vào Ngân hàng đề:
                      </label>
                      <input
                        type="text"
                        value={examTitle}
                        onChange={(e) => setExamTitle(e.target.value)}
                        placeholder="Nhập tên đề thi (VD: Đề 07)..."
                        className="w-full bg-[#08122c] border border-amber-400/70 rounded-lg px-3 py-1.5 text-xs text-white font-bold focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 self-end">
                      <button
                        onClick={() => setPreviewFilter('ALL')}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold cursor-pointer border transition-all ${
                          previewFilter === 'ALL'
                            ? 'bg-amber-400 text-slate-950 border-amber-300'
                            : 'bg-[#08122c] text-slate-300 border-[#1e345e]'
                        }`}
                      >
                        Tất cả ({parsedQuestions.length})
                      </button>
                      <button
                        onClick={() => setPreviewFilter('PART_I')}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold cursor-pointer border transition-all ${
                          previewFilter === 'PART_I'
                            ? 'bg-amber-400 text-slate-950 border-amber-300'
                            : 'bg-[#08122c] text-slate-300 border-[#1e345e]'
                        }`}
                      >
                        Phần I ({p1Questions.length})
                      </button>
                      <button
                        onClick={() => setPreviewFilter('PART_II')}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold cursor-pointer border transition-all ${
                          previewFilter === 'PART_II'
                            ? 'bg-cyan-400 text-slate-950 border-cyan-300'
                            : 'bg-[#08122c] text-slate-300 border-[#1e345e]'
                        }`}
                      >
                        Phần II ({p2Questions.length})
                      </button>
                      <button
                        onClick={() => setPreviewFilter('PART_III')}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold cursor-pointer border transition-all ${
                          previewFilter === 'PART_III'
                            ? 'bg-rose-400 text-slate-950 border-rose-300'
                            : 'bg-[#08122c] text-slate-300 border-[#1e345e]'
                        }`}
                      >
                        Phần III ({p3Questions.length})
                      </button>
                      <button
                        onClick={() => setPreviewFilter('WITH_IMAGE')}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold cursor-pointer border transition-all ${
                          previewFilter === 'WITH_IMAGE'
                            ? 'bg-emerald-400 text-slate-950 border-emerald-300'
                            : 'bg-[#08122c] text-emerald-300 border-emerald-500/40'
                        }`}
                      >
                        🖼️ Có ảnh ({questionsWithImage.length})
                      </button>
                    </div>
                  </div>

                  {/* Question Cards List */}
                  <div className="space-y-3 max-h-[52vh] overflow-y-auto pr-1">
                    {filteredPreviewQuestions.map((q) => {
                      const relNum =
                        q.section === 'PART_I'
                          ? q.id
                          : q.section === 'PART_II'
                          ? q.id - 12
                          : q.id - 16;
                      const partLabel =
                        q.section === 'PART_I'
                          ? 'Phần I'
                          : q.section === 'PART_II'
                          ? 'Phần II'
                          : 'Phần III';

                      return (
                        <div
                          key={q.id}
                          className="p-3.5 rounded-xl bg-[#040a1c] border border-[#1e345e] space-y-2.5"
                        >
                          <div className="flex items-center justify-between gap-2 flex-wrap border-b border-[#1e345e]/60 pb-2">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-md bg-amber-400/20 border border-amber-400 text-amber-300 font-extrabold text-xs">
                                {partLabel} - Câu {relNum}
                              </span>
                              {(q.imageUrl || q.diagramType) && (
                                <span className="px-2 py-0.5 rounded-md bg-emerald-950 border border-emerald-500/60 text-emerald-300 text-[11px] font-bold">
                                  🖼️ Đã nhận ảnh In Line with Text
                                </span>
                              )}
                            </div>

                            {/* Quick Button to Replace or Add Image for this Question */}
                            <label className="px-2.5 py-1 rounded-md bg-[#0b1b3b] hover:bg-[#142d5c] border border-cyan-500/50 text-cyan-300 text-[11px] font-bold cursor-pointer transition-colors">
                              📷 {q.imageUrl ? 'Đổi ảnh câu này' : 'Thêm ảnh câu này'}
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const f = e.target.files?.[0];
                                  if (f) handleUploadQuestionImage(q.id, f);
                                }}
                                className="hidden"
                              />
                            </label>
                          </div>

                          {/* Question Text */}
                          <div className="exam-serif text-sm sm:text-base text-slate-100 leading-relaxed">
                            <MathText text={q.questionText} />
                          </div>

                          {/* Extracted Inline Image / Diagram Preview */}
                          {(q.imageUrl || q.diagramType) && (
                            <div className="max-w-md mx-auto">
                              <QuestionDiagram type={q.diagramType} imageUrl={q.imageUrl} />
                            </div>
                          )}

                          {/* Interactive Options & Answer Key Verification */}
                          {q.section === 'PART_I' && (
                            <div className="space-y-1.5 pt-1">
                              <div className="text-[11px] text-slate-400 font-medium">
                                Nhấn vào phương án A, B, C, D để đổi đáp án đúng nếu cần:
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {q.options.map((opt) => {
                                  const isCorrect = q.correctAnswer === opt.key;
                                  return (
                                    <button
                                      key={opt.key}
                                      type="button"
                                      onClick={() => handleUpdateQuestionPartIAnswer(q.id, opt.key)}
                                      className={`p-2 rounded-lg border text-left flex items-center justify-between gap-2 cursor-pointer transition-all ${
                                        isCorrect
                                          ? 'bg-emerald-950/90 border-emerald-400 text-emerald-200 font-bold'
                                          : 'bg-[#08122c] border-[#1e345e] text-slate-300 hover:border-amber-400/60'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2 min-w-0">
                                        <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
                                          {opt.key}
                                        </span>
                                        <span className="exam-serif text-sm truncate">
                                          <MathText text={opt.text} />
                                        </span>
                                      </div>
                                      {isCorrect && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black shrink-0">
                                          ✓ ĐÚNG
                                        </span>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {q.section === 'PART_II' && (
                            <div className="space-y-1.5 pt-1">
                              {q.statements.map((stmt) => (
                                <div
                                  key={stmt.key}
                                  className="p-2 rounded-lg bg-[#08122c] border border-[#1e345e] flex items-center justify-between gap-2"
                                >
                                  <div className="exam-serif text-sm text-slate-200">
                                    <strong className="text-amber-300 mr-1.5">{stmt.key})</strong>
                                    <MathText text={stmt.text} />
                                  </div>
                                  <div className="flex items-center gap-1 shrink-0">
                                    <button
                                      type="button"
                                      onClick={() => handleUpdateQuestionPartIIStatement(q.id, stmt.key, true)}
                                      className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer border ${
                                        stmt.correct
                                          ? 'bg-emerald-600 border-emerald-300 text-white'
                                          : 'bg-[#040a1c] border-slate-700 text-slate-400'
                                      }`}
                                    >
                                      Đúng
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleUpdateQuestionPartIIStatement(q.id, stmt.key, false)}
                                      className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer border ${
                                        !stmt.correct
                                          ? 'bg-rose-600 border-rose-300 text-white'
                                          : 'bg-[#040a1c] border-slate-700 text-slate-400'
                                      }`}
                                    >
                                      Sai
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {q.section === 'PART_III' && (
                            <div className="flex items-center gap-2 pt-1">
                              <span className="text-xs font-bold text-amber-300">Đáp số chuẩn:</span>
                              <input
                                type="text"
                                value={q.correctAnswer}
                                onChange={(e) => handleUpdateQuestionPartIIIAnswer(q.id, e.target.value)}
                                className="bg-[#08122c] border border-emerald-400 text-emerald-300 font-bold text-sm px-3 py-1 rounded-lg w-40 focus:outline-none"
                              />
                            </div>
                          )}

                          {/* Explanation Preview */}
                          <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs text-slate-300 exam-serif">
                            <strong className="text-amber-300 font-sans uppercase text-[11px] block mb-0.5">
                              💡 Lời giải:
                            </strong>
                            <MathText text={q.explanation} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}

          {/* TAB 3: PASTE TEXT */}
          {activeTab === 'PASTE' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-amber-300 block">
                  Dán toàn bộ văn bản đề thi từ File Word hoặc PDF vào khung bên dưới:
                </label>
                {pastedText.trim() && (
                  <button
                    onClick={handleAiDeepParse}
                    disabled={isLoading}
                    className="px-3 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] font-bold cursor-pointer flex items-center gap-1 shadow"
                  >
                    <span>⚡ Nhận dạng bằng AI</span>
                  </button>
                )}
              </div>
              <textarea
                value={pastedText}
                onChange={(e) => handleParsePastedText(e.target.value)}
                placeholder="Dán nội dung đề thi tại đây... (Hệ thống tự động nhận dạng Phần I câu 1-12, Phần II câu 1-4, Phần III câu 1-6)"
                rows={10}
                className="w-full p-3 rounded-xl bg-[#030712] border border-slate-700 text-slate-200 text-xs font-mono focus:border-amber-400 focus:outline-none placeholder:text-slate-600 leading-relaxed"
              />
            </div>
          )}

          {/* TAB 4: FORMAT GUIDE */}
          {activeTab === 'FORMAT_GUIDE' && (
            <div className="space-y-3.5">
              <div className="p-3.5 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-emerald-950/60 border border-emerald-500/60 rounded-xl text-xs space-y-2">
                <p className="font-bold text-emerald-300 uppercase flex items-center gap-2 text-sm">
                  <span>✨</span> CẤU TRÚC ĐỀ THI WORD CHUẨN GDPT 2018:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] text-slate-200">
                  <div className="bg-[#030712] p-2.5 rounded-lg border border-amber-500/40 space-y-1">
                    <div className="font-black text-amber-300">PHẦN I (12 câu):</div>
                    <p>• Bắt đầu từ <strong>Câu 1</strong> đến <strong>Câu 12</strong></p>
                    <p>• 4 phương án <code>A.</code>, <code>B.</code>, <code>C.</code>, <code>D.</code></p>
                    <p>• Gạch chân, tô đỏ/highlight đáp án đúng hoặc ghi <code>Đáp án: A</code></p>
                  </div>

                  <div className="bg-[#030712] p-2.5 rounded-lg border border-cyan-500/40 space-y-1">
                    <div className="font-black text-cyan-300">PHẦN II (4 câu):</div>
                    <p>• Bắt đầu từ <strong>Câu 1</strong> đến <strong>Câu 4</strong></p>
                    <p>• 4 mệnh đề <code>a)</code>, <code>b)</code>, <code>c)</code>, <code>d)</code></p>
                    <p>• Kèm <code>[Đúng]</code> / <code>[Sai]</code> hoặc gạch chân/tô đỏ ý đúng</p>
                  </div>

                  <div className="bg-[#030712] p-2.5 rounded-lg border border-rose-500/40 space-y-1">
                    <div className="font-black text-rose-300">PHẦN III (6 câu):</div>
                    <p>• Bắt đầu từ <strong>Câu 1</strong> đến <strong>Câu 6</strong></p>
                    <p>• Trắc nghiệm trả lời ngắn kết quả là số</p>
                    <p>• Thêm dòng <code>Đáp số: [giá trị]</code></p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-slate-300">
                  NỘI DUNG ĐỀ THI MẪU CHUẨN:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopySample}
                    className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white transition-all cursor-pointer"
                  >
                    {copySuccess ? '✓ Đã sao chép' : '📋 Sao chép mẫu'}
                  </button>
                  <button
                    onClick={downloadSampleFormatFile}
                    className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-xs font-bold text-slate-900 transition-all cursor-pointer"
                  >
                    ⬇ Tải file mẫu (.txt)
                  </button>
                </div>
              </div>

              <pre className="p-3 bg-[#030712] border border-slate-700 rounded-xl text-[11px] font-mono text-emerald-300 leading-relaxed max-h-52 overflow-y-auto whitespace-pre-wrap selection:bg-amber-400 selection:text-black">
                {SAMPLE_WORD_FORMAT}
              </pre>
            </div>
          )}

          {/* PARSED STATUS SUMMARY BAR */}
          {parsedQuestions.length > 0 && activeTab !== 'PREVIEW' && (
            <div className="p-3.5 bg-emerald-950/60 border border-emerald-500/60 rounded-xl text-xs space-y-2.5 shadow-lg">
              <div className="flex items-center justify-between font-black text-emerald-300 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-base">✓</span>
                  <span>
                    ĐÃ NHẬN DIỆN THÀNH CÔNG {parsedQuestions.length} CÂU HỎI
                    {questionsWithImage.length > 0 ? ` (${questionsWithImage.length} HÌNH ẢNH IN LINE WITH TEXT)` : ''}
                  </span>
                </div>
                <button
                  onClick={() => setActiveTab('PREVIEW')}
                  className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[11px] uppercase cursor-pointer shadow"
                >
                  👁️ Xem chi tiết câu hỏi & hình ảnh
                </button>
              </div>
            </div>
          )}

          {errors.length > 0 && (
            <div className="p-3 bg-rose-950/60 border border-rose-500/60 rounded-xl text-xs space-y-1 text-rose-300">
              <strong className="block text-rose-400 font-bold uppercase flex items-center gap-1.5">
                <span>⚠️</span> Lưu ý nhận diện:
              </strong>
              {errors.map((err, i) => (
                <p key={i}>• {err}</p>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-[#040a1c] border-t border-[#1e345e] flex items-center justify-between gap-2">
          <button
            onClick={onClose}
            className="px-3.5 sm:px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold uppercase transition-all cursor-pointer"
          >
            HỦY BỎ
          </button>

          <div className="flex items-center gap-2">
            {parsedQuestions.length > 0 && activeTab !== 'PREVIEW' && (
              <button
                onClick={() => setActiveTab('PREVIEW')}
                className="px-4 py-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs uppercase cursor-pointer"
              >
                👁️ Xem trước ({parsedQuestions.length} câu)
              </button>
            )}
            <button
              onClick={handleApplyQuestions}
              disabled={parsedQuestions.length === 0}
              className="px-4 sm:px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-600 text-white font-black text-xs tracking-wider uppercase disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 active:scale-95 transition-all shadow-lg border border-emerald-400/50 cursor-pointer"
            >
              ÁP DỤNG ĐỀ THI ({parsedQuestions.length} CÂU)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
