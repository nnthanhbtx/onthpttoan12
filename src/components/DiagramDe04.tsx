import React from 'react';

/**
 * ĐỀ 04 - PHẦN I - CÂU 3:
 * Đồ thị hàm đạo hàm y = f'(x) đi qua (-3; 0), (-2; 0) và tiếp xúc trục hoành tại O(0; 0) chuẩn 100% ảnh gốc (image_74a1b292.png)
 */
export const DiagramDe04GraphP1Q3: React.FC = () => {
  // Origin O(0, 0) at (186, 108)
  // x = -2 at 96 (90px for 2 units -> 45px per unit)
  // x = -3 at 35
  // Local max between -3 and -2 at (59, 44)
  // Local min between -2 and 0 at (135, 168)
  // Tangent local max at O(186, 108)
  return (
    <svg
      viewBox="0 0 300 265"
      className="w-full max-w-[275px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker
          id="de04-q3-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6.5"
          markerHeight="6.5"
          orient="auto"
        >
          <path d="M 0 1.5 L 9.5 5 L 0 8.5 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes Ox and Oy */}
      <line
        x1="8"
        y1="108"
        x2="275"
        y2="108"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#de04-q3-arrow)"
      />
      <line
        x1="186"
        y1="258"
        x2="186"
        y2="14"
        stroke="#0f172a"
        strokeWidth="1.4"
        markerEnd="url(#de04-q3-arrow)"
      />

      {/* Curve f'(x) matching image_74a1b292.png */}
      <path
        d="M 21 258 C 25 190, 30 140, 35 108 C 41 68, 49 44, 59 44 C 71 44, 83 72, 96 108 C 110 146, 121 168, 135 168 C 153 168, 171 108, 186 108 C 201 108, 215 168, 226 258"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.65"
        strokeLinecap="round"
      />

      {/* Labels matching image_74a1b292.png */}
      <text x="271" y="123" fontSize="16" fontStyle="italic" fill="#0f172a">
        x
      </text>
      <text x="195" y="21" fontSize="16" fontStyle="italic" fill="#0f172a">
        y
      </text>
      <text x="172" y="103" fontSize="14" fill="#0f172a">
        O
      </text>

      <text x="22" y="123" textAnchor="middle" fontSize="14" fill="#0f172a">
        −3
      </text>
      <text x="85" y="123" textAnchor="middle" fontSize="14" fill="#0f172a">
        −2
      </text>
      <text x="231" y="236" fontSize="15" fontStyle="italic" fill="#0f172a">
        f&apos;(x)
      </text>
    </svg>
  );
};

/**
 * ĐỀ 04 - PHẦN I - CÂU 4:
 * Bảng biến thiên hàm số y = f(x) có tiệm cận đứng tại x = -2 đúng chuẩn file gốc (open-frame table)
 */
