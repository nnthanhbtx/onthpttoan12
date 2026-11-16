import React from 'react';

/**
 * ĐỀ 05 - PHẦN I - CÂU 6:
 * Hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O, M là trung điểm SA đúng chuẩn file gốc
 */
export const DiagramDe05PyramidP1Q6: React.FC = () => {
  // Coordinates matching PDF:
  // A = (130, 172) (back-left, hidden)
  // B = (72, 212)  (front-left)
  // C = (224, 212) (front-right)
  // D = (282, 172) (back-right)
  // O = midpoint(A, C) = (177, 192)
  // S = (145, 25)  (apex above)
  // M = midpoint(S, A) = (137.5, 98.5)
  return (
    <svg
      viewBox="0 0 340 235"
      className="w-full max-w-[320px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Hidden edges (dashed): SA, AB, AD, AC, BD, OM */}
      <line x1="145" y1="25" x2="130" y2="172" stroke="#0f172a" strokeWidth="1.35" strokeDasharray="5,4" />
      <line x1="130" y1="172" x2="72" y2="212" stroke="#0f172a" strokeWidth="1.35" strokeDasharray="5,4" />
      <line x1="130" y1="172" x2="282" y2="172" stroke="#0f172a" strokeWidth="1.35" strokeDasharray="5,4" />
      <line x1="130" y1="172" x2="224" y2="212" stroke="#0f172a" strokeWidth="1.35" strokeDasharray="5,4" />
      <line x1="72" y1="212" x2="282" y2="172" stroke="#0f172a" strokeWidth="1.35" strokeDasharray="5,4" />
      <line x1="137.5" y1="98.5" x2="177" y2="192" stroke="#0f172a" strokeWidth="1.45" strokeDasharray="5,4" />

      {/* Right-angle mark at A matching PDF */}
      <polyline points="131,164 139,164 138,172" fill="none" stroke="#0f172a" strokeWidth="1.1" />

      {/* Visible edges (solid): SB, SC, SD, BC, CD, MB */}
      <line x1="145" y1="25" x2="72" y2="212" stroke="#0f172a" strokeWidth="1.6" />
      <line x1="145" y1="25" x2="224" y2="212" stroke="#0f172a" strokeWidth="1.6" />
      <line x1="145" y1="25" x2="282" y2="172" stroke="#0f172a" strokeWidth="1.6" />
      <line x1="72" y1="212" x2="224" y2="212" stroke="#0f172a" strokeWidth="1.6" />
      <line x1="224" y1="212" x2="282" y2="172" stroke="#0f172a" strokeWidth="1.6" />

      {/* Vertices */}
      {[
        { x: 145, y: 25 },
        { x: 130, y: 172 },
        { x: 72, y: 212 },
        { x: 224, y: 212 },
        { x: 282, y: 172 },
        { x: 177, y: 192 },
        { x: 137.5, y: 98.5 },
      ].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2.2" fill="#0f172a" />
      ))}

      {/* Labels */}
      <text x="145" y="18" textAnchor="middle" fontSize="14" fontStyle="italic" fontWeight="bold" fill="#0f172a">S</text>
      <text x="129" y="96" textAnchor="end" fontSize="13" fontStyle="italic" fontWeight="bold" fill="#0f172a">M</text>
      <text x="124" y="184" textAnchor="end" fontSize="13" fontStyle="italic" fontWeight="bold" fill="#0f172a">A</text>
      <text x="62" y="218" textAnchor="end" fontSize="13" fontStyle="italic" fontWeight="bold" fill="#0f172a">B</text>
      <text x="228" y="225" textAnchor="start" fontSize="13" fontStyle="italic" fontWeight="bold" fill="#0f172a">C</text>
      <text x="290" y="176" textAnchor="start" fontSize="13" fontStyle="italic" fontWeight="bold" fill="#0f172a">D</text>
      <text x="177" y="206" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="bold" fill="#0f172a">O</text>
    </svg>
  );
};

/**
 * ĐỀ 05 - PHẦN I - CÂU 7:
 * Đồ thị hàm số y = f(x) và tiếp tuyến d tại điểm (3; 0) đúng chuẩn file gốc
 */
