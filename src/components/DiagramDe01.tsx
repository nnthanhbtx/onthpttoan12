import React from 'react';

/**
 * Phần I - Câu 2: Hình lập phương ABCD.A'B'C'D' chuẩn TikZ
 * Góc nhìn: Mặt trên (ABCD), mặt trước (ABB'A'), mặt phải (BCC'B') nhìn thấy (nét liền).
 * Đỉnh D' bị khuất phía sau nên 3 cạnh xuất phát từ D' (D'D, D'A', D'C') là nét đứt.
 */
export const DiagramDe01CubeABCD: React.FC = () => {
  return (
    <svg
      viewBox="0 0 320 250"
      className="w-full max-w-[300px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shaded faces (TikZ light blue) */}
      {/* Top face ABCD */}
      <polygon
        points="115,35 255,35 210,80 70,80"
        fill="#dbeafe"
        fillOpacity="0.6"
      />
      {/* Front face ABB'A' */}
      <polygon
        points="70,80 210,80 210,210 70,210"
        fill="#bfdbfe"
        fillOpacity="0.4"
      />
      {/* Right face BCC'B' */}
      <polygon
        points="210,80 255,35 255,165 210,210"
        fill="#93c5fd"
        fillOpacity="0.45"
      />

      {/* Hidden dashed edges meeting at hidden vertex D'(115,165): D'D, D'A', D'C' */}
      <g
        stroke="#1e3a8a"
        strokeWidth="1.6"
        strokeDasharray="5,4"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="115" y1="35" x2="115" y2="165" />
        <line x1="115" y1="165" x2="70" y2="210" />
        <line x1="115" y1="165" x2="255" y2="165" />
      </g>

      {/* Visible solid edges */}
      <g
        stroke="#1d4ed8"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        {/* Top face ABCD */}
        <polygon points="115,35 255,35 210,80 70,80" />
        {/* Vertical visible edges AA', BB', CC' */}
        <line x1="70" y1="80" x2="70" y2="210" />
        <line x1="210" y1="80" x2="210" y2="210" />
        <line x1="255" y1="35" x2="255" y2="165" />
        {/* Bottom visible edges A'B', B'C' */}
        <line x1="70" y1="210" x2="210" y2="210" />
        <line x1="210" y1="210" x2="255" y2="165" />
      </g>

      {/* Vertices dots */}
      <g fill="#0f172a">
        <circle cx="70" cy="80" r="2.5" />
        <circle cx="210" cy="80" r="2.5" />
        <circle cx="255" cy="35" r="2.5" />
        <circle cx="115" cy="35" r="2.5" />
        <circle cx="70" cy="210" r="2.5" />
        <circle cx="210" cy="210" r="2.5" />
        <circle cx="255" cy="165" r="2.5" />
        <circle cx="115" cy="165" r="2.5" />
      </g>

      {/* Labels in Times New Roman Italic */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="17"
        fontStyle="italic"
        fill="#0f172a"
        fontWeight="600"
      >
        <text x="52" y="83">A</text>
        <text x="195" y="75">B</text>
        <text x="262" y="37">C</text>
        <text x="106" y="27">D</text>
        <text x="47" y="218">A&apos;</text>
        <text x="214" y="225">B&apos;</text>
        <text x="262" y="172">C&apos;</text>
        <text x="120" y="159">D&apos;</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 4: Bảng số liệu ghép nhóm thời gian tập thể dục chuẩn font Times New Roman
 */
export const DiagramDe01TableStats: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto py-1">
      <table
        className="w-full max-w-[560px] mx-auto border-collapse border border-slate-800 text-xs sm:text-sm text-slate-900 bg-white shadow-sm"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <tbody>
          <tr>
            <th className="border border-slate-800 bg-[#fde68a] px-2.5 py-1.5 font-bold text-center whitespace-nowrap">
              Thời gian (phút)
            </th>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center">
              [0; 20)
            </td>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center">
              [20; 40)
            </td>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center">
              [40; 60)
            </td>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center">
              [60; 80)
            </td>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center">
              [80; 100)
            </td>
          </tr>
          <tr>
            <th className="border border-slate-800 bg-[#fde68a] px-2.5 py-1.5 font-bold text-center whitespace-nowrap">
              Số học sinh
            </th>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center font-semibold">
              5
            </td>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center font-semibold">
              9
            </td>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center font-semibold">
              13
            </td>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center font-semibold">
              10
            </td>
            <td className="border border-slate-800 px-2.5 py-1.5 text-center font-semibold">
              6
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/**
 * Phần I - Câu 10: Hình chóp tam giác V.ABC với thiết diện AEF chuẩn TikZ
 * Quy tắc hình học không gian:
 * - Hai mặt bên phía trước là (VAB) và (VBC): các cạnh VA, VB, VC, AB, BC và hai đoạn AE (thuộc VAB), EF (thuộc VBC) nhìn thấy -> NÉT LIỀN.
 * - Mặt bên phía sau là (VAC): cạnh đáy AC và đoạn giao tuyến AF (thuộc VAC, bị che khuất bởi hai mặt trước VAB, VBC) -> NÉT ĐỨT.
 */
export const DiagramDe01PyramidVABC: React.FC = () => {
  // Coordinates:
  // V = (140, 20)
  // A = (54, 178)
  // B = (152, 212)
  // C = (226, 172)
  // E on VB (t = 0.65): x = 140 + 0.65*(152-140) = 147.8, y = 20 + 0.65*(212-20) = 144.8
  // F on VC (t = 0.56): x = 140 + 0.56*(226-140) = 188.2, y = 20 + 0.56*(172-20) = 105.1
  return (
    <svg
      viewBox="0 0 280 240"
      className="w-full max-w-[275px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cross-section AEF subtle fill */}
      <polygon
        points="54,178 147.8,144.8 188.2,105.1"
        fill="#cbd5e1"
        fillOpacity="0.45"
      />

      {/* Hidden dashed edges on back face (VAC): AC and AF */}
      <g
        stroke="#0f172a"
        strokeWidth="1.5"
        strokeDasharray="5,4"
        strokeLinecap="round"
        fill="none"
      >
        {/* Back base edge AC */}
        <line x1="54" y1="178" x2="226" y2="172" />
        {/* Back section edge AF on face (VAC) */}
        <line x1="54" y1="178" x2="188.2" y2="105.1" />
      </g>

      {/* Visible solid edges of pyramid V.ABC and front section edges AE, EF */}
      <g
        stroke="#0f172a"
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        {/* Lateral edges VA, VB, VC */}
        <line x1="140" y1="20" x2="54" y2="178" />
        <line x1="140" y1="20" x2="152" y2="212" />
        <line x1="140" y1="20" x2="226" y2="172" />
        {/* Front base edges AB, BC */}
        <line x1="54" y1="178" x2="152" y2="212" />
        <line x1="152" y1="212" x2="226" y2="172" />
        {/* Visible section edges AE on (VAB) and EF on (VBC) */}
        <line x1="54" y1="178" x2="147.8" y2="144.8" />
        <line x1="147.8" y1="144.8" x2="188.2" y2="105.1" />
      </g>

      {/* Vertices dots */}
      <g fill="#0f172a">
        <circle cx="140" cy="20" r="2.5" />
        <circle cx="54" cy="178" r="2.5" />
        <circle cx="152" cy="212" r="2.5" />
        <circle cx="226" cy="172" r="2.5" />
        <circle cx="147.8" cy="144.8" r="2.5" />
        <circle cx="188.2" cy="105.1" r="2.5" />
      </g>

      {/* Labels in Times New Roman Italic */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="17"
        fontStyle="italic"
        fill="#0f172a"
        fontWeight="600"
      >
        <text x="134" y="14">V</text>
        <text x="36" y="183">A</text>
        <text x="147" y="230">B</text>
        <text x="233" y="177">C</text>
        <text x="155" y="153">E</text>
        <text x="195" y="106">F</text>
      </g>
    </svg>
  );
};

/**
 * Phần I - Câu 12: Đồ thị đạo hàm y = f'(x) với các hoành độ a, O, b, c, d, e chuẩn 100% ảnh gốc
 * - Cực tiểu cục bộ tại x = a = 100 (f'(a) > 0, nằm phía trên Ox)
 * - Cắt trục Oy gần đỉnh rồi đạt cực đại cục bộ ngay sát bên phải Oy tại x = b = 161 (f'(b) > 0)
 * - Cắt trục hoành tại x = c = 214 (f'(c) = 0)
 * - Cực tiểu cục bộ phía dưới Ox tại x = d = 236 (f'(d) < 0, nhãn d nằm phía trên Ox)
 * - Cắt trục hoành đi lên tại x = e = 258 (f'(e) = 0)
 */
export const DiagramDe01GraphP1Q12: React.FC = () => {
  return (
    <svg
      viewBox="0 0 360 230"
      className="w-full max-w-[340px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrow-p1q12"
          viewBox="0 0 12 10"
          refX="10"
          refY="5"
          markerWidth="7"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 12 5 L 0 9 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes Ox, Oy */}
      <line
        x1="42"
        y1="172"
        x2="326"
        y2="172"
        stroke="#0f172a"
        strokeWidth="1.7"
        markerEnd="url(#arrow-p1q12)"
      />
      <line
        x1="150"
        y1="212"
        x2="150"
        y2="20"
        stroke="#0f172a"
        strokeWidth="1.7"
        markerEnd="url(#arrow-p1q12)"
      />

      {/* Dashed projection lines at x = a (100,104), x = b (161,46), x = d (236,198) */}
      <g stroke="#0f172a" strokeWidth="1.5" strokeDasharray="6,4">
        <line x1="100" y1="172" x2="100" y2="104" />
        <line x1="161" y1="172" x2="161" y2="46" />
        <line x1="236" y1="172" x2="236" y2="198" />
      </g>

      {/* Smooth curve y = f'(x) matching original image */}
      <path
        d="M 60 42 C 74 82, 87 104, 100 104 C 118 104, 140 46, 161 46 C 184 46, 199 124, 214 172 C 221 191, 228 198, 236 198 C 244 198, 251 191, 258 172 C 273 132, 291 84, 308 50"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      {/* Labels in Times New Roman Italic */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="19"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="133" y="31">y</text>
        <text x="313" y="192">x</text>
        <text x="132" y="195">O</text>
        <text x="95" y="193">a</text>
        <text x="155" y="193">b</text>
        <text x="200" y="193">c</text>
        <text x="231" y="166">d</text>
        <text x="260" y="193">e</text>
        <text x="195" y="110">
          y<tspan fontStyle="normal" dx="2" dy="0">=</tspan><tspan dx="2">f&apos;</tspan><tspan fontStyle="normal">(</tspan>x<tspan fontStyle="normal">)</tspan>
        </text>
      </g>
    </svg>
  );
};

/**
 * Phần II - Câu 1: Đồ thị hàm đạo hàm y = f'(x) chuẩn 100% ảnh gốc
 * - Tại x = -b (74): đường nét đứt từ trục Ox đi xuống đồ thị ở góc phần tư thứ III
 * - Tại x = -a (120): đồ thị đạt cực đại và TIẾP XÚC với trục hoành Ox tại (-a, 0), nhãn -a nằm phía trên Ox
 * - Cắt trục Oy tại (0, c) phía dưới gốc O
 * - Tại x = a (216): đồ thị đạt cực tiểu phía dưới Ox, có đường nét đứt từ (a, 0) xuống điểm cực tiểu, nhãn a nằm phía trên Ox
 * - Tại x = b (264): đồ thị cắt trục Ox đi lên phía trên
 */
export const DiagramDe01GraphP2Q1: React.FC = () => {
  return (
    <svg
      viewBox="0 0 350 230"
      className="w-full max-w-[330px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrow-p2q1"
          viewBox="0 0 12 10"
          refX="10"
          refY="5"
          markerWidth="7"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 12 5 L 0 9 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Axes Ox, Oy */}
      <line
        x1="34"
        y1="78"
        x2="318"
        y2="78"
        stroke="#0f172a"
        strokeWidth="1.7"
        markerEnd="url(#arrow-p2q1)"
      />
      <line
        x1="168"
        y1="212"
        x2="168"
        y2="20"
        stroke="#0f172a"
        strokeWidth="1.7"
        markerEnd="url(#arrow-p2q1)"
      />

      {/* Dashed projection lines from -b(74) and a(216) down to the curve */}
      <g stroke="#0f172a" strokeWidth="1.6" strokeDasharray="6,4">
        <line x1="74" y1="78" x2="74" y2="184" />
        <line x1="216" y1="78" x2="216" y2="188" />
      </g>

      {/* Smooth cubic curve y = f'(x):
          - Starts at (70, 200), passes through (74, 184)
          - Tangent to Ox at local maximum (-a, 0) = (120, 78)
          - Crosses Oy at (0, c) = (168, 133)
          - Reaches local minimum at (a, f'(a)) = (216, 188)
          - Crosses Ox at (b, 0) = (264, 78) and rises to (273, 36) */}
      <path
        d="M 70 200 C 83 136, 101 78, 120 78 C 139 78, 153 111, 168 133 C 183 155, 197 188, 216 188 C 235 188, 252 132, 264 78 C 268 61, 270 48, 273 36"
        fill="none"
        stroke="#0f172a"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      {/* Labels in Times New Roman Italic */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="19"
        fontStyle="italic"
        fill="#0f172a"
      >
        <text x="150" y="32">y</text>
        <text x="305" y="96">x</text>
        <text x="172" y="100">O</text>
        <text x="45" y="98">
          <tspan fontStyle="normal">−</tspan>b
        </text>
        <text x="104" y="71">
          <tspan fontStyle="normal">−</tspan>a
        </text>
        <text x="154" y="143">c</text>
        <text x="211" y="71">a</text>
        <text x="268" y="100">b</text>
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 2: Lưới ô vuông 3x3 đánh số 1..9 chuẩn TikZ
 */
export const DiagramDe01Grid3x3: React.FC = () => {
  const cells = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  return (
    <svg
      viewBox="0 0 240 150"
      className="w-full max-w-[230px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15"
        y="15"
        width="210"
        height="120"
        fill="#ffffff"
        stroke="#0f172a"
        strokeWidth="2"
      />
      {/* Horizontal lines */}
      <line x1="15" y1="55" x2="225" y2="55" stroke="#0f172a" strokeWidth="1.6" />
      <line x1="15" y1="95" x2="225" y2="95" stroke="#0f172a" strokeWidth="1.6" />
      {/* Vertical lines */}
      <line x1="85" y1="15" x2="85" y2="135" stroke="#0f172a" strokeWidth="1.6" />
      <line x1="155" y1="15" x2="155" y2="135" stroke="#0f172a" strokeWidth="1.6" />

      {/* Numbers 1..9 in Times New Roman */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="24"
        fill="#0f172a"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {cells.map((row, rIdx) =>
          row.map((num, cIdx) => (
            <text
              key={num}
              x={15 + cIdx * 70 + 35}
              y={15 + rIdx * 40 + 20}
            >
              {num}
            </text>
          ))
        )}
      </g>
    </svg>
  );
};

/**
 * Phần III - Câu 4: Tứ diện ABCD với M là trung điểm AB chuẩn TikZ
 * Quy tắc hình học không gian:
 * - Hai mặt trước là (ABC) và (ACD): các cạnh AB, BC, CD, DA, AC nhìn thấy -> NÉT LIỀN.
 * - Mặt sau là (ABD) và mặt đáy là (BCD): cạnh đáy phía sau BD và đoạn thẳng MD (nằm trong mặt sau ABD) bị che khuất -> NÉT ĐỨT.
 */
export const DiagramDe01TetrahedronABCD: React.FC = () => {
  // Coordinates:
  // A = (140, 32)
  // B = (62, 152)
  // C = (164, 206)
  // D = (246, 144)
  // M = midpoint(A, B) = (101, 92)
  return (
    <svg
      viewBox="0 0 300 240"
      className="w-full max-w-[280px] h-auto select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Subtle shading on base BCD */}
      <polygon
        points="62,152 164,206 246,144"
        fill="#fef08a"
        fillOpacity="0.65"
      />

      {/* Hidden dashed segments on back face (ABD): BD and MD */}
      <g
        stroke="#1e293b"
        strokeWidth="1.5"
        strokeDasharray="5,4"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="62" y1="152" x2="246" y2="144" />
        <line x1="101" y1="92" x2="246" y2="144" />
      </g>

      {/* Visible solid edges: AB, AC, AD, BC, CD */}
      <g
        stroke="#0f172a"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="140" y1="32" x2="62" y2="152" />
        <line x1="140" y1="32" x2="164" y2="206" />
        <line x1="140" y1="32" x2="246" y2="144" />
        <line x1="62" y1="152" x2="164" y2="206" />
        <line x1="164" y1="206" x2="246" y2="144" />
      </g>

      {/* Vertices dots */}
      <g fill="#0f172a">
        <circle cx="140" cy="32" r="2.5" />
        <circle cx="62" cy="152" r="2.5" />
        <circle cx="164" cy="206" r="2.5" />
        <circle cx="246" cy="144" r="2.5" />
        <circle cx="101" cy="92" r="2.6" />
      </g>

      {/* Labels in Times New Roman Italic */}
      <g
        fontFamily="'Times New Roman', Times, serif"
        fontSize="17"
        fontStyle="italic"
        fill="#0f172a"
        fontWeight="600"
      >
        <text x="135" y="23">A</text>
        <text x="44" y="156">B</text>
        <text x="159" y="225">C</text>
        <text x="253" y="148">D</text>
        <text x="80" y="89">M</text>
      </g>
    </svg>
  );
};
