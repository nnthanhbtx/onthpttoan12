import React from 'react';

/**
 * Phần I - Câu 3 & Câu 11: Bảng số liệu ghép nhóm thời gian tập thể dục của học sinh
 */
export const DiagramDe12TableP1Q3: React.FC = () => {
  return (
    <div className="w-full max-w-[660px] mx-auto my-2 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-900 text-slate-900 text-sm sm:text-[15px] font-serif bg-white">
        <tbody>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-left bg-[#ffff00] whitespace-nowrap">
              Thời gian (phút)
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[0;10)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[10;20)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[20;30)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[30;40)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[40;50)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[50;60)</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-left bg-[#ffff00] whitespace-nowrap">
              Số học sinh
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">10</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">15</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">22</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">26</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">20</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">17</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần I - Câu 7: Bảng biến thiên của hàm số f(x)
 * x  | -∞     -2      0     +∞
 * y' |    +    0   -  0  +
 * y  | -∞ ↗   1   ↘ -3  ↗  +∞
 */
export const DiagramDe12BBTP1Q7: React.FC = () => {
  return (
    <div className="w-full max-w-[520px] mx-auto my-2">
      <svg viewBox="0 0 520 190" className="w-full h-auto">
        <defs>
          <marker
            id="de12-bbt-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
          </marker>
        </defs>

        {/* Outer & inner table lines */}
        <line x1="25" y1="36" x2="495" y2="36" stroke="#0f172a" strokeWidth="1.2" />
        <line x1="25" y1="74" x2="495" y2="74" stroke="#0f172a" strokeWidth="1.2" />
        <line x1="65" y1="10" x2="65" y2="180" stroke="#0f172a" strokeWidth="1.2" />

        {/* Row headers */}
        <text x="45" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
        <text x="45" y="60" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          y&apos;
        </text>
        <text x="45" y="132" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>

        {/* x values */}
        <text x="92" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −∞
        </text>
        <text x="215" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −2
        </text>
        <text x="345" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          0
        </text>
        <text x="472" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          +∞
        </text>

        {/* y' values */}
        <text x="152" y="59" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          +
        </text>
        <text x="215" y="59" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          0
        </text>
        <text x="280" y="59" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −
        </text>
        <text x="345" y="59" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          0
        </text>
        <text x="410" y="59" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          +
        </text>

        {/* y values */}
        <text x="88" y="175" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −∞
        </text>
        <text x="215" y="95" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          1
        </text>
        <text x="345" y="162" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −3
        </text>
        <text x="474" y="95" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          +∞
        </text>

        {/* Variation arrows */}
        <line
          x1="105"
          y1="164"
          x2="202"
          y2="94"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de12-bbt-arrow)"
        />
        <line
          x1="227"
          y1="94"
          x2="330"
          y2="155"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de12-bbt-arrow)"
        />
        <line
          x1="360"
          y1="155"
          x2="462"
          y2="100"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de12-bbt-arrow)"
        />
      </svg>
    </div>
  );
};

/**
 * Phần I - Câu 10: Đồ thị hàm số y = f'(x) cắt trục hoành tại -1; 0; 2
 */
export const DiagramDe12GraphP1Q10: React.FC = () => {
  // Coordinate system:
  // x in [-2, 3.8], y in [-2.6, 3.6]
  // Scale: 1 unit = 42px
  // Origin O(0,0) at (125, 160)
  const ox = 125;
  const oy = 160;
  const s = 42;

  // Function y = x*(x+1)*(x-2) = x^3 - x^2 - 2x
  const pts: string[] = [];
  for (let x = -1.42; x <= 2.68; x += 0.03) {
    const y = x * (x + 1) * (x - 2);
    const px = ox + x * s;
    const py = oy - y * s;
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return (
    <div className="w-full max-w-[300px] mx-auto my-2">
      <svg viewBox="0 0 300 280" className="w-full h-auto">
        <defs>
          <marker
            id="de12-g10-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
          </marker>
        </defs>

        {/* Faint coordinate grid */}
        {[-1, 1, 2, 3].map((gx) => (
          <line
            key={`gx-${gx}`}
            x1={ox + gx * s}
            y1="15"
            x2={ox + gx * s}
            y2="265"
            stroke="#e2e8f0"
            strokeWidth="0.9"
          />
        ))}
        {[-2, -1, 1, 2, 3].map((gy) => (
          <line
            key={`gy-${gy}`}
            x1="20"
            y1={oy - gy * s}
            x2="285"
            y2={oy - gy * s}
            stroke="#e2e8f0"
            strokeWidth="0.9"
          />
        ))}

        {/* Axes */}
        <line
          x1="20"
          y1={oy}
          x2="285"
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1.3"
          markerEnd="url(#de12-g10-arrow)"
        />
        <line
          x1={ox}
          y1="265"
          x2={ox}
          y2="14"
          stroke="#0f172a"
          strokeWidth="1.3"
          markerEnd="url(#de12-g10-arrow)"
        />

        {/* Axis labels */}
        <text x="278" y={oy - 6} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
        <text x={ox - 14} y="24" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>
        <text x={ox + 52} y="34" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          y=f&apos;(x)
        </text>

        {/* Tick labels on Ox */}
        <text x={ox - s - 4} y={oy + 14} textAnchor="middle" fontSize="12" fontFamily="sans-serif">
          -1
        </text>
        <text x={ox - 7} y={oy + 14} textAnchor="middle" fontSize="12" fontFamily="sans-serif">
          0
        </text>
        <text x={ox + s} y={oy + 14} textAnchor="middle" fontSize="12" fontFamily="sans-serif">
          1
        </text>
        <text x={ox + 2 * s + 3} y={oy + 14} textAnchor="middle" fontSize="12" fontFamily="sans-serif">
          2
        </text>
        <text x={ox + 3 * s} y={oy + 14} textAnchor="middle" fontSize="12" fontFamily="sans-serif">
          3
        </text>

        {/* Tick labels on Oy */}
        <text x={ox - 8} y={oy + 2 * s + 4} textAnchor="end" fontSize="12" fontFamily="sans-serif">
          -2
        </text>
        <text x={ox - 8} y={oy + s + 4} textAnchor="end" fontSize="12" fontFamily="sans-serif">
          -1
        </text>
        <text x={ox - 8} y={oy - s + 4} textAnchor="end" fontSize="12" fontFamily="sans-serif">
          1
        </text>
        <text x={ox - 8} y={oy - 2 * s + 4} textAnchor="end" fontSize="12" fontFamily="sans-serif">
          2
        </text>
        <text x={ox - 8} y={oy - 3 * s + 4} textAnchor="end" fontSize="12" fontFamily="sans-serif">
          3
        </text>

        {/* Cubic curve y = f'(x) */}
        <polyline
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.6"
          points={pts.join(' ')}
        />
      </svg>
    </div>
  );
};

/**
 * Phần I - Câu 12: Tứ diện OABC với M trên OA (OM = 2MA) và N là trung điểm BC
 */
export const DiagramDe12TetrahedronP1Q12: React.FC = () => {
  // Coordinates matching original diagram:
  // O(155, 28), A(85, 148), C(182, 208), B(268, 134)
  // M on OA with OM = 2MA => M = (155 + 2*85)/3, (28 + 2*148)/3 = (108.3, 108)
  // N midpoint of BC => N = ((182+268)/2, (208+134)/2) = (225, 171)
  return (
    <div className="w-full max-w-[320px] mx-auto my-2">
      <svg viewBox="0 0 320 235" className="w-full h-auto">
        {/* Hidden dashed segments: AB and MN */}
        <line
          x1="85"
          y1="148"
          x2="268"
          y2="134"
          stroke="#0f172a"
          strokeWidth="1.3"
          strokeDasharray="4 4"
        />
        <line
          x1="108.3"
          y1="108"
          x2="225"
          y2="171"
          stroke="#0f172a"
          strokeWidth="1.3"
          strokeDasharray="4 4"
        />

        {/* Visible solid segments: OA, OB, OC, AC, BC, ON */}
        <line x1="155" y1="28" x2="85" y2="148" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="155" y1="28" x2="182" y2="208" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="155" y1="28" x2="268" y2="134" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="85" y1="148" x2="182" y2="208" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="182" y1="208" x2="268" y2="134" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="155" y1="28" x2="225" y2="171" stroke="#0f172a" strokeWidth="1.4" />

        {/* Labels */}
        <text x="155" y="21" textAnchor="middle" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          O
        </text>
        <text x="94" y="106" textAnchor="end" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          M
        </text>
        <text x="72" y="154" textAnchor="end" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          A
        </text>
        <text x="274" y="139" textAnchor="start" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          B
        </text>
        <text x="232" y="185" textAnchor="start" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          N
        </text>
        <text x="182" y="226" textAnchor="middle" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          C
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần II - Câu 2: Bảng số liệu ghép nhóm thời gian sử dụng máy tính của nhân viên công ty X
 */
export const DiagramDe12TableP2Q2: React.FC = () => {
  return (
    <div className="w-full max-w-[660px] mx-auto my-2 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-900 text-slate-900 text-sm sm:text-[15px] font-serif bg-white">
        <tbody>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-center bg-[#ffff00] whitespace-nowrap">
              Thời gian sử dụng (phút)
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[30;60)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[60;90)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[ 90;120)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[120;150)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[150;180)</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-center bg-[#ffff00] whitespace-nowrap">
              Số nhân viên
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">3</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">5</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">5</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">25</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần II - Câu 4: Hình chóp tứ giác Q-EFGH với M là trung điểm QG
 */
export const DiagramDe12PyramidP2Q4: React.FC = () => {
  // Coordinates matching original diagram on page 4:
  // Q(130, 26)
  // E(65, 200), F(198, 200), G(238, 152), H(105, 152)
  // M midpoint of QG => ((130+238)/2, (26+152)/2) = (184, 89)
  return (
    <div className="w-full max-w-[300px] mx-auto my-2">
      <svg viewBox="0 0 285 225" className="w-full h-auto">
        {/* Hidden dashed segments: QH, EH, HG, HM */}
        <line
          x1="130"
          y1="26"
          x2="105"
          y2="152"
          stroke="#0f172a"
          strokeWidth="1.3"
          strokeDasharray="4 4"
        />
        <line
          x1="65"
          y1="200"
          x2="105"
          y2="152"
          stroke="#0f172a"
          strokeWidth="1.3"
          strokeDasharray="4 4"
        />
        <line
          x1="105"
          y1="152"
          x2="238"
          y2="152"
          stroke="#0f172a"
          strokeWidth="1.3"
          strokeDasharray="4 4"
        />
        <line
          x1="105"
          y1="152"
          x2="184"
          y2="89"
          stroke="#0f172a"
          strokeWidth="1.3"
          strokeDasharray="4 4"
        />

        {/* Visible solid segments: QE, QF, QG, EF, FG, EM, MF */}
        <line x1="130" y1="26" x2="65" y2="200" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="130" y1="26" x2="198" y2="200" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="130" y1="26" x2="238" y2="152" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="65" y1="200" x2="198" y2="200" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="198" y1="200" x2="238" y2="152" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="65" y1="200" x2="184" y2="89" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="198" y1="200" x2="184" y2="89" stroke="#0f172a" strokeWidth="1.4" />

        {/* Labels */}
        <text x="130" y="19" textAnchor="middle" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          Q
        </text>
        <text x="192" y="88" textAnchor="start" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          M
        </text>
        <text x="112" y="147" textAnchor="start" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          H
        </text>
        <text x="244" y="157" textAnchor="start" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          G
        </text>
        <text x="58" y="205" textAnchor="end" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          E
        </text>
        <text x="203" y="213" textAnchor="start" fontSize="18" fontFamily="Times New Roman, serif" fontStyle="italic">
          F
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần III - Câu 3: Hình vẽ 27 khối lập phương đơn vị ghép thành khối 3x3x3 được sơn màu vàng
 */
export const DiagramDe12CubesP3Q3: React.FC = () => {
  // Helper to render a 3x3x3 cube at (ox, oy)
  // Front face: 3x3 grid of size s=22 (total 66x66)
  // Oblique vector for depth: dx = 8, dy = -6 per unit (total 24, -18)
  const renderCube3x3 = (
    ox: number,
    oy: number,
    paintMode: 'partial' | 'full'
  ) => {
    const s = 22;
    const dx = 8;
    const dy = -6;
    const elements: React.ReactNode[] = [];

    // Front face 3x3 (i: col 0..2, j: row 0..2 from top to bottom)
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const x = ox + c * s;
        const y = oy + r * s;
        const fill = paintMode === 'full' ? '#facc15' : '#ffffff';
        elements.push(
          <rect
            key={`f-${r}-${c}`}
            x={x}
            y={y}
            width={s}
            height={s}
            fill={fill}
            stroke="#0f172a"
            strokeWidth="1"
          />
        );
      }
    }

    // Top face 3x3 (d: depth 0..2 from front to back, c: col 0..2)
    for (let d = 0; d < 3; d++) {
      for (let c = 0; c < 3; c++) {
        const x0 = ox + c * s + d * dx;
        const y0 = oy + d * dy;
        const pts = `${x0},${y0} ${x0 + s},${y0} ${x0 + s + dx},${y0 + dy} ${x0 + dx},${y0 + dy}`;
        const fill = paintMode === 'full' ? '#fde047' : '#ffffff';
        elements.push(
          <polygon
            key={`t-${d}-${c}`}
            points={pts}
            fill={fill}
            stroke="#0f172a"
            strokeWidth="1"
          />
        );
      }
    }

    // Right face 3x3 (d: depth 0..2 from front to back, r: row 0..2 from top to bottom)
    for (let d = 0; d < 3; d++) {
      for (let r = 0; r < 3; r++) {
        const x0 = ox + 3 * s + d * dx;
        const y0 = oy + r * s + d * dy;
        const pts = `${x0},${y0} ${x0 + dx},${y0 + dy} ${x0 + dx},${y0 + s + dy} ${x0},${y0 + s}`;
        const isPaintedInPartial =
          (r === 0 && d >= 1) || (r === 1 && d >= 0) || (r === 2 && d === 0);
        const fill =
          paintMode === 'full'
            ? '#eab308'
            : isPaintedInPartial
            ? '#facc15'
            : '#ffffff';
        elements.push(
          <polygon
            key={`r-${d}-${r}`}
            points={pts}
            fill={fill}
            stroke="#0f172a"
            strokeWidth="1"
          />
        );
      }
    }

    return elements;
  };

  // Helper to render a small scattered unit cube at (cx, cy) with rotation angle
  const renderSmallCube = (
    key: string,
    cx: number,
    cy: number,
    rot: number,
    frontYellow: boolean,
    topYellow: boolean,
    rightYellow: boolean
  ) => {
    const s = 17;
    const dx = 7;
    const dy = -5;
    return (
      <g key={key} transform={`translate(${cx},${cy}) rotate(${rot})`}>
        {/* Front */}
        <rect
          x={0}
          y={0}
          width={s}
          height={s}
          fill={frontYellow ? '#facc15' : '#ffffff'}
          stroke="#0f172a"
          strokeWidth="1"
        />
        {/* Top */}
        <polygon
          points={`0,0 ${s},0 ${s + dx},${dy} ${dx},${dy}`}
          fill={topYellow ? '#fde047' : '#ffffff'}
          stroke="#0f172a"
          strokeWidth="1"
        />
        {/* Right */}
        <polygon
          points={`${s},0 ${s + dx},${dy} ${s + dx},${s + dy} ${s},${s}`}
          fill={rightYellow ? '#eab308' : '#ffffff'}
          stroke="#0f172a"
          strokeWidth="1"
        />
      </g>
    );
  };

  return (
    <div className="w-full max-w-[560px] mx-auto my-2">
      <svg viewBox="0 0 560 155" className="w-full h-auto">
        {/* Left: 3x3x3 cube being painted with brush */}
        <g>
          {renderCube3x3(25, 62, 'partial')}
          {/* Paintbrush */}
          <g transform="translate(122, 42) rotate(-38)">
            {/* Brush handle */}
            <rect x="14" y="-4" width="38" height="8" rx="3" fill="#facc15" stroke="#0f172a" strokeWidth="1.1" />
            {/* Ferrule */}
            <rect x="6" y="-5" width="8" height="10" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.1" />
            {/* Bristles */}
            <polygon points="-8,-6 6,-5 6,5 -8,6" fill="#fef08a" stroke="#0f172a" strokeWidth="1.1" />
          </g>
        </g>

        {/* Middle: Fully painted 3x3x3 cube */}
        <g>{renderCube3x3(198, 62, 'full')}</g>

        {/* Right: Separated 27 unit cubes pile */}
        <g>
          {/* Floating top cubes */}
          {renderSmallCube('c1', 435, 22, -22, false, true, true)}
          {renderSmallCube('c2', 462, 48, 18, true, true, false)}
          {/* Main pile */}
          {renderSmallCube('c3', 385, 62, -8, true, false, true)}
          {renderSmallCube('c4', 412, 58, 5, false, true, true)}
          {renderSmallCube('c5', 436, 66, -12, true, true, false)}
          {renderSmallCube('c6', 368, 84, 12, false, true, false)}
          {renderSmallCube('c7', 395, 86, -6, true, true, true)}
          {renderSmallCube('c8', 422, 88, 10, false, false, true)}
          {renderSmallCube('c9', 450, 84, -15, true, true, false)}
          {renderSmallCube('c10', 478, 82, 8, true, false, true)}
          {renderSmallCube('c11', 352, 108, -4, false, true, true)}
          {renderSmallCube('c12', 380, 110, 14, true, false, false)}
          {renderSmallCube('c13', 408, 112, -10, true, true, true)}
          {renderSmallCube('c14', 436, 110, 6, false, true, true)}
          {renderSmallCube('c15', 464, 108, -8, true, false, true)}
          {renderSmallCube('c16', 492, 104, 12, false, true, false)}
          {/* Motion arcs */}
          <path d="M 418 32 Q 422 20 430 16" fill="none" stroke="#64748b" strokeWidth="1" />
          <path d="M 488 55 Q 498 62 500 72" fill="none" stroke="#64748b" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Phần III - Câu 4: Hình vuông ABCD có điểm P trên AB, điểm Q trên BC, tứ giác DPBQ tô màu vàng
 */
export const DiagramDe12SquareP3Q4: React.FC = () => {
  // Square ABCD:
  // A(65, 30), D(215, 30), B(65, 180), C(215, 180)
  // P on AB: P(65, 78) with red arrow pointing down to (65, 104)
  // Q on BC: Q(155, 180) with red arrow pointing right to (182, 180)
  return (
    <div className="w-full max-w-[280px] mx-auto my-2">
      <svg viewBox="0 0 280 215" className="w-full h-auto">
        <defs>
          <marker
            id="de12-red-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b91c1c" />
          </marker>
        </defs>

        {/* Yellow shaded quadrilateral DPBQ */}
        <polygon
          points="215,30 65,78 65,180 155,180"
          fill="#ffff66"
          stroke="none"
        />

        {/* Square ABCD border */}
        <rect
          x="65"
          y="30"
          width="150"
          height="150"
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="1.4"
        />

        {/* Segments DP and DQ */}
        <line x1="215" y1="30" x2="65" y2="78" stroke="#0f172a" strokeWidth="1.4" />
        <line x1="215" y1="30" x2="155" y2="180" stroke="#0f172a" strokeWidth="1.4" />

        {/* Red motion arrows from P and Q */}
        <line
          x1="65"
          y1="78"
          x2="65"
          y2="104"
          stroke="#b91c1c"
          strokeWidth="1.5"
          markerEnd="url(#de12-red-arrow)"
        />
        <line
          x1="155"
          y1="180"
          x2="185"
          y2="180"
          stroke="#b91c1c"
          strokeWidth="1.5"
          markerEnd="url(#de12-red-arrow)"
        />

        {/* Points P and Q */}
        <circle cx="65" cy="78" r="2.2" fill="#1e3a8a" />
        <circle cx="155" cy="180" r="2.2" fill="#1e3a8a" />

        {/* Labels */}
        <text x="58" y="28" textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          A
        </text>
        <text x="218" y="26" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          D
        </text>
        <text x="58" y="83" textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          P
        </text>
        <text x="58" y="192" textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          B
        </text>
        <text x="150" y="195" textAnchor="middle" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          Q
        </text>
        <text x="218" y="192" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          C
        </text>
      </svg>
    </div>
  );
};
