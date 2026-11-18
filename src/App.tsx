import React, { useState, useEffect, useRef } from 'react';
import { QUESTIONS as DEFAULT_QUESTIONS } from './data/questions';
import { QUESTIONS_DE02 } from './data/questionsDe02';
import { QUESTIONS_DE03 } from './data/questionsDe03';
import { QUESTIONS_DE04 } from './data/questionsDe04';
import { QUESTIONS_DE05 } from './data/questionsDe05';
import { QUESTIONS_DE06 } from './data/questionsDe06';
import { QUESTIONS_DE07 } from './data/questionsDe07';
import { QUESTIONS_DE08 } from './data/questionsDe08';
import { QUESTIONS_DE09 } from './data/questionsDe09';
import { QUESTIONS_DE10 } from './data/questionsDe10';
import { QUESTIONS_DE11 } from './data/questionsDe11';
import { QUESTIONS_DE12 } from './data/questionsDe12';
import { QUESTIONS_DE13 } from './data/questionsDe13';
import { QUESTIONS_DE14 } from './data/questionsDe14';
import { QUESTIONS_DE15 } from './data/questionsDe15';
import { UserAnswers, TestResult, Question, ExamRecord, ViolationLog } from './types';
import { Header } from './components/Header';
import { LeftPanel } from './components/LeftPanel';
import { MiddlePanel } from './components/MiddlePanel';
import { RightPanel } from './components/RightPanel';
import { SubmitModal } from './components/SubmitModal';
import { Leaderboard } from './components/Leaderboard';
import { LeaderboardEntry } from './types';
import { WordImportModal } from './components/WordImportModal';
import { StartModal } from './components/StartModal';
import { OwnerAuthModal } from './components/OwnerAuthModal';
import { ExamBankModal } from './components/ExamBankModal';
import { ViolationWarningModal } from './components/ViolationWarningModal';
import { generateSimilarExamAsync } from './lib/similarExamGenerator';
import { soundFx } from './utils/sound';
import { fireSubmissionConfetti } from './utils/confetti';
import { cleanStrayArtifacts, normalizeVectors } from './components/MathText';
import { OfflineIndicator, MobileTopInstallBadge } from './components/PWAWidgets';

export function sanitizeQuestion(q: Question): Question {
  const sanitizeText = (txt: string) => normalizeVectors(cleanStrayArtifacts(txt || ''));

  const common = {
    id: q.id,
    sectionTitle: q.sectionTitle,
    questionText: sanitizeText(q.questionText || (q as any).text || ''),
    diagramType: q.diagramType,
    imageUrl: q.imageUrl,
    explanation: sanitizeText(q.explanation || ''),
  };

  if (q.section === 'PART_I') {
    return {
      ...common,
      section: 'PART_I',
      options: (q.options || []).map((opt) => ({
        key: opt.key,
        text: sanitizeText(opt.text),
      })),
      correctAnswer: (cleanStrayArtifacts(String(q.correctAnswer || 'A')).toUpperCase() as 'A' | 'B' | 'C' | 'D') || 'A',
    };
  } else if (q.section === 'PART_II') {
    return {
      ...common,
      section: 'PART_II',
      statements: (q.statements || []).map((stmt) => ({
        key: stmt.key,
        text: sanitizeText(stmt.text),
        correct: Boolean(stmt.correct),
      })),
    };
  } else {
    return {
      ...common,
      section: 'PART_III',
      correctAnswer: cleanStrayArtifacts(String(q.correctAnswer || '')),
    };
  }
}

export function sanitizeExamRecord(exam: ExamRecord): ExamRecord {
  return {
    ...exam,
    questions: (exam.questions || []).map(sanitizeQuestion),
  };
}

export function isPartIIIAnswerCorrect(userVal?: string, correctVal?: string): boolean {
  if (!userVal || !correctVal) return false;
  const normalizeNumStr = (s: string) =>
    s.trim().toLowerCase().replace(/\s+/g, '').replace(/,/g, '.');
  const u = normalizeNumStr(userVal);
  const c = normalizeNumStr(correctVal);
  if (u === c) return true;
  // Also accept exact/rounded variants for Đề 01 - Đề 13 Part III answers
  if (c === '0.14' && (u === '1/7' || u === '0.143' || u === '0.139' || u === '1/(2sqrt(13))' || u === 'sqrt(13)/26')) {
    return true;
  }
  if (c === '1/462' && (u === '0.0022' || u === '0.002' || u === '2/924')) {
    return true;
  }
  if (c === '-1.17' && (u === '2sqrt(2)-4' || u === '-1.172' || u === '-1.2')) {
    return true;
  }
  if (c === '17/7' && (u === '2.43' || u === '2.4' || u === '2.429')) {
    return true;
  }
  if (c === '49.6' && (u === '49.62' || u === '49620')) {
    return true;
  }
  if (c === '6.21' && (u === '6.2' || u === '(pi+18)^2/72' || u === '6.208')) {
    return true;
  }
  if (c === '-0.35' && (u === '-sqrt(2)/4' || u === '-1/(2sqrt(2))' || u === '-0.354' || u === '-0.4')) {
    return true;
  }
  if (c === '-4.25' && (u === '-17/4')) {
    return true;
  }
  if (c === '0.78' && (u === '7/9' || u === '0.778' || u === '0.77')) {
    return true;
  }
  if (c === '1.54' && (u === '8sqrt(3)/9' || u === '1.539')) {
    return true;
  }
  if (c === '63' && (u === '62' || u === '60')) {
    return true;
  }
  if (c === '0.87' && (u === '5sqrt(6)/14' || u === '0.875' || u === '0.88')) {
    return true;
  }
  if (c === '0.6' && (u === '3/5' || u === '0.60')) {
    return true;
  }
  if (c === '1.73' && (u === 'sqrt(3)' || u === '1.732' || u === '1.7')) {
    return true;
  }
  if (c === '3.14' && (u === '20sqrt(2)/9' || u === '3.143' || u === '3.1')) {
    return true;
  }
  if (c === '0.37' && (u === '(sqrt(3)-1)/2' || u === '0.366' || u === '0.36')) {
    return true;
  }
  if (c === '1.94' && (u === 'sqrt(15)/2' || u === '1.936' || u === '1.9')) {
    return true;
  }
  if (c === '2.24' && (u === 'sqrt(5)' || u === '2.236' || u === '2.2')) {
    return true;
  }
  if (c === '0.82' && (u === '3sqrt(30)/20' || u === '0.822' || u === '0.8' || u === 'sqrt(6)/3' || u === '0.816')) {
    return true;
  }
  if (c === '10.6' && (u === '15sqrt(2)/2' || u === '10.61')) {
    return true;
  }
  if (c === '29/210' && (u === '0.14' || u === '0.138' || u === '0.1381')) {
    return true;
  }
  if (c === '2.5' && (u === '2sqrt(39)/5' || u === '2.498' || u === '2.50')) {
    return true;
  }
  if (c === '3' && (u === '3+3/e^2' || u === '3.41' || u === '3.4')) {
    return true;
  }
  if (c === '0.56' && (u === '0.564' || u === '0.6' || u === 'cbrt(150)/(3pi)')) {
    return true;
  }
  if (c === '0.32' && (u === '0.322' || u === 'log2(1.25)')) {
    return true;
  }
  if (c === '0.75' && (u === '3/4')) {
    return true;
  }
  if (c === '2.83' && (u === '2sqrt(2)' || u === 'sqrt(8)' || u === '2.828' || u === '2.8')) {
    return true;
  }
  if (c === '0.5' && (u === '1/2' || u === '0.50')) {
    return true;
  }
  if (c === '25.13' && (u === '8pi' || u === '25.1' || u === '25.133')) {
    return true;
  }
  if (c === '0.18' && (u === '40/221' || u === '0.181' || u === '0.2')) {
    return true;
  }
  if (c === '0.21' && (u === '(sqrt(2)-1)/2' || u === '0.207' || u === '0.2')) {
    return true;
  }
  if (c === '31.17' && (u === '31.2' || u === '31' || u === '(10sqrt(30)+10sqrt(15))/3')) {
    return true;
  }
  if (c === '1.12' && (u === 'sqrt(5)/2' || u === '1.1' || u === '1.118')) {
    return true;
  }
  if (c === '0.7' && (u === 'sqrt(2)/2' || u === '1/sqrt(2)' || u === '0.71' || u === '0.707')) {
    return true;
  }
  if (c === '69.4' && (u === '69.43' || u === '221pi/10' || u === '22.1pi' || u === '69')) {
    return true;
  }
  if (c === '0.03' && (u === '5/154' || u === '0.032' || u === '0.0325')) {
    return true;
  }
  const uNum = Number(u);
  const cNum = Number(c);
  if (!Number.isNaN(uNum) && !Number.isNaN(cNum) && Math.abs(uNum - cNum) < 1e-6) {
    return true;
  }
  return false;
}

