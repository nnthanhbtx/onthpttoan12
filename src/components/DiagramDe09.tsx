import React from 'react';

/**
 * Phần I - Câu 1 (Đề 09): Bảng biến thiên hàm số f(x) tại x = 0 (y = 4) và x = 1 (y = 5) chuẩn 100% ảnh gốc
 */
export const DiagramDe09BBTP1Q1: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 165"
      className="w-full max-w-[480px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de09-bbt-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0f172a" />
        </marker>
      </defs>

      <rect x="8" y="6" width="484" height="152" fill="#ffffff" />

      {/* Table borders */}
      <line x1="14" y1="38" x2="486" y2="38" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="14" y1="72" x2="486" y2="72" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="64" y1="10" x2="64" y2="154" stroke="#0f172a" strokeWidth="1.2" />

      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fill="#0f172a"
        textAnchor="middle"
      >
        {/* Row 1: x */}
        <text x="39" y="28" fontStyle="italic">x</text>
        <text x="86" y="29">−∞</text>
        <text x="206" y="28">0</text>
        <text x="336" y="28">1</text>
        <text x="464" y="29">+∞</text>

        {/* Row 2: f'(x) */}
        <text x="39" y="60" fontStyle="italic">f&apos;(x)</text>
        <text x="145" y="60">−</text>
        <text x="206" y="60">0</text>
        <text x="271" y="60">+</text>
        <text x="336" y="60">0</text>
        <text x="400" y="60">−</text>

        {/* Row 3: f(x) */}
        <text x="39" y="114" fontStyle="italic">f(x)</text>
        <text x="86" y="116">+∞</text>
        <text x="206" y="144">4</text>
        <text x="336" y="102">5</text>
        <text x="454" y="125">−∞</text>
      </g>

      {/* Arrows */}
      <g stroke="#0f172a" strokeWidth="1.2" fill="none">
        <line
          x1="84"
          y1="88"
          x2="192"
          y2="140"
          markerEnd="url(#de09-bbt-arrow)"
        />
        <line
          x1="220"
          y1="140"
          x2="322"
          y2="88"
          markerEnd="url(#de09-bbt-arrow)"
        />
        <line
          x1="350"
          y1="88"
          x2="458"
          y2="140"
          markerEnd="url(#de09-bbt-arrow)"
        />
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 2 (Đề 09): Đồ thị hàm phân thức y = (-x + 1)/(x - 2) có TCĐ x = 2, TCN y = -1 chuẩn 100% ảnh gốc
 */
