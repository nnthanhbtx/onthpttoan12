import { Question } from '../types';

export const QUESTIONS_DE02: Question[] = [
  // ==========================================
  // PHẦN I: Câu trắc nghiệm nhiều phương án lựa chọn (12 câu)
  // ==========================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Tổng số đường tiệm cận ngang và tiệm cận đứng của đồ thị hàm số đã cho là',
    diagramType: 'DE02_BBT_P1_Q1',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$2$' },
      { key: 'C', text: '$4$' },
      { key: 'D', text: '$3$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dựa vào bảng biến thiên của hàm số $y = f(x)$:\n• Xét đường tiệm cận ngang:\n  - $\\lim_{x \\to -\\infty} f(x) = 2 \\implies y = 2$ là một đường tiệm cận ngang.\n  - $\\lim_{x \\to +\\infty} f(x) = +\\infty$ nên đồ thị không có tiệm cận ngang khi $x \\to +\\infty$.\n• Xét đường tiệm cận đứng:\n  - $\\lim_{x \\to 0^+} f(x) = +\\infty$ (và $\\lim_{x \\to 0^-} f(x) = -4$) $\\implies x = 0$ là một đường tiệm cận đứng.\nVậy đồ thị hàm số đã cho có $1$ đường tiệm cận ngang ($y = 2$) và $1$ đường tiệm cận đứng ($x = 0$), tổng cộng có $2$ đường tiệm cận. Đáp án đúng là B.',
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Đường cong trong hình vẽ bên là đồ thị của hàm số nào sau đây?',
    diagramType: 'DE02_GRAPH_P1_Q2',
    options: [
      { key: 'A', text: '$y = -x^3 + 3x^2$' },
      { key: 'B', text: '$y = -x^3 + 3x$' },
      { key: 'C', text: '$y = x^3 - 3x^2$' },
      { key: 'D', text: '$y = x^3 - 3x$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Quan sát đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$:\n• Nhánh ngoài cùng bên phải đi xuống khi $x \\to +\\infty$ nên hệ số $a < 0$ (loại C và D).\n• Đồ thị đi qua gốc tọa độ $O(0; 0)$, đạt cực tiểu tại $(-1; -2)$ và đạt cực đại tại $(1; 2)$.\n• Kiểm tra hàm số $y = -x^3 + 3x$: có $y\' = -3x^2 + 3 = 0 \\iff x = \\pm 1$, đồng thời $y(-1) = -2$ và $y(1) = 2$ (thỏa mãn).\nVậy đáp án đúng là B.',
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $f(x) = \\begin{cases} \\log(ax+4), & x > 0 \\\\ x + 2, & x \\le 0. \\end{cases}$ Biết $f(0) + f(3) = 3$. Khi đó giá trị của số thực $a$ là',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$2$' },
      { key: 'C', text: '$3$' },
      { key: 'D', text: '$4$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ta tính giá trị của hàm số tại $x = 0$ và $x = 3$:\n• Với $x = 0 \\le 0$: $f(0) = 0 + 2 = 2$.\n• Với $x = 3 > 0$: $f(3) = \\log(3a + 4)$ (điều kiện $3a + 4 > 0$).\nTheo giả thiết:\n$$f(0) + f(3) = 3 \\iff 2 + \\log(3a + 4) = 3 \\iff \\log(3a + 4) = 1 \\iff 3a + 4 = 10 \\iff a = 2$$\nGiá trị $a = 2$ thỏa mãn điều kiện xác định. Vậy đáp án đúng là B.',
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho cấp số nhân $(u_n)$ với $u_1 = 2$ và công bội $q = 3$. Giá trị của $u_4$ bằng',
    options: [
      { key: 'A', text: '$54$' },
      { key: 'B', text: '$162$' },
      { key: 'C', text: '$24$' },
      { key: 'D', text: '$48$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Áp dụng công thức số hạng tổng quát của cấp số nhân $u_n = u_1 \\cdot q^{n-1}$:\n$$u_4 = u_1 \\cdot q^3 = 2 \\cdot 3^3 = 2 \\cdot 27 = 54$$\nVậy đáp án đúng là A.',
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R}$ và có bảng biến thiên như sau. Điểm cực đại của hàm số $y = f(x)$ là',
    diagramType: 'DE02_BBT_P1_Q5',
    options: [
      { key: 'A', text: '$x = -7$' },
      { key: 'B', text: '$x = -6$' },
      { key: 'C', text: '$x = -4$' },
      { key: 'D', text: '$x = -3$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dựa vào bảng biến thiên, đạo hàm $y\'$ đổi dấu từ dương ($+$) sang âm ($-$) khi $x$ đi qua điểm $x = -4$.\nDo đó điểm cực đại của hàm số $y = f(x)$ là $x = -4$.\nVậy đáp án đúng là C.',
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hình lăng trụ $ABC.A\'B\'C\'$. Đặt $\\overrightarrow{a} = \\overrightarrow{AA\'}$, $\\overrightarrow{b} = \\overrightarrow{AB}$, $\\overrightarrow{c} = \\overrightarrow{AC}$. Gọi $G\'$ là trọng tâm của tam giác $A\'B\'C\'$. Vectơ $\\overrightarrow{AG\'}$ bằng',
    options: [
      { key: 'A', text: '$\\dfrac{1}{3}\\left(\\overrightarrow{a} + \\overrightarrow{b} + 3\\overrightarrow{c}\\right)$' },
      { key: 'B', text: '$\\dfrac{1}{3}\\left(\\overrightarrow{a} + 3\\overrightarrow{b} + \\overrightarrow{c}\\right)$' },
      { key: 'C', text: '$\\dfrac{1}{3}\\left(\\overrightarrow{a} + \\overrightarrow{b} + \\overrightarrow{c}\\right)$' },
      { key: 'D', text: '$\\dfrac{1}{3}\\left(3\\overrightarrow{a} + \\overrightarrow{b} + \\overrightarrow{c}\\right)$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Vì $G\'$ là trọng tâm của tam giác $A\'B\'C\'$ nên:\n$$\\overrightarrow{A\'G\'} = \\dfrac{1}{3}\\left(\\overrightarrow{A\'B\'} + \\overrightarrow{A\'C\'}\\right) = \\dfrac{1}{3}\\left(\\overrightarrow{AB} + \\overrightarrow{AC}\\right) = \\dfrac{1}{3}\\left(\\overrightarrow{b} + \\overrightarrow{c}\\right)$$\nTheo quy tắc ba điểm:\n$$\\overrightarrow{AG\'} = \\overrightarrow{AA\'} + \\overrightarrow{A\'G\'} = \\overrightarrow{a} + \\dfrac{1}{3}\\left(\\overrightarrow{b} + \\overrightarrow{c}\\right) = \\dfrac{1}{3}\\left(3\\overrightarrow{a} + \\overrightarrow{b} + \\overrightarrow{c}\\right)$$\nVậy đáp án đúng là D.',
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Tiệm cận xiên của đồ thị hàm số $y = \\dfrac{-x^2 + x + 3}{1 - x}$ đi qua điểm nào dưới đây?',
    options: [
      { key: 'A', text: '$N(2; 1)$' },
      { key: 'B', text: '$Q(1; 1)$' },
      { key: 'C', text: '$P(2; -2)$' },
      { key: 'D', text: '$M(1; 2)$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$. Ta thực hiện phép chia đa thức:\n$$y = \\dfrac{-x^2 + x + 3}{1 - x} = \\dfrac{x(1 - x) + 3}{1 - x} = x + \\dfrac{3}{1 - x}$$\nVì $\\lim_{x \\to \\pm\\infty} (y - x) = \\lim_{x \\to \\pm\\infty} \\dfrac{3}{1 - x} = 0$ nên đường tiệm cận xiên của đồ thị hàm số có phương trình là $y = x$.\nThay tọa độ các điểm vào phương trình $y = x$, ta thấy điểm $Q(1; 1)$ thỏa mãn.\nVậy đáp án đúng là B.',
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Giá trị nhỏ nhất của hàm số $y = x^4 - 2x^2 - 1$ trên đoạn $[0; 2]$ bằng',
    options: [
      { key: 'A', text: '$7$' },
      { key: 'B', text: '$-2$' },
      { key: 'C', text: '$1$' },
      { key: 'D', text: '$-1$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hàm số $y = x^4 - 2x^2 - 1$ liên tục trên đoạn $[0; 2]$.\nTa có đạo hàm $y\' = 4x^3 - 4x = 4x(x^2 - 1)$.\nTrên khoảng $(0; 2)$, phương trình $y\' = 0 \\iff x = 1$.\nTính giá trị của hàm số tại $x = 0, x = 1, x = 2$:\n$$y(0) = -1, \\quad y(1) = 1 - 2 - 1 = -2, \\quad y(2) = 16 - 8 - 1 = 7$$\nVậy $\\min_{[0; 2]} y = y(1) = -2$. Đáp án đúng là B.',
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $f(x)$ có bảng biến thiên như sau. Khẳng định nào sau đây là đúng?',
    diagramType: 'DE02_BBT_P1_Q9',
    options: [
      { key: 'A', text: 'Hàm số đồng biến trên khoảng $(-1; 0)$' },
      { key: 'B', text: 'Hàm số đồng biến trên khoảng $(0; 2)$' },
      { key: 'C', text: 'Hàm số nghịch biến trên khoảng $(-1; +\\infty)$' },
      { key: 'D', text: 'Hàm số nghịch biến trên khoảng $(-\\infty; 0)$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dựa vào bảng biến thiên:\n• Trên khoảng $(-1; 0)$, đạo hàm $y\' > 0$ và đồ thị đi lên từ $0$ đến $2$ nên hàm số đồng biến trên khoảng $(-1; 0)$.\n• Trên các khoảng $(-\\infty; -1)$ và $(0; +\\infty)$, đạo hàm $y\' < 0$ nên hàm số nghịch biến.\nVậy khẳng định đúng là A.',
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hình hộp $ABCD.A\'B\'C\'D\'$ (minh họa như hình vẽ). Khẳng định nào sau đây đúng?',
    diagramType: 'DE02_BOX_P1_Q10',
    options: [
      { key: 'A', text: '$\\overrightarrow{DB} = \\overrightarrow{DA} + \\overrightarrow{DD\'} + \\overrightarrow{DC}$' },
      { key: 'B', text: '$\\overrightarrow{AC\'} = \\overrightarrow{AC} + \\overrightarrow{AB} + \\overrightarrow{AD}$' },
      { key: 'C', text: '$\\overrightarrow{DB\'} = \\overrightarrow{DA} + \\overrightarrow{DD\'} + \\overrightarrow{DC}$' },
      { key: 'D', text: '$\\overrightarrow{AC\'} = \\overrightarrow{AB} + \\overrightarrow{AB\'} + \\overrightarrow{AD}$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Áp dụng quy tắc hình hộp cho các vectơ cùng xuất phát từ đỉnh $D$ của hình hộp $ABCD.A\'B\'C\'D\'$, ta có:\n$$\\overrightarrow{DB\'} = \\overrightarrow{DA} + \\overrightarrow{DD\'} + \\overrightarrow{DC}$$\nVậy đáp án đúng là C.',
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Phương trình đường tiệm cận ngang của đồ thị hàm số $y = \\dfrac{-2x - 1}{x - 2}$ là',
    options: [
      { key: 'A', text: '$y = -2$' },
      { key: 'B', text: '$x = 2$' },
      { key: 'C', text: '$x = -2$' },
      { key: 'D', text: '$y = 2$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tập xác định: $D = \\mathbb{R} \\setminus \\{2\\}$.\nTa có:\n$$\\lim_{x \\to \\pm\\infty} y = \\lim_{x \\to \\pm\\infty} \\dfrac{-2x - 1}{x - 2} = \\lim_{x \\to \\pm\\infty} \\dfrac{-2 - \\dfrac{1}{x}}{1 - \\dfrac{2}{x}} = -2$$\nVậy đường tiệm cận ngang của đồ thị hàm số có phương trình là $y = -2$. Đáp án đúng là A.',
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Hàm số $y = x^4 - 8x^2$ đồng biến trên khoảng nào sau đây?',
    options: [
      { key: 'A', text: '$(-2; 0)$' },
      { key: 'B', text: '$(-\\infty; -2)$' },
      { key: 'C', text: '$(-\\infty; +\\infty)$' },
      { key: 'D', text: '$(0; +\\infty)$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tập xác định: $D = \\mathbb{R}$.\nTa có đạo hàm: $y\' = 4x^3 - 16x = 4x(x^2 - 4)$.\nCho $y\' = 0 \\iff x = -2$ hoặc $x = 0$ hoặc $x = 2$.\nBảng xét dấu của $y\'$:\n• $y\' > 0 \\iff x \\in (-2; 0) \\cup (2; +\\infty)$.\n• $y\' < 0 \\iff x \\in (-\\infty; -2) \\cup (0; 2)$.\nVậy hàm số đồng biến trên khoảng $(-2; 0)$. Đáp án đúng là A.',
  },

  // ==========================================
  // PHẦN II: Câu trắc nghiệm đúng sai (4 câu: id 13 -> 16)
  // ==========================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hàm số bậc ba $y = f(x)$ có đồ thị như hình vẽ:',
    diagramType: 'DE02_GRAPH_P2_Q1',
    statements: [
      {
        key: 'a',
        text: 'Hàm số $f(x)$ nghịch biến trên khoảng $(-1; 1)$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Trên đoạn $[-2; 2]$, hàm số $f(x)$ đạt giá trị lớn nhất bằng $2$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Hàm số $f(x)$ có hai điểm cực trị.',
        correct: true,
      },
      {
        key: 'd',
        text: '$f(x) = x^3 - 3x + 1$.',
        correct: true,
      },
    ],
    explanation:
      'Quan sát đồ thị hàm số bậc ba $y = f(x)$:\n• a) Đúng: Trên khoảng $(-1; 1)$, đồ thị đi xuống từ điểm cực đại $(-1; 3)$ tới điểm cực tiểu $(1; -1)$ nên hàm số $f(x)$ nghịch biến trên khoảng $(-1; 1)$.\n• b) Sai: Trên đoạn $[-2; 2]$, giá trị lớn nhất của hàm số đạt được bằng $3$ (tại $x = -1$ và $x = 2$), không phải bằng $2$.\n• c) Đúng: Đồ thị hàm số bậc ba có điểm cực đại $(-1; 3)$ và điểm cực tiểu $(1; -1)$ nên hàm số có hai điểm cực trị là $x = -1$ và $x = 1$.\n• d) Đúng: Giả sử $f(x) = ax^3 + bx^2 + cx + d$. Vì đồ thị đạt cực trị tại $x = \\pm 1$ và đi qua $(0; 1), (-1; 3), (1; -1)$ nên:\n$$\\begin{cases} f(0) = d = 1 \\\\ f\'(x) = 3ax^2 + 2bx + c = 0 \\text{ tại } x = \\pm 1 \\\\ f(1) = a + b + c + d = -1 \\end{cases} \\iff \\begin{cases} a = 1, b = 0 \\\\ c = -3, d = 1 \\end{cases}$$\nSuy ra $f(x) = x^3 - 3x + 1$.',
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hàm số $y = \\dfrac{x^2 + 3x + 3}{x + 2}$.',
    statements: [
      {
        key: 'a',
        text: 'Tiếp tuyến của đồ thị hàm số đã cho song song với đường thẳng $y = -3x - 11$ đi qua điểm $B(1; -6)$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Tổng giá trị cực đại và giá trị cực tiểu của hàm số đã cho bằng $-4$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Đường tiệm cận xiên của đồ thị hàm số đã cho đi qua điểm $A(0; 2)$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Hàm số đã cho đồng biến trên khoảng $(-\\infty; -3)$ và $(-1; +\\infty)$.',
        correct: true,
      },
    ],
    explanation:
      'Tập xác định: $D = \\mathbb{R} \\setminus \\{-2\\}$. Ta viết lại hàm số:\n$$y = x + 1 + \\dfrac{1}{x + 2} \\implies y\' = 1 - \\dfrac{1}{(x + 2)^2} = \\dfrac{x^2 + 4x + 3}{(x + 2)^2}$$\n• d) Đúng: $y\' > 0 \\iff x^2 + 4x + 3 > 0 \\iff x \\in (-\\infty; -3) \\cup (-1; +\\infty)$. Vậy hàm số đồng biến trên các khoảng $(-\\infty; -3)$ và $(-1; +\\infty)$.\n• c) Sai: Vì $\\lim_{x \\to \\pm\\infty} [y - (x + 1)] = \\lim_{x \\to \\pm\\infty} \\dfrac{1}{x + 2} = 0$ nên đường tiệm cận xiên là $y = x + 1$. Thay $x = 0$ được $y = 1 \\neq 2$, tức tiệm cận xiên không đi qua $A(0; 2)$.\n• b) Sai: $y\' = 0 \\iff x = -3$ hoặc $x = -1$. Ta có $y_{CĐ} = y(-3) = -3$ và $y_{CT} = y(-1) = 1$. Tổng giá trị cực đại và cực tiểu là $y_{CĐ} + y_{CT} = -3 + 1 = -2 \\neq -4$.\n• a) Đúng: Tiếp tuyến song song với $d: y = -3x - 11$ có hệ số góc $k = -3$:\n$$y\'(x_0) = -3 \\iff 1 - \\dfrac{1}{(x_0 + 2)^2} = -3 \\iff (x_0 + 2)^2 = \\dfrac{1}{4} \\iff \\left[\\begin{array}{l} x_0 = -\\dfrac{3}{2} \\\\ x_0 = -\\dfrac{5}{2} \\end{array}\\right.$$\n  - Với $x_0 = -\\dfrac{3}{2} \\implies y_0 = \\dfrac{3}{2}$: phương trình tiếp tuyến là $y = -3\\left(x + \\dfrac{3}{2}\\right) + \\dfrac{3}{2} = -3x - 3$ (song song với $d$ và đi qua điểm $B(1; -6)$ vì $-3(1) - 3 = -6$).\n  - Với $x_0 = -\\dfrac{5}{2} \\implies y_0 = -\\dfrac{7}{2}$: phương trình là $y = -3x - 11$ (trùng với $d$, loại).',
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Như hình vẽ, trong một thành phố, giữa hai địa điểm $M, N$ có một mạng lưới đường phố dạng ô vuông đều đặn, trong đó $A_1, A_2, A_3, A_4$ là $4$ giao điểm của mạng lưới đường nằm trên cùng một đường chéo. Hiện tại, hai người Bình và An lần lượt ở $M$ và $N$, cần đi đến $N$ và $M$. Mỗi người chọn ngẫu nhiên một đường đi ngắn nhất dọc theo các đường phố, đồng thời xuất phát với cùng vận tốc và đi cho đến khi tới $N$ và $M$.',
    diagramType: 'DE02_GRID_P2_Q3',
    statements: [
      {
        key: 'a',
        text: 'Bình có $120$ cách đi từ $M$ đến $N$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Bình có $64$ cách đi từ $M$ đến $N$ và bắt buộc đi qua $A_2$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Xác suất để Bình và An gặp nhau tại $A_2$ là $\\dfrac{81}{400}$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Xác suất để Bình và An gặp nhau là $\\dfrac{1}{2}$.',
        correct: false,
      },
    ],
    explanation:
      'Mạng lưới đường phố từ $M$ đến $N$ là lưới ô vuông $3 \\times 3$. Mỗi đường đi ngắn nhất từ $M$ đến $N$ gồm đúng $6$ đoạn (trong đó có $3$ đoạn ngang và $3$ đoạn dọc).\n• a) Sai: Số cách đi ngắn nhất của Bình từ $M$ đến $N$ là $C_6^3 = 20 \\neq 120$ (cách).\n• b) Sai: Để đi từ $M$ đến $A_2$ (gồm $1$ đoạn ngang, $2$ đoạn dọc) có $C_3^1 = 3$ cách; từ $A_2$ đến $N$ (gồm $2$ đoạn ngang, $1$ đoạn dọc) có $C_3^2 = 3$ cách. Vậy số cách Bình đi từ $M$ đến $N$ qua $A_2$ là $3 \\cdot 3 = 9 \\neq 64$ (cách).\n• c) Đúng: Không gian mẫu khi cả hai chọn đường đi là $n(\\Omega) = 20 \\cdot 20 = 400$. Vì hai người xuất phát cùng lúc với cùng vận tốc nên chỉ có thể gặp nhau sau $3$ đoạn đường (tức tại $A_1, A_2, A_3$ hoặc $A_4$). Số cách Bình đi qua $A_2$ là $9$ và số cách An đi qua $A_2$ cũng là $9$, nên xác suất gặp nhau tại $A_2$ là:\n$$P(A_2) = \\dfrac{9 \\cdot 9}{20 \\cdot 20} = \\dfrac{81}{400}$$\n• d) Sai: Số cách mỗi người đi qua $A_1, A_2, A_3, A_4$ lần lượt là $C_3^0 C_3^3 = 1$, $C_3^1 C_3^2 = 9$, $C_3^2 C_3^1 = 9$, $C_3^3 C_3^0 = 1$. Xác suất để hai người gặp nhau là:\n$$P = \\dfrac{1^2 + 9^2 + 9^2 + 1^2}{400} = \\dfrac{164}{400} = \\dfrac{41}{100} \\neq \\dfrac{1}{2}$$',
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Như hình vẽ, trong lăng trụ đứng tứ giác $ABCD.A_1B_1C_1D_1$, đáy $ABCD$ là hình thoi, $\\widehat{BAD} = 60^\\circ$, $AB = AA_1 = 2$. Điểm $P$ là trung điểm của $CC_1$, điểm $Q$ thỏa mãn $\\overrightarrow{DQ} = \\lambda\\overrightarrow{DC} + \\mu\\overrightarrow{DD_1}$ ($\\lambda \\in [0; 1], \\mu \\in [0; 1]$).',
    diagramType: 'DE02_PRISM_P2_Q4',
    statements: [
      {
        key: 'a',
        text: 'Nếu $\\lambda + \\mu = \\dfrac{1}{3}$ thì thể tích tứ diện $A_1BPQ$ là một hằng số.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Nếu $A_1Q = \\sqrt{5}$ thì quỹ tích của điểm $Q$ là một cung tròn.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Nếu $O$ là tâm đường tròn ngoại tiếp tam giác $A_1BQ$ thì $\\overrightarrow{A_1B} \\cdot \\overrightarrow{A_1O}$ có giá trị không đổi bằng $2$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Nếu $\\lambda = 1$ và $\\mu = \\dfrac{1}{2}$ thì tồn tại điểm $E$ trên đoạn thẳng $A_1B$ sao cho giá trị nhỏ nhất của $AE + EQ$ bằng $\\sqrt{9 + 2\\sqrt{10}}$.',
        correct: true,
      },
    ],
    explanation:
      'Vì $\\overrightarrow{DQ} = \\lambda\\overrightarrow{DC} + \\mu\\overrightarrow{DD_1}$ ($\\lambda, \\mu \\in [0; 1]$) nên $Q$ thuộc hình vuông $DCC_1D_1$ cạnh $2$.\n• a) Đúng: Khi $\\lambda + \\mu = \\dfrac{1}{3}$, ta có $\\overrightarrow{DQ} = \\lambda\\overrightarrow{DC} + \\left(\\dfrac{1}{3} - \\lambda\\right)\\overrightarrow{DD_1} = \\dfrac{1}{3}\\overrightarrow{DD_1} + \\lambda(\\overrightarrow{DC} - \\overrightarrow{DD_1})$. Vì $\\overrightarrow{DC} - \\overrightarrow{DD_1} = \\overrightarrow{AB} - \\overrightarrow{AA_1} = \\overrightarrow{A_1B}$ nên quỹ tích điểm $Q$ là đoạn thẳng song song với $A_1B \\subset (A_1BP)$. Do đó khoảng cách từ $Q$ đến mặt phẳng $(A_1BP)$ không đổi, suy ra thể tích tứ diện $A_1BPQ$ là hằng số.\n• b) Đúng: Tam giác $A_1C_1D_1$ đều cạnh $2$. Gọi $H$ là trung điểm $D_1C_1$ thì $A_1H \\perp (DCC_1D_1)$ và $A_1H = \\sqrt{3}$. Vì $A_1Q = \\sqrt{5}$ nên $HQ = \\sqrt{A_1Q^2 - A_1H^2} = \\sqrt{5 - 3} = \\sqrt{2}$. Đường tròn tâm $H$, bán kính $\\sqrt{2}$ cắt hình vuông $DCC_1D_1$ theo một cung tròn nối trung điểm của $DD_1$ với trung điểm $P$ của $CC_1$.\n• c) Sai: Gọi $M$ là trung điểm của $A_1B$. Vì $O$ là tâm đường tròn ngoại tiếp $\\triangle A_1BQ$ nên $OM \\perp A_1B$. Khi đó:\n$$\\overrightarrow{A_1B} \\cdot \\overrightarrow{A_1O} = \\overrightarrow{A_1B} \\cdot \\left(\\overrightarrow{A_1M} + \\overrightarrow{MO}\\right) = \\dfrac{1}{2}A_1B^2 = \\dfrac{1}{2}(2^2 + 2^2) = 4 \\neq 2$$\n• d) Đúng: Khi $\\lambda = 1, \\mu = \\dfrac{1}{2}$ thì $Q \\equiv P$ (trung điểm $CC_1$). Ta có $BQ = \\sqrt{BC^2 + CQ^2} = \\sqrt{5}$, đồng thời:\n$$\\overrightarrow{BA_1} \\cdot \\overrightarrow{BQ} = (\\overrightarrow{BA} + \\overrightarrow{BB_1}) \\cdot \\left(\\overrightarrow{BC} + \\dfrac{1}{2}\\overrightarrow{BB_1}\\right) = 2\\cdot 2\\cos 120^\\circ + \\dfrac{1}{2}\\cdot 2^2 = -2 + 2 = 0 \\implies A_1B \\perp BQ$$\nTrong $\\triangle AA_1B$ vuông cân tại $A$, đường cao $AM = BM = \\sqrt{2}$. Trải phẳng hai tam giác $\\triangle AA_1B$ và $\\triangle A_1BQ$ qua cạnh chung $A_1B$, ta được:\n$$\\min_{E \\in A_1B} (AE + EQ) = \\sqrt{BM^2 + (AM + BQ)^2} = \\sqrt{(\\sqrt{2})^2 + (\\sqrt{2} + \\sqrt{5})^2} = \\sqrt{9 + 2\\sqrt{10}}$$',
  },

  // ==========================================
  // PHẦN III: Câu trắc nghiệm trả lời ngắn (6 câu: id 17 -> 22)
  // ==========================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Một học sinh tên Hà tham gia nhóm yêu thích Toán học. Trong khi chơi bóng rổ, bạn phát hiện rằng khi đặt quả bóng rổ trên mặt đất, ánh sáng từ bóng đèn ở phía trên chếch sang một bên chiếu tới làm cho bóng của quả bóng rổ trên mặt đất có hình dạng khá giống một elip đã học trong môn Toán, và điểm tiếp xúc (tiếp điểm) giữa mặt đất và quả bóng chính là một tiêu điểm của elip tạo bởi bóng của quả bóng.\nBạn tiến hành một thí nghiệm tại nhà. Như hình vẽ, trên mặt bàn có một quả bóng rổ có bán kính bằng $1$ đơn vị độ dài. Phía trên bên phải của quả bóng có một bóng đèn $P$ (coi như một chất điểm). Khoảng cách từ bóng đèn đến mặt bàn bằng $4$ đơn vị độ dài, hình chiếu vuông góc của bóng đèn trên mặt bàn là điểm $A$. Khoảng cách từ đỉnh bên phải của elip tạo bởi bóng của quả bóng đến điểm $A$ bằng $3$ đơn vị độ dài.\nKhi đó, tâm sai $e$ của elip tạo bởi bóng của quả bóng bằng bao nhiêu? (làm tròn đến hàng phần trăm hoặc viết dưới dạng phân số tối giản)',
    diagramType: 'DE02_BASKETBALL_P3_Q1',
    correctAnswer: '0,78',
    explanation:
      'Xét mặt phẳng đứng đi qua nguồn sáng $P$, tâm quả bóng $I$ (bán kính $r = 1$) và trục lớn $B_1B_2$ của elip ($B_2$ là đỉnh phải gần $A$, $B_1$ là đỉnh trái, $F$ là tiếp điểm của quả bóng với mặt bàn).\n• Trong $\\triangle PAB_2$ vuông tại $A$: $PA = 4, AB_2 = 3 \\implies PB_2 = 5$, $\\cos\\widehat{PB_2A} = \\dfrac{3}{5}, \\sin\\widehat{PB_2A} = \\dfrac{4}{5}$.\n• Đường tròn $(I; 1)$ tiếp xúc với mặt bàn tại $F$ và tiếp xúc với tia $B_2P$ tại $T_2$. Đặt $\\alpha = \\widehat{PB_2A}$, ta có:\n$$B_2F = B_2T_2 = r \\cdot \\tan\\dfrac{\\alpha}{2} = \\dfrac{1 - \\cos\\alpha}{\\sin\\alpha} = \\dfrac{1 - \\dfrac{3}{5}}{\\dfrac{4}{5}} = \\dfrac{1}{2} = 0,5$$\n• Suy ra $FA = AB_2 + B_2F = 3 + 0,5 = 3,5$ và $PT_2 = PB_2 - B_2T_2 = 5 - 0,5 = 4,5$.\n• Gọi $T_1$ là tiếp điểm của tia sáng $PB_1$ với quả bóng, theo tính chất hai tiếp tuyến cắt nhau:\n$$PT_1 = PT_2 = 4,5 \\quad \\text{và} \\quad B_1T_1 = B_1F \\implies PB_1 = 4,5 + B_1F, \\quad AB_1 = 3,5 + B_1F$$\n• Áp dụng định lý Pythagore trong $\\triangle PAB_1$ vuông tại $A$:\n$$(B_1F + 4,5)^2 = 4^2 + (B_1F + 3,5)^2 \\iff 2B_1F = 8 \\iff B_1F = 4$$\n• Vì $F$ là tiêu điểm của elip nên $a + c = B_1F = 4$ và $a - c = B_2F = 0,5$, suy ra $2a = 4,5$ và $2c = 3,5$.\nVậy tâm sai của elip là:\n$$e = \\dfrac{c}{a} = \\dfrac{3,5}{4,5} = \\dfrac{7}{9} \\approx 0,78$$\nĐáp số: 0,78 (hoặc 7/9).',
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Cho tam giác nhọn $ABC$, các cạnh đối diện với các góc $A, B, C$ lần lượt là $a, b, c$. Biết $\\cos C = \\dfrac{b - a}{2a}$. Tìm giá trị lớn nhất của $\\sin B + \\sin A$ (làm tròn kết quả đến hàng phần trăm).',
    correctAnswer: '1,54',
    explanation:
      'Theo định lý sin trong $\\triangle ABC$, từ giả thiết $\\cos C = \\dfrac{b - a}{2a} \\iff 2a\\cos C = b - a$, ta có:\n$$2\\sin A\\cos C = \\sin B - \\sin A$$\nMặt khác $\\sin B = \\sin(A + C) = \\sin A\\cos C + \\cos A\\sin C$, thay vào đẳng thức trên:\n$$2\\sin A\\cos C = \\sin A\\cos C + \\cos A\\sin C - \\sin A \\iff \\sin A = \\sin(C - A)$$\nVì $\\triangle ABC$ nhọn ($0 < A, B, C < \\dfrac{\\pi}{2}$) nên $C - A = A \\iff C = 2A$, suy ra $B = \\pi - 3A$.\nĐiều kiện tam giác nhọn:\n$$\\begin{cases} 0 < 2A < \\dfrac{\\pi}{2} \\\\ 0 < \\pi - 3A < \\dfrac{\\pi}{2} \\end{cases} \\iff \\dfrac{\\pi}{6} < A < \\dfrac{\\pi}{4}$$\nTa có:\n$$\\sin B + \\sin A = \\sin 3A + \\sin A = 3\\sin A - 4\\sin^3 A + \\sin A = 4\\sin A - 4\\sin^3 A$$\nĐặt $t = \\sin A \\in \\left(\\dfrac{1}{2}; \\dfrac{\\sqrt{2}}{2}\\right)$. Xét hàm số $g(t) = 4t - 4t^3$ có $g\'(t) = 4 - 12t^2 = 0 \\iff t = \\dfrac{1}{\\sqrt{3}} \\in \\left(\\dfrac{1}{2}; \\dfrac{\\sqrt{2}}{2}\\right)$.\nGiá trị lớn nhất là:\n$$\\max(\\sin B + \\sin A) = g\\left(\\dfrac{1}{\\sqrt{3}}\\right) = \\dfrac{8}{3\\sqrt{3}} = \\dfrac{8\\sqrt{3}}{9} \\approx 1,54$$\nĐáp số: 1,54.',
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Một xưởng sản xuất thiết bị gia dụng dự định sản xuất không quá $400$ sản phẩm trong một đợt. Tổng doanh thu khi bán hết $x$ sản phẩm được mô tả bằng: $F(x) = -x^2 + 8000x + 100000$ (đồng). Chi phí (điện, khấu hao máy, lương công nhân vận hành…) để sản xuất một sản phẩm là: $G(x) = \\dfrac{100000}{2x + 5}$ (đồng). Tổng chi phí mua nguyên vật liệu khi chưa chiết khấu là: $H(x) = 50x^2 + 2000x + 50000$ (đồng). Công ty cung cấp nguyên liệu đang chạy chương trình khuyến mại nhân dịp kỷ niệm thành lập công ty nên giảm $5\\%$ tổng tiền mua nguyên liệu này. Doanh nghiệp cần sản xuất bao nhiêu sản phẩm trong dịp này để lợi nhuận thu được là lớn nhất?',
    correctAnswer: '63',
    explanation:
      'Gọi $x$ ($x \\in \\mathbb{N}^*, 1 \\le x \\le 400$) là số sản phẩm cần sản xuất.\n• Tổng doanh thu: $F(x) = -x^2 + 8000x + 100000$.\n• Tổng chi phí vận hành cho $x$ sản phẩm: $x \\cdot G(x) = \\dfrac{100000x}{2x + 5}$.\n• Tổng chi phí mua nguyên vật liệu sau khi giảm giá $5\\%$: $0,95 \\cdot H(x) = 47,5x^2 + 1900x + 47500$.\nHàm lợi nhuận $L(x)$ thu được là:\n$$L(x) = F(x) - x\\cdot G(x) - 0,95H(x) = -48,5x^2 + 6100x + 52500 - \\dfrac{100000x}{2x + 5}$$\nTa có đạo hàm:\n$$L\'(x) = -97x + 6100 - \\dfrac{500000}{(2x + 5)^2}$$\nXét $L\'(x) = 0 \\iff 97x + \\dfrac{500000}{(2x + 5)^2} = 6100$, phương trình có nghiệm duy nhất $x_0 \\approx 62,58$ trên $(0; 400]$.\nVì $x \\in \\mathbb{N}^*$, so sánh giá trị lợi nhuận tại $x = 62$ và $x = 63$:\n• $L(62) \\approx 196\\,203,98$ (đồng)\n• $L(63) \\approx 196\\,211,90$ (đồng)\nVậy doanh nghiệp cần sản xuất $63$ sản phẩm để lợi nhuận thu được là lớn nhất.\nĐáp số: 63.',
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Một bệnh viện cử $3$ bác sĩ và $6$ y tá khẩn cấp đến ba khu dân cư để hỗ trợ cộng đồng thực hiện xét nghiệm axit nucleic. Yêu cầu mỗi khu dân cư có ít nhất một bác sĩ và ít nhất một y tá. Hỏi có tất cả bao nhiêu phương án phân công?',
    correctAnswer: '3240',
    explanation:
      '• Bước 1: Phân công $3$ bác sĩ vào $3$ khu dân cư sao cho mỗi khu có ít nhất $1$ bác sĩ (mỗi khu có đúng $1$ bác sĩ): có $3! = 6$ cách.\n• Bước 2: Phân công $6$ y tá vào $3$ khu dân cư sao cho mỗi khu có ít nhất $1$ y tá. Chia $6$ y tá thành $3$ nhóm theo số lượng:\n  - Trường hợp 1 (Bộ $4 - 1 - 1$): có $\\dfrac{C_6^4 \\cdot C_2^1 \\cdot C_1^1}{2!} \\cdot 3! = 15 \\cdot 6 = 90$ cách.\n  - Trường hợp 2 (Bộ $3 - 2 - 1$): có $C_6^3 \\cdot C_3^2 \\cdot C_1^1 \\cdot 3! = 20 \\cdot 3 \\cdot 6 = 360$ cách.\n  - Trường hợp 3 (Bộ $2 - 2 - 2$): có $\\dfrac{C_6^2 \\cdot C_4^2 \\cdot C_2^2}{3!} \\cdot 3! = 15 \\cdot 6 = 90$ cách.\n  Tổng số cách phân công $6$ y tá là $90 + 360 + 90 = 540$ cách.\n• Bước 3: Theo quy tắc nhân, tổng số phương án phân công là:\n$$6 \\cdot 540 = 3240\\text{ (phương án)}$$\nĐáp số: 3240.',
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Trong hình chóp $S.ABC$, tam giác $ABC$ là tam giác đều, cho $D \\in AC$ và $\\overrightarrow{AD} = \\dfrac{1}{2}\\overrightarrow{DC}$. Gọi các góc phẳng của hai góc nhị diện $[S, AB, C]$, $[S, BC, A]$ lần lượt là $\\alpha, \\beta$. Biết $\\tan\\alpha = 2\\tan\\beta$, $\\tan\\widehat{SBD} = \\dfrac{\\sqrt{6}}{6}$. Khi đó $\\cos\\widehat{SBA}$ bằng bao nhiêu? (làm tròn kết quả đến hàng phần trăm)',
    correctAnswer: '0,87',
    explanation:
      'Gọi $H$ là hình chiếu vuông góc của $S$ lên $(ABC)$, đặt $SH = h > 0$.\n• Khoảng cách từ $H$ đến $AB$ và $BC$ lần lượt là $d_1 = \\dfrac{h}{\\tan\\alpha}$ và $d_2 = \\dfrac{h}{\\tan\\beta}$. Vì $\\tan\\alpha = 2\\tan\\beta$ nên $d_2 = 2d_1$.\n• Mặt khác, do $\\triangle ABC$ đều và $\\overrightarrow{AD} = \\dfrac{1}{2}\\overrightarrow{DC} \\implies DC = 2AD$, nên tia $BD$ chính là tập hợp các điểm trong góc $\\widehat{ABC}$ có khoảng cách đến $BC$ gấp $2$ lần khoảng cách đến $AB$. Suy ra $H$ thuộc tia $BD$.\n• Trong $\\triangle SBD$, vì $SH \\perp BD$ nên $\\tan\\widehat{SBD} = \\dfrac{SH}{BH} = \\dfrac{\\sqrt{6}}{6} \\implies \\cos\\widehat{SBD} = \\dfrac{\\sqrt{6}}{\\sqrt{7}}$.\n• Đặt $AB = BC = CA = 3a \\implies AD = a, DC = 2a$. Trong $\\triangle ABD$ ($\\widehat{BAD} = 60^\\circ$):\n$$BD = \\sqrt{(3a)^2 + a^2 - 2(3a)(a)\\cos 60^\\circ} = a\\sqrt{7} \\implies \\cos\\widehat{ABD} = \\dfrac{(3a)^2 + (a\\sqrt{7})^2 - a^2}{2 \\cdot 3a \\cdot a\\sqrt{7}} = \\dfrac{5}{2\\sqrt{7}}$$\n• Theo định lý ba đường vuông góc (hình chiếu của $SB$ lên $AB$): \n$$\\cos\\widehat{SBA} = \\cos\\widehat{SBD} \\cdot \\cos\\widehat{ABD} = \\dfrac{\\sqrt{6}}{\\sqrt{7}} \\cdot \\dfrac{5}{2\\sqrt{7}} = \\dfrac{5\\sqrt{6}}{14} \\approx 0,87$$\nĐáp số: 0,87.',
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Cho hàm số $f(x) = ax + \\dfrac{x}{x - 1}$ ($x > 1$). Biết $a$ được chọn ngẫu nhiên từ ba số $0, 1, 2$ và $b$ được chọn ngẫu nhiên từ năm số $1, 2, 3, 4, 5$. Xác suất để bất đẳng thức $f(x) > b$ luôn đúng bằng bao nhiêu?',
    correctAnswer: '0,6',
    explanation:
      'Số phần tử của không gian mẫu khi chọn ngẫu nhiên $a \\in \\{0; 1; 2\\}$ và $b \\in \\{1; 2; 3; 4; 5\\}$ là $n(\\Omega) = 3 \\cdot 5 = 15$.\nVới $x > 1$, ta biến đổi:\n$$f(x) = ax + 1 + \\dfrac{1}{x - 1} = a(x - 1) + \\dfrac{1}{x - 1} + a + 1$$\nXét từng trường hợp của $a$:\n• Nếu $a = 0$: $f(x) = 1 + \\dfrac{1}{x - 1} > 1, \\forall x > 1$ và $\\lim_{x \\to +\\infty} f(x) = 1$. Do đó $f(x) > b, \\forall x > 1 \\iff b \\le 1 \\iff b = 1$ (có $1$ cặp).\n• Nếu $a = 1$: theo bất đẳng thức AM-GM, $f(x) = (x - 1) + \\dfrac{1}{x - 1} + 2 \\ge 2 + 2 = 4$ (đạt tại $x = 2$). Để $f(x) > b, \\forall x > 1$ thì $b < 4 \\iff b \\in \\{1; 2; 3\\}$ (có $3$ cặp).\n• Nếu $a = 2$: theo bất đẳng thức AM-GM, $f(x) = 2(x - 1) + \\dfrac{1}{x - 1} + 3 \\ge 2\\sqrt{2} + 3 \\approx 5,83$. Để $f(x) > b, \\forall x > 1$ thì $b < 3 + 2\\sqrt{2} \\iff b \\in \\{1; 2; 3; 4; 5\\}$ (có $5$ cặp).\nTổng số cặp $(a; b)$ thỏa mãn là $1 + 3 + 5 = 9$.\nVậy xác suất cần tìm là:\n$$P = \\dfrac{9}{15} = \\dfrac{3}{5} = 0,6$$\nĐáp số: 0,6.',
  },
];
