import { Question } from '../types';

export const QUESTIONS_DE12: Question[] = [
  // ==================== PHẦN I (Câu 1 - Câu 12) ====================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Đồ thị hàm số $y = \\frac{2x-3}{x-1}$ có đường tiệm cận ngang là',
    options: [
      { key: 'A', text: '$x = -1$.' },
      { key: 'B', text: '$y = -2$.' },
      { key: 'C', text: '$x = 1$.' },
      { key: 'D', text: '$y = 2$.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Ta có $\\lim_{x \\to \\pm\\infty} \\frac{2x-3}{x-1} = 2$.\nVậy đồ thị hàm số có đường tiệm cận ngang là $y = 2$. Chọn D.',
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 2$ và công bội $q = -3$. Tính $u_3$.',
    options: [
      { key: 'A', text: '$u_3 = 18$.' },
      { key: 'B', text: '$u_3 = 54$.' },
      { key: 'C', text: '$u_3 = -18$.' },
      { key: 'D', text: '$u_3 = -54$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Số hạng thứ $3$ của cấp số nhân là $u_3 = u_1 \\cdot q^2 = 2 \\cdot (-3)^2 = 18$. Chọn A.',
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Khảo sát thời gian tập thể dục của một số học sinh thu được mẫu số liệu ghép nhóm như sau:\nTính độ lệch chuẩn của mẫu số liệu ghép nhóm trên (kết quả làm tròn đến hàng đơn vị).',
    diagramType: 'DE12_TABLE_P1_Q3',
    options: [
      { key: 'A', text: '$12$.' },
      { key: 'B', text: '$14$.' },
      { key: 'C', text: '$15$.' },
      { key: 'D', text: '$13$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Cỡ mẫu $n = 10 + 15 + 22 + 26 + 20 + 17 = 110$.\nGiá trị đại diện các nhóm lần lượt là $5; 15; 25; 35; 45; 55$.\nSố trung bình cộng:\n$\\bar{x} = \\frac{10\\cdot 5 + 15\\cdot 15 + 22\\cdot 25 + 26\\cdot 35 + 20\\cdot 45 + 17\\cdot 55}{110} = \\frac{3570}{110} = \\frac{357}{11} \\approx 32,45$.\nPhương sai:\n$s^2 = \\frac{10\\cdot 5^2 + 15\\cdot 15^2 + 22\\cdot 25^2 + 26\\cdot 35^2 + 20\\cdot 45^2 + 17\\cdot 55^2}{110} - \\left(\\frac{357}{11}\\right)^2 = \\frac{14115}{11} - \\frac{127449}{121} = \\frac{27816}{121} \\approx 229,88$.\nĐộ lệch chuẩn: $s = \\sqrt{s^2} \\approx \\sqrt{229,88} \\approx 15,16 \\approx 15$. Chọn C.',
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Tập nghiệm của phương trình $\\sin x = \\frac{1}{2}$ là',
    options: [
      {
        key: 'A',
        text: '$\\left\\{\\frac{\\pi}{3} + k2\\pi; \\frac{2\\pi}{3} + k2\\pi \\mid k \\in \\mathbb{Z}\\right\\}$.',
      },
      {
        key: 'B',
        text: '$\\left\\{\\frac{\\pi}{6} + k\\pi; \\frac{5\\pi}{6} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}$.',
      },
      {
        key: 'C',
        text: '$\\left\\{\\frac{\\pi}{3} + k\\pi; \\frac{2\\pi}{3} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}$.',
      },
      {
        key: 'D',
        text: '$\\left\\{\\frac{\\pi}{6} + k2\\pi; \\frac{5\\pi}{6} + k2\\pi \\mid k \\in \\mathbb{Z}\\right\\}$.',
      },
    ],
    correctAnswer: 'D',
    explanation:
      'Ta có $\\sin x = \\frac{1}{2} \\Leftrightarrow \\sin x = \\sin\\frac{\\pi}{6} \\Leftrightarrow \\left[\\begin{array}{l} x = \\frac{\\pi}{6} + k2\\pi \\\\ x = \\frac{5\\pi}{6} + k2\\pi \\end{array}\\right. (k \\in \\mathbb{Z})$. Chọn D.',
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc và $OA = a, OB = 2a, OC = 3a$. Tính khoảng cách từ điểm $B$ đến mặt phẳng $(OAC)$.',
    options: [
      { key: 'A', text: '$a$.' },
      { key: 'B', text: '$\\sqrt{6}$.' },
      { key: 'C', text: '$3a$.' },
      { key: 'D', text: '$2a$.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Vì $OB \\perp OA$ và $OB \\perp OC$ nên $OB \\perp (OAC)$.\nDo đó khoảng cách từ $B$ đến mặt phẳng $(OAC)$ bằng $OB = 2a$. Chọn D.',
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Tính đạo hàm của hàm số $y = e^x + \\log x$.',
    options: [
      { key: 'A', text: '$y\' = e^x - \\frac{1}{x\\ln 10}$.' },
      { key: 'B', text: '$y\' = e^x + \\frac{1}{x}$.' },
      { key: 'C', text: '$y\' = e^x + \\frac{1}{x\\ln 10}$.' },
      { key: 'D', text: '$y\' = e^x - \\frac{1}{x}$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Với $x > 0$, ta có $(e^x)\' = e^x$ và $(\\log x)\' = (\\log_{10} x)\' = \\frac{1}{x\\ln 10}$.\nDo đó $y\' = e^x + \\frac{1}{x\\ln 10}$. Chọn C.',
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hàm số $f(x)$ xác định và có đạo hàm trên $\\mathbb{R}$ và có bảng biến thiên như sau:\nGiá trị cực đại của hàm số bằng',
    diagramType: 'DE12_BBT_P1_Q7',
    options: [
      { key: 'A', text: '$-2$.' },
      { key: 'B', text: '$0$.' },
      { key: 'C', text: '$-3$.' },
      { key: 'D', text: '$1$.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Dựa vào bảng biến thiên, hàm số đạt cực đại tại $x = -2$ và giá trị cực đại là $y_{\\text{CĐ}} = 1$. Chọn D.',
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho tập hợp $M = \\{x \\in \\mathbb{Z} \\mid 100 < 2^x < 1000\\}$. Số phần tử của $M$ là',
    options: [
      { key: 'A', text: '$3$.' },
      { key: 'B', text: '$4$.' },
      { key: 'C', text: '$9$.' },
      { key: 'D', text: 'Vô số.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ta có $2^6 = 64 < 100$, $2^7 = 128$, $2^8 = 256$, $2^9 = 512$, $2^{10} = 1024 > 1000$.\nDo $x \\in \\mathbb{Z}$ nên $M = \\{7; 8; 9\\}$, suy ra tập hợp $M$ có $3$ phần tử. Chọn A.',
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Tính thể tích khối chóp tam giác đều có cạnh đáy $2a$ và độ dài đường cao $a$.',
    options: [
      { key: 'A', text: '$\\frac{a^3\\sqrt{3}}{3}$.' },
      { key: 'B', text: '$\\frac{a^3}{12}$.' },
      { key: 'C', text: '$\\frac{a^3\\sqrt{3}}{4}$.' },
      { key: 'D', text: '$a^3\\sqrt{3}$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Diện tích đáy tam giác đều cạnh $2a$ là $S = \\frac{(2a)^2\\sqrt{3}}{4} = a^2\\sqrt{3}$.\nThể tích khối chóp là $V = \\frac{1}{3} S \\cdot h = \\frac{1}{3} \\cdot a^2\\sqrt{3} \\cdot a = \\frac{a^3\\sqrt{3}}{3}$. Chọn A.',
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hàm số $y = f(x) = ax^4 + bx^3 + cx^2 + dx + e$ có đạo hàm $f\'(x)$ và đồ thị hàm số $y = f\'(x)$ cắt trục hoành tại các điểm có hoành độ $-1; 0; 2$ như hình bên. Hỏi hàm số $y = f(x)$ đồng biến trên khoảng nào sau đây?',
    diagramType: 'DE12_GRAPH_P1_Q10',
    options: [
      { key: 'A', text: '$(-\\infty; -1)$.' },
      { key: 'B', text: '$(1; +\\infty)$.' },
      { key: 'C', text: '$(0; 2)$.' },
      { key: 'D', text: '$(-1; 0)$.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Quan sát đồ thị hàm số $y = f\'(x)$, ta thấy trên khoảng $(-1; 0)$ và $(2; +\\infty)$ đồ thị nằm phía trên trục hoành nên $f\'(x) > 0$.\nVậy hàm số $y = f(x)$ đồng biến trên khoảng $(-1; 0)$. Chọn D.',
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Khảo sát thời gian tập thể dục của một số học sinh thu được mẫu số liệu ghép nhóm như sau:\nTìm trung vị của mẫu số liệu trên (kết quả làm tròn đến hàng phần mười).',
    diagramType: 'DE12_TABLE_P1_Q3',
    options: [
      { key: 'A', text: '$32,2$.' },
      { key: 'B', text: '$32,1$.' },
      { key: 'C', text: '$33,1$.' },
      { key: 'D', text: '$33,2$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Cỡ mẫu $n = 10 + 15 + 22 + 26 + 20 + 17 = 110 \\Rightarrow \\frac{n}{2} = 55$.\nTần số tích lũy của 3 nhóm đầu là $10 + 15 + 22 = 47 < 55$; của 4 nhóm đầu là $47 + 26 = 73 \\ge 55$.\nDo đó nhóm chứa trung vị là $[30; 40)$ với $u_m = 30, n_m = 26, C = 47, u_{m+1} - u_m = 10$.\nTrung vị của mẫu số liệu là:\n$M_e = 30 + \\frac{55 - 47}{26} \\cdot 10 = 30 + \\frac{40}{13} \\approx 33,1$. Chọn C.',
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Như hình vẽ, trong tứ diện $OABC$, biết $\\overrightarrow{OA} = \\vec{a}$, $\\overrightarrow{OB} = \\vec{b}$, $\\overrightarrow{OC} = \\vec{c}$. Điểm $M$ thuộc đoạn $OA$ và $OM = 2MA$; $N$ là trung điểm của $BC$. Khi đó $\\overrightarrow{MN}$ bằng',
    diagramType: 'DE12_TETRAHEDRON_P1_Q12',
    options: [
      { key: 'A', text: '$\\frac{1}{2}\\vec{a} - \\frac{2}{3}\\vec{b} + \\frac{1}{2}\\vec{c}$.' },
      { key: 'B', text: '$\\frac{2}{3}\\vec{a} + \\frac{2}{3}\\vec{b} - \\frac{1}{2}\\vec{c}$.' },
      { key: 'C', text: '$-\\frac{2}{3}\\vec{a} + \\frac{1}{2}\\vec{b} + \\frac{1}{2}\\vec{c}$.' },
      { key: 'D', text: '$\\frac{1}{2}\\vec{a} + \\frac{1}{2}\\vec{b} - \\frac{1}{2}\\vec{c}$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Vì điểm $M$ thuộc đoạn $OA$ và $OM = 2MA$ nên $\\overrightarrow{OM} = \\frac{2}{3}\\overrightarrow{OA} = \\frac{2}{3}\\vec{a}$.\nVì $N$ là trung điểm của $BC$ nên $\\overrightarrow{ON} = \\frac{1}{2}(\\overrightarrow{OB} + \\overrightarrow{OC}) = \\frac{1}{2}\\vec{b} + \\frac{1}{2}\\vec{c}$.\nSuy ra $\\overrightarrow{MN} = \\overrightarrow{ON} - \\overrightarrow{OM} = -\\frac{2}{3}\\vec{a} + \\frac{1}{2}\\vec{b} + \\frac{1}{2}\\vec{c}$. Chọn C.',
  },

  // ==================== PHẦN II (Câu 1 - Câu 4) ====================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 1. Trong không gian với hệ tọa độ $Oxyz$, cho tam giác $ABC$, với $A(5; 1; 3)$, $B(1; 6; 2)$, $C(5; 0; 4)$.',
    statements: [
      {
        key: 'a',
        text: '$\\overrightarrow{AB} = (-4; 5; -1)$, $\\overrightarrow{AC} = (0; -1; -1)$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Biết điểm $D(a; b; c)$ sao cho tứ giác $ABCD$ là hình bình hành, ta có $a + b + c = 9$.',
        correct: true,
      },
      {
        key: 'c',
        text: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = -10$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Gọi $\\alpha$ là số đo góc $A$ của tam giác $ABC$. Khi đó $\\cos\\alpha = \\frac{\\sqrt{21}}{7}$.',
        correct: false,
      },
    ],
    explanation:
      '• a) Sai: Ta có $\\overrightarrow{AB} = (1-5; 6-1; 2-3) = (-4; 5; -1)$ và $\\overrightarrow{AC} = (5-5; 0-1; 4-3) = (0; -1; 1) \\neq (0; -1; -1)$.\n• b) Đúng: Tứ giác $ABCD$ là hình bình hành $\\Leftrightarrow \\overrightarrow{AB} = \\overrightarrow{DC} \\Leftrightarrow D = A + C - B = (5+5-1; 1+0-6; 3+4-2) = (9; -5; 5)$. Khi đó $a + b + c = 9 + (-5) + 5 = 9$.\n• c) Sai: $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-4)\\cdot 0 + 5\\cdot(-1) + (-1)\\cdot 1 = -6 \\neq -10$.\n• d) Sai: $\\cos\\alpha = \\frac{\\overrightarrow{AB}\\cdot\\overrightarrow{AC}}{|\\overrightarrow{AB}|\\cdot|\\overrightarrow{AC}|} = \\frac{-6}{\\sqrt{16+25+1}\\cdot\\sqrt{0+1+1}} = \\frac{-6}{\\sqrt{84}} = -\\frac{\\sqrt{21}}{7} \\neq \\frac{\\sqrt{21}}{7}$.',
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 2. Thống kê thời gian trung bình sử dụng máy tính trong một ngày của nhân viên công ty X cho bởi bảng số liệu ghép nhóm sau.',
    diagramType: 'DE12_TABLE_P2_Q2',
    statements: [
      {
        key: 'a',
        text: 'Số phần tử (cỡ mẫu) của mẫu số liệu trên là $n = 40$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Số trung bình cộng của mẫu số liệu bằng $118,5$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Phương sai của mẫu số liệu trên bằng $945$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Căn cứ vào thời gian sử dụng máy tính trong một ngày, công ty chia nhân viên thành ba nhóm: nhóm sử dụng ít gồm những nhân viên có thời gian sử dụng máy tính dưới $90$ phút; nhóm sử dụng trung bình gồm những nhân viên có thời gian sử dụng máy tính từ $90$ phút đến dưới $150$ phút; nhóm sử dụng nhiều gồm những nhân viên có thời gian sử dụng máy tính từ $150$ phút trở lên. Chọn ngẫu nhiên $4$ nhân viên trong công ty. Xác suất để cả ba nhóm trên đều có nhân viên được chọn bằng $\\frac{24}{247}$.',
        correct: true,
      },
    ],
    explanation:
      '• a) Đúng: Cỡ mẫu $n = 3 + 5 + 5 + 25 + 2 = 40$.\n• b) Đúng: Giá trị đại diện các nhóm lần lượt là $45; 75; 105; 135; 165$. Số trung bình cộng:\n$\\bar{x} = \\frac{3\\cdot 45 + 5\\cdot 75 + 5\\cdot 105 + 25\\cdot 135 + 2\\cdot 165}{40} = \\frac{4740}{40} = 118,5$.\n• c) Sai: Phương sai của mẫu số liệu:\n$s^2 = \\frac{3\\cdot 45^2 + 5\\cdot 75^2 + 5\\cdot 105^2 + 25\\cdot 135^2 + 2\\cdot 165^2}{40} - (118,5)^2 = 14985 - 14042,25 = 942,75 \\neq 945$.\n• d) Đúng: Ba nhóm có số nhân viên lần lượt là: Nhóm 1 (dưới $90$ phút): $3 + 5 = 8$ người; Nhóm 2 (từ $90$ đến dưới $150$ phút): $5 + 25 = 30$ người; Nhóm 3 (từ $150$ phút trở lên): $2$ người.\nChọn ngẫu nhiên $4$ nhân viên từ $40$ người có $C_{40}^4 = 91390$ cách.\nSố cách chọn $4$ người có đủ cả 3 nhóm (phân bố $(2;1;1)$) là:\n$C_8^2 C_{30}^1 C_2^1 + C_8^1 C_{30}^2 C_2^1 + C_8^1 C_{30}^1 C_2^2 = 1680 + 6960 + 240 = 8880$.\nXác suất cần tìm là $P = \\frac{8880}{91390} = \\frac{24}{247}$.',
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 3. Một xưởng mộc dùng gỗ sồi để sản xuất $5$ chiếc bàn mỗi ngày. Chi phí cho mỗi lần vận chuyển nguyên liệu là $5625$ USD, chi phí để lưu trữ một đơn vị nguyên liệu là $10$ USD mỗi ngày, trong đó một đơn vị là lượng nguyên liệu cần thiết để sản xuất một chiếc bàn, và lưu ý rằng trong mỗi ngày của chu kì sản xuất (thời gian giữa hai lần nhập nguyên liệu liên tiếp) thì lượng nguyên liệu lưu trữ trung bình mỗi ngày được tính bằng một nửa tổng lượng nguyên liệu tồn kho đầu kì và lượng nguyên liệu tồn kho cuối kì. Giả sử nguyên liệu được nhập về sau mỗi $x$ ngày.',
    statements: [
      {
        key: 'a',
        text: 'Một chu kì sản xuất, xưởng mộc phải nhập về $5x$ đơn vị nguyên liệu.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Chi phí để lưu trữ nguyên liệu trong $x$ ngày của một chu kì sản xuất là $50x^2$ USD.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Hàm chi phí trung bình mỗi ngày trong một chu kì sản xuất là $c(x) = 50x + \\frac{5625}{x}$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Để chi phí trung bình mỗi ngày của một chu kì sản xuất là ít nhất thì xưởng mộc nên nhập hàng sau mỗi $15$ ngày và mỗi lần nhập về $75$ đơn vị nguyên liệu.',
        correct: true,
      },
    ],
    explanation:
      '• a) Đúng: Mỗi ngày xưởng sản xuất $5$ chiếc bàn (cần $5$ đơn vị nguyên liệu), nên trong một chu kì $x$ ngày xưởng phải nhập về $5x$ đơn vị nguyên liệu.\n• b) Sai: Lượng nguyên liệu lưu trữ trung bình mỗi ngày là $\\frac{5x + 0}{2} = 2,5x$ (đơn vị). Chi phí lưu trữ mỗi ngày là $10 \\cdot 2,5x = 25x$ (USD). Trong $x$ ngày của một chu kì, chi phí lưu trữ nguyên liệu là $x \\cdot 25x = 25x^2$ (USD) $\\neq 50x^2$ USD.\n• c) Sai: Tổng chi phí một chu kì là $C(x) = 25x^2 + 5625$, nên chi phí trung bình mỗi ngày trong một chu kì là $c(x) = \\frac{C(x)}{x} = 25x + \\frac{5625}{x}$.\n• d) Đúng: Theo BĐT Cauchy với $x > 0$: $c(x) = 25x + \\frac{5625}{x} \\ge 2\\sqrt{25x \\cdot \\frac{5625}{x}} = 750$. Dấu "$=$" xảy ra khi $25x = \\frac{5625}{x} \\Leftrightarrow x = 15$ (ngày) và lượng nguyên liệu mỗi lần nhập về là $5 \\cdot 15 = 75$ đơn vị.',
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 4. Như hình vẽ, trong hình chóp tứ giác $Q-EFGH$, đáy $EFGH$ là hình vuông có cạnh bằng $2\\sqrt{2}$, $M$ là trung điểm của $QG$. Biết $QE = QF = QG = QH = 4$. Qua $Q$ kẻ đường thẳng vuông góc với mặt phẳng $(EFGH)$, chân đường vuông góc là $O$. Nối $EG, EM$. Gọi $A$ là giao điểm của $EM$ và $QO$. Trong tam giác $QHF$, qua $A$ kẻ đường thẳng $BC$ cắt $QH, QF$ lần lượt tại $B, C$. Đặt $\\overrightarrow{QB} = x\\overrightarrow{QH}, \\overrightarrow{QC} = y\\overrightarrow{QF}$. Qua $EM$ và $BC$ dựng một mặt phẳng cắt hình chóp thành hai phần trên và dưới, có thể tích lần lượt là $V_1, V_2$.',
    diagramType: 'DE12_PYRAMID_P2_Q4',
    statements: [
      {
        key: 'a',
        text: '$\\overrightarrow{QA} = \\frac{1}{3}\\overrightarrow{QH} + \\frac{1}{3}\\overrightarrow{QF}$.',
        correct: true,
      },
      {
        key: 'b',
        text: '$\\frac{1}{x} + \\frac{1}{y} = 3$.',
        correct: true,
      },
      {
        key: 'c',
        text: '$V_1 = 2\\sqrt{3}xy$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Giá trị nhỏ nhất của $\\frac{V_1}{V_2}$ bằng $\\frac{1}{2}$.',
        correct: true,
      },
    ],
    explanation:
      '• a) Đúng: Vì $QE = QF = QG = QH = 4$ nên $O$ là tâm hình vuông $EFGH$ (trung điểm của $EG$ và $HF$). Trong $\\triangle QEG$, $QO$ và $EM$ là hai đường trung tuyến nên giao điểm $A$ là trọng tâm $\\triangle QEG \\Rightarrow \\overrightarrow{QA} = \\frac{2}{3}\\overrightarrow{QO} = \\frac{2}{3}\\cdot\\frac{1}{2}(\\overrightarrow{QH} + \\overrightarrow{QF}) = \\frac{1}{3}\\overrightarrow{QH} + \\frac{1}{3}\\overrightarrow{QF}$.\n• b) Đúng: Ta có $\\overrightarrow{QA} = \\frac{1}{3x}\\overrightarrow{QB} + \\frac{1}{3y}\\overrightarrow{QC}$. Vì $B, A, C$ thẳng hàng nên $\\frac{1}{3x} + \\frac{1}{3y} = 1 \\Leftrightarrow \\frac{1}{x} + \\frac{1}{y} = 3$.\n• c) Sai: Đáy $EFGH$ có diện tích $S = (2\\sqrt{2})^2 = 8$, bán kính đường tròn ngoại tiếp $OE = \\frac{2\\sqrt{2}\\cdot\\sqrt{2}}{2} = 2 \\Rightarrow QO = \\sqrt{4^2 - 2^2} = 2\\sqrt{3}$.\nThể tích khối chóp $Q.EFGH$ là $V = \\frac{1}{3} \\cdot 8 \\cdot 2\\sqrt{3} = \\frac{16\\sqrt{3}}{3}$.\nÁp dụng tỉ số thể tích cho $Q.EBMC = Q.EBC + Q.MBC$:\n$V_1 = V_{Q.EBC} + V_{Q.MBC} = \\left(1\\cdot x\\cdot y + \\frac{1}{2}\\cdot x\\cdot y\\right) \\cdot \\frac{V}{2} = \\frac{3}{4}xy V = \\frac{3}{4}xy \\cdot \\frac{16\\sqrt{3}}{3} = 4\\sqrt{3}xy \\neq 2\\sqrt{3}xy$.\n• d) Đúng: Từ $3 = \\frac{1}{x} + \\frac{1}{y} \\ge \\frac{2}{\\sqrt{xy}} \\Rightarrow xy \\ge \\frac{4}{9}$ (dấu "$=$" khi $x = y = \\frac{2}{3}$).\nSuy ra $\\frac{V_1}{V} = \\frac{3}{4}xy \\ge \\frac{3}{4}\\cdot\\frac{4}{9} = \\frac{1}{3} \\Rightarrow \\frac{V_1}{V_2} = \\frac{V_1}{V - V_1} \\ge \\frac{1/3}{1 - 1/3} = \\frac{1}{2}$.',
  },

  // ==================== PHẦN III (Câu 1 - Câu 6) ====================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 1. Trong một ngành sản xuất, gọi $x$ là lượng lao động đầu vào, $y$ là lượng vốn đầu vào. Sản lượng $z$ của ngành được xác định bởi $z = 2x^\\alpha y^{1-\\alpha}$, trong đó $\\alpha$ là hằng số thỏa mãn $0 < \\alpha < 1$.\nTheo số liệu, lượng lao động và lượng vốn đầu vào của năm 2026 lần lượt gấp $4$ lần và $2$ lần so với năm 2013; sản lượng công nghiệp năm 2026 gấp $2,5$ lần sản lượng công nghiệp năm 2013.\nTừ các dữ kiện trên, giá trị của hằng số $\\alpha$, làm tròn đến hai chữ số thập phân, là bao nhiêu?',
    correctAnswer: '0.32',
    explanation:
      'Từ giả thiết ta có:\n$\\frac{z_{2026}}{z_{2013}} = \\left(\\frac{x_{2026}}{x_{2013}}\\right)^\\alpha \\cdot \\left(\\frac{y_{2026}}{y_{2013}}\\right)^{1-\\alpha} \\Leftrightarrow 2,5 = 4^\\alpha \\cdot 2^{1-\\alpha} = 2^{2\\alpha + 1 - \\alpha} = 2^{\\alpha + 1}$.\nSuy ra $2^\\alpha = \\frac{2,5}{2} = 1,25 \\Leftrightarrow \\alpha = \\log_2(1,25) \\approx 0,32$.\nĐáp số: $0,32$.',
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 2. Trong tứ diện $ABCD$, $E$ là trung điểm của $AD$, $G$ là trọng tâm của tam giác $BCD$. Nếu đường thẳng $AG$ cắt mặt phẳng $(BCE)$ tại điểm $F$ thì $\\frac{AF}{AG} =$',
    correctAnswer: '0.75',
    explanation:
      'Vì $G$ là trọng tâm $\\triangle BCD$ và $E$ là trung điểm của $AD$ ($\\overrightarrow{AD} = 2\\overrightarrow{AE}$), ta có:\n$\\overrightarrow{AG} = \\frac{1}{3}(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD}) = \\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC} + \\frac{2}{3}\\overrightarrow{AE}$.\nĐặt $\\overrightarrow{AF} = k\\overrightarrow{AG} = \\frac{k}{3}\\overrightarrow{AB} + \\frac{k}{3}\\overrightarrow{AC} + \\frac{2k}{3}\\overrightarrow{AE}$.\nVì $F \\in (BCE)$ nên tổng các hệ số bằng $1$: $\\frac{k}{3} + \\frac{k}{3} + \\frac{2k}{3} = 1 \\Leftrightarrow \\frac{4k}{3} = 1 \\Leftrightarrow k = \\frac{3}{4} = 0,75$.\nVậy $\\frac{AF}{AG} = 0,75$.',
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 3. Có $27$ khối lập phương đơn vị cạnh bằng $1$. Ghép $27$ khối này không có khe hở để tạo thành một khối lập phương cạnh bằng $3$. Người ta sơn toàn bộ $5$ mặt của khối lập phương lớn, trừ một mặt đáy.\nSau đó tách $27$ khối lập phương đơn vị ra và chọn ngẫu nhiên $2$ khối. Xác suất để tổng số mặt được sơn của hai khối được chọn bằng $3$ là $\\frac{q}{p}$, với $p, q$ là hai số tự nhiên nguyên tố cùng nhau. Tính $p + q$.',
    diagramType: 'DE12_CUBES_P3_Q3',
    correctAnswer: '467',
    explanation:
      'Phân loại $27$ khối lập phương đơn vị theo số mặt được sơn (khi sơn $5$ mặt của khối $3\\times 3\\times 3$, trừ mặt đáy):\n• Số khối được sơn $3$ mặt (4 góc tầng trên): $4$ khối.\n• Số khối được sơn $2$ mặt (4 cạnh tầng trên + 4 cạnh bên tầng giữa + 4 góc tầng đáy): $4 + 4 + 4 = 12$ khối.\n• Số khối được sơn $1$ mặt (1 tâm mặt trên + 4 tâm mặt bên tầng giữa + 4 cạnh tầng đáy): $1 + 4 + 4 = 9$ khối.\n• Số khối không được sơn mặt nào (1 tâm khối + 1 tâm mặt đáy): $1 + 1 = 2$ khối.\nChọn ngẫu nhiên $2$ khối từ $27$ khối có $n(\\Omega) = C_{27}^2 = 351$ cách.\nSố cách chọn $2$ khối có tổng số mặt được sơn bằng $3$ (gồm $3+0$ hoặc $2+1$) là:\n$n(A) = 4 \\cdot 2 + 12 \\cdot 9 = 8 + 108 = 116$.\nXác suất là $\\frac{q}{p} = \\frac{116}{351}$ (tối giản vì $\\gcd(116, 351) = 1$).\nSuy ra $p = 351, q = 116 \\Rightarrow p + q = 351 + 116 = 467$.',
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 4. Như hình vẽ, cho hình vuông $ABCD$ có cạnh dài $20$. Điểm $P$ xuất phát từ $A$, chuyển động trên cạnh $AB$ về phía $B$ với vận tốc $2$ đơn vị mỗi giây; đồng thời, điểm $Q$ xuất phát từ $B$, chuyển động trên cạnh $BC$ về phía $C$ với vận tốc $3$ đơn vị mỗi giây.\nTại thời điểm diện tích tứ giác $DPBQ$ bằng $\\frac{11}{20}$ diện tích hình vuông $ABCD$, hãy tính tốc độ biến thiên tức thời của diện tích tam giác $PBQ$ theo thời gian.',
    diagramType: 'DE12_SQUARE_P3_Q4',
    correctAnswer: '18',
    explanation:
      'Tại thời điểm $t$ (giây), ta có $AP = 2t \\Rightarrow PB = 20 - 2t$ và $BQ = 3t \\Rightarrow QC = 20 - 3t$.\nDiện tích hình vuông $ABCD$ là $S_{ABCD} = 20^2 = 400$.\nDiện tích tứ giác $DPBQ$ là:\n$S_{DPBQ} = S_{ABCD} - S_{\\triangle ADP} - S_{\\triangle CDQ} = 400 - \\frac{1}{2}\\cdot 20\\cdot 2t - \\frac{1}{2}\\cdot 20\\cdot (20 - 3t) = 200 + 10t$.\nKhi $S_{DPBQ} = \\frac{11}{20} S_{ABCD} = 220 \\Leftrightarrow 200 + 10t = 220 \\Leftrightarrow t = 2$ (giây).\nDiện tích tam giác $PBQ$ theo thời gian $t$ là:\n$S_{\\triangle PBQ}(t) = \\frac{1}{2} PB \\cdot BQ = \\frac{1}{2}(20 - 2t)\\cdot 3t = 30t - 3t^2$.\nTốc độ biến thiên tức thời của diện tích tam giác $PBQ$ tại $t = 2$ là:\n$S\'_{\\triangle PBQ}(2) = (30 - 6t)\\big|_{t=2} = 30 - 12 = 18$.',
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 5. Cho hình chóp tam giác $P.ABC$ có đáy $ABC$ là tam giác đều cạnh $2$, $PC \\perp (ABC)$ và $PC = 2$. Điểm $M$ là trung điểm của $PB$, điểm $N$ di động trong mặt phẳng $(PAC)$. Tìm giá trị nhỏ nhất của $MN + NB$ (kết quả làm tròn đến hàng phần trăm).',
    correctAnswer: '2.83',
    explanation:
      'Gọi $I$ là trung điểm của $AC$. Vì $\\triangle ABC$ đều cạnh $2$ nên $BI \\perp AC$ và $BI = \\sqrt{3}$.\nDo $PC \\perp (ABC) \\Rightarrow PC \\perp BI$, suy ra $BI \\perp (PAC)$.\nGọi $B\'$ là điểm đối xứng với $B$ qua mặt phẳng $(PAC)$ ($I$ là trung điểm $BB\'$). Khi đó với mọi $N \\in (PAC)$, ta có $NB = NB\'$, suy ra:\n$MN + NB = MN + NB\' \\ge MB\'$.\nGọi $H$ là trung điểm của $BC$, ta có $MH \\parallel PC \\Rightarrow MH \\perp (ABC)$ và $MH = \\frac{1}{2}PC = 1$.\nTrong mặt phẳng $(ABC)$, đặt hệ trục tọa độ gốc $I(0;0)$, $C(1;0)$, $B(0;\\sqrt{3}) \\Rightarrow B\'(0;-\\sqrt{3})$ và trung điểm $H\\left(\\frac{1}{2}; \\frac{\\sqrt{3}}{2}\\right)$.\nTa có $HB\'^2 = \\left(\\frac{1}{2}\\right)^2 + \\left(\\frac{3\\sqrt{3}}{2}\\right)^2 = \\frac{1}{4} + \\frac{27}{4} = 7$.\nDo đó $\\min(MN + NB) = MB\' = \\sqrt{MH^2 + HB\'^2} = \\sqrt{1 + 7} = 2\\sqrt{2} \\approx 2,83$.',
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 6. Cho hàm số $f(x) = \\frac{1}{3}ax^3 - 2x^2 + cx$ đồng biến trên $\\mathbb{R}$ và $ac \\le 4$. Khi đó, giá trị nhỏ nhất của $\\frac{a}{c^2 + 4} + \\frac{c}{a^2 + 4}$ là',
    correctAnswer: '0.5',
    explanation:
      'Ta có $f\'(x) = ax^2 - 4x + c$.\nHàm số $f(x)$ đồng biến trên $\\mathbb{R} \\Leftrightarrow f\'(x) \\ge 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\begin{cases} a > 0 \\\\ \\Delta\' = 4 - ac \\le 0 \\end{cases} \\Leftrightarrow \\begin{cases} a > 0 \\\\ ac \\ge 4 \\end{cases}$.\nKết hợp với giả thiết $ac \\le 4$, ta suy ra $ac = 4$ và $a > 0, c > 0$.\nThay $4 = ac$ vào mẫu số của biểu thức $P$, ta có:\n$P = \\frac{a}{c^2 + ac} + \\frac{c}{a^2 + ac} = \\frac{a}{c(a+c)} + \\frac{c}{a(a+c)} = \\frac{a^2 + c^2}{ac(a+c)} = \\frac{(a+c)^2 - 8}{4(a+c)} = \\frac{a+c}{4} - \\frac{2}{a+c}$.\nĐặt $t = a + c \\ge 2\\sqrt{ac} = 4$. Hàm số $h(t) = \\frac{t}{4} - \\frac{2}{t}$ có $h\'(t) = \\frac{1}{4} + \\frac{2}{t^2} > 0, \\forall t \\ge 4$.\nVậy $\\min P = h(4) = 1 - \\frac{1}{2} = 0,5$ (đạt được khi $a = c = 2$).',
  },
];
