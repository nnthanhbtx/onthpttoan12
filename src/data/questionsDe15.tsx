import { Question } from '../types';

export const QUESTIONS_DE15: Question[] = [
  // ==================== PHẦN I ====================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $O$ là tâm của hình bình hành $ABCD$. Mệnh đề nào sau đây đúng?',
    options: [
      { key: 'A', text: '$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD} = \\overrightarrow{SO}$.' },
      { key: 'B', text: '$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD} = 2\\overrightarrow{SO}$.' },
      { key: 'C', text: '$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD} = 4\\overrightarrow{SO}$.' },
      { key: 'D', text: '$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD} = \\overrightarrow{0}$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Vì $O$ là tâm của hình bình hành $ABCD$ nên $O$ là trung điểm của hai đường chéo $AC$ và $BD$.\n' +
      'Theo tính chất trung điểm ta có:\n' +
      '$\\overrightarrow{SA} + \\overrightarrow{SC} = 2\\overrightarrow{SO}$ và $\\overrightarrow{SB} + \\overrightarrow{SD} = 2\\overrightarrow{SO}$.\n' +
      'Cộng hai đẳng thức trên vế theo vế ta được:\n' +
      '$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} + \\overrightarrow{SD} = 4\\overrightarrow{SO}$.',
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hàm số $y = \\dfrac{x+2027}{x-2026}$ có đồ thị $(C)$. Đồ thị $(C)$ có đường tiệm cận đứng là',
    options: [
      { key: 'A', text: '$x = 2026$.' },
      { key: 'B', text: '$x = -2026$.' },
      { key: 'C', text: '$x = 1$.' },
      { key: 'D', text: '$x = 6$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{2026\\}$.\n' +
      'Ta có $\\lim_{x \\to 2026^+} \\dfrac{x+2027}{x-2026} = +\\infty$ và $\\lim_{x \\to 2026^-} \\dfrac{x+2027}{x-2026} = -\\infty$.\n' +
      'Vậy đường thẳng $x = 2026$ là đường tiệm cận đứng của đồ thị $(C)$.',
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Giá trị lớn nhất của hàm số $y = x^3 - 3x + 1$ trên đoạn $[-2; 2]$ là',
    options: [
      { key: 'A', text: '$2$.' },
      { key: 'B', text: '$-1$.' },
      { key: 'C', text: '$3$.' },
      { key: 'D', text: '$-2$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Hàm số xác định và liên tục trên đoạn $[-2; 2]$.\n' +
      'Ta có $y\' = 3x^2 - 3$; $y\' = 0 \\Leftrightarrow x = 1 \\in [-2; 2]$ hoặc $x = -1 \\in [-2; 2]$.\n' +
      'Tính giá trị của hàm số tại các điểm:\n' +
      '$y(-2) = (-2)^3 - 3(-2) + 1 = -1$;\n' +
      '$y(-1) = (-1)^3 - 3(-1) + 1 = 3$;\n' +
      '$y(1) = 1^3 - 3(1) + 1 = -1$;\n' +
      '$y(2) = 2^3 - 3(2) + 1 = 3$.\n' +
      'Vậy $\\max_{[-2; 2]} y = 3$.',
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho bảng số liệu khảo sát về tuổi thọ (đơn vị: nghìn giờ) của một loại bóng đèn:\nGiá trị của tứ phân vị thứ nhất là',
    diagramType: 'DE15_TABLE_P1_Q4',
    options: [
      { key: 'A', text: '$Q_1 = \\dfrac{206}{29}$.' },
      { key: 'B', text: '$Q_1 = \\dfrac{37}{4}$.' },
      { key: 'C', text: '$Q_1 = \\dfrac{87}{8}$.' },
      { key: 'D', text: '$Q_1 = \\dfrac{875}{232}$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Cỡ mẫu là $n = 11 + 20 + 29 + 40 + 30 = 130$.\n' +
      'Ta có $\\dfrac{n}{4} = \\dfrac{130}{4} = 32,5$.\n' +
      'Tần số tích lũy của nhóm $[3; 5)$ là $11$; của nhóm $[5; 7)$ là $11 + 20 = 31$; của nhóm $[7; 9)$ là $31 + 29 = 60$.\n' +
      'Do đó nhóm chứa tứ phân vị thứ nhất $Q_1$ là nhóm $[7; 9)$.\n' +
      'Áp dụng công thức tính tứ phân vị thứ nhất:\n' +
      '$Q_1 = 7 + \\dfrac{32,5 - 31}{29} \\cdot (9 - 7) = 7 + \\dfrac{1,5 \\cdot 2}{29} = 7 + \\dfrac{3}{29} = \\dfrac{206}{29}$.',
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hình hộp chữ nhật $ABCD.A\'B\'C\'D\'$ có $AB = BC = a, AA\' = a\\sqrt{2}$ (như hình vẽ). Góc giữa đường thẳng $A\'C$ và mặt phẳng $(ABCD)$ bằng',
    diagramType: 'DE15_BOX_P1_Q5',
    options: [
      { key: 'A', text: '$60^\\circ$.' },
      { key: 'B', text: '$45^\\circ$.' },
      { key: 'C', text: '$30^\\circ$.' },
      { key: 'D', text: '$90^\\circ$.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Vì $AA\' \\perp (ABCD)$ tại $A$ nên $AC$ là hình chiếu vuông góc của $A\'C$ lên mặt phẳng $(ABCD)$.\n' +
      'Do đó góc giữa đường thẳng $A\'C$ và mặt phẳng $(ABCD)$ là góc $\\widehat{A\'CA}$.\n' +
      'Đáy $ABCD$ là hình vuông cạnh $a$ nên $AC = a\\sqrt{2}$.\n' +
      'Xét tam giác $A\'AC$ vuông tại $A$, ta có:\n' +
      '$\\tan\\widehat{A\'CA} = \\dfrac{AA\'}{AC} = \\dfrac{a\\sqrt{2}}{a\\sqrt{2}} = 1 \\Rightarrow \\widehat{A\'CA} = 45^\\circ$.',
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hình lập phương $ABCD.A\'B\'C\'D\'$ có $AB = 4$. Tính $|\\overrightarrow{AB} + \\overrightarrow{B\'C\'} + \\overrightarrow{AA\'}|$?',
    options: [
      { key: 'A', text: '$4\\sqrt{2}$.' },
      { key: 'B', text: '$\\sqrt{10}$.' },
      { key: 'C', text: '$4\\sqrt{3}$.' },
      { key: 'D', text: '$2\\sqrt{10}$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Vì $ABCD.A\'B\'C\'D\'$ là hình lập phương nên $\\overrightarrow{B\'C\'} = \\overrightarrow{AD}$.\n' +
      'Theo quy tắc hình hộp, ta có:\n' +
      '$\\overrightarrow{AB} + \\overrightarrow{B\'C\'} + \\overrightarrow{AA\'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA\'} = \\overrightarrow{AC\'}$.\n' +
      'Do đó $|\\overrightarrow{AB} + \\overrightarrow{B\'C\'} + \\overrightarrow{AA\'}| = |\\overrightarrow{AC\'}| = AC\' = AB\\sqrt{3} = 4\\sqrt{3}$.',
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hàm số $y = f(x)$ có bảng biến thiên như sau:\nĐiểm cực đại của hàm số $y = f(x)$ là',
    diagramType: 'DE15_BBT_P1_Q7',
    options: [
      { key: 'A', text: '$y = 2$.' },
      { key: 'B', text: '$x = 2$.' },
      { key: 'C', text: '$x = 3$.' },
      { key: 'D', text: '$y = -1$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dựa vào bảng biến thiên, đạo hàm $f\'(x)$ đổi dấu từ dương ($+$) sang âm ($-$) khi $x$ đi qua $x = 3$.\n' +
      'Vậy điểm cực đại của hàm số $y = f(x)$ là $x = 3$.',
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Tập nghiệm của bất phương trình $\\left(\\dfrac{1}{2}\\right)^{x^2+4x} > \\dfrac{1}{32}$ là',
    options: [
      { key: 'A', text: '$(-5; 1)$.' },
      { key: 'B', text: '$(1; +\\infty)$.' },
      { key: 'C', text: '$(-\\infty; -5) \\cup (1; +\\infty)$.' },
      { key: 'D', text: '$\\{-5; 1\\}$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ta có $\\left(\\dfrac{1}{2}\\right)^{x^2+4x} > \\dfrac{1}{32} \\Leftrightarrow \\left(\\dfrac{1}{2}\\right)^{x^2+4x} > \\left(\\dfrac{1}{2}\\right)^5$.\n' +
      'Vì cơ số $0 < \\dfrac{1}{2} < 1$ nên bất phương trình tương đương với:\n' +
      '$x^2 + 4x < 5 \\Leftrightarrow x^2 + 4x - 5 < 0 \\Leftrightarrow -5 < x < 1$.\n' +
      'Vậy tập nghiệm của bất phương trình là $S = (-5; 1)$.',
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho cấp số nhân $(u_n)$ với $u_1 = 2$ và công bội $q = 3$. Tìm số hạng thứ ba $u_3$ của cấp số nhân.',
    options: [
      { key: 'A', text: '$6$.' },
      { key: 'B', text: '$24$.' },
      { key: 'C', text: '$54$.' },
      { key: 'D', text: '$18$.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Số hạng thứ ba của cấp số nhân là $u_3 = u_1 \\cdot q^2 = 2 \\cdot 3^2 = 18$.',
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hình hộp $ABCD.A\'B\'C\'D\'$ (minh họa như hình bên). Phát biểu nào sau đây là **sai**?',
    diagramType: 'DE15_PARALLELEPIPED_P1_Q10',
    options: [
      { key: 'A', text: '$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{A\'C\'}$.' },
      { key: 'B', text: '$\\overrightarrow{AA\'} + \\overrightarrow{AC} = \\overrightarrow{AC\'}$.' },
      { key: 'C', text: '$\\overrightarrow{BB\'} + \\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{BD\'}$.' },
      { key: 'D', text: '$\\overrightarrow{DA} + \\overrightarrow{DC} = \\overrightarrow{B\'D\'}$.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Theo quy tắc hình bình hành trong đáy $ABCD$, ta có:\n' +
      '$\\overrightarrow{DA} + \\overrightarrow{DC} = \\overrightarrow{DB} = \\overrightarrow{D\'B\'} = -\\overrightarrow{B\'D\'} \\neq \\overrightarrow{B\'D\'}$.\n' +
      'Vậy phát biểu D là sai.',
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Hàm số nào sau đây có đồ thị là đường cong như hình vẽ?',
    diagramType: 'DE15_GRAPH_P1_Q11',
    options: [
      { key: 'A', text: '$y = x - \\dfrac{1}{x-1}$.' },
      { key: 'B', text: '$y = -x + \\dfrac{1}{x-1}$.' },
      { key: 'C', text: '$y = -x - \\dfrac{1}{x-1}$.' },
      { key: 'D', text: '$y = x + \\dfrac{1}{x-1}$.' },
    ],
    correctAnswer: 'D',
    explanation:
      'Từ đồ thị ta thấy:\n' +
      '• Đồ thị có tiệm cận đứng $x = 1$ và tiệm cận xiên $y = x$ (đi qua $(0; 0)$ và $(1; 1)$), nên loại B và C.\n' +
      '• Đồ thị đi qua điểm cực tiểu $(2; 3)$ và điểm cực đại $(0; -1)$.\n' +
      'Thay $x = 2$ vào hàm số $y = x + \\dfrac{1}{x-1}$ ta được $y = 2 + 1 = 3$ (thỏa mãn).',
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Trong không gian với hệ tọa độ $Oxyz$, cho hai điểm $A(4; -2; 2)$ và $B(5; -1; 4)$. Tọa độ trọng tâm $G$ của tam giác $OAB$ là',
    options: [
      { key: 'A', text: '$G\\left(\\dfrac{9}{2}; -\\dfrac{3}{2}; 3\\right)$.' },
      { key: 'B', text: '$G(3; -1; 2)$.' },
      { key: 'C', text: '$G(1; 1; 2)$.' },
      { key: 'D', text: '$G(9; -3; 6)$.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Với gốc tọa độ $O(0; 0; 0)$, tọa độ trọng tâm $G$ của tam giác $OAB$ là:\n' +
      '$\\begin{cases} x_G = \\dfrac{0 + 4 + 5}{3} = 3 \\\\ y_G = \\dfrac{0 + (-2) + (-1)}{3} = -1 \\\\ z_G = \\dfrac{0 + 2 + 4}{3} = 2 \\end{cases} \\Rightarrow G(3; -1; 2)$.',
  },

  // ==================== PHẦN II ====================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Đồ thị của hàm số $y = ax + b + \\dfrac{c}{x+d}$ là hình dưới đây',
    diagramType: 'DE15_GRAPH_P2_Q1',
    statements: [
      {
        key: 'a',
        text: 'Hàm số nghịch biến trên khoảng $(0; 1)$.',
        correct: true,
      },
      {
        key: 'b',
        text: '$\\lim_{x \\to 1^+} y = -\\infty$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Phương trình đường tiệm cận xiên của đồ thị hàm số là: $y = x + 1$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Tổng $a + b + c + d = 2$.',
        correct: true,
      },
    ],
    explanation:
      '• **Ý a) Đúng**: Nhìn vào đồ thị trên khoảng $(0; 1)$, đồ thị đi xuống từ điểm cực đại $(0; 0)$ xuống $-\\infty$ khi $x \\to 1^-$, nên hàm số nghịch biến trên khoảng $(0; 1)$.\n' +
      '• **Ý b) Sai**: Dựa vào nhánh bên phải đường tiệm cận đứng $x = 1$, khi $x \\to 1^+$ thì $y \\to +\\infty$ (chứ không phải $-\\infty$).\n' +
      '• **Ý c) Đúng**: Đường tiệm cận xiên của đồ thị đi qua hai điểm $(0; 1)$ và $(1; 2)$ nên có phương trình là $y = x + 1$.\n' +
      '• **Ý d) Đúng**: Từ tiệm cận đứng $x = 1 = -d \\Rightarrow d = -1$. Từ tiệm cận xiên $y = x + 1 \\Rightarrow a = 1, b = 1$. Đồ thị đi qua gốc tọa độ $O(0; 0)$ nên $y(0) = 1 + \\dfrac{c}{-1} = 0 \\Rightarrow c = 1$. Vậy $a + b + c + d = 1 + 1 + 1 + (-1) = 2$.',
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Trên cùng một hệ trục tọa độ, cho đồ thị của hai hàm số $f(x) = \\sqrt{x-1}, g(x) = \\dfrac{1}{x+1} (x > -1)$.\n' +
      'Gọi $(C_1)$ là đường cong đối xứng với đồ thị $y = f(x)$ qua đường thẳng $y = x$ và $(C_2)$ là đường cong đối xứng với đồ thị $y = g(x)$ qua đường thẳng $y = x$.\n' +
      'Gọi giao điểm của hai đồ thị $y = f(x)$ và $y = g(x)$ là $P(x_1; y_1)$; giao điểm của đồ thị $y = g(x)$ và đường cong $(C_2)$ là $Q(x_2; y_2)$; giao điểm của hai đường cong $(C_1)$ và $(C_2)$ là $R(x_3; y_3)$. (Biết $x_2 > 0$.)',
    diagramType: 'DE15_GRAPH_P2_Q2',
    statements: [
      {
        key: 'a',
        text: '$\\dfrac{1}{2} < y_2 < 1$.',
        correct: true,
      },
      {
        key: 'b',
        text: '$x_1 y_1 = x_3 y_3$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Tích hệ số góc của hai đường thẳng $PQ$ và $QR$ bằng $1$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Hoành độ $x_2$ và tung độ $y_2$ của giao điểm $Q$ thỏa mãn $x_2 + y_2 = \\sqrt{5} - 1$.',
        correct: true,
      },
    ],
    explanation:
      '• **Xác định tọa độ điểm $Q(x_2; y_2)$**:\n' +
      'Vì $(C_2)$ đối xứng với đồ thị $y = g(x) = \\dfrac{1}{x+1}$ qua đường thẳng $y = x$, và hàm số $g(x)$ nghịch biến trên $(-1; +\\infty)$, giao điểm $Q(x_2; y_2)$ (với $x_2 > 0$) nằm trên đường thẳng $y = x$.\n' +
      'Ta có $x_2 = y_2 = \\dfrac{1}{x_2 + 1} \\Leftrightarrow x_2^2 + x_2 - 1 = 0$. Vì $x_2 > 0$ nên $x_2 = y_2 = \\dfrac{\\sqrt{5}-1}{2} \\approx 0,618$.\n' +
      '• **Ý a) Đúng**: Vì $y_2 = \\dfrac{\\sqrt{5}-1}{2} \\approx 0,618 \\in \\left(\\dfrac{1}{2}; 1\\right)$.\n' +
      '• **Ý b) Đúng**: Hai đường cong $(C_1)$ và $(C_2)$ lần lượt đối xứng với $y = f(x)$ và $y = g(x)$ qua đường thẳng $y = x$, nên giao điểm $R(x_3; y_3)$ đối xứng với giao điểm $P(x_1; y_1)$ qua đường thẳng $y = x$. Suy ra $x_3 = y_1$ và $y_3 = x_1$, do đó $x_1 y_1 = x_3 y_3$.\n' +
      '• **Ý c) Đúng**: Vì $x_2 = y_2, x_3 = y_1, y_3 = x_1$, hệ số góc của $PQ$ và $QR$ lần lượt là:\n' +
      '$k_{PQ} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{x_2 - y_1}{x_2 - x_1}$ và $k_{QR} = \\dfrac{y_3 - y_2}{x_3 - x_2} = \\dfrac{x_1 - x_2}{y_1 - x_2} = \\dfrac{x_2 - x_1}{x_2 - y_1}$.\n' +
      'Suy ra $k_{PQ} \\cdot k_{QR} = 1$.\n' +
      '• **Ý d) Đúng**: Ta có $x_2 + y_2 = 2 \\cdot \\dfrac{\\sqrt{5}-1}{2} = \\sqrt{5} - 1$.',
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Lớp 12A có 40 học sinh, trong đó có 8 em tham gia Câu lạc bộ Toán học. Điểm thi học kì 1 môn Toán của cả lớp được thống kê trong bảng sau:',
    diagramType: 'DE15_TABLE_P2_Q3',
    statements: [
      {
        key: 'a',
        text: 'Khoảng biến thiên của số liệu là $5$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Có ít nhất $13$ học sinh có điểm thi thấp hơn điểm trung bình của cả lớp.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Biết rằng $8$ học sinh trong Câu lạc bộ Toán học đều có điểm thi không dưới $8$. Chọn ngẫu nhiên $6$ học sinh trong lớp có điểm lớn hơn hoặc bằng $8$. Xác suất có đúng $2$ em của Câu lạc bộ Toán học được chọn nhỏ hơn $\\dfrac{1}{3}$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Biết $8$ học sinh trong Câu lạc bộ Toán học gồm có $5$ học sinh nam và $3$ học sinh nữ. Trong buổi lễ tuyên dương khen thưởng, $8$ học sinh trong Câu lạc bộ Toán học được sắp xếp ngẫu nhiên thành một hàng ngang để trao quà. Xác suất không có $2$ học sinh nữ nào đứng cạnh nhau lớn hơn $\\dfrac{1}{3}$.',
        correct: true,
      },
    ],
    explanation:
      '• **Ý a) Đúng**: Khoảng biến thiên của mẫu số liệu ghép nhóm là $R = 10 - 5 = 5$.\n' +
      '• **Ý b) Đúng**: Điểm trung bình của mẫu số liệu ghép nhóm là:\n' +
      '$\\bar{x} = \\dfrac{2 \\cdot 5,5 + 3 \\cdot 6,5 + 8 \\cdot 7,5 + 15 \\cdot 8,5 + 12 \\cdot 9,5}{40} = \\dfrac{332}{40} = 8,3$.\n' +
      'Vì toàn bộ học sinh ở 3 nhóm đầu $[5; 6), [6; 7), [7; 8)$ đều có điểm nhỏ hơn $8 < 8,3$, nên có ít nhất $2 + 3 + 8 = 13$ học sinh có điểm thi thấp hơn điểm trung bình của cả lớp.\n' +
      '• **Ý c) Sai**: Số học sinh có điểm $\\ge 8$ là $15 + 12 = 27$ học sinh (gồm $8$ học sinh thuộc CLB Toán học và $19$ học sinh không thuộc CLB).\n' +
      'Xác suất chọn được đúng $2$ em thuộc CLB Toán học khi chọn $6$ em từ $27$ em là:\n' +
      '$P = \\dfrac{C_8^2 \\cdot C_{19}^4}{C_{27}^6} = \\dfrac{28 \\cdot 3876}{296010} = \\dfrac{18088}{49335} \\approx 0,3666 > \\dfrac{1}{3}$.\n' +
      '• **Ý d) Đúng**: Số cách xếp $8$ học sinh thành hàng ngang là $8!$.\n' +
      'Xếp $5$ học sinh nam trước có $5!$ cách, tạo ra $6$ khoảng trống. Xếp $3$ học sinh nữ vào $6$ khoảng trống có $A_6^3$ cách.\n' +
      'Xác suất cần tìm là $P = \\dfrac{5! \\cdot A_6^3}{8!} = \\dfrac{120 \\cdot 120}{40320} = \\dfrac{5}{14} \\approx 0,3571 > \\dfrac{1}{3}$.',
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Trong hình lập phương $ABCD - A_1B_1C_1D_1$ có độ dài cạnh bằng $2$, $M$ là trung điểm của $CC_1$, $N$ là một điểm nằm trong tứ giác $A_1D_1DA$ (kể cả biên). Nếu $B_1N \\parallel (BMD)$ thì:',
    statements: [
      {
        key: 'a',
        text: '$NB_1 \\perp NC_1$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Thể tích tứ diện $B_1 - NBM$ bằng $\\dfrac{4}{3}$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Độ dài quỹ tích của điểm $N$ bằng $2\\sqrt{2}$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Phạm vi giá trị của $\\tan\\widehat{A_1NB_1}$ là $[1; \\sqrt{5}]$.',
        correct: true,
      },
    ],
    explanation:
      'Chọn hệ trục tọa độ $Oxyz$ với $D(0; 0; 0), A(2; 0; 0), C(0; 2; 0), D_1(0; 0; 2)$.\n' +
      'Khi đó $B(2; 2; 0), B_1(2; 2; 2), A_1(2; 0; 2), C_1(0; 2; 2), M(0; 2; 1)$.\n' +
      'Mặt phẳng $(BMD)$ có vectơ pháp tuyến $\\vec{n} = (1; -1; 2)$ và phương trình $x - y + 2z = 0$.\n' +
      'Điểm $N$ thuộc hình vuông $A_1D_1DA$ nên $N(x; 0; z)$ với $x, z \\in [0; 2]$.\n' +
      'Ta có $\\overrightarrow{B_1N} = (x - 2; -2; z - 2)$. Điều kiện $B_1N \\parallel (BMD) \\Leftrightarrow \\overrightarrow{B_1N} \\cdot \\vec{n} = 0 \\Leftrightarrow (x - 2) + 2 + 2(z - 2) = 0 \\Leftrightarrow x = 4 - 2z$.\n' +
      'Vì $x, z \\in [0; 2]$ nên $z \\in [1; 2]$. Quỹ tích điểm $N$ là đoạn thẳng nối trung điểm $E(2; 0; 1)$ của $AA_1$ với đỉnh $D_1(0; 0; 2)$.\n' +
      '• **Ý a) Sai**: Tại $N \\equiv E(2; 0; 1)$, $\\overrightarrow{NB_1} = (0; 2; 1)$ và $\\overrightarrow{NC_1} = (-2; 2; 1) \\Rightarrow \\overrightarrow{NB_1} \\cdot \\overrightarrow{NC_1} = 5 \\neq 0$.\n' +
      '• **Ý b) Đúng**: Mặt phẳng $(B_1BM)$ là mặt bên $(BCC_1B_1)$ có diện tích $S_{\\triangle B_1BM} = \\dfrac{1}{2} \\cdot BB_1 \\cdot BC = \\dfrac{1}{2} \\cdot 2 \\cdot 2 = 2$. Khoảng cách từ $N \\in (ADD_1A_1)$ đến $(BCC_1B_1)$ luôn bằng $2$. Suy ra $V_{B_1 - NBM} = V_{N.B_1BM} = \\dfrac{1}{3} \\cdot 2 \\cdot 2 = \\dfrac{4}{3}$.\n' +
      '• **Ý c) Sai**: Độ dài quỹ tích của điểm $N$ là $ED_1 = \\sqrt{(2-0)^2 + (0-0)^2 + (1-2)^2} = \\sqrt{5} \\neq 2\\sqrt{2}$.\n' +
      '• **Ý d) Đúng**: Vì $A_1B_1 \\perp (A_1D_1DA)$ nên $A_1B_1 \\perp A_1N$. Trong tam giác vuông $A_1NB_1$ ta có $\\tan\\widehat{A_1NB_1} = \\dfrac{A_1B_1}{A_1N} = \\dfrac{2}{A_1N}$. Trong tam giác vuông $A_1ED_1$ ($A_1E = 1, A_1D_1 = 2, ED_1 = \\sqrt{5}$), khi $N$ chạy trên đoạn $ED_1$ thì $A_1N \\in \\left[\\dfrac{2}{\\sqrt{5}}; 2\\right] \\Rightarrow \\tan\\widehat{A_1NB_1} \\in [1; \\sqrt{5}]$.',
  },

  // ==================== PHẦN III ====================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Nhà toán học Hy Lạp cổ đại Apollonius đã ghi chép trong tác phẩm “Luận về đường conic” phương pháp dùng mặt phẳng cắt hình nón để thu được các đường conic. Như hình vẽ, đặt hai hình nón hoàn toàn giống nhau đối đỉnh với nhau (đỉnh và trục của hai hình nón đều trùng nhau). Biết đường kính đáy của hai hình nón đều bằng $2$, diện tích xung quanh đều bằng $\\sqrt{5}\\pi$. Gọi mặt cắt đi qua trục của hai hình nón là mặt phẳng $\\alpha$, giao tuyến của mặt phẳng $\\alpha$ với các mặt bên của hai hình nón là $AC, BD$. Biết mặt phẳng $\\beta$ song song với mặt phẳng $\\alpha$, giao tuyến của mặt phẳng $\\beta$ với các mặt bên của hai hình nón là một phần của hyperbol $(C)$, đồng thời hai đường tiệm cận của $(C)$ lần lượt song song với $AC, BD$. Khi đó tâm sai của hyperbol $(C)$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?',
    diagramType: 'DE15_CONES_P3_Q1',
    correctAnswer: '1.12',
    explanation:
      'Bán kính đáy của mỗi hình nón là $r = \\dfrac{2}{2} = 1$.\n' +
      'Diện tích xung quanh của hình nón là $S_{xq} = \\pi r l = \\sqrt{5}\\pi \\Rightarrow l = \\sqrt{5}$.\n' +
      'Chiều cao của mỗi hình nón là $h = \\sqrt{l^2 - r^2} = \\sqrt{5 - 1} = 2$.\n' +
      'Gọi $\\theta$ là góc giữa đường sinh ($AC$ hoặc $BD$) và trục của hình nón. Ta có $\\tan\\theta = \\dfrac{r}{h} = \\dfrac{1}{2}$.\n' +
      'Mặt phẳng $\\beta \\parallel \\alpha$ song song với trục của hình nón nên cắt hai mặt nón theo hyperbol $(C)$ có trục thực song song với trục hình nón.\n' +
      'Vì hai đường tiệm cận của hyperbol $(C)$ song song với $AC, BD$ nên góc giữa tiệm cận và trục thực của $(C)$ bằng $\\theta$, suy ra:\n' +
      '$\\dfrac{b}{a} = \\tan\\theta = \\dfrac{1}{2}$.\n' +
      'Do đó tâm sai của hyperbol $(C)$ là:\n' +
      '$e = \\sqrt{1 + \\left(\\dfrac{b}{a}\\right)^2} = \\sqrt{1 + \\dfrac{1}{4}} = \\dfrac{\\sqrt{5}}{2} \\approx 1,12$.',
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Cho hình chóp $S.ABCD$ có đáy là hình thoi cạnh bằng $2$, góc $\\widehat{ABC} = 60^\\circ$ và cạnh bên $SA$ vuông góc với mặt phẳng đáy. Gọi $M, N$ lần lượt là trung điểm $SB, SD$. Biết số đo góc nhị diện $[M, AC, N]$ bằng $120^\\circ$. Khoảng cách từ điểm $C$ đến mặt phẳng $(SBD)$ bằng bao nhiêu (làm tròn kết quả cuối cùng đến hàng phần mười)?',
    correctAnswer: '0.7',
    explanation:
      'Vì đáy $ABCD$ là hình thoi cạnh $2$ có $\\widehat{ABC} = 60^\\circ$ nên tam giác $ABC$ đều cạnh $2$.\n' +
      'Gọi $O = AC \\cap BD$. Ta có $AC = 2 \\Rightarrow AO = OC = 1$, $BD = 2\\sqrt{3} \\Rightarrow BO = OD = \\sqrt{3}$.\n' +
      'Đặt $SA = h > 0$. Gọi $I$ là trung điểm của $SO$ và $E$ là trung điểm của $AO$.\n' +
      'Vì $M, N$ là trung điểm của $SB, SD$ nên $MN$ đi qua $I$, $MN \\parallel BD$ và $MN = \\dfrac{1}{2}BD = \\sqrt{3} \\Rightarrow IM = IN = \\dfrac{\\sqrt{3}}{2}$.\n' +
      'Ta có $IE$ là đường trung bình của $\\triangle SAO$ nên $IE \\parallel SA \\Rightarrow IE \\perp (ABCD) \\Rightarrow IE \\perp AC$ và $IE = \\dfrac{h}{2}$.\n' +
      'Mặt khác $BD \\perp (SAC) \\Rightarrow MN \\perp (SAC) \\Rightarrow MN \\perp AC$ và $MN \\perp IE$.\n' +
      'Do đó $AC \\perp (EMN)$ tại $E$, suy ra góc phẳng nhị diện $[M, AC, N]$ là $\\widehat{MEN} = 120^\\circ$.\n' +
      'Tam giác $MEN$ cân tại $E$ có đường cao $EI$ nên $\\widehat{MEI} = 60^\\circ$.\n' +
      'Ta có $\\tan 60^\\circ = \\dfrac{IM}{IE} \\Leftrightarrow \\sqrt{3} = \\dfrac{\\sqrt{3}/2}{h/2} = \\dfrac{\\sqrt{3}}{h} \\Rightarrow h = 1$, tức là $SA = 1$.\n' +
      'Vì $O$ là trung điểm của $AC$ nên:\n' +
      '$d(C, (SBD)) = d(A, (SBD)) = \\dfrac{SA \\cdot AO}{\\sqrt{SA^2 + AO^2}} = \\dfrac{1 \\cdot 1}{\\sqrt{1^2 + 1^2}} = \\dfrac{\\sqrt{2}}{2} \\approx 0,7$.',
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Trong một hộp kín đựng $102$ tấm thẻ như nhau được đánh số từ $1$ đến $102$. Lấy ngẫu nhiên ba tấm thẻ từ hộp.\nCó bao nhiêu cách lấy được ba tấm thẻ mà ba số ghi trên ba tấm thẻ đó lập thành một cấp số cộng. (Trích đề thi thử trường THPT Đồng Hỷ - Thái Nguyên năm 2026)',
    diagramType: 'DE15_CARDS_P3_Q3',
    correctAnswer: '2550',
    explanation:
      'Gọi ba số ghi trên ba tấm thẻ theo thứ tự tăng dần là $a < b < c$.\n' +
      'Ba số $a, b, c$ lập thành một cấp số cộng khi và chỉ khi $a + c = 2b$, tức là $a$ và $c$ cùng tính chất chẵn lẻ (mỗi cặp $\\{a, c\\}$ cùng chẵn hoặc cùng lẻ sẽ xác định duy nhất số $b = \\dfrac{a+c}{2}$).\n' +
      'Từ $1$ đến $102$ có $51$ số chẵn và $51$ số lẻ.\n' +
      'Số cách chọn $2$ số $a, c$ cùng chẵn hoặc cùng lẻ là:\n' +
      '$C_{51}^2 + C_{51}^2 = 2 \\cdot \\dfrac{51 \\cdot 50}{2} = 2550$ (cách).',
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Gọi giao tuyến của hai mặt phẳng $\\alpha, \\beta$ là $l$. Hai đường tròn $S_1$ nằm trên mặt phẳng $\\alpha$ và $S_2$ nằm trên mặt phẳng $\\beta$ đều có bán kính bằng $2$. Như hình vẽ, đường tròn $S_1$ và đường tròn $S_2$ cùng tiếp xúc với đường thẳng $l$ tại điểm $C$.\n' +
      'Gọi $O_1$ là tâm của $S_1$, $O_2$ là tâm của $S_2$. Đường thẳng đi qua $O_1$ và vuông góc với mặt phẳng $\\alpha$ cắt đường thẳng đi qua $O_2$ và vuông góc với mặt phẳng $\\beta$ tại điểm $P$.\n' +
      'Biết $\\angle O_1CO_2 = \\dfrac{2\\pi}{3}$. Với điểm $A$ tùy ý thuộc $S_1$ và điểm $B$ tùy ý thuộc $S_2$, gọi giá trị lớn nhất và giá trị nhỏ nhất của $|\\overrightarrow{PA} + \\overrightarrow{PB}|$ lần lượt là $M, m$. Tính $M + m$.',
    diagramType: 'DE15_CIRCLES_P3_Q4',
    correctAnswer: '12',
    explanation:
      'Vì $S_1, S_2$ tiếp xúc với giao tuyến $l$ tại $C$ nên $O_1C \\perp l, O_2C \\perp l$ và $O_1C = O_2C = 2$.\n' +
      'Mặt phẳng $(O_1CO_2)$ vuông góc với $l$ tại $C$ và chứa điểm $P$. Trong tứ giác $PO_1CO_2$ có $\\widehat{PO_1C} = \\widehat{PO_2C} = 90^\\circ, \\widehat{O_1CO_2} = 120^\\circ$ nên $PC = \\dfrac{O_1C}{\\cos 60^\\circ} = 4$ và $\\overrightarrow{PO_1} + \\overrightarrow{PO_2}$ có độ dài bằng $6$ (hướng dọc theo tia $PC$).\n' +
      'Chọn hệ trục tọa độ $Cxyz$ với $C(0; 0; 0)$, tia $CP$ là tia $Cx$, trục $Cz$ trùng với $l$.\n' +
      'Khi đó $\\overrightarrow{PO_1} + \\overrightarrow{PO_2} = (-6; 0; 0)$.\n' +
      'Biểu diễn điểm $A \\in S_1$ và $B \\in S_2$ theo góc tham số $\\theta_1, \\theta_2 \\in [0; 2\\pi]$:\n' +
      '$\\overrightarrow{O_1A} = (\\cos\\theta_1; \\sqrt{3}\\cos\\theta_1; 2\\sin\\theta_1)$ và $\\overrightarrow{O_2B} = (\\cos\\theta_2; -\\sqrt{3}\\cos\\theta_2; 2\\sin\\theta_2)$.\n' +
      'Suy ra $\\overrightarrow{PA} + \\overrightarrow{PB} = (-6 + \\cos\\theta_1 + \\cos\\theta_2;\\; \\sqrt{3}(\\cos\\theta_1 - \\cos\\theta_2);\\; 2(\\sin\\theta_1 + \\sin\\theta_2))$.\n' +
      'Đặt $u = \\cos\\theta_1, v = \\cos\\theta_2 \\in [-1; 1]$. Ta có:\n' +
      '$|\\overrightarrow{PA} + \\overrightarrow{PB}|^2 = (-6 + u + v)^2 + 3(u - v)^2 + 4(\\sin\\theta_1 + \\sin\\theta_2)^2$.\n' +
      '• **Giá trị nhỏ nhất $m$**: Vì $u + v \\le 2 \\Rightarrow (-6 + u + v)^2 \\ge (-6 + 2)^2 = 16$, nên $|\\overrightarrow{PA} + \\overrightarrow{PB}|^2 \\ge 16 + 0 + 0 = 16 \\Rightarrow m = 4$ (đạt tại $\\theta_1 = \\theta_2 = 0$).\n' +
      '• **Giá trị lớn nhất $M$**: Áp dụng $2\\sin\\theta_1\\sin\\theta_2 \\le \\sin^2\\theta_1 + \\sin^2\\theta_2 = 2 - u^2 - v^2$, ta thu được:\n' +
      '$|\\overrightarrow{PA} + \\overrightarrow{PB}|^2 \\le 64 - 3(u + v + 2)^2 - (u - v)^2 \\le 64 \\Rightarrow M = 8$ (đạt tại $\\theta_1 = \\theta_2 = \\pi$, tức là $A \\equiv B \\equiv C$).\n' +
      'Vậy $M + m = 8 + 4 = 12$.',
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Như hình vẽ, tiếp tuyến của đường cong $y = x^3$ tại điểm $A(-1; -1)$ cắt lại đường cong tại điểm $B$.\n' +
      'Gọi $S_1$ là diện tích của đường tròn $(C)$ có đường kính là đoạn thẳng $AB$. Điểm $P$ di chuyển trên phần đường cong $y = x^3$ nằm bên trong đường tròn $(C)$. Gọi $S_2$ là diện tích của đường tròn có đường kính bằng khoảng cách từ điểm $P$ đến đoạn thẳng $AB$.\n' +
      'Giá trị nhỏ nhất của $S_1 - S_2$ là bao nhiêu (làm tròn kết quả đến hàng phần mười)?',
    diagramType: 'DE15_CUBIC_CIRCLE_P3_Q5',
    correctAnswer: '69.4',
    explanation:
      'Ta có $y = x^3 \\Rightarrow y\' = 3x^2 \\Rightarrow y\'(-1) = 3$.\n' +
      'Phương trình tiếp tuyến tại $A(-1; -1)$ là $y = 3(x + 1) - 1 = 3x + 2 \\Leftrightarrow 3x - y + 2 = 0$.\n' +
      'Hoành độ giao điểm của tiếp tuyến và đường cong: $x^3 = 3x + 2 \\Leftrightarrow (x + 1)^2(x - 2) = 0 \\Rightarrow B(2; 8)$.\n' +
      'Ta có $AB^2 = (2 - (-1))^2 + (8 - (-1))^2 = 9 + 81 = 90$, nên diện tích đường tròn $(C)$ là:\n' +
      '$S_1 = \\pi \\left(\\dfrac{AB}{2}\\right)^2 = \\dfrac{90\\pi}{4} = \\dfrac{45\\pi}{2}$.\n' +
      'Gọi $P(x; x^3)$ với $x \\in (-1; 2)$. Khoảng cách từ $P$ đến đường thẳng $AB$ là:\n' +
      '$d = \\dfrac{|3x - x^3 + 2|}{\\sqrt{3^2 + (-1)^2}} = \\dfrac{3x - x^3 + 2}{\\sqrt{10}}$.\n' +
      'Xét hàm số $g(x) = 3x - x^3 + 2$ trên $(-1; 2)$: $g\'(x) = 3 - 3x^2 = 0 \\Leftrightarrow x = 1$ (vì $x \\in (-1; 2)$).\n' +
      'Giá trị lớn nhất của $g(x)$ trên $(-1; 2)$ là $g(1) = 4 \\Rightarrow d_{\\max} = \\dfrac{4}{\\sqrt{10}}$.\n' +
      'Khi đó diện tích $S_2$ lớn nhất là $S_{2\\max} = \\dfrac{\\pi d_{\\max}^2}{4} = \\dfrac{\\pi}{4} \\cdot \\dfrac{16}{10} = \\dfrac{2\\pi}{5}$.\n' +
      'Vậy giá trị nhỏ nhất của $S_1 - S_2$ là:\n' +
      '$\\min(S_1 - S_2) = \\dfrac{45\\pi}{2} - \\dfrac{2\\pi}{5} = \\dfrac{221\\pi}{10} \\approx 69,4$.',
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Người ta chọn các số tự nhiên có $4$ chữ số, các chữ số đôi một khác nhau và là bội của $25$. Các số này được đưa vào máy hàm số dưới đây.\nTheo đó, xác suất để kết quả đưa ra từ máy bằng $10$ là bao nhiêu (làm tròn kết quả đến hàng phần trăm)?',
    diagramType: 'DE15_MACHINE_P3_Q6',
    correctAnswer: '0.03',
    explanation:
      'Gọi số tự nhiên có $4$ chữ số đôi một khác nhau và chia hết cho $25$ là $\\overline{abcd}$ ($a \\neq 0$).\n' +
      'Vì các chữ số đôi một khác nhau và chia hết cho $25$ nên $\\overline{cd} \\in \\{25; 50; 75\\}$.\n' +
      '• **Tính số phần tử của không gian mẫu $n(\\Omega)$**:\n' +
      '  - Nếu $\\overline{cd} = 50$: có $8$ cách chọn $a \\notin \\{0; 5\\}$ và $7$ cách chọn $b \\notin \\{0; 5; a\\} \\Rightarrow 8 \\cdot 7 = 56$ số.\n' +
      '  - Nếu $\\overline{cd} = 25$: có $7$ cách chọn $a \\notin \\{0; 2; 5\\}$ và $7$ cách chọn $b \\notin \\{2; 5; a\\} \\Rightarrow 7 \\cdot 7 = 49$ số.\n' +
      '  - Nếu $\\overline{cd} = 75$: có $7$ cách chọn $a \\notin \\{0; 7; 5\\}$ và $7$ cách chọn $b \\notin \\{7; 5; a\\} \\Rightarrow 7 \\cdot 7 = 49$ số.\n' +
      'Suy ra $n(\\Omega) = 56 + 49 + 49 = 154$.\n' +
      '• **Đếm số các số có tổng các chữ số $f(x) = a + b + c + d = 10$**:\n' +
      '  - Trường hợp $\\overline{cd} = 50 \\Rightarrow a + b = 5$ (với $a \\ge 1; a, b \\notin \\{0; 5\\}; a \\neq b$): có $4$ cặp $(a; b)$ là $(1; 4), (4; 1), (2; 3), (3; 2) \\Rightarrow 4$ số.\n' +
      '  - Trường hợp $\\overline{cd} = 25 \\Rightarrow a + b = 3$ (với $a \\ge 1; a, b \\notin \\{2; 5\\}; a \\neq b$): chỉ có $1$ cặp $(a; b) = (3; 0) \\Rightarrow 1$ số ($3025$).\n' +
      '  - Trường hợp $\\overline{cd} = 75 \\Rightarrow c + d = 12 > 10$: không có số nào.\n' +
      'Vậy có $4 + 1 = 5$ số thỏa mãn. Xác suất cần tìm là $P = \\dfrac{5}{154} \\approx 0,03$.',
  },
];
