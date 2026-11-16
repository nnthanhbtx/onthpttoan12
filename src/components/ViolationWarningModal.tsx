import React from 'react';
import { AlertTriangle, ShieldAlert, Clock, ArrowRight } from 'lucide-react';
import { ViolationLog } from '../types';

interface ViolationWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  violationCount: number;
  maxViolations?: number;
  latestViolationReason: string;
  violationLogs: ViolationLog[];
  isAutoSubmitted?: boolean;
}

export const ViolationWarningModal: React.FC<ViolationWarningModalProps> = ({
  isOpen,
  onClose,
  violationCount,
  maxViolations = 5,
  latestViolationReason,
  violationLogs,
  isAutoSubmitted = false,
}) => {
  if (!isOpen) return null;

  const getSeverityInfo = (count: number) => {
    if (count >= maxViolations || isAutoSubmitted) {
      return {
        level: `VI PHẠM TỐI ĐA (${count}/${maxViolations} LẦN) — ĐÃ THU BÀI TỰ ĐỘNG`,
        textColor: 'text-rose-300',
        borderColor: 'border-rose-500',
        bgColor: 'bg-rose-950/80',
        message:
          'Bạn đã vượt quá giới hạn vi phạm quy chế phòng thi (5/5 lần). Hệ thống giám sát đã tự động khóa và thu bài thi của bạn, đồng thời ghi nhận toàn bộ lịch sử vi phạm vào kết quả!',
      };
    }
    if (count === 1) {
      return {
        level: `Cảnh báo vi phạm lần 1 (${count}/${maxViolations})`,
        textColor: 'text-amber-300',
        borderColor: 'border-amber-500',
        bgColor: 'bg-amber-950/50',
        message:
          'Hệ thống đã ghi nhận lần vi phạm đầu tiên. Vui lòng giữ nguyên màn hình bài thi, không chuyển tab, không mở cửa sổ khác hoặc sao chép đề thi.',
      };
    }
    if (count === 2) {
      return {
        level: `Cảnh báo nghiêm trọng lần 2 (${count}/${maxViolations})`,
        textColor: 'text-orange-300',
        borderColor: 'border-orange-500',
        bgColor: 'bg-orange-950/55',
        message:
          'Hệ thống đã lưu biên bản thời điểm và hành vi vi phạm vào hồ sơ bài thi. Nếu tiếp tục vi phạm đủ 5 lần, bài thi sẽ bị thu tự động!',
      };
    }
    return {
      level: `BÁO ĐỘNG ĐỎ: Vi phạm lần ${count}/${maxViolations} (Còn ${Math.max(0, maxViolations - count)} lần trước khi thu bài)`,
      textColor: 'text-rose-300',
      borderColor: 'border-rose-500',
      bgColor: 'bg-rose-950/70',
      message:
        'Cảnh báo khẩn cấp! Bạn đang ở ngưỡng vi phạm quy chế rất cao. Nếu tái phạm đủ 5 lần, hệ thống sẽ lập tức khóa và nộp bài thi tự động!',
    };
  };

  const severity = getSeverityInfo(violationCount);
  const progressRatio = Math.min(100, Math.round((violationCount / maxViolations) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#0c0d1e] border-2 border-rose-500/90 rounded-2xl p-5 sm:p-6 shadow-[0_0_50px_rgba(244,63,94,0.45)] text-slate-100 flex flex-col gap-4 relative overflow-hidden">
        {/* Glow Header Accent */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-rose-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Warning Icon & Title Header */}
        <div className="flex flex-col items-center text-center gap-2 border-b border-slate-800 pb-3">
          <div className="w-14 h-14 rounded-full bg-rose-950/80 border-2 border-rose-500 flex items-center justify-center text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.5)] animate-bounce">
            <ShieldAlert size={32} />
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-rose-400 tracking-wide font-serif uppercase drop-shadow">
            {violationCount >= maxViolations || isAutoSubmitted
              ? 'ĐÃ TỰ ĐỘNG THU BÀI DO VI PHẠM!'
              : 'CẢNH BÁO VI PHẠM QUY CHẾ THI!'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Hệ thống giám sát phòng thi vừa phát hiện thao tác không hợp lệ trong quá trình làm bài.
          </p>
        </div>

        {/* Violation Count Badge & Severity Box */}
        <div className={`p-4 rounded-xl border ${severity.borderColor} ${severity.bgColor} flex flex-col gap-2.5`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <AlertTriangle size={16} className="text-amber-400" />
              Mức độ giám sát
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-600 border border-rose-300 text-white text-xs font-black shadow-[0_0_12px_rgba(244,63,94,0.6)] animate-pulse">
              VI PHẠM {violationCount} / {maxViolations} LẦN
            </span>
          </div>

          {/* Strike Progress Bar */}
          <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-rose-500/40">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 transition-all duration-300"
              style={{ width: `${progressRatio}%` }}
            />
          </div>

          <div className="text-xs sm:text-sm font-black text-rose-200 uppercase tracking-wide">
            {severity.level}
          </div>

          <p className={`text-xs sm:text-sm font-semibold leading-relaxed ${severity.textColor}`}>
            {severity.message}
          </p>

          {latestViolationReason && (
            <p className="text-[11px] text-amber-200 bg-black/45 p-2 rounded-lg border border-rose-500/40 font-medium">
              📌 Hành vi vừa ghi nhận: <strong>{latestViolationReason}</strong>
            </p>
          )}
        </div>

        {/* Violation Logs List */}
        {violationLogs.length > 0 && (
          <div className="flex flex-col gap-1.5 max-h-36 overflow-y-auto bg-[#070914] p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-400">
            <div className="font-bold text-slate-300 flex items-center justify-between text-[11px] pb-1 border-b border-slate-800">
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-amber-400" />
                <span>Biên bản nhật ký vi phạm ({violationLogs.length} lần):</span>
              </span>
              <span className="text-[10px] text-slate-400">Thời gian</span>
            </div>
            {violationLogs.map((log, idx) => (
              <div
                key={`${log.timestamp}-${idx}`}
                className="flex justify-between items-start gap-2 py-1 border-b border-slate-800/60 last:border-0"
              >
                <span className="text-rose-300 font-medium leading-snug">
                  • Lần {violationLogs.length - idx}: {log.description}
                </span>
                <span className="text-slate-400 font-mono text-[10px] shrink-0">
                  {new Date(log.timestamp).toLocaleTimeString('vi-VN')}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Return Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl font-black text-slate-950 text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] border border-amber-300 flex items-center justify-center gap-2 cursor-pointer mt-1"
        >
          <span>
            {violationCount >= maxViolations || isAutoSubmitted
              ? 'XEM KẾT QUẢ BÀI THI'
              : 'TÔI ĐÃ HIỂU VÀ QUAY LẠI PHÒNG THI'}
          </span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