export const DiagramDe04BBTP1Q4: React.FC = () => {
  return (
    <svg
      viewBox="0 0 560 190"
      className="w-full max-w-[520px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de04-bbt-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1e293b" />
        </marker>
      </defs>

      {/* Open-frame lines matching PDF */}
      <line x1="12" y1="42" x2="548" y2="42" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="12" y1="78" x2="548" y2="78" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="60" y1="10" x2="60" y2="180" stroke="#0f172a" strokeWidth="1.2" />

      {/* Double vertical bar at x = -2 (x = 305) */}
      <line x1="302.5" y1="42" x2="302.5" y2="180" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="307.5" y1="42" x2="307.5" y2="180" stroke="#0f172a" strokeWidth="1.2" />

      {/* Headers */}
      <text x="34" y="30" textAnchor="middle" fontSize="17" fontStyle="italic" fill="#0f172a">x</text>
      <text x="34" y="66" textAnchor="middle" fontSize="17" fontStyle="italic" fill="#0f172a">y'</text>
      <text x="34" y="136" textAnchor="middle" fontSize="17" fontStyle="italic" fill="#0f172a">y</text>

      {/* x row */}
      <text x="92" y="30" textAnchor="middle" fontSize="17" fill="#0f172a">−∞</text>
      <text x="195" y="30" textAnchor="middle" fontSize="17" fill="#0f172a">−3</text>
      <text x="305" y="30" textAnchor="middle" fontSize="17" fill="#0f172a">−2</text>
      <text x="415" y="30" textAnchor="middle" fontSize="17" fill="#0f172a">1</text>
      <text x="518" y="30" textAnchor="middle" fontSize="17" fill="#0f172a">+∞</text>

      {/* y' row */}
      <text x="144" y="65" textAnchor="middle" fontSize="18" fill="#0f172a">−</text>
      <text x="195" y="65" textAnchor="middle" fontSize="17" fill="#0f172a">0</text>
      <text x="250" y="65" textAnchor="middle" fontSize="18" fill="#0f172a">+</text>
      <text x="360" y="65" textAnchor="middle" fontSize="18" fill="#0f172a">+</text>
      <text x="415" y="65" textAnchor="middle" fontSize="17" fill="#0f172a">0</text>
      <text x="468" y="65" textAnchor="middle" fontSize="18" fill="#0f172a">−</text>

      {/* y row left of -2 */}
      <text x="92" y="104" textAnchor="middle" fontSize="16" fill="#0f172a">+∞</text>
      <text x="195" y="172" textAnchor="middle" fontSize="17" fill="#0f172a">5</text>
      <text x="280" y="104" textAnchor="middle" fontSize="16" fill="#0f172a">+∞</text>

      <line x1="108" y1="108" x2="180" y2="160" stroke="#1e293b" strokeWidth="1.35" markerEnd="url(#de04-bbt-arrow)" />
      <line x1="210" y1="160" x2="266" y2="108" stroke="#1e293b" strokeWidth="1.35" markerEnd="url(#de04-bbt-arrow)" />

      {/* y row right of -2 */}
      <text x="332" y="172" textAnchor="middle" fontSize="16" fill="#0f172a">−∞</text>
      <text x="415" y="104" textAnchor="middle" fontSize="17" fill="#0f172a">0</text>
      <text x="518" y="172" textAnchor="middle" fontSize="16" fill="#0f172a">−∞</text>

      <line x1="350" y1="160" x2="402" y2="108" stroke="#1e293b" strokeWidth="1.35" markerEnd="url(#de04-bbt-arrow)" />
      <line x1="428" y1="108" x2="496" y2="160" stroke="#1e293b" strokeWidth="1.35" markerEnd="url(#de04-bbt-arrow)" />
    </svg>
  );
};

/**
 * ĐỀ 04 - PHẦN I - CÂU 5:
 * Đồ thị hàm số bậc ba y = -x^3 + 3x - 1 đúng chuẩn file gốc
 */
export const DiagramDe04GraphP1Q5: React.FC = () => {
  // Origin O(0,0) at (180, 92)
  // Scale: 1 unit x = 38px, 1 unit y = 34px
  // x = -1 -> 142, y = -3 -> 194
  // x = 0  -> 180, y = -1 -> 126
  // x = 1  -> 218, y = 1  -> 58
  return (
    <svg
      viewBox="0 0 340 230"
      className="w-full max-w-[310px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de04-q5-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes */}
      <line x1="75" y1="92" x2="295" y2="92" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#de04-q5-arrow)" />
      <line x1="180" y1="215" x2="180" y2="16" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#de04-q5-arrow)" />

      {/* Dashed coordinate lines */}
      {/* (-1; -3) */}
      <line x1="142" y1="92" x2="142" y2="194" stroke="#334155" strokeWidth="1.2" strokeDasharray="3.5,3" />
      <line x1="142" y1="194" x2="180" y2="194" stroke="#334155" strokeWidth="1.2" strokeDasharray="3.5,3" />

      {/* (1; 1) */}
      <line x1="218" y1="92" x2="218" y2="58" stroke="#334155" strokeWidth="1.2" strokeDasharray="3.5,3" />
      <line x1="180" y1="58" x2="218" y2="58" stroke="#334155" strokeWidth="1.2" strokeDasharray="3.5,3" />

      {/* Tick at y = -1 */}
      <line x1="177" y1="126" x2="183" y2="126" stroke="#0f172a" strokeWidth="1.2" />

      {/* Cubic curve y = -x^3 + 3x - 1 */}
      <path
        d="M 104 56 C 118 148, 130 194, 142 194 C 162 194, 198 58, 218 58 C 230 58, 242 104, 256 196"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Labels matching PDF */}
      <text x="292" y="106" fontSize="14" fontStyle="italic" fill="#0f172a">x</text>
      <text x="168" y="23" fontSize="14" fontStyle="italic" fill="#0f172a">y</text>
      <text x="167" y="108" fontSize="13" fontStyle="italic" fill="#0f172a">O</text>

      <text x="142" y="85" textAnchor="middle" fontSize="14" fill="#0f172a">−1</text>
      <text x="218" y="108" textAnchor="middle" fontSize="14" fill="#0f172a">1</text>

      <text x="173" y="63" textAnchor="end" fontSize="14" fill="#0f172a">1</text>
      <text x="174" y="131" textAnchor="end" fontSize="14" fill="#0f172a">−1</text>
      <text x="187" y="199" textAnchor="start" fontSize="14" fill="#0f172a">−3</text>
    </svg>
  );
};

