import React from 'react';

// Phần I - Câu 4: Bảng số liệu khảo sát về tuổi thọ của bóng đèn
export const DiagramDe15TableP1Q4: React.FC = () => {
  return (
    <div className="w-full max-w-[540px] mx-auto my-1 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-800 text-slate-900 text-center text-sm sm:text-base font-serif bg-white">
        <tbody>
          <tr>
            <td className="border border-slate-800 px-3 py-1.5 font-normal">Tuổi thọ</td>
            <td className="border border-slate-800 px-2 py-1.5">[3;5)</td>
            <td className="border border-slate-800 px-2 py-1.5">[5;7)</td>
            <td className="border border-slate-800 px-2 py-1.5">[7;9)</td>
            <td className="border border-slate-800 px-2 py-1.5">[9;11)</td>
            <td className="border border-slate-800 px-2 py-1.5">[11;13)</td>
          </tr>
          <tr>
            <td className="border border-slate-800 px-3 py-1.5 font-normal">Số bóng đèn</td>
            <td className="border border-slate-800 px-2 py-1.5">11</td>
            <td className="border border-slate-800 px-2 py-1.5">20</td>
            <td className="border border-slate-800 px-2 py-1.5">29</td>
            <td className="border border-slate-800 px-2 py-1.5">40</td>
            <td className="border border-slate-800 px-2 py-1.5">30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Phần I - Câu 5: Hình hộp chữ nhật ABCD.A'B'C'D' có đường chéo A'C và AC nét đứt
export const DiagramDe15BoxP1Q5: React.FC = () => {
  // Bottom base: A(115, 165) back-left, D(250, 165) back-right, B(80, 220) front-left, C(215, 220) front-right
  // Top base: A'(115, 50), D'(250, 50), B'(80, 105), C'(215, 105)
  const A = { x: 115, y: 165 };
  const D = { x: 250, y: 165 };
  const B = { x: 80, y: 220 };
  const C = { x: 215, y: 220 };

  const Ap = { x: 115, y: 50 };
  const Dp = { x: 250, y: 50 };
  const Bp = { x: 80, y: 105 };
  const Cp = { x: 215, y: 105 };

  return (
    <svg
      viewBox="0 0 320 250"
      className="w-full max-w-[300px] mx-auto select-none"
      aria-label="Hình hộp chữ nhật ABCD.A'B'C'D'"
    >
      {/* Hidden dashed lines from A and A'C, AC */}
      <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#111827" strokeWidth="1.4" strokeDasharray="5 4" />
      <line x1={A.x} y1={A.y} x2={D.x} y2={D.y} stroke="#111827" strokeWidth="1.4" strokeDasharray="5 4" />
      <line x1={A.x} y1={A.y} x2={Ap.x} y2={Ap.y} stroke="#111827" strokeWidth="1.4" strokeDasharray="5 4" />
      <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#111827" strokeWidth="1.4" strokeDasharray="5 4" />
      <line x1={Ap.x} y1={Ap.y} x2={C.x} y2={C.y} stroke="#111827" strokeWidth="1.4" strokeDasharray="5 4" />

      {/* Solid visible edges */}
      <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#111827" strokeWidth="1.5" />
      <line x1={C.x} y1={C.y} x2={D.x} y2={D.y} stroke="#111827" strokeWidth="1.5" />
      <line x1={B.x} y1={B.y} x2={Bp.x} y2={Bp.y} stroke="#111827" strokeWidth="1.5" />
      <line x1={C.x} y1={C.y} x2={Cp.x} y2={Cp.y} stroke="#111827" strokeWidth="1.5" />
      <line x1={D.x} y1={D.y} x2={Dp.x} y2={Dp.y} stroke="#111827" strokeWidth="1.5" />

      {/* Top face edges */}
      <line x1={Ap.x} y1={Ap.y} x2={Bp.x} y2={Bp.y} stroke="#111827" strokeWidth="1.5" />
      <line x1={Bp.x} y1={Bp.y} x2={Cp.x} y2={Cp.y} stroke="#111827" strokeWidth="1.5" />
      <line x1={Cp.x} y1={Cp.y} x2={Dp.x} y2={Dp.y} stroke="#111827" strokeWidth="1.5" />
      <line x1={Dp.x} y1={Dp.y} x2={Ap.x} y2={Ap.y} stroke="#111827" strokeWidth="1.5" />

      {/* Labels */}
      <text x={A.x - 16} y={A.y + 2} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">A</text>
      <text x={B.x - 16} y={B.y + 4} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">B</text>
      <text x={C.x + 6} y={C.y + 4} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">C</text>
      <text x={D.x + 6} y={D.y + 3} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">D</text>

      <text x={Ap.x - 18} y={Ap.y + 2} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">A&apos;</text>
      <text x={Bp.x - 18} y={Bp.y + 3} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">B&apos;</text>
      <text x={Cp.x - 18} y={Cp.y - 5} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">C&apos;</text>
      <text x={Dp.x + 5} y={Dp.y + 4} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">D&apos;</text>
    </svg>
  );
};

// Phần I - Câu 7: Bảng biến thiên của hàm số y = f(x)
export const DiagramDe15BBTP1Q7: React.FC = () => {
  return (
    <svg
      viewBox="0 0 460 155"
      className="w-full max-w-[440px] mx-auto select-none bg-white"
      aria-label="Bảng biến thiên Câu 7 Phần I Đề 15"
    >
      <defs>
        <marker id="de15-bbt-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M 0 0.8 L 6.5 3.5 L 0 6.2 z" fill="#111827" />
        </marker>
      </defs>

      {/* Outer and inner borders */}
      <line x1="15" y1="35" x2="445" y2="35" stroke="#111827" strokeWidth="1.2" />
      <line x1="15" y1="68" x2="445" y2="68" stroke="#111827" strokeWidth="1.2" />
      <line x1="58" y1="10" x2="58" y2="145" stroke="#111827" strokeWidth="1.2" />

      {/* Row 1: x */}
      <text x="36" y="26" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" textAnchor="middle" fill="#111827">x</text>
      <text x="80" y="26" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">−∞</text>
      <text x="205" y="26" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">2</text>
      <text x="305" y="26" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">3</text>
      <text x="420" y="26" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">+∞</text>

      {/* Row 2: f'(x) */}
      <text x="36" y="56" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" textAnchor="middle" fill="#111827">f&apos;(x)</text>
      <text x="142" y="56" fontSize="16" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">−</text>
      <text x="205" y="56" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">0</text>
      <text x="255" y="56" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">+</text>
      <text x="305" y="56" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">0</text>
      <text x="365" y="56" fontSize="16" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">−</text>

      {/* Row 3: f(x) */}
      <text x="36" y="108" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" textAnchor="middle" fill="#111827">f(x)</text>
      <text x="80" y="90" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">+∞</text>
      <text x="205" y="140" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">−1</text>
      <text x="305" y="90" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">2</text>
      <text x="422" y="140" fontSize="15" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">−∞</text>

      {/* Variation arrows */}
      <line x1="98" y1="86" x2="190" y2="132" stroke="#111827" strokeWidth="1.2" markerEnd="url(#de15-bbt-arr)" />
      <line x1="220" y1="132" x2="294" y2="88" stroke="#111827" strokeWidth="1.2" markerEnd="url(#de15-bbt-arr)" />
      <line x1="316" y1="88" x2="404" y2="132" stroke="#111827" strokeWidth="1.2" markerEnd="url(#de15-bbt-arr)" />
    </svg>
  );
};

// Phần I - Câu 10: Hình hộp ABCD.A'B'C'D' nghiêng
export const DiagramDe15ParallelepipedP1Q10: React.FC = () => {
  // Bottom face: B(60, 195), C(195, 195), D(265, 165), A(130, 165)
  // Top face shifted by (+20, -110): B'(80, 85), C'(215, 85), D'(285, 55), A'(150, 55)
  const A = { x: 138, y: 165 };
  const D = { x: 268, y: 165 };
  const B = { x: 65, y: 196 };
  const C = { x: 195, y: 196 };

  const Ap = { x: 156, y: 52 };
  const Dp = { x: 286, y: 52 };
  const Bp = { x: 83, y: 83 };
  const Cp = { x: 213, y: 83 };

  return (
    <svg
      viewBox="0 0 340 225"
      className="w-full max-w-[330px] mx-auto select-none"
      aria-label="Hình hộp ABCD.A'B'C'D' Câu 10 Phần I"
    >
      {/* Hidden edges from A */}
      <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#111827" strokeWidth="1.3" strokeDasharray="4 3" />
      <line x1={A.x} y1={A.y} x2={D.x} y2={D.y} stroke="#111827" strokeWidth="1.3" strokeDasharray="4 3" />
      <line x1={A.x} y1={A.y} x2={Ap.x} y2={Ap.y} stroke="#111827" strokeWidth="1.3" strokeDasharray="4 3" />

      {/* Visible bottom & lateral edges */}
      <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={C.x} y1={C.y} x2={D.x} y2={D.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={B.x} y1={B.y} x2={Bp.x} y2={Bp.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={C.x} y1={C.y} x2={Cp.x} y2={Cp.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={D.x} y1={D.y} x2={Dp.x} y2={Dp.y} stroke="#111827" strokeWidth="1.4" />

      {/* Top face edges */}
      <line x1={Ap.x} y1={Ap.y} x2={Bp.x} y2={Bp.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={Bp.x} y1={Bp.y} x2={Cp.x} y2={Cp.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={Cp.x} y1={Cp.y} x2={Dp.x} y2={Dp.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={Dp.x} y1={Dp.y} x2={Ap.x} y2={Ap.y} stroke="#111827" strokeWidth="1.4" />

      {/* Vertex dots */}
      {[A, B, C, D, Ap, Bp, Cp, Dp].map((pt, i) => (
        <circle key={i} cx={pt.x} cy={pt.y} r="1.8" fill="#111827" />
      ))}

      {/* Labels */}
      <text x={A.x - 4} y={A.y + 15} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">A</text>
      <text x={B.x - 14} y={B.y + 4} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">B</text>
      <text x={C.x - 3} y={C.y + 15} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">C</text>
      <text x={D.x + 6} y={D.y + 4} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">D</text>

      <text x={Ap.x - 5} y={Ap.y - 6} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">A&apos;</text>
      <text x={Bp.x - 16} y={Bp.y + 2} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">B&apos;</text>
      <text x={Cp.x - 4} y={Cp.y - 6} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">C&apos;</text>
      <text x={Dp.x + 5} y={Dp.y + 4} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">D&apos;</text>
    </svg>
  );
};

// Phần I - Câu 11: Đồ thị hàm số y = x + 1/(x - 1)
export const DiagramDe15GraphP1Q11: React.FC = () => {
  const ox = 115;
  const oy = 165;
  const s = 30;

  const toX = (x: number) => ox + x * s;
  const toY = (y: number) => oy - y * s;

  // Left branch: x from -2.1 to 0.72
  const leftPts: string[] = [];
  for (let i = 0; i <= 70; i++) {
    const x = -2.1 + (i / 70) * 2.82;
    const y = x + 1 / (x - 1);
    leftPts.push(`${i === 0 ? 'M' : 'L'} ${toX(x).toFixed(2)} ${toY(y).toFixed(2)}`);
  }

  // Right branch: x from 1.28 to 4.1
  const rightPts: string[] = [];
  for (let i = 0; i <= 70; i++) {
    const x = 1.28 + (i / 70) * 2.82;
    const y = x + 1 / (x - 1);
    rightPts.push(`${i === 0 ? 'M' : 'L'} ${toX(x).toFixed(2)} ${toY(y).toFixed(2)}`);
  }

  return (
    <svg
      viewBox="0 0 280 265"
      className="w-full max-w-[270px] mx-auto select-none"
      aria-label="Đồ thị hàm số y = x + 1/(x - 1)"
    >
      <defs>
        <marker id="de15-p1q11-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M 0 1 L 6.5 3.5 L 0 6 z" fill="#111827" />
        </marker>
      </defs>

      {/* Coordinate axes */}
      <line x1="25" y1={oy} x2="255" y2={oy} stroke="#111827" strokeWidth="1.2" markerEnd="url(#de15-p1q11-arr)" />
      <line x1={ox} y1="250" x2={ox} y2="15" stroke="#111827" strokeWidth="1.2" markerEnd="url(#de15-p1q11-arr)" />

      {/* Vertical asymptote x = 1 */}
      <line x1={toX(1)} y1="15" x2={toX(1)} y2="250" stroke="#111827" strokeWidth="1.1" />

      {/* Oblique asymptote y = x */}
      <line x1={toX(-2.2)} y1={toY(-2.2)} x2={toX(4.3)} y2={toY(4.3)} stroke="#111827" strokeWidth="1.1" />

      {/* Dashed projection lines for (1,1) and (2,3) */}
      <line x1={ox} y1={toY(1)} x2={toX(1)} y2={toY(1)} stroke="#111827" strokeWidth="1" strokeDasharray="3 3" />
      <line x1={ox} y1={toY(3)} x2={toX(2)} y2={toY(3)} stroke="#111827" strokeWidth="1" strokeDasharray="3 3" />
      <line x1={toX(2)} y1={oy} x2={toX(2)} y2={toY(3)} stroke="#111827" strokeWidth="1" strokeDasharray="3 3" />

      {/* Function curves */}
      <path d={leftPts.join(' ')} fill="none" stroke="#111827" strokeWidth="1.5" />
      <path d={rightPts.join(' ')} fill="none" stroke="#111827" strokeWidth="1.5" />

      {/* Labels */}
      <text x="250" y={oy + 14} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">x</text>
      <text x={ox - 12} y="24" fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">y</text>
      <text x={ox - 12} y={oy - 4} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">O</text>

      <text x={toX(1) + 4} y={oy + 13} fontSize="12" fontFamily="Times New Roman, serif" fill="#111827">1</text>
      <text x={toX(2) - 3} y={oy + 13} fontSize="12" fontFamily="Times New Roman, serif" fill="#111827">2</text>

      <text x={ox - 10} y={toY(1) + 4} fontSize="12" fontFamily="Times New Roman, serif" fill="#111827">1</text>
      <text x={ox - 10} y={toY(3) + 4} fontSize="12" fontFamily="Times New Roman, serif" fill="#111827">3</text>
      <text x={ox + 4} y={toY(-1) - 2} fontSize="12" fontFamily="Times New Roman, serif" fill="#111827">−1</text>
    </svg>
  );
};

// Phần II - Câu 1: Đồ thị hàm số y = x + 1 + 1/(x - 1)
export const DiagramDe15GraphP2Q1: React.FC = () => {
  const ox = 125;
  const oy = 185;
  const s = 26;

  const toX = (x: number) => ox + x * s;
  const toY = (y: number) => oy - y * s;

  // Left branch: x from -2.2 to 0.68
  const leftPts: string[] = [];
  for (let i = 0; i <= 70; i++) {
    const x = -2.2 + (i / 70) * 2.88;
    const y = x + 1 + 1 / (x - 1);
    leftPts.push(`${i === 0 ? 'M' : 'L'} ${toX(x).toFixed(2)} ${toY(y).toFixed(2)}`);
  }

  // Right branch: x from 1.25 to 4.5
  const rightPts: string[] = [];
  for (let i = 0; i <= 70; i++) {
    const x = 1.25 + (i / 70) * 3.25;
    const y = x + 1 + 1 / (x - 1);
    rightPts.push(`${i === 0 ? 'M' : 'L'} ${toX(x).toFixed(2)} ${toY(y).toFixed(2)}`);
  }

  return (
    <svg
      viewBox="0 0 290 270"
      className="w-full max-w-[280px] mx-auto select-none"
      aria-label="Đồ thị hàm số Câu 1 Phần II Đề 15"
    >
      <defs>
        <marker id="de15-p2q1-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M 0 1 L 6.5 3.5 L 0 6 z" fill="#111827" />
        </marker>
      </defs>

      {/* Coordinate axes */}
      <line x1="20" y1={oy} x2="265" y2={oy} stroke="#111827" strokeWidth="1.3" markerEnd="url(#de15-p2q1-arr)" />
      <line x1={ox} y1="255" x2={ox} y2="15" stroke="#111827" strokeWidth="1.3" markerEnd="url(#de15-p2q1-arr)" />

      {/* Right angle symbol at O */}
      <polyline points={`${ox},${oy - 7} ${ox + 7},${oy - 7} ${ox + 7},${oy}`} fill="none" stroke="#111827" strokeWidth="1" />

      {/* Vertical asymptote x = 1 */}
      <line x1={toX(1)} y1="15" x2={toX(1)} y2="255" stroke="#111827" strokeWidth="1.1" />

      {/* Oblique asymptote y = x + 1 */}
      <line x1={toX(-2.5)} y1={toY(-1.5)} x2={toX(4.6)} y2={toY(5.6)} stroke="#111827" strokeWidth="1.1" />

      {/* Dashed line from (0, 2) to (1, 2) */}
      <line x1={ox} y1={toY(2)} x2={toX(1)} y2={toY(2)} stroke="#111827" strokeWidth="1.1" strokeDasharray="3 3" />

      {/* Curves (upper branch in red/brown, lower branch in dark/red as in original image) */}
      <path d={leftPts.join(' ')} fill="none" stroke="#374151" strokeWidth="1.6" />
      <path d={rightPts.join(' ')} fill="none" stroke="#b91c1c" strokeWidth="1.6" />

      {/* Dots on y-axis */}
      <circle cx={ox} cy={toY(1)} r="2" fill="#111827" />
      <circle cx={ox} cy={toY(2)} r="2" fill="#111827" />

      {/* Labels */}
      <text x="260" y={oy - 6} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">x</text>
      <text x={ox + 6} y="24" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">y</text>
      <text x={ox - 13} y={oy + 14} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">O</text>

      <text x={toX(1) + 4} y={oy + 14} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">1</text>
      <text x={ox - 12} y={toY(1) + 4} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">1</text>
      <text x={ox - 12} y={toY(2) + 4} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">2</text>
    </svg>
  );
};

// Phần II - Câu 2: Đồ thị hai hàm số f(x), g(x) và hai đường cong (C1), (C2)
export const DiagramDe15GraphP2Q2: React.FC = () => {
  const ox = 125;
  const oy = 185;
  const s = 72;

  const toX = (x: number) => ox + x * s;
  const toY = (y: number) => oy - y * s;

  // y = f(x) = sqrt(x - 1), x in [1, 2.35]
  const fPts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const x = 1 + (i / 60) * 1.35;
    const y = Math.sqrt(x - 1);
    fPts.push(`${i === 0 ? 'M' : 'L'} ${toX(x).toFixed(2)} ${toY(y).toFixed(2)}`);
  }

  // (C1): x = sqrt(y - 1) => y = x^2 + 1 for x in [0, 0.98], and in the diagram it extends slightly to the left of y-axis like a parabola y = x^2 + 1
  const c1Pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const x = -0.52 + (i / 60) * 1.48;
    const y = x * x + 1;
    c1Pts.push(`${i === 0 ? 'M' : 'L'} ${toX(x).toFixed(2)} ${toY(y).toFixed(2)}`);
  }

  // y = g(x) = 1/(x + 1), x in [-0.52, 2.35]
  const gPts: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const x = -0.52 + (i / 80) * 2.87;
    const y = 1 / (x + 1);
    gPts.push(`${i === 0 ? 'M' : 'L'} ${toX(x).toFixed(2)} ${toY(y).toFixed(2)}`);
  }

  // (C2): y = 1/x - 1, x in [0.32, 1.55]
  const c2Pts: string[] = [];
  for (let i = 0; i <= 70; i++) {
    const x = 0.32 + (i / 70) * 1.23;
    const y = 1 / x - 1;
    c2Pts.push(`${i === 0 ? 'M' : 'L'} ${toX(x).toFixed(2)} ${toY(y).toFixed(2)}`);
  }

  // Intersection points:
  // P(x1, y1): sqrt(x - 1) = 1/(x + 1) => (x - 1)(x + 1)^2 = 1 => x1 ≈ 1.2056, y1 ≈ 0.4534
  const P = { x: toX(1.2056), y: toY(0.4534) };
  // R(x3, y3): (0.4534, 1.2056)
  const R = { x: toX(0.4534), y: toY(1.2056) };
  // Q(x2, y2): ((sqrt(5)-1)/2, (sqrt(5)-1)/2) ≈ (0.618, 0.618)
  const Q = { x: toX(0.618), y: toY(0.618) };

  return (
    <svg
      viewBox="0 0 330 235"
      className="w-full max-w-[340px] mx-auto select-none"
      aria-label="Đồ thị các đường cong Câu 2 Phần II Đề 15"
    >
      <defs>
        <marker id="de15-p2q2-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M 0 1 L 6.5 3.5 L 0 6 z" fill="#111827" />
        </marker>
      </defs>

      {/* Coordinate axes */}
      <line x1="25" y1={oy} x2="305" y2={oy} stroke="#111827" strokeWidth="1.2" markerEnd="url(#de15-p2q2-arr)" />
      <line x1={ox} y1="225" x2={ox} y2="15" stroke="#111827" strokeWidth="1.2" markerEnd="url(#de15-p2q2-arr)" />

      {/* Dashed vertical asymptote x = -1 */}
      <line x1={toX(-1)} y1="15" x2={toX(-1)} y2="225" stroke="#111827" strokeWidth="1.1" strokeDasharray="4 4" />

      {/* 4 Curves */}
      <path d={fPts.join(' ')} fill="none" stroke="#111827" strokeWidth="1.6" />
      <path d={c1Pts.join(' ')} fill="none" stroke="#111827" strokeWidth="1.6" />
      <path d={gPts.join(' ')} fill="none" stroke="#111827" strokeWidth="1.6" />
      <path d={c2Pts.join(' ')} fill="none" stroke="#111827" strokeWidth="1.6" />

      {/* Intersection points P, Q, R */}
      <circle cx={P.x} cy={P.y} r="2" fill="#111827" />
      <circle cx={Q.x} cy={Q.y} r="2" fill="#111827" />
      <circle cx={R.x} cy={R.y} r="2" fill="#111827" />

      {/* Curve Labels */}
      <text x={toX(1.0)} y="26" fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">
        (<tspan fontStyle="italic">C</tspan><tspan dy="3" fontSize="9">1</tspan><tspan dy="-3">)</tspan>
      </text>
      <text x={toX(1.8)} y={toY(0.98)} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">
        y = f(x)
      </text>
      <text x={toX(1.82)} y={toY(0.45)} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">
        y = g(x)
      </text>
      <text x={toX(1.58)} y={toY(-0.38)} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">
        (<tspan fontStyle="italic">C</tspan><tspan dy="3" fontSize="9">2</tspan><tspan dy="-3">)</tspan>
      </text>

      {/* Point Labels */}
      <text x={R.x + 8} y={R.y + 4} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">
        <tspan fontStyle="italic">R</tspan>(<tspan fontStyle="italic">x</tspan><tspan dy="3" fontSize="9">3</tspan><tspan dy="-3">, </tspan><tspan fontStyle="italic">y</tspan><tspan dy="3" fontSize="9">3</tspan><tspan dy="-3">)</tspan>
      </text>
      <text x={Q.x + 6} y={Q.y - 5} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">
        <tspan fontStyle="italic">Q</tspan>(<tspan fontStyle="italic">x</tspan><tspan dy="3" fontSize="9">2</tspan><tspan dy="-3">, </tspan><tspan fontStyle="italic">y</tspan><tspan dy="3" fontSize="9">2</tspan><tspan dy="-3">)</tspan>
      </text>
      <text x={P.x + 8} y={P.y + 15} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">
        <tspan fontStyle="italic">P</tspan>(<tspan fontStyle="italic">x</tspan><tspan dy="3" fontSize="9">1</tspan><tspan dy="-3">, </tspan><tspan fontStyle="italic">y</tspan><tspan dy="3" fontSize="9">1</tspan><tspan dy="-3">)</tspan>
      </text>

      {/* Axis Labels */}
      <text x="298" y={oy + 14} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">x</text>
      <text x={ox - 13} y="24" fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">y</text>
      <text x={ox - 13} y={oy + 14} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">O</text>
      <text x={toX(-1) - 16} y={oy + 14} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">−1</text>
      <text x={toX(1) - 4} y={oy + 14} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">1</text>
      <text x={ox - 10} y={toY(1) + 12} fontSize="13" fontFamily="Times New Roman, serif" fill="#111827">1</text>
    </svg>
  );
};

// Phần II - Câu 3: Bảng thống kê điểm thi học kì 1 môn Toán của lớp 12A
export const DiagramDe15TableP2Q3: React.FC = () => {
  return (
    <div className="w-full max-w-[520px] mx-auto my-1 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-800 text-slate-900 text-center text-sm sm:text-base font-serif bg-white">
        <tbody>
          <tr>
            <td className="border border-slate-800 px-3 py-1.5 font-normal">Nhóm</td>
            <td className="border border-slate-800 px-2 py-1.5">[5;6)</td>
            <td className="border border-slate-800 px-2 py-1.5">[6;7)</td>
            <td className="border border-slate-800 px-2 py-1.5">[7;8)</td>
            <td className="border border-slate-800 px-2 py-1.5">[8;9)</td>
            <td className="border border-slate-800 px-2 py-1.5">[9;10)</td>
          </tr>
          <tr>
            <td className="border border-slate-800 px-3 py-1.5 font-normal">Tần số</td>
            <td className="border border-slate-800 px-2 py-1.5">2</td>
            <td className="border border-slate-800 px-2 py-1.5">3</td>
            <td className="border border-slate-800 px-2 py-1.5">8</td>
            <td className="border border-slate-800 px-2 py-1.5">15</td>
            <td className="border border-slate-800 px-2 py-1.5">12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Phần III - Câu 1: Hai hình nón đối đỉnh cắt bởi mặt phẳng alpha theo AC, BD
export const DiagramDe15ConesP3Q1: React.FC = () => {
  // Center O(130, 130)
  // Top ellipse centered at (130, 48), rx=58, ry=15
  // Bottom ellipse centered at (130, 212), rx=58, ry=15
  // Plane alpha intersects top base along AB: A(108, 61), B(152, 35)
  // Plane alpha intersects bottom base along DC: D(108, 225), C(152, 199)
  const A = { x: 108, y: 61 };
  const B = { x: 152, y: 35 };
  const D = { x: 108, y: 225 };
  const C = { x: 152, y: 199 };

  return (
    <svg
      viewBox="0 0 260 260"
      className="w-full max-w-[240px] mx-auto select-none"
      aria-label="Hai hình nón đối đỉnh Apollonius Câu 1 Phần III"
    >
      {/* Shaded plane alpha polygon A-B-C-D */}
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
        fill="#e5e7eb"
        fillOpacity="0.85"
        stroke="#111827"
        strokeWidth="1.3"
      />

      {/* Vertical axis line */}
      <line x1="130" y1="12" x2="130" y2="248" stroke="#111827" strokeWidth="1.3" />

      {/* Top cone base ellipse */}
      <ellipse cx="130" cy="48" rx="58" ry="15" fill="none" stroke="#111827" strokeWidth="1.5" />

      {/* Bottom cone base ellipse: back half dashed, front half solid */}
      <path d="M 72 212 A 58 15 0 0 1 188 212" fill="none" stroke="#111827" strokeWidth="1.4" strokeDasharray="4 4" />
      <path d="M 72 212 A 58 15 0 0 0 188 212" fill="none" stroke="#111827" strokeWidth="1.5" />

      {/* Cone outer generators crossing at O(130, 130) */}
      <line x1="72" y1="48" x2="188" y2="212" stroke="#111827" strokeWidth="1.5" />
      <line x1="188" y1="48" x2="72" y2="212" stroke="#111827" strokeWidth="1.5" />

      {/* Plane alpha intersection lines AC, BD */}
      <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#111827" strokeWidth="1.4" />
      <line x1={D.x} y1={D.y} x2={C.x} y2={C.y} stroke="#111827" strokeWidth="1.4" strokeDasharray="4 3" />

      {/* Additional vertical guide lines from A, B, C, D as in original figure */}
      <line x1={A.x} y1={A.y} x2={D.x} y2={D.y} stroke="#111827" strokeWidth="1" strokeDasharray="3 3" />
      <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#111827" strokeWidth="1" strokeDasharray="3 3" />

      {/* Labels */}
      <text x={A.x - 13} y={A.y - 4} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">A</text>
      <text x={B.x - 10} y={B.y - 6} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">B</text>
      <text x={C.x - 14} y={C.y + 16} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">C</text>
      <text x={D.x - 10} y={D.y + 16} fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">D</text>
      <text x="115" y="218" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">α</text>
    </svg>
  );
};

// Phần III - Câu 3: Các tấm thẻ đánh số 1, 2, 3, ..., 102
export const DiagramDe15CardsP3Q3: React.FC = () => {
  return (
    <svg
      viewBox="0 0 260 60"
      className="w-full max-w-[240px] mx-auto select-none"
      aria-label="Các tấm thẻ từ 1 đến 102"
    >
      {/* Card 1 */}
      <rect x="20" y="10" width="32" height="40" rx="4" fill="#fde047" stroke="#111827" strokeWidth="1.4" />
      <text x="36" y="36" fontSize="16" fontWeight="bold" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">1</text>

      {/* Card 2 */}
      <rect x="62" y="10" width="32" height="40" rx="4" fill="#fde047" stroke="#111827" strokeWidth="1.4" />
      <text x="78" y="36" fontSize="16" fontWeight="bold" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">2</text>

      {/* Card 3 */}
      <rect x="104" y="10" width="32" height="40" rx="4" fill="#fde047" stroke="#111827" strokeWidth="1.4" />
      <text x="120" y="36" fontSize="16" fontWeight="bold" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">3</text>

      {/* Dots */}
      <text x="158" y="34" fontSize="20" fontWeight="bold" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">...</text>

      {/* Card 102 */}
      <rect x="180" y="10" width="36" height="40" rx="4" fill="#fde047" stroke="#111827" strokeWidth="1.4" />
      <text x="198" y="36" fontSize="15" fontWeight="bold" fontFamily="Times New Roman, serif" textAnchor="middle" fill="#111827">102</text>
    </svg>
  );
};

// Phần III - Câu 4: Hai mặt phẳng alpha, beta giao nhau theo l, hai đường tròn S1, S2 tiếp xúc tại C
export const DiagramDe15CirclesP3Q4: React.FC = () => {
  return (
    <svg
      viewBox="0 0 420 220"
      className="w-full max-w-[400px] mx-auto select-none"
      aria-label="Hai mặt phẳng alpha, beta và hai đường tròn S1, S2"
    >
      {/* Plane alpha (left tilted quadrilateral, blue border) */}
      <polygon
        points="60,115 165,28 265,112 160,198"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="1.3"
      />

      {/* Plane beta (right horizontal parallelogram, blue border) */}
      <polyline
        points="265,112 395,112 330,198 160,198"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="1.3"
      />

      {/* Intersection line l */}
      <line x1="265" y1="112" x2="160" y2="198" stroke="#1d4ed8" strokeWidth="1.5" />

      {/* Circle S1 on plane alpha (tilted ellipse tangent to l at C(213, 155)) */}
      <ellipse
        cx="178"
        cy="122"
        rx="48"
        ry="24"
        transform="rotate(42 178 122)"
        fill="none"
        stroke="#111827"
        strokeWidth="1.6"
      />

      {/* Circle S2 on plane beta (horizontal ellipse tangent to l at C(213, 155)) */}
      <ellipse
        cx="256"
        cy="144"
        rx="46"
        ry="15"
        transform="rotate(-8 256 144)"
        fill="none"
        stroke="#111827"
        strokeWidth="1.6"
      />

      {/* Radius O1C and O2C */}
      <line x1="178" y1="122" x2="213" y2="155" stroke="#111827" strokeWidth="1.1" />
      <line x1="256" y1="144" x2="213" y2="155" stroke="#111827" strokeWidth="1.1" />

      {/* Normals from P(255, 42) to O1(178, 122) and O2(256, 144) */}
      <line x1="255" y1="42" x2="178" y2="122" stroke="#111827" strokeWidth="1.1" strokeDasharray="3 3" />
      <line x1="255" y1="42" x2="256" y2="144" stroke="#111827" strokeWidth="1.1" strokeDasharray="3 3" />

      {/* Right angle symbols at O1 and O2 */}
      <polyline points="184,116 190,122 184,128" fill="none" stroke="#111827" strokeWidth="1" />
      <polyline points="256,136 248,138 248,146" fill="none" stroke="#111827" strokeWidth="1" />

      {/* Red vectors PA and PB */}
      <line x1="255" y1="42" x2="143" y2="108" stroke="#dc2626" strokeWidth="1.3" />
      <line x1="255" y1="42" x2="282" y2="134" stroke="#dc2626" strokeWidth="1.3" />

      {/* Points */}
      <circle cx="255" cy="42" r="2" fill="#111827" />
      <circle cx="178" cy="122" r="2" fill="#111827" />
      <circle cx="256" cy="144" r="2" fill="#111827" />
      <circle cx="213" cy="155" r="2" fill="#111827" />
      <circle cx="143" cy="108" r="2" fill="#dc2626" />
      <circle cx="282" cy="134" r="2" fill="#dc2626" />

      {/* Labels */}
      <text x="160" y="45" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#1d4ed8">α</text>
      <text x="364" y="130" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#1d4ed8">β</text>
      <text x="150" y="192" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#1d4ed8">l</text>

      <text x="262" y="46" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">P</text>
      <text x="132" y="85" fontSize="16" fontFamily="Times New Roman, serif" fill="#111827">
        <tspan fontStyle="italic">S</tspan><tspan dy="4" fontSize="11">1</tspan>
      </text>
      <text x="302" y="164" fontSize="16" fontFamily="Times New Roman, serif" fill="#111827">
        <tspan fontStyle="italic">S</tspan><tspan dy="4" fontSize="11">2</tspan>
      </text>

      <text x="128" y="112" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">A</text>
      <text x="287" y="134" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">B</text>
      <text x="202" y="172" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">C</text>

      <text x="162" y="138" fontSize="15" fontFamily="Times New Roman, serif" fill="#111827">
        <tspan fontStyle="italic">O</tspan><tspan dy="4" fontSize="11">1</tspan>
      </text>
      <text x="260" y="156" fontSize="15" fontFamily="Times New Roman, serif" fill="#111827">
        <tspan fontStyle="italic">O</tspan><tspan dy="4" fontSize="11">2</tspan>
      </text>
    </svg>
  );
};

// Phần III - Câu 5: Đường cong y = x^3, tiếp tuyến AB, đường tròn (C) và đường tròn nhỏ tại P
export const DiagramDe15CubicCircleP3Q5: React.FC = () => {
  // Visual coordinate mapping matching the figure on page 6:
  // Origin O(140, 225)
  // A(-1, -1) -> (116, 249)
  // B(2, 8) -> (182, 72)
  // Midpoint M of AB -> ((116+182)/2, (249+72)/2) = (149, 160.5), radius R = 94.5
  const ox = 140;
  const oy = 225;

  return (
    <svg
      viewBox="0 0 300 290"
      className="w-full max-w-[280px] mx-auto select-none"
      aria-label="Đường cong y = x^3 và đường tròn đường kính AB"
    >
      <defs>
        <marker id="de15-p3q5-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M 0 1 L 6.5 3.5 L 0 6 z" fill="#b91c1c" />
        </marker>
      </defs>

      {/* Coordinate axes (thin dark red as in figure) */}
      <line x1="45" y1={oy} x2="280" y2={oy} stroke="#991b1b" strokeWidth="1" markerEnd="url(#de15-p3q5-arr)" />
      <line x1={ox} y1="278" x2={ox} y2="15" stroke="#991b1b" strokeWidth="1" markerEnd="url(#de15-p3q5-arr)" />

      {/* Outer circle (C) with diameter AB in green */}
      <circle cx="149" cy="160.5" r="94.5" fill="none" stroke="#15803d" strokeWidth="1.8" />

      {/* Small yellow-green circle tangent to AB and P */}
      <circle cx="151" cy="195" r="13" fill="#fde047" fillOpacity="0.65" stroke="#15803d" strokeWidth="1.6" />

      {/* Tangent line through A(116, 249) and B(182, 72) */}
      <line x1="105" y1="278.5" x2="195" y2="37" stroke="#111827" strokeWidth="1.5" />

      {/* Cubic curve y = x^3 passing through A(116, 249), O(140, 225), P(163, 200), B(182, 72) */}
      <path
        d="M 108 278 C 115 245, 124 225, 140 225 C 158 225, 168 185, 185 40"
        fill="none"
        stroke="#312e81"
        strokeWidth="1.7"
      />

      {/* Dashed coordinates for A(-1, -1) */}
      <line x1="116" y1={oy} x2="116" y2="249" stroke="#111827" strokeWidth="1" strokeDasharray="3 3" />
      <line x1={ox} y1="249" x2="116" y2="249" stroke="#111827" strokeWidth="1" strokeDasharray="3 3" />

      {/* Points A, B, P, O */}
      <circle cx="116" cy="249" r="2.5" fill="#dc2626" stroke="#111827" strokeWidth="0.8" />
      <circle cx="182" cy="72" r="2.5" fill="#dc2626" stroke="#111827" strokeWidth="0.8" />
      <circle cx="163" cy="200" r="2.5" fill="#1d4ed8" stroke="#111827" strokeWidth="0.8" />
      <circle cx={ox} cy={oy} r="2" fill="#111827" />

      {/* Labels */}
      <text x="272" y={oy + 14} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">x</text>
      <text x={ox - 13} y="25" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">y</text>
      <text x={ox + 3} y={oy + 13} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">O</text>

      <text x="102" y="258" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">A</text>
      <text x="187" y="70" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">B</text>
      <text x="167" y="207" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">P</text>
      <text x="246" y="142" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#111827">(C)</text>

      <text x="104" y={oy - 3} fontSize="12" fontFamily="Times New Roman, serif" fill="#111827">−1</text>
      <text x={ox + 3} y="248" fontSize="12" fontFamily="Times New Roman, serif" fill="#111827">−1</text>
    </svg>
  );
};

// Phần III - Câu 6: Sơ đồ máy hàm số f(x) = tổng các chữ số của x
export const DiagramDe15MachineP3Q6: React.FC = () => {
  return (
    <svg
      viewBox="0 0 320 245"
      className="w-full max-w-[300px] mx-auto select-none bg-white"
      aria-label="Máy hàm số f(x) = tổng các chữ số của x"
    >
      {/* Top funnel / input */}
      <text x="148" y="34" fontSize="18" fontFamily="Arial, sans-serif" textAnchor="middle" fill="#111827">x</text>
      <text x="208" y="26" fontSize="14" fontFamily="Arial, sans-serif" textAnchor="middle" fill="#111827">Đầu vào</text>

      {/* Magenta input arrow */}
      <line x1="148" y1="42" x2="148" y2="75" stroke="#be185d" strokeWidth="2.5" />
      <path d="M 143 66 L 148 78 L 153 66" fill="none" stroke="#be185d" strokeWidth="2.2" />

      {/* Machine box with funnel opening */}
      <polyline
        points="115,35 136,82 45,82 45,168 134,168 112,212"
        fill="none"
        stroke="#111827"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="182,32 160,82 265,82 265,168 162,168 188,212"
        fill="none"
        stroke="#111827"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inside machine text */}
      <text x="155" y="120" fontSize="16" fontFamily="Arial, sans-serif" textAnchor="middle" fill="#111827">
        f(x) = tổng các
      </text>
      <text x="155" y="144" fontSize="16" fontFamily="Arial, sans-serif" textAnchor="middle" fill="#111827">
        chữ số của x
      </text>

      {/* Magenta output arrow */}
      <line x1="148" y1="170" x2="148" y2="202" stroke="#be185d" strokeWidth="2.5" />
      <path d="M 143 193 L 148 205 L 153 193" fill="none" stroke="#be185d" strokeWidth="2.2" />

      {/* Bottom output labels */}
      <text x="148" y="224" fontSize="17" fontFamily="Arial, sans-serif" textAnchor="middle" fill="#111827">f(x)</text>
      <text x="208" y="232" fontSize="14" fontFamily="Arial, sans-serif" textAnchor="middle" fill="#111827">Đầu ra</text>
    </svg>
  );
};
