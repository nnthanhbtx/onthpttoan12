import React, { useState } from 'react';
import { Download, WifiOff, X, CheckCircle2, Smartphone, Share } from 'lucide-react';
import { usePWAInstall, useOnlineStatus } from '../hooks/usePWA';

export const IOSInstallGuideModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 pt-safe pb-safe"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-[#0b1532] border-2 border-amber-400/80 p-5 shadow-2xl text-slate-100 max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#1e345e]">
          <div className="flex items-center gap-2">
            <Smartphone size={18} className="text-amber-400 shrink-0" />
            <h3 className="text-sm sm:text-base font-extrabold text-amber-300 uppercase">
              Cài App Offline (iPhone / iPad)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Đóng"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mb-3 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs text-emerald-200 flex items-start gap-2">
          <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
          <span>
            <strong>Đã lưu sẵn 15 Đề thi (330 câu + hình vẽ) trong máy!</strong> Sau khi thêm vào Màn hình chính, bạn có thể tắt WiFi / 4G và làm bài mượt 100% trên mọi dòng iPhone (iPhone X đến iPhone 18).
          </span>
        </div>

        <div className="text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2.5 bg-[#071026] p-3.5 rounded-xl border border-[#1e345e]">
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <span>
              Nhấn vào biểu tượng <strong className="text-amber-300 inline-flex items-center gap-1">Chia sẻ <Share size={13} className="inline" /> (Share)</strong> ở thanh công cụ dưới cùng trình duyệt Safari.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <span>
              Cuộn xuống và chọn <strong className="text-amber-300">“Thêm vào MH chính” (Add to Home Screen)</strong>.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <span>
              Nhấn <strong className="text-amber-300">Thêm (Add)</strong> ở góc trên bên phải để mở App toàn màn hình không cần mạng.
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 py-2.5 text-xs font-extrabold uppercase text-slate-950 hover:brightness-110 active:scale-95 transition cursor-pointer shadow-md"
        >
          Đã hiểu
        </button>
      </div>
    </div>
  );
};

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return (
      <div className="w-full py-2 px-3 rounded-xl bg-teal-950/50 border border-teal-500/40 text-teal-300 text-[11px] font-bold flex items-center justify-center gap-1.5">
        <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
        <span>Đã kích hoạt Chế độ App Offline</span>
      </div>
    );
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className="w-full py-2.5 px-3.5 rounded-xl font-bold text-white text-xs tracking-wider uppercase bg-gradient-to-b from-[#0d9488] to-[#0f766e] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-teal-400/50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <Download size={15} className="shrink-0" />
        <span>CÀI APP DÙNG OFFLINE</span>
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowIOSGuide(true)}
        className="w-full py-2.5 px-3.5 rounded-xl font-bold text-white text-xs tracking-wider uppercase bg-gradient-to-b from-[#0d9488] to-[#0f766e] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-teal-400/50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <Download size={15} className="shrink-0" />
        <span>{isIOS ? 'CÀI APP TRÊN IPHONE (OFFLINE)' : 'LƯU APP DÙNG OFFLINE'}</span>
      </button>

      <IOSInstallGuideModal isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
    </>
  );
};

export const MobileTopInstallBadge: React.FC = () => {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (isInstallable) {
            install();
          } else {
            setShowIOSGuide(true);
          }
        }}
        className="px-2 py-1 rounded-lg bg-teal-900/90 hover:bg-teal-800 border border-teal-400/70 text-teal-200 font-bold text-[11px] flex items-center gap-1 cursor-pointer active:scale-95 transition shrink-0"
        title="Cài đặt ứng dụng để làm bài không cần WiFi"
      >
        <Download size={12} className="text-teal-300 shrink-0" />
        <span className="hidden xs:inline">Offline</span>
      </button>
      <IOSInstallGuideModal isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
    </>
  );
};

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))' }}
      className="fixed left-3 right-3 sm:right-auto z-50 flex items-center justify-center sm:justify-start gap-2 rounded-xl bg-amber-500/95 border border-amber-200 px-3 py-2 text-xs font-bold text-slate-950 shadow-lg"
    >
      <WifiOff size={14} className="shrink-0" />
      <span>Đang làm bài Offline (Không có WiFi) — Đầy đủ 15 đề & hình vẽ</span>
    </div>
  );
};