export const DiagramDe05GraphP1Q7: React.FC = () => {
  // Origin O(0,0) at (105, 165)
  // Point (3; 0) at (225, 165)
  // Tangent line d passes through (0, y0) = (105, 65) and (3, 0) = (225, 165):
  // Slope in SVG: dy/dx = 100 / 120 = 5/6
  // From x = 75 (y = 40) to x = 261 (y = 195)
  return (
    <svg
      viewBox="0 0 350 220"
      className="w-full max-w-[320px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <defs>
        <marker id="de05-q7-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes */}
      <line x1="65" y1="165" x2="325" y2="165" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#de05-q7-arrow)" />
      <line x1="105" y1="205" x2="105" y2="18" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#de05-q7-arrow)" />

      {/* Tangent line d */}
      <line x1="75" y1="40" x2="261" y2="195" stroke="#0f172a" strokeWidth="1.6" />

      {/* Curve y = f(x) tangent to d at (225, 165) */}
      <path
        d="M 192 126 C 204 146, 214 156, 225 165 C 242 179, 262 178, 296 142"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      {/* Labels matching PDF */}
      <text x="320" y="180" fontSize="15" fontStyle="italic" fill="#0f172a">x</text>
      <text x="93" y="26" fontSize="15" fontStyle="italic" fill="#0f172a">y</text>
      <text x="92" y="180" fontSize="15" fill="#0f172a">O</text>
      <text x="205" y="182" textAnchor="middle" fontSize="15" fill="#0f172a">3</text>
      <text x="78" y="36" fontSize="15" fontStyle="italic" fill="#0f172a">d</text>
      <text x="292" y="135" textAnchor="middle" fontSize="15" fontStyle="italic" fill="#0f172a">y=f(x)</text>
    </svg>
  );
};

/**
 * ĐỀ 05 - PHẦN I - CÂU 9:
 * Bảng thống kê thời gian (phút) hoàn thành câu hỏi thi
 */
export const DiagramDe05TableP1Q9: React.FC = () => {
  return (
    <svg
      viewBox="0 0 650 100"
      className="w-full max-w-[610px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <rect x="6" y="8" width="638" height="84" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
      <line x1="6" y1="54" x2="644" y2="54" stroke="#0f172a" strokeWidth="1.2" />

      <line x1="134" y1="8" x2="134" y2="92" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="236" y1="8" x2="236" y2="92" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="338" y1="8" x2="338" y2="92" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="440" y1="8" x2="440" y2="92" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="542" y1="8" x2="542" y2="92" stroke="#0f172a" strokeWidth="1.2" />

      {/* Row 1 */}
      <text x="70" y="28" textAnchor="middle" fontSize="15" fill="#0f172a">Thời gian</text>
      <text x="70" y="46" textAnchor="middle" fontSize="15" fill="#0f172a">(phút)</text>
      <text x="185" y="36" textAnchor="middle" fontSize="15.5" fill="#0f172a">[0,5; 10,5)</text>
      <text x="287" y="36" textAnchor="middle" fontSize="15.5" fill="#0f172a">[10,5; 20,5)</text>
      <text x="389" y="36" textAnchor="middle" fontSize="15.5" fill="#0f172a">[20,5; 30,5)</text>
      <text x="491" y="36" textAnchor="middle" fontSize="15.5" fill="#0f172a">[30,5; 40,5)</text>
      <text x="593" y="36" textAnchor="middle" fontSize="15.5" fill="#0f172a">[40,5; 50,5)</text>

      {/* Row 2 */}
      <text x="70" y="78" textAnchor="middle" fontSize="15" fill="#0f172a">Số học sinh</text>
      <text x="185" y="78" textAnchor="middle" fontSize="15.5" fill="#0f172a">2</text>
      <text x="287" y="78" textAnchor="middle" fontSize="15.5" fill="#0f172a">10</text>
      <text x="389" y="78" textAnchor="middle" fontSize="15.5" fill="#0f172a">6</text>
      <text x="491" y="78" textAnchor="middle" fontSize="15.5" fill="#0f172a">4</text>
      <text x="593" y="78" textAnchor="middle" fontSize="15.5" fill="#0f172a">3</text>
    </svg>
  );
};

/**
 * ĐỀ 05 - PHẦN II - CÂU 4:
 * Hình chữ nhật ABCD gấp tam giác ADE theo DE thành A1DE, M là trung điểm A1C chuẩn 100% ảnh gốc (image_8ba61321.png)
 * - Tô màu vàng cả hai tam giác ADE và A1DE.
 * - Nét đứt màu xanh dương: AD, AE, DC.
 * - Nét liền màu xanh dương: A1D, A1E, DE, A1C, EC, EB, BC, BM.
 * - Mũi tên cong màu xanh lá từ cạnh AD vòng lên cạnh A1D.
 * - Các đỉnh A, E, B, C, D, A1, M có chấm tròn đỏ viền đen.
 */
