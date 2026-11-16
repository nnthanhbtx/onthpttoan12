import React from 'react';

/**
 * Phần I - Câu 1 (Đề 10): Bảng biến thiên hàm số y = f(x) có tiệm cận đứng x = 1 và cực tiểu x = 2 chuẩn 100% ảnh gốc
 */
export const DiagramDe10BBTP1Q1: React.FC = () => {
  return (
    <svg
      viewBox="0 0 510 165"
      className="w-full max-w-[490px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de10-bbt-arrow"
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

      <rect x="6" y="6" width="498" height="152" fill="#ffffff" />

      {/* Table borders */}
      <line x1="12" y1="36" x2="498" y2="36" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="12" y1="68" x2="498" y2="68" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="56" y1="10" x2="56" y2="154" stroke="#0f172a" strokeWidth="1.2" />
      {/* Vertical line at x = 1 */}
      <line x1="210" y1="36" x2="210" y2="154" stroke="#0f172a" strokeWidth="1.2" />

      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fill="#0f172a"
        textAnchor="middle"
      >
        {/* Row 1: x */}
        <text x="34" y="27" fontStyle="italic">x</text>
        <text x="80" y="28">−∞</text>
        <text x="210" y="27">1</text>
        <text x="360" y="27">2</text>
        <text x="480" y="28">+∞</text>

        {/* Row 2: y' */}
        <text x="34" y="57" fontStyle="italic">y&apos;</text>
        <text x="134" y="57">−</text>
        <text x="295" y="57">−</text>
        <text x="360" y="57">0</text>
        <text x="415" y="57">+</text>

        {/* Row 3: y */}
        <text x="34" y="114" fontStyle="italic">y</text>
        <text x="72" y="88">−1</text>
        <text x="192" y="148">−∞</text>
        <text x="233" y="90">+∞</text>
        <text x="360" y="148">1</text>
        <text x="484" y="88">2</text>
      </g>

      {/* Arrows */}
      <g stroke="#0f172a" strokeWidth="1.2" fill="none">
        <line
          x1="96"
          y1="92"
          x2="176"
          y2="140"
          markerEnd="url(#de10-bbt-arrow)"
        />
        <line
          x1="262"
          y1="92"
          x2="342"
          y2="140"
          markerEnd="url(#de10-bbt-arrow)"
        />
        <line
          x1="382"
          y1="140"
          x2="462"
          y2="92"
          markerEnd="url(#de10-bbt-arrow)"
        />
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 6 (Đề 10): Bảng số liệu ghép nhóm thời gian truy cập internet chuẩn 100% ảnh gốc
 */
export const DiagramDe10TableP1Q6: React.FC = () => {
  const groups = [
    '[9,5; 12,5)',
    '[12,5; 15,5)',
    '[15,5; 18,5)',
    '[18,5; 21,5)',
    '[21,5; 24,5)',
  ];
  const counts = ['3', '12', '15', '24', '2'];

  return (
    <div className="w-full overflow-x-auto py-1 select-none">
      <table className="mx-auto border-collapse border border-slate-800 bg-white text-slate-900 text-xs sm:text-sm font-serif">
        <tbody>
          <tr>
            <td className="border border-slate-800 px-2.5 py-1.5 font-medium text-center whitespace-nowrap">
              Thời gian (phút)
            </td>
            {groups.map((g, idx) => (
              <td
                key={idx}
                className="border border-slate-800 px-2.5 py-1.5 text-center whitespace-nowrap"
              >
                {g}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-slate-800 px-2.5 py-1.5 font-medium text-center whitespace-nowrap">
              Số học sinh
            </td>
            {counts.map((c, idx) => (
              <td
                key={idx}
                className="border border-slate-800 px-2.5 py-1.5 text-center"
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
 * Phần I - Câu 11 (Đề 10): Hình hộp ABCD - A1B1C1D1 với M là giao điểm A1C1 và B1D1 chuẩn 100% ảnh gốc (image_363be21e.png)
 */
export const DiagramDe10ParallelepipedP1Q11: React.FC = () => {
  return (
    <svg
      viewBox="0 0 345 225"
      className="w-full max-w-[320px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Hidden edges from D (AD, DC, DD1) and internal segment BM (dashed) */}
      <g
        stroke="#111827"
        strokeWidth="1.6"
        strokeDasharray="5.5,4"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="42" y1="198" x2="118" y2="146" />
        <line x1="118" y1="146" x2="280" y2="146" />
        <line x1="118" y1="146" x2="142" y2="20" />
        <line x1="204" y1="198" x2="185" y2="46" />
      </g>

      {/* Visible edges (solid) */}
      <g
        stroke="#111827"
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="42" y1="198" x2="204" y2="198" />
        <line x1="204" y1="198" x2="280" y2="146" />
        <line x1="42" y1="198" x2="66" y2="72" />
        <line x1="204" y1="198" x2="228" y2="72" />
        <line x1="280" y1="146" x2="304" y2="20" />

        {/* Top face A1B1C1D1 and diagonals A1C1, B1D1 */}
        <polygon points="66,72 228,72 304,20 142,20" />
        <line x1="66" y1="72" x2="304" y2="20" />
        <line x1="142" y1="20" x2="228" y2="72" />
      </g>

      {/* Labels matching image_363be21e.png */}
      <g fontSize="20" fontStyle="italic" fill="#111827">
        <text x="34" y="218" textAnchor="middle">
          A
        </text>
        <text x="204" y="218" textAnchor="middle">
          B
        </text>
        <text x="285" y="152" textAnchor="start">
          C
        </text>
        <text x="112" y="144" textAnchor="end">
          D
        </text>

        <text x="58" y="76" textAnchor="end">
          A<tspan dy="4" fontSize="13" fontStyle="normal">1</tspan>
        </text>
        <text x="235" y="88" textAnchor="start">
          B<tspan dy="4" fontSize="13" fontStyle="normal">1</tspan>
        </text>
        <text x="309" y="18" textAnchor="start">
          C<tspan dy="4" fontSize="13" fontStyle="normal">1</tspan>
        </text>
        <text x="140" y="15" textAnchor="middle">
          D<tspan dy="4" fontSize="13" fontStyle="normal">1</tspan>
        </text>
        <text x="190" y="42" textAnchor="middle">
          M
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 3 (Đề 10): Đồ thị hàm số y = (x^2 + x + 1)/(x + 1) = x + 1/(x + 1) chuẩn 100% ảnh gốc
 */
export const DiagramDe10GraphP2Q3: React.FC = () => {
  // Origin O at (142, 130), scale s = 28px per unit
  // x = -1 -> 114, x = -2 -> 86
  // y = 1 -> 102, y = -1 -> 158, y = -2 -> 186, y = -3 -> 214
  const ox = 142;
  const oy = 130;
  const s = 28;

  const buildBranch = (xStart: number, xEnd: number, steps: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const x = xStart + ((xEnd - xStart) * i) / steps;
      const y = x + 1 / (x + 1);
      const px = ox + x * s;
      const py = oy - y * s;
      pts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
    }
    return pts.join(' ');
  };

  // Lower-left branch (x < -1, red in original image): y from ~ -4.5 at x = -4.2, max at (-2, -3), down to ~ -4.5 at x = -1.35
  const leftPath = buildBranch(-3.9, -1.36, 50);
  // Upper-right branch (x > -1, black in original image): from x = -0.78 (y ~ 3.77) down to min (0, 1) and up to x = 3.2 (y ~ 3.44)
  const rightPath = buildBranch(-0.79, 3.2, 60);

  return (
    <svg
      viewBox="0 0 285 260"
      className="w-full max-w-[275px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de10-p2q3-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Right-angle square mark at origin O in quadrant I */}
      <polyline
        points={`${ox},${oy - 8} ${ox + 8},${oy - 8} ${ox + 8},${oy}`}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.1"
      />

      {/* Axes Ox, Oy */}
      <line
        x1="12"
        y1={oy}
        x2="268"
        y2={oy}
        stroke="#0f172a"
        strokeWidth="1.3"
        markerEnd="url(#de10-p2q3-arrow)"
      />
      <line
        x1={ox}
        y1="252"
        x2={ox}
        y2="14"
        stroke="#0f172a"
        strokeWidth="1.3"
        markerEnd="url(#de10-p2q3-arrow)"
      />

      {/* Dashed projection lines for local max (-2, -3) */}
      <g stroke="#0f172a" strokeWidth="1.2" strokeDasharray="3.5,3" fill="none">
        <line x1={ox - 2 * s} y1={oy} x2={ox - 2 * s} y2={oy + 3 * s} />
        <line x1={ox - 2 * s} y1={oy + 3 * s} x2={ox} y2={oy + 3 * s} />
      </g>

      {/* Dashed Asymptotes: vertical x = -1 and oblique y = x (passing through O) */}
      <g stroke="#334155" strokeWidth="1.15" strokeDasharray="3.5,3" fill="none">
        {/* x = -1 */}
        <line x1={ox - s} y1="8" x2={ox - s} y2="252" />
        {/* y = x: from x = -4.2 to x = 4.1 */}
        <line
          x1={ox - 4.2 * s}
          y1={oy + 4.2 * s}
          x2={ox + 4.1 * s}
          y2={oy - 4.1 * s}
        />
      </g>

      {/* Lower-left curve branch (red as in original image) */}
      <path
        d={leftPath}
        fill="none"
        stroke="#dc2626"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Upper-right curve branch (black as in original image) */}
      <path
        d={rightPath}
        fill="none"
        stroke="#1e293b"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Key points dots */}
      <g fill="#0f172a">
        <circle cx={ox} cy={oy} r="2" />
        <circle cx={ox - s} cy={oy} r="2" />
        <circle cx={ox - 2 * s} cy={oy} r="2" />
        <circle cx={ox} cy={oy - s} r="2" />
        <circle cx={ox} cy={oy + s} r="2" />
        <circle cx={ox} cy={oy + 3 * s} r="2" />
        <circle cx={ox - 2 * s} cy={oy + 3 * s} r="2.2" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="14"
        fill="#0f172a"
      >
        <text x={ox + 6} y="22" fontStyle="italic" fontWeight="bold">
          y
        </text>
        <text x="262" y={oy - 6} fontStyle="italic" fontWeight="bold">
          x
        </text>
        <text x={ox + 2} y={oy + 15} fontStyle="italic">
          O
        </text>
        <text x={ox - 12} y={oy - s + 13}>
          1
        </text>
        <text x={ox - s - 19} y={oy - 5}>
          −1
        </text>
        <text x={ox - 2 * s - 21} y={oy - 5}>
          −2
        </text>
        <text x={ox + 5} y={oy + s + 5}>
          −1
        </text>
        <text x={ox + 6} y={oy + 3 * s + 5}>
          −3
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 2 (Đề 10): Lăng trụ ABCD - A1B1C1D1 ghép từ 4 khối lập phương cạnh 1 chuẩn 100% ảnh gốc
 */
export const DiagramDe10PrismP3Q2: React.FC = () => {
  // 2x2x1 grid of unit cubes:
  // Let index (i, j, k) with i in {0, 1, 2} (left to right), j in {0, 1, 2} (front to back), k in {0, 1} (bottom to top)
  // Screen projection:
  // Origin A(0, 0, 0) = (45, 165)
  // Step along AB (i): (+62, 0)
  // Step along AD (j): (+26, -22)
  // Step along AA1 (k): (0, -56)
  const pt = (i: number, j: number, k: number): [number, number] => [
    45 + i * 62 + j * 26,
    165 - j * 22 - k * 56,
  ];
  const pStr = (i: number, j: number, k: number) => {
    const [x, y] = pt(i, j, k);
    return `${x},${y}`;
  };

  const [px, py] = pt(1, 1, 1);

  return (
    <svg
      viewBox="0 0 275 195"
      className="w-full max-w-[265px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed grid lines */}
      <g
        stroke="#334155"
        strokeWidth="1.2"
        strokeDasharray="3.5,3"
        fill="none"
      >
        {/* Bottom plane j=1, j=2 and i=0, i=1 */}
        <line x1={pt(0, 0, 0)[0]} y1={pt(0, 0, 0)[1]} x2={pt(0, 2, 0)[0]} y2={pt(0, 2, 0)[1]} />
        <line x1={pt(1, 0, 0)[0]} y1={pt(1, 0, 0)[1]} x2={pt(1, 2, 0)[0]} y2={pt(1, 2, 0)[1]} />
        <line x1={pt(0, 1, 0)[0]} y1={pt(0, 1, 0)[1]} x2={pt(2, 1, 0)[0]} y2={pt(2, 1, 0)[1]} />
        <line x1={pt(0, 2, 0)[0]} y1={pt(0, 2, 0)[1]} x2={pt(2, 2, 0)[0]} y2={pt(2, 2, 0)[1]} />
        {/* Vertical hidden edges at (0,1), (0,2), (1,1), (1,2) */}
        <line x1={pt(0, 1, 0)[0]} y1={pt(0, 1, 0)[1]} x2={pt(0, 1, 1)[0]} y2={pt(0, 1, 1)[1]} />
        <line x1={pt(0, 2, 0)[0]} y1={pt(0, 2, 0)[1]} x2={pt(0, 2, 1)[0]} y2={pt(0, 2, 1)[1]} />
        <line x1={pt(1, 1, 0)[0]} y1={pt(1, 1, 0)[1]} x2={pt(1, 1, 1)[0]} y2={pt(1, 1, 1)[1]} />
        <line x1={pt(1, 2, 0)[0]} y1={pt(1, 2, 0)[1]} x2={pt(1, 2, 1)[0]} y2={pt(1, 2, 1)[1]} />
        {/* Dashed vector AP from A(0,0,0) to P(1,1,1) */}
        <line x1={pt(0, 0, 0)[0]} y1={pt(0, 0, 0)[1]} x2={px} y2={py} />
      </g>

      {/* Visible solid edges */}
      <g
        stroke="#0f172a"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Top 2x2 grid */}
        <polygon points={`${pStr(0, 0, 1)} ${pStr(2, 0, 1)} ${pStr(2, 2, 1)} ${pStr(0, 2, 1)}`} />
        <line x1={pt(1, 0, 1)[0]} y1={pt(1, 0, 1)[1]} x2={pt(1, 2, 1)[0]} y2={pt(1, 2, 1)[1]} />
        <line x1={pt(0, 1, 1)[0]} y1={pt(0, 1, 1)[1]} x2={pt(2, 1, 1)[0]} y2={pt(2, 1, 1)[1]} />

        {/* Front & Right vertical edges */}
        <line x1={pt(0, 0, 0)[0]} y1={pt(0, 0, 0)[1]} x2={pt(0, 0, 1)[0]} y2={pt(0, 0, 1)[1]} />
        <line x1={pt(1, 0, 0)[0]} y1={pt(1, 0, 0)[1]} x2={pt(1, 0, 1)[0]} y2={pt(1, 0, 1)[1]} />
        <line x1={pt(2, 0, 0)[0]} y1={pt(2, 0, 0)[1]} x2={pt(2, 0, 1)[0]} y2={pt(2, 0, 1)[1]} />
        <line x1={pt(2, 1, 0)[0]} y1={pt(2, 1, 0)[1]} x2={pt(2, 1, 1)[0]} y2={pt(2, 1, 1)[1]} />
        <line x1={pt(2, 2, 0)[0]} y1={pt(2, 2, 0)[1]} x2={pt(2, 2, 1)[0]} y2={pt(2, 2, 1)[1]} />

        {/* Bottom front & right edges */}
        <line x1={pt(0, 0, 0)[0]} y1={pt(0, 0, 0)[1]} x2={pt(2, 0, 0)[0]} y2={pt(2, 0, 0)[1]} />
        <line x1={pt(2, 0, 0)[0]} y1={pt(2, 0, 0)[1]} x2={pt(2, 2, 0)[0]} y2={pt(2, 2, 0)[1]} />

        {/* Segment AD1 from A(0,0,0) to D1(0,2,1) */}
        <line x1={pt(0, 0, 0)[0]} y1={pt(0, 0, 0)[1]} x2={pt(0, 2, 1)[0]} y2={pt(0, 2, 1)[1]} />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="34" y="182">A</text>
        <text x="165" y="182">B</text>
        <text x="226" y="126">C</text>
        <text x="79" y="121">D</text>
        <text x="23" y="110">
          A<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="172" y="118">
          B<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="225" y="58">
          C<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="78" y="56">
          D<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x={px - 10} y={py - 6}>
          P
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 6 (Đề 10): Hình hộp chữ nhật nghiêng trong không trung và bóng chiếu trên mặt sân chuẩn 100% ảnh gốc
 */
export const DiagramDe10BoxShadowP3Q6: React.FC = () => {
  // Tilted rectangular box in 3D:
  // A = (148, 86), B = (205, 68), C = (134, 34), D = (165, 118)
  // Vector AB = (57, -18), Vector AC = (-14, -52), Vector AD = (17, 32)
  // A+B-A = B(205, 68)
  // C_B = B + AC = (191, 16)
  // D_B = B + AD = (222, 100)
  // D_C = C + AD = (151, 66)
  // Far corner E = B + AC + AD = (208, 48)
  // Projections onto ground plane (vertical dashed lines):
  // M = proj(A) = (148, 164)
  // P = proj(C) = (134, 140)
  // Q = proj(D) = (165, 150)
  // N = proj(B) = (205, 160)
  return (
    <svg
      viewBox="0 0 340 205"
      className="w-full max-w-[325px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ground plane parallelogram */}
      <polygon
        points="35,134 218,98 310,158 122,192"
        fill="#fefce8"
        fillOpacity="0.45"
        stroke="#854d0e"
        strokeWidth="0.9"
      />

      {/* Vertical dashed projection rays from C, A, D, B down to P, M, Q, N */}
      <g stroke="#1e293b" strokeWidth="1" strokeDasharray="3,2.5" fill="none">
        <line x1="134" y1="34" x2="134" y2="140" />
        <line x1="148" y1="86" x2="148" y2="164" />
        <line x1="165" y1="118" x2="165" y2="150" />
        <line x1="205" y1="68" x2="205" y2="160" />
      </g>

      {/* Projected shadow segments MP, MQ, MN on the ground */}
      <g stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round">
        <line x1="148" y1="164" x2="134" y2="140" />
        <line x1="148" y1="164" x2="165" y2="150" />
        <line x1="148" y1="164" x2="205" y2="160" />
      </g>

      {/* Points P, M, Q, N */}
      <g fill="#1d4ed8">
        <circle cx="134" cy="140" r="1.8" />
        <circle cx="148" cy="164" r="1.8" />
        <circle cx="165" cy="150" r="1.8" />
        <circle cx="205" cy="160" r="1.8" />
      </g>

      {/* Hidden dashed edges of the tilted box */}
      <g stroke="#1d4ed8" strokeWidth="1.2" strokeDasharray="3,2.5" fill="none">
        <line x1="134" y1="34" x2="151" y2="66" />
        <line x1="151" y1="66" x2="165" y2="118" />
        <line x1="151" y1="66" x2="208" y2="48" />
      </g>

      {/* Visible solid edges of the tilted box */}
      <g
        stroke="#1d4ed8"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Top-front face A-B-C_B-C */}
        <polygon points="148,86 205,68 191,16 134,34" />
        {/* Bottom-front face A-B-D_B-D */}
        <polygon points="148,86 205,68 222,100 165,118" />
        {/* Right face B-C_B-E-D_B */}
        <polyline points="191,16 208,48 222,100" />
        {/* Left edge C-D */}
        <line x1="134" y1="34" x2="165" y2="118" strokeDasharray="3,2.5" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="11"
        fontStyle="italic"
        fontWeight="bold"
        fill="#0f172a"
      >
        <text x="123" y="35">C</text>
        <text x="137" y="88">A</text>
        <text x="195" y="64">B</text>
        <text x="155" y="124">D</text>
        <text x="123" y="142">P</text>
        <text x="137" y="174">M</text>
        <text x="168" y="150">Q</text>
        <text x="209" y="163">N</text>
      </g>
    </svg>
  );
};
