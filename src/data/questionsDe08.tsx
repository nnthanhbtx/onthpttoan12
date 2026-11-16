import { Question } from '../types';

const PART_I_TITLE =
  'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.';
const PART_II_TITLE =
  'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.';
const PART_III_TITLE =
  'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.';

export const QUESTIONS_DE08: Question[] = [
  // =================================================================
  // PHẦN I: CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (Câu 1 -> Câu 12)
  // =================================================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Đường cong trong hình vẽ bên là của đồ thị hàm số nào trong các hàm số được cho bởi các phương án A, B, C, D dưới đây?',
    diagramType: 'DE08_GRAPH_P1_Q1',
    options: [
      { key: 'A', text: '$y = \\dfrac{2x - 1}{x - 1}$' },
      { key: 'B', text: '$y = \\dfrac{-x + 1}{x + 1}$' },
      { key: 'C', text: '$y = \\dfrac{2x - 2}{2x + 1}$' },
      { key: 'D', text: '$y = \\dfrac{x + 1}{x - 1}$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Quan sát đồ thị hàm số phân thức bậc nhất trên bậc nhất:\n• Đường tiệm cận đứng là $x = 1$ (loại phương án B có TCĐ $x = -1$ và phương án C có TCĐ $x = -\\dfrac{1}{2}$).\n• Đường tiệm cận ngang là $y = 1$ (loại phương án A có TCN $y = 2$).\n• Đồ thị cắt trục tung tại $(0; -1)$ và cắt trục hoành tại $(-1; 0)$, hoàn toàn trùng khớp với hàm số $y = \\dfrac{x + 1}{x - 1}$.\nChọn đáp án D.',
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng xét dấu $f\'(x)$ cho như hình vẽ.\nHàm số đã cho nghịch biến trên khoảng nào dưới đây?',
    diagramType: 'DE08_SIGN_TABLE_P1_Q2',
    options: [
      { key: 'A', text: '$(2; +\\infty)$' },
      { key: 'B', text: '$(-2; 0)$' },
      { key: 'C', text: '$(-\\infty; 0)$' },
      { key: 'D', text: '$(0; 2)$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Dựa vào bảng xét dấu đạo hàm $f\'(x)$:\n• $f\'(x) < 0$ trên các khoảng $(-\\infty; -2)$ và $(0; 2)$.\n• Do đó hàm số đã cho nghịch biến trên khoảng $(0; 2)$.\nChọn đáp án D.',
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Đường tiệm cận ngang của đồ thị hàm số $y = \\dfrac{4x + 1}{2x - 2}$ là:',
    options: [
      { key: 'A', text: '$y = 2$' },
      { key: 'B', text: '$x = 2$' },
      { key: 'C', text: '$x = 1$' },
      { key: 'D', text: '$y = 1$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ta có:\n$$\\lim_{x \\to \\pm\\infty} \\dfrac{4x + 1}{2x - 2} = \\dfrac{4}{2} = 2$$\nVậy đường tiệm cận ngang của đồ thị hàm số là $y = 2$.\nChọn đáp án A.',
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Trong một hồ nước có một con amip. Sau $1$ ngày, con amip này phân chia thành $2$ con. Mỗi con amip được tạo thành tiếp tục phân chia theo cách tương tự vào ngày hôm sau. Hỏi đến ngày thứ $6$, trong hồ có bao nhiêu con amip?',
    diagramType: 'DE08_AMOEBA_P1_Q4',
    options: [
      { key: 'A', text: '$16$' },
      { key: 'B', text: '$24$' },
      { key: 'C', text: '$32$' },
      { key: 'D', text: '$48$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Theo sơ đồ phân chia:\n• Ngày thứ $1$: có $u_1 = 1 = 2^0$ (con amip).\n• Ngày thứ $2$: có $u_2 = 2 = 2^1$ (con amip).\n• Ngày thứ $3$: có $u_3 = 4 = 2^2$ (con amip).\nSố lượng con amip ở các ngày lập thành một cấp số nhân có số hạng đầu $u_1 = 1$ và công bội $q = 2$.\nĐến ngày thứ $6$, số con amip trong hồ là:\n$$u_6 = u_1 \\cdot q^{6 - 1} = 1 \\cdot 2^5 = 32\\text{ (con)}$$\nChọn đáp án C.',
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hàm số $f(x)$ và đạo hàm $f\'(x)$ có đồ thị như hình vẽ. Biết $g(x) = x^3 - x$.\nTính $[g(f(x))]\'$ tại $x = 5$.',
    diagramType: 'DE08_GRAPHS_P1_Q5',
    options: [
      { key: 'A', text: '$9$' },
      { key: 'B', text: '$12$' },
      { key: 'C', text: '$16$' },
      { key: 'D', text: '$21$' },
    ],
    correctAnswer: 'C',
    explanation:
      '• Ta có $g(x) = x^3 - x \\implies g\'(x) = 3x^2 - 1$.\n• Áp dụng quy tắc đạo hàm hàm hợp:\n$$[g(f(x))]\' = f\'(x) \\cdot g\'(f(x))$$\n• Quan sát hai đồ thị tại $x = 5$, ta có $f(5) = \\sqrt{3}$ và $f\'(5) = 2$.\n• Suy ra tại $x = 5$:\n$$[g(f(x))]\'\\big|_{x=5} = f\'(5) \\cdot g\'(f(5)) = 2 \\cdot g\'(\\sqrt{3}) = 2 \\cdot \\left[3(\\sqrt{3})^2 - 1\\right] = 2 \\cdot (9 - 1) = 16$$\nChọn đáp án C.',
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hàm số $f(x) = \\log_2 x - (x - 1)^2$. Tập nghiệm của bất phương trình $f(x) < 0$ là:',
    options: [
      { key: 'A', text: '$(-\\infty; 1) \\cup (2; +\\infty)$' },
      { key: 'B', text: '$(0; 1) \\cup (2; +\\infty)$' },
      { key: 'C', text: '$(1; 2)$' },
      { key: 'D', text: '$(1; +\\infty)$' },
    ],
    correctAnswer: 'B',
    explanation:
      '• Điều kiện xác định: $x > 0$ (loại phương án A).\n• Xét hàm số $f(x) = \\log_2 x - (x - 1)^2$ trên khoảng $(0; +\\infty)$:\n  - Ta có $f(1) = \\log_2 1 - (1 - 1)^2 = 0$ và $f(2) = \\log_2 2 - (2 - 1)^2 = 1 - 1 = 0$.\n  - Đạo hàm cấp hai $f\'\'(x) = -\\dfrac{1}{x^2\\ln 2} - 2 < 0, \\forall x > 0$, nên hàm số $f(x)$ lõm trên $(0; +\\infty)$ và phương trình $f(x) = 0$ có đúng $2$ nghiệm là $x = 1, x = 2$.\n  - Trên khoảng $(1; 2)$ ta có $f(x) > 0$; trên các khoảng $(0; 1)$ và $(2; +\\infty)$ ta có $f(x) < 0$.\n• Vậy tập nghiệm của bất phương trình $f(x) < 0$ là $S = (0; 1) \\cup (2; +\\infty)$.\nChọn đáp án B.',
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Một khối hộp chữ nhật có ba kích thước là $5, 6, 7$ có thể tích bằng:',
    options: [
      { key: 'A', text: '$70$' },
      { key: 'B', text: '$35$' },
      { key: 'C', text: '$210$' },
      { key: 'D', text: '$105$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Thể tích của khối hộp chữ nhật có ba kích thước $a = 5, b = 6, c = 7$ là:\n$$V = a \\cdot b \\cdot c = 5 \\cdot 6 \\cdot 7 = 210$$\nChọn đáp án C.',
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Hình bên gồm $5$ đường thẳng song song theo phương đứng và $4$ đường thẳng song song theo phương ngang. Có bao nhiêu hình bình hành khác nhau được tạo thành?',
    diagramType: 'DE08_GRID_LINES_P1_Q8',
    options: [
      { key: 'A', text: '$60$' },
      { key: 'B', text: '$84$' },
      { key: 'C', text: '$96$' },
      { key: 'D', text: '$144$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Cứ $2$ đường thẳng song song theo phương đứng kết hợp với $2$ đường thẳng song song theo phương ngang sẽ tạo thành duy nhất $1$ hình bình hành.\nSố hình bình hành được tạo thành là:\n$$C_5^2 \\cdot C_4^2 = 10 \\cdot 6 = 60\\text{ (hình bình hành)}$$\nChọn đáp án A.',
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f\'(x) = (x + 1)^3(x - 1)(x - 2)$. Số điểm cực trị của hàm số đã cho là:',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$2$' },
      { key: 'D', text: '$0$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ta có:\n$$f\'(x) = 0 \\iff (x + 1)^3(x - 1)(x - 2) = 0 \\iff \\left[\\begin{array}{l} x = -1 \\text{ (nghiệm bội } 3\\text{)} \\\\ x = 1 \\text{ (nghiệm đơn)} \\\\ x = 2 \\text{ (nghiệm đơn)} \\end{array}\\right.$$\nVì cả $3$ nghiệm $x = -1, x = 1, x = 2$ đều là nghiệm bội lẻ nên $f\'(x)$ đổi dấu khi đi qua cả $3$ điểm này.\nVậy hàm số đã cho có $3$ điểm cực trị.\nChọn đáp án B.',
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Hình chữ nhật $ABCD$ có $AB = 6 - x,\\ (x \\ge 0),\\ BC = x^2 + 9$. Diện tích lớn nhất của hình chữ nhật trên bằng bao nhiêu?',
    diagramType: 'DE08_RECTANGLE_P1_Q10',
    options: [
      { key: 'A', text: '$18$' },
      { key: 'B', text: '$24$' },
      { key: 'C', text: '$30$' },
      { key: 'D', text: '$54$' },
    ],
    correctAnswer: 'D',
    explanation:
      '• Điều kiện: $x \\ge 0$ và $AB = 6 - x > 0 \\iff 0 \\le x < 6$.\n• Diện tích hình chữ nhật $ABCD$ là:\n$$S(x) = AB \\cdot BC = (6 - x)(x^2 + 9) = -x^3 + 6x^2 - 9x + 54, \\quad x \\in [0; 6)$$\n• Đạo hàm:\n$$S\'(x) = -3x^2 + 12x - 9 = 0 \\iff \\left[\\begin{array}{l} x = 1 \\in [0; 6) \\\\ x = 3 \\in [0; 6) \\end{array}\\right.$$\n• Tính giá trị của $S(x)$:\n  - $S(0) = 6 \\cdot 9 = 54$.\n  - $S(1) = 5 \\cdot 10 = 50$.\n  - $S(3) = 3 \\cdot 18 = 54$.\n• Vậy diện tích lớn nhất của hình chữ nhật bằng $54$ (đạt được khi $x = 3$ hoặc $x = 0$).\nChọn đáp án D.',
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho tứ diện $ABCD$, gọi $I$ là trung điểm của đoạn thẳng $BC$. Véc tơ $\\overrightarrow{BI}$ cùng hướng với véc tơ nào sau đây?',
    diagramType: 'DE08_TETRAHEDRON_P1_Q11',
    options: [
      { key: 'A', text: '$\\overrightarrow{AB}$' },
      { key: 'B', text: '$\\overrightarrow{CI}$' },
      { key: 'C', text: '$\\overrightarrow{CD}$' },
      { key: 'D', text: '$\\overrightarrow{BC}$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Vì $I$ là trung điểm của đoạn thẳng $BC$ nên $\\overrightarrow{BC} = 2\\overrightarrow{BI}$. Do đó véc tơ $\\overrightarrow{BI}$ cùng hướng với véc tơ $\\overrightarrow{BC}$.\nChọn đáp án D.',
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho tứ diện $ABCD$ có $G$ là trọng tâm tam giác $ABC$. Véc tơ $\\overrightarrow{DA} + \\overrightarrow{DB} + \\overrightarrow{DC}$ bằng:',
    options: [
      { key: 'A', text: '$2\\overrightarrow{DG}$' },
      { key: 'B', text: '$3\\overrightarrow{DG}$' },
      { key: 'C', text: '$3\\overrightarrow{AG}$' },
      { key: 'D', text: '$\\overrightarrow{DG}$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Vì $G$ là trọng tâm của tam giác $ABC$ nên $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{0}$.\nVới điểm $D$ bất kỳ, theo quy tắc chèn điểm $G$ ta có:\n$$\\overrightarrow{DA} + \\overrightarrow{DB} + \\overrightarrow{DC} = 3\\overrightarrow{DG} + (\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC}) = 3\\overrightarrow{DG}$$\nChọn đáp án B.',
  },

  // =================================================================
  // PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG SAI (Câu 1 -> Câu 4, ứng với id 13 -> 16)
  // =================================================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Cho hàm số $y = \\dfrac{x^2 - x + 7}{x + 1}$.',
    statements: [
      {
        key: 'a',
        text: 'Đồ thị hàm số có hai điểm cực trị.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Hàm số nghịch biến trên khoảng $(-4; -1)$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Đường tiệm cận xiên của đồ thị hàm số là đường thẳng $y = x - 2$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Giá trị lớn nhất của hàm số trên khoảng $(-\\infty; -1)$ bằng $3$.',
        correct: false,
      },
    ],
    explanation:
      'Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.\nTa viết lại hàm số:\n$$y = \\dfrac{x^2 - x + 7}{x + 1} = x - 2 + \\dfrac{9}{x + 1}$$\nĐạo hàm:\n$$y\' = 1 - \\dfrac{9}{(x + 1)^2} = \\dfrac{(x + 1)^2 - 9}{(x + 1)^2} = \\dfrac{(x + 4)(x - 2)}{(x + 1)^2}$$\nCho $y\' = 0 \\iff x = -4$ hoặc $x = 2$.\n• **Ý a) Đúng**: Đạo hàm $y\'$ đổi dấu qua hai nghiệm đơn $x = -4$ và $x = 2$ nên đồ thị hàm số có hai điểm cực trị.\n• **Ý b) Đúng**: Với mọi $x \\in (-4; -1)$ thì $(x + 4)(x - 2) < 0 \\implies y\' < 0$, nên hàm số nghịch biến trên khoảng $(-4; -1)$.\n• **Ý c) Đúng**: Vì $\\lim_{x \\to \\pm\\infty} [y - (x - 2)] = \\lim_{x \\to \\pm\\infty} \\dfrac{9}{x + 1} = 0$ nên đường thẳng $y = x - 2$ là tiệm cận xiên của đồ thị hàm số.\n• **Ý d) Sai**: Trên khoảng $(-\\infty; -1)$, hàm số đồng biến trên $(-\\infty; -4)$ và nghịch biến trên $(-4; -1)$, nên đạt giá trị lớn nhất tại $x = -4$:\n$$\\max_{(-\\infty; -1)} y = y(-4) = -4 - 2 + \\dfrac{9}{-3} = -9 \\neq 3$$\n(Giá trị $y(2) = 3$ là giá trị nhỏ nhất trên khoảng $(-1; +\\infty)$).',
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật với $AB = 2a,\\ AD = 6a$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy, cạnh bên $SB = 4a$.',
    diagramType: 'DE08_PYRAMID_P2_Q2',
    statements: [
      {
        key: 'a',
        text: '$SA = 2\\sqrt{3}a$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Góc giữa đường thẳng $SD$ và mặt phẳng $(ABCD)$ bằng $30^\\circ$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Khoảng cách từ điểm $C$ tới mặt phẳng $(SAD)$ bằng $6a$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Thể tích của khối chóp $S.ABCD$ bằng $8\\sqrt{3}a^3$.',
        correct: true,
      },
    ],
    explanation:
      '• **Ý a) Đúng**: Vì $SA \\perp (ABCD)$ nên $\\triangle SAB$ vuông tại $A$. Theo định lý Pythagore:\n$$SA = \\sqrt{SB^2 - AB^2} = \\sqrt{(4a)^2 - (2a)^2} = \\sqrt{12a^2} = 2\\sqrt{3}a$$\n• **Ý b) Đúng**: Hình chiếu vuông góc của $SD$ lên $(ABCD)$ là $AD$, nên góc giữa $SD$ và $(ABCD)$ là $\\angle SDA$.\nTrong $\\triangle SAD$ vuông tại $A$:\n$$\\tan \\angle SDA = \\dfrac{SA}{AD} = \\dfrac{2\\sqrt{3}a}{6a} = \\dfrac{\\sqrt{3}}{3} \\implies \\angle SDA = 30^\\circ$$\n• **Ý c) Sai**: Vì $CD \\perp AD$ và $CD \\perp SA \\implies CD \\perp (SAD)$ tại $D$. Do đó khoảng cách từ $C$ tới mặt phẳng $(SAD)$ là:\n$$d(C, (SAD)) = CD = AB = 2a \\neq 6a$$\n• **Ý d) Đúng**: Diện tích đáy $S_{ABCD} = AB \\cdot AD = 2a \\cdot 6a = 12a^2$.\nThể tích khối chóp $S.ABCD$ là:\n$$V = \\dfrac{1}{3} S_{ABCD} \\cdot SA = \\dfrac{1}{3} \\cdot 12a^2 \\cdot 2\\sqrt{3}a = 8\\sqrt{3}a^3$$',
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Một chất điểm chuyển động theo phương trình $s(t) = t^3 - 3t^2 + 6t + 4$, trong đó $0 \\le t \\le 10$, $t$ tính bằng giây và $s(t)$ tính bằng mét.',
    statements: [
      {
        key: 'a',
        text: 'Quãng đường chất điểm chuyển động trong $2\\text{ (s)}$ đầu tiên là $8\\text{ (m)}$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Vận tốc tức thời của chất điểm tại thời điểm $t = 3\\text{ (s)}$ là $15\\text{ (m/s)}$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Tại thời điểm mà $s(t) = 22\\text{ (m)}$ thì gia tốc tức thời của chất điểm là $12\\text{ (m/s}^2\\text{)}$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Tại thời điểm $t = 2\\text{ (s)}$ vận tốc tức thời của chất điểm đạt giá trị nhỏ nhất.',
        correct: false,
      },
    ],
    explanation:
      'Ta có phương trình vận tốc và gia tốc tức thời:\n$$v(t) = s\'(t) = 3t^2 - 6t + 6 = 3(t - 1)^2 + 3 > 0, \\quad \\forall t \\in [0; 10]$$\n$$a(t) = v\'(t) = 6t - 6$$\n• **Ý a) Đúng**: Vì $v(t) > 0, \\forall t$ nên chất điểm luôn chuyển động theo một chiều dương. Quãng đường chất điểm đi được trong $2\\text{ (s)}$ đầu tiên là:\n$$\\Delta s = s(2) - s(0) = (2^3 - 3 \\cdot 2^2 + 6 \\cdot 2 + 4) - 4 = 12 - 4 = 8\\text{ (m)}$$\n• **Ý b) Đúng**: Vận tốc tức thời tại $t = 3\\text{ (s)}$ là:\n$$v(3) = 3 \\cdot 3^2 - 6 \\cdot 3 + 6 = 27 - 18 + 6 = 15\\text{ (m/s)}$$\n• **Ý c) Đúng**: Khi $s(t) = 22\\text{ (m)}$:\n$$t^3 - 3t^2 + 6t + 4 = 22 \\iff t^3 - 3t^2 + 6t - 18 = 0 \\iff (t - 3)(t^2 + 6) = 0 \\iff t = 3\\text{ (s)}$$\nGia tốc tức thời tại $t = 3\\text{ (s)}$ là $a(3) = 6 \\cdot 3 - 6 = 12\\text{ (m/s}^2\\text{)}$.\n• **Ý d) Sai**: Vì $v(t) = 3(t - 1)^2 + 3 \\ge 3$ nên vận tốc tức thời đạt giá trị nhỏ nhất bằng $3\\text{ (m/s)}$ tại thời điểm $t = 1\\text{ (s)}$ (không phải $t = 2\\text{ (s)}$).',
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Trong lớp 12X có $50\\%$ học sinh thích học môn Toán, $45\\%$ học sinh thích học môn Ngữ Văn và $35\\%$ học sinh thích học cả hai môn Toán và Ngữ Văn. Giáo viên chủ nhiệm chọn ngẫu nhiên một học sinh trong lớp 12X.',
    statements: [
      {
        key: 'a',
        text: 'Xác suất chọn được học sinh thích học môn Ngữ Văn là $0,5$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Xác suất chọn được học sinh thích học ít nhất một trong hai môn Toán và Ngữ Văn là $0,6$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Xác suất chọn được học sinh chỉ thích học môn Toán mà không thích học môn Ngữ Văn là $0,15$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Xác suất chọn được học sinh thích học cả hai môn Toán và Ngữ Văn là $0,35$.',
        correct: true,
      },
    ],
    explanation:
      'Gọi $A$ là biến cố "Học sinh được chọn thích môn Toán" $\\implies P(A) = 0,5$.\nGọi $B$ là biến cố "Học sinh được chọn thích môn Ngữ Văn" $\\implies P(B) = 0,45$.\nBiến cố học sinh thích cả hai môn có xác suất $P(A \\cap B) = 0,35$.\n• **Ý a) Sai**: Xác suất chọn được học sinh thích học môn Ngữ Văn là $P(B) = 0,45 \\neq 0,5$.\n• **Ý b) Đúng**: Theo công thức cộng xác suất:\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0,5 + 0,45 - 0,35 = 0,6$$\n• **Ý c) Đúng**: Xác suất học sinh chỉ thích môn Toán mà không thích Ngữ Văn là:\n$$P(A \\setminus B) = P(A) - P(A \\cap B) = 0,5 - 0,35 = 0,15$$\n• **Ý d) Đúng**: Xác suất học sinh thích cả hai môn Toán và Ngữ Văn là $P(A \\cap B) = 0,35$.',
  },

  // =================================================================
  // PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (Câu 1 -> Câu 6, ứng với id 17 -> 22)
  // =================================================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Cho tam giác vuông $ABC$ vuông tại $B$, có $AB = 12$ và $BC = 9$. Hình chữ nhật $BKLM$ nội tiếp tam giác như hình vẽ. Diện tích lớn nhất của hình chữ nhật $BKLM$ bằng bao nhiêu?',
    diagramType: 'DE08_TRIANGLE_RECT_P3_Q1',
    correctAnswer: '27',
    explanation:
      '• Đặt hai kích thước của hình chữ nhật $BKLM$ là $BM = KL = x\\ (0 < x < 9)$ và $BK = ML = y\\ (0 < y < 12)$.\n• Vì $ML \\parallel AB$ nên theo định lý Thales trong $\\triangle ABC$:\n$$\\dfrac{CM}{CB} = \\dfrac{ML}{AB} \\iff \\dfrac{9 - x}{9} = \\dfrac{y}{12} \\iff \\dfrac{x}{9} + \\dfrac{y}{12} = 1$$\n• Áp dụng bất đẳng thức Cauchy cho hai số dương $\\dfrac{x}{9}$ và $\\dfrac{y}{12}$:\n$$1 = \\dfrac{x}{9} + \\dfrac{y}{12} \\ge 2\\sqrt{\\dfrac{x}{9} \\cdot \\dfrac{y}{12}} = 2\\sqrt{\\dfrac{xy}{108}} \\iff \\dfrac{xy}{108} \\le \\dfrac{1}{4} \\iff xy \\le 27$$\n• Dấu "$=$" xảy ra khi $\\dfrac{x}{9} = \\dfrac{y}{12} = \\dfrac{1}{2} \\iff x = 4,5;\\ y = 6$.\nVậy diện tích lớn nhất của hình chữ nhật $BKLM$ bằng $27$.\nĐáp số: $27$.',
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Cho hình lập phương $ABCD.A_1B_1C_1D_1$ có cạnh bằng $2$. Điểm $E$ là trung điểm của cạnh $CC_1$. Mặt phẳng đi qua ba điểm $A, D_1, E$ chia hình lập phương thành hai phần. Tỉ số giữa thể tích phần lớn và thể tích phần nhỏ bằng bao nhiêu (viết dưới dạng phân số tối giản `17/7` hoặc làm tròn đến hàng phần trăm)?',
    diagramType: 'DE08_CUBE_PLANE_P3_Q2',
    correctAnswer: '17/7',
    explanation:
      '• Thể tích của khối lập phương cạnh $a = 2$ là $V = 2^3 = 8$.\n• Trong mặt phẳng $(CDD_1C_1)$, gọi $K = D_1E \\cap DC$. Vì $CE \\parallel DD_1$ và $CE = 1 = \\dfrac{1}{2}DD_1$ nên $C$ là trung điểm của $DK$ ($CK = CD = 2$).\n• Trong mặt phẳng $(ABCD)$, gọi $F = AK \\cap BC$. Vì $CF \\parallel AD$ nên $F$ là trung điểm của $BC$ ($CF = 1$).\n• Mặt phẳng $(AD_1E)$ cắt khối lập phương theo thiết diện $AD_1EF$ và tách ra phần nhỏ là khối chóp cụt tam giác $C.FE - D.D_1A$ có:\n  - Chiều cao $h = CD = 2$.\n  - Diện tích đáy lớn $S_1 = S_{\\triangle ADD_1} = \\dfrac{1}{2} \\cdot 2 \\cdot 2 = 2$.\n  - Diện tích đáy nhỏ $S_2 = S_{\\triangle FCE} = \\dfrac{1}{2} \\cdot 1 \\cdot 1 = \\dfrac{1}{2}$.\n• Thể tích phần nhỏ là:\n$$V_{\\text{nhỏ}} = \\dfrac{h}{3}\\left(S_1 + S_2 + \\sqrt{S_1 S_2}\\right) = \\dfrac{2}{3}\\left(2 + \\dfrac{1}{2} + \\sqrt{2 \\cdot \\dfrac{1}{2}}\\right) = \\dfrac{2}{3} \\cdot \\dfrac{7}{2} = \\dfrac{7}{3}$$\n• Thể tích phần lớn là:\n$$V_{\\text{lớn}} = V - V_{\\text{nhỏ}} = 8 - \\dfrac{7}{3} = \\dfrac{17}{3}$$\n• Tỉ số giữa thể tích phần lớn và thể tích phần nhỏ là:\n$$\\dfrac{V_{\\text{lớn}}}{V_{\\text{nhỏ}}} = \\dfrac{17/3}{7/3} = \\dfrac{17}{7} \\approx 2,43$$\nĐáp số: $17/7$ (hoặc $2,43$).',
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Trong khoảng thời gian từ ngày 01/01/2024 đến hết ngày 30/12/2024 nhóm nghiên cứu đã quan sát sự phát triển của một quần thể sinh vật X. Kết quả nghiên cứu chỉ ra rằng, tại ngày thứ $t$ của năm 2024 (tính từ ngày 01/01/2024) số cá thể sinh vật X trong quần thể được ước lượng bởi hàm số $f(t) = -\\dfrac{1}{300}t^3 + bt^2 + ct + 12000$ (con), $0 \\le t \\le 365$ và ngày 26/09/2024 là ngày có số lượng cá thể sinh vật X nhiều nhất với $55\\,740$ con. Ngày 25/11/2024 số lượng cá thể sinh vật X được ước lượng khoảng bao nhiêu nghìn con? (Kết quả làm tròn đến hàng phần chục).',
    correctAnswer: '49,6',
    explanation:
      '• Năm 2024 là năm nhuận (tháng 2 có $29$ ngày). Tính từ ngày 01/01/2024 ($t = 1$):\n  - Tổng số ngày của 8 tháng đầu năm: $31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244$ (ngày).\n  - Ngày 26/09/2024 ứng với ngày thứ $t_1 = 244 + 26 = 270$.\n  - Ngày 25/11/2024 ứng với ngày thứ $t_2 = 270 + 4 + 31 + 25 = 330$.\n• Hàm số $f(t) = -\\dfrac{1}{300}t^3 + bt^2 + ct + 12000$ có đạo hàm:\n$$f\'(t) = -\\dfrac{1}{100}t^2 + 2bt + c$$\n• Vì tại $t = 270$, hàm số đạt giá trị lớn nhất bằng $55\\,740$ nên:\n$$\\begin{cases} f\'(270) = 0 \\\\ f(270) = 55\\,740 \\end{cases} \\iff \\begin{cases} 540b + c = \\dfrac{270^2}{100} = 729 \\\\ 270^2 b + 270c = 55\\,740 - 12\\,000 + \\dfrac{270^3}{300} = 109\\,350 \\end{cases}$$\n$$\\iff \\begin{cases} 540b + c = 729 \\\\ 270b + c = 405 \\end{cases} \\iff \\begin{cases} b = 1,2 \\\\ c = 81 \\end{cases}$$\n• Vậy $f(t) = -\\dfrac{1}{300}t^3 + 1,2t^2 + 81t + 12000$.\n• Tại ngày 25/11/2024 ($t = 330$), số lượng cá thể sinh vật X là:\n$$f(330) = -\\dfrac{330^3}{300} + 1,2 \\cdot 330^2 + 81 \\cdot 330 + 12000 = 49\\,620\\text{ (con)} = 49,62\\text{ (nghìn con)} \\approx 49,6\\text{ (nghìn con)}$$\nĐáp số: $49,6$.',
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Trong đại hội Thể thao Sinh viên Thế giới, có $10$ thanh niên tình nguyện, gồm $6$ nam và $4$ nữ. Chọn ra $5$ tình nguyện viên gồm $3$ nam và $2$ nữ, rồi phân công đến $5$ địa điểm thi đấu được đánh số $1, 2, 3, 4, 5$, mỗi địa điểm có đúng một tình nguyện viên. Trong đó, nữ tình nguyện viên Hà không được phân công đến địa điểm số $1$ hoặc số $2$, đồng thời địa điểm số $2$ bắt buộc phải bố trí một nữ tình nguyện viên. Khi đó số phương án phân công khác nhau là bao nhiêu?',
    correctAnswer: '3960',
    explanation:
      '• Số cách chọn $3$ tình nguyện viên nam từ $6$ nam là $C_6^3 = 20$ (cách).\n• Xét việc chọn $2$ nữ từ $4$ nữ (gồm Hà và $3$ nữ khác) và phân công vào $5$ địa điểm:\n  - **Trường hợp 1: Trong $2$ nữ được chọn không có Hà**\n    + Chọn $2$ nữ từ $3$ nữ còn lại: $C_3^2 = 3$ (cách).\n    + Chọn $1$ nữ trong $2$ nữ đã chọn để xếp vào địa điểm số $2$: có $2$ (cách).\n    + Xếp $4$ người còn lại ($1$ nữ và $3$ nam) vào $4$ địa điểm còn lại: có $4! = 24$ (cách).\n    + Số phương án ở TH1 là: $20 \\cdot 3 \\cdot 2 \\cdot 24 = 2880$ (phương án).\n  - **Trường hợp 2: Trong $2$ nữ được chọn có Hà**\n    + Chọn thêm $1$ nữ từ $3$ nữ còn lại: $C_3^1 = 3$ (cách).\n    + Vì địa điểm số $2$ bắt buộc là nữ mà Hà không được ở địa điểm số $1$ hoặc số $2$, nên bạn nữ còn lại bắt buộc phải ở địa điểm số $2$: có $1$ (cách).\n    + Xếp Hà vào một trong $3$ địa điểm $(3, 4, 5)$: có $3$ (cách).\n    + Xếp $3$ bạn nam vào $3$ địa điểm còn lại: có $3! = 6$ (cách).\n    + Số phương án ở TH2 là: $20 \\cdot 3 \\cdot 1 \\cdot 3 \\cdot 6 = 1080$ (phương án).\n• Tổng số phương án phân công khác nhau là:\n$$2880 + 1080 = 3960\\text{ (phương án)}$$\nĐáp số: $3960$.',
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Cho hàm số $y = x^3 - 11x^2 + px - p$ có đồ thị $(C)$. Biết $(C)$ cắt trục hoành tại ba điểm phân biệt có hoành độ là các số tự nhiên $k, m, n$. Tìm giá trị lớn nhất của biểu thức $S = p + 2k + 3m + 4n$.',
    correctAnswer: '73',
    explanation:
      '• Phương trình hoành độ giao điểm của $(C)$ và trục hoành:\n$$x^3 - 11x^2 + px - p = 0$$\n• Theo định lý Vi-ét cho ba nghiệm tự nhiên phân biệt $k, m, n \\in \\mathbb{N}$:\n$$\\begin{cases} k + m + n = 11 \\\\ km + mn + nk = p \\\\ kmn = p \\end{cases}$$\n• Nếu có một nghiệm bằng $0$ thì $p = kmn = 0 \\implies km + mn + nk = 0$, suy ra có ít nhất hai nghiệm bằng $0$ (mâu thuẫn với giả thiết ba nghiệm phân biệt). Do đó $k, m, n \\in \\mathbb{N}^*$.\n• Từ $km + mn + nk = kmn$, chia hai vế cho $kmn > 0$:\n$$\\dfrac{1}{k} + \\dfrac{1}{m} + \\dfrac{1}{n} = 1$$\n• Không mất tính tổng quát, giả sử $1 \\le a < b < c$ là bộ ba số $\\{k, m, n\\}$:\n  - Nếu $a = 1 \\implies \\dfrac{1}{b} + \\dfrac{1}{c} = 0$ (vô lý).\n  - Nếu $a \\ge 3 \\implies \\dfrac{1}{a} + \\dfrac{1}{b} + \\dfrac{1}{c} \\le \\dfrac{1}{3} + \\dfrac{1}{4} + \\dfrac{1}{5} = \\dfrac{47}{60} < 1$ (vô lý).\n  - Suy ra $a = 2$. Khi đó $b + c = 11 - 2 = 9$ và $\\dfrac{1}{b} + \\dfrac{1}{c} = \\dfrac{1}{2} \\implies bc = 2(b + c) = 18$, suy ra $b = 3, c = 6$.\n• Vậy bộ ba nghiệm là $\\{2; 3; 6\\}$ và $p = 2 \\cdot 3 \\cdot 6 = 36$.\n• Để $S = p + 2k + 3m + 4n$ đạt giá trị lớn nhất, ta chọn $k = 2 < m = 3 < n = 6$:\n$$S_{\\max} = 36 + 2 \\cdot 2 + 3 \\cdot 3 + 4 \\cdot 6 = 36 + 4 + 9 + 24 = 73$$\nĐáp số: $73$.',
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Tangram là kết tinh trí tuệ của người lao động thời cổ đại. Hình vẽ là một tangram do một học sinh ghép từ các tấm gỗ, gồm $5$ tam giác vuông cân, $1$ hình vuông và $1$ hình bình hành.\nDùng $4$ màu để tô các mảnh ghép, yêu cầu:\n* mảnh hình vuông được tô một màu riêng;\n* $6$ mảnh còn lại, cứ $2$ mảnh được tô cùng một màu;\n* hai mảnh có chung cạnh phải được tô khác màu.\nHỏi có bao nhiêu cách tô màu khác nhau?',
    diagramType: 'DE08_TANGRAM_P3_Q6',
    correctAnswer: '72',
    explanation:
      '• **Bước 1**: Chọn $1$ màu trong $4$ màu để tô cho mảnh **hình vuông** riêng biệt: có $4$ cách.\n• **Bước 2**: Còn lại $3$ màu để tô cho $6$ mảnh còn lại: gọi $T_1$ (tam giác lớn bên trái), $T_2$ (tam giác lớn phía trên), $T_3$ (tam giác nhỏ góc trên phải), $T_4$ (tam giác vừa góc dưới phải), $T_5$ (tam giác nhỏ ở giữa dưới) và $P$ (hình bình hành ở đáy), sao cho mỗi màu tô đúng $2$ mảnh không chung cạnh.\n  - Xét mảnh $T_1$: vì $T_1$ có chung cạnh với $T_2, T_5$ và $P$, nên mảnh tô cùng màu với $T_1$ chỉ có thể là **$T_3$** hoặc **$T_4$**:\n    + **TH1 ($T_1$ cùng màu với $T_3$)**: Còn lại $4$ mảnh $\\{T_2, T_4, T_5, P\\}$. Vì hình bình hành $P$ chung cạnh với cả $T_4$ và $T_5$, nên $P$ bắt buộc phải cùng màu với $T_2$, và hai mảnh còn lại $\\{T_4, T_5\\}$ cùng màu (hợp lệ vì chỉ tiếp xúc tại $1$ đỉnh). Trường hợp này có $1$ cách chia cặp: $\\{\\{T_1, T_3\\}, \\{T_2, P\\}, \\{T_4, T_5\\}\\}$.\n    + **TH2 ($T_1$ cùng màu với $T_4$)**: Còn lại $4$ mảnh $\\{T_2, T_3, T_5, P\\}$. Vì $(T_2, T_3)$ chung cạnh và $(T_5, P)$ chung cạnh, nên $T_2$ có thể ghép cặp với $T_5$ hoặc $P$. Ta có $2$ cách chia cặp hợp lệ: $\\{\\{T_1, T_4\\}, \\{T_2, T_5\\}, \\{T_3, P\\}\\}$ và $\\{\\{T_1, T_4\\}, \\{T_2, P\\}, \\{T_3, T_5\\}\\}$.\n  - Tổng cộng có $1 + 2 = 3$ cách chia $6$ mảnh thành $3$ cặp không kề nhau.\n  - Với mỗi cách chia cặp, có $3! = 6$ cách phân phối $3$ màu cho $3$ cặp mảnh.\n• Theo quy tắc nhân, tổng số cách tô màu thỏa mãn yêu cầu là:\n$$4 \\cdot 3 \\cdot 3! = 4 \\cdot 3 \\cdot 6 = 72\\text{ (cách)}$$\nĐáp số: $72$.',
  },
];
