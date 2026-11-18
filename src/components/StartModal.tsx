import React, { useState, useEffect } from 'react';
import { BookOpen, ShieldCheck, Lock } from 'lucide-react';

interface StartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: (name: string, className: string) => void;
  currentExamTitle?: string;
  totalQuestions?: number;
  onOpenExamBank?: () => void;
  initialName?: string;
  initialClassName?: string;
}

export const StartModal: React.FC<StartModalProps> = ({
  isOpen,
  onClose,
  onStart,
  currentExamTitle = 'Đề 01',
  totalQuestions = 22,
  onOpenExamBank,
  initialName = '',
  initialClassName = '',
}) => {
  const [name, setName] = useState(initialName);
  const [className, setClassName] = useState(initialClassName);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (initialName && !name) setName(initialName);
      if (initialClassName && !className) setClassName(initialClassName);
      setError('');
    }
  }, [isOpen, initialName, initialClassName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Vui lòng nhập họ và tên');
      return;
    }
    if (!className.trim()) {
      setError('Vui lòng nhập lớp');
      return;
    }
    setError('');
    onStart(name.trim(), className.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-[#0f172a] border border-amber-400/80 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative text-slate-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-400 p-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-900 hover:text-black hover:bg-amber-300 rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
          <h2 className="text-xl font-black text-slate-900 text-center font-serif tracking-wide">
            THÔNG TIN THÍ SINH
          </h2>
          <p className="text-xs font-semibold text-slate-900/80 text-center mt-1">
            Vui lòng điền thông tin trước khi bắt đầu làm bài
          </p>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Active Exam Badge */}
          <div className="p-3 rounded-xl bg-[#09132c] border border-[#1e345e] flex items-center justify-between gap-2 shadow-inner">
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                ĐỀ THI ĐANG CHỌN:
              </span>
              <div className="font-extrabold text-sm text-white truncate flex items-center gap-1.5 mt-0.5">
                <BookOpen size={14} className="text-amber-400 shrink-0" />
                <span className="truncate">{currentExamTitle}</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                {totalQuestions} câu hỏi (Phần I, II, III) • Thời gian: 90 phút
              </span>
            </div>

            {onOpenExamBank && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenExamBank();
                }}
                className="px-2.5 py-1.5 rounded-lg bg-indigo-900/80 border border-indigo-500/60 hover:bg-indigo-800 text-indigo-200 text-xs font-bold shrink-0 transition-colors cursor-pointer"
                title="Mở ngân hàng đề để chọn đề thi khác"
              >
                Đổi đề khác
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1">
                Họ và tên thí sinh *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#1e293b] border border-slate-600 rounded-lg px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                placeholder="Nhập họ và tên..."
                autoFocus
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1">
                Lớp học *
              </label>
              <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full bg-[#1e293b] border border-slate-600 rounded-lg px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                placeholder="Ví dụ: 12A1"
              />
            </div>

            {/* Strict Exam Rules Notice */}
            <div className="bg-indigo-950/70 border border-indigo-500/50 rounded-xl p-3 space-y-2 text-[11px] text-indigo-200">
              <div className="flex items-start gap-2">
                <Lock size={14} className="text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <strong className="text-amber-300">Chốt đáp án lần đầu duy nhất:</strong> Khi đã chọn phương án (hoặc chốt đáp số), lựa chọn sẽ khóa cố định và <strong>không thể thay đổi</strong>.
                </p>
              </div>
              <div className="flex items-start gap-2 pt-1.5 border-t border-indigo-500/30">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <strong className="text-emerald-300">Giám sát vi phạm nghiêm ngặt:</strong> Cấm chuyển tab, rời cửa sổ thi, sao chép đề hoặc mở công cụ hệ thống. Vi phạm đủ <strong>5 lần</strong> sẽ tự động thu bài.
                </p>
              </div>
            </div>

            {error && (
              <p className="text-rose-400 text-xs font-bold">{error}</p>
            )}

            <button
              type="submit"
              className="mt-1 w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-900 font-extrabold rounded-xl transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-xs sm:text-sm"
            >
              <span>🚀</span> BẮT ĐẦU LÀM BÀI
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
