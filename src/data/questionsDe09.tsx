import { Question } from '../types';

const PART_I_TITLE =
  'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.';
const PART_II_TITLE =
  'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.';
const PART_III_TITLE =
  'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.';

export const QUESTIONS_DE09: Question[] = [
  // =================================================================
  // PHẦN I: CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (Câu 1 -> Câu 12)
  // =================================================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hàm số $y = f(x)$ có bảng biến thiên như hình vẽ dưới đây.\nHàm số đã cho nghịch biến trên khoảng:',
    diagramType: 'DE09_BBT_P1_Q1',
    options: [
      { key: 'A', text: '$(0; +\\infty)$' },
      { key: 'B', text: '$(-\\infty; 0)$' },
      { key: 'C', text: '$(0; 1)$' },
      { key: 'D', text: '$(-\\infty; 5)$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dựa vào bảng biến thiên:\n• $f\'(x) < 0$ trên các khoảng $(-\\infty; 0)$ và $(1; +\\infty)$.\n• Do đó hàm số đã cho nghịch biến trên khoảng $(-\\infty; 0)$.\nChọn đáp án B.',
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Hàm số $y = \\dfrac{ax + b}{cx + d}\\ (c \\neq 0, ad - bc \\neq 0)$ có đồ thị dưới đây.\nĐường tiệm cận đứng của đồ thị hàm số là:',
    diagramType: 'DE09_GRAPH_P1_Q2',
    options: [
      { key: 'A', text: '$x = -1$' },
      { key: 'B', text: '$x = 1$' },
      { key: 'C', text: '$x = 2$' },
      { key: 'D', text: '$y = -1$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Quan sát đồ thị hàm số, đường thẳng thẳng đứng đi qua điểm $(2; 0)$ là đường tiệm cận đứng của đồ thị hàm số.\nVậy tiệm cận đứng có phương trình $x = 2$.\nChọn đáp án C.',
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hàm số $y = \\dfrac{ax + b}{cx + d}$ có đồ thị là đường cong như hình vẽ bên. Tọa độ giao điểm của đồ thị hàm số với trục hoành là:',
    diagramType: 'DE09_GRAPH_P1_Q3',
    options: [
      { key: 'A', text: '$(2; 0)$' },
      { key: 'B', text: '$(0; 1)$' },
      { key: 'C', text: '$(1; 0)$' },
      { key: 'D', text: '$(0; 2)$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Quan sát đồ thị hàm số, đường cong cắt trục hoành $Ox$ tại điểm có hoành độ $x = 2$, tung độ $y = 0$.\nVậy tọa độ giao điểm của đồ thị hàm số với trục hoành là $(2; 0)$.\nChọn đáp án A.',
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Trong không gian với hệ trục tọa độ $Oxyz$, cho $\\overrightarrow{a} = -\\overrightarrow{i} + 2\\overrightarrow{j} - 3\\overrightarrow{k}$. Tọa độ của $\\overrightarrow{a}$ là:',
    options: [
      { key: 'A', text: '$\\overrightarrow{a} = (-2; -1; -3)$' },
      { key: 'B', text: '$\\overrightarrow{a} = (-3; 2; -1)$' },
      { key: 'C', text: '$\\overrightarrow{a} = (2; -3; -1)$' },
      { key: 'D', text: '$\\overrightarrow{a} = (-1; 2; -3)$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Theo định nghĩa tọa độ của vectơ trong không gian $Oxyz$: $\\overrightarrow{a} = x\\overrightarrow{i} + y\\overrightarrow{j} + z\\overrightarrow{k} \\iff \\overrightarrow{a} = (x; y; z)$.\nDo đó $\\overrightarrow{a} = -\\overrightarrow{i} + 2\\overrightarrow{j} - 3\\overrightarrow{k} = (-1; 2; -3)$.\nChọn đáp án D.',
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Trong không gian với hệ trục tọa độ $Oxyz$, cho điểm $A(1; 2; -1)$ và $\\overrightarrow{AB} = (1; 3; 1)$ thì tọa độ của điểm $B$ là:',
    options: [
      { key: 'A', text: '$B(2; 5; 0)$' },
      { key: 'B', text: '$B(0; -1; -2)$' },
      { key: 'C', text: '$B(0; 1; 2)$' },
      { key: 'D', text: '$B(-2; -5; 0)$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Gọi $B(x_B; y_B; z_B)$. Ta có:\n$$\\overrightarrow{AB} = (x_B - 1;\\ y_B - 2;\\ z_B + 1) = (1; 3; 1) \\iff \\begin{cases} x_B = 1 + 1 = 2 \\\\ y_B = 2 + 3 = 5 \\\\ z_B = -1 + 1 = 0 \\end{cases} \\implies B(2; 5; 0)$$\nChọn đáp án A.',
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Trong không gian $Oxyz$, cho hai vectơ $\\overrightarrow{u} = (1; -4; 0)$ và $\\overrightarrow{v} = (-1; -2; 1)$. Vectơ $\\overrightarrow{u} + 3\\overrightarrow{v}$ có tọa độ là:',
    options: [
      { key: 'A', text: '$(-2; -10; 3)$' },
      { key: 'B', text: '$(-2; -6; 3)$' },
      { key: 'C', text: '$(-4; -8; 4)$' },
      { key: 'D', text: '$(-2; -10; -3)$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ta có $3\\overrightarrow{v} = (-3; -6; 3)$.\nSuy ra:\n$$\\overrightarrow{u} + 3\\overrightarrow{v} = (1 + (-3);\\ -4 + (-6);\\ 0 + 3) = (-2; -10; 3)$$\nChọn đáp án A.',
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hình chóp cụt tam giác đều $ABC - A_1B_1C_1$ có diện tích đáy trên bằng $\\sqrt{3}$, diện tích đáy dưới bằng $4\\sqrt{3}$, chiều cao bằng $2$.\nKhi đó diện tích toàn phần của hình chóp cụt bằng:',
    diagramType: 'DE09_FRUSTUM_P1_Q7',
    options: [
      { key: 'A', text: '$5\\sqrt{3} + 3\\sqrt{39}$' },
      { key: 'B', text: '$3\\sqrt{39}$' },
      { key: 'C', text: '$5\\sqrt{3} + 18$' },
      { key: 'D', text: '$18$' },
    ],
    correctAnswer: 'A',
    explanation:
      '• Gọi cạnh đáy trên $A_1B_1C_1$ là $a_1$ và cạnh đáy dưới $ABC$ là $a_2$. Vì hai đáy là tam giác đều nên:\n$$S_1 = \\dfrac{a_1^2\\sqrt{3}}{4} = \\sqrt{3} \\implies a_1 = 2; \\qquad S_2 = \\dfrac{a_2^2\\sqrt{3}}{4} = 4\\sqrt{3} \\implies a_2 = 4$$\n• Bán kính đường tròn nội tiếp hai đáy lần lượt là:\n$$r_1 = \\dfrac{a_1\\sqrt{3}}{6} = \\dfrac{\\sqrt{3}}{3}; \\qquad r_2 = \\dfrac{a_2\\sqrt{3}}{6} = \\dfrac{2\\sqrt{3}}{3}$$\n• Độ dài trung đoạn (chiều cao mặt bên hình thang cân) của hình chóp cụt với chiều cao $h = 2$ là:\n$$d = \\sqrt{h^2 + (r_2 - r_1)^2} = \\sqrt{2^2 + \\left(\\dfrac{\\sqrt{3}}{3}\\right)^2} = \\sqrt{4 + \\dfrac{1}{3}} = \\dfrac{\\sqrt{39}}{3}$$\n• Diện tích xung quanh (gồm $3$ mặt bên hình thang cân) là:\n$$S_{\\text{xq}} = 3 \\cdot \\dfrac{a_1 + a_2}{2} \\cdot d = 3 \\cdot \\dfrac{2 + 4}{2} \\cdot \\dfrac{\\sqrt{39}}{3} = 3\\sqrt{39}$$\n• Diện tích toàn phần của hình chóp cụt là:\n$$S_{\\text{tp}} = S_1 + S_2 + S_{\\text{xq}} = \\sqrt{3} + 4\\sqrt{3} + 3\\sqrt{39} = 5\\sqrt{3} + 3\\sqrt{39}$$\nChọn đáp án A.',
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hàm số $y = a\\left(\\dfrac{1}{2}\\right)^{|x|} + b$ có đồ thị đi qua gốc tọa độ và tiến gần vô hạn đến đường thẳng $y = 2$ nhưng không cắt đường thẳng đó. Khi đó $ab =$',
    options: [
      { key: 'A', text: '$-1$' },
      { key: 'B', text: '$-2$' },
      { key: 'C', text: '$-4$' },
      { key: 'D', text: '$-9$' },
    ],
    correctAnswer: 'C',
    explanation:
      '• Khi $x \\to \\pm\\infty$ thì $|x| \\to +\\infty \\implies \\left(\\dfrac{1}{2}\\right)^{|x|} \\to 0$, do đó $\\lim_{x \\to \\pm\\infty} y = b$.\nVì đồ thị tiến gần vô hạn đến đường thẳng $y = 2$ nên $b = 2$.\n• Đồ thị đi qua gốc tọa độ $O(0; 0)$ nên:\n$$y(0) = 0 \\iff a\\left(\\dfrac{1}{2}\\right)^0 + b = 0 \\iff a + 2 = 0 \\iff a = -2$$\n• Vậy $ab = (-2) \\cdot 2 = -4$.\nChọn đáp án C.',
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Đồ thị của hàm số $y = f(x)$ như hình vẽ. Biết $y = f\'(x)$ là đạo hàm của hàm số $y = f(x)$. Khi đó tập nghiệm của bất phương trình $\\dfrac{f\'(x)}{x} < 0$ là:',
    diagramType: 'DE09_GRAPH_P1_Q9',
    options: [
      { key: 'A', text: '$(-3; -1)$' },
      { key: 'B', text: '$(0; 1)$' },
      { key: 'C', text: '$(-3; -1) \\cup (0; 1)$' },
      { key: 'D', text: '$(-\\infty; -3) \\cup (1; +\\infty)$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dựa vào đồ thị của hàm số $y = f(x)$:\n• Hàm số đồng biến ($f\'(x) > 0$) trên các khoảng $(-3; -1)$ và $(1; +\\infty)$.\n• Hàm số nghịch biến ($f\'(x) < 0$) trên các khoảng $(-\\infty; -3)$ và $(-1; 1)$.\nXét bất phương trình $\\dfrac{f\'(x)}{x} < 0$ (điều kiện $x \\neq 0$):\n• **Trường hợp 1**: $\\begin{cases} x < 0 \\\\ f\'(x) > 0 \\end{cases} \\iff x \\in (-3; -1)$.\n• **Trường hợp 2**: $\\begin{cases} x > 0 \\\\ f\'(x) < 0 \\end{cases} \\iff x \\in (0; 1)$.\nVậy tập nghiệm của bất phương trình là $(-3; -1) \\cup (0; 1)$.\nChọn đáp án C.',
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Trong $5$ giây đầu tiên, một chất điểm chuyển động theo phương trình $S(t) = -t^3 + 6t^2 + t + 5$ trong đó $t$ tính bằng giây và $S(t)$ tính bằng mét. Tính vận tốc của vật tại thời điểm $t = 3$ giây.',
    options: [
      { key: 'A', text: '$35\\text{ m/s}$' },
      { key: 'B', text: '$10\\text{ m/s}$' },
      { key: 'C', text: '$64\\text{ m/s}$' },
      { key: 'D', text: '$13\\text{ m/s}$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Phương trình vận tốc của vật là:\n$$v(t) = S\'(t) = -3t^2 + 12t + 1$$\nTại thời điểm $t = 3$ giây, vận tốc của vật là:\n$$v(3) = -3 \\cdot 3^2 + 12 \\cdot 3 + 1 = -27 + 36 + 1 = 10\\text{ (m/s)}$$\nChọn đáp án B.',
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho cấp số cộng $(a_n)$ có tổng $n$ số hạng đầu là $S_n$. Biết $S_3 = 15,\\ a_4 = 9$. Khi đó $a_5 =$',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$7$' },
      { key: 'C', text: '$11$' },
      { key: 'D', text: '$23$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Gọi công sai của cấp số cộng là $d$.\nTa có:\n$$\\begin{cases} S_3 = a_1 + a_2 + a_3 = 3a_2 = 15 \\\\ a_4 = a_2 + 2d = 9 \\end{cases} \\iff \\begin{cases} a_2 = 5 \\\\ 5 + 2d = 9 \\end{cases} \\iff \\begin{cases} a_2 = 5 \\\\ d = 2 \\end{cases}$$\nSuy ra $a_5 = a_4 + d = 9 + 2 = 11$.\nChọn đáp án C.',
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hàm số $f(x) = x^\\alpha\\ (x > 0)$, trong đó $\\alpha$ là số thực. Đạo hàm của $f(x)$ là $f\'(x)$. Trong cùng một hệ trục tọa độ vuông góc $Oxy$, hình vẽ biểu diễn đồ thị của $f(x)$ và $f\'(x)$ **không thể** là:',
    diagramType: 'DE09_GRAPHS_P1_Q12',
    options: [
      { key: 'A', text: 'Hình A' },
      { key: 'B', text: 'Hình B' },
      { key: 'C', text: 'Hình C' },
      { key: 'D', text: 'Hình D' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ta có $f(x) = x^\\alpha > 0, \\forall x > 0$ và đạo hàm $f\'(x) = \\alpha x^{\\alpha - 1}$:\n• Với mọi $\\alpha \\neq 0$, hàm đạo hàm $f\'(x) = \\alpha x^{\\alpha - 1}$ luôn giữ nguyên một dấu (luôn dương nếu $\\alpha > 0$, hoặc luôn âm nếu $\\alpha < 0$) trên toàn bộ khoảng $(0; +\\infty)$, nên đồ thị $f\'(x)$ **không bao giờ cắt trục hoành và đổi dấu tại $x = 1$**.\n• Ở **Hình B**, một đường cong nằm trên trục hoành còn đường thẳng cắt trục hoành tại $(1; 0)$ và đổi dấu từ âm sang dương, điều này hoàn toàn mâu thuẫn với tính chất của $f(x) = x^\\alpha$ và $f\'(x) = \\alpha x^{\\alpha - 1}$.\nChọn đáp án B.',
  },

  // =================================================================
  // PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG SAI (Câu 1 -> Câu 4, ứng với id 13 -> 16)
  // =================================================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Cho hàm số $y = f(x) = \\dfrac{2x - 3}{x - 1}$ có đồ thị $(C)$.',
    statements: [
      {
        key: 'a',
        text: 'Hàm số $y = f(x)$ đồng biến trên mỗi khoảng $(-\\infty; 1)$ và $(1; +\\infty)$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Hàm số $y = f(x)$ không có cực trị.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[-3; 0]$ là $3$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Tâm đối xứng của đồ thị $(C)$ có tọa độ là $(2; 1)$.',
        correct: false,
      },
    ],
    explanation:
      'Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.\nĐạo hàm:\n$$f\'(x) = \\dfrac{2(-1) - (-3)(1)}{(x - 1)^2} = \\dfrac{1}{(x - 1)^2} > 0, \\quad \\forall x \\neq 1$$\n• **Ý a) Đúng**: Vì $f\'(x) > 0, \\forall x \\neq 1$ nên hàm số đồng biến trên mỗi khoảng $(-\\infty; 1)$ và $(1; +\\infty)$.\n• **Ý b) Đúng**: Đạo hàm $f\'(x)$ không đổi dấu nên hàm số không có cực trị.\n• **Ý c) Đúng**: Trên đoạn $[-3; 0] \\subset (-\\infty; 1)$, hàm số liên tục và đồng biến nên:\n$$\\max_{[-3; 0]} f(x) = f(0) = \\dfrac{2\\cdot 0 - 3}{0 - 1} = 3$$\n• **Ý d) Sai**: Đồ thị $(C)$ có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 2$, nên tâm đối xứng của $(C)$ là điểm $I(1; 2) \\neq (2; 1)$.',
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Trong không gian $Oxyz$, cho hai điểm $A(0; 0; -2)$ và $B(2; -2; 1)$. Các mệnh đề sau là đúng hay sai?',
    statements: [
      {
        key: 'a',
        text: '$\\overrightarrow{AB} = (2; -2; 3)$.',
        correct: true,
      },
      {
        key: 'b',
        text: '$\\overrightarrow{OB} = -2\\overrightarrow{i} + 2\\overrightarrow{j} - \\overrightarrow{k}$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Biết $ABOD$ là hình bình hành, tọa độ điểm $D$ là $D(-2; 2; -3)$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Biết điểm $E$ thuộc tia $Ox$ thỏa mãn $OE = 3$, tọa độ điểm $E$ là $(3; 0; 0)$.',
        correct: true,
      },
    ],
    explanation:
      '• **Ý a) Đúng**: $\\overrightarrow{AB} = (2 - 0;\\ -2 - 0;\\ 1 - (-2)) = (2; -2; 3)$.\n• **Ý b) Sai**: Vì $B(2; -2; 1)$ nên $\\overrightarrow{OB} = 2\\overrightarrow{i} - 2\\overrightarrow{j} + \\overrightarrow{k}$.\n• **Ý c) Đúng**: Tứ giác $ABOD$ là hình bình hành khi $\\overrightarrow{OD} = \\overrightarrow{BA} = -\\overrightarrow{AB} = (-2; 2; -3) \\implies D(-2; 2; -3)$.\n• **Ý d) Đúng**: Điểm $E$ thuộc tia $Ox$ nên $E(x; 0; 0)$ với $x > 0$. Vì $OE = 3$ nên $x = 3 \\implies E(3; 0; 0)$.',
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Một cửa hàng bán tạp chí với giá $20$ nghìn đồng một cuốn. Chi phí xuất bản $x$ cuốn tạp chí (bao gồm: lương cán bộ, công nhân viên, giấy in,..) được cho bởi công thức $C(x) = 0,0001x^2 - 0,2x + 10000$, $C(x)$ được tính theo đơn vị vạn đồng. Chi phí phát hành cho mỗi cuốn là $4$ nghìn đồng. Các khoản thu bao gồm: tiền bán tạp chí và $90$ triệu đồng trợ cấp cho báo chí. Giả sử số cuốn in ra đều được bán hết.\nXét tính đúng sai của các mệnh đề sau:',
    statements: [
      {
        key: 'a',
        text: 'Tổng chi phí $T(x)$ (xuất bản và phát hành) cho $x$ cuốn tạp chí là $T(x) = 0,0001x^2 + 0,2x + 10000$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Số tiền lãi khi in $x$ cuốn tạp chí là $L(x) = 0,0001x^2 + 1,8x - 1000$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Để có lãi cần in từ $574$ đến $17426$ cuốn.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Lãi nhiều nhất khi in $10000$ cuốn.',
        correct: false,
      },
    ],
    explanation:
      'Đổi các đại lượng tiền tệ về cùng đơn vị **vạn đồng** ($1\\text{ vạn đồng} = 10\\text{ nghìn đồng}$):\n• Chi phí phát hành $1$ cuốn là $4\\text{ nghìn đồng} = 0,4\\text{ vạn đồng} \\implies$ chi phí phát hành $x$ cuốn là $0,4x\\text{ (vạn đồng)}$.\n• **Ý a) Đúng**: Tổng chi phí xuất bản và phát hành $x$ cuốn là:\n$$T(x) = C(x) + 0,4x = 0,0001x^2 - 0,2x + 10000 + 0,4x = 0,0001x^2 + 0,2x + 10000\\text{ (vạn đồng)}$$\n• Tổng thu nhập khi bán hết $x$ cuốn (giá $20\\text{ nghìn đồng} = 2\\text{ vạn đồng/cuốn}$) cộng trợ cấp $90\\text{ triệu đồng} = 9000\\text{ vạn đồng}$ là:\n$$R(x) = 2x + 9000\\text{ (vạn đồng)}$$\n• **Ý b) Sai**: Số tiền lãi là:\n$$L(x) = R(x) - T(x) = (2x + 9000) - (0,0001x^2 + 0,2x + 10000) = -0,0001x^2 + 1,8x - 1000\\text{ (vạn đồng)}$$\n(Hệ số của $x^2$ là $-0,0001$ chứ không phải $+0,0001$).\n• **Ý c) Đúng**: Để có lãi thì $L(x) > 0 \\iff -0,0001x^2 + 1,8x - 1000 > 0 \\iff x^2 - 18000x + 10\\,000\\,000 < 0 \\iff 573,85 < x < 17426,15$. Vì $x \\in \\mathbb{N}^*$ nên cần in từ $574$ đến $17426$ cuốn.\n• **Ý d) Sai**: Hàm bậc hai $L(x) = -0,0001x^2 + 1,8x - 1000$ đạt giá trị lớn nhất tại $x = -\\dfrac{1,8}{2(-0,0001)} = 9000$ cuốn (không phải $10000$ cuốn).',
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Có $6$ quyển sách khác nhau. Xét tính đúng sai của các mệnh đề sau:',
    statements: [
      {
        key: 'a',
        text: 'Chia $6$ quyển sách cho ba người Giáp, Ất, Bính, mỗi người nhận đúng $2$ quyển thì có $15$ cách phân chia.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Chia $6$ quyển sách cho ba người Giáp, Ất, Bính, trong đó có một người nhận $4$ quyển và hai người còn lại mỗi người nhận $1$ quyển thì có $180$ cách phân chia.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Chia $6$ quyển sách cho bốn người Giáp, Ất, Bính, Đinh, trong đó Giáp và Ất mỗi người nhận $2$ quyển, Bính và Đinh mỗi người nhận $1$ quyển thì có $90$ cách phân chia.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Chia $6$ quyển sách cho bốn người Giáp, Ất, Bính, Đinh, trong đó có hai người mỗi người nhận $2$ quyển và hai người còn lại mỗi người nhận $1$ quyển thì có $1080$ cách phân chia.',
        correct: true,
      },
    ],
    explanation:
      '• **Ý a) Sai**: Số cách chia cho Giáp, Ất, Bính mỗi người $2$ quyển là:\n$$C_6^2 \\cdot C_4^2 \\cdot C_2^2 = 15 \\cdot 6 \\cdot 1 = 90\\text{ (cách)} \\neq 15$$\n• **Ý b) Sai**: Chọn $1$ người trong $3$ người nhận $4$ quyển có $3$ cách; chia sách cho $3$ người có $C_6^4 \\cdot C_2^1 \\cdot C_1^1 = 15 \\cdot 2 \\cdot 1 = 30$ cách. Tổng số cách là $3 \\cdot 30 = 90\\text{ (cách)} \\neq 180$.\n• **Ý c) Sai**: Chọn $2$ quyển cho Giáp ($C_6^2 = 15$), $2$ quyển cho Ất ($C_4^2 = 6$), $1$ quyển cho Bính ($C_2^1 = 2$) và $1$ quyển cho Đinh ($C_1^1 = 1$) có:\n$$15 \\cdot 6 \\cdot 2 \\cdot 1 = 180\\text{ (cách)} \\neq 90$$\n• **Ý d) Đúng**: Chọn $2$ người trong $4$ người để mỗi người nhận $2$ quyển có $C_4^2 = 6$ cách; với mỗi cách chọn đó có $180$ cách chia sách (theo ý c). Vậy tổng số cách phân chia là:\n$$6 \\cdot 180 = 1080\\text{ (cách)}$$',
  },

  // =================================================================
  // PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (Câu 1 -> Câu 6, ứng với id 17 -> 22)
  // =================================================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Như hình vẽ, một con kiến đang ở điểm $M$, cần đi đến điểm $N$ để vận chuyển một miếng đường. Số đường đi ngắn nhất từ $M$ đến $N$ là bao nhiêu?',
    diagramType: 'DE09_GRID_ANT_P3_Q1',
    correctAnswer: '150',
    explanation:
      'Chọn hệ trục tọa độ lưới với $M(0; 0)$ và $N(6; 4)$. Để đi ngắn nhất từ $M$ đến $N$, tại mỗi nút lưới con kiến chỉ đi sang phải hoặc đi lên trên.\nÁp dụng quy tắc cộng số đường đi tại từng nút lưới $(x; y)$:\n• Tại cột $x = 3$ (ranh giới giữa phần lưới trái và phần lưới phải):\n  - Số đường đi đến $(3; 0)$ là $C_3^0 = 1$.\n  - Số đường đi đến $(3; 1)$ là $C_4^1 = 4$.\n  - Số đường đi đến $(3; 2)$ là $C_5^2 = 10$.\n  - Số đường đi đến $(3; 3)$ và $(3; 4)$ đều đi thẳng từ $(3; 2)$ lên nên có $10$ đường.\n• Tại cột $x = 4$:\n  - Nút $(4; 0): 1$ đường.\n  - Nút $(4; 1): 4 + 1 = 5$ đường.\n  - Nút $(4; 2): 10 + 5 = 15$ đường.\n  - Nút $(4; 3): 10 + 15 = 25$ đường.\n  - Nút $(4; 4): 10 + 25 = 35$ đường.\n• Tại cột $x = 5$ (từ $y = 1$ đến $y = 4$):\n  - Nút $(5; 1): 5$ đường; $(5; 2): 5 + 15 = 20$ đường; $(5; 3): 20 + 25 = 45$ đường; $(5; 4): 45 + 35 = 80$ đường.\n• Tại cột $x = 6$ (từ $y = 1$ đến $y = 4$):\n  - Nút $(6; 1): 5$ đường; $(6; 2): 5 + 20 = 25$ đường; $(6; 3): 25 + 45 = 70$ đường; $N(6; 4): 70 + 80 = 150$ đường.\nĐáp số: $150$.',
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Cho hàm số $y_1 = \\sin 2x_1 - \\dfrac{\\sqrt{3}}{2}$ với $x_1 \\in [0; \\pi]$ và hàm số $y_2 = x_2 + 3$. Khi đó giá trị nhỏ nhất của $(x_1 - x_2)^2 + (y_1 - y_2)^2$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?',
    correctAnswer: '6,21',
    explanation:
      '• Biểu thức $P = (x_1 - x_2)^2 + (y_1 - y_2)^2 = MN^2$ là bình phương khoảng cách giữa điểm $M\\left(x_1; \\sin 2x_1 - \\dfrac{\\sqrt{3}}{2}\\right)$ thuộc đồ thị $(C)$ ($x_1 \\in [0; \\pi]$) và điểm $N(x_2; x_2 + 3)$ thuộc đường thẳng $\\Delta: x - y + 3 = 0$.\n• Khoảng cách từ điểm $M$ đến đường thẳng $\\Delta$ là:\n$$d(M, \\Delta) = \\dfrac{\\left|x_1 - \\sin 2x_1 + \\dfrac{\\sqrt{3}}{2} + 3\\right|}{\\sqrt{1^2 + (-1)^2}} = \\dfrac{g(x_1)}{\\sqrt{2}}$$\nvới $g(x) = x - \\sin 2x + \\dfrac{\\sqrt{3}}{2} + 3$ trên đoạn $[0; \\pi]$.\n• Ta có $g\'(x) = 1 - 2\\cos 2x = 0 \\iff \\cos 2x = \\dfrac{1}{2} \\iff x = \\dfrac{\\pi}{6}$ hoặc $x = \\dfrac{5\\pi}{6}$ (do $x \\in [0; \\pi]$).\n• Giá trị nhỏ nhất của $g(x)$ trên $[0; \\pi]$ đạt tại $x = \\dfrac{\\pi}{6}$:\n$$\\min_{x \\in [0; \\pi]} g(x) = g\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\pi}{6} - \\sin\\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2} + 3 = \\dfrac{\\pi}{6} + 3$$\n• Vậy giá trị nhỏ nhất của $(x_1 - x_2)^2 + (y_1 - y_2)^2$ là:\n$$P_{\\min} = \\left[d(M, \\Delta)_{\\min}\\right]^2 = \\dfrac{1}{2}\\left(\\dfrac{\\pi}{6} + 3\\right)^2 = \\dfrac{(\\pi + 18)^2}{72} \\approx 6,21$$\nĐáp số: $6,21$.',
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Như hình vẽ, trong hình khai triển phẳng của hình chóp tứ giác $O - ABCD$, đáy $ABCD$ là hình thang cân, $AD \\parallel BC,\\ AB = CD = 1,\\ BC = 2AD = 2,\\ PA = 1,\\ PA \\perp AD,\\ QA \\perp AB$.\nKhi đó $\\cos \\angle SDC$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?',
    diagramType: 'DE09_PYRAMID_NET_P3_Q3',
    correctAnswer: '-0,35',
    explanation:
      '• Khi gấp hình khai triển phẳng lại thành hình chóp tứ giác $S.ABCD$ (với đỉnh $S \\equiv O \\equiv P \\equiv Q \\equiv A\'$), ta có:\n  - $SA = PA = QA = 1$, và $SA \\perp AD,\\ SA \\perp AB \\implies SA \\perp (ABCD)$.\n  - Trong $\\triangle SAD$ vuông tại $A$: $SD = \\sqrt{SA^2 + AD^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.\n• Xét đáy $ABCD$ là hình thang cân có $AD \\parallel BC,\\ AD = 1,\\ BC = 2,\\ AB = CD = 1$:\n  - Hình chiếu của $AB$ lên $BC$ bằng $\\dfrac{BC - AD}{2} = \\dfrac{1}{2} \\implies \\cos \\angle ABC = \\dfrac{1/2}{1} = \\dfrac{1}{2} \\implies \\angle ABC = 60^\\circ$.\n  - Trong $\\triangle ABC$, theo định lý cosin: $AC^2 = AB^2 + BC^2 - 2\\cdot AB \\cdot BC \\cdot \\cos 60^\\circ = 1 + 4 - 2 = 3 \\implies AC = \\sqrt{3}$.\n• Trong $\\triangle SAC$ vuông tại $A$ ($SA \\perp AC$):\n$$SC = \\sqrt{SA^2 + AC^2} = \\sqrt{1^2 + 3} = 2$$\n• Áp dụng định lý cosin trong $\\triangle SDC$ với $SD = \\sqrt{2},\\ DC = 1,\\ SC = 2$:\n$$\\cos \\angle SDC = \\dfrac{SD^2 + DC^2 - SC^2}{2 \\cdot SD \\cdot DC} = \\dfrac{2 + 1 - 4}{2 \\cdot \\sqrt{2} \\cdot 1} = -\\dfrac{1}{2\\sqrt{2}} = -\\dfrac{\\sqrt{2}}{4} \\approx -0,35$$\nĐáp số: $-0,35$.',
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Để làm máng xối nước, từ một tấm tôn kích thước $0,9\\text{ m} \\times 3\\text{ m}$ người ta gấp tấm tôn đó như hình vẽ dưới. Biết mặt cắt của máng xối là một hình thang cân và máng xối là một hình lăng trụ có chiều cao bằng chiều dài của tấm tôn.\nHỏi $x\\text{ (m)}$ bằng bao nhiêu thì thể tích máng xối lớn nhất? (Trích đề KSCL THPT Than Uyên - Lai Châu 2026)',
    diagramType: 'DE09_GUTTER_P3_Q4',
    correctAnswer: '0,6',
    explanation:
      '• Vì chiều dài máng xối cố định bằng $3\\text{ m}$, nên thể tích máng xối lớn nhất khi diện tích mặt cắt hình thang cân $S(x)$ lớn nhất.\n• Mặt cắt là hình thang cân có đáy nhỏ $0,3\\text{ m}$, hai cạnh bên $0,3\\text{ m}$ và đáy lớn $x\\text{ (m)}$ ($0,3 < x < 0,9$).\n• Đặt $x - 0,3 = 2t\\ (0 < t < 0,3) \\implies x = 2t + 0,3$.\n• Chiều cao của hình thang cân là $h = \\sqrt{0,3^2 - t^2} = \\sqrt{0,09 - t^2}$.\n• Diện tích mặt cắt là:\n$$S(t) = \\dfrac{x + 0,3}{2} \\cdot h = (t + 0,3)\\sqrt{0,09 - t^2}$$\n• Đạo hàm:\n$$S\'(t) = \\sqrt{0,09 - t^2} - \\dfrac{t(t + 0,3)}{\\sqrt{0,09 - t^2}} = \\dfrac{0,09 - 0,3t - 2t^2}{\\sqrt{0,09 - t^2}}$$\nCho $S\'(t) = 0 \\iff 2t^2 + 0,3t - 0,09 = 0 \\iff t = 0,15\\text{ (m)}$ (vì $t > 0$).\n• Suy ra $x = 2t + 0,3 = 2 \\cdot 0,15 + 0,3 = 0,6\\text{ (m)}$.\nĐáp số: $0,6$.',
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Biết $MN$ là một đường kính của mặt cầu ngoại tiếp hình hộp chữ nhật có ba kích thước lần lượt là $1,\\ 1,\\ 4$. Điểm $P$ di động trên bề mặt của hình hộp chữ nhật đó. Khi đó tìm giá trị nhỏ nhất của $\\overrightarrow{PM} \\cdot \\overrightarrow{PN}$.',
    correctAnswer: '-4,25',
    explanation:
      '• Gọi $I$ là tâm của hình hộp chữ nhật (cũng là tâm mặt cầu ngoại tiếp và là trung điểm của đường kính $MN$).\n• Bán kính mặt cầu ngoại tiếp hình hộp chữ nhật là:\n$$R = IM = IN = \\dfrac{1}{2}\\sqrt{1^2 + 1^2 + 4^2} = \\dfrac{\\sqrt{18}}{2} = \\dfrac{3\\sqrt{2}}{2} \\implies R^2 = \\dfrac{9}{2}$$\n• Với mọi điểm $P$, vì $I$ là trung điểm của $MN$ nên $\\overrightarrow{IM} = -\\overrightarrow{IN}$:\n$$\\overrightarrow{PM} \\cdot \\overrightarrow{PN} = (\\overrightarrow{PI} + \\overrightarrow{IM}) \\cdot (\\overrightarrow{PI} - \\overrightarrow{IM}) = PI^2 - IM^2 = PI^2 - \\dfrac{9}{2}$$\n• Điểm $P$ di động trên bề mặt của hình hộp chữ nhật có ba kích thước $1, 1, 4$, nên khoảng cách ngắn nhất từ tâm $I$ đến bề mặt hình hộp là khoảng cách từ $I$ đến các mặt gần nhất:\n$$PI_{\\min} = \\dfrac{1}{2} \\implies PI_{\\min}^2 = \\dfrac{1}{4}$$\n• Vậy giá trị nhỏ nhất của $\\overrightarrow{PM} \\cdot \\overrightarrow{PN}$ là:\n$$\\left(\\overrightarrow{PM} \\cdot \\overrightarrow{PN}\\right)_{\\min} = \\dfrac{1}{4} - \\dfrac{9}{2} = -\\dfrac{17}{4} = -4,25$$\nĐáp số: $-4,25$.',
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Cho hàm số $f(x) = x^5 + 2x^3 + 3x$. Dãy số $(a_n)$ có số hạng đầu bằng $1$ và thỏa mãn $a_{n+3} = a_n\\ (n \\in \\mathbb{N}^*)$. Nếu $f(a_{2023}) + f(a_{2024} + a_{2025}) = 0$, thì tổng $2023$ số hạng đầu của dãy số $(a_n)$ bằng bao nhiêu?',
    correctAnswer: '1',
    explanation:
      '• Xét hàm số $f(x) = x^5 + 2x^3 + 3x$ trên $\\mathbb{R}$:\n  - $f(-x) = -f(x), \\forall x \\in \\mathbb{R} \\implies f(x)$ là hàm số lẻ.\n  - $f\'(x) = 5x^4 + 6x^2 + 3 > 0, \\forall x \\in \\mathbb{R} \\implies f(x)$ đồng biến trên $\\mathbb{R}$.\n• Do đó:\n$$f(a_{2023}) + f(a_{2024} + a_{2025}) = 0 \\iff f(a_{2024} + a_{2025}) = -f(a_{2023}) = f(-a_{2023})$$\n$$\\iff a_{2024} + a_{2025} = -a_{2023} \\iff a_{2023} + a_{2024} + a_{2025} = 0$$\n• Vì dãy số $(a_n)$ tuần hoàn với chu kỳ $3$ ($a_{n+3} = a_n$) và $2023 = 3 \\cdot 674 + 1$, nên:\n$$a_{2023} = a_1 = 1,\\quad a_{2024} = a_2,\\quad a_{2025} = a_3 \\implies a_1 + a_2 + a_3 = 0$$\n• Tổng $2023$ số hạng đầu của dãy số là:\n$$S_{2023} = 674(a_1 + a_2 + a_3) + a_{2023} = 674 \\cdot 0 + 1 = 1$$\nĐáp số: $1$.',
  },
];