export const DiagramDe09GraphP1Q2: React.FC = () => {
  // O at (90, 75), scale s = 26px per unit
  // x = 1 -> 116, x = 2 -> 142
  // y = -1 -> 101
  const ox = 90;
  const oy = 75;
  const s = 26;

  const buildBranch = (xStart: number, xEnd: number, steps: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const x = xStart + ((xEnd - xStart) * i) / steps;
      const y = (-x + 1) / (x - 2);
      const px = ox + x * s;
      const py = oy - y * s;
      pts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
    }
    return pts.join(' ');
  };

  const leftPath = buildBranch(-2.2, 1.72, 50);
  const rightPath = buildBranch(2.26, 5.8, 50);

  return (
    <svg
      viewBox="0 0 260 205"
      className="w-full max-w-[245px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de09-q2-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes Ox, Oy */}
      <line
        x1="28"
        y1={oy}
        x2="245"
        y2={oy}
        stroke="#0f172a"
        strokeWidth="1.5"
        markerEnd="url(#de09-q2-arrow)"
      />
      <line
        x1={ox}
        y1="190"
        x2={ox}
        y2="14"
        stroke="#0f172a"
        strokeWidth="1.5"
        markerEnd="url(#de09-q2-arrow)"
      />

      {/* Asymptotes x = 2 (px = 142) and y = -1 (py = 101) */}
      <line
        x1={ox + 2 * s}
        y1="14"
        x2={ox + 2 * s}
        y2="190"
        stroke="#0f172a"
        strokeWidth="1.3"
      />
      <line
        x1="28"
        y1={oy + s}
        x2="245"
        y2={oy + s}
        stroke="#0f172a"
        strokeWidth="1.3"
      />

      {/* Hyperbola branches */}
      <path
        d={leftPath}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d={rightPath}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="14"
        fontWeight="bold"
        fill="#0f172a"
      >
        <text x="95" y="23" fontStyle="italic">y</text>
        <text x="234" y="69" fontStyle="italic">x</text>
        <text x="74" y="70" fontStyle="italic">O</text>
        <text x="110" y="70">1</text>
        <text x="146" y="70">2</text>
        <text x="69" y="116">−1</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 3 (Đề 09): Đồ thị hàm phân thức y = (x - 2)/(x - 1) có TCĐ x = 1, TCN y = 1, qua (0;2) và (2;0) chuẩn 100% ảnh gốc
 */
export const DiagramDe09GraphP1Q3: React.FC = () => {
  // O at (115, 115), scale s = 28px per unit
  // x = 1 -> 143, x = 2 -> 171
  // y = 1 -> 87, y = 2 -> 59
  const ox = 115;
  const oy = 115;
  const s = 28;

  const buildBranch = (xStart: number, xEnd: number, steps: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const x = xStart + ((xEnd - xStart) * i) / steps;
      const y = (x - 2) / (x - 1);
      const px = ox + x * s;
      const py = oy - y * s;
      pts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
    }
    return pts.join(' ');
  };

  const leftPath = buildBranch(-3.2, 0.72, 50);
  const rightPath = buildBranch(1.28, 4.8, 50);

  return (
    <svg
      viewBox="0 0 265 215"
      className="w-full max-w-[245px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de09-q3-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#334155" />
        </marker>
      </defs>

      {/* Axes Ox, Oy */}
      <line
        x1="24"
        y1={oy}
        x2="252"
        y2={oy}
        stroke="#334155"
        strokeWidth="1.1"
        markerEnd="url(#de09-q3-arrow)"
      />
      <line
        x1={ox}
        y1="202"
        x2={ox}
        y2="14"
        stroke="#334155"
        strokeWidth="1.1"
        markerEnd="url(#de09-q3-arrow)"
      />

      {/* Dashed Asymptotes x = 1 and y = 1 */}
      <g stroke="#334155" strokeWidth="1.2" strokeDasharray="3.5,3">
        <line x1={ox + s} y1="14" x2={ox + s} y2="202" />
        <line x1="24" y1={oy - s} x2="252" y2={oy - s} />
      </g>

      {/* Hyperbola branches */}
      <path
        d={leftPath}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d={rightPath}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="13"
        fill="#0f172a"
      >
        <text x="104" y="22" fontStyle="italic">y</text>
        <text x="242" y="128" fontStyle="italic">x</text>
        <text x="101" y="129" fontStyle="italic">O</text>
        <text x="146" y="129">1</text>
        <text x="174" y="129">2</text>
        <text x="105" y="84">1</text>
        <text x="105" y="61">2</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 7 (Đề 09): Hình chóp cụt tam giác đều ABC - A1B1C1 chuẩn 100% ảnh gốc
 */
export const DiagramDe09FrustumP1Q7: React.FC = () => {
  // Base ABC: A=(44, 128), B=(118, 168), C=(224, 128)
  // Top A1B1C1: A1=(84, 38), B1=(124, 58), C1=(172, 38)
  return (
    <svg
      viewBox="0 0 270 195"
      className="w-full max-w-[260px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed edge AC */}
      <line
        x1="44"
        y1="128"
        x2="224"
        y2="128"
        stroke="#1e1b4b"
        strokeWidth="1.6"
        strokeDasharray="5,4"
      />

      {/* Visible solid edges */}
      <g
        stroke="#1e1b4b"
        strokeWidth="1.9"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Top triangle A1B1C1 */}
        <polygon points="84,38 124,58 172,38" />
        {/* Lateral edges */}
        <line x1="84" y1="38" x2="44" y2="128" />
        <line x1="124" y1="58" x2="118" y2="168" />
        <line x1="172" y1="38" x2="224" y2="128" />
        {/* Bottom visible edges AB, BC */}
        <line x1="44" y1="128" x2="118" y2="168" />
        <line x1="118" y1="168" x2="224" y2="128" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="28" y="132">A</text>
        <text x="112" y="185">B</text>
        <text x="230" y="132">C</text>
        <text x="65" y="34">
          A<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="104" y="72">
          B<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="176" y="34">
          C<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 9 (Đề 09): Đồ thị hàm số y = f(x) có cực trị tại x = -3, -1, 1 nằm phía trên trục hoành chuẩn 100% ảnh gốc
 */
export const DiagramDe09GraphP1Q9: React.FC = () => {
  // Ox at y = 122, Oy at x = 166
  // x = -3 -> 70, x = -1 -> 134, x = 0 -> 166, x = 1 -> 198
  // Local minima at (-3, 94) = (70, 94) and (1, 94) = (198, 94)
  // Local maximum at (-1, 52) = (134, 52)
  // y-intercept at (0, 73) = (166, 73)
  return (
    <svg
      viewBox="0 0 290 160"
      className="w-full max-w-[275px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de09-q9-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6.5"
          markerHeight="6.5"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 10 5 L 0 9 L 2 5 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes Ox, Oy */}
      <line
        x1="18"
        y1="122"
        x2="275"
        y2="122"
        stroke="#0f172a"
        strokeWidth="1.6"
        markerEnd="url(#de09-q9-arrow)"
      />
      <line
        x1="166"
        y1="148"
        x2="166"
        y2="14"
        stroke="#0f172a"
        strokeWidth="1.6"
        markerEnd="url(#de09-q9-arrow)"
      />

      {/* Vertical dashed lines from extrema (-3, 94), (-1, 52), (1, 94) down to Ox (y = 122) */}
      <g
        stroke="#0f172a"
        strokeWidth="1.5"
        strokeDasharray="4.5,3.5"
        fill="none"
      >
        <line x1="70" y1="94" x2="70" y2="122" />
        <line x1="134" y1="52" x2="134" y2="122" />
        <line x1="198" y1="94" x2="198" y2="122" />
      </g>

      {/* Smooth W-shaped curve strictly above Ox:
          Left end (26, 30) -> min (70, 94) -> max (134, 52) -> min (198, 94) -> right end (268, 32) */}
      <path
        d="M 26 30 C 40 68, 54 94, 70 94 C 90 94, 112 52, 134 52 C 156 52, 178 94, 198 94 C 218 94, 244 58, 268 32"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Labels matching original image 100% */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="21"
        fill="#0f172a"
      >
        <text x="149" y="25" fontStyle="italic">y</text>
        <text x="266" y="142" fontStyle="italic">x</text>
        <text x="144" y="116" fontStyle="italic">O</text>
        <text x="70" y="145" textAnchor="middle">-3</text>
        <text x="134" y="145" textAnchor="middle">-1</text>
        <text x="198" y="145" textAnchor="middle">1</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 12 (Đề 09): 4 đồ thị phương án A, B, C, D của f(x) = x^alpha và f'(x) chuẩn 100% ảnh gốc
 */
export const DiagramDe09GraphsP1Q12: React.FC = () => {
  return (
    <div className="w-full max-w-[560px] grid grid-cols-2 sm:grid-cols-4 gap-2 py-1 select-none">
      {/* Option A: alpha < 0 (e.g. x^-1 and -x^-2) */}
      <div className="bg-white rounded-lg border border-slate-200 p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 140 130" className="w-full h-auto">
          <defs>
            <marker id="de09-q12-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0f172a" />
            </marker>
          </defs>
          <line x1="16" y1="68" x2="132" y2="68" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de09-q12-a)" />
          <line x1="42" y1="122" x2="42" y2="10" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de09-q12-a)" />
          <line x1="66" y1="44" x2="66" y2="92" stroke="#0f172a" strokeWidth="0.9" strokeDasharray="2.5,2.5" />
          {/* Upper curve: x^-1 */}
          <path d="M 48 14 C 52 38, 60 48, 76 56 C 92 62, 110 64, 128 65" fill="none" stroke="#0f172a" strokeWidth="1.3" />
          {/* Lower curve: -x^-2 */}
          <path d="M 52 120 C 56 92, 64 80, 80 74 C 96 70, 112 69, 128 69" fill="none" stroke="#0f172a" strokeWidth="1.3" />
          <text x="32" y="16" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">y</text>
          <text x="126" y="79" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">x</text>
          <text x="30" y="80" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">O</text>
          <text x="58" y="80" fontFamily="Times New Roman" fontSize="11">1</text>
          <text x="4" y="122" fontFamily="Times New Roman" fontSize="13" fontWeight="bold">A.</text>
        </svg>
      </div>

      {/* Option B: impossible graph (curve + line crossing (1,0)) */}
      <div className="bg-white rounded-lg border border-slate-200 p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 140 130" className="w-full h-auto">
          <line x1="16" y1="90" x2="132" y2="90" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de09-q12-a)" />
          <line x1="42" y1="122" x2="42" y2="10" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de09-q12-a)" />
          <line x1="68" y1="55" x2="68" y2="90" stroke="#0f172a" strokeWidth="0.9" strokeDasharray="2.5,2.5" />
          {/* Concave curve */}
          <path d="M 42 90 C 50 68, 72 48, 122 30" fill="none" stroke="#0f172a" strokeWidth="1.3" />
          {/* Line crossing at x = 1 */}
          <line x1="58" y1="118" x2="100" y2="12" stroke="#0f172a" strokeWidth="1.3" />
          <text x="32" y="16" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">y</text>
          <text x="126" y="101" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">x</text>
          <text x="30" y="102" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">O</text>
          <text x="60" y="102" fontFamily="Times New Roman" fontSize="11">1</text>
          <text x="4" y="122" fontFamily="Times New Roman" fontSize="13" fontWeight="bold">B.</text>
        </svg>
      </div>

      {/* Option C: two convex power curves (alpha > 2) */}
      <div className="bg-white rounded-lg border border-slate-200 p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 140 130" className="w-full h-auto">
          <line x1="16" y1="90" x2="132" y2="90" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de09-q12-a)" />
          <line x1="42" y1="122" x2="42" y2="10" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de09-q12-a)" />
          <line x1="74" y1="42" x2="74" y2="90" stroke="#0f172a" strokeWidth="0.9" strokeDasharray="2.5,2.5" />
          <path d="M 42 90 C 58 88, 72 72, 92 14" fill="none" stroke="#0f172a" strokeWidth="1.3" />
          <path d="M 42 90 C 60 89, 78 78, 106 14" fill="none" stroke="#0f172a" strokeWidth="1.3" />
          <text x="32" y="16" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">y</text>
          <text x="126" y="101" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">x</text>
          <text x="30" y="102" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">O</text>
          <text x="66" y="102" fontFamily="Times New Roman" fontSize="11">1</text>
          <text x="4" y="122" fontFamily="Times New Roman" fontSize="13" fontWeight="bold">C.</text>
        </svg>
      </div>

      {/* Option D: parabola x^2 and line 2x (alpha = 2) */}
      <div className="bg-white rounded-lg border border-slate-200 p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 140 130" className="w-full h-auto">
          <line x1="16" y1="104" x2="132" y2="104" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de09-q12-a)" />
          <line x1="42" y1="122" x2="42" y2="10" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de09-q12-a)" />
          <line x1="58" y1="68" x2="58" y2="104" stroke="#0f172a" strokeWidth="0.9" strokeDasharray="2.5,2.5" />
          {/* Line f'(x) = 2x */}
          <line x1="36" y1="118" x2="82" y2="14" stroke="#0f172a" strokeWidth="1.3" />
          {/* Curve f(x) = x^2 */}
          <path d="M 42 104 C 54 102, 68 82, 86 14" fill="none" stroke="#0f172a" strokeWidth="1.3" />
          <text x="32" y="16" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">y</text>
          <text x="126" y="114" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">x</text>
          <text x="29" y="116" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">O</text>
          <text x="55" y="116" fontFamily="Times New Roman" fontSize="11">1</text>
          <text x="4" y="122" fontFamily="Times New Roman" fontSize="13" fontWeight="bold">D.</text>
        </svg>
      </div>
    </div>
  );
};