/**
 * ĐỀ 04 - PHẦN II - CÂU 3:
 * Đồ thị hàm số y = (-x^2 - x - 2)/(x + 2) có TCĐ x = -2, TCX y = -x + 1, cực tiểu (-4; 7), cực đại (0; -1) đúng chuẩn file gốc
 */
export const DiagramDe04GraphP2Q3: React.FC = () => {
  // Origin O(0,0) at (225, 165)
  // Scale: 1 unit x = 20px, 1 unit y = 16px
  // x = -4 -> 145, y = 7 -> 53
  // x = -2 -> 185 (vertical asymptote)
  // x = 0  -> 225, y = -1 -> 181
  // x = 2  -> 265, y = -2 -> 197
  // Slant asymptote y = -x + 1:
  // At x = -8 (65): y = 9 -> 165 - 144 = 21
  // At x = 4.5 (315): y = -3.5 -> 165 + 56 = 221
  return (
    <svg
      viewBox="0 0 370 250"
      className="w-full max-w-[340px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de04-p2q3-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes */}
      <line x1="55" y1="165" x2="340" y2="165" stroke="#0f172a" strokeWidth="1.3" markerEnd="url(#de04-p2q3-arrow)" />
      <line x1="225" y1="235" x2="225" y2="18" stroke="#0f172a" strokeWidth="1.3" markerEnd="url(#de04-p2q3-arrow)" />

      {/* Vertical asymptote x = -2 */}
      <line x1="185" y1="18" x2="185" y2="235" stroke="#334155" strokeWidth="1.15" />

      {/* Slant asymptote y = -x + 1 */}
      <line x1="65" y1="21" x2="315" y2="221" stroke="#334155" strokeWidth="1.15" />

      {/* Dashed projection lines */}
      {/* (-4; 7) */}
      <line x1="145" y1="165" x2="145" y2="53" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="145" y1="53" x2="225" y2="53" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />

      {/* (2; -2) */}
      <line x1="265" y1="165" x2="265" y2="197" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="225" y1="197" x2="265" y2="197" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />

      {/* Upper-left branch (x < -2) with local min at (-4; 7) -> (145, 53) */}
      <path
        d="M 80 24 C 108 44, 128 53, 145 53 C 162 53, 174 38, 179 18"
        fill="none"
        stroke="#be185d"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Lower-right branch (x > -2) with local max at (0; -1) -> (225, 181), passing through (2; -2) -> (265, 197) */}
      <path
        d="M 191 232 C 197 195, 210 181, 225 181 C 242 181, 265 197, 308 224"
        fill="none"
        stroke="#be185d"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Dots */}
      <circle cx="145" cy="53" r="2" fill="#0f172a" />
      <circle cx="225" cy="181" r="2" fill="#0f172a" />
      <circle cx="265" cy="197" r="2" fill="#0f172a" />

      {/* Labels matching PDF */}
      <text x="336" y="160" fontSize="13" fontStyle="italic" fill="#0f172a">x</text>
      <text x="232" y="25" fontSize="13" fontStyle="italic" fill="#0f172a">y</text>
      <text x="214" y="177" fontSize="13" fontStyle="italic" fill="#0f172a">O</text>

      <text x="145" y="177" textAnchor="middle" fontSize="13" fill="#0f172a">−4</text>
      <text x="176" y="177" textAnchor="end" fontSize="13" fill="#0f172a">−2</text>
      <text x="265" y="161" textAnchor="middle" fontSize="13" fill="#0f172a">2</text>

      <text x="218" y="61" textAnchor="end" fontSize="13" fill="#0f172a">7</text>
      <text x="231" y="185" textAnchor="start" fontSize="13" fill="#0f172a">−1</text>
      <text x="231" y="203" textAnchor="start" fontSize="13" fill="#0f172a">−2</text>
    </svg>
  );
};

