import React from 'react';

/**
 * ĐỀ 03 - PHẦN I - CÂU 4:
 * Đồ thị hàm số y = f(x) xác định trên [-1; 6] khớp 1:1 với ảnh gốc:
 * - Không có lưới nền.
 * - Trên [-1; 2]: nhánh cong màu xanh lá (#529546) bắt đầu từ (-1; 1,6) ở góc phần tư thứ II,
 *   vồng lên đạt cực đại gần (-0,3; 2), cắt trục Oy tại (0; 1,85), đi xuống cắt trục Ox
 *   và đạt điểm nhọn cực tiểu tại x = 2 (y < 0).
 * - Trên [2; 6]: đoạn thẳng màu đỏ (#c84b4b) đi thẳng từ điểm nhọn tại x = 2 lên tới điểm cuối tại x = 6 (y > 0).
 * - Các đường chấm tròn dọc từ -1, 2, 6 tới đồ thị; số 2 nằm phía trên trục Ox, -1 và 6 nằm phía dưới trục Ox.
 */
export const DiagramDe03GraphP1Q4: React.FC = () => {
  return (
    <svg
      viewBox="0 0 375 255"
      className="w-full max-w-[350px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de03-q4-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
          <path d="M 0 1.5 L 9.5 5 L 0 8.5 L 1.8 5 z" fill="#231f20" />
        </marker>
      </defs>

      {/* Axes Ox and Oy */}
      <line x1="16" y1="160" x2="342" y2="160" stroke="#231f20" strokeWidth="1.5" markerEnd="url(#de03-q4-arrow)" />
      <line x1="108" y1="244" x2="108" y2="18" stroke="#231f20" strokeWidth="1.5" markerEnd="url(#de03-q4-arrow)" />

      {/* Vertical dotted projection lines at x = -1, x = 2, x = 6 */}
      <line
        x1="76"
        y1="88"
        x2="76"
        y2="160"
        stroke="#231f20"
        strokeWidth="1.5"
        strokeDasharray="1.6, 3.4"
        strokeLinecap="round"
      />
      <line
        x1="176"
        y1="160"
        x2="176"
        y2="225"
        stroke="#231f20"
        strokeWidth="1.5"
        strokeDasharray="1.6, 3.4"
        strokeLinecap="round"
      />
      <line
        x1="304"
        y1="38"
        x2="304"
        y2="160"
        stroke="#231f20"
        strokeWidth="1.5"
        strokeDasharray="1.6, 3.4"
        strokeLinecap="round"
      />

      {/* Green curve on [-1; 2] */}
      <path
        d="M 76 86 C 84 68, 97 64, 108 70 C 132 83, 154 176, 176 218"
        fill="none"
        stroke="#529546"
        strokeWidth="2.1"
        strokeLinecap="round"
      />

      {/* Red straight line segment on [2; 6] */}
      <line
        x1="176"
        y1="218"
        x2="304"
        y2="38"
        stroke="#c84b4b"
        strokeWidth="2.1"
        strokeLinecap="round"
      />

      {/* Labels matching original image */}
      <text x="352" y="165" fontSize="17" fontStyle="italic" fill="#231f20">x</text>
      <text x="115" y="25" fontSize="17" fontStyle="italic" fill="#231f20">y</text>
      <text x="112" y="180" fontSize="16" fontStyle="italic" fill="#231f20">O</text>

      <text x="74" y="180" textAnchor="middle" fontSize="16" fill="#231f20">−1</text>
      <text x="176" y="153" textAnchor="middle" fontSize="16" fill="#231f20">2</text>
      <text x="304" y="180" textAnchor="middle" fontSize="16" fill="#231f20">6</text>
    </svg>
  );
};

/**
 * ĐỀ 03 - PHẦN I - CÂU 8:
 * Đồ thị hàm số y = f(x) xác định trên đoạn [-1; 5] khớp 1:1 với ảnh gốc:
 * - Trên [-1; 1]: đường cong bậc ba y = x^3 + 2 đi từ (-1; 1) uốn ngang tại (0; 2) trên trục Oy rồi đi lên đỉnh nhọn (1; 3).
 * - Trên [1; 5]: đoạn thẳng đi từ đỉnh (1; 3) cắt trục Ox tại (4; 0) xuống điểm cuối (5; -1).
 * - Hai điểm đầu mút (-1; 1) và (5; -1) có chấm tròn đặc màu xanh tím than (#2e3192).
 */
