import { Question } from '../types';

const PART_I_TITLE =
  'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.';
const PART_II_TITLE =
  'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.';
const PART_III_TITLE =
  'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.';

export const QUESTIONS_DE07: Question[] = [
  // =================================================================
  // PHẦN I: CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (Câu 1 -> Câu 12)
  // =================================================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Trong hình bên, trên hệ trục tọa độ $Oxy$, một phần đồ thị của hàm số $h\'(x)$, là đạo hàm bậc nhất của hàm số $h(x)$, được biểu diễn như hình vẽ.\nTrong các phương án sau, đồ thị nào có thể là một phần đồ thị của hàm số $h(x)$?',
    diagramType: 'DE07_GRAPH_P1_Q1',
    options: [
      { key: 'A', text: 'Hình A' },
      { key: 'B', text: 'Hình B' },
      { key: 'C', text: 'Hình C' },
      { key: 'D', text: 'Hình D' },
    ],
    correctAnswer: 'D',
    explanation:
      'Quan sát đồ thị đạo hàm $h\'(x)$:\n• Với $x < 0$: đồ thị $h\'(x)$ nằm phía trên trục hoành nên $h\'(x) > 0 \\implies$ hàm số $h(x)$ đồng biến trên khoảng $(-\\infty; 0)$.\n• Với $x > 0$: đồ thị $h\'(x)$ nằm phía dưới trục hoành nên $h\'(x) < 0 \\implies$ hàm số $h(x)$ nghịch biến trên khoảng $(0; +\\infty)$.\n• Tại $x = 0$: $h\'(0) = 0$ và $h\'(x)$ đổi dấu từ dương $(+)$ sang âm $(-)$ nên hàm số $h(x)$ đạt cực đại tại $x = 0$.\nTrong 4 phương án A, B, C, D chỉ có đồ thị ở **Hình D** đồng biến trên $(-\\infty; 0)$, nghịch biến trên $(0; +\\infty)$ và đạt cực đại tại $x = 0$.\nChọn đáp án D.',
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Tìm công sai $d$ của cấp số cộng $(u_n), n \\in \\mathbb{N}^*$ có $u_1 = 1;\\, u_4 = 13$.',
    options: [
      { key: 'A', text: '$d = \\dfrac{1}{3}$' },
      { key: 'B', text: '$d = 3$' },
      { key: 'C', text: '$d = \\dfrac{1}{4}$' },
      { key: 'D', text: '$d = 4$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Áp dụng công thức số hạng tổng quát của cấp số cộng $u_n = u_1 + (n - 1)d$:\n$$u_4 = u_1 + 3d \\iff 13 = 1 + 3d \\iff 3d = 12 \\iff d = 4$$\nChọn đáp án D.',
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Biết $SA \\perp (ABCD)$ và $SA = a\\sqrt{3}$. Thể tích của khối chóp $S.ABCD$ là:',
    options: [
      { key: 'A', text: '$a^3\\sqrt{3}$' },
      { key: 'B', text: '$\\dfrac{a^3\\sqrt{3}}{3}$' },
      { key: 'C', text: '$\\dfrac{a^3}{4}$' },
      { key: 'D', text: '$\\dfrac{a^3\\sqrt{3}}{12}$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Diện tích đáy hình vuông $ABCD$ cạnh $a$ là $S_{ABCD} = a^2$.\nVì $SA \\perp (ABCD)$ nên chiều cao của khối chóp là $h = SA = a\\sqrt{3}$.\nThể tích khối chóp $S.ABCD$ là:\n$$V = \\dfrac{1}{3} \\cdot S_{ABCD} \\cdot SA = \\dfrac{1}{3} \\cdot a^2 \\cdot a\\sqrt{3} = \\dfrac{a^3\\sqrt{3}}{3}$$\nChọn đáp án B.',
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Trong hình vẽ, điểm $B$ nằm trên đường thẳng $(d): y = -2x + 12$. Hình $OABC$ là hình chữ nhật có các cạnh song song với hai trục tọa độ. Diện tích lớn nhất của hình chữ nhật $OABC$ bằng bao nhiêu?',
    diagramType: 'DE07_GRAPH_P1_Q4',
    options: [
      { key: 'A', text: '$18$' },
      { key: 'B', text: '$24$' },
      { key: 'C', text: '$30$' },
      { key: 'D', text: '$36$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Gọi tọa độ điểm $A(x; 0)$ với $0 < x < 6$.\nVì $OABC$ là hình chữ nhật và $B$ thuộc đường thẳng $(d): y = -2x + 12$ trong góc phần tư thứ nhất nên $B(x; -2x + 12)$ và $C(0; -2x + 12)$.\nKhi đó hai kích thước của hình chữ nhật $OABC$ là $OA = x$ và $OC = -2x + 12$.\nDiện tích hình chữ nhật $OABC$ là:\n$$S(x) = OA \\cdot OC = x(-2x + 12) = -2x^2 + 12x = -2(x - 3)^2 + 18 \\le 18$$\nDấu "$=$" xảy ra khi $x = 3 \\in (0; 6)$.\nVậy diện tích lớn nhất của hình chữ nhật $OABC$ bằng $18$.\nChọn đáp án A.',
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Hàm số $y = \\log_2(2x - x^2)$ nghịch biến trên khoảng nào sau đây?',
    options: [
      { key: 'A', text: '$(1; 2)$' },
      { key: 'B', text: '$(1; 2]$' },
      { key: 'C', text: '$(0; 1)$' },
      { key: 'D', text: '$[0; 1)$' },
    ],
    correctAnswer: 'A',
    explanation:
      '• Điều kiện xác định: $2x - x^2 > 0 \\iff 0 < x < 2$. Tập xác định $D = (0; 2)$.\n• Đạo hàm:\n$$y\' = \\dfrac{(2x - x^2)\'}{(2x - x^2)\\ln 2} = \\dfrac{2 - 2x}{(2x - x^2)\\ln 2}$$\n• Vì cơ số $2 > 1$ nên $(2x - x^2)\\ln 2 > 0, \\forall x \\in (0; 2)$.\nDo đó:\n$$y\' < 0 \\iff 2 - 2x < 0 \\iff x > 1$$\nKết hợp với tập xác định $D = (0; 2)$, hàm số nghịch biến trên khoảng $(1; 2)$.\nChọn đáp án A.',
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Từ một lăng trụ lục giác đều, người ta khoét bỏ một hình trụ như hình vẽ, phần còn lại là một khối hình học. Biết cạnh đáy của lăng trụ lục giác đều bằng $3\\text{ cm}$, chiều cao bằng $4\\text{ cm}$, bán kính lỗ trụ bằng $1\\text{ cm}$. Khi đó diện tích bề mặt của khối hình học còn lại là bao nhiêu $\\text{cm}^2$?',
    diagramType: 'DE07_PRISM_P1_Q6',
    options: [
      { key: 'A', text: '$72 + \\dfrac{27}{2}\\sqrt{3} + 6\\pi$' },
      { key: 'B', text: '$72 + 27\\sqrt{3} + 8\\pi$' },
      { key: 'C', text: '$72 + 27\\sqrt{3} + 6\\pi$' },
      { key: 'D', text: '$60 + 27\\sqrt{3} + 6\\pi$' },
    ],
    correctAnswer: 'C',
    explanation:
      '• Diện tích xung quanh của lăng trụ lục giác đều (gồm $6$ mặt bên hình chữ nhật kích thước $3\\text{ cm} \\times 4\\text{ cm}$):\n$$S_{\\text{xq lăng trụ}} = 6 \\cdot 3 \\cdot 4 = 72\\text{ (cm}^2\\text{)}$$\n• Diện tích $2$ đáy lục giác đều cạnh $a = 3\\text{ cm}$ (mỗi lục giác đều gồm $6$ tam giác đều cạnh $3\\text{ cm}$):\n$$S_{\\text{2 đáy lăng trụ}} = 2 \\cdot 6 \\cdot \\dfrac{3^2\\sqrt{3}}{4} = 27\\sqrt{3}\\text{ (cm}^2\\text{)}$$\n• Khi khoét bỏ lỗ hình trụ có bán kính $r = 1\\text{ cm}$, chiều cao $h = 4\\text{ cm}$:\n  - Bề mặt bị mất đi $2$ hình tròn đáy của hình trụ: $2S_{\\text{đáy trụ}} = 2\\pi r^2 = 2\\pi \\cdot 1^2 = 2\\pi\\text{ (cm}^2\\text{)}$.\n  - Bề mặt tăng thêm diện tích xung quanh bên trong lỗ trụ: $S_{\\text{xq trụ}} = 2\\pi r h = 2\\pi \\cdot 1 \\cdot 4 = 8\\pi\\text{ (cm}^2\\text{)}$.\n• Vậy diện tích bề mặt của khối hình học còn lại là:\n$$S = 72 + 27\\sqrt{3} - 2\\pi + 8\\pi = 72 + 27\\sqrt{3} + 6\\pi\\text{ (cm}^2\\text{)}$$\nChọn đáp án C.',
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Phương trình $\\sin x = -\\dfrac{\\sqrt{3}}{2}$ có tổng nghiệm dương nhỏ nhất và nghiệm âm lớn nhất bằng:',
    options: [
      { key: 'A', text: '$2\\pi$' },
      { key: 'B', text: '$\\dfrac{\\pi}{3}$' },
      { key: 'C', text: '$\\dfrac{4\\pi}{3}$' },
      { key: 'D', text: '$\\pi$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Ta có:\n$$\\sin x = -\\dfrac{\\sqrt{3}}{2} = \\sin\\left(-\\dfrac{\\pi}{3}\\right) \\iff \\left[\\begin{array}{l} x = -\\dfrac{\\pi}{3} + k2\\pi \\\\ x = \\dfrac{4\\pi}{3} + k2\\pi \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$\n• Nghiệm âm lớn nhất của phương trình là $x_1 = -\\dfrac{\\pi}{3}$ (ứng với $k = 0$ ở họ nghiệm thứ nhất).\n• Nghiệm dương nhỏ nhất của phương trình là $x_2 = \\dfrac{4\\pi}{3}$ (ứng với $k = 0$ ở họ nghiệm thứ hai).\n• Tổng của hai nghiệm này là:\n$$x_1 + x_2 = -\\dfrac{\\pi}{3} + \\dfrac{4\\pi}{3} = \\pi$$\nChọn đáp án D.',
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Tiệm cận đứng của đồ thị hàm số $y = \\dfrac{5}{x - 1}$ là đường thẳng có phương trình:',
    options: [
      { key: 'A', text: '$x = 5$' },
      { key: 'B', text: '$y = 0$' },
      { key: 'C', text: '$y = 1$' },
      { key: 'D', text: '$x = 1$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$.\nVì $\\lim_{x \\to 1^+} \\dfrac{5}{x - 1} = +\\infty$ và $\\lim_{x \\to 1^-} \\dfrac{5}{x - 1} = -\\infty$ nên đường thẳng $x = 1$ là tiệm cận đứng của đồ thị hàm số.\nChọn đáp án D.',
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Số giao điểm của đồ thị hai hàm số $y = x^2 - 3x - 1$ và $y = x^3 - 1$ là:',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$0$' },
      { key: 'C', text: '$3$' },
      { key: 'D', text: '$2$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Phương trình hoành độ giao điểm của hai đồ thị hàm số là:\n$$x^3 - 1 = x^2 - 3x - 1 \\iff x^3 - x^2 + 3x = 0 \\iff x(x^2 - x + 3) = 0$$\nVì $x^2 - x + 3 = \\left(x - \\dfrac{1}{2}\\right)^2 + \\dfrac{11}{4} > 0, \\forall x \\in \\mathbb{R}$ nên phương trình có duy nhất $1$ nghiệm thực $x = 0$.\nVậy hai đồ thị có đúng $1$ giao điểm.\nChọn đáp án A.',
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      "Cho hình lập phương $ABCD.A'B'C'D'$. Hãy chọn kết luận **Sai**:",
    diagramType: 'DE07_CUBE_P1_Q10',
    options: [
      { key: 'A', text: "$A'B \\parallel (CDD'C')$" },
      { key: 'B', text: "$CC' \\parallel (ABB'A')$" },
      { key: 'C', text: "$BD \\parallel A'C'$" },
      { key: 'D', text: "$(ABCD) \\parallel (A'B'C'D')$" },
    ],
    correctAnswer: 'C',
    explanation:
      "• Phương án A đúng vì $A'B \\parallel D'C$ và $D'C \\subset (CDD'C')$.\n• Phương án B đúng vì $CC' \\parallel BB'$ và $BB' \\subset (ABB'A')$.\n• Phương án D đúng vì hai mặt đáy của hình lập phương song song với nhau.\n• Phương án C sai vì $A'C' \\parallel AC$, mà trong hình vuông $ABCD$ hai đường chéo $BD \\perp AC$, suy ra góc giữa $BD$ và $A'C'$ bằng $90^\\circ$ ($BD \\perp A'C'$ chứ không song song).\nChọn đáp án C.",
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Biết chu vi của một tam giác cân bằng $40\\text{ cm}$. Độ dài đáy $y\\text{ (cm)}$ là một hàm số của độ dài cạnh bên $x\\text{ (cm)}$. Khi đó tập xác định của hàm số là:',
    options: [
      { key: 'A', text: '$(10; 20)$' },
      { key: 'B', text: '$(0; 10)$' },
      { key: 'C', text: '$(5; 10)$' },
      { key: 'D', text: '$[5; 10]$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tam giác cân có hai cạnh bên bằng $x\\text{ (cm)}$ và cạnh đáy bằng $y\\text{ (cm)}$.\nVì chu vi bằng $40\\text{ cm}$ nên:\n$$2x + y = 40 \\implies y = 40 - 2x$$\nĐể ba cạnh lập thành một tam giác, độ dài các cạnh phải dương và thỏa mãn bất đẳng thức tam giác:\n$$\\begin{cases} x > 0 \\\\ y > 0 \\\\ 2x > y \\end{cases} \\iff \\begin{cases} 40 - 2x > 0 \\\\ 2x > 40 - 2x \\end{cases} \\iff \\begin{cases} x < 20 \\\\ 4x > 40 \\end{cases} \\iff 10 < x < 20$$\nVậy tập xác định của hàm số là $D = (10; 20)$.\nChọn đáp án A.',
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: PART_I_TITLE,
    questionText:
      'Đường cong trong hình dưới là đồ thị của hàm số nào?',
    diagramType: 'DE07_GRAPH_P1_Q12',
    options: [
      { key: 'A', text: '$y = -x^3 + 3x^2 - 4$' },
      { key: 'B', text: '$y = -x^3 + 3x^2 + 1$' },
      { key: 'C', text: '$y = x^3 - 3x^2 + 1$' },
      { key: 'D', text: '$y = -x^3 + 2x^2 - 1$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Quan sát đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$:\n• Nhánh phải đi xuống khi $x \\to +\\infty \\implies a < 0$ (loại C).\n• Đồ thị cắt trục tung tại điểm $(0; 1) \\implies d = 1$ (loại A và D).\n• Kiểm tra hàm số $y = -x^3 + 3x^2 + 1$: $y\' = -3x^2 + 6x = 0 \\iff x = 0$ hoặc $x = 2$. Điểm cực tiểu là $(0; 1)$ và điểm cực đại là $(2; 5)$, hoàn toàn trùng khớp với hình vẽ.\nChọn đáp án B.',
  },

  // =================================================================
  // PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG SAI (Câu 1 -> Câu 4, ứng với id 13 -> 16)
  // =================================================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Có nhiều phương pháp dự đoán xu thế biến động dân số. Công thức sử dụng trong phương pháp "ngoại suy trực tiếp" là $P_n = P_0(1 + k)^n\\ (k > -1)$, trong đó $P_n$ là dân số tại thời điểm dự đoán, $P_0$ là dân số ban đầu, $k$ là tốc độ tăng dân số trong thời gian dự đoán, $n$ là số khoảng thời gian của kỳ dự đoán ($n \\in \\mathbb{N}^*$). Khi đó:',
    statements: [
      {
        key: 'a',
        text: 'Khi $k \\in (-1; 0)$ thì dân số trong khoảng thời gian này có xu hướng giảm.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Khi $k \\in (-1; 0)$ thì dân số trong khoảng thời gian này biến động lên xuống.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Khi $k = \\dfrac{1}{3}$, nếu $P_n \\ge 2P_0$ thì giá trị nhỏ nhất của $n$ là $3$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Khi $k = -\\dfrac{1}{3}$, nếu $P_n \\le \\dfrac{1}{2}P_0$ thì giá trị nhỏ nhất của $n$ là $3$.',
        correct: false,
      },
    ],
    explanation:
      '• **Ý a) Đúng**: Khi $k \\in (-1; 0) \\implies 0 < 1 + k < 1$. Vì cơ số $1 + k \\in (0; 1)$ và $P_0 > 0$ nên $P_n = P_0(1 + k)^n$ là dãy số giảm theo $n$, tức dân số có xu hướng giảm.\n• **Ý b) Sai**: Vì $1 + k > 0$ nên $P_n$ giảm đơn điệu chứ không biến động lên xuống.\n• **Ý c) Đúng**: Khi $k = \\dfrac{1}{3}$, ta có:\n$$P_n \\ge 2P_0 \\iff P_0\\left(1 + \\dfrac{1}{3}\\right)^n \\ge 2P_0 \\iff \\left(\\dfrac{4}{3}\\right)^n \\ge 2$$\nThử với $n \\in \\mathbb{N}^*$:\n  - Với $n = 2$: $\\left(\\dfrac{4}{3}\\right)^2 = \\dfrac{16}{9} \\approx 1,78 < 2$.\n  - Với $n = 3$: $\\left(\\dfrac{4}{3}\\right)^3 = \\dfrac{64}{27} \\approx 2,37 \\ge 2$.\nVậy giá trị nguyên dương nhỏ nhất của $n$ là $3$.\n• **Ý d) Sai**: Khi $k = -\\dfrac{1}{3}$, ta có:\n$$P_n \\le \\dfrac{1}{2}P_0 \\iff P_0\\left(1 - \\dfrac{1}{3}\\right)^n \\le \\dfrac{1}{2}P_0 \\iff \\left(\\dfrac{2}{3}\\right)^n \\le \\dfrac{1}{2}$$\nVới $n = 2$: $\\left(\\dfrac{2}{3}\\right)^2 = \\dfrac{4}{9} < \\dfrac{1}{2}$ (thỏa mãn). Do đó giá trị nhỏ nhất của $n$ bằng $2$ (không phải $3$).',
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Cho hàm số $y = f(x) = ax^3 + bx^2 + cx + d$ có bảng biến thiên như sau:',
    diagramType: 'DE07_BBT_P2_Q2',
    statements: [
      {
        key: 'a',
        text: 'Hàm số có hệ số $a < 0$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Đồ thị hàm số đi qua hai điểm $(1; 2),\\ (3; 4)$.',
        correct: true,
      },
      {
        key: 'c',
        text: '$f\'(x) = 0$ tại các giá trị $x = 2,\\ x = 4$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Giá trị nhỏ nhất của hàm số trên $[2; 4]$ bằng $\\dfrac{7}{2}$.',
        correct: false,
      },
    ],
    explanation:
      '• **Ý a) Đúng**: Từ bảng biến thiên, $\\lim_{x \\to +\\infty} f(x) = -\\infty$ nên hệ số $a < 0$.\n• **Ý b) Đúng**: Tại $x = 1$ thì $y = 2$, tại $x = 3$ thì $y = 4$, nên đồ thị hàm số đi qua hai điểm cực trị $(1; 2)$ và $(3; 4)$.\n• **Ý c) Sai**: Từ bảng biến thiên, $f\'(x) = 0$ tại $x = 1$ và $x = 3$ (còn $2$ và $4$ là giá trị cực trị $y$).\n• **Ý d) Sai**: Tìm hàm số $f(x)$:\nTa có $f\'(x) = 3a(x - 1)(x - 3) = 3a(x^2 - 4x + 3)$.\nSuy ra $f(x) = a(x^3 - 6x^2 + 9x) + d$.\nThay $f(1) = 2$ và $f(3) = 4$:\n$$\\begin{cases} 4a + d = 2 \\\\ 0a + d = 4 \\end{cases} \\iff \\begin{cases} d = 4 \\\\ a = -\\dfrac{1}{2} \\end{cases} \\implies f(x) = -\\dfrac{1}{2}x^3 + 3x^2 - \\dfrac{9}{2}x + 4$$\nTrên đoạn $[2; 4]$, ta tính giá trị tại hai đầu mút và điểm cực đại $x = 3$:\n$$f(2) = -4 + 12 - 9 + 4 = 3; \\quad f(3) = 4; \\quad f(4) = -32 + 48 - 18 + 4 = 2$$\nVậy $\\min_{[2; 4]} f(x) = f(4) = 2 \\neq \\dfrac{7}{2}$.',
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'Trong hình hộp $ABCD - A_1B_1C_1D_1$, biết $AB = AD = AA_1 = 1$, $\\angle A_1AB = \\angle A_1AD = \\angle BAD = 60^\\circ$.',
    diagramType: 'DE07_PARALLELEPIPED_P2_Q3',
    statements: [
      {
        key: 'a',
        text: 'Góc giữa hai đường thẳng $A_1C$ và $BD$ bằng $90^\\circ$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Độ dài đoạn thẳng $A_1C$ bằng $\\sqrt{3}$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Góc giữa hai đường thẳng $A_1C$ và $BB_1$ bằng $90^\\circ$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Sin của góc giữa đường thẳng $A_1C$ và mặt phẳng $(ABCD)$ bằng $\\dfrac{\\sqrt{6}}{3}$.',
        correct: false,
      },
    ],
    explanation:
      'Đặt $\\overrightarrow{a} = \\overrightarrow{AB},\\ \\overrightarrow{b} = \\overrightarrow{AD},\\ \\overrightarrow{c} = \\overrightarrow{AA_1}$.\nTheo giả thiết: $|\\overrightarrow{a}| = |\\overrightarrow{b}| = |\\overrightarrow{c}| = 1$ và $\\overrightarrow{a}\\cdot\\overrightarrow{b} = \\overrightarrow{b}\\cdot\\overrightarrow{c} = \\overrightarrow{c}\\cdot\\overrightarrow{a} = 1 \\cdot 1 \\cdot \\cos 60^\\circ = \\dfrac{1}{2}$.\nTa có $\\overrightarrow{A_1C} = \\overrightarrow{AC} - \\overrightarrow{AA_1} = \\overrightarrow{a} + \\overrightarrow{b} - \\overrightarrow{c}$ và $\\overrightarrow{BD} = \\overrightarrow{b} - \\overrightarrow{a}$.\n• **Ý a) Đúng**:\n$$\\overrightarrow{A_1C} \\cdot \\overrightarrow{BD} = (\\overrightarrow{a} + \\overrightarrow{b} - \\overrightarrow{c}) \\cdot (\\overrightarrow{b} - \\overrightarrow{a}) = \\overrightarrow{b}^2 - \\overrightarrow{a}^2 - \\overrightarrow{c}\\cdot\\overrightarrow{b} + \\overrightarrow{c}\\cdot\\overrightarrow{a} = 1 - 1 - \\dfrac{1}{2} + \\dfrac{1}{2} = 0$$\nDo đó $A_1C \\perp BD$, tức góc giữa $A_1C$ và $BD$ bằng $90^\\circ$.\n• **Ý b) Sai**:\n$$A_1C^2 = (\\overrightarrow{a} + \\overrightarrow{b} - \\overrightarrow{c})^2 = 1 + 1 + 1 + 2\\left(\\dfrac{1}{2} - \\dfrac{1}{2} - \\dfrac{1}{2}\\right) = 3 - 1 = 2 \\implies A_1C = \\sqrt{2} \\neq \\sqrt{3}$$\n• **Ý c) Đúng**: Vì $\\overrightarrow{BB_1} = \\overrightarrow{AA_1} = \\overrightarrow{c}$ nên:\n$$\\overrightarrow{A_1C} \\cdot \\overrightarrow{BB_1} = (\\overrightarrow{a} + \\overrightarrow{b} - \\overrightarrow{c}) \\cdot \\overrightarrow{c} = \\overrightarrow{a}\\cdot\\overrightarrow{c} + \\overrightarrow{b}\\cdot\\overrightarrow{c} - \\overrightarrow{c}^2 = \\dfrac{1}{2} + \\dfrac{1}{2} - 1 = 0$$\nSuy ra $A_1C \\perp BB_1$, góc giữa hai đường thẳng bằng $90^\\circ$.\n• **Ý d) Sai**: Tứ diện $A_1.ABD$ là tứ diện đều cạnh $1$ nên hình chiếu vuông góc $H$ của $A_1$ lên $(ABCD)$ là trọng tâm tam giác đều $ABD$.\nChiều cao $A_1H = \\sqrt{1^2 - \\left(\\dfrac{\\sqrt{3}}{3}\\right)^2} = \\dfrac{\\sqrt{6}}{3}$.\nDo đó:\n$$\\sin(A_1C, (ABCD)) = \\dfrac{A_1H}{A_1C} = \\dfrac{\\sqrt{6}/3}{\\sqrt{2}} = \\dfrac{\\sqrt{3}}{3} \\neq \\dfrac{\\sqrt{6}}{3}$$',
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: PART_II_TITLE,
    questionText:
      'An và Bình rủ nhau đi câu cá vào ngày nghỉ cuối tuần. Xác suất câu được cá của An là $0,6$. Xác suất câu được cá của Bình là $0,3$. Giả sử việc câu được cá của An và Bình là độc lập với nhau. Khi đó:',
    statements: [
      {
        key: 'a',
        text: 'Xác suất An không câu được cá bằng $0,4$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Xác suất có đúng $1$ người câu được cá bằng $0,34$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Xác suất để cả $2$ người đều không câu được cá bằng $0,3$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Xác suất có ít nhất $1$ người câu được cá bằng $0,72$.',
        correct: true,
      },
    ],
    explanation:
      'Gọi $A$ là biến cố "An câu được cá" $\\implies P(A) = 0,6 \\implies P(\\overline{A}) = 1 - 0,6 = 0,4$.\nGọi $B$ là biến cố "Bình câu được cá" $\\implies P(B) = 0,3 \\implies P(\\overline{B}) = 1 - 0,3 = 0,7$.\n• **Ý a) Đúng**: Xác suất An không câu được cá là $P(\\overline{A}) = 0,4$.\n• **Ý b) Sai**: Xác suất có đúng $1$ người câu được cá là:\n$$P(A\\overline{B} \\cup \\overline{A}B) = 0,6 \\cdot 0,7 + 0,4 \\cdot 0,3 = 0,42 + 0,12 = 0,54 \\neq 0,34$$\n• **Ý c) Sai**: Xác suất cả $2$ người đều không câu được cá là:\n$$P(\\overline{A}\\,\\overline{B}) = 0,4 \\cdot 0,7 = 0,28 \\neq 0,3$$\n• **Ý d) Đúng**: Xác suất có ít nhất $1$ người câu được cá là:\n$$P = 1 - P(\\overline{A}\\,\\overline{B}) = 1 - 0,28 = 0,72$$',
  },

  // =================================================================
  // PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (Câu 1 -> Câu 6, ứng với id 17 -> 22)
  // =================================================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Như hình vẽ, trong hình hộp $ABCD - A_1B_1C_1D_1$, biết $AD = BD = AA_1 = 1,\\ AD \\perp BD,\\ \\angle A_1AB = 45^\\circ,\\ \\angle A_1AD = 60^\\circ$. Khi đó độ dài đoạn thẳng $BD_1$ bằng bao nhiêu?',
    diagramType: 'DE07_PARALLELEPIPED_P3_Q1',
    correctAnswer: '1',
    explanation:
      '• Trong tam giác vuông $ABD$ vuông tại $D$ ($AD \\perp BD$) có $AD = BD = 1$:\n$$AB = \\sqrt{AD^2 + BD^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$$\n• Ta biểu diễn vectơ $\\overrightarrow{BD_1}$:\n$$\\overrightarrow{BD_1} = \\overrightarrow{BD} + \\overrightarrow{DD_1} = \\overrightarrow{AD} - \\overrightarrow{AB} + \\overrightarrow{AA_1}$$\n• Tính các tích vô hướng:\n  - Vì $AD \\perp BD$ nên $\\overrightarrow{BD}^2 = 1^2 = 1$.\n  - $\\overrightarrow{AA_1} \\cdot \\overrightarrow{AD} = AA_1 \\cdot AD \\cdot \\cos 60^\\circ = 1 \\cdot 1 \\cdot \\dfrac{1}{2} = \\dfrac{1}{2}$.\n  - $\\overrightarrow{AA_1} \\cdot \\overrightarrow{AB} = AA_1 \\cdot AB \\cdot \\cos 45^\\circ = 1 \\cdot \\sqrt{2} \\cdot \\dfrac{\\sqrt{2}}{2} = 1$.\n• Suy ra:\n$$\\overrightarrow{BD} \\cdot \\overrightarrow{AA_1} = (\\overrightarrow{AD} - \\overrightarrow{AB}) \\cdot \\overrightarrow{AA_1} = \\dfrac{1}{2} - 1 = -\\dfrac{1}{2}$$\n• Bình phương độ dài đoạn $BD_1$:\n$$BD_1^2 = (\\overrightarrow{BD} + \\overrightarrow{AA_1})^2 = BD^2 + AA_1^2 + 2\\overrightarrow{BD}\\cdot\\overrightarrow{AA_1} = 1 + 1 + 2\\left(-\\dfrac{1}{2}\\right) = 1 \\implies BD_1 = 1$$\nĐáp số: $1$.',
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Cho hàm số $f(x) = a^{x - 4} + 1$ với $a > 0,\\ a \\neq 1$. Đồ thị của hàm số luôn đi qua điểm cố định $A$. Biết tọa độ điểm $A$ thỏa mãn phương trình $mx + ny = 4,\\ m > 0,\\ n > 0$. Khi đó giá trị nhỏ nhất của $\\dfrac{1}{m} + \\dfrac{2}{n}$ là bao nhiêu?',
    correctAnswer: '4',
    explanation:
      '• Với mọi $a > 0, a \\neq 1$, tại $x = 4$ ta luôn có:\n$$f(4) = a^{4 - 4} + 1 = a^0 + 1 = 2$$\nDo đó đồ thị hàm số luôn đi qua điểm cố định $A(4; 2)$.\n• Vì điểm $A(4; 2)$ thuộc đường thẳng $mx + ny = 4$ nên:\n$$4m + 2n = 4 \\iff 2m + n = 2 \\quad (m > 0, n > 0)$$\n• Áp dụng bất đẳng thức Cauchy (AM-GM):\n$$\\dfrac{1}{m} + \\dfrac{2}{n} = \\dfrac{1}{2}(2m + n)\\left(\\dfrac{1}{m} + \\dfrac{2}{n}\\right) = \\dfrac{1}{2}\\left(2 + \\dfrac{4m}{n} + \\dfrac{n}{m} + 2\\right) = \\dfrac{1}{2}\\left(4 + \\dfrac{4m}{n} + \\dfrac{n}{m}\\right)$$\nVì $\\dfrac{4m}{n} + \\dfrac{n}{m} \\ge 2\\sqrt{\\dfrac{4m}{n} \\cdot \\dfrac{n}{m}} = 4$ nên:\n$$\\dfrac{1}{m} + \\dfrac{2}{n} \\ge \\dfrac{1}{2}(4 + 4) = 4$$\nDấu "$=$" xảy ra khi $\\begin{cases} 2m = n \\\\ 2m + n = 2 \\end{cases} \\iff \\begin{cases} m = \\dfrac{1}{2} \\\\ n = 1 \\end{cases}$.\nĐáp số: $4$.',
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Bình có $9$ viên kẹo sô-cô-la nhân hạt, gồm $4$ viên nhân hạnh nhân, $2$ viên nhân hạt phỉ và $3$ viên nhân óc chó. Trong một hộp có $9$ ngăn được đánh số từ $1$ đến $9$, Bình sẽ xếp ngẫu nhiên $9$ viên kẹo vào các ngăn, mỗi ngăn đúng một viên. Chín ngăn được bố trí thành $3$ hàng và $3$ cột như hình vẽ.\nTính xác suất để một trong ba hàng được xếp toàn bộ bằng $3$ viên kẹo nhân hạnh nhân (làm tròn kết quả đến hàng phần trăm).',
    diagramType: 'DE01_GRID_3X3',
    correctAnswer: '0,14',
    explanation:
      '• Số cách chọn $4$ ngăn trong $9$ ngăn để xếp $4$ viên kẹo nhân hạnh nhân là:\n$$n(\\Omega) = C_9^4 = 126$$\n• Để có một trong ba hàng gồm toàn bộ $3$ viên kẹo nhân hạnh nhân:\n  - Chọn $1$ hàng trong $3$ hàng ngang để xếp $3$ viên hạnh nhân: có $3$ cách.\n  - Chọn thêm $1$ ngăn trong $6$ ngăn còn lại cho viên hạnh nhân thứ $4$: có $6$ cách.\n  (Vì chỉ có $4$ viên hạnh nhân nên không thể có hai hàng cùng được lấp đầy bởi kẹo hạnh nhân).\n• Số kết quả thuận lợi là $n(A) = 3 \\cdot 6 = 18$.\n• Xác suất cần tìm là:\n$$P(A) = \\dfrac{18}{126} = \\dfrac{1}{7} \\approx 0,14$$\nĐáp số: $0,14$.',
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Hiện có một phong hỏa đài như hình vẽ, phần chính của nó là một phương đình. Mô hình hóa phần chính này thành hình chóp cụt tứ giác đều $ABCD - A_1B_1C_1D_1$ như hình vẽ. Biết tỉ số diện tích đáy trên và đáy dưới là $1 : 16$, chiều cao của phương đình bằng $3$ lần độ dài cạnh đáy trên. Thể tích của phương đình là $567\\text{ m}^3$. Khi đó diện tích toàn phần của phương đình bằng bao nhiêu $\\text{m}^2$? Cho $\\sqrt{5} \\approx 2,2,\\ \\sqrt{3} \\approx 1,7,\\ \\sqrt{2} \\approx 1,4$.',
    diagramType: 'DE07_FRUSTUM_P3_Q4',
    correctAnswer: '450',
    explanation:
      '• Gọi độ dài cạnh đáy trên là $A_1B_1 = x\\ (x > 0)$. Diện tích đáy trên là $S_1 = x^2$.\n• Vì tỉ số diện tích đáy trên và đáy dưới là $1 : 16$ nên diện tích đáy dưới là $S_2 = 16x^2 \\implies$ cạnh đáy dưới là $AB = 4x$.\n• Chiều cao của hình chóp cụt là $h = 3x$.\n• Thể tích khối chóp cụt tứ giác đều là:\n$$V = \\dfrac{h}{3}\\left(S_1 + S_2 + \\sqrt{S_1 S_2}\\right) = \\dfrac{3x}{3}(x^2 + 16x^2 + 4x^2) = 21x^3$$\nTheo đề bài:\n$$21x^3 = 567 \\iff x^3 = 27 \\iff x = 3\\text{ (m)}$$\n• Suy ra:\n  - Cạnh đáy trên $a_1 = x = 3\\text{ m} \\implies S_1 = 9\\text{ m}^2$.\n  - Cạnh đáy dưới $a_2 = 4x = 12\\text{ m} \\implies S_2 = 144\\text{ m}^2$.\n  - Chiều cao $h = 3x = 9\\text{ m}$.\n• Độ dài trung đoạn (chiều cao mặt bên hình thang cân) của hình chóp cụt là:\n$$d = \\sqrt{h^2 + \\left(\\dfrac{a_2 - a_1}{2}\\right)^2} = \\sqrt{9^2 + \\left(\\dfrac{12 - 3}{2}\\right)^2} = \\sqrt{81 + \\dfrac{81}{4}} = \\dfrac{9\\sqrt{5}}{2}\\text{ (m)}$$\n• Diện tích xung quanh (gồm $4$ mặt bên hình thang cân) là:\n$$S_{\\text{xq}} = 4 \\cdot \\dfrac{a_1 + a_2}{2} \\cdot d = 2 \\cdot (3 + 12) \\cdot \\dfrac{9\\sqrt{5}}{2} = 135\\sqrt{5}\\text{ (m}^2\\text{)}$$\n• Diện tích toàn phần của phương đình (với $\\sqrt{5} \\approx 2,2$) là:\n$$S_{\\text{tp}} = S_{\\text{xq}} + S_1 + S_2 \\approx 135 \\cdot 2,2 + 9 + 144 = 297 + 153 = 450\\text{ (m}^2\\text{)}$$\nĐáp số: $450$.',
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Một vòng đu quay trong công viên giải trí có $12$ ghế, được đánh số từ $1$ đến $12$, mỗi ghế chỉ có một chỗ ngồi (xem hình bên). Có $6$ bạn nữ và $6$ bạn nam cùng chơi vòng đu quay và bốc thăm ngẫu nhiên để xác định ghế ngồi.\nTính xác suất để các bạn nam và nữ ngồi xen kẽ nhau, tức là mỗi bạn nam ngồi giữa hai bạn nữ và mỗi bạn nữ ngồi giữa hai bạn nam (viết kết quả dưới dạng phân số tối giản `1/462` hoặc số thập phân làm tròn).',
    diagramType: 'DE07_FERRIS_P3_Q5',
    correctAnswer: '1/462',
    explanation:
      '• Số cách xếp ngẫu nhiên $12$ bạn vào $12$ ghế được đánh số từ $1$ đến $12$ là:\n$$n(\\Omega) = 12!$$\n• Để $6$ bạn nam và $6$ bạn nữ ngồi xen kẽ nhau:\n  - **Trường hợp 1**: Các bạn nam ngồi ở các ghế đánh số lẻ $(1, 3, 5, 7, 9, 11)$ và các bạn nữ ngồi ở các ghế đánh số chẵn $(2, 4, 6, 8, 10, 12)$: có $6! \\cdot 6!$ cách.\n  - **Trường hợp 2**: Các bạn nữ ngồi ở các ghế đánh số lẻ và các bạn nam ngồi ở các ghế đánh số chẵn: có $6! \\cdot 6!$ cách.\n• Số kết quả thuận lợi là $n(A) = 2 \\cdot 6! \\cdot 6!$.\n• Xác suất cần tìm là:\n$$P(A) = \\dfrac{2 \\cdot 6! \\cdot 6!}{12!} = \\dfrac{2}{C_{12}^6} = \\dfrac{2}{924} = \\dfrac{1}{462} \\approx 0,0022$$\nĐáp số: $1/462$ (hoặc $0,0022$).',
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: PART_III_TITLE,
    questionText:
      'Với mọi số thực $x > y > 0$, bất đẳng thức $x^2 - 2y^2 \\le cx(y - x)$ luôn đúng. Khi đó giá trị lớn nhất của số thực $c$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?',
    correctAnswer: '-1,17',
    explanation:
      '• Vì $x > y > 0$ nên $x(y - x) < 0$. Chia hai vế của bất đẳng thức $x^2 - 2y^2 \\le cx(y - x)$ cho $x(y - x) < 0$ (đổi chiều bất đẳng thức), ta được:\n$$c \\le \\dfrac{x^2 - 2y^2}{x(y - x)} = \\dfrac{2y^2 - x^2}{x(x - y)}, \\quad \\forall x > y > 0$$\n• Đặt $t = \\dfrac{y}{x}$. Do $0 < y < x$ nên $t \\in (0; 1)$. Khi đó:\n$$c \\le g(t) = \\dfrac{2t^2 - 1}{1 - t}, \\quad \\forall t \\in (0; 1)$$\n• Đặt $u = 1 - t \\in (0; 1) \\implies t = 1 - u$. Ta có:\n$$g(t) = \\dfrac{2(1 - u)^2 - 1}{u} = \\dfrac{2u^2 - 4u + 1}{u} = 2u + \\dfrac{1}{u} - 4$$\n• Áp dụng bất đẳng thức Cauchy cho hai số dương $2u$ và $\\dfrac{1}{u}$:\n$$2u + \\dfrac{1}{u} \\ge 2\\sqrt{2u \\cdot \\dfrac{1}{u}} = 2\\sqrt{2}$$\nDấu "$=$" xảy ra khi $2u^2 = 1 \\iff u = \\dfrac{\\sqrt{2}}{2} \\in (0; 1)$ (tức $t = 1 - \\dfrac{\\sqrt{2}}{2} \\in (0; 1)$).\n• Suy ra:\n$$\\min_{t \\in (0; 1)} g(t) = 2\\sqrt{2} - 4 \\approx -1,17$$\nVậy giá trị lớn nhất của $c$ là $2\\sqrt{2} - 4 \\approx -1,17$.\nĐáp số: $-1,17$.',
  },
];
