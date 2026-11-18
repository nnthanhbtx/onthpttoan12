import React, { useState, useEffect, useRef } from 'react';
import { Volume2, ZoomIn, ZoomOut, Lock } from 'lucide-react';
import { Question, UserAnswers } from '../types';
import { MathText } from './MathText';
import { QuestionDiagram } from './QuestionDiagram';

interface MiddlePanelProps {
  question: Question;
  currentQuestionIndex: number;
  sectionQuestionNumber?: number;
  totalQuestions: number;
  currentExamTitle?: string;
  userAnswers: UserAnswers;
  onSelectOptionPartI: (questionId: number, optionKey: 'A' | 'B' | 'C' | 'D') => void;
  onSelectOptionPartII: (questionId: number, statementKey: 'a' | 'b' | 'c' | 'd', value: boolean) => void;
  onChangeAnswerPartIII: (questionId: number, value: string) => void;
  onLockAnswerPartIII?: (questionId: number) => void;
  onPrev: () => void;
  onNext: () => void;
  isTeacherMode: boolean;
  onToggleTeacherMode?: () => void;
  isSubmitted: boolean;
  onOpenOwnerAuth?: () => void;
  isStarted?: boolean;
  violationCount?: number;
  maxViolations?: number;
  onOpenViolationLogs?: () => void;
}

