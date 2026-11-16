import React from 'react';

/**
 * Phần I - Câu 1 (Đề 08): Đồ thị hàm số phân thức y = (x + 1)/(x - 1) chuẩn 100% ảnh gốc
 */
export const DiagramDe08GraphP1Q1: React.FC = () => {
  // Origin O at (130, 125). Scale: 1 unit = 22px -> x = 1 is 152, y = 1 is 103
  // Hyperbola y = (x + 1)/(x - 1) = 1 + 2/(x - 1)
  // Left branch (x < 1): x from -4.2 to 0.62
  // Right branch (x > 1): x from 1.38 to 6.2
  const ox = 130;
  const oy = 125;
  const s = 22;

  const buildBranch = (xStart: number, xEnd: number, steps: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const x = xStart + ((xEnd - xStart) * i) / steps;
      const y = (x + 1) / (x - 1);
      const px = ox + x * s;
      const py = oy - y * s;
      pts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
    }
    return pts.join(' ');
  };

  const leftPath = buildBranch(-4.3, 0.62, 50);
  const rightPath = buildBranch(1.38, 6.2, 50);

  return (
    <svg
      viewBox="0 0 280 230"
      className="w-full max-w-[260px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de08-q1-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#334155" />
        </marker>
      </defs>

      {/* Axes Ox, Oy */}
      <line
        x1="28"
        y1={oy}
        x2="268"
        y2={oy}
        stroke="#334155"
        strokeWidth="1.1"
        markerEnd="url(#de08-q1-arrow)"
      />
      <line
        x1={ox}
        y1="215"
        x2={ox}
        y2="14"
        stroke="#334155"
        strokeWidth="1.1"
        markerEnd="url(#de08-q1-arrow)"
      />

      {/* Asymptotes x = 1 (px = 152) and y = 1 (py = 103) */}
      <line
        x1={ox + s}
        y1="14"
        x2={ox + s}
        y2="215"
        stroke="#475569"
        strokeWidth="1"
      />
      <line
        x1="28"
        y1={oy - s}
        x2="268"
        y2={oy - s}
        stroke="#475569"
        strokeWidth="1"
      />

      {/* Two hyperbola branches */}
      <path
        d={leftPath}
        fill="none"
        stroke="#1e293b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d={rightPath}
        fill="none"
        stroke="#1e293b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="12"
        fill="#0f172a"
      >
        <text x="120" y="21" fontStyle="italic">y</text>
        <text x="260" y="138" fontStyle="italic">x</text>
        <text x="133" y="137" fontStyle="italic">O</text>
        <text x="119" y="99">1</text>
        <text x="156" y="139">1</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 2 (Đề 08): Bảng xét dấu f'(x) chuẩn 100% ảnh gốc
 */
export const DiagramDe08SignTableP1Q2: React.FC = () => {
  return (
    <svg
      viewBox="0 0 490 95"
      className="w-full max-w-[460px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="6" width="478" height="82" fill="#ffffff" />
      {/* Table borders */}
      <line x1="14" y1="44" x2="476" y2="44" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="68" y1="10" x2="68" y2="84" stroke="#0f172a" strokeWidth="1.2" />

      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="18"
        fill="#0f172a"
        textAnchor="middle"
      >
        {/* Row 1: x */}
        <text x="41" y="31" fontStyle="italic">x</text>
        <text x="95" y="32">−∞</text>
        <text x="190" y="31">−2</text>
        <text x="280" y="31">0</text>
        <text x="368" y="31">2</text>
        <text x="452" y="32">+∞</text>

        {/* Row 2: f'(x) */}
        <text x="41" y="70" fontStyle="italic">f&apos;(x)</text>
        <text x="142" y="70">−</text>
        <text x="190" y="70">0</text>
        <text x="235" y="70">+</text>
        <text x="280" y="70">0</text>
        <text x="324" y="70">−</text>
        <text x="368" y="70">0</text>
        <text x="410" y="70">+</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 4 (Đề 08): Sơ đồ phân đôi con amip qua 3 ngày chuẩn 100% ảnh gốc
 */
export const DiagramDe08AmoebaP1Q4: React.FC = () => {
  const renderAmoeba = (cx: number, cy: number, scale = 1) => (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`}>
      <path
        d="M -18,-6 C -22,-16 -8,-20 -2,-12 C 4,-22 18,-18 14,-6 C 24,-4 24,10 12,10 C 16,20 2,22 -2,12 C -8,22 -22,18 -16,6 C -26,2 -24,-8 -18,-6 Z"
        fill="#a7f3d0"
        stroke="#059669"
        strokeWidth="1.5"
      />
      {/* Eyes / Nucleus */}
      <ellipse cx="-4" cy="-2" rx="3.2" ry="4.2" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
      <circle cx="-3.5" cy="-1.5" r="1.6" fill="#0f172a" />
      <ellipse cx="4" cy="-2" rx="3.2" ry="4.2" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
      <circle cx="4.5" cy="-1.5" r="1.6" fill="#0f172a" />
    </g>
  );

  return (
    <svg
      viewBox="0 0 380 185"
      className="w-full max-w-[350px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de08-amoeba-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
        </marker>
      </defs>

      {/* Left labels */}
      <g
        fontFamily="Arial, sans-serif"
        fontSize="13"
        fontWeight="bold"
        fill="#1e3a8a"
      >
        <text x="18" y="38">1. Ngày</text>
        <text x="18" y="96">2. Ngày</text>
        <text x="18" y="156">3. Ngày</text>
      </g>

      {/* Division arrows */}
      <g stroke="#475569" strokeWidth="1.5" markerEnd="url(#de08-amoeba-arrow)">
        {/* Day 1 -> Day 2 */}
        <line x1="205" y1="46" x2="165" y2="74" />
        <line x1="235" y1="46" x2="275" y2="74" />
        {/* Day 2 -> Day 3 */}
        <line x1="145" y1="108" x2="122" y2="134" />
        <line x1="168" y1="108" x2="185" y2="134" />
        <line x1="272" y1="108" x2="255" y2="134" />
        <line x1="295" y1="108" x2="318" y2="134" />
      </g>

      {/* Day 1: 1 amoeba */}
      {renderAmoeba(220, 32, 0.95)}

      {/* Day 2: 2 amoebas */}
      {renderAmoeba(156, 92, 0.9)}
      {renderAmoeba(284, 92, 0.9)}

      {/* Day 3: 4 amoebas */}
      {renderAmoeba(116, 152, 0.85)}
      {renderAmoeba(186, 152, 0.85)}
      {renderAmoeba(254, 152, 0.85)}
      {renderAmoeba(324, 152, 0.85)}
    </svg>
  );
};

/**
 * Phần I - Câu 5 (Đề 08): Đồ thị f(x) và đạo hàm f'(x) chuẩn 100% ảnh gốc
 */
export const DiagramDe08GraphsP1Q5: React.FC = () => {
  return (
    <svg
      viewBox="0 0 470 190"
      className="w-full max-w-[440px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="de08-q5-arrow"
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

      {/* LEFT GRAPH: f(x) */}
      <g transform="translate(10, 0)">
        {/* Axes */}
        <line
          x1="15"
          y1="145"
          x2="205"
          y2="145"
          stroke="#0f172a"
          strokeWidth="1.3"
          markerEnd="url(#de08-q5-arrow)"
        />
        <line
          x1="48"
          y1="175"
          x2="48"
          y2="16"
          stroke="#0f172a"
          strokeWidth="1.3"
          markerEnd="url(#de08-q5-arrow)"
        />

        {/* Dashed projection for (5, sqrt(3)) at (142, 74) */}
        <g stroke="#334155" strokeWidth="1.1" strokeDasharray="3.5,3" fill="none">
          <line x1="48" y1="74" x2="142" y2="74" />
          <line x1="142" y1="74" x2="142" y2="145" />
        </g>

        {/* Blue curve f(x) */}
        <path
          d="M 48 122 C 88 120, 118 104, 142 74 C 155 57, 166 38, 174 22"
          fill="none"
          stroke="#0284c7"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Labels */}
        <g fontFamily="'Times New Roman', Times, serif" fontSize="15" fill="#0f172a">
          <text x="33" y="21" fontStyle="italic">y</text>
          <text x="196" y="160" fontStyle="italic">x</text>
          <text x="32" y="161" fontStyle="italic">O</text>
          <text x="138" y="162">5</text>
          <text x="18" y="79">√3</text>
          <text x="168" y="42" fill="#0369a1" fontStyle="italic" fontSize="16">
            f(x)
          </text>
        </g>
      </g>

      {/* RIGHT GRAPH: f'(x) */}
      <g transform="translate(245, 0)">
        {/* Axes */}
        <line
          x1="15"
          y1="145"
          x2="205"
          y2="145"
          stroke="#0f172a"
          strokeWidth="1.3"
          markerEnd="url(#de08-q5-arrow)"
        />
        <line
          x1="48"
          y1="175"
          x2="48"
          y2="16"
          stroke="#0f172a"
          strokeWidth="1.3"
          markerEnd="url(#de08-q5-arrow)"
        />

        {/* Dashed projection for (5, 2) at (142, 74) */}
        <g stroke="#334155" strokeWidth="1.1" strokeDasharray="3.5,3" fill="none">
          <line x1="48" y1="74" x2="142" y2="74" />
          <line x1="142" y1="74" x2="142" y2="145" />
        </g>

        {/* Red line f'(x) */}
        <line
          x1="74"
          y1="122"
          x2="168"
          y2="55"
          stroke="#dc2626"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Labels */}
        <g fontFamily="'Times New Roman', Times, serif" fontSize="15" fill="#0f172a">
          <text x="33" y="21" fontStyle="italic">y</text>
          <text x="196" y="160" fontStyle="italic">x</text>
          <text x="32" y="161" fontStyle="italic">O</text>
          <text x="138" y="162">5</text>
          <text x="33" y="79">2</text>
          <text x="162" y="47" fill="#dc2626" fontStyle="italic" fontSize="16">
            f&apos;(x)
          </text>
        </g>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 8 (Đề 08): Lưới 5 đường thẳng song song đứng và 4 đường thẳng song song ngang chuẩn 100% ảnh gốc
 */
export const DiagramDe08GridLinesP1Q8: React.FC = () => {
  return (
    <svg
      viewBox="0 0 280 175"
      className="w-full max-w-[260px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#0f172a" strokeWidth="2.1" strokeLinecap="round">
        {/* 4 horizontal parallel lines */}
        <line x1="36" y1="34" x2="252" y2="34" />
        <line x1="30" y1="68" x2="246" y2="68" />
        <line x1="25" y1="104" x2="241" y2="104" />
        <line x1="20" y1="140" x2="236" y2="140" />

        {/* 5 slanted vertical parallel lines */}
        <line x1="65" y1="14" x2="36" y2="160" />
        <line x1="106" y1="14" x2="77" y2="160" />
        <line x1="147" y1="14" x2="118" y2="160" />
        <line x1="188" y1="14" x2="159" y2="160" />
        <line x1="229" y1="14" x2="200" y2="160" />
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 10 (Đề 08): Hình chữ nhật ABCD có AB = 6 - x, BC = x^2 + 9 chuẩn 100% ảnh gốc
 */
export const DiagramDe08RectangleP1Q10: React.FC = () => {
  // Rectangle ABCD: D=(45,30), C=(205,30), B=(205,148), A=(45,148)
  return (
    <svg
      viewBox="0 0 285 180"
      className="w-full max-w-[270px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main rectangle */}
      <rect
        x="45"
        y="30"
        width="160"
        height="118"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.4"
      />

      {/* 4 Right angle markers */}
      <g stroke="#0f172a" strokeWidth="1" fill="none">
        {/* Top-left D */}
        <polyline points="45,42 57,42 57,30" />
        <circle cx="51" cy="36" r="1" fill="#0f172a" />
        {/* Top-right C */}
        <polyline points="193,30 193,42 205,42" />
        <circle cx="199" cy="36" r="1" fill="#0f172a" />
        {/* Bottom-left A */}
        <polyline points="45,136 57,136 57,148" />
        <circle cx="51" cy="142" r="1" fill="#0f172a" />
        {/* Bottom-right B */}
        <polyline points="193,148 193,136 205,136" />
        <circle cx="199" cy="142" r="1" fill="#0f172a" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="15"
        fill="#0f172a"
      >
        <text x="41" y="23" fontStyle="italic">D</text>
        <text x="200" y="23" fontStyle="italic">C</text>
        <text x="41" y="165" fontStyle="italic">A</text>
        <text x="200" y="165" fontStyle="italic">B</text>

        {/* Bottom side: 6 - x */}
        <text x="125" y="165" textAnchor="middle">
          6 − <tspan fontStyle="italic">x</tspan>
        </text>

        {/* Right side: x^2 + 9 */}
        <text x="213" y="93">
          <tspan fontStyle="italic">x</tspan>
          <tspan dy="-6" fontSize="11">2</tspan>
          <tspan dy="6"> + 9</tspan>
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 11 (Đề 08): Tứ diện ABCD với I là trung điểm BC chuẩn 100% ảnh gốc
 */
export const DiagramDe08TetrahedronP1Q11: React.FC = () => {
  // A=(115,28), B=(62,130), C=(136,168), D=(232,130)
  // Midpoint I of BC = (99, 149)
  return (
    <svg
      viewBox="0 0 280 195"
      className="w-full max-w-[260px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed edge BD */}
      <line
        x1="62"
        y1="130"
        x2="232"
        y2="130"
        stroke="#0f172a"
        strokeWidth="1.6"
        strokeDasharray="6,5"
      />

      {/* Visible solid edges */}
      <g
        stroke="#0f172a"
        strokeWidth="1.7"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <line x1="115" y1="28" x2="62" y2="130" />
        <line x1="115" y1="28" x2="136" y2="168" />
        <line x1="115" y1="28" x2="232" y2="130" />
        <line x1="62" y1="130" x2="136" y2="168" />
        <line x1="136" y1="168" x2="232" y2="130" />
      </g>

      {/* Midpoint tick at I(99, 149) */}
      <line
        x1="96"
        y1="154"
        x2="102"
        y2="144"
        stroke="#0f172a"
        strokeWidth="1.6"
      />

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fontStyle="italic"
        fontWeight="bold"
        fill="#0f172a"
      >
        <text x="110" y="21">A</text>
        <text x="44" y="135">B</text>
        <text x="82" y="164">I</text>
        <text x="131" y="186">C</text>
        <text x="238" y="135">D</text>
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 2 (Đề 08): Hình chóp S.ABCD có SA vuông góc với đáy chuẩn 100% ảnh gốc
 */
export const DiagramDe08PyramidP2Q2: React.FC = () => {
  // S=(118,22), A=(118,136), B=(60,174), C=(202,174), D=(260,136)
  return (
    <svg
      viewBox="0 0 300 200"
      className="w-full max-w-[280px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hidden dashed edges SA, AB, AD */}
      <g
        stroke="#1e1b4b"
        strokeWidth="1.4"
        strokeDasharray="4.5,3.5"
        fill="none"
      >
        <line x1="118" y1="22" x2="118" y2="136" />
        <line x1="118" y1="136" x2="60" y2="174" />
        <line x1="118" y1="136" x2="260" y2="136" />
      </g>

      {/* Right angle markers at A */}
      <g stroke="#1e1b4b" strokeWidth="1.1" fill="none">
        {/* SA perp AD */}
        <polyline points="118,126 128,126 128,136" />
        {/* SA perp AB */}
        <polyline points="118,126 110,131 110,141" />
      </g>

      {/* Visible solid edges SB, SC, SD, BC, CD */}
      <g
        stroke="#1e1b4b"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <line x1="118" y1="22" x2="60" y2="174" />
        <line x1="118" y1="22" x2="202" y2="174" />
        <line x1="118" y1="22" x2="260" y2="136" />
        <line x1="60" y1="174" x2="202" y2="174" />
        <line x1="202" y1="174" x2="260" y2="136" />
      </g>

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="113" y="16">S</text>
        <text x="103" y="133">A</text>
        <text x="45" y="184">B</text>
        <text x="200" y="188">C</text>
        <text x="266" y="140">D</text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 1 (Đề 08): Tam giác vuông ABC với hình chữ nhật BKLM nội tiếp chuẩn 100% ảnh gốc
 */
export const DiagramDe08TriangleRectP3Q1: React.FC = () => {
  // B=(75, 180), A=(75, 24), C=(192, 180)
  // Let L be at midpoint of AC: K=(75, 102), L=(133.5, 102), M=(133.5, 180)
  return (
    <svg
      viewBox="0 0 245 205"
      className="w-full max-w-[235px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shaded yellow rectangle BKLM */}
      <rect
        x="75"
        y="102"
        width="58.5"
        height="78"
        fill="#fde047"
        stroke="#0f172a"
        strokeWidth="1.5"
      />

      {/* Right angle marker at B */}
      <polyline
        points="75,169 86,169 86,180"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.1"
      />

      {/* Right triangle ABC */}
      <polygon
        points="75,24 75,180 192,180"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Hypotenuse AC highlighted */}
      <line
        x1="75"
        y1="24"
        x2="192"
        y2="180"
        stroke="#1d4ed8"
        strokeWidth="1.7"
      />

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="16"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="69" y="17">A</text>
        <text x="59" y="106">K</text>
        <text x="139" y="102">L</text>
        <text x="61" y="194">B</text>
        <text x="126" y="196">M</text>
        <text x="197" y="185">C</text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 2 (Đề 08): Hình lập phương ABCD.A1B1C1D1 với mặt phẳng (AD1E) chuẩn 100% ảnh gốc
 */
export const DiagramDe08CubePlaneP3Q2: React.FC = () => {
  // Cube vertices:
  // A=(64, 180), B=(180, 180), C=(224, 142), D=(108, 142)
  // A1=(64, 68), B1=(180, 68), C1=(224, 30), D1=(108, 30)
  // E = midpoint of CC1 = (224, 86)
  return (
    <svg
      viewBox="0 0 280 210"
      className="w-full max-w-[265px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Yellow shaded plane triangle AD1E */}
      <polygon
        points="64,180 108,30 224,86"
        fill="#fef08a"
        fillOpacity="0.72"
      />

      {/* Hidden dashed edges: AD, DC, DD1, D1E, AE */}
      <g
        stroke="#334155"
        strokeWidth="1.2"
        strokeDasharray="4,3.5"
        fill="none"
      >
        <line x1="64" y1="180" x2="108" y2="142" />
        <line x1="108" y1="142" x2="224" y2="142" />
        <line x1="108" y1="142" x2="108" y2="30" />
        <line x1="108" y1="30" x2="224" y2="86" />
        <line x1="64" y1="180" x2="224" y2="86" />
      </g>

      {/* Visible solid edges */}
      <g
        stroke="#0f172a"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Top face A1B1C1D1 */}
        <polygon points="64,68 180,68 224,30 108,30" />
        {/* Front & right vertical edges */}
        <line x1="64" y1="68" x2="64" y2="180" />
        <line x1="180" y1="68" x2="180" y2="180" />
        <line x1="224" y1="30" x2="224" y2="142" />
        {/* Bottom visible edges */}
        <line x1="64" y1="180" x2="180" y2="180" />
        <line x1="180" y1="180" x2="224" y2="142" />
        {/* Visible segment AD1 on left face */}
        <line x1="64" y1="180" x2="108" y2="30" stroke="#1e3a8a" />
      </g>

      {/* Point E */}
      <circle cx="224" cy="86" r="2.6" fill="#1e3a8a" />

      {/* Labels */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="15"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="50" y="193">A</text>
        <text x="176" y="196">B</text>
        <text x="229" y="147">C</text>
        <text x="113" y="138">D</text>
        <text x="45" y="70">
          A<tspan dy="3" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="163" y="63">
          B<tspan dy="3" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="228" y="28">
          C<tspan dy="3" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="98" y="23">
          D<tspan dy="3" fontSize="11" fontStyle="normal">1</tspan>
        </text>
        <text x="231" y="90">E</text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 6 (Đề 08): Hình vuông Tangram 7 mảnh ghép chuẩn 100% ảnh gốc
 */
export const DiagramDe08TangramP3Q6: React.FC = () => {
  // Square from (30, 15) to (210, 195), size = 180
  // Top-Left = (30, 15), Top-Right = (210, 15), Bottom-Left = (30, 195), Bottom-Right = (210, 195)
  // Center O = (120, 105)
  // Quarter point bottom-left to center: Q1 = (75, 150)
  // Quarter point center to top-right: Q2 = (165, 60)
  // Quarter point center to bottom-right: Q3 = (165, 150)
  // Midpoint of right edge: M_R = (210, 105)
  // Midpoint of bottom edge: M_B = (120, 195)
  return (
    <svg
      viewBox="0 0 240 210"
      className="w-full max-w-[220px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#0f172a"
        strokeWidth="1.6"
        fill="#ffffff"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Outer square */}
        <rect x="30" y="15" width="180" height="180" />
        {/* Full diagonal from Bottom-Left (30, 195) to Top-Right (210, 15) */}
        <line x1="30" y1="195" x2="210" y2="15" />
        {/* Three-quarter diagonal from Top-Left (30, 15) to Q3 (165, 150) */}
        <line x1="30" y1="15" x2="165" y2="150" />
        {/* Segment from Mid-Bottom (120, 195) to Mid-Right (210, 105) passing through Q3 (165, 150) */}
        <line x1="120" y1="195" x2="210" y2="105" />
        {/* Segment from Q2 (165, 60) to Mid-Right (210, 105) forming the tilted square */}
        <line x1="165" y1="60" x2="210" y2="105" />
        {/* Horizontal segment from Q1 (75, 150) to Q3 (165, 150) forming the bottom parallelogram */}
        <line x1="75" y1="150" x2="165" y2="150" />
      </g>
    </svg>
  );
};
