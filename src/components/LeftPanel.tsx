import React from 'react';
import { BookOpen, Trophy, Play, CheckCircle2, FileUp, Eye, RotateCcw, Award, Volume2, VolumeX } from 'lucide-react';
import { UserAnswers, ExamRecord, Question } from '../types';
import { PWAInstallButton } from './PWAWidgets';

interface LeftPanelProps {
  currentQuestionId: number;
  onSelectQuestion: (id: number) => void;
  timeRemainingSeconds: number;
  onSubmit: () => void;
  onStart?: () => void;
  onReset?: () => void;
  onOpenResultModal?: () => void;
  isStarted?: boolean;
  onToggleFullscreen: () => void;
  onToggleTeacherMode: () => void;
  isTeacherMode: boolean;
  onToggleSound?: () => void;
  isSoundEnabled?: boolean;
  onOpenWordImport: () => void;
  onOpenExamBank?: () => void;
  currentExamTitle?: string;
  userAnswers: UserAnswers;
  questions: Question[];
  isSubmitted: boolean;
  examHistory?: ExamRecord[];
  onSelectHistoryExam?: (exam: ExamRecord) => void;
  currentExamId?: number;
  onOpenLeaderboard?: () => void;
  isOwnerAuthenticated?: boolean;
  onOpenOwnerAuth?: () => void;
  onLogoutOwner?: () => void;
  violationCount?: number;
  onOpenViolationLogs?: () => void;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({
  timeRemainingSeconds,
  onSubmit,
  onStart,
  onReset,
  onOpenResultModal,
  isStarted = true,
  onToggleTeacherMode,
  isTeacherMode,
  onToggleSound,
  isSoundEnabled = true,
  onOpenWordImport,
  onOpenExamBank,
  userAnswers,
  questions,
  isSubmitted = false,
  examHistory = [],
  onOpenLeaderboard,
  isOwnerAuthenticated = false,
  onOpenOwnerAuth,
  violationCount = 0,
  onOpenViolationLogs,
}) => {
  // Format seconds to MM:SS
  const minutes = Math.floor(timeRemainingSeconds / 60);
  const seconds = timeRemainingSeconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Calculate answered count
  const answeredCount = questions.filter((q) => {
    const ans = userAnswers[q.id];
    if (!ans) return false;
    if (ans.partI !== undefined) return true;
    if (ans.partII && Object.keys(ans.partII).length > 0) return true;
    if (ans.partIII !== undefined && ans.partIII.trim() !== '') return true;
    return false;
  }).length;
  const progressPercent = questions.length > 0 ? Math.round((answeredCount / questions.length) * 100) : 0;

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#071026] p-4 rounded-xl border border-[#1e345e] shadow-xl text-slate-100">
      <div className="flex flex-col gap-3.5">
        {/* Owner Quick Status Badge (ONLY visible when authenticated as owner) */}
        {isOwnerAuthenticated && (
          <div className="flex items-center justify-end">
            <button
              onClick={onOpenOwnerAuth}
              className="px-2.5 py-1 rounded-lg bg-amber-400/15 border border-amber-400/70 text-amber-300 text-xs font-bold flex items-center gap-1.5 hover:bg-amber-400/25 transition cursor-pointer"
              title="Quản lý quyền Chủ Tài Khoản"
            >
              <span>👑</span>
              <span>Chủ Tài Khoản</span>
            </button>
          </div>
        )}

        {/* Title */}
        <div className="text-center pb-2 border-b border-[#1e345e]/80">
          <h2 className="text-sm sm:text-base font-extrabold text-[#facc15] tracking-wider uppercase">
            BẢNG ĐIỀU KHIỂN
          </h2>
        </div>

        {/* Countdown Timer Display Box - ONLY visible after student clicks Start */}
        {isStarted && (
          <div className="w-full bg-[#030712] border border-amber-400/70 rounded-xl py-3 px-3 flex flex-col items-center justify-center shadow-inner animate-in fade-in duration-200">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
              {isSubmitted ? 'Trạng thái bài thi' : 'Thời gian còn lại'}
            </span>
            {isSubmitted ? (
              <span className="text-base font-extrabold text-emerald-400 tracking-wide uppercase">
                ✓ Đã nộp bài ({formattedTime} còn lại)
              </span>
            ) : (
              <span className="text-3xl font-extrabold text-[#facc15] font-mono tabular-nums tracking-widest">
                {formattedTime}
              </span>
            )}
          </div>
        )}

        {/* Progress Summary Box */}
        <div className="bg-[#0a1630] border border-[#1e345e] rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-semibold">Tiến độ làm bài</span>
            <span className="font-mono font-bold text-amber-300 tabular-nums">
              {answeredCount}/{questions.length} câu ({progressPercent}%)
            </span>
          </div>
          <div className="w-full h-2 bg-[#040a1c] rounded-full overflow-hidden border border-[#1e345e]/60">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Vertical Action Buttons */}
        <div className="flex flex-col gap-2.5 pt-0.5">
          {/* Button: NGÂN HÀNG ĐỀ */}
          {onOpenExamBank && (
            <button
              onClick={onOpenExamBank}
              className="w-full py-2.5 px-3.5 rounded-xl font-bold text-white text-xs tracking-wider uppercase bg-gradient-to-b from-[#4f46e5] to-[#3730a3] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-indigo-400/50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <BookOpen size={15} className="text-amber-300 shrink-0" />
              <span>NGÂN HÀNG ĐỀ ({examHistory.length})</span>
            </button>
          )}

