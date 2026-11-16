import React from 'react';

/**
 * Phần I - Câu 1 (Đề 02): Bảng biến thiên có tiệm cận đứng x = 0 và tiệm cận ngang y = 2
 */
export const DiagramDe02BBTP1Q1: React.FC = () => {
  return (
    <svg
      viewBox="0 0 520 155"
      className="w-full max-w-[500px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arr-de02-q1"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Outer Box */}
      <rect
        x="10"
        y="8"
        width="500"
        height="138"
        fill="#ffffff"
        stroke="#0f172a"
        strokeWidth="1.5"
      />
      {/* Horizontal separators */}
      <line x1="10" y1="38" x2="510" y2="38" stroke="#0f172a" strokeWidth="1.3" />
      <line x1="10" y1="68" x2="510" y2="68" stroke="#0f172a" strokeWidth="1.3" />
      {/* Vertical header separator */}
      <line x1="62" y1="8" x2="62" y2="146" stroke="#0f172a" strokeWidth="1.3" />

      {/* Double vertical bar at x = 0 (x = 225) */}
      <line x1="223" y1="38" x2="223" y2="146" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="227" y1="38" x2="227" y2="146" stroke="#0f172a" strokeWidth="1.2" />

      {/* Variation arrows */}
      <line
        x1="102"
        y1="88"
        x2="195"
        y2="132"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#arr-de02-q1)"
      />
      <line
        x1="262"
        y1="88"
        x2="345"
        y2="132"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#arr-de02-q1)"
      />
      <line
        x1="378"
        y1="132"
        x2="468"
        y2="88"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#arr-de02-q1)"
      />

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fill="#0f172a"
        textAnchor="middle"
      >
        <text x="36" y="28" fontStyle="italic">x</text>
        <text x="36" y="58" fontStyle="italic">y&apos;</text>
        <text x="36" y="112" fontStyle="italic">y</text>

        {/* Row x */}
        <text x="86" y="28">−∞</text>
        <text x="225" y="28">0</text>
        <text x="362" y="28">1</text>
        <text x="488" y="28">+∞</text>

        {/* Row y' */}
        <text x="155" y="58">−</text>
        <text x="295" y="58">−</text>
        <text x="362" y="58">0</text>
        <text x="425" y="58">+</text>

        {/* Row y values */}
        <text x="88" y="86">2</text>
        <text x="208" y="139">−4</text>
        <text x="246" y="86">+∞</text>
        <text x="362" y="139">−2</text>
        <text x="486" y="86">+∞</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 2 (Đề 02): Đồ thị hàm số bậc ba y = -x^3 + 3x
 */
export const DiagramDe02GraphP1Q2: React.FC = () => {
  return (
    <svg
      viewBox="0 0 260 250"
      className="w-full max-w-[250px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arr-de02-q2"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes Ox, Oy */}
      <line
        x1="20"
        y1="125"
        x2="242"
        y2="125"
        stroke="#0f172a"
        strokeWidth="1.5"
        markerEnd="url(#arr-de02-q2)"
      />
      <line
        x1="130"
        y1="238"
        x2="130"
        y2="14"
        stroke="#0f172a"
        strokeWidth="1.5"
        markerEnd="url(#arr-de02-q2)"
      />

      {/* Dashed projection lines for (-1, -2) and (1, 2) */}
      {/* Scale: 1 unit x = 42px, 1 unit y = 36px */}
      {/* (-1, -2) -> (88, 197); (1, 2) -> (172, 53) */}
      <g stroke="#334155" strokeWidth="1.2" strokeDasharray="4,4" fill="none">
        <polyline points="88,125 88,197 130,197" />
        <polyline points="172,125 172,53 130,53" />
      </g>

      {/* Exact cubic curve y = -x^3 + 3x */}
      <path
        d="M 48 25 C 62 145, 74 197, 88 197 C 102 197, 116 149, 130 125 C 144 101, 158 53, 172 53 C 186 53, 198 105, 212 225"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Key points */}
      <g fill="#0f172a">
        <circle cx="88" cy="197" r="2.3" />
        <circle cx="130" cy="125" r="2.3" />
        <circle cx="172" cy="53" r="2.3" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="15"
        fill="#0f172a"
      >
        <text x="116" y="22" fontStyle="italic">y</text>
        <text x="234" y="140" fontStyle="italic">x</text>
        <text x="115" y="141" fontStyle="italic">O</text>
        <text x="80" y="119">−1</text>
        <text x="169" y="141">1</text>
        <text x="116" y="58">2</text>
        <text x="136" y="202">−2</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 5 (Đề 02): Bảng biến thiên tìm điểm cực đại x = -4
 */
export const DiagramDe02BBTP1Q5: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 150"
      className="w-full max-w-[480px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arr-de02-q5"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
        </marker>
      </defs>

      <rect
        x="10"
        y="8"
        width="480"
        height="134"
        fill="#ffffff"
        stroke="#0f172a"
        strokeWidth="1.5"
      />
      <line x1="10" y1="36" x2="490" y2="36" stroke="#0f172a" strokeWidth="1.3" />
      <line x1="10" y1="64" x2="490" y2="64" stroke="#0f172a" strokeWidth="1.3" />
      <line x1="60" y1="8" x2="60" y2="142" stroke="#0f172a" strokeWidth="1.3" />

      {/* Arrows */}
      <line
        x1="102"
        y1="84"
        x2="192"
        y2="126"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#arr-de02-q5)"
      />
      <line
        x1="226"
        y1="126"
        x2="318"
        y2="84"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#arr-de02-q5)"
      />
      <line
        x1="354"
        y1="84"
        x2="444"
        y2="126"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#arr-de02-q5)"
      />

      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fill="#0f172a"
        textAnchor="middle"
      >
        <text x="35" y="27" fontStyle="italic">x</text>
        <text x="35" y="55" fontStyle="italic">y&apos;</text>
        <text x="35" y="108" fontStyle="italic">y</text>

        <text x="86" y="27">−∞</text>
        <text x="208" y="27">−7</text>
        <text x="336" y="27">−4</text>
        <text x="466" y="27">+∞</text>

        <text x="148" y="55">−</text>
        <text x="208" y="55">0</text>
        <text x="272" y="55">+</text>
        <text x="336" y="55">0</text>
        <text x="402" y="55">−</text>

        <text x="86" y="82">+∞</text>
        <text x="208" y="136">−6</text>
        <text x="336" y="82">−3</text>
        <text x="466" y="136">−∞</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 9 (Đề 02): Bảng biến thiên với cực tiểu (-1; 0) và cực đại (0; 2)
 */
export const DiagramDe02BBTP1Q9: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 150"
      className="w-full max-w-[480px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arr-de02-q9"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
        </marker>
      </defs>

      <rect
        x="10"
        y="8"
        width="480"
        height="134"
        fill="#ffffff"
        stroke="#0f172a"
        strokeWidth="1.5"
      />
      <line x1="10" y1="36" x2="490" y2="36" stroke="#0f172a" strokeWidth="1.3" />
      <line x1="10" y1="64" x2="490" y2="64" stroke="#0f172a" strokeWidth="1.3" />
      <line x1="60" y1="8" x2="60" y2="142" stroke="#0f172a" strokeWidth="1.3" />

      {/* Arrows */}
      <line
        x1="102"
        y1="84"
        x2="192"
        y2="126"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#arr-de02-q9)"
      />
      <line
        x1="226"
        y1="126"
        x2="318"
        y2="84"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#arr-de02-q9)"
      />
      <line
        x1="354"
        y1="84"
        x2="444"
        y2="126"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#arr-de02-q9)"
      />

      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fill="#0f172a"
        textAnchor="middle"
      >
        <text x="35" y="27" fontStyle="italic">x</text>
        <text x="35" y="55" fontStyle="italic">y&apos;</text>
        <text x="35" y="108" fontStyle="italic">y</text>

        <text x="86" y="27">−∞</text>
        <text x="208" y="27">−1</text>
        <text x="336" y="27">0</text>
        <text x="466" y="27">+∞</text>

        <text x="148" y="55">−</text>
        <text x="208" y="55">0</text>
        <text x="272" y="55">+</text>
        <text x="336" y="55">0</text>
        <text x="402" y="55">−</text>

        <text x="86" y="82">+∞</text>
        <text x="208" y="136">0</text>
        <text x="336" y="82">2</text>
        <text x="466" y="136">−∞</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 10 (Đề 02): Hình hộp ABCD.A'B'C'D' chuẩn TikZ
 */
export const DiagramDe02BoxP1Q10: React.FC = () => {
  return (
    <svg
      viewBox="0 0 320 245"
      className="w-full max-w-[290px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed edges meeting at D'(115, 160): D'D, D'A', D'C' */}
      <g
        stroke="#1d4ed8"
        strokeWidth="1.5"
        strokeDasharray="5,4"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="115" y1="35" x2="115" y2="160" />
        <line x1="115" y1="160" x2="70" y2="205" />
        <line x1="115" y1="160" x2="250" y2="160" />
      </g>

      {/* Visible solid edges */}
      <g
        stroke="#1d4ed8"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        <polygon points="115,35 250,35 205,80 70,80" />
        <line x1="70" y1="80" x2="70" y2="205" />
        <line x1="205" y1="80" x2="205" y2="205" />
        <line x1="250" y1="35" x2="250" y2="160" />
        <line x1="70" y1="205" x2="205" y2="205" />
        <line x1="205" y1="205" x2="250" y2="160" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="17"
        fontStyle="italic"
        fill="#0f172a"
        fontWeight="600"
      >
        <text x="53" y="82">A</text>
        <text x="192" y="75">B</text>
        <text x="256" y="37">C</text>
        <text x="106" y="27">D</text>
        <text x="48" y="213">A&apos;</text>
        <text x="210" y="220">B&apos;</text>
        <text x="256" y="167">C&apos;</text>
        <text x="120" y="154">D&apos;</text>
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 1 (Đề 02): Đồ thị hàm số bậc ba y = f(x) = x^3 - 3x + 1
 * Cực đại (-1; 3), giao Oy tại (0; 1), cực tiểu (1; -1), các mốc x = -2, -1, 1, 2
 */
export const DiagramDe02GraphP2Q1: React.FC = () => {
  return (
    <svg
      viewBox="0 0 280 250"
      className="w-full max-w-[265px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arr-de02-p2q1"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Origin O = (140, 155). Scale: 1 unit x = 36px, 1 unit y = 36px */}
      {/* (-2, -1) -> (68, 191); (-1, 3) -> (104, 47); (0, 1) -> (140, 119); (1, -1) -> (176, 191); (2, 3) -> (212, 47) */}
      {/* Axes Ox, Oy */}
      <line
        x1="20"
        y1="155"
        x2="262"
        y2="155"
        stroke="#0f172a"
        strokeWidth="1.5"
        markerEnd="url(#arr-de02-p2q1)"
      />
      <line
        x1="140"
        y1="235"
        x2="140"
        y2="14"
        stroke="#0f172a"
        strokeWidth="1.5"
        markerEnd="url(#arr-de02-p2q1)"
      />

      {/* Dashed projection lines for (-1, 3) and (1, -1) */}
      <g stroke="#334155" strokeWidth="1.2" strokeDasharray="4,4" fill="none">
        <polyline points="104,155 104,47 140,47" />
        <polyline points="176,155 176,191 140,191" />
      </g>

      {/* Cubic curve y = x^3 - 3x + 1 */}
      <path
        d="M 64 215 C 78 100, 90 47, 104 47 C 118 47, 129 95, 140 119 C 151 143, 162 191, 176 191 C 190 191, 202 138, 216 23"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Key points */}
      <g fill="#0f172a">
        <circle cx="68" cy="155" r="2" />
        <circle cx="104" cy="47" r="2.3" />
        <circle cx="140" cy="119" r="2.3" />
        <circle cx="176" cy="191" r="2.3" />
        <circle cx="212" cy="155" r="2" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="15"
        fill="#0f172a"
      >
        <text x="148" y="22" fontStyle="italic">y</text>
        <text x="252" y="170" fontStyle="italic">x</text>
        <text x="125" y="171" fontStyle="italic">O</text>
        <text x="52" y="150">−2</text>
        <text x="95" y="171">−1</text>
        <text x="173" y="150">1</text>
        <text x="208" y="171">2</text>
        <text x="145" y="117">1</text>
        <text x="127" y="51">3</text>
        <text x="119" y="196">−1</text>
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 3 (Đề 02): Lưới đường phố 3x3 giữa M và N với đường chéo A1, A2, A3, A4
 */
export const DiagramDe02GridP2Q3: React.FC = () => {
  // Grid 3x3 from x=60..240 (step 60), y=35..215 (step 60)
  return (
    <svg
      viewBox="0 0 300 250"
      className="w-full max-w-[270px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 3x3 Grid lines */}
      <g stroke="#0f172a" strokeWidth="1.6" fill="none">
        <rect x="60" y="35" width="180" height="180" fill="#ffffff" />
        {/* Vertical internal lines */}
        <line x1="120" y1="35" x2="120" y2="215" />
        <line x1="180" y1="35" x2="180" y2="215" />
        {/* Horizontal internal lines */}
        <line x1="60" y1="95" x2="240" y2="95" />
        <line x1="60" y1="155" x2="240" y2="155" />
      </g>

      {/* Nodes M, N, A1, A2, A3, A4 */}
      <g fill="#0f172a">
        <circle cx="60" cy="215" r="2.8" />
        <circle cx="240" cy="35" r="2.8" />
        <circle cx="60" cy="35" r="2.6" />
        <circle cx="120" cy="95" r="2.6" />
        <circle cx="180" cy="155" r="2.6" />
        <circle cx="240" cy="215" r="2.6" />
      </g>

      {/* Labels in Times New Roman Italic */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="17"
        fontStyle="italic"
        fill="#0f172a"
        fontWeight="600"
      >
        <text x="36" y="226">M</text>
        <text x="247" y="32">N</text>
        <text x="37" y="34">
          A<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
        </text>
        <text x="96" y="90">
          A<tspan dy="4" fontSize="12" fontStyle="normal">2</tspan>
        </text>
        <text x="156" y="150">
          A<tspan dy="4" fontSize="12" fontStyle="normal">3</tspan>
        </text>
        <text x="246" y="222">
          A<tspan dy="4" fontSize="12" fontStyle="normal">4</tspan>
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 4 (Đề 02): Lăng trụ đứng tứ giác ABCD.A1B1C1D1 chuẩn 100% ảnh gốc (image_b1fa82a6.png)
 * - Các cạnh khuất xuất phát từ D (DA, DC, DD1) và đoạn A1P đi xuyên qua lăng trụ là NÉT ĐỨT.
 * - Các cạnh thấy (A1B1C1D1, AA1, BB1, CC1, AB, BC, A1B, BP) là NÉT LIỀN.
 */
export const DiagramDe02PrismP2Q4: React.FC = () => {
  // Coordinates matching image_b1fa82a6.png:
  // Top face A1B1C1D1: A1(48, 80), B1(196, 80), C1(248, 32), D1(100, 32)
  // Bottom face ABCD:  A(48, 214), B(196, 214), C(248, 166), D(100, 166)
  // Point P on CC1:    P(248, 98)
  return (
    <svg
      viewBox="0 0 290 240"
      className="w-full max-w-[275px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed lines: DA, DC, DD1, and A1P */}
      <g
        stroke="#0f172a"
        strokeWidth="1.5"
        strokeDasharray="5.5,4"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="100" y1="166" x2="48" y2="214" />
        <line x1="100" y1="166" x2="248" y2="166" />
        <line x1="100" y1="166" x2="100" y2="32" />
        <line x1="48" y1="80" x2="248" y2="98" />
      </g>

      {/* Visible solid lines */}
      <g
        stroke="#0f172a"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        {/* Top face A1B1C1D1 */}
        <polygon points="100,32 248,32 196,80 48,80" />
        {/* Vertical visible edges AA1, BB1, CC1 */}
        <line x1="48" y1="80" x2="48" y2="214" />
        <line x1="196" y1="80" x2="196" y2="214" />
        <line x1="248" y1="32" x2="248" y2="166" />
        {/* Bottom visible edges AB, BC */}
        <line x1="48" y1="214" x2="196" y2="214" />
        <line x1="196" y1="214" x2="248" y2="166" />
        {/* Face segments A1B and BP */}
        <line x1="48" y1="80" x2="196" y2="214" />
        <line x1="196" y1="214" x2="248" y2="98" />
      </g>

      {/* Labels in Times New Roman Italic matching image_b1fa82a6.png */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="19"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="80" y="24">
          D<tspan dy="4" fontSize="13" fontStyle="normal">1</tspan>
        </text>
        <text x="242" y="24">
          C<tspan dy="4" fontSize="13" fontStyle="normal">1</tspan>
        </text>
        <text x="172" y="72">
          B<tspan dy="4" fontSize="13" fontStyle="normal">1</tspan>
        </text>
        <text x="18" y="84">
          A<tspan dy="4" fontSize="13" fontStyle="normal">1</tspan>
        </text>
        <text x="76" y="162">D</text>
        <text x="252" y="172">C</text>
        <text x="199" y="232">B</text>
        <text x="28" y="218">A</text>
        <text x="253" y="104">P</text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 1 (Đề 02): Thí nghiệm bóng đèn P chiếu bóng quả bóng rổ trên mặt bàn
 */
export const DiagramDe02BasketballP3Q1: React.FC = () => {
  return (
    <svg
      viewBox="0 0 360 190"
      className="w-full max-w-[340px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ellipse shadow on table */}
      <ellipse
        cx="132"
        cy="155"
        rx="95"
        ry="10"
        fill="#94a3b8"
        fillOpacity="0.55"
        stroke="#475569"
        strokeWidth="1.2"
      />

      {/* Table horizontal line */}
      <line x1="25" y1="155" x2="325" y2="155" stroke="#0f172a" strokeWidth="1.8" />

      {/* Vertical height PA = 4 */}
      <line x1="305" y1="27" x2="305" y2="155" stroke="#0f172a" strokeWidth="1.6" />

      {/* Light rays from P(305, 27) tangent to basketball */}
      <line x1="305" y1="27" x2="227" y2="155" stroke="#0f172a" strokeWidth="1.5" />
      <line x1="305" y1="27" x2="37" y2="155" stroke="#0f172a" strokeWidth="1.5" />

      {/* Basketball circle centered at I(193, 123), radius r = 32 */}
      <circle
        cx="193"
        cy="123"
        r="32"
        fill="#ea580c"
        fillOpacity="0.85"
        stroke="#7c2d12"
        strokeWidth="1.6"
      />
      {/* Basketball seam curves */}
      <path
        d="M 161 123 Q 193 112 225 123 M 193 91 Q 184 123 193 155 M 170 101 Q 193 123 170 145 M 216 101 Q 193 123 216 145"
        fill="none"
        stroke="#431407"
        strokeWidth="1.1"
      />

      {/* Points P, A, F */}
      <g fill="#0f172a">
        <circle cx="305" cy="27" r="2.8" />
        <circle cx="305" cy="155" r="2.5" />
        <circle cx="193" cy="155" r="2.5" />
        <circle cx="227" cy="155" r="2.3" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fontStyle="italic"
        fill="#0f172a"
        fontWeight="600"
      >
        <text x="311" y="26">P</text>
        <text x="311" y="172">A</text>
        <text x="188" y="174">F</text>
      </g>
    </svg>
  );
};
