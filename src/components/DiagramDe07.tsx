import React from 'react';

/**
 * Phần I - Câu 1 (Đề 07): Đồ thị đạo hàm h'(x) và 4 đồ thị phương án A, B, C, D chuẩn 100% ảnh gốc
 */
export const DiagramDe07GraphP1Q1: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3 py-1 select-none">
      {/* Main graph of h'(x) */}
      <svg
        viewBox="0 0 280 155"
        className="w-full max-w-[260px] h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="de07-q1-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
          </marker>
        </defs>
        {/* Axes */}
        <line
          x1="28"
          y1="82"
          x2="250"
          y2="82"
          stroke="#0f172a"
          strokeWidth="1.3"
          markerEnd="url(#de07-q1-arrow)"
        />
        <line
          x1="140"
          y1="142"
          x2="140"
          y2="16"
          stroke="#0f172a"
          strokeWidth="1.3"
          markerEnd="url(#de07-q1-arrow)"
        />
        {/* Curve h'(x) = -c * x^3 */}
        <path
          d="M 62 24 C 78 65, 106 82, 140 82 C 174 82, 202 99, 218 140"
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <g
          fontFamily="'Times New Roman', Times, serif"
          fontSize="14"
          fontStyle="italic"
          fill="#0f172a"
        >
          <text x="126" y="16">y</text>
          <text x="255" y="92">x</text>
          <text x="130" y="96" fontStyle="normal">0</text>
          <text x="74" y="34">h&apos;</text>
        </g>
      </svg>

      {/* 4 Option Graphs A, B, C, D */}
      <div className="w-full max-w-[540px] grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-300">
        {/* Option A: y = x^3 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-slate-200 p-1.5">
          <svg viewBox="0 0 150 115" className="w-full h-auto">
            <line x1="12" y1="58" x2="138" y2="58" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de07-q1-arrow)" />
            <line x1="75" y1="104" x2="75" y2="12" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de07-q1-arrow)" />
            <path
              d="M 30 98 C 40 70, 56 58, 75 58 C 94 58, 110 46, 120 18"
              fill="none"
              stroke="#0f172a"
              strokeWidth="1.6"
            />
            <text x="66" y="13" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">y</text>
            <text x="139" y="65" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">x</text>
            <text x="77" y="69" fontFamily="Times New Roman" fontSize="11">0</text>
            <text x="8" y="106" fontFamily="Times New Roman" fontSize="14" fontWeight="bold">A.</text>
          </svg>
        </div>

        {/* Option B: y = -x^3 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-slate-200 p-1.5">
          <svg viewBox="0 0 150 115" className="w-full h-auto">
            <line x1="12" y1="58" x2="138" y2="58" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de07-q1-arrow)" />
            <line x1="75" y1="104" x2="75" y2="12" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de07-q1-arrow)" />
            <path
              d="M 30 18 C 40 46, 56 58, 75 58 C 94 58, 110 70, 120 98"
              fill="none"
              stroke="#0f172a"
              strokeWidth="1.6"
            />
            <text x="66" y="13" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">y</text>
            <text x="139" y="65" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">x</text>
            <text x="67" y="69" fontFamily="Times New Roman" fontSize="11">0</text>
            <text x="8" y="106" fontFamily="Times New Roman" fontSize="14" fontWeight="bold">B.</text>
          </svg>
        </div>

        {/* Option C: y = x^4 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-slate-200 p-1.5">
          <svg viewBox="0 0 150 115" className="w-full h-auto">
            <line x1="12" y1="66" x2="138" y2="66" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de07-q1-arrow)" />
            <line x1="75" y1="104" x2="75" y2="12" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de07-q1-arrow)" />
            <path
              d="M 22 22 C 34 56, 52 66, 75 66 C 98 66, 116 56, 128 22"
              fill="none"
              stroke="#0f172a"
              strokeWidth="1.6"
            />
            <text x="66" y="13" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">y</text>
            <text x="139" y="73" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">x</text>
            <text x="77" y="77" fontFamily="Times New Roman" fontSize="11">0</text>
            <text x="8" y="106" fontFamily="Times New Roman" fontSize="14" fontWeight="bold">C.</text>
          </svg>
        </div>

        {/* Option D: y = -x^4 */}
        <div className="flex flex-col items-center bg-white rounded-lg border border-slate-200 p-1.5">
          <svg viewBox="0 0 150 115" className="w-full h-auto">
            <line x1="12" y1="52" x2="138" y2="52" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de07-q1-arrow)" />
            <line x1="75" y1="104" x2="75" y2="12" stroke="#0f172a" strokeWidth="1.1" markerEnd="url(#de07-q1-arrow)" />
            <path
              d="M 22 96 C 34 62, 52 52, 75 52 C 98 52, 116 62, 128 96"
              fill="none"
              stroke="#0f172a"
              strokeWidth="1.6"
            />
            <text x="66" y="13" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">y</text>
            <text x="139" y="59" fontFamily="Times New Roman" fontSize="11" fontStyle="italic">x</text>
            <text x="67" y="63" fontFamily="Times New Roman" fontSize="11">0</text>
            <text x="8" y="106" fontFamily="Times New Roman" fontSize="14" fontWeight="bold">D.</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