/**
 * ĐỀ 04 - PHẦN III - CÂU 4:
 * Lăng trụ đứng tam giác ABC - A1B1C1 có thiết diện BFC1 màu vàng chuẩn 100% ảnh gốc (image_7d4c2f9a.png)
 * - A1B1 và FB nằm ở mặt sau (ABB1A1) nên là NÉT ĐỨT màu xanh dương.
 * - Các cạnh AB, AC, BC, AA1, BB1, CC1, A1C1, B1C1, FC1, BC1 là NÉT LIỀN màu xanh dương.
 * - Các đỉnh A, B, C, F, A1, B1, C1 có chấm tròn đỏ viền đen.
 */
export const DiagramDe04PrismP3Q4: React.FC = () => {
  // Coordinates matching image_7d4c2f9a.png:
  // A(48, 30), B(216, 30), C(80, 96)
  // A1(48, 198), B1(216, 198), C1(80, 264)
  // F = midpoint(A, A1) = (48, 142) [slightly below midpoint as in original drawing]
  return (
    <svg
      viewBox="0 0 265 295"
      className="w-full max-w-[235px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Yellow shaded cross-section BFC1 */}
      <polygon
        points="216,30 48,142 80,264"
        fill="#ffff7a"
      />

      {/* Dashed blue edges on back face ABB1A1: A1B1 and FB */}
      <g
        stroke="#0000ff"
        strokeWidth="1.2"
        strokeDasharray="5,4"
        fill="none"
      >
        <line x1="48" y1="198" x2="216" y2="198" />
        <line x1="48" y1="142" x2="216" y2="30" />
      </g>

      {/* Solid blue edges */}
      <g
        stroke="#0000ff"
        strokeWidth="2.1"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        {/* Top base ABC */}
        <line x1="48" y1="30" x2="216" y2="30" />
        <line x1="48" y1="30" x2="80" y2="96" />
        <line x1="216" y1="30" x2="80" y2="96" />

        {/* Vertical edges AA1, BB1, CC1 */}
        <line x1="48" y1="30" x2="48" y2="198" />
        <line x1="216" y1="30" x2="216" y2="198" />
        <line x1="80" y1="96" x2="80" y2="264" />

        {/* Bottom visible base edges A1C1, B1C1 */}
        <line x1="48" y1="198" x2="80" y2="264" />
        <line x1="216" y1="198" x2="80" y2="264" />

        {/* Visible cross-section edges FC1 and BC1 */}
        <line x1="48" y1="142" x2="80" y2="264" />
        <line x1="216" y1="30" x2="80" y2="264" />
      </g>

      {/* Red vertex dots with black stroke */}
      {[
        { x: 48, y: 30 },
        { x: 216, y: 30 },
        { x: 80, y: 96 },
        { x: 48, y: 142 },
        { x: 48, y: 198 },
        { x: 216, y: 198 },
        { x: 80, y: 264 },
      ].map((pt, i) => (
        <circle
          key={i}
          cx={pt.x}
          cy={pt.y}
          r="2.4"
          fill="#ff0000"
          stroke="#000000"
          strokeWidth="1"
        />
      ))}

      {/* Labels matching image_7d4c2f9a.png */}
      <g fontSize="22" fontStyle="italic" fill="#000000">
        <text x="44" y="25" textAnchor="end">
          A
        </text>
        <text x="222" y="26" textAnchor="start">
          B
        </text>
        <text x="79" y="90" textAnchor="start">
          C
        </text>
        <text x="38" y="148" textAnchor="end">
          F
        </text>
        <text x="45" y="216" textAnchor="end">
          A<tspan dy="5" fontSize="15" fontStyle="normal">1</tspan>
        </text>
        <text x="223" y="214" textAnchor="start">
          B<tspan dy="5" fontSize="15" fontStyle="normal">1</tspan>
        </text>
        <text x="80" y="288" textAnchor="middle">
          C<tspan dy="5" fontSize="15" fontStyle="normal">1</tspan>
        </text>
      </g>
    </svg>
  );
};