export const DiagramDe03GraphP1Q8: React.FC = () => {
  // Origin O(0,0) at (106, 166), 1 unit = 44px
  // (-1, 1) -> (62, 122)
  // (0, 2)  -> (106, 78) [horizontal inflection point]
  // (1, 3)  -> (150, 34) [sharp peak]
  // (4, 0)  -> (282, 166)
  // (5, -1) -> (326, 210)
  return (
    <svg
      viewBox="0 0 385 240"
      className="w-full max-w-[360px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de03-q8-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
          <path d="M 0 1.5 L 9.5 5 L 0 8.5 z" fill="#231f20" />
        </marker>
      </defs>

      {/* Axes Ox and Oy */}
      <line x1="28" y1="166" x2="365" y2="166" stroke="#231f20" strokeWidth="1.5" markerEnd="url(#de03-q8-arrow)" />
      <line x1="106" y1="230" x2="106" y2="14" stroke="#231f20" strokeWidth="1.5" markerEnd="url(#de03-q8-arrow)" />

      {/* Dotted projection lines */}
      {/* (-1, 1) */}
      <line x1="62" y1="166" x2="62" y2="122" stroke="#231f20" strokeWidth="1.5" strokeDasharray="2.2, 3.2" />
      <line x1="62" y1="122" x2="106" y2="122" stroke="#231f20" strokeWidth="1.5" strokeDasharray="2.2, 3.2" />

      {/* (1, 3) */}
      <line x1="150" y1="166" x2="150" y2="34" stroke="#231f20" strokeWidth="1.5" strokeDasharray="2.2, 3.2" />
      <line x1="106" y1="34" x2="150" y2="34" stroke="#231f20" strokeWidth="1.5" strokeDasharray="2.2, 3.2" />

      {/* (5, -1) */}
      <line x1="326" y1="166" x2="326" y2="210" stroke="#231f20" strokeWidth="1.5" strokeDasharray="2.2, 3.2" />
      <line x1="106" y1="210" x2="326" y2="210" stroke="#231f20" strokeWidth="1.5" strokeDasharray="2.2, 3.2" />

      {/* Cubic inflection curve on [-1; 1] + straight line segment on [1; 5] */}
      <path
        d="M 62 122 C 76.67 78, 91.33 78, 106 78 C 120.67 78, 135.33 78, 150 34 L 326 210"
        fill="none"
        stroke="#231f20"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Solid navy-blue endpoint dots at (-1; 1) and (5; -1) */}
      <circle cx="62" cy="122" r="4.6" fill="#2e3192" />
      <circle cx="326" cy="210" r="4.6" fill="#2e3192" />

      {/* Labels matching original image */}
      <text x="358" y="184" fontSize="16" fontStyle="italic" fill="#231f20">x</text>
      <text x="115" y="23" fontSize="16" fontStyle="italic" fill="#231f20">y</text>
      <text x="95" y="183" fontSize="16" fontStyle="italic" fill="#231f20">O</text>

      <text x="56" y="183" textAnchor="middle" fontSize="16" fill="#231f20">−1</text>
      <text x="150" y="183" textAnchor="middle" fontSize="16" fill="#231f20">1</text>
      <text x="326" y="160" textAnchor="middle" fontSize="16" fill="#231f20">5</text>

      <text x="100" y="39" textAnchor="end" fontSize="16" fill="#231f20">3</text>
      <text x="112" y="127" textAnchor="start" fontSize="16" fill="#231f20">1</text>
      <text x="100" y="215" textAnchor="end" fontSize="16" fill="#231f20">−1</text>
    </svg>
  );
};

/**
 * ĐỀ 03 - PHẦN I - CÂU 9:
 * Bảng thống kê quãng đường đi bộ mỗi ngày (km) của bác Bình trong 20 ngày
 */
export const DiagramDe03TableP1Q9: React.FC = () => {
  return (
    <svg
      viewBox="0 0 640 96"
      className="w-full max-w-[600px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <rect x="6" y="8" width="628" height="80" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
      <rect x="6" y="8" width="124" height="40" fill="#ffff00" stroke="#0f172a" strokeWidth="1.2" />
      <rect x="6" y="48" width="124" height="40" fill="#fff2cc" stroke="#0f172a" strokeWidth="1.2" />

      <line x1="6" y1="48" x2="634" y2="48" stroke="#0f172a" strokeWidth="1.2" />

      <line x1="130" y1="8" x2="130" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="231" y1="8" x2="231" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="332" y1="8" x2="332" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="433" y1="8" x2="433" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="534" y1="8" x2="534" y2="88" stroke="#0f172a" strokeWidth="1.2" />

      <text x="68" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">Quãng đường</text>
      <text x="180.5" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[2,7; 3,0)</text>
      <text x="281.5" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[3,0; 3,3)</text>
      <text x="382.5" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[3,3; 3,6)</text>
      <text x="483.5" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[3,6; 3,9)</text>
      <text x="584" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[3,9; 4,2)</text>

      <text x="68" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">Số ngày</text>
      <text x="180.5" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">3</text>
      <text x="281.5" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">6</text>
      <text x="382.5" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">5</text>
      <text x="483.5" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">4</text>
      <text x="584" y="74" textAnchor="middle" fontSize="16" fill="#0f172a">2</text>
    </svg>
  );
};