const STORAGE_VERSION_KEY = 'thpt2027_storage_version';
const CURRENT_STORAGE_VERSION = 'de01_to_de15_2027_v20';

function ensureCleanExamStorage() {
  try {
    if (localStorage.getItem(STORAGE_VERSION_KEY) !== CURRENT_STORAGE_VERSION) {
      localStorage.removeItem('quiz_exam_history');
      localStorage.removeItem('quiz_current_exam_id');
      localStorage.removeItem('quiz_questions');
      localStorage.removeItem('quiz_user_answers');
      localStorage.removeItem('quiz_time_remaining');
      localStorage.removeItem('quiz_is_started');
      localStorage.removeItem('quiz_violation_count');
      localStorage.removeItem('quiz_violation_logs');
      localStorage.removeItem('thpt2027_exam_history');
      localStorage.removeItem('thpt2027_current_exam_id');
      localStorage.removeItem('thpt2027_questions');
      localStorage.removeItem('thpt2027_user_answers');
      localStorage.removeItem('thpt2027_time_remaining');
      localStorage.removeItem('thpt2027_is_started');
      localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_STORAGE_VERSION);
    }
  } catch (e) {}
}

export default function App() {
  ensureCleanExamStorage();

  const [examHistory, setExamHistory] = useState<ExamRecord[]>(() => {
    try {
      const saved = localStorage.getItem('thpt2027_exam_history');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item) => {
            const sanitized = sanitizeExamRecord(item);
            if (sanitized.id === 1) {
              return { ...sanitized, title: 'Đề 01' };
            }
            if (sanitized.id === 2) {
              return { ...sanitized, title: 'Đề 02' };
            }
            if (sanitized.id === 3) {
              return { ...sanitized, title: 'Đề 03' };
            }
            if (sanitized.id === 4) {
              return { ...sanitized, title: 'Đề 04' };
            }
            if (sanitized.id === 5) {
              return { ...sanitized, title: 'Đề 05' };
            }
            if (sanitized.id === 6) {
              return { ...sanitized, title: 'Đề 06' };
            }
            if (sanitized.id === 7) {
              return { ...sanitized, title: 'Đề 07' };
            }
            if (sanitized.id === 8) {
              return { ...sanitized, title: 'Đề 08' };
            }
            if (sanitized.id === 9) {
              return { ...sanitized, title: 'Đề 09' };
            }
            if (sanitized.id === 10) {
              return { ...sanitized, title: 'Đề 10' };
            }
            if (sanitized.id === 11) {
              return { ...sanitized, title: 'Đề 11' };
            }
            if (sanitized.id === 12) {
              return { ...sanitized, title: 'Đề 12' };
            }
            if (sanitized.id === 13) {
              return { ...sanitized, title: 'Đề 13' };
            }
            if (sanitized.id === 14) {
              return { ...sanitized, title: 'Đề 14' };
            }
            if (sanitized.id === 15) {
              return { ...sanitized, title: 'Đề 15' };
            }
            return sanitized;
          });
        }
      }
    } catch (e) {}
    return [
      {
        id: 1,
        title: 'Đề 01',
        questions: DEFAULT_QUESTIONS.map(sanitizeQuestion),
        timestamp: Date.now() - 720000,
      },
      {
        id: 2,
        title: 'Đề 02',
        questions: QUESTIONS_DE02.map(sanitizeQuestion),
        timestamp: Date.now() - 660000,
      },
      {
        id: 3,
        title: 'Đề 03',
        questions: QUESTIONS_DE03.map(sanitizeQuestion),
        timestamp: Date.now() - 600000,
      },
      {
        id: 4,
        title: 'Đề 04',
        questions: QUESTIONS_DE04.map(sanitizeQuestion),
        timestamp: Date.now() - 540000,
      },
      {
        id: 5,
        title: 'Đề 05',
        questions: QUESTIONS_DE05.map(sanitizeQuestion),
        timestamp: Date.now() - 480000,
      },
      {
        id: 6,
        title: 'Đề 06',
        questions: QUESTIONS_DE06.map(sanitizeQuestion),
        timestamp: Date.now() - 420000,
      },
      {
        id: 7,
        title: 'Đề 07',
        questions: QUESTIONS_DE07.map(sanitizeQuestion),
        timestamp: Date.now() - 360000,
      },
      {
        id: 8,
        title: 'Đề 08',
        questions: QUESTIONS_DE08.map(sanitizeQuestion),
        timestamp: Date.now() - 300000,
      },
      {
        id: 9,
        title: 'Đề 09',
        questions: QUESTIONS_DE09.map(sanitizeQuestion),
        timestamp: Date.now() - 240000,
      },
      {
        id: 10,
        title: 'Đề 10',
        questions: QUESTIONS_DE10.map(sanitizeQuestion),
        timestamp: Date.now() - 180000,
      },
      {
        id: 11,
        title: 'Đề 11',
        questions: QUESTIONS_DE11.map(sanitizeQuestion),
        timestamp: Date.now() - 150000,
      },
      {
        id: 12,
        title: 'Đề 12',
        questions: QUESTIONS_DE12.map(sanitizeQuestion),
        timestamp: Date.now() - 120000,
      },
      {
        id: 13,
        title: 'Đề 13',
        questions: QUESTIONS_DE13.map(sanitizeQuestion),
        timestamp: Date.now() - 90000,
      },
      {
        id: 14,
        title: 'Đề 14',
        questions: QUESTIONS_DE14.map(sanitizeQuestion),
        timestamp: Date.now() - 60000,
      },
      {
        id: 15,
        title: 'Đề 15',
        questions: QUESTIONS_DE15.map(sanitizeQuestion),
        timestamp: Date.now(),
      },
    ];
  });

  const [currentExamId, setCurrentExamId] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('thpt2027_current_exam_id');
      const parsed = saved ? Number(saved) : NaN;
      if (!Number.isNaN(parsed) && parsed > 0) return parsed;
    } catch (e) {}
    return 15;
  });

  const [questions, setQuestions] = useState<Question[]>(() => {
    try {
      const savedId = localStorage.getItem('thpt2027_current_exam_id');
      const savedHistory = localStorage.getItem('thpt2027_exam_history');
      if (savedHistory && savedId) {
        const history: ExamRecord[] = JSON.parse(savedHistory);
        const match = Array.isArray(history) ? history.find((e) => e.id === Number(savedId)) : undefined;
        if (match && Array.isArray(match.questions) && match.questions.length > 0) {
          return match.questions.map(sanitizeQuestion);
        }
      }
      const saved = localStorage.getItem('thpt2027_questions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed.map(sanitizeQuestion);
      }
    } catch (e) {}
    return QUESTIONS_DE15.map(sanitizeQuestion);
  });
  const [isExamBankOpen, setIsExamBankOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>(() => {
    try {
      const saved = localStorage.getItem('thpt2027_user_answers');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch (e) {}
    return {};
  });

  const [timeRemaining, setTimeRemaining] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('thpt2027_time_remaining');
      const parsed = saved ? Number(saved) : NaN;
      if (!Number.isNaN(parsed) && parsed > 0) return parsed;
    } catch (e) {}
    return 90 * 60; // 90 minutes
  });

  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isOwnerAuthenticated, setIsOwnerAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem('quiz_is_owner_authenticated') === 'true';
    } catch (e) {
      return false;
    }
  });
  const [isOwnerAuthModalOpen, setIsOwnerAuthModalOpen] = useState(false);
  const [isStarted, setIsStarted] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('thpt2027_is_started');
      if (saved) return Boolean(JSON.parse(saved));
    } catch (e) {}
    return false;
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<'question' | 'controls' | 'grid'>('question');

  const [playerInfo, setPlayerInfo] = useState<{name: string, className: string}>(() => {
    try {
      const saved = localStorage.getItem('quiz_player_info');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') return { name: String(parsed.name || ''), className: String(parsed.className || '') };
      }
    } catch (e) {}
    return { name: '', className: '' };
  });

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
    try {
      const saved = localStorage.getItem('quiz_leaderboard');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}
    return [];
  });

  const [isWordModalOpen, setIsWordModalOpen] = useState(false);
  const [isGeneratingExam, setIsGeneratingExam] = useState(false);
  const [generatingStatus, setGeneratingStatus] = useState('');
  
  // Anti-cheat Proctoring State
  const [violationCount, setViolationCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('quiz_violation_count');
      const parsed = saved ? Number(saved) : NaN;
      if (!Number.isNaN(parsed) && parsed >= 0) return parsed;
    } catch (e) {}
    return 0;
  });
  const [violationLogs, setViolationLogs] = useState<ViolationLog[]>(() => {
    try {
      const saved = localStorage.getItem('quiz_violation_logs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}
    return [];
  });
  const [isViolationModalOpen, setIsViolationModalOpen] = useState(false);
  const [latestViolationReason, setLatestViolationReason] = useState('');
  const lastViolationTimeRef = useRef<number>(0);

  const [testResult, setTestResult] = useState<TestResult>({
    submitted: false,
    score: 0,
    partIScore: 0,
    partIIScore: 0,
    partIIIScore: 0,
    totalCorrectPartI: 0,
    totalCorrectPartII: 0,
    totalCorrectPartIII: 0,
    timeSpentSeconds: 0,
    violationCount: 0,
    violationLogs: [],
  });

  const appContainerRef = useRef<HTMLDivElement>(null);
  const mobileQuestionStripRef = useRef<HTMLDivElement>(null);
  const currentQuestion = questions[currentQuestionIndex] || questions[0];

  const currentExam = examHistory.find((e) => e.id === currentExamId) || examHistory[0] || {
    id: 1,
    title: 'Đề 01',
    questions: DEFAULT_QUESTIONS,
    timestamp: Date.now(),
  };
  const currentExamTitle = currentExam.title;

  useEffect(() => {
    try {
      localStorage.setItem('thpt2027_current_exam_id', String(currentExamId));
    } catch (e) {}
  }, [currentExamId]);

  // Sync anti-cheat violations to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('quiz_violation_count', String(violationCount));
      localStorage.setItem('quiz_violation_logs', JSON.stringify(violationLogs));
    } catch (e) {}
  }, [violationCount, violationLogs]);

  // Sync state to localStorage for offline preservation
  useEffect(() => {
    try {
      localStorage.setItem('thpt2027_user_answers', JSON.stringify(userAnswers));
    } catch (e) {}
  }, [userAnswers]);

  useEffect(() => {
    try {
      localStorage.setItem('thpt2027_questions', JSON.stringify(questions));
    } catch (e) {}
  }, [questions]);

  useEffect(() => {
    try {
      localStorage.setItem('thpt2027_exam_history', JSON.stringify(examHistory));
    } catch (e) {}
  }, [examHistory]);

  useEffect(() => {
    try {
      localStorage.setItem('thpt2027_time_remaining', String(timeRemaining));
    } catch (e) {}
  }, [timeRemaining]);

  useEffect(() => {
    try {
      localStorage.setItem('thpt2027_is_started', JSON.stringify(isStarted));
    } catch (e) {}
  }, [isStarted]);

  useEffect(() => {
    try {
      localStorage.setItem('quiz_player_info', JSON.stringify(playerInfo));
    } catch (e) {}
  }, [playerInfo]);

  // Auto unlock Web Audio & iOS Safari :active touch states on first mobile touch/pointerdown
  useEffect(() => {
    const noop = () => {};
    document.body.addEventListener('touchstart', noop, { passive: true });
    const unlockAudio = () => {
      soundFx.unlock();
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('click', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio, { passive: true });
    window.addEventListener('touchstart', unlockAudio, { passive: true });
    window.addEventListener('click', unlockAudio, { passive: true });
    return () => {
      document.body.removeEventListener('touchstart', noop);
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('click', unlockAudio);
    };
  }, []);

  // Auto-center active question pill in mobile horizontal strip (iOS 12-18 compatible)
  useEffect(() => {
    const strip = mobileQuestionStripRef.current;
    if (strip) {
      const activeBtn = strip.querySelector(
        `[data-q-index="${currentQuestionIndex}"]`
      ) as HTMLElement | null;
      if (activeBtn) {
        const targetLeft =
          activeBtn.offsetLeft - strip.clientWidth / 2 + activeBtn.clientWidth / 2;
        strip.scrollLeft = Math.max(0, targetLeft);
      }
    }
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      try {
        window.scrollTo(0, 0);
      } catch {}
    }
  }, [currentQuestionIndex]);

  // Global shortcut for teacher / owner authentication (Ctrl+Shift+O or Alt+G)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && (e.key === 'O' || e.key === 'o')) || (e.altKey && (e.key === 'g' || e.key === 'G'))) {
        e.preventDefault();
        setIsOwnerAuthModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const MAX_VIOLATIONS = 5;

  // Anti-Cheat & Exam Proctoring: Strict Detection of Tab-Switching, Window Blur, Fullscreen Exit, Copy/Cut & Shortcuts
  useEffect(() => {
    // Proctoring is active only when student is actively taking the test
    if (!isStarted || isSubmitted || isTeacherMode) return;

    const triggerViolation = (
      type: ViolationLog['type'],
      reason: string
    ) => {
      const now = Date.now();
      // Cooldown of 1200ms to prevent duplicate triggers from simultaneous blur + visibilitychange
      if (now - lastViolationTimeRef.current < 1200) return;
      lastViolationTimeRef.current = now;

      const newLog: ViolationLog = {
        timestamp: now,
        type,
        description: reason,
      };

      setViolationLogs((prev) => [newLog, ...prev]);
      setLatestViolationReason(reason);
      setViolationCount((prev) => prev + 1);
      setIsViolationModalOpen(true);
      soundFx.playWarningAlert();
    };

    let blurTimer: ReturnType<typeof setTimeout> | null = null;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        triggerViolation(
          'TAB_SWITCH',
          'Rời khỏi màn hình bài thi (chuyển sang tab khác hoặc ẩn trình duyệt)'
        );
      }
    };

    const handleWindowBlur = () => {
      // On iOS Safari (iPhone X - iPhone 18), tapping an input/select or dismissing the virtual keyboard
      // can momentarily fire window blur without leaving the app.
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'SELECT' || activeTag === 'TEXTAREA') {
        return;
      }
      if (blurTimer) clearTimeout(blurTimer);
      blurTimer = setTimeout(() => {
        if (document.hidden || !document.hasFocus()) {
          triggerViolation(
            'WINDOW_BLUR',
            'Mất tiêu điểm cửa sổ làm bài (mở ứng dụng khác, chia đôi màn hình hoặc nhấp ra ngoài)'
          );
        }
      }, 300);
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
        triggerViolation(
          'FULLSCREEN_EXIT',
          'Thoát chế độ toàn màn hình trong lúc đang làm bài thi'
        );
      }
    };

    const handleCopyOrCut = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      e.preventDefault();
      triggerViolation(
        'COPY_ATTEMPT',
        'Cố tình sao chép (Copy/Cut) nội dung đề thi trong phòng thi'
      );
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      // On touch devices (iPhone X - 18, iPad, Android), long-pressing while scrolling or viewing an SVG
      // diagram can fire contextmenu. Suppress the menu without penalizing the student.
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (isTouchDevice) return;
      triggerViolation(
        'DEVTOOLS_SHORTCUT',
        'Mở menu chuột phải trên màn hình bài thi'
      );
    };

    const handleRestrictedKeyDown = (e: KeyboardEvent) => {
      const isF12 = e.key === 'F12';
      const isDevTools =
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key);
      const isViewSource = (e.ctrlKey || e.metaKey) && ['U', 'u'].includes(e.key);
      const isPrintScreen = e.key === 'PrintScreen';

      if (isF12 || isDevTools || isViewSource || isPrintScreen) {
        e.preventDefault();
        triggerViolation(
          'DEVTOOLS_SHORTCUT',
          'Sử dụng phím tắt kiểm tra hệ thống hoặc chụp màn hình trong giờ thi'
        );
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('copy', handleCopyOrCut);
    document.addEventListener('cut', handleCopyOrCut);
    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleRestrictedKeyDown);

    return () => {
      if (blurTimer) clearTimeout(blurTimer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('copy', handleCopyOrCut);
      document.removeEventListener('cut', handleCopyOrCut);
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleRestrictedKeyDown);
    };
  }, [isStarted, isSubmitted, isTeacherMode]);

  // Auto-submit exam immediately if violationCount reaches MAX_VIOLATIONS (5 strikes)
  useEffect(() => {
    if (isStarted && !isSubmitted && !isTeacherMode && violationCount >= MAX_VIOLATIONS) {
      calculateAndSubmitScore();
    }
  }, [violationCount, isStarted, isSubmitted, isTeacherMode]);

  // Countdown timer interval
  useEffect(() => {
    if (isSubmitted || !isStarted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          calculateAndSubmitScore();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, isStarted]);

  // Helper: auto-lock current Part III answer if non-empty before switching questions
  const lockCurrentPartIIIIfNeeded = () => {
    if (!currentQuestion || currentQuestion.section !== 'PART_III') return;
    const curAns = userAnswers[currentQuestion.id];
    if (curAns && (curAns.partIII || '').trim() !== '' && !curAns.partIIILocked) {
      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          ...prev[currentQuestion.id],
          partIIILocked: true,
        },
      }));
    }
  };

  // Handle option selection for Part I — STRICT FIRST CHOICE ONLY
  const handleSelectOptionPartI = (
    questionId: number,
    optionKey: 'A' | 'B' | 'C' | 'D'
  ) => {
    if (isSubmitted) return;
    if (!isStarted) {
      setIsStartModalOpen(true);
      return;
    }
    // Enforce first-choice lock: cannot change once selected
    if (userAnswers[questionId]?.partI !== undefined) {
      return;
    }

    setUserAnswers((prev) => {
      if (prev[questionId]?.partI !== undefined) return prev;
      return {
        ...prev,
        [questionId]: {
          ...prev[questionId],
          partI: optionKey,
        },
      };
    });

    // Play audio feedback for correct/incorrect answer
    const q = questions.find((item) => item.id === questionId);
    if (q && q.section === 'PART_I') {
      if (optionKey === q.correctAnswer) {
        soundFx.playCorrect();
      } else {
        soundFx.playIncorrect();
      }
    }
  };

  // Handle statement selection for Part II — STRICT FIRST CHOICE ONLY PER STATEMENT
  const handleSelectOptionPartII = (
    questionId: number,
    statementKey: 'a' | 'b' | 'c' | 'd',
    value: boolean
  ) => {
    if (isSubmitted) return;
    if (!isStarted) {
      setIsStartModalOpen(true);
      return;
    }
    // Enforce first-choice lock per statement (a, b, c, d)
    if (userAnswers[questionId]?.partII?.[statementKey] !== undefined) {
      return;
    }

    setUserAnswers((prev) => {
      const prevPartII = prev[questionId]?.partII || {};
      if (prevPartII[statementKey] !== undefined) return prev;
      return {
        ...prev,
        [questionId]: {
          ...prev[questionId],
          partII: {
            ...prevPartII,
            [statementKey]: value,
          },
        },
      };
    });

    // Play audio feedback for correct/incorrect statement selection
    const q = questions.find((item) => item.id === questionId);
    if (q && q.section === 'PART_II') {
      const stmt = q.statements.find((s) => s.key === statementKey);
      if (stmt) {
        if (value === stmt.correct) {
          soundFx.playCorrect();
        } else {
          soundFx.playIncorrect();
        }
      }
    }
  };

  // Handle input change for Part III (blocked once locked)
  const handleChangeAnswerPartIII = (questionId: number, value: string) => {
    if (isSubmitted) return;
    if (!isStarted) {
      setIsStartModalOpen(true);
      return;
    }
    if (userAnswers[questionId]?.partIIILocked) {
      return;
    }
    setUserAnswers((prev) => {
      if (prev[questionId]?.partIIILocked) return prev;
      return {
        ...prev,
        [questionId]: {
          ...prev[questionId],
          partIII: value,
        },
      };
    });
  };

  // Lock Part III answer permanently once confirmed
  const handleLockAnswerPartIII = (questionId: number) => {
    if (isSubmitted) return;
    if (!isStarted) {
      setIsStartModalOpen(true);
      return;
    }
    const currentVal = (userAnswers[questionId]?.partIII || '').trim();
    if (!currentVal || userAnswers[questionId]?.partIIILocked) return;

    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        partIII: currentVal,
        partIIILocked: true,
      },
    }));

    const q = questions.find((item) => item.id === questionId);
    if (q && q.section === 'PART_III') {
      if (isPartIIIAnswerCorrect(currentVal, q.correctAnswer)) {
        soundFx.playCorrect();
      } else {
        soundFx.playIncorrect();
      }
    }
  };

  // Toggle audio sound
  const handleToggleSound = () => {
    setIsSoundEnabled((prev) => {
      const next = !prev;
      soundFx.enabled = next;
      return next;
    });
  };

  // Select question by ID
  const handleSelectQuestion = (id: number) => {
    lockCurrentPartIIIIfNeeded();
    const index = questions.findIndex((q) => q.id === id);
    if (index !== -1) {
      setCurrentQuestionIndex(index);
      setMobileTab('question');
    }
  };

  // Toggle Fullscreen
  const handleToggleFullscreen = () => {
    try {
      const elem = appContainerRef.current as any;
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
        if (elem?.requestFullscreen) {
          elem.requestFullscreen().catch(() => {});
        } else if (elem?.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        }
      }
    } catch (e) {
      console.warn('Fullscreen API not supported');
    }
  };

  // Owner Authentication handlers
  const handleAuthenticateOwner = (pin: string): boolean => {
    const storedPin = localStorage.getItem('quiz_owner_pin') || '2027';
    if (pin === storedPin) {
      setIsOwnerAuthenticated(true);
      try {
        localStorage.setItem('quiz_is_owner_authenticated', 'true');
      } catch (e) {}
      return true;
    }
    return false;
  };

  const handleChangeOwnerPin = (oldPin: string, newPin: string): boolean => {
    const storedPin = localStorage.getItem('quiz_owner_pin') || '2027';
    if (oldPin === storedPin) {
      try {
        localStorage.setItem('quiz_owner_pin', newPin);
      } catch (e) {}
      return true;
    }
    return false;
  };

  const handleLogoutOwner = () => {
    setIsOwnerAuthenticated(false);
    setIsTeacherMode(false);
    try {
      localStorage.setItem('quiz_is_owner_authenticated', 'false');
    } catch (e) {}
  };

  // Toggle Teacher Mode directly from Control Panel
  const handleToggleTeacherMode = () => {
    setIsTeacherMode((prev) => !prev);
  };

  // Open Word Import modal directly from Control Panel
  const handleOpenWordImport = () => {
    setIsWordModalOpen(true);
  };

  // Import questions from Word / text file
  const handleImportQuestions = (newQuestions: Question[], title?: string) => {
    const cleanQuestions = newQuestions.map(sanitizeQuestion);
    const newId = Date.now();
    const examTitle = title || `Đề ${examHistory.length + 1} (Tải lên)`;
    const newExam: ExamRecord = {
      id: newId,
      title: examTitle,
      questions: cleanQuestions,
      timestamp: Date.now(),
    };

    setExamHistory((prev) => [...prev, newExam]);
    setQuestions(cleanQuestions);
    setCurrentExamId(newId);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTimeRemaining(90 * 60);
    setIsStarted(false);
    setIsSubmitted(false);
    setIsTeacherMode(false);
    setViolationCount(0);
    setViolationLogs([]);
    setTestResult({
      submitted: false,
      score: 0,
      partIScore: 0,
      partIIScore: 0,
      partIIIScore: 0,
      totalCorrectPartI: 0,
      totalCorrectPartII: 0,
      totalCorrectPartIII: 0,
      timeSpentSeconds: 0,
      violationCount: 0,
      violationLogs: [],
    });
    setIsWordModalOpen(false);
    soundFx.playCorrect();
  };

  // Generate similar exam variant from an existing exam
  const handleGenerateSimilarExam = async (baseExam: ExamRecord) => {
    if (!isOwnerAuthenticated) {
      setIsOwnerAuthModalOpen(true);
      return;
    }
    if (isGeneratingExam) return;
    setIsGeneratingExam(true);
    setGeneratingStatus('Đang phân tích ma trận kiến thức GDPT 2018 và tạo câu hỏi tương đương...');

    try {
      const nextIndex = examHistory.length + 1;
      const result = await generateSimilarExamAsync(
        baseExam.questions,
        baseExam.title,
        nextIndex,
        (msg) => setGeneratingStatus(msg)
      );

      const newId = Date.now();
      const cleanQuestions = result.questions.map(sanitizeQuestion);
      const newExam: ExamRecord = {
        id: newId,
        title: result.title,
        questions: cleanQuestions,
        timestamp: Date.now(),
      };

      const updatedHistory = [...examHistory, newExam];
      setExamHistory(updatedHistory);
      localStorage.setItem('thpt2027_exam_history', JSON.stringify(updatedHistory));

      setQuestions(cleanQuestions);
      localStorage.setItem('thpt2027_questions', JSON.stringify(cleanQuestions));

      setCurrentExamId(newId);
      localStorage.setItem('thpt2027_current_exam_id', String(newId));

      setUserAnswers({});
      localStorage.removeItem('thpt2027_user_answers');

      setCurrentQuestionIndex(0);
      setTimeRemaining(90 * 60);
      setIsStarted(false);
      setIsSubmitted(false);
      setIsTeacherMode(false);
      setTestResult({
        submitted: false,
        score: 0,
        partIScore: 0,
        partIIScore: 0,
        partIIIScore: 0,
        totalCorrectPartI: 0,
        totalCorrectPartII: 0,
        totalCorrectPartIII: 0,
        timeSpentSeconds: 0,
        violationCount: 0,
      });

      setIsExamBankOpen(false);
      soundFx.playCorrect();
    } catch (err) {
      console.error('Lỗi khi tạo đề tương tự:', err);
    } finally {
      setIsGeneratingExam(false);
      setGeneratingStatus('');
    }
  };

  // Delete an exam from bank
  const handleDeleteExam = (examId: number) => {
    if (!isOwnerAuthenticated) {
      setIsOwnerAuthModalOpen(true);
      return;
    }
    if (examHistory.length <= 1) return;
    const remaining = examHistory.filter((e) => e.id !== examId);
    setExamHistory(remaining);
    try {
      localStorage.setItem('thpt2027_exam_history', JSON.stringify(remaining));
    } catch (e) {}

    if (currentExamId === examId) {
      const nextExam = remaining[0];
      setQuestions(nextExam.questions.map(sanitizeQuestion));
      setCurrentExamId(nextExam.id);
      setUserAnswers({});
      setCurrentQuestionIndex(0);
      setTimeRemaining(90 * 60);
      setIsStarted(false);
      setIsSubmitted(false);
      setIsTeacherMode(false);
      setViolationCount(0);
      setViolationLogs([]);
      setTestResult({
        submitted: false,
        score: 0,
        partIScore: 0,
        partIIScore: 0,
        partIIIScore: 0,
        totalCorrectPartI: 0,
        totalCorrectPartII: 0,
        totalCorrectPartIII: 0,
        timeSpentSeconds: 0,
        violationCount: 0,
        violationLogs: [],
      });
    }
    soundFx.playClick();
  };

  // Rename an exam in bank
  const handleRenameExam = (examId: number, newTitle: string) => {
    if (!isOwnerAuthenticated) {
      setIsOwnerAuthModalOpen(true);
      return;
    }
    setExamHistory((prev) =>
      prev.map((e) => (e.id === examId ? { ...e, title: newTitle } : e))
    );
  };

  // Select a past exam from bank
  const handleSelectHistoryExam = (exam: ExamRecord) => {
    if (exam.id === currentExamId) {
      setIsExamBankOpen(false);
      return;
    }
    setQuestions(exam.questions.map(sanitizeQuestion));
    setCurrentExamId(exam.id);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTimeRemaining(90 * 60);
    setIsStarted(false);
    setIsSubmitted(false);
    setIsTeacherMode(false);
    setViolationCount(0);
    setViolationLogs([]);
    setTestResult({
      submitted: false,
      score: 0,
      partIScore: 0,
      partIIScore: 0,
      partIIIScore: 0,
      totalCorrectPartI: 0,
      totalCorrectPartII: 0,
      totalCorrectPartIII: 0,
      timeSpentSeconds: 0,
      violationCount: 0,
      violationLogs: [],
    });
    setIsExamBankOpen(false);
    soundFx.playClick();
  };

  const handleSaveScore = (scoreData: { playerName: string, className?: string, score: number, timeSpentSeconds: number, violationCount?: number, examTitle?: string }) => {
    const entry: LeaderboardEntry = {
      playerName: scoreData.playerName,
      className: scoreData.className,
      score: scoreData.score,
      timeSpentSeconds: scoreData.timeSpentSeconds,
      date: Date.now(),
      violationCount: scoreData.violationCount || 0,
      examTitle: scoreData.examTitle || currentExamTitle,
    };
    
    setLeaderboard(prev => {
      const newList = [...prev, entry].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.timeSpentSeconds - b.timeSpentSeconds; // lower time is better
      }).slice(0, 10);
      
      try {
        localStorage.setItem('quiz_leaderboard', JSON.stringify(newList));
      } catch(e) {}
      
      return newList;
    });
  };

  // Reset Test for SubmitModal
  const handleReset = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTimeRemaining(90 * 60);
    setIsStarted(false);
    setIsSubmitted(false);
    setViolationCount(0);
    setViolationLogs([]);
    setTestResult({
      submitted: false,
      score: 0,
      partIScore: 0,
      partIIScore: 0,
      partIIIScore: 0,
      totalCorrectPartI: 0,
      totalCorrectPartII: 0,
      totalCorrectPartIII: 0,
      timeSpentSeconds: 0,
      violationCount: 0,
      violationLogs: [],
    });
  };

  // Calculate score and submit
  const calculateAndSubmitScore = () => {
    let p1Correct = 0;
    let p1Score = 0;

    let p2CorrectFull = 0;
    let p2Score = 0;

    let p3Correct = 0;
    let p3Score = 0;

    questions.forEach((q) => {
      const ans = userAnswers[q.id];

      if (q.section === 'PART_I') {
        if (ans?.partI === q.correctAnswer) {
          p1Correct += 1;
          p1Score += 0.25;
        }
      } else if (q.section === 'PART_II') {
        if (ans?.partII) {
          let correctStmts = 0;
          q.statements.forEach((stmt) => {
            if (ans.partII?.[stmt.key] === stmt.correct) {
              correctStmts += 1;
            }
          });

          if (correctStmts === 1) p2Score += 0.1;
          else if (correctStmts === 2) p2Score += 0.25;
          else if (correctStmts === 3) p2Score += 0.5;
          else if (correctStmts === 4) {
            p2Score += 1.0;
            p2CorrectFull += 1;
          }
        }
      } else if (q.section === 'PART_III') {
        if (isPartIIIAnswerCorrect(ans?.partIII, q.correctAnswer)) {
          p3Correct += 1;
          p3Score += 0.5;
        }
      }
    });

    const totalScore = Math.min(10, p1Score + p2Score + p3Score);
    const timeSpent = 90 * 60 - timeRemaining;

    const result: TestResult = {
      submitted: true,
      score: totalScore,
      partIScore: p1Score,
      partIIScore: p2Score,
      partIIIScore: p3Score,
      totalCorrectPartI: p1Correct,
      totalCorrectPartII: p2CorrectFull,
      totalCorrectPartIII: p3Correct,
      timeSpentSeconds: timeSpent,
      violationCount: violationCount,
      violationLogs: violationLogs,
    };

    setTestResult(result);
    setIsSubmitted(true);
    setIsModalOpen(true);
    setTimeRemaining(90 * 60); // Reset timer to 90:00

    // Play victory celebration fanfare and launch fireworks
    soundFx.playCelebration();
    fireSubmissionConfetti(totalScore);

    // Auto-save score if we have player info
    if (playerInfo.name) {
      handleSaveScore({
        playerName: playerInfo.name,
        className: playerInfo.className,
        score: totalScore,
        timeSpentSeconds: timeSpent,
        violationCount: violationCount,
        examTitle: currentExamTitle,
      });
    }
  };

  // Format timer for mobile top bar
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Helper to check if question is answered for quick selector
  const isQuestionAnswered = (id: number) => {
    const ans = userAnswers[id];
    if (!ans) return false;
    if (ans.partI !== undefined) return true;
    if (ans.partII && Object.keys(ans.partII).length > 0) return true;
    if (ans.partIII !== undefined && ans.partIII.trim() !== '') return true;
    return false;
  };

  return (
    <div
      ref={appContainerRef}
      className="min-h-screen w-full bg-[#060d1f] text-slate-100 flex flex-col items-center justify-start lg:justify-center p-2 sm:p-3 selection:bg-amber-400 selection:text-black font-sans pb-safe pt-safe pl-safe pr-safe"
    >
      {/* DESKTOP TOP HEADER */}
      <div className="w-full max-w-7xl hidden lg:block mb-3 rounded-2xl overflow-hidden shadow-xl border border-[#1e345e]/80">
        <Header
          currentExamTitle={currentExamTitle}
          totalQuestions={questions.length}
          onOpenExamBank={() => setIsExamBankOpen(true)}
          examCount={examHistory.length}
          onOpenOwnerAuth={() => setIsOwnerAuthModalOpen(true)}
        />
      </div>

      {/* MOBILE STICKY TOP BAR & VIEW SWITCHER (ONLY ON MOBILE < LG - Solid bg avoids iOS 14-16 sticky touch drift) */}
      <div className="w-full max-w-7xl lg:hidden flex flex-col gap-1.5 mb-2 sticky top-0 z-30 bg-[#060d1f] pt-1 pb-1.5 border-b border-[#1e345e]">
        {/* Top Info Strip */}
        <div className="flex items-center justify-between bg-[#071026] px-2.5 py-1.5 rounded-xl border border-[#1e345e] gap-1.5">
          {/* App Badge & Owner Status */}
          <div className="flex items-center gap-1 min-w-0">
            <span className="text-amber-400 font-extrabold text-sm shrink-0">🎓</span>
            <button
              onClick={() => setIsOwnerAuthModalOpen(true)}
              className="text-xs font-extrabold text-[#facc15] uppercase tracking-wider truncate text-left cursor-pointer hover:underline py-1"
              title="Ôn Thi THPT 2027"
            >
              THPT 2027
            </button>
            {isOwnerAuthenticated && (
              <button
                onClick={() => setIsOwnerAuthModalOpen(true)}
                className="p-1 rounded-md text-[10px] font-bold border transition cursor-pointer flex items-center gap-0.5 bg-amber-400/20 text-amber-300 border-amber-400/60 shadow-sm shrink-0"
                title="Chủ tài khoản (Đã đăng nhập)"
              >
                <span>👑</span>
              </button>
            )}
          </div>

          {/* Quick Actions: Install App, Exam Bank, Start/Submit & Timer */}
          <div className="flex items-center gap-1.5 shrink-0">
            <MobileTopInstallBadge />
            <button
              onClick={() => setIsExamBankOpen(true)}
              className="bg-[#08122c] border border-amber-400 text-[#facc15] font-bold text-xs rounded-lg px-2.5 min-h-[34px] flex items-center gap-1 hover:bg-[#12244a] cursor-pointer"
              title="Mở Ngân Hàng Đề Thi (15 Đề)"
            >
              <span>📚</span>
              <span className="truncate max-w-[70px] sm:max-w-[120px]">
                {currentExamTitle}
              </span>
            </button>

            {!isStarted ? (
              <button
                onClick={() => setIsStartModalOpen(true)}
                className="px-2.5 min-h-[34px] rounded-lg bg-gradient-to-b from-emerald-500 to-emerald-700 border border-emerald-300 text-white font-extrabold text-xs flex items-center gap-1 shadow cursor-pointer"
              >
                <span>▶</span>
                <span>Thi</span>
              </button>
            ) : (
              <>
                <div className="px-2 min-h-[34px] flex items-center rounded-lg bg-[#030712] border border-amber-400/80 text-amber-300 font-mono font-bold text-xs tracking-wider">
                  ⏱️ {formattedTime}
                </div>
                {!isSubmitted && (
                  <button
                    onClick={calculateAndSubmitScore}
                    className="px-2.5 min-h-[34px] rounded-lg bg-gradient-to-b from-orange-500 to-orange-700 border border-orange-300 text-white font-extrabold text-xs flex items-center gap-1 shadow cursor-pointer"
                  >
                    <span>Nộp</span>
                  </button>
                )}
              </>
            )}

            {/* Mobile Anti-Cheat Alert Pill */}
            {isStarted && !isSubmitted && !isTeacherMode && violationCount > 0 && (
              <button
                onClick={() => setIsViolationModalOpen(true)}
                className="px-2 min-h-[34px] rounded-lg border text-[11px] font-black flex items-center gap-1 cursor-pointer bg-rose-950 border-rose-500 text-rose-300 animate-pulse"
                title={`Cảnh báo: Đã vi phạm ${violationCount} lần!`}
              >
                <span>🚨</span>
                <span>{violationCount}</span>
              </button>
            )}
          </div>
        </div>

        {/* 1-Tap Horizontal 22-Question Scroller Strip (Instant Thumb Selection on iPhone X - 18) */}
        <div
          ref={mobileQuestionStripRef}
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 px-0.5"
        >
          {questions.map((q, idx) => {
            const isSelected = idx === currentQuestionIndex && mobileTab === 'question';
            const answered = isQuestionAnswered(q.id);
            return (
              <button
                key={q.id}
                type="button"
                data-q-index={idx}
                onClick={() => {
                  soundFx.playClick();
                  handleSelectQuestion(q.id);
                }}
                className={`shrink-0 min-w-[38px] min-h-[34px] px-2 rounded-lg font-mono font-extrabold text-xs border flex items-center justify-center gap-0.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#facc15] text-[#0f172a] border-amber-300 shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                    : answered
                    ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/70'
                    : 'bg-[#08122c] text-slate-300 border-[#1e345e]'
                }`}
              >
                <span>{q.id}</span>
                {answered && !isSelected && <span className="text-[9px] text-emerald-400">✓</span>}
              </button>
            );
          })}
        </div>

        {/* Mobile Tab Switcher with Generous Touch Hitboxes */}
        <div className="grid grid-cols-3 gap-1 bg-[#040a1c] p-1 rounded-xl border border-[#1e345e]">
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileTab('question');
            }}
            className={`min-h-[38px] px-2 rounded-lg text-xs font-extrabold text-center cursor-pointer flex items-center justify-center gap-1 ${
              mobileTab === 'question'
                ? 'bg-[#facc15] text-[#0f172a] shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>📝</span>
            <span>CÂU HỎI ({currentQuestionIndex + 1}/{questions.length})</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setMobileTab('controls');
            }}
            className={`min-h-[38px] px-2 rounded-lg text-xs font-extrabold text-center cursor-pointer flex items-center justify-center gap-1 ${
              mobileTab === 'controls'
                ? 'bg-[#facc15] text-[#0f172a] shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>⚙️</span>
            <span>ĐIỀU KHIỂN</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setMobileTab('grid');
            }}
            className={`min-h-[38px] px-2 rounded-lg text-xs font-extrabold text-center cursor-pointer flex items-center justify-center gap-1 ${
              mobileTab === 'grid'
                ? 'bg-[#facc15] text-[#0f172a] shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>📊</span>
            <span>BẢNG CÂU</span>
          </button>
        </div>
      </div>

      {/* 3-Column Container Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        {/* Column 1 (Left Panel - Control Panel) */}
        <div
          className={`lg:col-span-3 w-full flex order-2 lg:order-1 ${
            mobileTab === 'controls' ? 'block' : 'hidden lg:flex'
          }`}
        >
          <LeftPanel
            currentQuestionId={currentQuestion ? currentQuestion.id : 1}
            onSelectQuestion={handleSelectQuestion}
            timeRemainingSeconds={timeRemaining}
            onSubmit={calculateAndSubmitScore}
            onStart={() => setIsStartModalOpen(true)}
            isStarted={isStarted}
            onToggleFullscreen={handleToggleFullscreen}
            onToggleTeacherMode={handleToggleTeacherMode}
            isTeacherMode={isTeacherMode}
            onToggleSound={handleToggleSound}
            isSoundEnabled={isSoundEnabled}
            onOpenWordImport={handleOpenWordImport}
            onOpenExamBank={() => setIsExamBankOpen(true)}
            currentExamTitle={currentExamTitle}
            userAnswers={userAnswers}
            questions={questions}
            isSubmitted={isSubmitted}
            examHistory={examHistory}
            onSelectHistoryExam={handleSelectHistoryExam}
            currentExamId={currentExamId}
            onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
            isOwnerAuthenticated={isOwnerAuthenticated}
            onOpenOwnerAuth={() => setIsOwnerAuthModalOpen(true)}
            onLogoutOwner={handleLogoutOwner}
            violationCount={violationCount}
            onOpenViolationLogs={() => setIsViolationModalOpen(true)}
          />
        </div>

        {/* Column 2 (Middle Panel - Header Title, Question Content, Diagram, Options) */}
        <div
          className={`lg:col-span-6 w-full flex order-1 lg:order-2 ${
            mobileTab === 'question' ? 'block' : 'hidden lg:flex'
          }`}
        >
          {currentQuestion && (
            <MiddlePanel
              question={currentQuestion}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              currentExamTitle={currentExamTitle}
              userAnswers={userAnswers}
              onSelectOptionPartI={handleSelectOptionPartI}
              onSelectOptionPartII={handleSelectOptionPartII}
              onChangeAnswerPartIII={handleChangeAnswerPartIII}
              onLockAnswerPartIII={handleLockAnswerPartIII}
              onPrev={() => {
                lockCurrentPartIIIIfNeeded();
                setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
              }}
              onNext={() => {
                lockCurrentPartIIIIfNeeded();
                setCurrentQuestionIndex((prev) =>
                  Math.min(questions.length - 1, prev + 1)
                );
              }}
              isTeacherMode={isTeacherMode}
              onToggleTeacherMode={handleToggleTeacherMode}
              isSubmitted={isSubmitted}
              onOpenOwnerAuth={() => setIsOwnerAuthModalOpen(true)}
              isStarted={isStarted}
              violationCount={violationCount}
              maxViolations={MAX_VIOLATIONS}
              onOpenViolationLogs={() => setIsViolationModalOpen(true)}
            />
          )}
        </div>

        {/* Column 3 (Right Panel - Exam Info & Question Grid) */}
        <div
          className={`lg:col-span-3 w-full flex order-3 lg:order-3 ${
            mobileTab === 'grid' ? 'block' : 'hidden lg:flex'
          }`}
        >
          <RightPanel
            testResult={testResult}
            isTeacherMode={isTeacherMode}
            questions={questions}
            currentQuestionId={currentQuestion ? currentQuestion.id : 1}
            onSelectQuestion={handleSelectQuestion}
            userAnswers={userAnswers}
            isOwnerAuthenticated={isOwnerAuthenticated}
            onOpenOwnerAuth={() => setIsOwnerAuthModalOpen(true)}
            currentExamTitle={currentExamTitle}
            onOpenExamBank={() => setIsExamBankOpen(true)}
          />
        </div>
      </div>

      {/* Submission Result Modal */}
      <SubmitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        result={testResult}
        onReview={() => setIsTeacherMode(true)}
        onRestart={handleReset}
        onSaveScore={() => {}} // Saved automatically
        currentExamTitle={currentExamTitle}
      />

      <Leaderboard 
        isOpen={isLeaderboardOpen} 
        onClose={() => setIsLeaderboardOpen(false)} 
        entries={leaderboard} 
      />

      {/* Word File Import Modal */}
      <WordImportModal
        isOpen={isWordModalOpen}
        onClose={() => setIsWordModalOpen(false)}
        onImportQuestions={handleImportQuestions}
        defaultExamTitle={`Đề ${examHistory.length + 1}`}
      />

      {/* Exam Bank Modal (Available for all players & teacher) */}
      <ExamBankModal
        isOpen={isExamBankOpen}
        onClose={() => setIsExamBankOpen(false)}
        exams={examHistory}
        currentExamId={currentExamId}
        onSelectExam={handleSelectHistoryExam}
        onGenerateSimilar={handleGenerateSimilarExam}
        onDeleteExam={handleDeleteExam}
        onRenameExam={handleRenameExam}
        onOpenWordImport={handleOpenWordImport}
        isOwnerAuthenticated={isOwnerAuthenticated}
        onOpenOwnerAuth={() => setIsOwnerAuthModalOpen(true)}
        isGenerating={isGeneratingExam}
        generatingStatus={generatingStatus}
      />

      {/* Owner Authentication Modal */}
      <OwnerAuthModal
        isOpen={isOwnerAuthModalOpen}
        onClose={() => setIsOwnerAuthModalOpen(false)}
        isOwnerAuthenticated={isOwnerAuthenticated}
        onAuthenticate={handleAuthenticateOwner}
        onChangePin={handleChangeOwnerPin}
        onLogout={handleLogoutOwner}
      />

      <StartModal
        isOpen={isStartModalOpen}
        onClose={() => setIsStartModalOpen(false)}
        currentExamTitle={currentExamTitle}
        totalQuestions={questions.length}
        onOpenExamBank={() => setIsExamBankOpen(true)}
        onStart={(name, className) => {
          setPlayerInfo({ name, className });
          setIsStartModalOpen(false);
          setIsStarted(true);
        }}
      />

      {/* Anti-Cheat Violation Warning Modal */}
      <ViolationWarningModal
        isOpen={isViolationModalOpen}
        onClose={() => setIsViolationModalOpen(false)}
        violationCount={violationCount}
        maxViolations={MAX_VIOLATIONS}
        latestViolationReason={latestViolationReason}
        violationLogs={violationLogs}
        isAutoSubmitted={isSubmitted && violationCount >= MAX_VIOLATIONS}
      />

      {/* Offline Status Indicator */}
      <OfflineIndicator />
    </div>
  );
}