/**
 * ĐỀ 04 - PHẦN III - CÂU 5:
 * Lục giác đều ABCDEF
 */
export const DiagramDe04HexagonP3Q5: React.FC = () => {
  const pts = [
    { label: 'A', x: 92, y: 115, lx: 78, ly: 120 },
    { label: 'B', x: 131, y: 47.5, lx: 128, ly: 34 },
    { label: 'C', x: 209, y: 47.5, lx: 212, ly: 34 },
    { label: 'D', x: 248, y: 115, lx: 262, ly: 120 },
    { label: 'E', x: 209, y: 182.5, lx: 212, ly: 200 },
    { label: 'F', x: 131, y: 182.5, lx: 128, ly: 200 },
  ];
  return (
    <svg
      viewBox="0 0 340 220"
      className="w-full max-w-[290px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <polygon
        points={pts.map((p) => `${p.x},${p.y}`).join(' ')}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.5"
      />
      {pts.map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="2.6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
          <text x={p.lx} y={p.ly} textAnchor="middle" fontSize="15" fontStyle="italic" fill="#0f172a">
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

/**
 * ĐỀ 04 - PHẦN III - CÂU 6:
 * Tấm bìa hình lục giác đều đúng chuẩn file gốc:
 * - 6 tam giác cân ở vành ngoài (có đáy là cạnh của lục giác đều lớn và đỉnh là đỉnh của lục giác đều nhỏ) tô màu vàng.
 * - Lục giác đều nhỏ bên trong và 6 cánh tam giác cân nối tới 6 đỉnh lục giác lớn màu trắng, kèm 3 đường chéo chính qua tâm.
 */
export const DiagramDe04HexagonNetP3Q6: React.FC = () => {
  const cx = 170;
  const cy = 145;
  const R = 115;
  const r = 46;

  // Outer vertices at 0, 60, 120, 180, 240, 300 degrees (flat top & bottom)
  const outerPts = [0, 60, 120, 180, 240, 300].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + R * Math.cos(rad), y: cy + R * Math.sin(rad) };
  });

  // Inner vertices at 30, 90, 150, 210, 270, 330 degrees
  const innerPts = [30, 90, 150, 210, 270, 330].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  });

  return (
    <svg
      viewBox="0 0 340 290"
      className="w-full max-w-[290px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* White base background */}
      <polygon
        points={outerPts.map((p) => `${p.x},${p.y}`).join(' ')}
        fill="#ffffff"
        stroke="#0f172a"
        strokeWidth="1.6"
      />

      {/* 6 yellow isosceles triangles on outer edges (cut-out pieces) matching PDF */}
      {outerPts.map((p1, i) => {
        const p2 = outerPts[(i + 1) % 6];
        const pin = innerPts[i];
        return (
          <polygon
            key={`yellow-cut-${i}`}
            points={`${p1.x},${p1.y} ${p2.x},${p2.y} ${pin.x},${pin.y}`}
            fill="#fde047"
            stroke="#1d4ed8"
            strokeWidth="1.3"
          />
        );
      })}

      {/* 3 main diagonals connecting opposite outer vertices */}
      <line x1={outerPts[0].x} y1={outerPts[0].y} x2={outerPts[3].x} y2={outerPts[3].y} stroke="#1d4ed8" strokeWidth="1.3" />
      <line x1={outerPts[1].x} y1={outerPts[1].y} x2={outerPts[4].x} y2={outerPts[4].y} stroke="#1d4ed8" strokeWidth="1.3" />
      <line x1={outerPts[2].x} y1={outerPts[2].y} x2={outerPts[5].x} y2={outerPts[5].y} stroke="#1d4ed8" strokeWidth="1.3" />

      {/* Inner regular hexagon */}
      <polygon
        points={innerPts.map((p) => `${p.x},${p.y}`).join(' ')}
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="1.4"
      />

      {/* Outer regular hexagon border */}
      <polygon
        points={outerPts.map((p) => `${p.x},${p.y}`).join(' ')}
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.6"
      />
    </svg>
  );
};