/**
 * Phần III - Câu 1 (Đề 09): Lưới đường đi của con kiến từ M đến N chuẩn 100% ảnh gốc
 * Grid coordinates:
 * x from 0 to 6 (x_px = 45 + x * 36)
 * y from 0 to 4 (y_px = 166 - y * 34)
 * Left block: x in [0, 3], y in [0, 2]
 * Middle column: x in [3, 4], y in [0, 4]
 * Right block: x in [3, 6], y in [1, 4]
 */
export const DiagramDe09GridAntP3Q1: React.FC = () => {
  const x0 = 45;
  const y0 = 166;
  const dx = 36;
  const dy = 34;

  const gx = (x: number) => x0 + x * dx;
  const gy = (y: number) => y0 - y * dy;

  return (
    <svg
      viewBox="0 0 305 195"
      className="w-full max-w-[295px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#0f172a" strokeWidth="1.5" strokeLinecap="square">
        {/* Horizontal lines */}
        {/* y = 0: from x = 0 to x = 4 */}
        <line x1={gx(0)} y1={gy(0)} x2={gx(4)} y2={gy(0)} />
        {/* y = 1: from x = 0 to x = 6 */}
        <line x1={gx(0)} y1={gy(1)} x2={gx(6)} y2={gy(1)} />
        {/* y = 2: from x = 0 to x = 6 */}
        <line x1={gx(0)} y1={gy(2)} x2={gx(6)} y2={gy(2)} />
        {/* y = 3: from x = 3 to x = 6 */}
        <line x1={gx(3)} y1={gy(3)} x2={gx(6)} y2={gy(3)} />
        {/* y = 4: from x = 3 to x = 6 */}
        <line x1={gx(3)} y1={gy(4)} x2={gx(6)} y2={gy(4)} />

        {/* Vertical lines */}
        {/* x = 0, 1, 2: from y = 0 to y = 2 */}
        <line x1={gx(0)} y1={gy(0)} x2={gx(0)} y2={gy(2)} />
        <line x1={gx(1)} y1={gy(0)} x2={gx(1)} y2={gy(2)} />
        <line x1={gx(2)} y1={gy(0)} x2={gx(2)} y2={gy(2)} />
        {/* x = 3, 4: from y = 0 to y = 4 */}
        <line x1={gx(3)} y1={gy(0)} x2={gx(3)} y2={gy(4)} />
        <line x1={gx(4)} y1={gy(0)} x2={gx(4)} y2={gy(4)} />
        {/* x = 5, 6: from y = 1 to y = 4 */}
        <line x1={gx(5)} y1={gy(1)} x2={gx(5)} y2={gy(4)} />
        <line x1={gx(6)} y1={gy(1)} x2={gx(6)} y2={gy(4)} />
      </g>

      {/* Labels M and N */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="14"
        fontStyle="italic"
        fontWeight="bold"
        fill="#0f172a"
      >
        <text x={gx(0) - 18} y={gy(0) + 12}>
          M
        </text>
        <text x={gx(6) + 6} y={gy(4) - 4}>
          N
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 3 (Đề 09): Hình khai triển phẳng của hình chóp tứ giác O - ABCD chuẩn 100% ảnh gốc
 */
export const DiagramDe09PyramidNetP3Q3: React.FC = () => {
  // Trapezoid ABCD:
  // A = (108, 102), D = (162, 102) (length AD = 54)
  // B = (81, 148.8), C = (189, 148.8) (length BC = 108, AB = CD = 54)
  // P(O): PA perp AD, PA = 54 -> P = (108, 48)
  // Q(O): QA perp AB, QA = 54 -> vector AB = (-27, 46.8), perp left-up = (-46.8, -27) -> Q = (61.2, 75)
  // A'(O): below BC, B=(81, 148.8), C=(189, 148.8), A'=(99, 196)
  // S(O): above right of CD, S=(175, 32)
  return (
    <svg
      viewBox="0 0 260 220"
      className="w-full max-w-[245px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#0f172a"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Trapezoid ABCD */}
        <polygon points="108,102 162,102 189,148.8 81,148.8" />
        {/* Triangle PAD */}
        <polygon points="108,48 108,102 162,102" />
        {/* Triangle QAB */}
        <polygon points="61.2,75 108,102 81,148.8" />
        {/* Triangle A'BC */}
        <polygon points="99,196 81,148.8 189,148.8" />
        {/* Triangle SCD */}
        <polygon points="175,32 162,102 189,148.8" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="14"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="92" y="42">P(O)</text>
        <text x="42" y="69">Q(O)</text>
        <text x="160" y="25">S(O)</text>
        <text x="82" y="211">A&apos;(O)</text>
        <text x="98" y="115">A</text>
        <text x="155" y="115">D</text>
        <text x="68" y="154">B</text>
        <text x="193" y="154">C</text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 4 (Đề 09): Máng xối nước gồm (a) Tấm, (b) Máng, (c) Mặt cắt chuẩn 100% ảnh gốc
 */
export const DiagramDe09GutterP3Q4: React.FC = () => {
  return (
    <svg
      viewBox="0 0 580 175"
      className="w-full max-w-[550px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* (a) Tấm */}
      <g transform="translate(15, 18)">
        <rect
          x="38"
          y="16"
          width="115"
          height="84"
          fill="#ffffff"
          stroke="#1e3a8a"
          strokeWidth="2"
        />
        <g fontFamily="'Times New Roman', Times, serif" fontSize="15" fill="#0f172a">
          <text x="95" y="10" textAnchor="middle">3 m</text>
          <text x="34" y="62" textAnchor="end">0,9 m</text>
          <text x="95" y="128" textAnchor="middle">(a) Tấm</text>
        </g>
      </g>

      {/* (b) Máng */}
      <g transform="translate(198, 12)">
        {/* Back & bottom shaded interior */}
        <polygon
          points="16,50 86,20 182,42 112,72"
          fill="#fefce8"
          stroke="#1e3a8a"
          strokeWidth="1.6"
        />
        <polygon
          points="32,78 98,48 164,64 98,94"
          fill="#fef08a"
          fillOpacity="0.45"
          stroke="#1e3a8a"
          strokeWidth="1.5"
        />
        {/* Front & back trapezoid outlines */}
        <g stroke="#1e3a8a" strokeWidth="1.8" fill="none" strokeLinejoin="round">
          {/* Front cross-section: (16,50) -> (32,78) -> (98,94) -> (126,76) */}
          <polyline points="16,50 32,78 98,94 126,76 16,50" />
          {/* Right edge connecting front-right top (126,76) to back-right top (182,42) */}
          <line x1="126" y1="76" x2="182" y2="42" />
          {/* Back-right slant (182,42) to (164,64) */}
          <line x1="182" y1="42" x2="164" y2="64" />
          {/* Back top-left vertical-ish fold */}
          <line x1="86" y1="20" x2="98" y2="48" strokeWidth="1.2" />
        </g>

        <g fontFamily="'Times New Roman', Times, serif" fontSize="14" fill="#0f172a">
          <text x="38" y="34" fontStyle="italic">x</text>
          <text x="88" y="42">0,3 m</text>
          <text x="138" y="64" fontStyle="italic">x</text>
          <text x="65" y="106">3 m</text>
          <text x="155" y="102">0,3 m</text>
          <text x="98" y="134" textAnchor="middle" fontSize="15">(b) Máng</text>
        </g>
      </g>

      {/* (c) Mặt cắt */}
      <g transform="translate(408, 18)">
        <polygon
          points="18,18 122,18 96,74 44,74"
          fill="#ffffff"
          stroke="#1e3a8a"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <g fontFamily="'Times New Roman', Times, serif" fontSize="15" fill="#0f172a">
          <text x="70" y="12" textAnchor="middle">
            <tspan fontStyle="italic">x</tspan> m
          </text>
          <text x="114" y="52">0,3 m</text>
          <text x="70" y="90" textAnchor="middle">0,3 m</text>
          <text x="70" y="128" textAnchor="middle">(c) Mặt cắt</text>
        </g>
      </g>
    </svg>
  );
};
