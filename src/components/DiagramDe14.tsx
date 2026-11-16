import React from 'react';

/**
 * Phần I - Câu 1: Đồ thị hàm số y = (x + 1) / (x - 1)
 */
export const DiagramDe14GraphP1Q1: React.FC = () => {
  // Origin O(0,0) at (125, 132)
  // Scale: s = 26px/unit
  // Asymptotes: x = 1 (px = 151), y = 1 (py = 106)
  const ox = 125;
  const oy = 132;
  const s = 26;

  const leftPts: string[] = [];
  for (let x = -3.8; x <= 0.46; x += 0.03) {
    const y = (x + 1) / (x - 1);
    const px = ox + x * s;
    const py = oy - y * s;
    leftPts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  const rightPts: string[] = [];
  for (let x = 1.44; x <= 5.5; x += 0.03) {
    const y = (x + 1) / (x - 1);
    const px = ox + x * s;
    const py = oy - y * s;
    rightPts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return (
    <div className="w-full max-w-[300px] mx-auto my-2">
      <svg viewBox="0 0 300 225" className="w-full h-auto">
        <defs>
          <marker
            id="de14-p1q1-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
          </marker>
        </defs>

        {/* Asymptotes x = 1 and y = 1 */}
        <line
          x1="22"
          y1={oy - s}
          x2="275"
          y2={oy - s}
          stroke="#475569"
          strokeWidth="0.9"
        />
        <line
          x1={ox + s}
          y1="14"
          x2={ox + s}
          y2="212"
          stroke="#475569"
          strokeWidth="0.9"
        />

        {/* Dashed lines for point (2; 3) */}
        <line
          x1={ox}
          y1={oy - 3 * s}
          x2={ox + 2 * s}
          y2={oy - 3 * s}
          stroke="#0f172a"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <line
          x1={ox + 2 * s}
          y1={oy - 3 * s}
          x2={ox + 2 * s}
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Axes Ox, Oy */}
        <line
          x1="22"
          y1={oy}
          x2="282"
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de14-p1q1-arrow)"
        />
        <line
          x1={ox}
          y1="212"
          x2={ox}
          y2="14"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de14-p1q1-arrow)"
        />

        {/* Right-angle square at O (first quadrant) */}
        <polyline
          fill="none"
          stroke="#0f172a"
          strokeWidth="0.9"
          points={`${ox},${oy - 7} ${ox + 7},${oy - 7} ${ox + 7},${oy}`}
        />

        {/* Hyperbola branches */}
        <polyline
          fill="none"
          stroke="#991b1b"
          strokeWidth="1.4"
          points={leftPts.join(' ')}
        />
        <polyline
          fill="none"
          stroke="#991b1b"
          strokeWidth="1.4"
          points={rightPts.join(' ')}
        />

        {/* Labels */}
        <text x={ox + 6} y="21" fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>
        <text x="276" y={oy - 5} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
        <text x={ox - 8} y={oy - 4} textAnchor="end" fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          O
        </text>
        <text x={ox - 5} y={oy - 3 * s + 4} textAnchor="end" fontSize="13" fontFamily="Times New Roman, serif">
          3
        </text>
        <text x={ox - 5} y={oy - s - 3} textAnchor="end" fontSize="13" fontFamily="Times New Roman, serif">
          1
        </text>
        <text x={ox - s - 2} y={oy + 13} textAnchor="middle" fontSize="13" fontFamily="Times New Roman, serif">
          −1
        </text>
        <text x={ox - 5} y={oy + s + 4} textAnchor="end" fontSize="13" fontFamily="Times New Roman, serif">
          −1
        </text>
        <text x={ox + 2 * s} y={oy + 13} textAnchor="middle" fontSize="13" fontFamily="Times New Roman, serif">
          2
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần I - Câu 2: Hình hộp ABCD.A'B'C'D' tâm O, với I và I' là tâm hai đáy
 */
export const DiagramDe14BoxP1Q2: React.FC = () => {
  // Coordinates matching original diagram on page 1:
  // Top face: A'(110, 30), B'(242, 30), C'(208, 72), D'(76, 72)
  // I' = midpoint of A'C' = (159, 51)
  // Bottom face shifted by (+24, +115):
  // A(134, 145), B(266, 145), C(232, 187), D(100, 187)
  // I = midpoint of AC = (183, 166)
  // O = midpoint of A'C = ((110+232)/2, (30+187)/2) = (171, 108.5)
  return (
    <div className="w-full max-w-[330px] mx-auto my-2">
      <svg viewBox="0 0 320 210" className="w-full h-auto">
        {/* Hidden dashed segments: AA', AB, AD, AC, BD, A'C, B'D, A'I */}
        <line x1="110" y1="30" x2="134" y2="145" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="134" y1="145" x2="266" y2="145" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="134" y1="145" x2="100" y2="187" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="134" y1="145" x2="232" y2="187" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="266" y1="145" x2="100" y2="187" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="110" y1="30" x2="232" y2="187" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="242" y1="30" x2="100" y2="187" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="110" y1="30" x2="183" y2="166" stroke="#0f172a" strokeWidth="1.2" strokeDasharray="4 4" />

        {/* Visible solid segments: top face A'B'C'D' + diagonals A'C', B'D' */}
        <polygon
          points="110,30 242,30 208,72 76,72"
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.3"
        />
        <line x1="110" y1="30" x2="208" y2="72" stroke="#0f172a" strokeWidth="1.3" />
        <line x1="242" y1="30" x2="76" y2="72" stroke="#0f172a" strokeWidth="1.3" />

        {/* Visible solid vertical/lateral edges & D'C */}
        <line x1="76" y1="72" x2="100" y2="187" stroke="#0f172a" strokeWidth="1.3" />
        <line x1="208" y1="72" x2="232" y2="187" stroke="#0f172a" strokeWidth="1.3" />
        <line x1="242" y1="30" x2="266" y2="145" stroke="#0f172a" strokeWidth="1.3" />
        <line x1="100" y1="187" x2="232" y2="187" stroke="#0f172a" strokeWidth="1.3" />
        <line x1="232" y1="187" x2="266" y2="145" stroke="#0f172a" strokeWidth="1.3" />
        <line x1="76" y1="72" x2="232" y2="187" stroke="#0f172a" strokeWidth="1.3" />

        {/* Labels */}
        <text x="104" y="29" textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          A&apos;
        </text>
        <text x="247" y="29" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          B&apos;
        </text>
        <text x="213" y="75" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          C&apos;
        </text>
        <text x="70" y="75" textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          D&apos;
        </text>
        <text x="159" y="45" textAnchor="middle" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          I&apos;
        </text>
        <text x="176" y="109" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          O
        </text>
        <text x="128" y="150" textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          A
        </text>
        <text x="272" y="150" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          B
        </text>
        <text x="237" y="193" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          C
        </text>
        <text x="93" y="193" textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          D
        </text>
        <text x="183" y="182" textAnchor="middle" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          I
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần I - Câu 3: Bảng số liệu ghép nhóm quãng đường đi bộ mỗi ngày của bác Lan trong 20 ngày
 */
export const DiagramDe14TableP1Q3: React.FC = () => {
  return (
    <div className="w-full max-w-[660px] mx-auto my-2 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-900 text-slate-900 text-sm sm:text-[15px] font-serif bg-white">
        <tbody>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-left bg-[#ffff00]">
              Quãng<br />đường (km)
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-left align-top">[2,7;3,0)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left align-top">[3,0;3,3)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left align-top">[3,3;3,6)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left align-top">[3,6;3,9)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left align-top">[3,9;4,2)</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-left bg-[#ffff00] whitespace-nowrap">
              Số ngày
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">3</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">6</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">5</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">4</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần I - Câu 4: Đồ thị hàm số trùng phương y = -x^4 + 2x^2 - 1 có CĐ tại (-1; 1), (1; 1) và CT tại (0; -1)
 */
export const DiagramDe14GraphP1Q4: React.FC = () => {
  // Origin O(0,0) at (150, 112)
  // Scale: sx = 54px/unit, sy = 54px/unit
  // Wait: in the drawing on page 2, the curve passes through (-1, 1), (0, -1), (1, 1) and goes down!
  // Let's use y = 1 - 2*(x^2 - 1)^2 so at x=0, y = -1; at x=±1, y = 1!
  const ox = 150;
  const oy = 112;
  const s = 54;

  const pts: string[] = [];
  for (let x = -1.46; x <= 1.46; x += 0.025) {
    const y = 1 - 2 * (x * x - 1) * (x * x - 1);
    const px = ox + x * s;
    const py = oy - y * s;
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return (
    <div className="w-full max-w-[310px] mx-auto my-2">
      <svg viewBox="0 0 310 215" className="w-full h-auto">
        <defs>
          <marker
            id="de14-p1q4-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
          </marker>
        </defs>

        {/* Dashed projection lines for (-1; 1) and (1; 1) */}
        <line
          x1={ox - s}
          y1={oy - s}
          x2={ox + s}
          y2={oy - s}
          stroke="#0f172a"
          strokeWidth="1.1"
          strokeDasharray="3.5 3.5"
        />
        <line
          x1={ox - s}
          y1={oy - s}
          x2={ox - s}
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1.1"
          strokeDasharray="3.5 3.5"
        />
        <line
          x1={ox + s}
          y1={oy - s}
          x2={ox + s}
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1.1"
          strokeDasharray="3.5 3.5"
        />

        {/* Axes Ox, Oy */}
        <line
          x1="35"
          y1={oy}
          x2="282"
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de14-p1q4-arrow)"
        />
        <line
          x1={ox}
          y1="198"
          x2={ox}
          y2="14"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de14-p1q4-arrow)"
        />

        {/* Right-angle square at O (second quadrant, top-left of O) */}
        <polyline
          fill="none"
          stroke="#0f172a"
          strokeWidth="0.9"
          points={`${ox - 9},${oy} ${ox - 9},${oy - 9} ${ox},${oy - 9}`}
        />

        {/* Quartic curve */}
        <polyline
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.35"
          points={pts.join(' ')}
        />

        {/* Tick marks on Ox and Oy */}
        <line x1={ox - s} y1={oy - 3} x2={ox - s} y2={oy + 3} stroke="#0f172a" strokeWidth="1" />
        <line x1={ox + s} y1={oy - 3} x2={ox + s} y2={oy + 3} stroke="#0f172a" strokeWidth="1" />
        <line x1={ox - 3} y1={oy + s} x2={ox + 3} y2={oy + s} stroke="#0f172a" strokeWidth="1" />

        {/* Labels */}
        <text x={ox + 7} y="22" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>
        <text x="278" y={oy - 5} fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
        <text x={ox - 10} y={oy + 17} textAnchor="middle" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          O
        </text>
        <text x={ox - 5} y={oy - s - 4} textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif">
          1
        </text>
        <text x={ox - s - 2} y={oy + 17} textAnchor="middle" fontSize="16" fontFamily="Times New Roman, serif">
          −1
        </text>
        <text x={ox + s} y={oy + 17} textAnchor="middle" fontSize="16" fontFamily="Times New Roman, serif">
          1
        </text>
        <text x={ox - 5} y={oy + s + 6} textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif">
          −1
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần I - Câu 7: Bảng kết quả bài kiểm tra môn Toán cuối học kỳ I của học sinh khối 12
 */
export const DiagramDe14TableP1Q7: React.FC = () => {
  return (
    <div className="w-full max-w-[540px] mx-auto my-2 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-900 text-slate-900 text-sm sm:text-[15px] font-serif bg-white">
        <tbody>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-left bg-[#ffff00] whitespace-nowrap">
              Điểm số
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[0;2)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[2;4)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[4;6)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[6;8)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">[8;10)</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-left bg-[#ffff00] whitespace-nowrap">
              Số học sinh
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">24</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">67</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">136</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">167</td>
            <td className="border border-slate-900 px-3 py-1.5 text-left">106</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần II - Câu 1: Bảng thống kê chiều cao của 40 học sinh
 */
export const DiagramDe14TableP2Q1: React.FC = () => {
  return (
    <div className="w-full max-w-[660px] mx-auto my-2 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-900 text-slate-900 text-sm sm:text-[15px] font-serif bg-white">
        <tbody>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-center bg-[#ffff00] whitespace-nowrap">
              Nhóm chiều cao
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[155;160)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[160;165)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[165;170)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">[170;175)</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">Tổng</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-3 py-1.5 font-normal text-center bg-[#ffff00] whitespace-nowrap">
              Số học sinh
            </td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">5</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">12</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">16</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">7</td>
            <td className="border border-slate-900 px-3 py-1.5 text-center">
              <i>n</i> = 40
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần II - Câu 2: Hình hộp chữ nhật ABCD.A1B1C1D1 gắn hệ trục tọa độ Oxyz
 */
export const DiagramDe14BoxP2Q2: React.FC = () => {
  // Coordinates matching original diagram on page 3:
  // D(108, 165)
  // A(62, 220), B(175, 220), C(221, 165)
  // Vertical height = 110:
  // D1(108, 55), A1(62, 110), B1(175, 110), C1(221, 55)
  // M on B1D1: M(132, 76)
  return (
    <div className="w-full max-w-[290px] mx-auto my-2">
      <svg viewBox="0 0 285 245" className="w-full h-auto">
        <defs>
          <marker
            id="de14-p2q2-arrow"
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

        {/* Yellow diagonal plane BDD1B1 */}
        <polygon
          points="108,55 175,110 175,220 108,165"
          fill="#ffff66"
          stroke="none"
        />

        {/* Hidden dashed edges: DD1, DA, DC, DB */}
        <line x1="108" y1="55" x2="108" y2="165" stroke="#1e3a8a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="108" y1="165" x2="62" y2="220" stroke="#1e3a8a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="108" y1="165" x2="221" y2="165" stroke="#1e3a8a" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="108" y1="165" x2="175" y2="220" stroke="#1e3a8a" strokeWidth="1.2" strokeDasharray="4 4" />

        {/* Coordinate axes extensions from D1, A, C */}
        <line
          x1="108"
          y1="55"
          x2="108"
          y2="16"
          stroke="#b91c1c"
          strokeWidth="1.2"
          markerEnd="url(#de14-p2q2-arrow)"
        />
        <line
          x1="62"
          y1="220"
          x2="45"
          y2="240"
          stroke="#b91c1c"
          strokeWidth="1.2"
          markerEnd="url(#de14-p2q2-arrow)"
        />
        <line
          x1="221"
          y1="165"
          x2="255"
          y2="165"
          stroke="#b91c1c"
          strokeWidth="1.2"
          markerEnd="url(#de14-p2q2-arrow)"
        />

        {/* Visible solid edges: top face A1B1C1D1 + diagonal B1D1, vertical edges A1A, B1B, C1C, bottom edges AB, BC */}
        <polygon
          points="108,55 221,55 175,110 62,110"
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="1.3"
        />
        <line x1="108" y1="55" x2="175" y2="110" stroke="#1e3a8a" strokeWidth="1.3" />
        <line x1="62" y1="110" x2="62" y2="220" stroke="#1e3a8a" strokeWidth="1.3" />
        <line x1="175" y1="110" x2="175" y2="220" stroke="#1e3a8a" strokeWidth="1.3" />
        <line x1="221" y1="55" x2="221" y2="165" stroke="#1e3a8a" strokeWidth="1.3" />
        <line x1="62" y1="220" x2="175" y2="220" stroke="#1e3a8a" strokeWidth="1.3" />
        <line x1="175" y1="220" x2="221" y2="165" stroke="#1e3a8a" strokeWidth="1.3" />

        {/* Point M on B1D1 */}
        <circle cx="133" cy="75.5" r="2.2" fill="#0f172a" />

        {/* Labels */}
        <text x="103" y="20" textAnchor="end" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          z
        </text>
        <text x="104" y="51" textAnchor="end" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          D<tspan dy="3" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="223" y="52" textAnchor="start" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          C<tspan dy="3" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="128" y="88" textAnchor="end" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          M
        </text>
        <text x="58" y="106" textAnchor="end" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          A<tspan dy="3" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="180" y="116" textAnchor="start" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          B<tspan dy="3" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="103" y="168" textAnchor="end" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          D
        </text>
        <text x="225" y="162" textAnchor="start" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          C
        </text>
        <text x="250" y="177" textAnchor="middle" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>
        <text x="58" y="218" textAnchor="end" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          A
        </text>
        <text x="44" y="234" textAnchor="end" fontSize="14" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
        <text x="178" y="234" textAnchor="start" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          B
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần II - Câu 3: Đồ thị hàm số bậc ba f(x) = -x^3 + 3x
 */
export const DiagramDe14GraphP2Q3: React.FC = () => {
  // Origin O(0,0) at (140, 128)
  // Scale: sx = 46px/unit, sy = 44px/unit
  // Function: y = -x^3 + 3x
  const ox = 140;
  const oy = 128;
  const sx = 46;
  const sy = 44;

  const pts: string[] = [];
  for (let x = -1.95; x <= 1.95; x += 0.025) {
    const y = -x * x * x + 3 * x;
    const px = ox + x * sx;
    const py = oy - y * sy;
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return (
    <div className="w-full max-w-[300px] mx-auto my-2">
      <svg viewBox="0 0 285 245" className="w-full h-auto">
        <defs>
          <marker
            id="de14-p2q3-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
          </marker>
        </defs>

        {/* Dashed projection lines for (1; 2) and (-1; -2) */}
        <line
          x1={ox}
          y1={oy - 2 * sy}
          x2={ox + sx}
          y2={oy - 2 * sy}
          stroke="#0f172a"
          strokeWidth="1.1"
          strokeDasharray="3.5 3.5"
        />
        <line
          x1={ox + sx}
          y1={oy - 2 * sy}
          x2={ox + sx}
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1.1"
          strokeDasharray="3.5 3.5"
        />
        <line
          x1={ox - sx}
          y1={oy}
          x2={ox - sx}
          y2={oy + 2 * sy}
          stroke="#0f172a"
          strokeWidth="1.1"
          strokeDasharray="3.5 3.5"
        />
        <line
          x1={ox - sx}
          y1={oy + 2 * sy}
          x2={ox}
          y2={oy + 2 * sy}
          stroke="#0f172a"
          strokeWidth="1.1"
          strokeDasharray="3.5 3.5"
        />

        {/* Axes Ox, Oy */}
        <line
          x1="35"
          y1={oy}
          x2="262"
          y2={oy}
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de14-p2q3-arrow)"
        />
        <line
          x1={ox}
          y1="232"
          x2={ox}
          y2="14"
          stroke="#0f172a"
          strokeWidth="1.2"
          markerEnd="url(#de14-p2q3-arrow)"
        />

        {/* Right-angle square at O (first quadrant) */}
        <polyline
          fill="none"
          stroke="#0f172a"
          strokeWidth="0.9"
          points={`${ox},${oy - 7} ${ox + 7},${oy - 7} ${ox + 7},${oy}`}
        />

        {/* Cubic curve */}
        <polyline
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.35"
          points={pts.join(' ')}
        />

        {/* Tick marks at -2, 2 on Ox and -2, 2 on Oy */}
        <circle cx={ox - 2 * sx} cy={oy} r="1.6" fill="#0f172a" />
        <circle cx={ox + 2 * sx} cy={oy} r="1.6" fill="#0f172a" />
        <line x1={ox - 3} y1={oy - 2 * sy} x2={ox + 3} y2={oy - 2 * sy} stroke="#0f172a" strokeWidth="1" />
        <line x1={ox - 3} y1={oy + 2 * sy} x2={ox + 3} y2={oy + 2 * sy} stroke="#0f172a" strokeWidth="1" />

        {/* Labels */}
        <text x={ox + 6} y="22" fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          y
        </text>
        <text x="256" y={oy - 5} fontSize="13" fontFamily="Times New Roman, serif" fontStyle="italic">
          x
        </text>
        <text x={ox - 9} y={oy - 4} textAnchor="end" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          O
        </text>
        <text x={ox - 5} y={oy - 2 * sy + 4} textAnchor="end" fontSize="15" fontFamily="Times New Roman, serif">
          2
        </text>
        <text x={ox - sx - 2} y={oy - 4} textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −1
        </text>
        <text x={ox - 2 * sx} y={oy + 15} textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          −2
        </text>
        <text x={ox + sx} y={oy + 15} textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          1
        </text>
        <text x={ox + 2 * sx} y={oy - 4} textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif">
          2
        </text>
        <text x={ox + 5} y={oy + 2 * sy + 4} textAnchor="start" fontSize="15" fontFamily="Times New Roman, serif">
          −2
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần III - Câu 1: Khối xếp từ các quả cầu có cùng kích thước (a, b, c, d, n)
 */
export const DiagramDe14SpheresP3Q1: React.FC = () => {
  // Render a 4-layer stack of 3D-shaded spheres matching the original diagram on page 5:
  // Layer L = 0 (bottom, 8x5), L = 1 (7x4), L = 2 (6x3), L = 3 (top, 5x2)
  // Back-to-front painter's algorithm so spheres overlap naturally
  const r = 9.5;
  const spheres: React.ReactNode[] = [];

  // Layers from bottom (layerIdx = 0) to top (layerIdx = 3)
  // Actually in 3D stack, draw from back row to front row, bottom layer to top layer
  for (let layer = 0; layer < 4; layer++) {
    const cols = 8 - layer; // 8, 7, 6, 5
    const rows = 5 - layer; // 5, 4, 3, 2
    for (let row = 0; row < rows; row++) {
      // row = 0 is back, row = rows-1 is front
      for (let col = 0; col < cols; col++) {
        // Compute screen center (cx, cy)
        // Base front-left of layer 0 is at (75, 118)
        // Depth offset per back row: (+7.5, -6.5)
        // Layer offset per up layer: (+9.2, -11.5)
        const depthFromFront = rows - 1 - row;
        const cx = 68 + col * 18.2 + depthFromFront * 7.8 + layer * 13.0;
        const cy = 116 - depthFromFront * 6.8 - layer * 10.5;
        spheres.push(
          <circle
            key={`sp-${layer}-${row}-${col}`}
            cx={cx}
            cy={cy}
            r={r}
            fill="url(#de14-sphere-grad)"
            stroke="#334155"
            strokeWidth="0.7"
          />
        );
      }
    }
  }

  return (
    <div className="w-full max-w-[330px] mx-auto my-2">
      <svg viewBox="0 0 310 165" className="w-full h-auto">
        <defs>
          <radialGradient id="de14-sphere-grad" cx="35%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#cbd5e1" />
            <stop offset="85%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </radialGradient>
          <marker
            id="de14-dim-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
          </marker>
        </defs>

        {/* Dimension a (top width) */}
        <line x1="106" y1="14" x2="106" y2="62" stroke="#0f172a" strokeWidth="1" />
        <line x1="196" y1="14" x2="196" y2="62" stroke="#0f172a" strokeWidth="1" />
        <line
          x1="142"
          y1="22"
          x2="108"
          y2="22"
          stroke="#0f172a"
          strokeWidth="1"
          markerEnd="url(#de14-dim-arrow)"
        />
        <line
          x1="160"
          y1="22"
          x2="194"
          y2="22"
          stroke="#0f172a"
          strokeWidth="1"
          markerEnd="url(#de14-dim-arrow)"
        />
        <text x="151" y="26" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          a
        </text>

        {/* Dimension b (top depth, slanted top-left) */}
        <line x1="80" y1="53" x2="105" y2="53" stroke="#0f172a" strokeWidth="1" />
        <line x1="88" y1="45" x2="114" y2="45" stroke="#0f172a" strokeWidth="1" />
        <text x="95" y="42" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          b
        </text>

        {/* Dimension n (height on left) */}
        <line x1="36" y1="53" x2="96" y2="53" stroke="#0f172a" strokeWidth="1" />
        <line x1="36" y1="126" x2="62" y2="126" stroke="#0f172a" strokeWidth="1" />
        <line
          x1="46"
          y1="78"
          x2="46"
          y2="55"
          stroke="#0f172a"
          strokeWidth="1"
          markerEnd="url(#de14-dim-arrow)"
        />
        <line
          x1="46"
          y1="98"
          x2="46"
          y2="124"
          stroke="#0f172a"
          strokeWidth="1"
          markerEnd="url(#de14-dim-arrow)"
        />
        <text x="46" y="93" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          n
        </text>

        {/* Spheres stack */}
        <g>{spheres}</g>

        {/* Dimension c (bottom width) */}
        <line x1="58" y1="120" x2="58" y2="152" stroke="#0f172a" strokeWidth="1" />
        <line x1="205" y1="120" x2="205" y2="152" stroke="#0f172a" strokeWidth="1" />
        <line
          x1="122"
          y1="142"
          x2="60"
          y2="142"
          stroke="#0f172a"
          strokeWidth="1"
          markerEnd="url(#de14-dim-arrow)"
        />
        <line
          x1="142"
          y1="142"
          x2="203"
          y2="142"
          stroke="#0f172a"
          strokeWidth="1"
          markerEnd="url(#de14-dim-arrow)"
        />
        <text x="132" y="146" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          c
        </text>

        {/* Dimension d (bottom depth on right) */}
        <line x1="205" y1="126" x2="232" y2="142" stroke="#0f172a" strokeWidth="1" />
        <line x1="237" y1="98" x2="262" y2="114" stroke="#0f172a" strokeWidth="1" />
        <line
          x1="232"
          y1="126"
          x2="218"
          y2="136"
          stroke="#0f172a"
          strokeWidth="1"
          markerEnd="url(#de14-dim-arrow)"
        />
        <line
          x1="244"
          y1="116"
          x2="255"
          y2="108"
          stroke="#0f172a"
          strokeWidth="1"
          markerEnd="url(#de14-dim-arrow)"
        />
        <text x="238" y="125" textAnchor="middle" fontSize="15" fontFamily="Times New Roman, serif" fontStyle="italic">
          d
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần III - Câu 2: Tứ diện đều ABCD với 2AM = MC, N là trung điểm AD, đáy BCD tô màu vàng
 */
export const DiagramDe14TetrahedronP3Q2: React.FC = () => {
  // Coordinates matching original diagram on page 5:
  // A(142, 26), B(58, 134), C(162, 188), D(228, 130)
  // M on AC with 2AM = MC => AM = 1/3 AC:
  // M = (142 + (162-142)/3, 26 + (188-26)/3) = (148.7, 80)
  // N midpoint of AD:
  // N = ((142+228)/2, (26+130)/2) = (185, 78)
  return (
    <div className="w-full max-w-[290px] mx-auto my-2">
      <svg viewBox="0 0 285 212" className="w-full h-auto">
        {/* Yellow shaded base BCD */}
        <polygon
          points="58,134 162,188 228,130"
          fill="#ffff66"
          stroke="none"
        />

        {/* Hidden dashed edge BD */}
        <line
          x1="58"
          y1="134"
          x2="228"
          y2="130"
          stroke="#1e3a8a"
          strokeWidth="1.4"
          strokeDasharray="5 4"
        />

        {/* Visible solid edges: AB, AC, AD, BC, CD, BM, CN, MN */}
        <line x1="142" y1="26" x2="58" y2="134" stroke="#1e3a8a" strokeWidth="1.5" />
        <line x1="142" y1="26" x2="162" y2="188" stroke="#1e3a8a" strokeWidth="1.5" />
        <line x1="142" y1="26" x2="228" y2="130" stroke="#1e3a8a" strokeWidth="1.5" />
        <line x1="58" y1="134" x2="162" y2="188" stroke="#1e3a8a" strokeWidth="1.5" />
        <line x1="162" y1="188" x2="228" y2="130" stroke="#1e3a8a" strokeWidth="1.5" />
        <line x1="58" y1="134" x2="148.7" y2="80" stroke="#1e3a8a" strokeWidth="1.5" />
        <line x1="162" y1="188" x2="185" y2="78" stroke="#1e3a8a" strokeWidth="1.5" />
        <line x1="148.7" y1="80" x2="185" y2="78" stroke="#1e3a8a" strokeWidth="1.5" />

        {/* Labels */}
        <text x="142" y="20" textAnchor="middle" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          A
        </text>
        <text x="143" y="77" textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          M
        </text>
        <text x="191" y="76" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          N
        </text>
        <text x="51" y="139" textAnchor="end" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          B
        </text>
        <text x="234" y="135" textAnchor="start" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          D
        </text>
        <text x="162" y="204" textAnchor="middle" fontSize="16" fontFamily="Times New Roman, serif" fontStyle="italic">
          C
        </text>
      </svg>
    </div>
  );
};

/**
 * Phần III - Câu 4: Sợi dây cố định một đầu vào tường xâu 10 hạt màu đỏ và 5 hạt màu xanh
 */
export const DiagramDe14BeadsP3Q4: React.FC = () => {
  // Sequence of 15 beads along a catenary curve:
  // Red (pinkish-red) and Blue (cyan-blue), e.g.: R, R, R, B, R, R, B, R, B, R, R, B, B, R, R
  const colors = [
    'R', 'R', 'R', 'B', 'R', 'R', 'B', 'R', 'B', 'R', 'R', 'B', 'B', 'R', 'R'
  ];

  return (
    <div className="w-full max-w-[440px] mx-auto my-2">
      <svg viewBox="0 0 420 75" className="w-full h-auto">
        <defs>
          <radialGradient id="de14-red-bead" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffe4e6" />
            <stop offset="45%" stopColor="#fb7185" />
            <stop offset="90%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#9f1239" />
          </radialGradient>
          <radialGradient id="de14-blue-bead" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="45%" stopColor="#38bdf8" />
            <stop offset="90%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </radialGradient>
        </defs>

        {/* String fixed to pin on left */}
        <path
          d="M 18 42 Q 25 14 48 18 Q 210 78 398 34"
          fill="none"
          stroke="#475569"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Wall pin at (48, 18) */}
        <circle cx="48" cy="18" r="5.5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.3" />
        <line x1="44.5" y1="14.5" x2="51.5" y2="21.5" stroke="#0f172a" strokeWidth="1.2" />
        <line x1="44.5" y1="21.5" x2="51.5" y2="14.5" stroke="#0f172a" strokeWidth="1.2" />

        {/* 15 Beads along the curve */}
        {colors.map((c, idx) => {
          const t = (idx + 1) / 16.2;
          // Quadratic Bezier from P0(52, 20), P1(212, 74), P2(395, 35)
          const u = 1 - t;
          const bx = u * u * 52 + 2 * u * t * 212 + t * t * 395;
          const by = u * u * 20 + 2 * u * t * 74 + t * t * 35;
          return (
            <circle
              key={idx}
              cx={bx}
              cy={by}
              r="9.2"
              fill={c === 'R' ? 'url(#de14-red-bead)' : 'url(#de14-blue-bead)'}
              stroke={c === 'R' ? '#be123c' : '#0369a1'}
              strokeWidth="0.6"
            />
          );
        })}
      </svg>
    </div>
  );
};

/**
 * Phần III - Câu 6: Tấm gỗ hình tròn đo bằng thước vuông có kích thước 10cm và 5cm
 */
export const DiagramDe14CircleRulerP3Q6: React.FC = () => {
  // Circle center at (145, 128), radius R = 76
  // Diameter = 2R = 152 corresponds to sqrt(10^2 + 5^2) = 5*sqrt(5) = 11.1803 cm
  // Scale: 1 cm = 152 / 11.1803 = 13.595 px
  // So 10 cm = 135.95 px, 5 cm = 67.98 px
  // Let right-angle inner corner B of the carpenter's square be on the circle at angle -85 deg:
  // Wait: let's place B at top-right-ish or top so the long arm goes down-left at -135 deg (45 deg) and short arm goes down-right at -45 deg (45 deg)!
  // Let's check: if long arm goes down-left at angle 135 deg from B, and short arm goes down-right at angle 45 deg from B:
  // Since B is on the circle of radius R = 76, and angle ABC = 90 deg with AB = 135.95, BC = 67.98:
  // Wait: in a circle of diameter D = 152, if B is at angle theta0, and chord BA has length 135.95, chord BC has length 67.98, and angle ABC = 90 deg:
  // Let's place the coordinate frame rotated by -45 deg:
  // In local frame (u, v) where origin is B(0,0), BA goes along (-1, 0) of length L1 = 136, BC goes along (0, 1) of length L2 = 68:
  // Then A = (-136, 0), B = (0, 0), C = (0, 68).
  // The center of the circle passing through A, B, C (since angle ABC = 90 deg) is the midpoint of AC:
  // O_local = (-68, 34), and radius R = sqrt(68^2 + 34^2) = 76.026!
  // Now rotate local frame so BA points down-left at 45 deg (i.e. vector (-cos 45, +sin 45)) and BC points down-right at 45 deg (vector (+cos 45, +sin 45)):
  // Let s45 = Math.SQRT1_2 = 0.70710678
  // Place B at (154, 48):
  // Unit vector e1 (along BA, down-left): (-s45, +s45)
  // Unit vector e2 (along BC, down-right): (+s45, +s45)
  // Then:
  // B = (154, 48)
  // A = B + 136 * e1 = (154 - 96.17, 48 + 96.17) = (57.8, 144.2)
  // C = B + 68 * e2 = (154 + 48.08, 48 + 48.08) = (202.1, 96.1)
  // Circle center O = midpoint of AC = ((57.8 + 202.1)/2, (144.2 + 96.1)/2) = (130.0, 120.15), R = 76.03!
  // Wait: in the drawing on page 6, is the ruler's OUTER corner on the circle, or INNER corner on the circle?
  // Look at the drawing on page 6:
  // The L-shaped ruler has thickness w = 13px.
  // Its OUTER edges have lengths 10cm and 5cm, with the outer corner at the top, and the two outer tips touching the circle!
  // Wait: both the inner and outer edges are shown, and the dimension lines `10cm` and `5cm` measure the OUTER edges from the top corner to the two ends touching the circle!
  // So A, B, C are the OUTER corner B(154, 48) and the two outer ends A(57.8, 144.2) and C(202.1, 96.1) on the circle!
  // And the inner edges of the L-ruler are offset inward by thickness w = 13px!
  const s45 = Math.SQRT1_2;
  const bx = 154;
  const by = 52;
  const L1 = 136;
  const L2 = 68;
  const w = 13;

  // Outer vertices of L-ruler: A (left end), B (top right-angle corner), C (right end)
  const ax = bx - L1 * s45;
  const ay = by + L1 * s45;
  const cx = bx + L2 * s45;
  const cy = by + L2 * s45;

  // Circle center = midpoint of AC
  const ox = (ax + cx) / 2;
  const oy = (ay + cy) / 2;
  const R = Math.hypot(ax - ox, ay - oy);

  // Inner vertices of L-ruler (offset by +w along e2 for left arm, +w along e1 for right arm)
  const aInX = ax + w * s45;
  const aInY = ay + w * s45;
  const bInX = bx;
  const bInY = by + 2 * w * s45;
  const cInX = cx - w * s45;
  const cInY = cy + w * s45;

  const rulerPoly = [
    `${ax.toFixed(1)},${ay.toFixed(1)}`,
    `${bx.toFixed(1)},${by.toFixed(1)}`,
    `${cx.toFixed(1)},${cy.toFixed(1)}`,
    `${cInX.toFixed(1)},${cInY.toFixed(1)}`,
    `${bInX.toFixed(1)},${bInY.toFixed(1)}`,
    `${aInX.toFixed(1)},${aInY.toFixed(1)}`,
  ].join(' ');

  return (
    <div className="w-full max-w-[260px] mx-auto my-2">
      <svg viewBox="0 0 260 215" className="w-full h-auto">
        <defs>
          <marker
            id="de14-ruler-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#334155" />
          </marker>
        </defs>

        {/* Circle */}
        <circle
          cx={ox}
          cy={oy}
          r={R}
          fill="none"
          stroke="#334155"
          strokeWidth="1.5"
        />

        {/* L-shaped carpenter's square */}
        <polygon
          points={rulerPoly}
          fill="none"
          stroke="#334155"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />

        {/* Extension witness lines for 10cm and 5cm */}
        {/* Top corner witness lines */}
        <line
          x1={bx}
          y1={by}
          x2={bx - 16 * s45}
          y2={by - 16 * s45}
          stroke="#475569"
          strokeWidth="0.9"
        />
        <line
          x1={bx}
          y1={by}
          x2={bx + 16 * s45}
          y2={by - 16 * s45}
          stroke="#475569"
          strokeWidth="0.9"
        />
        {/* Left end witness line */}
        <line
          x1={ax}
          y1={ay}
          x2={ax - 16 * s45}
          y2={ay - 16 * s45}
          stroke="#475569"
          strokeWidth="0.9"
        />
        {/* Right end witness line */}
        <line
          x1={cx}
          y1={cy}
          x2={cx + 16 * s45}
          y2={cy - 16 * s45}
          stroke="#475569"
          strokeWidth="0.9"
        />

        {/* Dimension arrows for 10cm */}
        <line
          x1={ax + 38 * s45 - 11 * s45}
          y1={ay - 38 * s45 - 11 * s45}
          x2={ax - 11 * s45 + 2}
          y2={ay - 11 * s45 - 2}
          stroke="#334155"
          strokeWidth="0.9"
          markerEnd="url(#de14-ruler-arrow)"
        />
        <line
          x1={bx - 38 * s45 - 11 * s45}
          y1={by + 38 * s45 - 11 * s45}
          x2={bx - 11 * s45 - 2}
          y2={by - 11 * s45 + 2}
          stroke="#334155"
          strokeWidth="0.9"
          markerEnd="url(#de14-ruler-arrow)"
        />
        <text x="95" y="88" textAnchor="middle" fontSize="13" fontFamily="Times New Roman, serif">
          10cm
        </text>

        {/* Dimension arrows for 5cm */}
        <line
          x1={bx + 20 * s45 + 11 * s45}
          y1={by + 20 * s45 - 11 * s45}
          x2={bx + 11 * s45 + 2}
          y2={by - 11 * s45 + 2}
          stroke="#334155"
          strokeWidth="0.9"
          markerEnd="url(#de14-ruler-arrow)"
        />
        <line
          x1={cx - 20 * s45 + 11 * s45}
          y1={cy - 20 * s45 - 11 * s45}
          x2={cx + 11 * s45 - 2}
          y2={cy - 11 * s45 - 2}
          stroke="#334155"
          strokeWidth="0.9"
          markerEnd="url(#de14-ruler-arrow)"
        />
        <text x="193" y="65" textAnchor="middle" fontSize="13" fontFamily="Times New Roman, serif">
          5cm
        </text>
      </svg>
    </div>
  );
};