/**
 * ĐỀ 03 - PHẦN II - CÂU 1:
 * Bảng biến thiên hàm số y = f(x) liên tục trên R đúng chuẩn file gốc (open-frame table):
 * x: -∞, -1, 1, +∞
 * y': -, 0, +, 0, -
 * y: 142 \ 8 / 38 \ 14
 */
export const DiagramDe03BBTP2Q1: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 185"
      className="w-full max-w-[460px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de03-bbt-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Open-frame lines matching PDF */}
      <line x1="12" y1="40" x2="488" y2="40" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="12" y1="74" x2="488" y2="74" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="56" y1="10" x2="56" y2="175" stroke="#0f172a" strokeWidth="1.2" />

      {/* Headers */}
      <text x="34" y="28" textAnchor="middle" fontSize="16" fontStyle="italic" fill="#0f172a">x</text>
      <text x="34" y="63" textAnchor="middle" fontSize="16" fontStyle="italic" fill="#0f172a">y'</text>
      <text x="34" y="132" textAnchor="middle" fontSize="16" fontStyle="italic" fill="#0f172a">y</text>

      {/* x row */}
      <text x="88" y="28" textAnchor="middle" fontSize="16" fill="#0f172a">−∞</text>
      <text x="210" y="28" textAnchor="middle" fontSize="16" fill="#0f172a">−1</text>
      <text x="340" y="28" textAnchor="middle" fontSize="16" fill="#0f172a">1</text>
      <text x="462" y="28" textAnchor="middle" fontSize="16" fill="#0f172a">+∞</text>

      {/* y' row */}
      <text x="148" y="62" textAnchor="middle" fontSize="17" fill="#0f172a">−</text>
      <text x="210" y="62" textAnchor="middle" fontSize="16" fill="#0f172a">0</text>
      <text x="275" y="62" textAnchor="middle" fontSize="17" fill="#0f172a">+</text>
      <text x="340" y="62" textAnchor="middle" fontSize="16" fill="#0f172a">0</text>
      <text x="402" y="62" textAnchor="middle" fontSize="17" fill="#0f172a">−</text>

      {/* y row values */}
      <text x="88" y="98" textAnchor="middle" fontSize="15" fill="#0f172a">142</text>
      <text x="210" y="168" textAnchor="middle" fontSize="15" fill="#0f172a">8</text>
      <text x="340" y="98" textAnchor="middle" fontSize="15" fill="#0f172a">38</text>
      <text x="462" y="168" textAnchor="middle" fontSize="15" fill="#0f172a">14</text>

      {/* Arrows */}
      <line x1="96" y1="106" x2="196" y2="156" stroke="#0f172a" strokeWidth="1.25" markerEnd="url(#de03-bbt-arrow)" />
      <line x1="222" y1="156" x2="326" y2="106" stroke="#0f172a" strokeWidth="1.25" markerEnd="url(#de03-bbt-arrow)" />
      <line x1="354" y1="106" x2="448" y2="156" stroke="#0f172a" strokeWidth="1.25" markerEnd="url(#de03-bbt-arrow)" />
    </svg>
  );
};

/**
 * ĐỀ 03 - PHẦN II - CÂU 3:
 * Bảng thống kê chiều cao của 20 học sinh nam lớp 12A
 */