export const MiddlePanel: React.FC<MiddlePanelProps> = ({
  question,
  currentQuestionIndex,
  sectionQuestionNumber,
  totalQuestions,
  currentExamTitle = 'Đề 01',
  userAnswers,
  onSelectOptionPartI,
  onSelectOptionPartII,
  onChangeAnswerPartIII,
  onLockAnswerPartIII,
  onPrev,
  onNext,
  isTeacherMode,
  onToggleTeacherMode,
  isSubmitted,
  isStarted = false,
  violationCount = 0,
  maxViolations = 5,
  onOpenViolationLogs,
}) => {
  const currentAnswer = userAnswers[question.id] || {};
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);
  const [textZoom, setTextZoom] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('thpt2027_text_zoom');
      const parsed = saved ? Number(saved) : 100;
      return !Number.isNaN(parsed) && parsed >= 80 && parsed <= 160 ? parsed : 100;
    } catch {
      return 100;
    }
  });
  const recognitionRef = useRef<any>(null);
  const swipeTouchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  const handleCardTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) {
      swipeTouchStartRef.current = null;
      return;
    }
    const target = e.target as HTMLElement | null;
    if (
      target &&
      (target.closest('.katex-display') ||
        target.closest('input') ||
        target.closest('button') ||
        target.closest('select'))
    ) {
      swipeTouchStartRef.current = null;
      return;
    }
    swipeTouchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
    };
  };

  const handleCardTouchEnd = (e: React.TouchEvent) => {
    if (!swipeTouchStartRef.current || e.changedTouches.length !== 1) return;
    const dx = e.changedTouches[0].clientX - swipeTouchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - swipeTouchStartRef.current.y;
    const dt = Date.now() - swipeTouchStartRef.current.time;
    swipeTouchStartRef.current = null;

    // Horizontal swipe: fast (< 600ms), significant horizontal distance (> 65px), and predominantly horizontal
    if (dt < 600 && Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.85) {
      if (dx < 0 && currentQuestionIndex < totalQuestions - 1) {
        onNext();
      } else if (dx > 0 && currentQuestionIndex > 0) {
        onPrev();
      }
    }
  };

  const adjustTextZoom = (delta: number) => {
    setTextZoom((prev) => {
      const next = delta === 0 ? 100 : Math.min(160, Math.max(85, prev + delta));
      try {
        localStorage.setItem('thpt2027_text_zoom', String(next));
      } catch {}
      return next;
    });
  };

  useEffect(() => {
    // Cancel speaking when question changes
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
      setIsSpeaking(false);
    }
    
    // Stop listening when question changes
    if (isListening && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
      setIsListening(false);
    }

    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        try {
          recognitionRef.current = new SpeechRecognition();
          recognitionRef.current.lang = 'vi-VN';
          recognitionRef.current.continuous = false;
          recognitionRef.current.interimResults = false;

          recognitionRef.current.onresult = (event: any) => {
            if (event.results?.[0]?.[0]?.transcript) {
              const transcript = event.results[0][0].transcript.toLowerCase();
              handleVoiceAnswer(transcript);
            }
            setIsListening(false);
          };
          
          recognitionRef.current.onerror = () => setIsListening(false);
          recognitionRef.current.onend = () => setIsListening(false);
        } catch {
          recognitionRef.current = null;
        }
      }
    }
  }, [question.id]);

  const voiceNoticeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showNotification = (msg: string) => {
    setVoiceNotice(msg);
    if (voiceNoticeTimerRef.current) clearTimeout(voiceNoticeTimerRef.current);
    voiceNoticeTimerRef.current = setTimeout(() => {
      setVoiceNotice(null);
    }, 2800);
  };

  const handleSpeak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      showNotification('Thiết bị không hỗ trợ phát âm thanh đọc đề.');
      return;
    }
    try {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      
      let textToSpeak = question.questionText.replace(/\$[^\$]+\$/g, ' công thức toán học ');
      
      if (question.section === 'PART_I') {
        textToSpeak += '. Các phương án: ';
        question.options?.forEach(opt => {
           textToSpeak += opt.key + '. ' + opt.text.replace(/\$[^\$]+\$/g, ' công thức toán học ') + '. ';
        });
      } else if (question.section === 'PART_II') {
        textToSpeak += '. Các mệnh đề: ';
        question.statements?.forEach(stmt => {
           textToSpeak += stmt.key + '. ' + stmt.text.replace(/\$[^\$]+\$/g, ' công thức toán học ') + '. ';
        });
      }

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      showNotification('Trình duyệt chưa hỗ trợ giọng nói. Vui lòng thử trên Chrome/Edge.');
      return;
    }
    if (isListening) {
      try {
        recognitionRef.current.stop();
      } catch {}
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        showNotification('Đang lắng nghe... Hãy nói đáp án của bạn (Ví dụ: "A", "B", "Đúng", "Sai"...)');
      } catch {
        setIsListening(false);
      }
    }
  };

  const handleVoiceAnswer = (transcript: string) => {
    if (!transcript) return;
    const ans = userAnswers[question.id] || {};
    
    if (question.section === 'PART_I') {
      if (ans.partI !== undefined) {
        showNotification('Câu hỏi này đã chốt đáp án lần đầu, không thể thay đổi!');
        return;
      }
      showNotification(`Đã nhận diện: "${transcript}"`);
      if (transcript.includes('a') || transcript.includes('đáp án a')) onSelectOptionPartI(question.id, 'A');
      else if (transcript.includes('b') || transcript.includes('đáp án b')) onSelectOptionPartI(question.id, 'B');
      else if (transcript.includes('c') || transcript.includes('đáp án c')) onSelectOptionPartI(question.id, 'C');
      else if (transcript.includes('d') || transcript.includes('đáp án d')) onSelectOptionPartI(question.id, 'D');
    }
    else if (question.section === 'PART_II') {
      const isTrue = transcript.includes('đúng');
      const isFalse = transcript.includes('sai');
      if (isTrue || isFalse) {
         if (transcript.includes('a') && ans.partII?.a === undefined) onSelectOptionPartII(question.id, 'a', isTrue);
         if (transcript.includes('b') && ans.partII?.b === undefined) onSelectOptionPartII(question.id, 'b', isTrue);
         if (transcript.includes('c') && ans.partII?.c === undefined) onSelectOptionPartII(question.id, 'c', isTrue);
         if (transcript.includes('d') && ans.partII?.d === undefined) onSelectOptionPartII(question.id, 'd', isTrue);
      }
    }
    else if (question.section === 'PART_III') {
      if (ans.partIIILocked) {
        showNotification('Đáp số câu này đã chốt lần đầu, không thể thay đổi!');
        return;
      }
      const match = transcript.match(/-?\d+([.,]\d+)?/);
      if (match) {
        onChangeAnswerPartIII(question.id, match[0].replace(',', '.'));
        if (onLockAnswerPartIII) onLockAnswerPartIII(question.id);
      } else {
        const numMap: Record<string, string> = { "một": "1", "hai": "2", "ba": "3", "bốn": "4", "năm": "5", "sáu": "6", "bảy": "7", "tám": "8", "chín": "9", "mười": "10", "không": "0" };
        for (const [word, digit] of Object.entries(numMap)) {
           if (transcript.includes(word)) {
              onChangeAnswerPartIII(question.id, digit);
              if (onLockAnswerPartIII) onLockAnswerPartIII(question.id);
              break;
           }
        }
      }
    }
  };

  const baseFontPx = Math.round((17.5 * textZoom) / 100);
  const optionFontPx = Math.round((16.5 * textZoom) / 100);
  const isPartILocked = currentAnswer.partI !== undefined;
  const isPartIIILocked = Boolean(currentAnswer.partIIILocked);

  return (
    <div
      onTouchStart={handleCardTouchStart}
      onTouchEnd={handleCardTouchEnd}
      className="w-full h-full flex flex-col justify-between bg-[#071026] p-3 sm:p-4 rounded-xl border border-[#1e345e] shadow-xl text-slate-100 min-h-0 sm:min-h-[600px] relative select-none"
    >
      {/* Non-intrusive voice feedback toast */}
      {voiceNotice && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40 bg-[#0f244a] border border-cyan-400 text-cyan-200 text-xs px-3 py-1.5 rounded-lg shadow-lg font-medium animate-in fade-in flex items-center gap-1.5 max-w-[90%] text-center">
          <span>🎙️</span>
          <span className="truncate">{voiceNotice}</span>
        </div>
      )}
      <div className="flex flex-col gap-3 sm:gap-3.5">
        {/* ON-SCREEN ANTI-CHEAT PROCTORING STATUS & VIOLATION WARNING BANNER */}
        {isStarted && !isSubmitted && !isTeacherMode && (
          <div>
            {violationCount === 0 ? (
              <div className="w-full py-1.5 px-3 rounded-lg bg-emerald-950/40 border border-emerald-500/50 flex flex-wrap items-center justify-between gap-1.5 text-xs text-emerald-300 shadow-sm">
                <div className="flex items-center gap-1.5 font-medium truncate">
                  <span className="text-sm">🛡️</span>
                  <span className="truncate">
                    Giám sát nghiêm ngặt: <strong className="text-emerald-200">0/{maxViolations} vi phạm</strong>
                  </span>
                </div>
                <span className="text-[11px] text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/40 font-semibold flex items-center gap-1">
                  <Lock size={11} />
                  <span>Chế độ: Chốt đáp án lần đầu</span>
                </span>
              </div>
            ) : (
              <div className="w-full py-2 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-rose-950/95 via-red-900/90 to-rose-950/95 border-2 border-rose-500/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-rose-100 shadow-[0_0_25px_rgba(244,63,94,0.45)]">
                <div className="flex items-center gap-2.5 text-center sm:text-left">
                  <span className="text-xl shrink-0 animate-bounce">🚨</span>
                  <div>
                    <div className="text-rose-200 text-xs sm:text-sm font-black tracking-wide uppercase flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                      <span>CẢNH BÁO VI PHẠM PHÒNG THI</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-600 border border-rose-300 text-white font-black text-xs shadow">
                        {violationCount} / {maxViolations} LẦN
                      </span>
                    </div>
                    <div className="text-[11px] text-rose-300 font-medium">
                      Vi phạm đủ {maxViolations} lần hệ thống sẽ tự động khóa và thu bài thi!
                    </div>
                  </div>
                </div>
                {onOpenViolationLogs && (
                  <button
                    onClick={onOpenViolationLogs}
                    className="shrink-0 px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-black text-[11px] uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(250,204,21,0.4)] border border-amber-300 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Biên bản vi phạm</span>
                    <span>⚠️</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Question Inner Container (Card 1) */}
        <div className="w-full bg-[#08122c] p-2.5 sm:p-3.5 rounded-xl border border-[#1e345e] flex flex-col gap-2.5 sm:gap-3 shadow-inner max-w-full overflow-hidden">
          
          {/* Question Header Capsule Badges & Zoom / Audio Controls */}
          <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {/* Exam Title Badge */}
              <div className="px-2 sm:px-2.5 py-1 rounded-full border border-indigo-400/80 text-indigo-200 text-[10px] sm:text-xs font-bold tracking-wide bg-[#0c1638] flex items-center gap-1">
                <span>📖</span>
                <span className="truncate max-w-[120px] sm:max-w-[200px]">{currentExamTitle}</span>
              </div>

              {/* Question Number Badge */}
              <div className="px-2.5 sm:px-3 py-1 rounded-full border border-amber-400 text-[#facc15] text-[11px] sm:text-xs font-bold tracking-wide bg-[#0a1738] flex items-center gap-1">
                <span>
                  {question.section === 'PART_I'
                    ? `Phần I - Câu ${sectionQuestionNumber ?? question.id}`
                    : question.section === 'PART_II'
                    ? `Phần II - Câu ${sectionQuestionNumber ?? Math.max(1, question.id - 12)}`
                    : `Phần III - Câu ${sectionQuestionNumber ?? Math.max(1, question.id - 16)}`}
                </span>
                <span className="text-slate-400 text-[10px] font-normal">/ {totalQuestions}</span>
              </div>

              {/* Section Title Capsule */}
              <div className="px-2.5 sm:px-3.5 py-1 rounded-full border border-cyan-400 text-cyan-300 text-[11px] sm:text-xs font-bold tracking-wide bg-[#071d3d] truncate max-w-[170px] sm:max-w-none">
                {question.sectionTitle}
              </div>
            </div>
            
            <div className="flex items-center gap-1.5">
              {/* Font size zoom controls for mobile & desktop with generous touch targets */}
              <div className="flex items-center bg-[#0f172a] border border-[#1e345e] rounded-full px-1 py-0.5 text-slate-300">
                <button
                  type="button"
                  onClick={() => adjustTextZoom(-10)}
                  className="min-w-[32px] min-h-[30px] flex items-center justify-center hover:text-amber-300 active:scale-95 transition cursor-pointer"
                  title="Thu nhỏ cỡ chữ đề"
                  aria-label="Thu nhỏ cỡ chữ"
                >
                  <ZoomOut size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => adjustTextZoom(0)}
                  className="px-1.5 min-h-[30px] text-[11px] font-mono font-bold text-amber-300 hover:underline cursor-pointer"
                  title="Đặt lại cỡ chữ 100%"
                >
                  {textZoom}%
                </button>
                <button
                  type="button"
                  onClick={() => adjustTextZoom(10)}
                  className="min-w-[32px] min-h-[30px] flex items-center justify-center hover:text-amber-300 active:scale-95 transition cursor-pointer"
                  title="Phóng to cỡ chữ đề"
                  aria-label="Phóng to cỡ chữ"
                >
                  <ZoomIn size={15} />
                </button>
              </div>

              <button
                onClick={handleSpeak}
                className={`min-w-[34px] min-h-[34px] flex items-center justify-center rounded-full border transition-colors cursor-pointer ${
                  isSpeaking
                    ? 'bg-cyan-900 border-cyan-400 text-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                    : 'bg-[#0f172a] border-[#1e345e] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50'
                }`}
                title="Đọc câu hỏi"
              >
                <Volume2 size={16} />
              </button>
            </div>
          </div>

          {/* Question Text in Times New Roman */}
          <div
            className="exam-serif text-slate-100 leading-relaxed px-0.5 max-w-full overflow-x-auto overflow-y-hidden no-scrollbar"
            style={{ fontSize: `${baseFontPx}px` }}
          >
            <MathText text={question.questionText} />
          </div>

          {/* Diagram / Image Area */}
          {(question.diagramType || question.imageUrl) && (
            <QuestionDiagram type={question.diagramType} imageUrl={question.imageUrl} />
          )}
        </div>

        {/* Answer Options Container (Card 2) */}
        <div className="w-full bg-[#08122c] p-2.5 sm:p-3.5 rounded-xl border border-[#1e345e] flex flex-col gap-2.5 sm:gap-3 shadow-inner max-w-full overflow-hidden">
          {/* Teacher Mode Active Answer Key Banner */}
          {isTeacherMode && (
            <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-950/90 via-emerald-950/80 to-indigo-950/90 border border-emerald-400/70 shadow-md">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="px-2 py-0.5 rounded-md bg-emerald-400 text-slate-950 font-black text-[11px] uppercase tracking-wider shrink-0">
                  👁️ GIÁO VIÊN: BẬT
                </span>
                <span className="font-bold text-emerald-200">
                  {question.section === 'PART_I' && (
                    <>
                      Đáp án đúng: <strong className="text-amber-300 text-sm sm:text-base ml-1">Phương án {question.correctAnswer}</strong>
                    </>
                  )}
                  {question.section === 'PART_II' && (
                    <>
                      Đáp án đúng:{' '}
                      <strong className="text-amber-300 ml-1">
                        {question.statements.map((s) => `${s.key}) ${s.correct ? 'Đúng' : 'Sai'}`).join('  •  ')}
                      </strong>
                    </>
                  )}
                  {question.section === 'PART_III' && (
                    <>
                      Đáp số chuẩn: <strong className="text-amber-300 text-sm sm:text-base ml-1">{question.correctAnswer}</strong>
                    </>
                  )}
                </span>
              </div>
              {onToggleTeacherMode && (
                <button
                  type="button"
                  onClick={onToggleTeacherMode}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-600 text-slate-200 text-[11px] font-bold cursor-pointer transition-colors"
                >
                  Ẩn đáp án (Tắt GV)
                </button>
              )}
            </div>
          )}

          {/* PART I: 2x2 Grid of 4 Multiple Choice Options (A, B, C, D) — Single First-Choice Lock */}
          {question.section === 'PART_I' && (
            <div className="flex flex-col gap-2">
              {isPartILocked && !isSubmitted && !isTeacherMode && (
                <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-amber-950/40 border border-amber-500/40 text-[11px] text-amber-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Lock size={12} className="text-amber-400 shrink-0" />
                    <span>Đã chốt phương án <strong>{currentAnswer.partI}</strong> (Chọn lần đầu duy nhất — không thể thay đổi)</span>
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {question.options.map((opt) => {
                  const isSelected = currentAnswer.partI === opt.key;
                  const isCorrectKey = question.correctAnswer === opt.key;
                  const showResult = isSubmitted || isTeacherMode;
                  const isLockedOut = isPartILocked && !isSelected;

                  let btnClass =
                    'bg-[#0b1b3b] border-[#1e3a6e] text-slate-100 hover:bg-[#122854] hover:border-amber-400/80 cursor-pointer active:scale-[0.98]';

                  if (showResult) {
                    if (isCorrectKey) {
                      btnClass =
                        'bg-emerald-950/90 border-emerald-400 text-emerald-200 font-bold ring-2 ring-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-default';
                    } else if (isSelected && !isCorrectKey) {
                      btnClass =
                        'bg-rose-950/90 border-rose-500 text-rose-200 font-bold cursor-default';
                    } else {
                      btnClass =
                        'bg-[#0b1b3b]/60 border-[#1e3a6e]/60 text-slate-400 opacity-65 cursor-default';
                    }
                  } else if (isSelected) {
                    btnClass =
                      'bg-[#142d5c] border-[#facc15] text-amber-300 font-bold ring-2 ring-amber-400/80 shadow-[0_0_12px_rgba(250,204,21,0.3)] cursor-default';
                  } else if (isLockedOut) {
                    btnClass =
                      'bg-[#071126] border-[#16294d] text-slate-400 opacity-55 cursor-not-allowed';
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      disabled={showResult || isPartILocked}
                      onClick={() => onSelectOptionPartI(question.id, opt.key)}
                      className={`flex items-center justify-between gap-2.5 sm:gap-3 p-3 sm:p-3.5 min-h-[56px] rounded-xl border text-left ${btnClass}`}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        {/* Circle Badge with Letter */}
                        <span
                          className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-full font-extrabold text-sm shadow-sm font-sans ${
                            showResult && isCorrectKey
                              ? 'bg-emerald-400 text-slate-950 ring-2 ring-white/60'
                              : 'bg-[#facc15] text-[#0f172a]'
                          }`}
                        >
                          {opt.key}
                        </span>
                        <span
                          className="exam-serif tracking-wide max-w-full overflow-hidden py-0.5"
                          style={{ fontSize: `${optionFontPx}px` }}
                        >
                          <MathText text={opt.text} />
                        </span>
                      </div>

                      {showResult && isCorrectKey && (
                        <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-sans font-black shadow">
                          <span>✓ ĐÁP ÁN ĐÚNG</span>
                        </span>
                      )}

                      {showResult && isSelected && !isCorrectKey && (
                        <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/30 border border-rose-400 text-rose-200 text-[10px] font-sans font-bold">
                          <span>✗ ĐÃ CHỌN</span>
                        </span>
                      )}

                      {isSelected && !showResult && (
                        <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/60 text-amber-300 text-[10px] font-sans font-bold">
                          <Lock size={10} />
                          <span>Đã chốt</span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* PART II: True / False Statements (a, b, c, d) — Single First-Choice Lock per statement */}
          {question.section === 'PART_II' && (
            <div className="flex flex-col gap-2">
              {question.statements.map((stmt) => {
                const currentVal = currentAnswer.partII?.[stmt.key];
                const isStmtLocked = currentVal !== undefined;
                const showResult = isSubmitted || isTeacherMode;

                // Determine button styles for Đúng and Sai
                let trueBtnClass =
                  'bg-[#0f244a] border-slate-700 text-slate-300 hover:bg-[#183466] cursor-pointer';
                let falseBtnClass =
                  'bg-[#0f244a] border-slate-700 text-slate-300 hover:bg-[#183466] cursor-pointer';

                if (showResult) {
                  if (stmt.correct === true) {
                    trueBtnClass =
                      'bg-emerald-600 border-emerald-300 text-white ring-2 ring-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)] cursor-default';
                    falseBtnClass =
                      currentVal === false
                        ? 'bg-rose-950/90 border-rose-500 text-rose-300 line-through cursor-default'
                        : 'bg-[#0a1630] border-slate-800 text-slate-500 opacity-45 cursor-default';
                  } else {
                    falseBtnClass =
                      'bg-rose-600 border-rose-300 text-white ring-2 ring-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.5)] cursor-default';
                    trueBtnClass =
                      currentVal === true
                        ? 'bg-rose-950/90 border-rose-500 text-rose-300 line-through cursor-default'
                        : 'bg-[#0a1630] border-slate-800 text-slate-500 opacity-45 cursor-default';
                  }
                } else if (isStmtLocked) {
                  if (currentVal === true) {
                    trueBtnClass =
                      'bg-emerald-600 border-emerald-400 text-white shadow-[0_0_10px_rgba(16,185,129,0.4)] cursor-default';
                    falseBtnClass =
                      'bg-[#0a1630] border-slate-800 text-slate-500 opacity-50 cursor-not-allowed';
                  } else {
                    falseBtnClass =
                      'bg-rose-600 border-rose-400 text-white shadow-[0_0_10px_rgba(244,63,94,0.4)] cursor-default';
                    trueBtnClass =
                      'bg-[#0a1630] border-slate-800 text-slate-500 opacity-50 cursor-not-allowed';
                  }
                }

                return (
                  <div
                    key={stmt.key}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-2.5 sm:p-3 rounded-lg border gap-2 transition-all ${
                      showResult
                        ? stmt.correct
                          ? 'bg-emerald-950/25 border-emerald-500/50'
                          : 'bg-rose-950/25 border-rose-500/50'
                        : 'bg-[#0b1b3b] border-[#1e3a6e]'
                    }`}
                  >
                    <div
                      className="exam-serif flex items-start gap-1.5 text-slate-100 pr-1 max-w-full overflow-hidden py-0.5 leading-relaxed"
                      style={{ fontSize: `${optionFontPx}px` }}
                    >
                      <span className="font-bold text-[#facc15] shrink-0">
                        {stmt.key})
                      </span>
                      <span>
                        <MathText text={stmt.text} />
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto shrink-0 mt-1.5 sm:mt-0">
                      <button
                        type="button"
                        disabled={showResult || isStmtLocked}
                        onClick={() =>
                          onSelectOptionPartII(question.id, stmt.key, true)
                        }
                        className={`px-3.5 py-2.5 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold border min-h-[46px] sm:min-h-[40px] min-w-[84px] flex items-center justify-center gap-1.5 ${trueBtnClass}`}
                      >
                        {!showResult && currentVal === true && <Lock size={12} />}
                        {showResult && stmt.correct === true && <span>✓</span>}
                        <span>Đúng</span>
                      </button>
                      <button
                        type="button"
                        disabled={showResult || isStmtLocked}
                        onClick={() =>
                          onSelectOptionPartII(question.id, stmt.key, false)
                        }
                        className={`px-3.5 py-2.5 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold border min-h-[46px] sm:min-h-[40px] min-w-[84px] flex items-center justify-center gap-1.5 ${falseBtnClass}`}
                      >
                        {!showResult && currentVal === false && <Lock size={12} />}
                        {showResult && stmt.correct === false && <span>✓</span>}
                        <span>Sai</span>
                      </button>

                      {showResult && (
                        <span
                          className={`col-span-2 sm:col-span-1 text-center text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs ${
                            stmt.correct
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-500'
                              : 'bg-rose-950 text-rose-300 border border-rose-500'
                          }`}
                        >
                          Đáp án: {stmt.correct ? 'Đúng' : 'Sai'}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* PART III: Short Answer Input Box — Single First-Choice Lock */}
          {question.section === 'PART_III' && (
            <div className="flex flex-col items-center justify-center p-3 sm:p-3.5 bg-[#0b1b3b] rounded-lg border border-[#1e3a6e] gap-2.5">
              <label className="text-xs sm:text-sm font-semibold text-amber-300 text-center">
                Nhập đáp số (Nhấn Chốt đáp số hoặc Enter để khóa lựa chọn lần đầu):
              </label>
              <div className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  disabled={isSubmitted || isPartIIILocked}
                  readOnly={isSubmitted || isPartIIILocked}
                  value={currentAnswer.partIII || ''}
                  onChange={(e) =>
                    onChangeAnswerPartIII(question.id, e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (currentAnswer.partIII || '').trim() !== '' && onLockAnswerPartIII) {
                      onLockAnswerPartIII(question.id);
                    }
                  }}
                  placeholder={isTeacherMode ? `Đáp án chuẩn: ${question.correctAnswer}` : 'Nhập đáp số...'}
                  className={`exam-serif flex-1 py-2.5 px-4 rounded-lg border-2 text-center font-bold text-lg focus:outline-none transition-all shadow-inner ${
                    isPartIIILocked
                      ? 'bg-[#091834] border-amber-400 text-amber-300 cursor-not-allowed'
                      : 'bg-[#040a1c] border-cyan-500/80 text-amber-300 focus:border-amber-400 placeholder:text-slate-500'
                  }`}
                />

                {!isSubmitted && !isTeacherMode && (
                  <button
                    type="button"
                    disabled={isPartIIILocked || !(currentAnswer.partIII || '').trim()}
                    onClick={() => onLockAnswerPartIII && onLockAnswerPartIII(question.id)}
                    className={`px-4 py-2.5 min-h-[44px] rounded-lg font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all border ${
                      isPartIIILocked
                        ? 'bg-amber-950/60 border-amber-400/70 text-amber-300 cursor-default'
                        : (currentAnswer.partIII || '').trim()
                        ? 'bg-gradient-to-b from-amber-400 to-yellow-500 text-slate-950 border-amber-300 hover:brightness-110 cursor-pointer shadow-md'
                        : 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <Lock size={13} />
                    <span>{isPartIIILocked ? 'ĐÃ CHỐT' : 'CHỐT ĐÁP SỐ'}</span>
                  </button>
                )}
              </div>

              {/* Built-in 1-Tap Touch Math & Number Keypad for iPhone X-18 & Mobile (Zero keyboard lag) */}
              {!isSubmitted && !isPartIIILocked && (
                <div className="w-full max-w-md flex flex-col gap-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 px-0.5">
                    <span>📱 Bàn phím toán 1 chạm (Hỗ trợ iPhone X – 18):</span>
                    <span className="text-amber-300/90 font-semibold">Chạm nhanh không cần mở phím ảo</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1.5">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((digit) => (
                      <button
                        key={digit}
                        type="button"
                        onClick={() => {
                          const cur = currentAnswer.partIII || '';
                          onChangeAnswerPartIII(question.id, cur + digit);
                        }}
                        className="min-h-[42px] rounded-lg bg-[#102348] hover:bg-[#193569] border border-[#2a4a82] text-white font-mono font-extrabold text-sm sm:text-base flex items-center justify-center shadow-xs cursor-pointer"
                      >
                        {digit}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        const cur = (currentAnswer.partIII || '').trim();
                        const next = cur.startsWith('-') ? cur.slice(1) : `-${cur}`;
                        onChangeAnswerPartIII(question.id, next);
                      }}
                      className="min-h-[42px] rounded-lg bg-[#0f244a] hover:bg-[#183566] border border-cyan-500/50 text-amber-300 font-mono font-extrabold text-xs sm:text-sm flex items-center justify-center cursor-pointer"
                      title="Thêm hoặc bỏ dấu âm (-)"
                    >
                      ±(-)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const cur = currentAnswer.partIII || '';
                        if (!cur.includes('.') && !cur.includes(',')) {
                          onChangeAnswerPartIII(question.id, (cur || '0') + '.');
                        }
                      }}
                      className="min-h-[42px] rounded-lg bg-[#0f244a] hover:bg-[#183566] border border-cyan-500/50 text-amber-300 font-mono font-extrabold text-base flex items-center justify-center cursor-pointer"
                      title="Dấu chấm thập phân (.)"
                    >
                      .
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const cur = currentAnswer.partIII || '';
                        if (!cur.includes('/')) {
                          onChangeAnswerPartIII(question.id, cur + '/');
                        }
                      }}
                      className="min-h-[42px] rounded-lg bg-[#0f244a] hover:bg-[#183566] border border-cyan-500/50 text-amber-300 font-mono font-extrabold text-sm flex items-center justify-center cursor-pointer"
                      title="Dấu phân số (/)"
                    >
                      /
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const cur = currentAnswer.partIII || '';
                        onChangeAnswerPartIII(question.id, cur.slice(0, -1));
                      }}
                      className="min-h-[42px] rounded-lg bg-rose-950/70 hover:bg-rose-900/90 border border-rose-500/50 text-rose-200 font-bold text-xs flex items-center justify-center cursor-pointer"
                      title="Xóa 1 ký tự"
                    >
                      ⌫
                    </button>
                  </div>
                </div>
              )}

              {isPartIIILocked && !isSubmitted && !isTeacherMode && (
                <div className="text-[11px] text-amber-300 font-semibold flex items-center gap-1">
                  <Lock size={12} className="text-amber-400" />
                  <span>Đã chốt đáp số lần đầu: <strong>{currentAnswer.partIII}</strong> (Không thể thay đổi)</span>
                </div>
              )}

              {(isSubmitted || isTeacherMode) && (
                <div className="exam-serif text-center text-sm sm:text-base text-emerald-300 font-bold bg-emerald-950/80 py-1.5 px-5 rounded-lg border border-emerald-400/60 shadow-sm">
                  ✓ Đáp án chuẩn: <MathText text={question.correctAnswer} />
                </div>
              )}
            </div>
          )}

          {/* Teacher Mode Step-by-Step Explanation Drawer */}
          {(isTeacherMode || isSubmitted) && (
            <div className="p-3 sm:p-4 bg-gradient-to-b from-indigo-950/85 to-[#061029] rounded-xl border border-indigo-400/60 space-y-2 text-slate-100 mt-1 shadow-lg">
              <div className="flex items-center justify-between border-b border-indigo-500/30 pb-1.5">
                <span className="font-extrabold text-[#facc15] uppercase tracking-wider block text-xs sm:text-sm">
                  💡 {isTeacherMode ? 'Hướng dẫn giải chi tiết (Chế độ Giáo Viên):' : 'Hướng dẫn giải chi tiết:'}
                </span>
                <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                  {question.section === 'PART_I'
                    ? `Chọn ${question.correctAnswer}`
                    : question.section === 'PART_II'
                    ? question.statements.map((s) => `${s.key}-${s.correct ? 'Đ' : 'S'}`).join(', ')
                    : `Đáp số: ${question.correctAnswer}`}
                </span>
              </div>
              <div
                className="exam-serif leading-relaxed whitespace-pre-line text-slate-100 overflow-x-auto pt-0.5"
                style={{ fontSize: `${optionFontPx}px` }}
              >
                <MathText text={question.explanation} />
              </div>
            </div>
          )}

          {/* Navigation Buttons (Bottom inside MiddlePanel) */}
          <div className="flex flex-col gap-1.5 mt-1">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <button
                onClick={onPrev}
                disabled={currentQuestionIndex === 0}
                className="w-full py-3 px-3 rounded-xl font-extrabold text-white text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-b from-[#64748b] via-[#475569] to-[#334155] hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed shadow-md border border-slate-400/30 cursor-pointer min-h-[48px] flex items-center justify-center gap-1.5"
              >
                <span>◀</span>
                <span>CÂU TRƯỚC</span>
              </button>

              <button
                onClick={onNext}
                disabled={currentQuestionIndex === totalQuestions - 1}
                className="w-full py-3 px-3 rounded-xl font-extrabold text-[#0f172a] text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-b from-[#fde047] via-[#facc15] to-[#eab308] hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed shadow-md border border-amber-300/80 cursor-pointer min-h-[48px] flex items-center justify-center gap-1.5"
              >
                <span>CÂU TIẾP</span>
                <span>▶</span>
              </button>
            </div>
            <div className="text-center text-[11px] text-slate-400 lg:hidden">
              ⇄ Mẹo: Vuốt ngang trái / phải trên câu hỏi để chuyển câu nhanh
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
