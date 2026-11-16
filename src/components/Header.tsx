import React from 'react';

interface HeaderProps {
  currentExamTitle?: string;
  totalQuestions?: number;
  onOpenExamBank?: () => void;
  examCount?: number;
  onOpenOwnerAuth?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenOwnerAuth,
}) => {
  return (
    <header className="relative w-full py-3 sm:py-3.5 px-4 sm:px-6 flex flex-col items-center justify-center bg-gradient-to-b from-[#0b1532] to-[#070e22] border-b border-[#1e345e]/80">
      {/* Main Center Titles */}
      <div
        className="text-center flex flex-col items-center select-none"
        onDoubleClick={onOpenOwnerAuth}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider text-[#facc15] uppercase drop-shadow-[0_2px_10px_rgba(250,204,21,0.28)]">
          ÔN THI THPT 2027
        </h1>
      </div>
    </header>
  );
};
