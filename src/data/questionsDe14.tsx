import { Question } from '../types';

export const QUESTIONS_DE14: Question[] = [
  // ==================== PHẦN I (Câu 1 - Câu 12) ====================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Đồ thị của hàm số nào dưới đây có dạng như đường cong trong hình vẽ?',
    diagramType: 'DE14_GRAPH_P1_Q1',
    options: [
      { key: 'A', text: '$y = \\frac{2x-1}{2x+1}$.' },
      { key: 'B', text: '$y = \\frac{x+1}{x-1}$.' },
      { key: 'C', text: '$y = \\frac{2x+1}{2x-1}$.' },
      { key: 'D', text: '$y = \\frac{2x+1}{x-1}$.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dựa vào đồ thị, hàm số có tiệm cận đứng $x = 1$, tiệm cận ngang $y = 1$, đi qua các điểm $(-1; 0)$, $(0; -1)$ và $(2; 3)$.\nThay tọa độ $(2; 3)$ vào các phương án, chỉ có hàm số $y = \\frac{x+1}{x-1}$ thỏa mãn ($\\frac{2+1}{2-1} = 3$). Chọn B.',
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hình hộp $ABCD.A\'B\'C\'D\'$ tâm $O$. Gọi $I, I\'$ lần lượt là tâm của hình bình hành $ABCD, A\'B\'C\'D\'$ (hình vẽ). Khẳng định nào sau đây sai?',
    diagramType: 'DE14_BOX_P1_Q2',
    options: [
      { key: 'A', text: '$\\overrightarrow{AC\'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA\'}$.' },
      { key: 'B', text: '$\\overrightarrow{OI} + \\overrightarrow{OI\'} = \\vec{0}$.' },
      { key: 'C', text: '$\\overrightarrow{AB} + \\overrightarrow{AA\'} = \\overrightarrow{AD} + \\overrightarrow{DD\'}$.' },
      { key: 'D', text: '$\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CC\'} = \\overrightarrow{AD\'} + \\overrightarrow{D\'O} + \\overrightarrow{OC\'}$.' },
    ],
    correctAnswer: 'C',
    explanation:
      '• A đúng theo quy tắc hình hộp.\n• B đúng vì $O$ là trung điểm của đoạn $II\'$.\n• C sai vì $\\overrightarrow{AB} + \\overrightarrow{AA\'} = \\overrightarrow{AB\'}$, còn $\\overrightarrow{AD} + \\overrightarrow{DD\'} = \\overrightarrow{AD\'}$, hai vectơ $\\overrightarrow{AB\'}$ và $\\overrightarrow{AD\'}$ không bằng nhau.\n• D đúng vì hai vế đều bằng $\\overrightarrow{AC\'}$. Chọn C.',
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Mỗi ngày bác Lan đều đi bộ để rèn luyện sức khoẻ. Quãng đường đi bộ mỗi ngày (đơn vị: $\\text{km}$) của bác Lan trong $20$ ngày được thống kê lại ở bảng sau:\nĐộ lệch chuẩn của mẫu số liệu ghép nhóm có giá trị gần nhất với giá trị nào dưới đây?',
    diagramType: 'DE14_TABLE_P1_Q3',
    options: [
      { key: 'A', text: '$3,41$.' },
      { key: 'B', text: '$0,36$.' },
      { key: 'C', text: '$0,13$.' },
      { key: 'D', text: '$0,017$.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Cỡ mẫu $n = 20$. Giá trị đại diện của các nhóm lần lượt là $2,85; 3,15; 3,45; 3,75; 4,05$.\nSố trung bình cộng:\n$\\bar{x} = \\frac{3\\cdot 2,85 + 6\\cdot 3,15 + 5\\cdot 3,45 + 4\\cdot 3,75 + 2\\cdot 4,05}{20} = 3,39$.\nPhương sai:\n$s^2 = \\frac{3(2,85)^2 + 6(3,15)^2 + 5(3,45)^2 + 4(3,75)^2 + 2(4,05)^2}{20} - (3,39)^2 = 11,6235 - 11,4921 = 0,1314$.\nĐộ lệch chuẩn: $s = \\sqrt{0,1314} \\approx 0,3625 \\approx 0,36$. Chọn B.',
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đồ thị là đường cong trong hình dưới đây. Hàm số đã cho đồng biến trên khoảng nào dưới đây?',
    diagramType: 'DE14_GRAPH_P1_Q4',
    options: [
      { key: 'A', text: '$(0; 1)$.' },
      { key: 'B', text: '$(-1; 1)$.' },
      { key: 'C', text: '$(-\\infty; 1)$.' },
      { key: 'D', text: '$(0; +\\infty)$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Quan sát đồ thị hàm số $y = f(x)$, trên khoảng $(0; 1)$ đồ thị đi lên từ trái sang phải (từ $-1$ lên $1$) nên hàm số đồng biến trên khoảng $(0; 1)$. Chọn A.',
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (2; 2; 3)$, $\\vec{b} = \\vec{j} - 2\\vec{k}$. Tính tọa độ vectơ $\\vec{u} = \\vec{a} + \\vec{b}$.',
    options: [
      { key: 'A', text: '$(3; 2; 1)$.' },
      { key: 'B', text: '$(2; 3; 1)$.' },
      { key: 'C', text: '$(2; 1; 5)$.' },
      { key: 'D', text: '$(3; 0; 3)$.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ta có $\\vec{b} = \\vec{j} - 2\\vec{k} = (0; 1; -2)$.\nKhi đó $\\vec{u} = \\vec{a} + \\vec{b} = (2 + 0; 2 + 1; 3 - 2) = (2; 3; 1)$. Chọn B.',
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Tập nghiệm của bất phương trình $(2 - \\sqrt{3})^{x - 1} \\le (2 + \\sqrt{3})^{-x^2 + x + 9}$ là',
    options: [
      { key: 'A', text: '$(-\\infty; -4] \\cup [2; +\\infty)$.' },
      { key: 'B', text: '$(-\\infty; -2] \\cup [4; +\\infty)$.' },
      { key: 'C', text: '$[-2; 4]$.' },
      { key: 'D', text: '$[-4; 2]$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Vì $(2 - \\sqrt{3})(2 + \\sqrt{3}) = 1$ nên $2 + \\sqrt{3} = (2 - \\sqrt{3})^{-1}$.\nBất phương trình trở thành: $(2 - \\sqrt{3})^{x - 1} \\le (2 - \\sqrt{3})^{x^2 - x - 9}$.\nDo cơ số $0 < 2 - \\sqrt{3} < 1$ nên:\n$x - 1 \\ge x^2 - x - 9 \\Leftrightarrow x^2 - 2x - 8 \\le 0 \\Leftrightarrow -2 \\le x \\le 4$.\nVậy tập nghiệm là $[-2; 4]$. Chọn C.',
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Kết quả bài kiểm tra môn toán cuối học kỳ I của học sinh khối 12 một trường THPT được ghi lại ở bảng sau:\nDựa vào bảng số liệu trên, giáo viên toán có thể nhận định $75\\%$ học sinh trong khối có điểm kiểm tra toán cuối học kỳ I từ bao nhiêu trở lên?',
    diagramType: 'DE14_TABLE_P1_Q7',
    options: [
      { key: 'A', text: '$4,0$.' },
      { key: 'B', text: '$5,0$.' },
      { key: 'C', text: '$4,5$.' },
      { key: 'D', text: '$5,5$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Cỡ mẫu $n = 24 + 67 + 136 + 167 + 106 = 500$.\nĐể $75\\%$ học sinh có điểm kiểm tra từ mức đó trở lên (tức $25\\%$ học sinh có điểm thấp hơn), giá trị cần tìm chính là tứ phân vị thứ nhất $Q_1$.\nTa có $\\frac{n}{4} = 125$. Tần số tích lũy của $2$ nhóm đầu là $24 + 67 = 91 < 125$; của $3$ nhóm đầu là $91 + 136 = 227 \\ge 125$.\nNhóm chứa $Q_1$ là $[4; 6)$:\n$Q_1 = 4 + \\frac{125 - 91}{136} \\cdot 2 = 4 + 0,5 = 4,5$. Chọn C.',
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Trong không gian $Oxyz$, cho vectơ $\\vec{u} = (1; 1; -\\sqrt{2})$, $\\vec{v} = (1; 0; m)$. Có bao nhiêu giá trị của $m$ để góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ bằng $60^\\circ$?',
    options: [
      { key: 'A', text: '$4$.' },
      { key: 'B', text: '$2$.' },
      { key: 'C', text: '$0$.' },
      { key: 'D', text: '$1$.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Ta có $\\cos 60^\\circ = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} \\Leftrightarrow \\frac{1}{2} = \\frac{1 - m\\sqrt{2}}{\\sqrt{1 + 1 + 2} \\cdot \\sqrt{1 + m^2}} \\Leftrightarrow 1 - m\\sqrt{2} = \\sqrt{1 + m^2}$.\nHệ tương đương: $\\begin{cases} 1 - m\\sqrt{2} \\ge 0 \\\\ (1 - m\\sqrt{2})^2 = 1 + m^2 \\end{cases} \\Leftrightarrow \\begin{cases} m \\le \\frac{1}{\\sqrt{2}} \\\\ m^2 - 2\\sqrt{2}m = 0 \\end{cases} \\Leftrightarrow m = 0$ (giá trị $m = 2\\sqrt{2}$ bị loại).\nVậy chỉ có đúng $1$ giá trị của $m$. Chọn D.',
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Số điểm cực tiểu của đồ thị hàm số $y = \\frac{1}{5}x^5 - \\frac{3}{4}x^4 + \\frac{2}{3}x^3 + \\frac{1}{2}$ là',
    options: [
      { key: 'A', text: '$0$.' },
      { key: 'B', text: '$3$.' },
      { key: 'C', text: '$2$.' },
      { key: 'D', text: '$1$.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Ta có $y\' = x^4 - 3x^3 + 2x^2 = x^2(x - 1)(x - 2)$.\nPhương trình $y\' = 0$ có các nghiệm $x = 0$ (nghiệm kép, $y\'$ không đổi dấu), $x = 1$ ($y\'$ đổi dấu từ $+$ sang $-$), $x = 2$ ($y\'$ đổi dấu từ $-$ sang $+$).\nVậy đồ thị hàm số có đúng $1$ điểm cực tiểu (tại $x = 2$). Chọn D.',
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Trong không gian $Oxyz$, cho vectơ $\\overrightarrow{MN} = (2; -1; 5)$ và điểm $N(0; 3; -1)$. Điểm $M$ có tọa độ là:',
    options: [
      { key: 'A', text: '$(-2; 4; -6)$.' },
      { key: 'B', text: '$(-2; -2; -4)$.' },
      { key: 'C', text: '$(2; -4; 6)$.' },
      { key: 'D', text: '$(2; 2; 4)$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Vì $\\overrightarrow{MN} = (x_N - x_M; y_N - y_M; z_N - z_M) = (2; -1; 5)$ nên:\n$\\begin{cases} x_M = 0 - 2 = -2 \\\\ y_M = 3 - (-1) = 4 \\\\ z_M = -1 - 5 = -6 \\end{cases} \\Rightarrow M(-2; 4; -6)$. Chọn A.',
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho cấp số cộng $(u_n)$ có $u_1 = \\frac{1}{4}$ và $d = -\\frac{1}{4}$. Gọi $S_5$ là tổng $5$ số hạng đầu tiên của cấp số cộng đã cho. Mệnh đề nào sau đây đúng?',
    options: [
      { key: 'A', text: '$S_5 = \\frac{5}{4}$.' },
      { key: 'B', text: '$S_5 = -\\frac{5}{4}$.' },
      { key: 'C', text: '$S_5 = \\frac{4}{5}$.' },
      { key: 'D', text: '$S_5 = -\\frac{4}{5}$.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tổng $5$ số hạng đầu tiên của cấp số cộng là:\n$S_5 = 5u_1 + \\frac{5 \\cdot 4}{2}d = 5 \\cdot \\frac{1}{4} + 10 \\cdot \\left(-\\frac{1}{4}\\right) = -\\frac{5}{4}$. Chọn B.',
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho các điểm $A(1; -2; 3)$, $B(-2; 1; 2)$, $C(3; -1; 2)$. Khẳng định nào sau đây đúng?',
    options: [
      { key: 'A', text: 'Ba điểm $A, B, C$ thẳng hàng.' },
      { key: 'B', text: '$BC = 8$.' },
      { key: 'C', text: 'Trung điểm đoạn thẳng $AB$ có tọa độ là $\\left(-\\frac{1}{2}; -\\frac{1}{2}; \\frac{5}{2}\\right)$.' },
      { key: 'D', text: 'Tích vô hướng của hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ bằng $6$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Tọa độ trung điểm của đoạn thẳng $AB$ là $\\left(\\frac{1 + (-2)}{2}; \\frac{-2 + 1}{2}; \\frac{3 + 2}{2}\\right) = \\left(-\\frac{1}{2}; -\\frac{1}{2}; \\frac{5}{2}\\right)$.\n(Các câu khác sai vì $\\overrightarrow{AB} = (-3; 3; -1), \\overrightarrow{AC} = (2; 1; -1)$ không cùng phương, $\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = -2 \\neq 6$, và $BC = \\sqrt{29} \\neq 8$). Chọn C.',
  },

  // ==================== PHẦN II (Câu 1 - Câu 4) ====================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 1. Thống kê chiều cao của $40$ học sinh của một lớp (đơn vị đo: $\\text{cm}$) ta được mẫu số liệu ghép nhóm như sau:',
    diagramType: 'DE14_TABLE_P2_Q1',
    statements: [
      {
        key: 'a',
        text: 'Tần số tích lũy của nhóm $[165; 170)$ là $17$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Mốt (làm tròn đến hàng phần mười) của mẫu số liệu trên là $165,6$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Số trung bình cộng (làm tròn đến hàng phần mười) của mẫu số liệu trên là $165,5$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Chọn ngẫu nhiên $2$ học sinh từ lớp này, xác suất để hai học sinh được chọn có chiều cao thuộc hai nhóm khác nhau là $\\frac{217}{780}$.',
        correct: false,
      },
    ],
    explanation:
      '• a) Sai: Tần số tích lũy của nhóm $[165; 170)$ là $5 + 12 + 16 = 33 \\neq 17$.\n• b) Sai: Nhóm chứa mốt là $[165; 170)$ (tần số lớn nhất là $16$). Khi đó:\n$M_o = 165 + \\frac{16 - 12}{(16 - 12) + (16 - 7)} \\cdot 5 = 165 + \\frac{20}{13} \\approx 166,5 \\neq 165,6$.\n• c) Sai: Giá trị đại diện các nhóm lần lượt là $157,5; 162,5; 167,5; 172,5$. Số trung bình cộng:\n$\\bar{x} = \\frac{5\\cdot 157,5 + 12\\cdot 162,5 + 16\\cdot 167,5 + 7\\cdot 172,5}{40} = \\frac{6625}{40} = 165,625 \\approx 165,6 \\neq 165,5$.\n• d) Sai: Số cách chọn $2$ học sinh từ $40$ học sinh là $C_{40}^2 = 780$.\nSố cách chọn $2$ học sinh cùng nhóm là $C_5^2 + C_{12}^2 + C_{16}^2 + C_7^2 = 217$.\nSuy ra xác suất để hai học sinh thuộc hai nhóm khác nhau là $1 - \\frac{217}{780} = \\frac{563}{780} \\neq \\frac{217}{780}$.',
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 2. Trong không gian với hệ trục tọa độ $Oxyz$ (đơn vị: $\\text{m}$), cho hình hộp chữ nhật $ABCD.A_1B_1C_1D_1$ có $AB = AD = 2$, $AA_1 = 1$ như hình vẽ. Đỉnh $D$ trùng với gốc tọa độ $O$; các tia $DA, DC, DD_1$ lần lượt trùng với các tia $Ox, Oy, Oz$. Điểm $M$ di chuyển trên đoạn thẳng $B_1D_1$ (kể cả hai đầu mút).',
    diagramType: 'DE14_BOX_P2_Q2',
    statements: [
      {
        key: 'a',
        text: 'Khi $M$ là trung điểm của $B_1D_1$ thì $C_1M \\perp (BB_1D_1D)$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Khi $M$ là trung điểm của $B_1D_1$ thì cosin của góc giữa hai đường thẳng $MC_1$ và $BC$ bằng $\\frac{\\sqrt{2}}{3}$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Khi điểm $M$ di chuyển trên đoạn thẳng $B_1D_1$ thì thể tích khối tứ diện $C_1BDM$ không đổi.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Giá trị nhỏ nhất của khoảng cách từ điểm $M$ đến đường thẳng $BC_1$ bằng $\\frac{\\sqrt{6}}{3}$.',
        correct: true,
      },
    ],
    explanation:
      'Tọa độ các đỉnh: $D(0;0;0), A(2;0;0), C(0;2;0), B(2;2;0), D_1(0;0;1), A_1(2;0;1), C_1(0;2;1), B_1(2;2;1)$.\n• a) Đúng: Vì $A_1B_1C_1D_1$ là hình vuông nên khi $M$ là trung điểm $B_1D_1$ ta có $C_1M \\perp B_1D_1$. Mặt khác $BB_1 \\perp (A_1B_1C_1D_1) \\Rightarrow BB_1 \\perp C_1M$. Do đó $C_1M \\perp (BB_1D_1D)$.\n• b) Sai: Khi $M(1;1;1)$, ta có $\\overrightarrow{MC_1} = (-1; 1; 0)$ và $\\overrightarrow{BC} = (-2; 0; 0)$, suy ra $\\cos(MC_1, BC) = \\frac{|2|}{\\sqrt{2}\\cdot 2} = \\frac{\\sqrt{2}}{2} \\neq \\frac{\\sqrt{2}}{3}$.\n• c) Đúng: Vì $B_1D_1 \\parallel BD \\subset (C_1BD)$ nên $B_1D_1 \\parallel (C_1BD)$, suy ra khoảng cách từ $M \\in B_1D_1$ đến mặt phẳng $(C_1BD)$ không đổi. Do đó thể tích tứ diện $C_1BDM$ không đổi.\n• d) Đúng: Điểm $M \\in B_1D_1$ có tọa độ $M(t; t; 1)$ ($0 \\le t \\le 2$). Đường thẳng $BC_1$ qua $C_1(0;2;1)$ có VTCP $\\vec{u} = \\overrightarrow{C_1B} = (2; 0; -1)$.\nTa có $\\overrightarrow{C_1M} = (t; t - 2; 0) \\Rightarrow [\\overrightarrow{C_1M}, \\vec{u}] = (2 - t; t; 4 - 2t)$.\nKhoảng cách $d(M, BC_1) = \\sqrt{\\frac{(2-t)^2 + t^2 + (4-2t)^2}{5}} = \\sqrt{\\frac{6t^2 - 20t + 20}{5}} = \\sqrt{\\frac{6\\left(t - \\frac{5}{3}\\right)^2 + \\frac{10}{3}}{5}} \\ge \\sqrt{\\frac{2}{3}} = \\frac{\\sqrt{6}}{3}$ (đạt tại $t = \\frac{5}{3} \\in [0; 2]$).',
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 3. Cho hàm số bậc ba $f(x) = ax^3 + bx^2 + cx + d$, $(a \\neq 0)$ liên tục trên $\\mathbb{R}$ và có đồ thị như hình vẽ.',
    diagramType: 'DE14_GRAPH_P2_Q3',
    statements: [
      {
        key: 'a',
        text: 'Trong bốn giá trị $a, b, c, d$ có đúng một giá trị bằng $0$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Hàm số $y = f(x)$ là hàm số lẻ trên tập $\\mathbb{R}$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Hoành độ điểm cực tiểu của đồ thị hàm số $y = f(x)$ là $x = -1$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Số nghiệm thực của phương trình $f(x) = \\frac{2026}{2027}$ là $3$.',
        correct: true,
      },
    ],
    explanation:
      'Đồ thị đi qua gốc tọa độ $O(0;0)$ nên $d = 0$; đạt cực tiểu tại $(-1; -2)$ và đạt cực đại tại $(1; 2)$ nên hàm số là $f(x) = -x^3 + 3x$ ($a = -1, b = 0, c = 3, d = 0$).\n• a) Sai: Có $2$ giá trị bằng $0$ là $b = 0$ và $d = 0$.\n• b) Đúng: Vì $f(-x) = -f(x), \\forall x \\in \\mathbb{R}$ nên hàm số là hàm số lẻ trên $\\mathbb{R}$.\n• c) Đúng: Điểm cực tiểu của đồ thị hàm số là $(-1; -2)$, có hoành độ $x = -1$.\n• d) Đúng: Vì $-2 < \\frac{2026}{2027} < 2$ nên đường thẳng $y = \\frac{2026}{2027}$ cắt đồ thị tại $3$ điểm phân biệt.',
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 4. Hàm số $f(x) = x\\ln x - 1$ có nghiệm $x_1$ và hàm số $g(x) = e^x(x - 1) - e$ có nghiệm $x_2$. Khi đó:',
    statements: [
      {
        key: 'a',
        text: '$e^{x_2}\\ln x_1 = e^2$.',
        correct: false,
      },
      {
        key: 'b',
        text: '$e^{x_2 - 1} + \\frac{1}{x_1} > 2$.',
        correct: true,
      },
      {
        key: 'c',
        text: '$\\ln x_1 - x_2 = 1$.',
        correct: false,
      },
      {
        key: 'd',
        text: '$x_2 + \\frac{1}{1 + \\ln x_1} \\le 2$.',
        correct: false,
      },
    ],
    explanation:
      'Ta có $x_1\\ln x_1 = 1 \\Leftrightarrow \\ln x_1 \\cdot e^{\\ln x_1} = 1$ (với $x_1 > 1$) và $e^{x_2}(x_2 - 1) = e \\Leftrightarrow (x_2 - 1)e^{x_2 - 1} = 1$ (với $x_2 > 1$).\nXét hàm đặc trưng $\\varphi(t) = te^t$ đồng biến trên $(0; +\\infty)$, từ $\\varphi(\\ln x_1) = \\varphi(x_2 - 1) = 1$ suy ra:\n$\\ln x_1 = x_2 - 1 \\Leftrightarrow x_2 - \\ln x_1 = 1 \\Leftrightarrow x_1 = e^{x_2 - 1}$.\n• a) Sai: $e^{x_2}\\ln x_1 = e \\cdot e^{x_2 - 1}\\ln x_1 = e \\cdot x_1\\ln x_1 = e \\neq e^2$.\n• b) Đúng: Vì $x_1 > 1$ nên theo BĐT Cauchy: $e^{x_2 - 1} + \\frac{1}{x_1} = x_1 + \\frac{1}{x_1} > 2$.\n• c) Sai: $\\ln x_1 - x_2 = -1 \\neq 1$.\n• d) Sai: Vì $x_2 = 1 + \\ln x_1 > 1$ nên $x_2 + \\frac{1}{1 + \\ln x_1} = x_2 + \\frac{1}{x_2} > 2$.',
  },

  // ==================== PHẦN III (Câu 1 - Câu 6) ====================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 1. Như hình vẽ, một khối được xếp từ các quả cầu có cùng kích thước.\nTầng thứ nhất có $ab$ quả cầu, tầng thứ hai có $(a+1)(b+1)$ quả cầu, tầng thứ ba có $(a+2)(b+2)$ quả cầu, $\\dots$ Cứ tiếp tục như vậy, tầng dưới cùng có $cd$ quả cầu. Khối xếp gồm tất cả $n$ tầng.\nTổng số quả cầu trong khối được tính bởi công thức $\\frac{[(2b+d)a + (2d+b)c + (c-a)]n}{6}$.\nBiết một khối xếp như trên gồm $8$ tầng và có tổng cộng $240$ quả cầu. Số quả cầu ở tầng thứ nhất là',
    diagramType: 'DE14_SPHERES_P3_Q1',
    correctAnswer: '2',
    explanation:
      'Với $n = 8$ tầng, tầng dưới cùng (tầng thứ $8$) có $c = a + 7$ và $d = b + 7$.\nThay $n = 8, c = a + 7, d = b + 7$ vào công thức tổng số quả cầu:\n$\\frac{[(3b + 7)a + (3b + 14)(a + 7) + 7] \\cdot 8}{6} = 240 \\Leftrightarrow 6ab + 21a + 21b + 105 = 180 \\Leftrightarrow 2ab + 7a + 7b = 25 \\Leftrightarrow (2a + 7)(2b + 7) = 99$.\nVì $a, b \\in \\mathbb{N}^* \\Rightarrow 2a + 7 \\ge 9, 2b + 7 \\ge 9$ và $99 = 9 \\cdot 11$, nên $\\{2a + 7; 2b + 7\\} = \\{9; 11\\} \\Leftrightarrow \\{a; b\\} = \\{1; 2\\}$.\nVậy số quả cầu ở tầng thứ nhất là $ab = 1 \\cdot 2 = 2$.',
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 2. Cho tứ diện đều $ABCD$ như hình vẽ. Điểm $M$ nằm trên cạnh $AC$ sao cho $2\\overrightarrow{AM} = \\overrightarrow{MC}$, điểm $N$ là trung điểm của cạnh $AD$.\nGọi $\\theta$ là góc tạo bởi hai đường thẳng $BM$ và $CN$. Tính $\\sin\\theta$. Biết $0^\\circ \\le \\theta \\le 90^\\circ$.',
    diagramType: 'DE14_TETRAHEDRON_P3_Q2',
    correctAnswer: '1',
    explanation:
      'Đặt $\\vec{a} = \\overrightarrow{AB}, \\vec{b} = \\overrightarrow{AC}, \\vec{c} = \\overrightarrow{AD}$ và chọn cạnh tứ diện đều bằng $6$.\nKhi đó $|\\vec{a}| = |\\vec{b}| = |\\vec{c}| = 6$ và $\\vec{a}\\cdot\\vec{b} = \\vec{b}\\cdot\\vec{c} = \\vec{c}\\cdot\\vec{a} = 6 \\cdot 6 \\cdot \\cos 60^\\circ = 18$.\nTừ giả thiết, $\\overrightarrow{AM} = \\frac{1}{3}\\vec{b} \\Rightarrow \\overrightarrow{BM} = \\frac{1}{3}\\vec{b} - \\vec{a}$ và $\\overrightarrow{AN} = \\frac{1}{2}\\vec{c} \\Rightarrow \\overrightarrow{CN} = \\frac{1}{2}\\vec{c} - \\vec{b}$.\nTa có:\n$\\overrightarrow{BM} \\cdot \\overrightarrow{CN} = \\left(\\frac{1}{3}\\vec{b} - \\vec{a}\\right) \\cdot \\left(\\frac{1}{2}\\vec{c} - \\vec{b}\\right) = \\frac{1}{6}\\vec{b}\\cdot\\vec{c} - \\frac{1}{3}\\vec{b}^2 - \\frac{1}{2}\\vec{a}\\cdot\\vec{c} + \\vec{a}\\cdot\\vec{b} = 3 - 12 - 9 + 18 = 0$.\nDo đó $BM \\perp CN \\Rightarrow \\theta = 90^\\circ \\Rightarrow \\sin\\theta = \\sin 90^\\circ = 1$.',
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 3. Trong không gian tọa độ $Oxyz$, cho điểm $P(3; a; b)$. Gọi $A, B$ lần lượt là các điểm đối xứng của $P$ qua mặt phẳng $(Oxy)$ và mặt phẳng $(Oxz)$. Từ điểm $P$, hạ các đường vuông góc đến trục $Oy$, trục $Oz$, có chân lần lượt là $Q, R$. Biết diện tích tam giác $PAB$ bằng $20$, hãy tính thể tích tứ diện $OPQR$. Trong đó $a > 0, b > 0$, và $O$ là gốc tọa độ.',
    correctAnswer: '5',
    explanation:
      'Ta có $A(3; a; -b)$, $B(3; -a; b)$ nên $\\overrightarrow{PA} = (0; 0; -2b)$, $\\overrightarrow{PB} = (0; -2a; 0)$.\nTam giác $PAB$ vuông tại $P$ có diện tích $S_{\\triangle PAB} = \\frac{1}{2} \\cdot 2a \\cdot 2b = 2ab = 20 \\Leftrightarrow ab = 10$.\nChân đường vuông góc hạ từ $P$ xuống $Oy, Oz$ là $Q(0; a; 0)$ và $R(0; 0; b)$.\nTam giác $OQR$ nằm trong mặt phẳng $(Oyz)$, vuông tại $O$ có diện tích $S_{\\triangle OQR} = \\frac{1}{2}ab$, và khoảng cách từ $P(3; a; b)$ đến $(Oyz)$ bằng $3$.\nVậy thể tích tứ diện $OPQR$ là $V_{OPQR} = \\frac{1}{3} \\cdot S_{\\triangle OQR} \\cdot 3 = \\frac{1}{2}ab = \\frac{1}{2} \\cdot 10 = 5$.',
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 4. Cột đầu của sợi dây được cố định vào tường. Người ta muốn sử dụng hết $10$ hạt màu đỏ và $5$ hạt màu xanh có cùng hình dạng, kích thước để làm một vật trang trí bằng cách xâu chúng vào sợi dây.\nBiết rằng không có $4$ hạt màu đỏ trở lên đứng liên tiếp nhau. Hỏi có bao nhiêu cách xâu hạt khác nhau?',
    diagramType: 'DE14_BEADS_P3_Q4',
    correctAnswer: '546',
    explanation:
      'Xếp $5$ hạt màu xanh tạo ra $6$ khoảng trống (gồm trước hạt xanh đầu tiên, giữa các hạt xanh và sau hạt xanh cuối cùng).\nGọi $x_1, x_2, \\dots, x_6$ là số hạt màu đỏ được xếp vào $6$ khoảng trống đó.\nTheo đề bài: $x_1 + x_2 + x_3 + x_4 + x_5 + x_6 = 10$ với $0 \\le x_i \\le 3$ ($\\forall i = 1, \\dots, 6$).\nĐặt $y_i = 3 - x_i$ ($0 \\le y_i \\le 3$), ta có $y_1 + y_2 + y_3 + y_4 + y_5 + y_6 = 8$.\nTheo nguyên lý bù trừ, số nghiệm nguyên thỏa mãn $0 \\le y_i \\le 3$ là:\n$C_{8+6-1}^{6-1} - C_6^1 \\cdot C_{4+6-1}^{6-1} + C_6^2 \\cdot 1 = C_{13}^5 - 6 \\cdot C_9^5 + 15 = 1287 - 756 + 15 = 546$ (cách).',
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 5. Cho hàm số bậc ba $f(x) = x^3 + bx^2 + cx$, trong đó $b, c$ là các tham số thực. Đạo hàm của hàm số là $f\'(x)$. Đặt $g(x) = f(x) - f\'(x)$. Nếu $y = g(x)$ đồng biến trên $\\mathbb{R}$, thì giá trị lớn nhất của $\\frac{b^2}{c^2 + 9}$ là bao nhiêu (làm tròn kết quả đến hàng phần trăm)?',
    correctAnswer: '0.21',
    explanation:
      'Ta có $g(x) = x^3 + (b - 3)x^2 + (c - 2b)x - c \\Rightarrow g\'(x) = 3x^2 + 2(b - 3)x + (c - 2b)$.\nHàm số $y = g(x)$ đồng biến trên $\\mathbb{R} \\Leftrightarrow g\'(x) \\ge 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\Delta\'_{g\'} = (b - 3)^2 - 3(c - 2b) \\le 0 \\Leftrightarrow b^2 + 9 \\le 3c \\Leftrightarrow b^2 \\le 3c - 9$ (suy ra $c \\ge 3$).\nKhi đó:\n$\\frac{b^2}{c^2 + 9} \\le \\frac{3(c - 3)}{(c - 3)^2 + 6(c - 3) + 18} = \\frac{3}{(c - 3) + \\frac{18}{c - 3} + 6} \\le \\frac{3}{2\\sqrt{18} + 6} = \\frac{\\sqrt{2} - 1}{2} \\approx 0,21$.\nDấu "$=$" xảy ra khi $c = 3 + 3\\sqrt{2}$ và $b = \\pm 3\\sqrt[4]{2}$.',
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 6. Có một tấm gỗ hình tròn. Dùng thước vuông để đo như hình vẽ, thu được các kích thước $10\\text{ cm}$ và $5\\text{ cm}$. Người ta cắt tấm gỗ tròn thành một tấm gỗ hình tứ giác nội tiếp đường tròn. Biết một góc trong $\\alpha$ của tứ giác thỏa mãn $\\cos\\alpha = \\frac{1}{3}$.\nChu vi lớn nhất của tấm gỗ hình tứ giác là bao nhiêu centimet (làm tròn kết quả đến hàng phần trăm)?',
    diagramType: 'DE14_CIRCLE_RULER_P3_Q6',
    correctAnswer: '31.17',
    explanation:
      'Vì góc vuông của thước nội tiếp đường tròn nên đường kính của tấm gỗ tròn là $2R = \\sqrt{10^2 + 5^2} = 5\\sqrt{5}\\text{ (cm)}$.\nGọi tứ giác nội tiếp là $MNPQ$ có $\\widehat{M} = \\alpha$ ($\\cos\\alpha = \\frac{1}{3} \\Rightarrow \\sin\\alpha = \\frac{2\\sqrt{2}}{3}$) và góc đối $\\widehat{P} = 180^\\circ - \\alpha$ ($\\cos\\widehat{P} = -\\frac{1}{3}$).\nĐộ dài đường chéo $NQ = 2R\\sin\\alpha = 5\\sqrt{5} \\cdot \\frac{2\\sqrt{2}}{3} = \\frac{10\\sqrt{10}}{3}$.\n• Trong $\\triangle MNQ$: $NQ^2 = MN^2 + MQ^2 - 2MN\\cdot MQ\\cos\\alpha \\ge (MN + MQ)^2 - \\frac{8}{3} \\cdot \\frac{(MN + MQ)^2}{4} = \\frac{1}{3}(MN + MQ)^2 \\Rightarrow MN + MQ \\le NQ\\sqrt{3} = \\frac{10\\sqrt{30}}{3}$.\n• Trong $\\triangle NPQ$: $NQ^2 = NP^2 + PQ^2 - 2NP\\cdot PQ\\cos(180^\\circ - \\alpha) \\ge (NP + PQ)^2 - \\frac{4}{3} \\cdot \\frac{(NP + PQ)^2}{4} = \\frac{2}{3}(NP + PQ)^2 \\Rightarrow NP + PQ \\le NQ\\sqrt{\\frac{3}{2}} = \\frac{10\\sqrt{15}}{3}$.\nVậy chu vi lớn nhất của tứ giác là $\\frac{10\\sqrt{30} + 10\\sqrt{15}}{3} \\approx 31,17\\text{ (cm)}$.',
  },
];