/**
 * Phần I - Câu 4 (Đề 07): Hình chữ nhật OABC nội tiếp dưới đường thẳng (d): y = -2x + 12 chuẩn 100% ảnh gốc
 */
export const DiagramDe07GraphP1Q4: React.FC = () => {
  return (
    <svg
      viewBox="0 0 280 210"
      className="w-full max-w-[260px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de07-q4-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Shaded yellow rectangle OABC: O=(95,160), A=(145,160), B=(145,118), C=(95,118) */}
      <rect
        x="95"
        y="118"
        width="50"
        height="42"
        fill="#fef08a"
        stroke="#0f172a"
        strokeWidth="1.8"
      />

      {/* Axes Ox, Oy */}
      <line
        x1="52"
        y1="160"
        x2="255"
        y2="160"
        stroke="#0f172a"
        strokeWidth="1.2"
        markerEnd="url(#de07-q4-arrow)"
      />
      <line
        x1="95"
        y1="192"
        x2="95"
        y2="16"
        stroke="#0f172a"
        strokeWidth="1.2"
        markerEnd="url(#de07-q4-arrow)"
      />

      {/* Red line (d) passing through (95, 76), B(145, 118), (195, 160) */}
      <line
        x1="50"
        y1="38.2"
        x2="225"
        y2="185.2"
        stroke="#dc2626"
        strokeWidth="1.3"
      />

      {/* Points O, A, B, C */}
      <g fill="#1d4ed8" stroke="#0f172a" strokeWidth="0.8">
        <circle cx="95" cy="160" r="2.5" />
        <circle cx="145" cy="160" r="2.5" />
        <circle cx="145" cy="118" r="2.5" />
        <circle cx="95" cy="118" r="2.5" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="17"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="82" y="24">y</text>
        <text x="240" y="154">x</text>
        <text x="40" y="45" fontStyle="normal">(d)</text>
        <text x="77" y="121">C</text>
        <text x="149" y="115">B</text>
        <text x="79" y="180">O</text>
        <text x="140" y="180">A</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 6 (Đề 07): Lăng trụ lục giác đều khoét lỗ hình trụ ở tâm chuẩn 100% ảnh gốc
 */
export const DiagramDe07PrismP1Q6: React.FC = () => {
  // Top regular hexagon vertices (perspective)
  // Left=(45,65), TopLeft=(92,38), TopRight=(178,38), Right=(225,65), FrontRight=(178,92), FrontLeft=(92,92)
  // Height dy = 86 -> Bottom vertices:
  // B_Left=(45,151), B_TopLeft=(92,124), B_TopRight=(178,124), B_Right=(225,151), B_FrontRight=(178,178), B_FrontLeft=(92,178)
  return (
    <svg
      viewBox="0 0 270 200"
      className="w-full max-w-[260px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed edges of regular hexagonal prism */}
      <g
        stroke="#0f172a"
        strokeWidth="1.8"
        strokeDasharray="5,4"
        fill="none"
        strokeLinecap="round"
      >
        {/* Back vertical edges from TopLeft(92,38) and TopRight(178,38) */}
        <line x1="92" y1="38" x2="92" y2="124" />
        <line x1="178" y1="38" x2="178" y2="124" />
        {/* Back bottom edges */}
        <line x1="45" y1="151" x2="92" y2="124" />
        <line x1="92" y1="124" x2="178" y2="124" />
        <line x1="178" y1="124" x2="225" y2="151" />

        {/* Hidden inner cylinder hole: bottom ellipse and vertical side generators */}
        <ellipse cx="135" cy="151" rx="22" ry="11" />
        <line x1="113" y1="65" x2="113" y2="151" />
        <line x1="157" y1="65" x2="157" y2="151" />
      </g>

      {/* Visible solid edges of hexagonal prism and top hole */}
      <g
        stroke="#0f172a"
        strokeWidth="2.1"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Top hexagon */}
        <polygon points="45,65 92,38 178,38 225,65 178,92 92,92" />
        {/* Top cylinder hole ellipse */}
        <ellipse cx="135" cy="65" rx="22" ry="11" />
        {/* Visible vertical edges */}
        <line x1="45" y1="65" x2="45" y2="151" />
        <line x1="92" y1="92" x2="92" y2="178" />
        <line x1="178" y1="92" x2="178" y2="178" />
        <line x1="225" y1="65" x2="225" y2="151" />
        {/* Visible front bottom edges */}
        <polyline points="45,151 92,178 178,178 225,151" />
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 10 (Đề 07): Hình lập phương ABCD.A'B'C'D' chuẩn 100% ảnh gốc
 */
export const DiagramDe07CubeP1Q10: React.FC = () => {
  return (
    <svg
      viewBox="0 0 280 215"
      className="w-full max-w-[260px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed edges from D'(96,142) */}
      <g
        stroke="#4f46e5"
        strokeWidth="1.5"
        strokeDasharray="5,4"
        fill="none"
        strokeLinecap="round"
      >
        <line x1="96" y1="36" x2="96" y2="142" />
        <line x1="96" y1="142" x2="54" y2="184" />
        <line x1="96" y1="142" x2="212" y2="142" />
      </g>

      {/* Visible solid edges */}
      <g
        stroke="#4338ca"
        strokeWidth="1.7"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Top face ABCD */}
        <polygon points="96,36 212,36 170,78 54,78" />
        {/* Vertical visible edges */}
        <line x1="54" y1="78" x2="54" y2="184" />
        <line x1="170" y1="78" x2="170" y2="184" />
        <line x1="212" y1="36" x2="212" y2="142" />
        {/* Bottom visible edges */}
        <line x1="54" y1="184" x2="170" y2="184" />
        <line x1="170" y1="184" x2="212" y2="142" />
      </g>

      {/* Vertices */}
      <g fill="#312e81">
        <circle cx="96" cy="36" r="2.2" />
        <circle cx="212" cy="36" r="2.2" />
        <circle cx="170" cy="78" r="2.2" />
        <circle cx="54" cy="78" r="2.2" />
        <circle cx="96" cy="142" r="2.2" />
        <circle cx="212" cy="142" r="2.2" />
        <circle cx="170" cy="184" r="2.2" />
        <circle cx="54" cy="184" r="2.2" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="15"
        fontStyle="italic"
        fill="#0f172a"
        fontWeight="bold"
      >
        <text x="90" y="28">D</text>
        <text x="215" y="34">C</text>
        <text x="39" y="77">A</text>
        <text x="157" y="73">B</text>
        <text x="99" y="138">D&apos;</text>
        <text x="216" y="147">C&apos;</text>
        <text x="36" y="192">A&apos;</text>
        <text x="173" y="194">B&apos;</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 12 (Đề 07): Đồ thị hàm bậc ba y = -x^3 + 3x^2 + 1 đi qua (0;1) và cực đại (2;5) chuẩn 100% ảnh gốc
 */
export const DiagramDe07GraphP1Q12: React.FC = () => {
  // Ox at y = 175, Oy at x = 110
  // Unit x: 1 unit = 34px -> x = 0 is 110, x = 2 is 178, x = -1 is 76, x = 3 is 212
  // Unit y: 1 unit = 25px -> y = 0 is 175, y = 1 is 150, y = 5 is 50
  return (
    <svg
      viewBox="0 0 260 225"
      className="w-full max-w-[245px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de07-q12-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes Ox, Oy */}
      <line
        x1="48"
        y1="175"
        x2="238"
        y2="175"
        stroke="#0f172a"
        strokeWidth="1.6"
        markerEnd="url(#de07-q12-arrow)"
      />
      <line
        x1="110"
        y1="212"
        x2="110"
        y2="16"
        stroke="#0f172a"
        strokeWidth="1.6"
        markerEnd="url(#de07-q12-arrow)"
      />

      {/* Dashed lines for (2, 5) */}
      <g stroke="#0f172a" strokeWidth="1.4" strokeDasharray="4,3.5" fill="none">
        <line x1="110" y1="50" x2="178" y2="50" />
        <line x1="178" y1="50" x2="178" y2="175" />
      </g>

      {/* Cubic curve y = -x^3 + 3x^2 + 1:
          At x = -0.85 (81.1), y = 3.78 (80.5) -> at x = -1 (76), y = 5 (50)
          Local min at (0, 1) = (110, 150)
          Inflection at (1, 3) = (144, 100)
          Local max at (2, 5) = (178, 50)
          At x = 3.1 (215.4), y = 0.04 (174) -> at x = 3.25 (220.5), y = -1.64 (216) */}
      <path
        d="M 75 44 C 86 115, 97 150, 110 150 C 123 150, 134 125, 144 100 C 154 75, 165 50, 178 50 C 193 50, 208 118, 220 208"
        fill="none"
        stroke="#1e3a8a"
        strokeWidth="2.1"
        strokeLinecap="round"
      />

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="19"
        fill="#0f172a"
      >
        <text x="116" y="27" fontStyle="italic">y</text>
        <text x="228" y="191" fontStyle="italic">x</text>
        <text x="92" y="195" fontStyle="italic">O</text>
        <text x="95" y="154">1</text>
        <text x="92" y="56">5</text>
        <text x="173" y="196">2</text>
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 2 (Đề 07): Bảng biến thiên hàm bậc ba có cực trị tại x = 1 (y = 2) và x = 3 (y = 4) chuẩn 100% ảnh gốc
 */
export const DiagramDe07BBTP2Q2: React.FC = () => {
  return (
    <svg
      viewBox="0 0 520 185"
      className="w-full max-w-[500px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de07-bbt-arrow"
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

      <rect x="10" y="8" width="500" height="168" fill="#ffffff" />

      {/* Table borders */}
      <line x1="15" y1="42" x2="505" y2="42" stroke="#0f172a" strokeWidth="1.3" />
      <line x1="15" y1="82" x2="505" y2="82" stroke="#0f172a" strokeWidth="1.3" />
      <line x1="62" y1="12" x2="62" y2="172" stroke="#0f172a" strokeWidth="1.3" />

      {/* Row 1: x */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="19"
        fill="#0f172a"
        textAnchor="middle"
      >
        <text x="38" y="31" fontStyle="italic">x</text>
        <text x="92" y="32">−∞</text>
        <text x="208" y="31">1</text>
        <text x="342" y="31">3</text>
        <text x="475" y="32">+∞</text>

        {/* Row 2: y' */}
        <text x="38" y="68" fontStyle="italic">y&apos;</text>
        <text x="150" y="68">−</text>
        <text x="208" y="68">0</text>
        <text x="275" y="68">+</text>
        <text x="342" y="68">0</text>
        <text x="410" y="68">−</text>

        {/* Row 3: y */}
        <text x="38" y="132" fontStyle="italic">y</text>
        <text x="92" y="106">+∞</text>
        <text x="208" y="164">2</text>
        <text x="342" y="106">4</text>
        <text x="475" y="164">−∞</text>
      </g>

      {/* Variation arrows */}
      <g stroke="#0f172a" strokeWidth="1.3" fill="none">
        <line
          x1="112"
          y1="104"
          x2="192"
          y2="155"
          markerEnd="url(#de07-bbt-arrow)"
        />
        <line
          x1="224"
          y1="155"
          x2="326"
          y2="104"
          markerEnd="url(#de07-bbt-arrow)"
        />
        <line
          x1="358"
          y1="104"
          x2="452"
          y2="155"
          markerEnd="url(#de07-bbt-arrow)"
        />
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 3 (Đề 07): Hình hộp xiên ABCD - A1B1C1D1 chuẩn 100% ảnh gốc
 * A=(48,185), B=(156,185), D=(92,142), C=(200,142)
 * A1=(100,92), B1=(208,92), D1=(144,49), C1=(252,49)
 */
export const DiagramDe07ParallelepipedP2Q3: React.FC = () => {
  return (
    <svg
      viewBox="0 0 300 215"
      className="w-full max-w-[280px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed lines: AD, DC, DD1, BD, A1C, A1B */}
      <g
        stroke="#0f172a"
        strokeWidth="1.4"
        strokeDasharray="4,3.5"
        fill="none"
        strokeLinecap="round"
      >
        <line x1="48" y1="185" x2="92" y2="142" />
        <line x1="92" y1="142" x2="200" y2="142" />
        <line x1="92" y1="142" x2="144" y2="49" />
        {/* Diagonals BD, A1C, A1B */}
        <line x1="156" y1="185" x2="92" y2="142" />
        <line x1="100" y1="92" x2="200" y2="142" />
        <line x1="100" y1="92" x2="156" y2="185" />
      </g>

      {/* Visible solid edges */}
      <g
        stroke="#0f172a"
        strokeWidth="1.75"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Top face A1B1C1D1 */}
        <polygon points="100,92 208,92 252,49 144,49" />
        {/* Visible lateral edges AA1, BB1, CC1 */}
        <line x1="48" y1="185" x2="100" y2="92" />
        <line x1="156" y1="185" x2="208" y2="92" />
        <line x1="200" y1="142" x2="252" y2="49" />
        {/* Visible bottom edges AB, BC */}
        <line x1="48" y1="185" x2="156" y2="185" />
        <line x1="156" y1="185" x2="200" y2="142" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="17"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="34" y="199">A</text>
        <text x="152" y="201">B</text>
        <text x="206" y="149">C</text>
        <text x="80" y="139">D</text>
        <text x="80" y="92">
          A<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
        </text>
        <text x="192" y="86">
          B<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
        </text>
        <text x="256" y="48">
          C<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
        </text>
        <text x="134" y="42">
          D<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 1 (Đề 07): Hình hộp ABCD - A1B1C1D1 với đường chéo BD1 và A1D chuẩn 100% ảnh gốc
 */
export const DiagramDe07ParallelepipedP3Q1: React.FC = () => {
  return (
    <svg
      viewBox="0 0 300 215"
      className="w-full max-w-[280px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed lines: AD, DC, DD1, A1D, BD1 */}
      <g
        stroke="#0f172a"
        strokeWidth="1.4"
        strokeDasharray="4,3.5"
        fill="none"
        strokeLinecap="round"
      >
        <line x1="54" y1="188" x2="96" y2="152" />
        <line x1="96" y1="152" x2="202" y2="152" />
        <line x1="96" y1="152" x2="132" y2="48" />
        {/* Diagonals A1D and BD1 */}
        <line x1="90" y1="84" x2="96" y2="152" />
        <line x1="160" y1="188" x2="132" y2="48" />
      </g>

      {/* Visible solid edges */}
      <g
        stroke="#0f172a"
        strokeWidth="1.75"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Top face A1B1C1D1 */}
        <polygon points="90,84 196,84 238,48 132,48" />
        {/* Visible lateral edges AA1, BB1, CC1 */}
        <line x1="54" y1="188" x2="90" y2="84" />
        <line x1="160" y1="188" x2="196" y2="84" />
        <line x1="202" y1="152" x2="238" y2="48" />
        {/* Visible bottom edges AB, BC */}
        <line x1="54" y1="188" x2="160" y2="188" />
        <line x1="160" y1="188" x2="202" y2="152" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="17"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="38" y="196">A</text>
        <text x="165" y="196">B</text>
        <text x="207" y="158">C</text>
        <text x="80" y="150">D</text>
        <text x="71" y="84">
          A<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
        </text>
        <text x="198" y="96">
          B<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
        </text>
        <text x="242" y="48">
          C<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
        </text>
        <text x="115" y="43">
          D<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 4 (Đề 07): Phong hỏa đài & Hình chóp cụt tứ giác đều ABCD - A1B1C1D1 chuẩn 100% ảnh gốc
 */
export const DiagramDe07FrustumP3Q4: React.FC = () => {
  return (
    <svg
      viewBox="0 0 460 195"
      className="w-full max-w-[440px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left illustration: Beacon Tower (Phong hỏa đài) */}
      <g transform="translate(18, 12)">
        <defs>
          <linearGradient id="sky-grad-de07" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="65%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="135" height="165" rx="4" fill="url(#sky-grad-de07)" stroke="#475569" strokeWidth="1" />
        {/* Ground & foliage */}
        <rect x="0" y="138" width="135" height="27" fill="#1e293b" />
        {/* Frustum tower body */}
        <polygon points="24,142 111,142 95,48 40,48" fill="#a8a29e" stroke="#44403c" strokeWidth="1.2" />
        <polygon points="67,142 111,142 95,48 67,48" fill="#78716c" />
        {/* Top battlement & watchtower */}
        <rect x="38" y="42" width="59" height="7" fill="#57534e" stroke="#292524" strokeWidth="0.8" />
        <rect x="50" y="28" width="35" height="14" fill="#78716c" stroke="#292524" strokeWidth="0.8" />
        <polygon points="46,28 89,28 80,20 55,20" fill="#44403c" />
      </g>

      {/* Right geometric model: Regular Square Frustum ABCD - A1B1C1D1 */}
      {/* Base ABCD: A=(208,168), B=(346,168), C=(388,128), D=(250,128) */}
      {/* Top A1B1C1D1: A1=(255,62), B1=(311,62), C1=(331,42), D1=(275,42) */}
      <g
        stroke="#0f172a"
        strokeWidth="1.4"
        strokeDasharray="4,3.5"
        fill="none"
        strokeLinecap="round"
      >
        <line x1="208" y1="168" x2="250" y2="128" />
        <line x1="250" y1="128" x2="388" y2="128" />
        <line x1="250" y1="128" x2="275" y2="42" />
      </g>

      <g
        stroke="#0f172a"
        strokeWidth="1.7"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Top face A1B1C1D1 */}
        <polygon points="255,62 311,62 331,42 275,42" />
        {/* Visible lateral edges */}
        <line x1="208" y1="168" x2="255" y2="62" />
        <line x1="346" y1="168" x2="311" y2="62" />
        <line x1="388" y1="128" x2="331" y2="42" />
        {/* Visible bottom edges */}
        <line x1="208" y1="168" x2="346" y2="168" />
        <line x1="346" y1="168" x2="388" y2="128" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="193" y="174">A</text>
        <text x="351" y="174">B</text>
        <text x="394" y="133">C</text>
        <text x="242" y="144">D</text>
        <text x="235" y="63">
          A<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="294" y="76">
          B<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="334" y="40">
          C<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="260" y="37">
          D<tspan dy="4" fontSize="11" fontStyle="normal">1</tspan>
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 5 (Đề 07): Vòng đu quay 12 ghế đánh số từ 1 đến 12 chuẩn 100% ảnh gốc
 */
export const DiagramDe07FerrisP3Q5: React.FC = () => {
  const cx = 145;
  const cy = 112;
  const r = 78;

  // Seats 1..12:
  // 1 is at 0 deg (right), 4 is at 90 deg (top), 7 is at 180 deg (left), 10 is at 270 deg (bottom)
  const seats = Array.from({ length: 12 }, (_, idx) => {
    const num = idx + 1;
    const angleDeg = (num - 1) * 30;
    const rad = (angleDeg * Math.PI) / 180;
    const x = cx + r * Math.cos(rad);
    const y = cy - r * Math.sin(rad);
    const lx = cx + (r + 17) * Math.cos(rad);
    const ly = cy - (r + 17) * Math.sin(rad);
    return { num, x, y, lx, ly };
  });

  return (
    <svg
      viewBox="0 0 290 230"
      className="w-full max-w-[270px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wheel circle */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.8"
      />

      {/* Spokes connecting opposite seats */}
      <g stroke="#0f172a" strokeWidth="1.3">
        {seats.slice(0, 6).map((s, i) => {
          const opp = seats[i + 6];
          return <line key={s.num} x1={s.x} y1={s.y} x2={opp.x} y2={opp.y} />;
        })}
      </g>

      {/* Support A-frame stand */}
      <g stroke="#0f172a" strokeWidth="2.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1={cx} y1={cy} x2="62" y2="208" />
        <line x1={cx} y1={cy} x2="228" y2="208" />
        <line x1="35" y1="208" x2="255" y2="208" strokeWidth="1.6" />
      </g>

      {/* Seat dots */}
      <g fill="#0f172a">
        {seats.map((s) => (
          <circle key={s.num} cx={s.x} cy={s.y} r="3.2" />
        ))}
      </g>

      {/* Seat numbers 1..12 */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fill="#0f172a"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {seats.map((s) => (
          <text key={s.num} x={s.lx} y={s.ly}>
            {s.num}
          </text>
        ))}
      </g>
    </svg>
  );
};