export const DiagramDe05FoldP2Q4: React.FC = () => {
  // Coordinates matching image_8ba61321.png:
  // A  = (32, 224)
  // E  = (156, 224)
  // B  = (276, 224)
  // C  = (366, 148)
  // D  = (122, 148)
  // A1 = (172, 68)
  // M  = (266, 106)
  return (
    <svg
      viewBox="0 0 405 255"
      className="w-full max-w-[365px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Yellow shaded triangles ADE and A1DE */}
      <polygon points="32,224 156,224 122,148" fill="#ffff66" />
      <polygon points="172,68 156,224 122,148" fill="#ffff66" />

      {/* Dashed blue lines: AD, AE, DC */}
      <g
        stroke="#0000ff"
        strokeWidth="1.15"
        strokeDasharray="4.5,3.5"
        fill="none"
      >
        <line x1="32" y1="224" x2="122" y2="148" />
        <line x1="32" y1="224" x2="156" y2="224" />
        <line x1="122" y1="148" x2="366" y2="148" />
      </g>

      {/* Solid blue lines: A1D, A1E, DE, A1C, EC, EB, BC, BM */}
      <g
        stroke="#0000ff"
        strokeWidth="2.1"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="172" y1="68" x2="122" y2="148" />
        <line x1="172" y1="68" x2="156" y2="224" />
        <line x1="122" y1="148" x2="156" y2="224" />
        <line x1="172" y1="68" x2="366" y2="148" />
        <line x1="156" y1="224" x2="366" y2="148" />
        <line x1="156" y1="224" x2="276" y2="224" />
        <line x1="276" y1="224" x2="366" y2="148" />
        <line x1="266" y1="106" x2="276" y2="224" />
      </g>

      {/* Curved green fold arrow from AD up to A1D */}
      <path
        d="M 87 190 C 56 172, 58 118, 104 116 C 122 115, 134 120, 144 127"
        fill="none"
        stroke="#008000"
        strokeWidth="1.25"
      />
      {/* Arrowhead at (144, 127) matching image_8ba61321.png */}
      <polygon
        points="146,128 134,114 136,122 128,125"
        fill="#3b49df"
        stroke="#008000"
        strokeWidth="0.6"
      />

      {/* Red vertex dots with black border */}
      {[
        { x: 32, y: 224 },
        { x: 156, y: 224 },
        { x: 276, y: 224 },
        { x: 366, y: 148 },
        { x: 122, y: 148 },
        { x: 172, y: 68 },
        { x: 266, y: 106 },
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

      {/* Labels matching image_8ba61321.png */}
      <g fontSize="20" fontStyle="italic" fill="#000000">
        <text x="24" y="232" textAnchor="end">
          A
        </text>
        <text x="156" y="247" textAnchor="middle">
          E
        </text>
        <text x="282" y="246" textAnchor="middle">
          B
        </text>
        <text x="375" y="153" textAnchor="start">
          C
        </text>
        <text x="120" y="144" textAnchor="end">
          D
        </text>
        <text x="171" y="57" textAnchor="middle">
          A<tspan dy="4" fontSize="14" fontStyle="normal">1</tspan>
        </text>
        <text x="275" y="102" textAnchor="middle">
          M
        </text>
      </g>
    </svg>
  );
};

/**
 * ĐỀ 05 - PHẦN III - CÂU 6:
 * 2 thẻ màu đen và 8 thẻ màu trắng đánh số từ 1 đến 8 đúng chuẩn file gốc
 */
export const DiagramDe05CardsP3Q6: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 70"
      className="w-full max-w-[460px] h-auto mx-auto select-none"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* 2 Black/Dark-gray cards */}
      {[0, 1].map((idx) => {
        const x = 18 + idx * 46;
        return (
          <rect
            key={`black-${idx}`}
            x={x}
            y="10"
            width="36"
            height="48"
            rx="2"
            fill="#737373"
            stroke="#262626"
            strokeWidth="1.2"
          />
        );
      })}

      {/* 8 White cards numbered 1 to 8 */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => {
        const x = 114 + idx * 46;
        return (
          <g key={`white-${num}`}>
            <rect
              x={x}
              y="10"
              width="36"
              height="48"
              rx="2"
              fill="#ffffff"
              stroke="#404040"
              strokeWidth="1.2"
            />
            <text
              x={x + 18}
              y="40"
              textAnchor="middle"
              fontSize="19"
              fill="#0f172a"
            >
              {num}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
