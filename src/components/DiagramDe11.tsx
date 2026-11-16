import React from 'react';

/**
 * Phần I - Câu 2 (Đề 11): Bảng xét dấu đạo hàm f'(x) chuẩn 100% ảnh gốc
 */
export const DiagramDe11SignTableP1Q2: React.FC = () => {
  return (
    <svg
      viewBox="0 0 540 90"
      className="w-full max-w-[520px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer border */}
      <rect
        x="8"
        y="8"
        width="524"
        height="72"
        fill="#ffffff"
        stroke="#334155"
        strokeWidth="1.2"
      />
      {/* Horizontal line */}
      <line x1="8" y1="44" x2="532" y2="44" stroke="#334155" strokeWidth="1.2" />
      {/* Vertical header separator */}
      <line x1="60" y1="8" x2="60" y2="80" stroke="#334155" strokeWidth="1.2" />

      {/* Vertical solid separator at x = 0 */}
      <line x1="296" y1="44" x2="296" y2="80" stroke="#334155" strokeWidth="1.2" />

      {/* Dotted vertical ticks around 0 at x = -2 and x = 2 */}
      <g stroke="#334155" strokeWidth="1" strokeDasharray="2,2">
        <line x1="186" y1="44" x2="186" y2="53" />
        <line x1="186" y1="71" x2="186" y2="80" />
        <line x1="406" y1="44" x2="406" y2="53" />
        <line x1="406" y1="71" x2="406" y2="80" />
      </g>

      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fill="#0f172a"
        textAnchor="middle"
      >
        <text x="34" y="31" fontStyle="italic">
          x
        </text>
        <text x="34" y="67" fontStyle="italic">
          f&apos;(x)
        </text>

        {/* Row x */}
        <text x="82" y="31">
          −∞
        </text>
        <text x="186" y="31">
          −2
        </text>
        <text x="296" y="31">
          0
        </text>
        <text x="406" y="31">
          2
        </text>
        <text x="510" y="31">
          +∞
        </text>

        {/* Row f'(x) */}
        <text x="134" y="67">
          +
        </text>
        <text x="186" y="67">
          0
        </text>
        <text x="241" y="67">
          −
        </text>
        <text x="351" y="67">
          −
        </text>
        <text x="406" y="67">
          0
        </text>
        <text x="458" y="67">
          +
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 7 (Đề 11): Bảng số liệu ghép nhóm điểm Toán 12A chuẩn 100% ảnh gốc
 */
export const DiagramDe11TableP1Q7: React.FC = () => {
  const groups = ['[0;2)', '[2;4)', '[4;6)', '[6;8)', '[8;10)'];
  const counts = ['2', '11', '14', '9', '3'];

  return (
    <div className="w-full overflow-x-auto py-1 select-none">
      <table className="mx-auto border-collapse border border-slate-800 bg-white text-slate-900 text-xs sm:text-sm font-serif">
        <tbody>
          <tr>
            <td className="border border-slate-800 bg-[#ffff00] px-4 py-1.5 font-medium text-center whitespace-nowrap">
              Nhóm
            </td>
            {groups.map((g, idx) => (
              <td
                key={idx}
                className="border border-slate-800 px-4 py-1.5 text-center whitespace-nowrap"
              >
                {g}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-slate-800 bg-[#ffff00] px-4 py-1.5 font-medium text-center whitespace-nowrap">
              Tần số
            </td>
            {counts.map((c, idx) => (
              <td
                key={idx}
                className="border border-slate-800 px-4 py-1.5 text-center"
              >
                {c}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần I - Câu 10 (Đề 11): Mô hình không gian của con quay chuẩn 100% ảnh gốc
 */
export const DiagramDe11SpinningTopP1Q10: React.FC = () => {
  // Top circle center (135, 34), rx = 75, ry = 16 -> A(60, 34), B(210, 34)
  // Middle circle center (135, 114), rx = 75, ry = 16 -> left(60, 114), C(210, 114)
  // Bottom apex D(135, 168)
  return (
    <svg
      viewBox="0 0 270 190"
      className="w-full max-w-[255px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top ellipse and diameter AB */}
      <ellipse
        cx="135"
        cy="34"
        rx="75"
        ry="16"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.3"
      />
      <line x1="60" y1="34" x2="210" y2="34" stroke="#0f172a" strokeWidth="1.2" />

      {/* Cylinder vertical sides */}
      <line x1="60" y1="34" x2="60" y2="114" stroke="#0f172a" strokeWidth="1.3" />
      <line x1="210" y1="34" x2="210" y2="114" stroke="#0f172a" strokeWidth="1.3" />

      {/* Middle ellipse: back half dashed, front half solid */}
      <path
        d="M 60 114 A 75 16 0 0 1 210 114"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.2"
        strokeDasharray="4,3"
      />
      <path
        d="M 60 114 A 75 16 0 0 0 210 114"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.3"
      />

      {/* Cone slant edges from (60, 114) and C(210, 114) to apex D(135, 168) */}
      <line x1="60" y1="114" x2="135" y2="168" stroke="#0f172a" strokeWidth="1.3" />
      <line x1="210" y1="114" x2="135" y2="168" stroke="#0f172a" strokeWidth="1.3" />

      {/* Dashed projection lines from C(210, 114) and D(135, 168) to (210, 168) */}
      <g stroke="#0f172a" strokeWidth="1.1" strokeDasharray="3.5,3" fill="none">
        <line x1="210" y1="114" x2="210" y2="168" />
        <line x1="135" y1="168" x2="210" y2="168" />
      </g>

      {/* Labels A, B, C, D */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="44" y="38">
          A
        </text>
        <text x="214" y="38">
          B
        </text>
        <text x="214" y="118">
          C
        </text>
        <text x="214" y="172">
          D
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 11 (Đề 11): 5 ô ruộng thí nghiệm đánh số 1 2 3 4 5 chuẩn 100% ảnh gốc
 */
export const DiagramDe11PlotsP1Q11: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-1 select-none">
      <div className="inline-flex border border-slate-800 bg-[#ffff00] text-slate-900 font-serif text-sm sm:text-base">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="w-8 h-7 flex items-center justify-center border-r last:border-r-0 border-slate-800"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Phần II - Câu 1 (Đề 11): Đồ thị hàm bậc ba f(x) = -x^3 + 3x^2 - 1 chuẩn 100% ảnh gốc
 */
export const DiagramDe11GraphP2Q1: React.FC = () => {
  // Origin O(0, 0) at (90, 150), scale s = 28px per unit
  // x in [-1.2, 4.3], y in [-2.2, 4.5]
  // Local min at (0, -1) -> (90, 178)
  // Local max at (2, 3) -> (146, 66)
  // Point (1, 1) -> (118, 122)
  // Point (3, -1) -> (174, 178)
  const ox = 90;
  const oy = 150;
  const s = 28;

  const pts: string[] = [];
  for (let i = 0; i <= 70; i++) {
    const x = -1.03 + (4.18 * i) / 70;
    const y = -x * x * x + 3 * x * x - 1;
    const px = ox + x * s;
    const py = oy - y * s;
    pts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
  }

  return (
    <svg
      viewBox="0 0 245 235"
      className="w-full max-w-[235px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de11-p2q1-arrow"
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
        x1="34"
        y1={oy}
        x2="226"
        y2={oy}
        stroke="#0f172a"
        strokeWidth="1.2"
        markerEnd="url(#de11-p2q1-arrow)"
      />
      <line
        x1={ox}
        y1="224"
        x2={ox}
        y2="14"
        stroke="#0f172a"
        strokeWidth="1.2"
        markerEnd="url(#de11-p2q1-arrow)"
      />

      {/* Dashed projection lines for (1, 1), (2, 3), (3, -1) */}
      <g stroke="#334155" strokeWidth="1" strokeDasharray="3.5,3" fill="none">
        {/* (2, 3) */}
        <line x1={ox + 2 * s} y1={oy} x2={ox + 2 * s} y2={oy - 3 * s} />
        <line x1={ox} y1={oy - 3 * s} x2={ox + 2 * s} y2={oy - 3 * s} />
        {/* (1, 1) */}
        <line x1={ox + s} y1={oy} x2={ox + s} y2={oy - s} />
        <line x1={ox} y1={oy - s} x2={ox + s} y2={oy - s} />
        {/* (3, -1) */}
        <line x1={ox + 3 * s} y1={oy} x2={ox + 3 * s} y2={oy + s} />
        <line x1={ox} y1={oy + s} x2={ox + 3 * s} y2={oy + s} />
      </g>

      {/* Cubic curve */}
      <path
        d={pts.join(' ')}
        fill="none"
        stroke="#1e293b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="11"
        fill="#0f172a"
      >
        <text x={ox - 10} y="20" fontStyle="italic">
          y
        </text>
        <text x="220" y={oy + 11} fontStyle="italic">
          x
        </text>
        <text x={ox - 9} y={oy + 11}>
          0
        </text>

        {/* x ticks */}
        <text x={ox - s - 4} y={oy + 11}>
          −1
        </text>
        <text x={ox + s - 3} y={oy + 11}>
          1
        </text>
        <text x={ox + 2 * s - 3} y={oy + 11}>
          2
        </text>
        <text x={ox + 3 * s - 3} y={oy + 11}>
          3
        </text>
        <text x={ox + 4 * s - 3} y={oy + 11}>
          4
        </text>

        {/* y ticks */}
        <text x={ox - 9} y={oy - s + 4}>
          1
        </text>
        <text x={ox - 9} y={oy - 2 * s + 4}>
          2
        </text>
        <text x={ox - 9} y={oy - 3 * s + 4}>
          3
        </text>
        <text x={ox - 9} y={oy - 4 * s + 4}>
          4
        </text>
        <text x={ox - 14} y={oy + s + 4}>
          −1
        </text>
        <text x={ox - 14} y={oy + 2 * s + 4}>
          −2
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 3 (Đề 11): Mô hình nhà kho ABFPE.DCGQH trong hệ trục tọa độ Oxyz chuẩn 100% ảnh gốc
 */
export const DiagramDe11WarehouseP2Q3: React.FC = () => {
  // Coordinates in 2D oblique projection matching PDF page 3:
  // Front pentagon ABFPE:
  // A = (72, 224), B = (156, 224)
  // E = (72, 168), F = (156, 168)
  // P = (114, 146)
  // Back shift vector (from A to D): (+64, -92)
  // D = (136, 132), C = (220, 132), T = midpoint(D, C) = (178, 132)
  // H = (136, 76), G = (220, 76), Q = (178, 54)
  // Origin O on AD (OA = 2m, AD = 8m -> 1/4 of AD from A):
  // O = (88, 201)
  // K on EH directly above O: K = (88, 145)
  return (
    <svg
      viewBox="0 0 265 255"
      className="w-full max-w-[255px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de11-red-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#e11d48" />
        </marker>
      </defs>

      {/* Coordinate axes from O(88, 201) */}
      {/* Oz vertical up through K(88, 145) to (88, 102) */}
      <line
        x1="88"
        y1="201"
        x2="88"
        y2="145"
        stroke="#1d4ed8"
        strokeWidth="1.2"
        strokeDasharray="3.5,3"
      />
      <line
        x1="88"
        y1="145"
        x2="88"
        y2="104"
        stroke="#e11d48"
        strokeWidth="1.1"
        markerEnd="url(#de11-red-arrow)"
      />
      {/* Oy horizontal right from O(88, 201) */}
      <line
        x1="88"
        y1="201"
        x2="172"
        y2="201"
        stroke="#1d4ed8"
        strokeWidth="1.2"
        strokeDasharray="3.5,3"
      />
      <line
        x1="172"
        y1="201"
        x2="196"
        y2="201"
        stroke="#e11d48"
        strokeWidth="1.1"
        markerEnd="url(#de11-red-arrow)"
      />
      {/* Ox along OA past A(72, 224) to (62, 238) */}
      <line
        x1="72"
        y1="224"
        x2="61"
        y2="240"
        stroke="#e11d48"
        strokeWidth="1.1"
        markerEnd="url(#de11-red-arrow)"
      />

      {/* Hidden dashed lines inside warehouse: AD, DC, DH, HG, QT */}
      <g
        stroke="#1d4ed8"
        strokeWidth="1.3"
        strokeDasharray="4,3.5"
        fill="none"
      >
        <line x1="72" y1="224" x2="136" y2="132" />
        <line x1="136" y1="132" x2="220" y2="132" />
        <line x1="136" y1="132" x2="136" y2="76" />
        <line x1="136" y1="76" x2="220" y2="76" />
        <line x1="178" y1="54" x2="178" y2="132" />
      </g>

      {/* Visible solid blue edges of warehouse */}
      <g
        stroke="#1d4ed8"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        {/* Front rectangle ABFE and roof triangle EFP */}
        <polygon points="72,224 156,224 156,168 72,168" />
        <polyline points="72,168 114,146 156,168" />

        {/* Side edges EH, PQ, FG, BC */}
        <line x1="72" y1="168" x2="136" y2="76" />
        <line x1="114" y1="146" x2="178" y2="54" />
        <line x1="156" y1="168" x2="220" y2="76" />
        <line x1="156" y1="224" x2="220" y2="132" />

        {/* Back visible edges HQ, QG, GC */}
        <polyline points="136,76 178,54 220,76 220,132" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="13"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="58" y="226">
          A
        </text>
        <text x="157" y="236">
          B
        </text>
        <text x="224" y="136">
          C
        </text>
        <text x="140" y="129">
          D
        </text>
        <text x="166" y="129">
          T
        </text>
        <text x="58" y="172">
          E
        </text>
        <text x="159" y="178">
          F
        </text>
        <text x="224" y="79">
          G
        </text>
        <text x="122" y="77">
          H
        </text>
        <text x="103" y="143">
          P
        </text>
        <text x="174" y="48">
          Q
        </text>
        <text x="72" y="152">
          K
        </text>
        <text x="91" y="213">
          O
        </text>
        <text x="52" y="248" fill="#e11d48" fontSize="11">
          x
        </text>
        <text x="200" y="205" fill="#e11d48" fontSize="11">
          y
        </text>
        <text x="78" y="102" fill="#e11d48" fontSize="11">
          z
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 4 (Đề 11): Bảng số liệu ghép nhóm thời gian tự học của 40 học sinh chuẩn 100% ảnh gốc
 */
export const DiagramDe11TableP2Q4: React.FC = () => {
  const groups = ['[1; 2)', '[2; 3)', '[3; 4)', '[4; 5)', '[5; 6)'];
  const counts = ['4', '6', '12', '10', '8'];

  return (
    <div className="w-full overflow-x-auto py-1 select-none">
      <table className="mx-auto border-collapse border border-slate-800 bg-white text-slate-900 text-xs sm:text-sm font-serif">
        <tbody>
          <tr>
            <td className="border border-slate-800 bg-[#ffff00] px-3 py-1.5 font-medium text-left whitespace-nowrap">
              Nhóm (giờ)
            </td>
            {groups.map((g, idx) => (
              <td
                key={idx}
                className="border border-slate-800 px-3 py-1.5 text-left whitespace-nowrap"
              >
                {g}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-slate-800 bg-[#ffff00] px-3 py-1.5 font-medium text-left whitespace-nowrap">
              Số học sinh
            </td>
            {counts.map((c, idx) => (
              <td
                key={idx}
                className="border border-slate-800 px-3 py-1.5 text-left"
              >
                {c}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần III - Câu 2 (Đề 11): Hình 1 và Hình 2 bình chứa hình nón chuẩn 100% ảnh gốc
 */
export const DiagramDe11ConesP3Q2: React.FC = () => {
  return (
    <svg
      viewBox="0 0 230 165"
      className="w-full max-w-[220px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hình 1: Empty inverted cone */}
      <g>
        <ellipse
          cx="62"
          cy="22"
          rx="32"
          ry="6.5"
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.2"
        />
        <polyline
          points="30,22 62,134 94,22"
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <text
          x="62"
          y="153"
          textAnchor="middle"
          fontFamily="'Times New Roman', Times, serif"
          fontSize="13"
          fill="#0f172a"
        >
          Hình 1
        </text>
      </g>

      {/* Hình 2: Partially filled inverted cone */}
      <g>
        {/* Shaded liquid cone */}
        <polygon points="145,58 168,134 191,58" fill="#8c8c8c" />
        <ellipse
          cx="168"
          cy="58"
          rx="23"
          ry="5"
          fill="#8c8c8c"
          stroke="#0f172a"
          strokeWidth="1.1"
        />
        {/* Outer cone */}
        <ellipse
          cx="168"
          cy="22"
          rx="32"
          ry="6.5"
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.2"
        />
        <polyline
          points="136,22 168,134 200,22"
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <text
          x="168"
          y="153"
          textAnchor="middle"
          fontFamily="'Times New Roman', Times, serif"
          fontSize="13"
          fill="#0f172a"
        >
          Hình 2
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 6 (Đề 11): Đồ thị cung đường di chuyển AB của thuyền chuẩn 100% ảnh gốc
 */
export const DiagramDe11BoatCurveP3Q6: React.FC = () => {
  // Origin O(0, 0) at (95, 148), scale sx = 46px per unit, sy = 64px per unit
  // B(-1, 0) -> (49, 148)
  // C(0, 1) -> (95, 84)
  // A(4, 5/3) -> (279, 41.3)
  // M(0.73, 1.27) -> (128.6, 66.7)
  const ox = 95;
  const oy = 148;
  const sx = 46;
  const sy = 64;

  const pts: string[] = [];
  for (let i = 0; i <= 50; i++) {
    const x = -1 + (5 * i) / 50;
    const y = (2 * x + 2) / (x + 2);
    const px = ox + x * sx;
    const py = oy - y * sy;
    pts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
  }

  const ax = ox + 4 * sx;
  const ay = oy - (5 / 3) * sy;
  const mx = ox + 0.65 * sx;
  const my = oy - ((2 * 0.65 + 2) / (0.65 + 2)) * sy;

  return (
    <svg
      viewBox="0 0 340 185"
      className="w-full max-w-[330px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de11-p3q6-arrow"
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

      {/* Right-angle square mark at origin O */}
      <polyline
        points={`${ox},${oy - 7} ${ox + 7},${oy - 7} ${ox + 7},${oy}`}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1"
      />

      {/* Axes Ox, Oy */}
      <line
        x1="18"
        y1={oy}
        x2="322"
        y2={oy}
        stroke="#0f172a"
        strokeWidth="1.2"
        markerEnd="url(#de11-p3q6-arrow)"
      />
      <line
        x1={ox}
        y1="176"
        x2={ox}
        y2="12"
        stroke="#0f172a"
        strokeWidth="1.2"
        markerEnd="url(#de11-p3q6-arrow)"
      />

      {/* Dashed projection lines for A(4, 5/3) and segment OM */}
      <g stroke="#334155" strokeWidth="1" strokeDasharray="3.5,3" fill="none">
        <line x1={ox} y1={ay} x2={ax} y2={ay} />
        <line x1={ax} y1={ay} x2={ax} y2={oy} />
        <line x1={ox} y1={oy} x2={mx} y2={my} />
      </g>

      {/* Curve AB */}
      <path
        d={pts.join(' ')}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Points */}
      <g fill="#0f172a">
        <circle cx={ox - sx} cy={oy} r="1.8" />
        <circle cx={ox} cy={oy} r="1.8" />
        <circle cx={ax} cy={oy} r="1.8" />
        <circle cx={ax} cy={ay} r="1.8" />
        <circle cx={mx} cy={my} r="1.8" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="12"
        fill="#0f172a"
      >
        <text x={ox + 5} y="19" fontStyle="italic">
          y
        </text>
        <text x="318" y={oy - 4} fontStyle="italic">
          x
        </text>
        <text x={ox - 11} y={oy + 13} fontStyle="italic">
          O
        </text>
        <text x={ox - sx - 12} y={oy - 4} fontStyle="italic">
          B
        </text>
        <text x={ox - sx - 8} y={oy + 13}>
          −1
        </text>
        <text x={ax - 3} y={oy + 14}>
          4
        </text>
        <text x={ax + 5} y={ay + 5} fontStyle="italic">
          A
        </text>
        <text x={mx - 10} y={my - 4} fontStyle="italic">
          M
        </text>

        {/* Fraction 5/3 on y-axis */}
        <text x={ox - 10} y={ay - 3} textAnchor="middle" fontSize="11">
          5
        </text>
        <line
          x1={ox - 15}
          y1={ay}
          x2={ox - 5}
          y2={ay}
          stroke="#0f172a"
          strokeWidth="1"
        />
        <text x={ox - 10} y={ay + 10} textAnchor="middle" fontSize="11">
          3
        </text>
      </g>
    </svg>
  );
};