          {/* Button: LEADERBOARD */}
          {onOpenLeaderboard && (
            <button
              onClick={onOpenLeaderboard}
              className="w-full py-2.5 px-3.5 rounded-xl font-extrabold text-slate-950 text-xs tracking-wider uppercase bg-gradient-to-b from-[#fde047] via-[#facc15] to-[#eab308] hover:brightness-105 active:scale-[0.98] transition-all shadow-md border border-amber-300/80 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Trophy size={15} className="text-slate-950 shrink-0" />
              <span>BẢNG XẾP HẠNG</span>
            </button>
          )}

          {/* Button: BẮT ĐẦU / NỘP BÀI / XEM KẾT QUẢ & LÀM LẠI */}
          {!isStarted ? (
            <button
              onClick={onStart}
              className="w-full py-2.5 px-3.5 rounded-xl font-bold text-white text-xs tracking-wider uppercase bg-gradient-to-b from-[#16a34a] to-[#15803d] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-emerald-400/50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Play size={15} className="fill-current shrink-0" />
              <span>BẮT ĐẦU LÀM BÀI</span>
            </button>
          ) : isSubmitted ? (
            <div className="grid grid-cols-2 gap-2">
              {onOpenResultModal && (
                <button
                  onClick={onOpenResultModal}
                  className="w-full py-2.5 px-2.5 rounded-xl font-extrabold text-slate-950 text-[11px] tracking-wider uppercase bg-gradient-to-b from-[#fde047] to-[#eab308] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-amber-300/80 cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Award size={14} className="shrink-0" />
                  <span>XEM ĐIỂM</span>
                </button>
              )}
              {onReset && (
                <button
                  onClick={onReset}
                  className="w-full py-2.5 px-2.5 rounded-xl font-bold text-white text-[11px] tracking-wider uppercase bg-gradient-to-b from-[#f43f5e] to-[#be123c] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-rose-400/50 cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <RotateCcw size={14} className="shrink-0" />
                  <span>LÀM LẠI</span>
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={onSubmit}
              className="w-full py-2.5 px-3.5 rounded-xl font-bold text-white text-xs tracking-wider uppercase bg-gradient-to-b from-[#ea580c] to-[#c2410c] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-orange-400/50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <CheckCircle2 size={15} className="shrink-0" />
              <span>NỘP BÀI THI</span>
            </button>
          )}

          {/* Button: TẠO ĐỀ BẰNG FILE WORD */}
          <button
            onClick={onOpenWordImport}
            className="w-full py-2.5 px-3.5 rounded-xl font-bold text-white text-xs tracking-wider uppercase bg-gradient-to-b from-[#0284c7] to-[#0369a1] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-sky-400/50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <FileUp size={15} className="shrink-0" />
            <span>TẠO ĐỀ BẰNG FILE WORD</span>
          </button>

          {/* Button: CHẾ ĐỘ GIÁO VIÊN (GIÁO VIÊN: BẬT) */}
          <button
            onClick={onToggleTeacherMode}
            className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-white text-xs tracking-wider uppercase bg-gradient-to-b ${
              isTeacherMode
                ? 'from-[#6366f1] to-[#4f46e5] border-indigo-300 ring-2 ring-indigo-400/80'
                : 'from-[#475569] to-[#334155] border-slate-400/50'
            } hover:brightness-110 active:scale-[0.98] transition-all shadow-md border cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap`}
          >
            <Eye size={15} className="shrink-0" />
            <span>{isTeacherMode ? 'GIÁO VIÊN: BẬT' : 'CHẾ ĐỘ GIÁO VIÊN'}</span>
          </button>

          {/* Button: ÂM THANH PHẢN HỒI */}
          {onToggleSound && (
            <button
              type="button"
              onClick={onToggleSound}
              className={`w-full py-2 px-3 rounded-xl font-bold text-xs tracking-wider uppercase border cursor-pointer flex items-center justify-center gap-2 transition-all ${
                isSoundEnabled
                  ? 'bg-[#0a1630] border-cyan-500/50 text-cyan-300 hover:bg-[#102247]'
                  : 'bg-[#070f22] border-slate-600/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              {isSoundEnabled ? <Volume2 size={14} className="shrink-0" /> : <VolumeX size={14} className="shrink-0" />}
              <span>{isSoundEnabled ? 'ÂM THANH: BẬT' : 'ÂM THANH: TẮT'}</span>
            </button>
          )}

          {/* CÀI ĐẶT APP DÙNG OFFLINE (PWA) */}
          <PWAInstallButton />

          {/* GIÁM SÁT THI / ANTI-CHEAT STATUS */}
          {isStarted && !isSubmitted && !isTeacherMode && (
            <div
              className={`w-full py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                violationCount === 0
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                  : 'bg-rose-950/70 border-rose-500 text-rose-200 shadow-sm'
              }`}
            >
              <span className="flex items-center gap-1.5 truncate">
                <span>{violationCount === 0 ? '🛡️' : '🚨'}</span>
                <span className="truncate">
                  {violationCount === 0 ? 'Giám sát: Hợp lệ' : `Vi phạm: ${violationCount} lần`}
                </span>
              </span>
              {violationCount > 0 && onOpenViolationLogs && (
                <button
                  onClick={onOpenViolationLogs}
                  className="text-[10px] bg-rose-800/80 hover:bg-rose-700 px-2 py-0.5 rounded text-white border border-rose-400/60 font-semibold cursor-pointer shrink-0 ml-1"
                >
                  Chi tiết
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Exam Structure Quick Reference Footer */}
      <div className="mt-4 pt-3 border-t border-[#1e345e]/80 text-[11px] text-slate-400 space-y-1">
        <div className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">
          Cấu trúc đề chuẩn 2027:
        </div>
        <div className="flex justify-between">
          <span>• Phần I (4 lựa chọn):</span>
          <span className="font-mono text-slate-300 tabular-nums">12 câu (3,0đ)</span>
        </div>
        <div className="flex justify-between">
          <span>• Phần II (Đúng/Sai):</span>
          <span className="font-mono text-slate-300 tabular-nums">04 câu (4,0đ)</span>
        </div>
        <div className="flex justify-between">
          <span>• Phần III (Trả lời ngắn):</span>
          <span className="font-mono text-slate-300 tabular-nums">06 câu (3,0đ)</span>
        </div>
      </div>
    </div>
  );
};