export const DiagramDe03TableP2Q3: React.FC = () => {
  return (
    <svg
      viewBox="0 0 650 96"
      className="w-full max-w-[610px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <rect x="6" y="8" width="638" height="80" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
      <rect x="6" y="8" width="138" height="80" fill="#ffff00" stroke="#0f172a" strokeWidth="1.2" />

      <line x1="6" y1="48" x2="644" y2="48" stroke="#0f172a" strokeWidth="1.2" />

      <line x1="144" y1="8" x2="144" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="244" y1="8" x2="244" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="344" y1="8" x2="344" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="444" y1="8" x2="444" y2="88" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="544" y1="8" x2="544" y2="88" stroke="#0f172a" strokeWidth="1.2" />

      <text x="75" y="34" textAnchor="middle" fontSize="15.5" fill="#0f172a">Chiều cao (cm)</text>
      <text x="194" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[160; 165)</text>
      <text x="294" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[165; 170)</text>
      <text x="394" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[170; 175)</text>
      <text x="494" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[175; 180)</text>
      <text x="594" y="34" textAnchor="middle" fontSize="16" fill="#0f172a">[180; 185)</text>

      <text x="75" y="74" textAnchor="middle" fontSize="15.5" fill="#0f172a">Số học sinh</text>
      <text x="154" y="74" textAnchor="start" fontSize="16" fill="#0f172a">3</text>
      <text x="254" y="74" textAnchor="start" fontSize="16" fill="#0f172a">5</text>
      <text x="354" y="74" textAnchor="start" fontSize="16" fill="#0f172a">7</text>
      <text x="454" y="74" textAnchor="start" fontSize="16" fill="#0f172a">4</text>
      <text x="554" y="74" textAnchor="start" fontSize="16" fill="#0f172a">1</text>
    </svg>
  );
};

/**
 * ĐỀ 03 - PHẦN III - CÂU 4:
 * Hình chóp S.ABC có E, F trung điểm SA, SB và SG = 2/3 SC đúng chuẩn file gốc
 */
export const DiagramDe03TetrahedronP3Q4: React.FC = () => {
  return (
    <svg
      viewBox="0 0 360 235"
      className="w-full max-w-[320px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Hidden inner edges from A (dashed) */}
      <line x1="168" y1="28" x2="160" y2="165" stroke="#0f172a" strokeWidth="1.4" strokeDasharray="5,4" />
      <line x1="160" y1="165" x2="118" y2="212" stroke="#0f172a" strokeWidth="1.4" strokeDasharray="5,4" />
      <line x1="160" y1="165" x2="295" y2="194" stroke="#0f172a" strokeWidth="1.4" strokeDasharray="5,4" />

      {/* Outer edges SB, SC, BC (solid) */}
      <line x1="168" y1="28" x2="118" y2="212" stroke="#0f172a" strokeWidth="1.6" />
      <line x1="168" y1="28" x2="295" y2="194" stroke="#0f172a" strokeWidth="1.6" />
      <line x1="118" y1="212" x2="295" y2="194" stroke="#0f172a" strokeWidth="1.6" />

      {/* Cross-section EFG matching PDF */}
      <line x1="164" y1="96.5" x2="143" y2="120" stroke="#0f172a" strokeWidth="1.5" />
      <line x1="164" y1="96.5" x2="252.7" y2="138.7" stroke="#0f172a" strokeWidth="1.5" />
      <line x1="143" y1="120" x2="252.7" y2="138.7" stroke="#0f172a" strokeWidth="1.6" />

      {/* Small vertex circles matching PDF */}
      {[
        { x: 168, y: 28 },
        { x: 118, y: 212 },
        { x: 295, y: 194 },
        { x: 160, y: 165 },
        { x: 164, y: 96.5 },
        { x: 143, y: 120 },
        { x: 252.7, y: 138.7 },
      ].map((p, idx) => (
        <circle key={idx} cx={p.x} cy={p.y} r="2.2" fill="#ffffff" stroke="#0f172a" strokeWidth="1.2" />
      ))}

      {/* Labels matching PDF */}
      <text x="168" y="20" textAnchor="middle" fontSize="16" fontStyle="italic" fill="#0f172a">S</text>
      <text x="106" y="218" textAnchor="middle" fontSize="16" fontStyle="italic" fill="#0f172a">B</text>
      <text x="308" y="198" textAnchor="middle" fontSize="16" fontStyle="italic" fill="#0f172a">C</text>
      <text x="165" y="180" textAnchor="middle" fontSize="15" fontStyle="italic" fill="#0f172a">A</text>
      <text x="172" y="98" textAnchor="start" fontSize="15" fontStyle="italic" fill="#0f172a">E</text>
      <text x="131" y="121" textAnchor="end" fontSize="15" fontStyle="italic" fill="#0f172a">F</text>
      <text x="262" y="140" textAnchor="start" fontSize="15" fontStyle="italic" fill="#0f172a">G</text>
    </svg>
  );
};
