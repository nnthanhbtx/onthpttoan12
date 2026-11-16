import React from 'react';

/**
 * Phần I - Câu 2: Bảng số liệu ghép nhóm quãng đường đi bộ mỗi ngày của bác Nam trong 20 ngày
 */
export const DiagramDe13TableP1Q2: React.FC = () => {
  return (
    <div className="w-full max-w-[660px] mx-auto my-2 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-900 text-slate-900 text-sm sm:text-[15px] font-serif bg-white">
        <tbody>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-center bg-[#ffff00] whitespace-nowrap">
              Quãng đường (<i>km</i>)
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[2,7;3,0)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[3,0;3,3)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[3,3;3,6)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[3,6;3,9)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[3,9;4,2)</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-center bg-[#ffff00] whitespace-nowrap">
              Số ngày
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">3</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">6</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">5</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">4</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần I - Câu 3: Đồ thị hàm số đạo hàm y = f'(x) cắt trục hoành tại -2, 1, 4
 * Khớp 100% ảnh gốc image_7bfd10cf.png
 */
export const DiagramDe13GraphP1Q3: React.FC = () => {
  // Origin O at (125, 130)
  // Visual coordinate u = (px - 125) / 34
  // Roots in visual coordinates: u1 = -1.25 (labeled -2), u2 = 0.55 (labeled 1), u3 = 2.30 (labeled 4)
  const ox = 125;
  const oy = 130;
  const su = 34;

  const pts: string[] = [];
  for (let u = -1.46; u <= 2.68; u += 0.025) {
    const val = 31 * (u + 1.25) * (u - 0.55) * (u - 2.3);
    const px = ox + u * su;
    const py = oy - val;
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return (
    <div className="w-full max-w-[300px] mx-auto my-2">
      <svg viewBox="0 0 300 220" className="w-full h-auto">
        <defs>
          <marker
            id="de13-red-axis-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#cc0000" />
          </marker>
        </defs>

        {/* Red Axes */}
        <line
          x1="54"
          y1={oy}
          x2="258"
          y2={oy}
          stroke="#cc0000"
          strokeWidth="1.7"
          markerEnd="url(#de13-red-axis-arrow)"
        />
        <line
          x1={ox}
          y1="204"
          x2={ox}
          y2="20"
          stroke="#cc0000"
          strokeWidth="1.7"
          markerEnd="url(#de13-red-axis-arrow)"
        />

        {/* Cubic curve y = f'(x) */}
        <polyline
          fill="none"
          stroke="#000000"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={pts.join(' ')}
        />

        {/* Single red dot with black outline at Origin O */}
        <circle cx={ox} cy={oy} r="2.5" fill="#cc0000" stroke="#000000" strokeWidth="0.9" />

        {/* Labels */}
        <text x={ox + 9} y="30" fontSize="17" fontFamily="Times New Roman, serif" fontWeight="bold" fontStyle="italic">
          y
        </text>
        <text x="244" y={oy - 6} fontSize="17" fontFamily="Times New Roman, serif" fontWeight="bold" fontStyle="italic">
          x
        </text>
        <text x={ox - 9} y={oy + 17} textAnchor="middle" fontSize="17" fontFamily="Times New Roman, serif" fontWeight="bold" fontStyle="italic">
          O
        </text>
        <text x="74" y={oy - 4} textAnchor="middle" fontSize="14" fontFamily="Times New Roman, serif">
          -2
        </text>
        <text x="152" y={oy - 5} textAnchor="middle" fontSize="14" fontFamily="Times New Roman, serif">
          1
        </text>
        <text x="211" y={oy + 15} textAnchor="middle" fontSize="14" fontFamily="Times New Roman, serif">
          4
        </text>
        <text x="208" y="75" textAnchor="end" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          f&apos;(x)
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần I - Câu 11: Bảng biến thiên của hàm số y = f(x) xác định trên R \ {0}
 */
export const DiagramDe13BBTP1Q11: React.FC = () => {
  return (
    <div className="w-full max-w-[460px] mx-auto my-2">
      <svg viewBox="0 0 460 195" className="w-full h-auto">
        <defs>
          <marker
            id="de13-bbt-arrow"
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

        {/* Table borders */}
        <line x1="20" y1="36" x2="440" y2="36" stroke="#0f172a" strokeWidth="1.2" />
        <line x1="20" y1="74" x2="440" y2="74" stroke="#0f172a" strokeWidth="1.2" />
        <line x1="62" y1="10" x2="62" y2="185" stroke="#0f172a" strokeWidth="1.2" />

        {/* Double vertical bar at x = 0 */}
        <line x1="208" y1="36" x2="208" y2="185" stroke="#0f172a" strokeWidth="1.2" />
        <line x1="213" y1="36" x2="213" y2="185" stroke="#0f172a" strokeWidth="1.2" />

        {/* Row labels */}
        <text x="41" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
        <text x="41" y="60" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          y&apos;
        </text>
        <text x="41" y="128" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>

        {/* x values */}
        <text x="86" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −∞
        </text>
        <text x="210.5" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          0
        </text>
        <text x="315" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          1
        </text>
        <text x="420" y="27" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          +∞
        </text>

        {/* y' signs */}
        <text x="145" y="60" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −
        </text>
        <text x="262" y="60" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          +
        </text>
        <text x="315" y="60" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          0
        </text>
        <text x="368" y="60" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −
        </text>

        {/* y values */}
        <text x="88" y="94" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          +∞
        </text>
        <text x="192" y="176" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −3
        </text>
        <text x="234" y="176" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −∞
        </text>
        <text x="315" y="96" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          7
        </text>
        <text x="418" y="172" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −∞
        </text>

        {/* Arrows */}
        <line
          x1="100"
          y1="98"
          x2="180"
          y2="165"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de13-bbt-arrow)"
        />
        <line
          x1="242"
          y1="162"
          x2="300"
          y2="100"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de13-bbt-arrow)"
        />
        <line
          x1="330"
          y1="100"
          x2="400"
          y2="160"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de13-bbt-arrow)"
        />
      </svg>
    </div>
  );
};

/**
 * Phần II - Câu 1: Hệ trục tọa độ Oxyz mô tả tên lửa bay từ O(0;0;0) đến A(140;60;6)
 */
export const DiagramDe13RocketP2Q1: React.FC = () => {
  // Origin O(135, 145)
  // Oz up to (135, 22)
  // Oy right to (280, 145)
  // Ox down-left to (72, 192)
  // Ground plane parallelogram: O(135,145) -> (265,145) -> (212,185) -> (82,185)
  // Projections of A(140;60;6):
  // Px on Ox: (102, 170)
  // Py on Oy: (230, 145)
  // Pxy on ground: (197, 170)
  // Pz on Oz: (135, 78)
  // Point A: (197, 103)
  return (
    <div className="w-full max-w-[330px] mx-auto my-2">
      <svg viewBox="0 0 320 205" className="w-full h-auto">
        <defs>
          <marker
            id="de13-ozyx-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#b91c1c" />
          </marker>
        </defs>

        {/* Yellow ground plane (Oxy) */}
        <polygon
          points="135,145 262,145 212,182 85,182"
          fill="#ffff66"
          stroke="none"
        />

        {/* Red coordinate axes Ox, Oy, Oz */}
        <line
          x1="135"
          y1="145"
          x2="135"
          y2="20"
          stroke="#b91c1c"
          strokeWidth="1.2"
          markerEnd="url(#de13-ozyx-arrow)"
        />
        <line
          x1="135"
          y1="145"
          x2="282"
          y2="145"
          stroke="#b91c1c"
          strokeWidth="1.2"
          markerEnd="url(#de13-ozyx-arrow)"
        />
        <line
          x1="135"
          y1="145"
          x2="72"
          y2="192"
          stroke="#b91c1c"
          strokeWidth="1.2"
          markerEnd="url(#de13-ozyx-arrow)"
        />

        {/* Dashed projection lines for A(140;60;6) */}
        {/* Pxy(197,170) to Px(102,170) and Py(230,145) */}
        <line x1="102" y1="170" x2="197" y2="170" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="230" y1="145" x2="197" y2="170" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />
        {/* O(135,145) to Pxy(197,170) */}
        <line x1="135" y1="145" x2="197" y2="170" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />
        {/* Vertical line from Pxy(197,170) up to A(197,103) */}
        <line x1="197" y1="170" x2="197" y2="103" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />
        {/* Slanted line from Pz(135,78) to A(197,103) */}
        <line x1="135" y1="78" x2="197" y2="103" stroke="#0f172a" strokeWidth="1" strokeDasharray="3 3" />

        {/* Points O and A */}
        <circle cx="135" cy="145" r="2.2" fill="#b91c1c" />
        <circle cx="197" cy="103" r="2.6" fill="#b91c1c" />

        {/* Labels */}
        <text x="126" y="25" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          z
        </text>
        <text x="272" y="138" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>
        <text x="72" y="182" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
        <text x="127" y="142" textAnchor="end" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          O
        </text>
        <text x="195" y="94" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif">
          <tspan fontStyle="italic">A</tspan>(140;60;6)
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần II - Câu 2: Đồ thị hàm số y = f'(x) cắt Ox tại x = 1 và x = 3, tiệm cận đứng x = 2
 */
export const DiagramDe13GraphP2Q2: React.FC = () => {
  // Coordinate system:
  // Origin O(0,0) at (95, 95)
  // Scale: s = 28px/unit
  // Function: y = 1 - 1/(x - 2)^2
  const ox = 95;
  const oy = 95;
  const s = 28;

  const leftPts: string[] = [];
  for (let x = -2.8; x <= 1.48; x += 0.03) {
    const y = 1 - 1 / ((x - 2) * (x - 2));
    const px = ox + x * s;
    const py = oy - y * s;
    leftPts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  const rightPts: string[] = [];
  for (let x = 2.52; x <= 6.8; x += 0.03) {
    const y = 1 - 1 / ((x - 2) * (x - 2));
    const px = ox + x * s;
    const py = oy - y * s;
    rightPts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return (
    <div className="w-full max-w-[320px] mx-auto my-2">
      <svg viewBox="0 0 300 190" className="w-full h-auto">
        <defs>
          <marker
            id="de13-p2q2-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
          </marker>
        </defs>

        {/* Horizontal asymptote y = 1 (faint) and vertical asymptote x = 2 (dashed) */}
        <line
          x1="15"
          y1={oy - s}
          x2="285"
          y2={oy - s}
          stroke="#cbd5e1"
          strokeWidth="0.9"
        />
        <line
          x1={ox + 2 * s}
          y1="15"
          x2={ox + 2 * s}
          y2="180"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Axes Ox, Oy */}
        <line
          x1="15"
          y1={oy}
          x2="288"
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de13-p2q2-arrow)"
        />
        <line
          x1={ox}
          y1="180"
          x2={ox}
          y2="15"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de13-p2q2-arrow)"
        />

        {/* Curve branches */}
        <polyline
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="1.6"
          points={leftPts.join(' ')}
        />
        <polyline
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="1.6"
          points={rightPts.join(' ')}
        />

        {/* Labels */}
        <text x={ox + 7} y="23" fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>
        <text x="282" y={oy + 12} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
        <text x={ox - 7} y={oy + 13} textAnchor="middle" fontSize="12" fontFamily="Times New Roman, serif" fontStyle="italic">
          O
        </text>
        <text x={ox + s - 4} y={oy + 13} textAnchor="middle" fontSize="12" fontFamily="Times New Roman, serif">
          1
        </text>
        <text x={ox + 3 * s + 4} y={oy + 13} textAnchor="middle" fontSize="12" fontFamily="Times New Roman, serif">
          3
        </text>
        <text x="245" y={oy - s - 8} textAnchor="middle" fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic" fill="#1e3a8a">
          y = f&apos;(x)
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần II - Câu 4: Bảng tần số ghép nhóm nhiệt độ trung bình tháng 2 tại Hà Nội trong 30 năm
 */
export const DiagramDe13TableP2Q4: React.FC = () => {
  return (
    <div className="w-full max-w-[260px] mx-auto my-2">
      <table className="w-full border-collapse border border-slate-900 text-slate-900 text-sm sm:text-[15px] font-serif bg-white">
        <thead>
          <tr className="bg-[#ffff00]">
            <th className="border border-slate-900 px-3 py-1.5 font-normal text-left">
              Lớp nhiệt độ (<sup>0</sup>C)
            </th>
            <th className="border border-slate-900 px-3 py-1.5 font-normal text-left">
              Tần số
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[12;14)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">1</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[14;16)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">3</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1 text-left h-4"></td>
            <td className="border border-slate-900 px-3 py-1 text-left h-4"></td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[16;18)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">12</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[18;20)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">9</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[20;22)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">5</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 text-left">Cộng</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần III - Câu 5: Đường cong y = f(x) = -1/2 x^3 + 2x (0 <= x <= 2), B(2;3), C(0;1) và điểm P
 */
export const DiagramDe13CurveP3Q5: React.FC = () => {
  // Coordinate system:
  // Origin O(0,0) at (55, 200)
  // Scale: sx = 68px/unit, sy = 54px/unit
  // C(0,1) -> (55, 146)
  // A(2,0) -> (191, 200)
  // B(2,3) -> (191, 38)
  // Choose P on curve at xP = 1.45 => yP = -0.5*(1.45^3) + 2*1.45 = 1.376
  // P -> (55 + 1.45*68, 200 - 1.376*54) = (153.6, 125.7)
  const ox = 55;
  const oy = 200;
  const sx = 68;
  const sy = 54;

  const f = (x: number) => -0.5 * x * x * x + 2 * x;
  const xP = 1.45;
  const yP = f(xP);
  const pxP = ox + xP * sx;
  const pyP = oy - yP * sy;

  // Intersection of segment CP with curve y = f(x):
  // Line CP: y = 1 + (yP - 1)/xP * x = 1 + 0.259*x
  // -0.5 x^3 + 2x = 1 + 0.259x => xInt ≈ 0.642
  const xInt = 0.642;

  // Yellow polygon matching the original figure 100%:
  // From O(0,0) along curve to xInt, then straight to P(xP, yP), then straight to B(2,3), then down to A(2,0), back to O(0,0)
  const yellowPts: string[] = [];
  for (let x = 0; x <= xInt; x += 0.04) {
    const px = ox + x * sx;
    const py = oy - f(x) * sy;
    yellowPts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  yellowPts.push(`${pxP.toFixed(1)},${pyP.toFixed(1)}`);
  yellowPts.push(`${(ox + 2 * sx).toFixed(1)},${(oy - 3 * sy).toFixed(1)}`);
  yellowPts.push(`${(ox + 2 * sx).toFixed(1)},${oy}`);

  // Full curve points from x = 0 to x = 2
  const curvePts: string[] = [];
  for (let x = 0; x <= 2.001; x += 0.03) {
    const px = ox + x * sx;
    const py = oy - f(x) * sy;
    curvePts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return (
    <div className="w-full max-w-[260px] mx-auto my-2">
      <svg viewBox="0 0 245 230" className="w-full h-auto">
        <defs>
          <marker
            id="de13-c5-arrow"
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

        {/* Yellow shaded area */}
        <polygon points={yellowPts.join(' ')} fill="#ffff7a" stroke="none" />

        {/* Dashed lines from B(2,3) to Oy and Ox */}
        <line
          x1={ox}
          y1={oy - 3 * sy}
          x2={ox + 2 * sx}
          y2={oy - 3 * sy}
          stroke="#0f172a"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <line
          x1={ox + 2 * sx}
          y1={oy - 3 * sy}
          x2={ox + 2 * sx}
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />

        {/* Red Axes Ox, Oy */}
        <line
          x1="35"
          y1={oy}
          x2="230"
          y2={oy}
          stroke="#b91c1c"
          strokeWidth="1.2"
          markerEnd="url(#de13-c5-arrow)"
        />
        <line
          x1={ox}
          y1="218"
          x2={ox}
          y2="16"
          stroke="#b91c1c"
          strokeWidth="1.2"
          markerEnd="url(#de13-c5-arrow)"
        />

        {/* Blue curve y = f(x) */}
        <polyline
          fill="none"
          stroke="#1d4ed8"
          strokeWidth="1.5"
          points={curvePts.join(' ')}
        />

        {/* Segments CP and PB */}
        <line
          x1={ox}
          y1={oy - sy}
          x2={pxP}
          y2={pyP}
          stroke="#0f172a"
          strokeWidth="1.3"
        />
        <line
          x1={pxP}
          y1={pyP}
          x2={ox + 2 * sx}
          y2={oy - 3 * sy}
          stroke="#0f172a"
          strokeWidth="1.3"
        />

        {/* Points O, C, P, B, A */}
        <circle cx={ox} cy={oy} r="2.2" fill="#0f172a" />
        <circle cx={ox} cy={oy - sy} r="2.2" fill="#0f172a" />
        <circle cx={pxP} cy={pyP} r="2.2" fill="#0f172a" />
        <circle cx={ox + 2 * sx} cy={oy - 3 * sy} r="2.2" fill="#0f172a" />
        <circle cx={ox + 2 * sx} cy={oy} r="2.2" fill="#0f172a" />

        {/* Labels */}
        <text x={ox - 8} y="22" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>
        <text x={ox - 6} y={oy - 3 * sy + 4} textAnchor="end" fontSize="14" fontFamily="Times New Roman, serif">
          3
        </text>
        <text x={ox + 2 * sx + 5} y={oy - 3 * sy - 2} textAnchor="start" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          B
        </text>
        <text x={ox + 1.05 * sx} y={oy - 1.72 * sy} textAnchor="middle" fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          y = f(x)
        </text>
        <text x={ox + 2} y={oy - sy - 4} textAnchor="start" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          C
        </text>
        <text x={ox - 5} y={oy - sy + 4} textAnchor="end" fontSize="14" fontFamily="Times New Roman, serif">
          1
        </text>
        <text x={pxP + 6} y={pyP + 3} textAnchor="start" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          P
        </text>
        <text x={ox - 8} y={oy + 13} textAnchor="middle" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          O
        </text>
        <text x={ox + 2 * sx} y={oy + 14} textAnchor="middle" fontSize="14" fontFamily="Times New Roman, serif">
          2
        </text>
        <text x={ox + 2 * sx + 5} y={oy - 3} textAnchor="start" fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          A
        </text>
        <text x="223" y={oy - 4} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần III - Câu 6: Hai hình lục giác đều lồng nhau chia thành 8 miền
 */
export const DiagramDe13HexagonP3Q6: React.FC = () => {
  // Center (120, 120)
  // Outer regular hexagon radius R = 92, vertices at angles -90, -30, 30, 90, 150, 210 deg
  // Inner regular hexagon radius r = 64, same angles
  const cx = 120;
  const cy = 120;
  const R = 92;
  const r = 64;
  const angles = [-90, -30, 30, 90, 150, 210].map((deg) => (deg * Math.PI) / 180);

  const outerPts = angles.map((a) => ({
    x: cx + R * Math.cos(a),
    y: cy + R * Math.sin(a),
  }));
  const innerPts = angles.map((a) => ({
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a),
  }));

  const outerPoly = outerPts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const innerPoly = innerPts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  return (
    <div className="w-full max-w-[230px] mx-auto my-2">
      <svg viewBox="0 0 240 240" className="w-full h-auto">
        {/* Outer hexagon */}
        <polygon
          points={outerPoly}
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Inner hexagon */}
        <polygon
          points={innerPoly}
          fill="none"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* 6 segments connecting corresponding vertices */}
        {outerPts.map((op, idx) => (
          <line
            key={idx}
            x1={op.x}
            y1={op.y}
            x2={innerPts[idx].x}
            y2={innerPts[idx].y}
            stroke="#0f172a"
            strokeWidth="2"
          />
        ))}

        {/* Vertical diagonal of inner hexagon (connecting top vertex 0 and bottom vertex 3) */}
        <line
          x1={innerPts[0].x}
          y1={innerPts[0].y}
          x2={innerPts[3].x}
          y2={innerPts[3].y}
          stroke="#0f172a"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
