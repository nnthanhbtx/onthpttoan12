import React, { useState } from 'react';
import { Download, WifiOff, X } from 'lucide-react';
import { usePWAInstall, useOnlineStatus } from '../hooks/usePWA';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className="w-full py-2.5 px-3.5 rounded-xl font-bold text-white text-xs tracking-wider uppercase bg-gradient-to-b from-[#0d9488] to-[#0f766e] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-teal-400/50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <Download size={15} className="shrink-0" />
        <span>CÀI APP OFFLINE</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="w-full py-2.5 px-3.5 rounded-xl font-bold text-white text-xs tracking-wider uppercase bg-gradient-to-b from-[#0d9488] to-[#0f766e] hover:brightness-110 active:scale-[0.98] transition-all shadow-md border border-teal-400/50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Download size={15} className="shrink-0" />
          <span>CÀI APP TRÊN IPHONE</span>
        </button>

        {showIOSGuide && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
            onClick={() => setShowIOSGuide(false)}
          >
            <div
              className="w-full max-w-sm rounded-2xl bg-[#0b1532] border border-amber-400/60 p-5 shadow-2xl text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-extrabold text-amber-300">
                  Cài ứng dụng dùng Offline (iOS)
                </h3>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1.5">
                1. Nhấn vào nút <strong>Chia sẻ (Share)</strong> ở thanh công cụ trình duyệt Safari.<br />
                2. Cuộn xuống và chọn <strong>Thêm vào MH chính (Add to Home Screen)</strong> để làm đề ngay cả khi không có WiFi.
              </p>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="mt-4 w-full rounded-xl bg-amber-400 py-2 text-xs font-extrabold uppercase text-slate-950 hover:bg-amber-300 cursor-pointer"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-3 left-3 z-50 flex items-center gap-2 rounded-xl bg-amber-500/95 border border-amber-200 px-3 py-1.5 text-xs font-bold text-slate-950 shadow-lg">
      <WifiOff size={14} className="shrink-0" />
      <span>Chế độ Offline (Không cần WiFi) — Đang dùng dữ liệu đề đã lưu</span>
    </div>
  );
};
