import React from 'react';

/**
 * ĐỀ 06 - PHẦN I - CÂU 2:
 * Đồ thị hàm số y = log_a(x + b) đi qua (0; -1) và (0,5; 0) đúng chuẩn file gốc
 */
export const DiagramDe06GraphP1Q2: React.FC = () => {
  // Origin O(0,0) at (120, 130)
  // Scale: 1 unit = 56px
  // (0, -1)  -> (120, 186)
  // (0.5, 0) -> (148, 130)
  // Vertical asymptote at x = -0.5 -> x = 92
  return (
    <svg
      viewBox="0 0 280 220"
      className="w-full max-w-[260px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de06-q2-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 9.5 5 L 0 8.5 z" fill="#231f20" />
        </marker>
      </defs>

      {/* Axes Ox and Oy */}
      <line x1="65" y1="130" x2="250" y2="130" stroke="#231f20" strokeWidth="1.5" markerEnd="url(#de06-q2-arrow)" />
      <line x1="120" y1="205" x2="120" y2="20" stroke="#231f20" strokeWidth="1.5" markerEnd="url(#de06-q2-arrow)" />

      {/* Logarithmic curve y = log_2(x + 0.5) */}
      <path
        d="M 105 204 C 110 198, 115 193, 120 186 C 130 165, 138 145, 148 130 C 172 95, 206 66, 240 46"
        fill="none"
        stroke="#231f20"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      {/* Labels matching PDF */}
      <text x="242" y="148" fontSize="17" fontStyle="italic" fill="#231f20">x</text>
      <text x="102" y="30" fontSize="17" fontStyle="italic" fill="#231f20">y</text>
      <text x="102" y="148" fontSize="17" fontStyle="italic" fill="#231f20">O</text>
      <text x="166" y="148" textAnchor="middle" fontSize="17" fill="#231f20">0.5</text>
      <text x="115" y="182" textAnchor="end" fontSize="17" fill="#231f20">−1</text>
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN I - CÂU 3:
 * Bảng ô vuông 3x3 có số 5 ở ô chính giữa đúng chuẩn file gốc
 */
export const DiagramDe06GridP1Q3: React.FC = () => {
  return (
    <svg
      viewBox="0 0 200 180"
      className="w-full max-w-[180px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <rect x="25" y="15" width="150" height="150" fill="#ffffff" stroke="#404040" strokeWidth="2.4" />
      <line x1="75" y1="15" x2="75" y2="165" stroke="#404040" strokeWidth="2.2" />
      <line x1="125" y1="15" x2="125" y2="165" stroke="#404040" strokeWidth="2.2" />
      <line x1="25" y1="65" x2="175" y2="65" stroke="#404040" strokeWidth="2.2" />
      <line x1="25" y1="115" x2="175" y2="115" stroke="#404040" strokeWidth="2.2" />
      <text x="100" y="99" textAnchor="middle" fontSize="26" fill="#231f20">5</text>
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN I - CÂU 5:
 * Bảng thống kê thời gian hoàn thành một bài tập (đơn vị: phút)
 */
export const DiagramDe06TableP1Q5: React.FC = () => {
  return (
    <svg
      viewBox="0 0 640 96"
      className="w-full max-w-[600px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <rect x="6" y="8" width="628" height="80" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
      <rect x="6" y="8" width="144" height="80" fill="#ffff00" stroke="#0f172a" strokeWidth="1.2" />

      <line x1="6" y1="48" x2="634" y2="48" stroke="#0f172a" strokeWidth="1.2" />

      <line x1="150" y1="8" x2="150" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="246.8" y1="8" x2="246.8" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="343.6" y1="8" x2="343.6" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="440.4" y1="8" x2="440.4" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="537.2" y1="8" x2="537.2" y2="88" stroke="#0f172a" strokeWidth="1.2" />

      <text x="78" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">Thời gian (phút)</text>
      <text x="198.4" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[0; 4)</text>
      <text x="295.2" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[4; 8)</text>
      <text x="392" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[8; 12)</text>
      <text x="488.8" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[12; 16)</text>
      <text x="585.6" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[16; 20)</text>

      <text x="78" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">Số học sinh</text>
      <text x="198.4" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">2</text>
      <text x="295.2" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">4</text>
      <text x="392" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">7</text>
      <text x="488.8" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">4</text>
      <text x="585.6" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">3</text>
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN I - CÂU 6:
 * Sơ đồ mạch điện gồm hai linh kiện A và B mắc nối tiếp đúng chuẩn file gốc
 */
export const DiagramDe06CircuitP1Q6: React.FC = () => {
  return (
    <svg
      viewBox="0 0 420 135"
      className="w-full max-w-[380px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Wire path */}
      <polyline
        points="45,112 45,48 110,48"
        fill="none"
        stroke="#231f20"
        strokeWidth="1.6"
      />
      <line x1="180" y1="48" x2="240" y2="48" stroke="#231f20" strokeWidth="1.6" />
      <polyline
        points="310,48 375,48 375,112"
        fill="none"
        stroke="#231f20"
        strokeWidth="1.6"
      />

      {/* Component A */}
      <rect x="110" y="38" width="70" height="20" fill="#ffffff" stroke="#231f20" strokeWidth="1.6" />
      <text x="145" y="29" textAnchor="middle" fontSize="22" fontStyle="italic" fill="#231f20">A</text>

      {/* Component B */}
      <rect x="240" y="38" width="70" height="20" fill="#ffffff" stroke="#231f20" strokeWidth="1.6" />
      <text x="275" y="29" textAnchor="middle" fontSize="22" fontStyle="italic" fill="#231f20">B</text>

      {/* Bottom terminal circles */}
      <circle cx="45" cy="116" r="4.5" fill="#ffffff" stroke="#231f20" strokeWidth="1.6" />
      <circle cx="375" cy="116" r="4.5" fill="#ffffff" stroke="#231f20" strokeWidth="1.6" />
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN I - CÂU 7:
 * Bảng biến thiên hàm số y = f(x) có x: -∞, -1, 0, 1, +∞ đúng chuẩn file gốc (open-frame table)
 */
export const DiagramDe06BBTP1Q7: React.FC = () => {
  return (
    <svg
      viewBox="0 0 560 175"
      className="w-full max-w-[520px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de06-bbt-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#231f20" />
        </marker>
      </defs>

      {/* Open-frame lines matching PDF */}
      <line x1="12" y1="38" x2="548" y2="38" stroke="#231f2a" strokeWidth="1.2" />
      <line x1="12" y1="74" x2="548" y2="74" stroke="#231f2a" strokeWidth="1.2" />
      <line x1="70" y1="10" x2="70" y2="165" stroke="#231f2a" strokeWidth="1.2" />

      {/* Headers */}
      <text x="41" y="28" textAnchor="middle" fontSize="16" fontStyle="italic" fill="#231f20">x</text>
      <text x="41" y="61" textAnchor="middle" fontSize="16" fontStyle="italic" fill="#231f20">f'(x)</text>
      <text x="41" y="125" textAnchor="middle" fontSize="16" fontStyle="italic" fill="#231f20">f(x)</text>

      {/* x row */}
      <text x="102" y="28" textAnchor="middle" fontSize="16" fill="#231f20">−∞</text>
      <text x="206" y="28" textAnchor="middle" fontSize="16" fill="#231f20">−1</text>
      <text x="310" y="28" textAnchor="middle" fontSize="16" fill="#231f20">0</text>
      <text x="414" y="28" textAnchor="middle" fontSize="16" fill="#231f20">1</text>
      <text x="518" y="28" textAnchor="middle" fontSize="16" fill="#231f20">+∞</text>

      {/* f'(x) row */}
      <text x="154" y="61" textAnchor="middle" fontSize="17" fill="#231f20">−</text>
      <text x="206" y="61" textAnchor="middle" fontSize="16" fill="#231f20">0</text>
      <text x="258" y="61" textAnchor="middle" fontSize="17" fill="#231f20">+</text>
      <text x="310" y="61" textAnchor="middle" fontSize="16" fill="#231f20">0</text>
      <text x="362" y="61" textAnchor="middle" fontSize="17" fill="#231f20">−</text>
      <text x="414" y="61" textAnchor="middle" fontSize="16" fill="#231f20">0</text>
      <text x="466" y="61" textAnchor="middle" fontSize="17" fill="#231f20">+</text>

      {/* f(x) values */}
      <text x="102" y="96" textAnchor="middle" fontSize="16" fill="#231f20">+∞</text>
      <text x="206" y="158" textAnchor="middle" fontSize="16" fill="#231f20">−2</text>
      <text x="310" y="96" textAnchor="middle" fontSize="16" fill="#231f20">3</text>
      <text x="414" y="158" textAnchor="middle" fontSize="16" fill="#231f20">−2</text>
      <text x="518" y="102" textAnchor="middle" fontSize="16" fill="#231f20">+∞</text>

      {/* Arrows */}
      <line x1="112" y1="102" x2="196" y2="144" stroke="#231f20" strokeWidth="1.2" markerEnd="url(#de06-bbt-arrow)" />
      <line x1="216" y1="144" x2="300" y2="100" stroke="#231f20" strokeWidth="1.2" markerEnd="url(#de06-bbt-arrow)" />
      <line x1="320" y1="100" x2="404" y2="144" stroke="#231f20" strokeWidth="1.2" markerEnd="url(#de06-bbt-arrow)" />
      <line x1="424" y1="144" x2="508" y2="106" stroke="#231f20" strokeWidth="1.2" markerEnd="url(#de06-bbt-arrow)" />
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN I - CÂU 9:
 * Đồ thị hàm số trùng phương đối xứng qua Oy đi qua (-3; 4), (-2; -2), (0; 2), (2; -2), (3; 4) chuẩn 100% ảnh gốc (image_8616212a.png)
 */
export const DiagramDe06GraphP1Q9: React.FC = () => {
  // Origin O(0,0) at (150, 146)
  // Scale: 1 unit x = 32px, 1 unit y = 22px
  // x = -3 -> 54,  x = -2 -> 86,  x = 0 -> 150, x = 2 -> 214, x = 3 -> 246
  // y = 4  -> 58,  y = 2  -> 102, y = 0 -> 146, y = -2 -> 190
  return (
    <svg
      viewBox="0 0 320 232"
      className="w-full max-w-[295px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker
          id="de06-q9-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#111827" />
        </marker>
      </defs>

      {/* Axes Ox and Oy */}
      <line
        x1="10"
        y1="146"
        x2="306"
        y2="146"
        stroke="#111827"
        strokeWidth="1.8"
        markerEnd="url(#de06-q9-arrow)"
      />
      <line
        x1="150"
        y1="224"
        x2="150"
        y2="14"
        stroke="#111827"
        strokeWidth="1.8"
        markerEnd="url(#de06-q9-arrow)"
      />

      {/* Dashed projection lines matching image_8616212a.png */}
      <g
        stroke="#111827"
        strokeWidth="1.5"
        strokeDasharray="5,4"
        fill="none"
      >
        {/* Top box (-3, 4) to (3, 4) and vertical drops to (-3, 0) and (3, 0) */}
        <line x1="54" y1="146" x2="54" y2="58" />
        <line x1="246" y1="146" x2="246" y2="58" />
        <line x1="54" y1="58" x2="246" y2="58" />

        {/* Bottom box (-2, -2) to (2, -2) and vertical drops from (-2, 0) and (2, 0) */}
        <line x1="86" y1="146" x2="86" y2="190" />
        <line x1="214" y1="146" x2="214" y2="190" />
        <line x1="86" y1="190" x2="214" y2="190" />
      </g>

      {/* Symmetric W-shaped quartic curve passing through (-3,4), (-2,-2), (0,2), (2,-2), (3,4) */}
      <path
        d="M 46 8 C 48.5 25, 51 42, 54 58 C 63 116, 73 190, 86 190 C 104 190, 130 102, 150 102 C 170 102, 196 190, 214 190 C 227 190, 237 116, 246 58 C 249 42, 251.5 25, 254 8"
        fill="none"
        stroke="#111827"
        strokeWidth="2.1"
        strokeLinecap="round"
      />

      {/* Key points dots */}
      <g fill="#111827">
        <circle cx="54" cy="58" r="2.7" />
        <circle cx="246" cy="58" r="2.7" />
        <circle cx="150" cy="102" r="2.7" />
        <circle cx="86" cy="190" r="2.7" />
        <circle cx="214" cy="190" r="2.7" />
      </g>

      {/* Labels matching image_8616212a.png */}
      <g fontSize="22" fill="#111827">
        <text x="292" y="138" fontStyle="italic">
          x
        </text>
        <text x="126" y="28" fontStyle="italic">
          y
        </text>
        <text x="131" y="172" fontStyle="italic">
          O
        </text>

        <text x="36" y="174" textAnchor="middle">
          −3
        </text>
        <text x="76" y="141" textAnchor="middle">
          −2
        </text>
        <text x="214" y="141" textAnchor="middle">
          2
        </text>
        <text x="255" y="174" textAnchor="middle">
          3
        </text>

        <text x="157" y="54" textAnchor="start">
          4
        </text>
        <text x="157" y="99" textAnchor="start">
          2
        </text>
        <text x="146" y="213" textAnchor="end">
          −2
        </text>
      </g>
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN I - CÂU 11:
 * Đồ thị hàm số bậc ba y = x^3 - 3x - 1 đúng chuẩn file gốc
 */
export const DiagramDe06GraphP1Q11: React.FC = () => {
  // Origin O(0,0) at (160, 96)
  // Scale: 1 unit x = 36px, 1 unit y = 26px
  // Local max (-1; 1) -> (124, 70)
  // y-intercept (0; -1) -> (160, 122)
  // Local min (1; -3) -> (196, 174)
  return (
    <svg
      viewBox="0 0 320 220"
      className="w-full max-w-[280px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de06-q11-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
          <path d="M 0 1.5 L 9.5 5 L 0 8.5 z" fill="#231f20" />
        </marker>
      </defs>

      {/* Axes Ox and Oy */}
      <line x1="55" y1="96" x2="270" y2="96" stroke="#231f20" strokeWidth="1.2" markerEnd="url(#de06-q11-arrow)" />
      <line x1="160" y1="206" x2="160" y2="14" stroke="#231f20" strokeWidth="1.2" markerEnd="url(#de06-q11-arrow)" />

      {/* Cubic curve y = x^3 - 3x - 1 */}
      <path
        d="M 88 188 C 100 112, 112 70, 124 70 C 142 70, 178 174, 196 174 C 208 174, 220 120, 232 24"
        fill="none"
        stroke="#231f20"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Labels matching PDF */}
      <text x="255" y="90" fontSize="14" fontStyle="italic" fill="#231f20">x</text>
      <text x="147" y="24" fontSize="14" fontStyle="italic" fill="#231f20">y</text>
      <text x="166" y="90" fontSize="14" fontStyle="italic" fill="#231f20">O</text>
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN I - CÂU 12:
 * Hình hộp ABCD-A1B1C1D1 có M là giao điểm A1C1 và B1D1 chuẩn 100% ảnh gốc (image_363be21e.png)
 * - Các cạnh khuất AD, DC, DD1 và đoạn thẳng BM đi bên trong hình hộp là NÉT ĐỨT.
 * - Các cạnh thấy AB, BC, AA1, BB1, CC1, A1B1C1D1 và hai đường chéo A1C1, B1D1 là NÉT LIỀN.
 */
export const DiagramDe06BoxP1Q12: React.FC = () => {
  // Coordinates matching image_363be21e.png:
  // A  = (42, 198)
  // B  = (204, 198)
  // C  = (280, 146)
  // D  = (118, 146)
  // A1 = (66, 72)
  // B1 = (228, 72)
  // C1 = (304, 20)
  // D1 = (142, 20)
  // M  = midpoint(A1, C1) = (185, 46)
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
 * ĐỀ 06 - PHẦN II - CÂU 3:
 * Trò chơi nhảy ô từ 1 đến 8 có hình người đứng ngoài bên trái ô số 1 đúng chuẩn file gốc
 */
export const DiagramDe06HopscotchP2Q3: React.FC = () => {
  return (
    <svg
      viewBox="0 0 540 80"
      className="w-full max-w-[500px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Person figure on the left of cell 1 matching PDF */}
      <g transform="translate(18, 12)">
        {/* Cap/hair */}
        <path d="M 10 14 Q 24 2 38 14 Z" fill="#231f20" />
        {/* Head */}
        <ellipse cx="24" cy="15" rx="13" ry="8.5" fill="#ffffff" stroke="#231f20" strokeWidth="1.6" />
        <path d="M 11 13 Q 18 6 26 11 Q 32 7 37 13" fill="#231f20" />
        <circle cx="19" cy="16" r="1.3" fill="#231f20" />
        <circle cx="29" cy="16" r="1.3" fill="#231f20" />
        {/* Body */}
        <line x1="24" y1="23.5" x2="24" y2="41" stroke="#231f20" strokeWidth="1.8" />
        {/* Arms */}
        <line x1="24" y1="26" x2="10" y2="38" stroke="#231f20" strokeWidth="1.6" />
        <line x1="24" y1="26" x2="38" y2="38" stroke="#231f20" strokeWidth="1.6" />
        {/* Legs */}
        <line x1="24" y1="41" x2="14" y2="55" stroke="#231f20" strokeWidth="1.6" />
        <line x1="24" y1="41" x2="34" y2="55" stroke="#231f20" strokeWidth="1.6" />
      </g>

      {/* 8 numbered squares */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => {
        const x = 66 + idx * 56;
        return (
          <g key={num}>
            <rect
              x={x}
              y="12"
              width="56"
              height="56"
              fill="#ffffff"
              stroke="#231f20"
              strokeWidth="1.7"
            />
            <text
              x={x + 28}
              y="49"
              textAnchor="middle"
              fontSize="28"
              fill="#231f20"
            >
              {num}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN II - CÂU 4:
 * Hình hộp xiên ABCD-A1B1C1D1 có các đường chéo AC1, BD1, AC, BD nét đứt và B1C nét liền đúng chuẩn file gốc
 */
export const DiagramDe06ParallelepipedP2Q4: React.FC = () => {
  // Coordinates matching PDF:
  // A  = (60, 194)
  // B  = (176, 194)
  // C  = (228, 168)
  // D  = (112, 168)
  // A1 = (118, 58)
  // B1 = (234, 58)
  // C1 = (286, 32)
  // D1 = (170, 32)
  return (
    <svg
      viewBox="0 0 340 225"
      className="w-full max-w-[320px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Hidden edges and internal diagonals (dashed) */}
      <line x1="60" y1="194" x2="112" y2="168" stroke="#231f20" strokeWidth="1.4" strokeDasharray="4.5,3.5" />
      <line x1="112" y1="168" x2="228" y2="168" stroke="#231f20" strokeWidth="1.4" strokeDasharray="4.5,3.5" />
      <line x1="112" y1="168" x2="170" y2="32" stroke="#231f20" strokeWidth="1.4" strokeDasharray="4.5,3.5" />

      {/* Base diagonals AC and BD (dashed) */}
      <line x1="60" y1="194" x2="228" y2="168" stroke="#231f20" strokeWidth="1.4" strokeDasharray="4.5,3.5" />
      <line x1="176" y1="194" x2="112" y2="168" stroke="#231f20" strokeWidth="1.4" strokeDasharray="4.5,3.5" />

      {/* Space diagonals AC1 and BD1 (dashed) */}
      <line x1="60" y1="194" x2="286" y2="32" stroke="#231f20" strokeWidth="1.4" strokeDasharray="4.5,3.5" />
      <line x1="176" y1="194" x2="170" y2="32" stroke="#231f20" strokeWidth="1.4" strokeDasharray="4.5,3.5" />

      {/* Visible outer edges (solid) */}
      <line x1="60" y1="194" x2="176" y2="194" stroke="#231f20" strokeWidth="1.7" />
      <line x1="176" y1="194" x2="228" y2="168" stroke="#231f20" strokeWidth="1.7" />

      <line x1="60" y1="194" x2="118" y2="58" stroke="#231f20" strokeWidth="1.7" />
      <line x1="176" y1="194" x2="234" y2="58" stroke="#231f20" strokeWidth="1.7" />
      <line x1="228" y1="168" x2="286" y2="32" stroke="#231f20" strokeWidth="1.7" />

      {/* Top face A1B1C1D1 */}
      <polygon
        points="118,58 234,58 286,32 170,32"
        fill="none"
        stroke="#231f20"
        strokeWidth="1.7"
      />

      {/* Face diagonal B1C (solid) */}
      <line x1="234" y1="58" x2="228" y2="168" stroke="#231f20" strokeWidth="1.6" />

      {/* Labels matching PDF */}
      <text x="50" y="202" textAnchor="end" fontSize="18" fontStyle="italic" fill="#231f20">A</text>
      <text x="176" y="213" textAnchor="middle" fontSize="18" fontStyle="italic" fill="#231f20">B</text>
      <text x="235" y="175" textAnchor="start" fontSize="18" fontStyle="italic" fill="#231f20">C</text>
      <text x="122" y="164" textAnchor="start" fontSize="18" fontStyle="italic" fill="#231f20">D</text>

      <text x="110" y="56" textAnchor="end" fontSize="18" fontStyle="italic" fill="#231f20">
        A<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
      </text>
      <text x="228" y="52" textAnchor="end" fontSize="18" fontStyle="italic" fill="#231f20">
        B<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
      </text>
      <text x="292" y="40" textAnchor="start" fontSize="18" fontStyle="italic" fill="#231f20">
        C<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
      </text>
      <text x="168" y="24" textAnchor="middle" fontSize="18" fontStyle="italic" fill="#231f20">
        D<tspan dy="4" fontSize="12" fontStyle="normal">1</tspan>
      </text>
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN III - CÂU 1:
 * Hình trụ có thiết diện qua trục ABCD và các điểm M, N trên hai đường tròn đáy đúng chuẩn file gốc
 */
export const DiagramDe06CylinderP3Q1: React.FC = () => {
  // Top circle center (160, 38), rx = 64, ry = 18
  // Bottom circle center (160, 192), rx = 64, ry = 18
  // D = (96, 38), C = (224, 38)
  // A = (96, 192), B = (224, 192)
  // Angle 60 deg from left endpoint (-180 deg + 60 deg = 120 deg on front arc):
  // cos(120 deg) = -0.5 -> x = 160 - 32 = 128
  // sin(120 deg) = sqrt(3)/2 -> y_offset = +18 * 0.866 = +15.6
  // M = (128, 53.6), N = (128, 207.6)
  return (
    <svg
      viewBox="0 0 320 240"
      className="w-full max-w-[260px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Top base ellipse (full solid) */}
      <ellipse cx="160" cy="38" rx="64" ry="18" fill="none" stroke="#231f20" strokeWidth="1.6" />

      {/* Top diameter DC */}
      <line x1="96" y1="38" x2="224" y2="38" stroke="#231f20" strokeWidth="1.5" />

      {/* Bottom base back half-ellipse (dashed) */}
      <path
        d="M 96 192 A 64 18 0 0 1 224 192"
        fill="none"
        stroke="#231f20"
        strokeWidth="1.4"
        strokeDasharray="5,4"
      />

      {/* Bottom base front half-ellipse (solid) */}
      <path
        d="M 96 192 A 64 18 0 0 0 224 192"
        fill="none"
        stroke="#231f20"
        strokeWidth="1.6"
      />

      {/* Bottom diameter AB (dashed) */}
      <line x1="96" y1="192" x2="224" y2="192" stroke="#231f20" strokeWidth="1.4" strokeDasharray="5,4" />

      {/* Side generators AD and BC (solid) */}
      <line x1="96" y1="38" x2="96" y2="192" stroke="#231f20" strokeWidth="1.6" />
      <line x1="224" y1="38" x2="224" y2="192" stroke="#231f20" strokeWidth="1.6" />

      {/* Internal dashed segments AM, CN, MN */}
      <line x1="96" y1="192" x2="128" y2="53.6" stroke="#231f20" strokeWidth="1.4" strokeDasharray="5,4" />
      <line x1="224" y1="38" x2="128" y2="207.6" stroke="#231f20" strokeWidth="1.4" strokeDasharray="5,4" />
      <line x1="128" y1="53.6" x2="128" y2="207.6" stroke="#231f20" strokeWidth="1.2" strokeDasharray="3,4" />

      {/* Labels matching PDF */}
      <text x="86" y="42" textAnchor="end" fontSize="18" fontStyle="italic" fill="#231f20">D</text>
      <text x="232" y="42" textAnchor="start" fontSize="18" fontStyle="italic" fill="#231f20">C</text>
      <text x="86" y="198" textAnchor="end" fontSize="18" fontStyle="italic" fill="#231f20">A</text>
      <text x="232" y="198" textAnchor="start" fontSize="18" fontStyle="italic" fill="#231f20">B</text>
      <text x="133" y="72" textAnchor="start" fontSize="18" fontStyle="italic" fill="#231f20">M</text>
      <text x="128" y="228" textAnchor="middle" fontSize="18" fontStyle="italic" fill="#231f20">N</text>
    </svg>
  );
};

/**
 * ĐỀ 06 - PHẦN III - CÂU 6:
 * 6 chiếc đèn hoa treo thành 3 cột dọc dưới thanh ngang đúng chuẩn file gốc
 */
export const DiagramDe06LanternsP3Q6: React.FC = () => {
  const cols = [95, 220, 345];
  const rows = [42, 92];

  return (
    <svg
      viewBox="0 0 440 135"
      className="w-full max-w-[400px] h-auto mx-auto select-none"
    >
      {/* Top horizontal hanging bar with hatch marks */}
      <line x1="25" y1="12" x2="415" y2="12" stroke="#231f20" strokeWidth="2.2" />
      <line x1="25" y1="17" x2="415" y2="17" stroke="#231f20" strokeWidth="1.2" />
      {Array.from({ length: 26 }).map((_, i) => {
        const hx = 30 + i * 15;
        return (
          <line key={i} x1={hx} y1="12" x2={hx - 4} y2="17" stroke="#231f20" strokeWidth="1" />
        );
      })}

      {/* 3 vertical columns of 2 lanterns */}
      {cols.map((cx, cIdx) => (
        <g key={cIdx}>
          {/* Connecting vertical cord */}
          <line x1={cx} y1="17" x2={cx} y2="112" stroke="#231f20" strokeWidth="2" />

          {rows.map((cy, rIdx) => (
            <g key={`${cIdx}-${rIdx}`}>
              {/* Outer lantern ellipse */}
              <ellipse cx={cx} cy={cy} rx="46" ry="18" fill="#ffffff" stroke="#231f20" strokeWidth="1.8" />
              {/* Inner ribs of lantern */}
              <ellipse cx={cx} cy={cy} rx="31" ry="18" fill="none" stroke="#231f20" strokeWidth="1.5" />
              <ellipse cx={cx} cy={cy} rx="15" ry="18" fill="none" stroke="#231f20" strokeWidth="1.5" />
              <line x1={cx} y1={cy - 18} x2={cx} y2={cy + 18} stroke="#231f20" strokeWidth="1.6" />
              {/* Top and bottom caps */}
              <rect x={cx - 10} y={cy - 21} width="20" height="4" fill="#231f20" rx="1" />
              <rect x={cx - 10} y={cy + 17} width="20" height="4" fill="#231f20" rx="1" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
};
