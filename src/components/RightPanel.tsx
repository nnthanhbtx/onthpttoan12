import React from 'react';
import { TestResult, Question, UserAnswers } from '../types';
import { soundFx } from '../utils/sound';

interface RightPanelProps {
  questions?: Question[];
  currentQuestionId?: number;
  onSelectQuestion?: (id: number) => void;
  userAnswers?: UserAnswers;
  testResult: TestResult;
  isTeacherMode: boolean;
  isOwnerAuthenticated?: boolean;
  onOpenOwnerAuth?: () => void;
  currentExamTitle?: string;
  onOpenExamBank?: () => void;
}

export const RightPanel: React.FC<RightPanelProps> = ({
  testResult,
  isTeacherMode,
  questions = [],
  currentQuestionId = 1,
  onSelectQuestion = (id: number) => {},
  userAnswers = {},
  isOwnerAuthenticated = false,
  onOpenOwnerAuth,
  currentExamTitle = 'Đề 01',
  onOpenExamBank,
}) => {

  // Check if question is answered
  const isQuestionAnswered = (id: number) => {
    const ans = userAnswers[id];
    if (!ans) return false;
    if (ans.partI !== undefined) return true;
    if (ans.partII && Object.keys(ans.partII).length > 0) return true;
    if (ans.partIII !== undefined && ans.partIII.trim() !== '') return true;
    return false;
  };

  const handleQuestionClick = (id: number) => {
    soundFx.playClick();
    onSelectQuestion(id);
  };

  const getShortAnswerLabel = (q: Question): string => {
    if (q.section === 'PART_I') {
      return q.correctAnswer;
    }
    if (q.section === 'PART_II') {
      return q.statements.map((s) => (s.correct ? 'Đ' : 'S')).join('');
    }
    return String(q.correctAnswer).slice(0, 5);
  };

  const renderGrid = (start: number, end: number, sectionType: 'PART_I' | 'PART_II' | 'PART_III') => {
    const gridQs = questions.filter((q) => q.id >= start && q.id <= end);
    const showKey = isTeacherMode || testResult.submitted;
    return (
      <div className="grid grid-cols-4 gap-1.5 mt-2">
        {gridQs.map((q) => {
          const qId = q.id;
          const isSelected = qId === currentQuestionId;
          const answered = isQuestionAnswered(qId);
          let buttonStyle = 'bg-[#0a1630] text-slate-200 border-[#1e345e] hover:bg-[#12244a]';

          if (isSelected) {
            buttonStyle =
              'bg-[#facc15] text-[#0f172a] font-extrabold ring-2 ring-amber-300 border-amber-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]';
          } else if (isTeacherMode) {
            buttonStyle = 'bg-emerald-950/70 text-emerald-200 border-emerald-500/70 hover:bg-emerald-900/80 font-bold';
          } else if (answered) {
            buttonStyle = 'bg-[#10284e] text-emerald-300 border-emerald-500/60 font-bold';
          }

          const relativeNum =
            sectionType === 'PART_I'
              ? qId
              : sectionType === 'PART_II'
              ? qId - 12
              : qId - 16;

          const ansLabel = showKey ? getShortAnswerLabel(q) : '';

          return (
            <button
              key={qId}
              onClick={() => handleQuestionClick(qId)}
              className={`relative ${
                showKey ? 'min-h-[46px] flex-col py-1' : 'min-h-[42px] sm:min-h-[36px]'
              } rounded-lg border flex items-center justify-center text-xs sm:text-sm cursor-pointer font-bold ${buttonStyle}`}
              title={`Câu ${relativeNum} (${q.sectionTitle})${showKey ? ` - Đáp án: ${ansLabel}` : ''}`}
            >
              <span className="leading-tight">{relativeNum}</span>
              {showKey && (
                <span
                  className={`text-[9px] font-mono leading-none px-1 rounded ${
                    isSelected ? 'text-slate-950 font-black' : 'text-amber-300 font-extrabold'
                  }`}
                >
                  {ansLabel}
                </span>
              )}
              {!isSelected && answered && !showKey && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400" />
              )}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#071026] p-4 rounded-xl border border-[#1e345e] shadow-xl text-slate-100">
      <div className="flex flex-col gap-3.5">
        {/* Exam Info Title */}
        <div>
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#1e345e]/80">
            <h2 className="text-sm sm:text-base font-extrabold text-[#facc15] tracking-wider uppercase">
              THÔNG TIN BÀI THI
            </h2>
          </div>

          {/* Status Legend */}
          <div className="mb-2.5 flex items-center justify-between px-2 py-1.5 rounded-lg bg-[#040a1c] border border-[#1e345e]/60 text-[10px] text-slate-300">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#facc15] inline-block" />
              <span>Đang xem</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#10284e] border border-emerald-400 inline-block" />
              <span>Đã làm</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#0a1630] border border-[#1e345e] inline-block" />
              <span>Chưa làm</span>
            </span>
          </div>

          <div className="text-xs space-y-3 text-slate-200 font-medium leading-relaxed bg-[#08122c] p-3 rounded-xl border border-[#1e345e]">
            <div>
              <div className="flex items-start justify-between mb-1">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#facc15] font-bold">•</span>
                  <strong className="text-amber-300">Phần I (12 câu):</strong>
                </span>
                <span className="text-[11px] text-slate-400">Trắc nghiệm ABCD</span>
              </div>
              {questions.length > 0 && renderGrid(1, 12, 'PART_I')}
            </div>
            
            <div className="pt-2 border-t border-[#1e345e]/60">
              <div className="flex items-start justify-between mb-1">
                <span className="flex items-center gap-1.5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <strong className="text-cyan-300">Phần II (4 câu):</strong>
                </span>
                <span className="text-[11px] text-slate-400">Đúng / Sai</span>
              </div>
              {questions.length > 0 && renderGrid(13, 16, 'PART_II')}
            </div>

            <div className="pt-2 border-t border-[#1e345e]/60">
              <div className="flex items-start justify-between mb-1">
                <span className="flex items-center gap-1.5">
                  <span className="text-rose-400 font-bold">•</span>
                  <strong className="text-rose-300">Phần III (6 câu):</strong>
                </span>
                <span className="text-[11px] text-slate-400">Trả lời ngắn</span>
              </div>
              {questions.length > 0 && renderGrid(17, 22, 'PART_III')}
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="text-center pt-2.5 border-t border-[#1e345e]">
          <h3 className="text-xs sm:text-sm font-extrabold text-[#facc15] tracking-wider uppercase mb-2">
            KẾT QUẢ BÀI THI
          </h3>

          {!testResult.submitted ? (
            <p className="text-xs text-slate-400 font-medium py-1.5">
              Chưa nộp bài
            </p>
          ) : (
            <div className="bg-[#08122c] p-3 rounded-xl border border-emerald-500/40 text-left space-y-2">
              <div className="text-center pb-2 border-b border-slate-700/60">
                <span className="text-2xl font-black text-amber-300 font-mono tabular-nums">
                  {testResult.score.toFixed(1)} / 10
                </span>
                <p className="text-[11px] text-emerald-400 font-bold mt-0.5">
                  Đã hoàn thành bài thi!
                </p>
              </div>
              <div className="text-xs space-y-1 text-slate-300">
                <p className="flex justify-between">
                  <span>• Phần I:</span>
                  <span className="font-bold font-mono text-white tabular-nums">{testResult.totalCorrectPartI}/12 câu</span>
                </p>
                <p className="flex justify-between">
                  <span>• Phần II:</span>
                  <span className="font-bold font-mono text-white tabular-nums">{testResult.totalCorrectPartII}/4 câu</span>
                </p>
                <p className="flex justify-between">
                  <span>• Phần III:</span>
                  <span className="font-bold font-mono text-white tabular-nums">{testResult.totalCorrectPartIII}/6 câu</span>
                </p>
                <p className="pt-1.5 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
                  <span>Rời màn hình:</span>
                  {testResult.violationCount === 0 ? (
                    <span className="text-emerald-400 font-bold">0 lần (Hợp lệ)</span>
                  ) : (
                    <span className="text-rose-400 font-bold">⚠️ {testResult.violationCount} lần</span>
                  )}
                </p>
              </div>
            </div>
          )}

          {isTeacherMode && (
            <div className="mt-3 p-2.5 bg-indigo-950/70 border border-indigo-500/40 rounded-lg text-left">
              <span className="text-[11px] font-bold text-indigo-300 uppercase block mb-0.5">
                Chế độ Giáo Viên:
              </span>
              <p className="text-[11px] text-slate-300 leading-tight">
                Đang hiển thị đáp án chi tiết và hướng dẫn giải cho toàn bộ 22 câu hỏi.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Developer Info at Bottom Right (Clickable for owner login) */}
      <div 
        onClick={onOpenOwnerAuth}
        className="pt-3 border-t border-[#1e345e]/80 text-right text-slate-300 text-[11px] font-medium leading-tight space-y-0.5 cursor-pointer select-none hover:text-amber-300 transition-colors"
        title={isOwnerAuthenticated ? "Quản lý quyền Chủ Tài Khoản" : "Hệ thống Ôn thi THPT 2027"}
      >
        <p className="font-bold text-slate-200 hover:text-amber-300 flex items-center justify-end gap-1">
          {isOwnerAuthenticated && <span className="text-xs">👑</span>}
          <span>GV Thanhbtx-mn</span>
        </p>
        <p className="text-slate-400">Ôn thi THPT 2027</p>
      </div>
    </div>
  );
};
