import { Question } from '../types';

export const QUESTIONS_DE04: Question[] = [
  // ============================================================================
  // PHẦN I: CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (CÂU 1 - CÂU 12)
  // ============================================================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Giá trị nhỏ nhất của hàm số $y = (x - 3)^2 e^x$ trên đoạn $[0; 2]$ bằng',
    options: [
      { key: 'A', text: '$9$' },
      { key: 'B', text: '$e^2$' },
      { key: 'C', text: '$0$' },
      { key: 'D', text: '$4e$' },
    ],
    correctAnswer: 'B',
    explanation: `Hàm số $y = (x - 3)^2 e^x$ liên tục trên đoạn $[0; 2]$.
Ta có đạo hàm:
$$y' = 2(x - 3)e^x + (x - 3)^2 e^x = (x - 3)(x - 1)e^x$$
Trên khoảng $(0; 2)$, cho $y' = 0 \\iff x = 1$ (vì $x = 3 \\notin (0; 2)$ và $e^x > 0$).
Tính giá trị của hàm số tại các điểm $x = 0, x = 1, x = 2$:
- $y(0) = (0 - 3)^2 e^0 = 9$
- $y(1) = (1 - 3)^2 e^1 = 4e \\approx 10,87$
- $y(2) = (2 - 3)^2 e^2 = e^2 \\approx 7,39$
Vì $e^2 < 9 < 4e$ nên giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ là $\\min_{[0; 2]} y = y(2) = e^2$.
Vậy chọn đáp án B.`,
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Bất phương trình $1 + \\log_2(x - 2) > \\log_2(x^2 - 3x + 2)$ có tập nghiệm là',
    options: [
      { key: 'A', text: '$S = (2; 3)$' },
      { key: 'B', text: '$S = (3; +\\infty)$' },
      { key: 'C', text: '$S = (2; +\\infty)$' },
      { key: 'D', text: '$S = (1; 3)$' },
    ],
    correctAnswer: 'A',
    explanation: `Điều kiện xác định:
$$\\begin{cases} x - 2 > 0 \\\\ x^2 - 3x + 2 > 0 \\end{cases} \\iff \\begin{cases} x > 2 \\\\ (x - 1)(x - 2) > 0 \\end{cases} \\iff x > 2$$
Với $x > 2$, bất phương trình tương đương với:
$$\\log_2[2(x - 2)] > \\log_2[(x - 1)(x - 2)] \\iff 2(x - 2) > (x - 1)(x - 2)$$
Chia hai vế cho $x - 2 > 0$, ta được:
$$2 > x - 1 \\iff x < 3$$
Kết hợp với điều kiện $x > 2$, tập nghiệm của bất phương trình là $S = (2; 3)$.
Vậy chọn đáp án A.`,
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      "Cho hàm số $y = f(x)$ xác định, có đạo hàm trên $\\mathbb{R}$ và $f'(x)$ có đồ thị như hình vẽ. Mệnh đề nào sau đây đúng?",
    diagramType: 'DE04_GRAPH_P1_Q3',
    options: [
      { key: 'A', text: 'Hàm số $y = f(x)$ nghịch biến trên khoảng $(-3; -2)$' },
      { key: 'B', text: 'Hàm số $y = f(x)$ đồng biến trên khoảng $\\left(-\\dfrac{1}{2}; 0\\right)$' },
      { key: 'C', text: 'Hàm số $y = f(x)$ nghịch biến trên khoảng $\\left(-\\dfrac{5}{2}; -2\\right)$' },
      { key: 'D', text: 'Hàm số $y = f(x)$ nghịch biến trên khoảng $(-\\infty; -3)$' },
    ],
    correctAnswer: 'D',
    explanation: `Dựa vào đồ thị của đạo hàm $y = f'(x)$:
- Trên khoảng $(-\\infty; -3)$, đồ thị của $f'(x)$ nằm hoàn toàn phía dưới trục hoành $Ox$ nên $f'(x) < 0, \\forall x \\in (-\\infty; -3)$.
- Trên khoảng $(-3; -2)$, đồ thị của $f'(x)$ nằm phía trên trục hoành nên $f'(x) > 0$.
- Trên khoảng $(-2; 0)$, đồ thị của $f'(x)$ nằm phía dưới trục hoành nên $f'(x) < 0$.
Do đó hàm số $y = f(x)$ nghịch biến trên khoảng $(-\\infty; -3)$.
Vậy chọn đáp án D.`,
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $y = f(x)$ có bảng biến thiên sau. Giá trị cực đại của hàm số $y = f(x)$ là:',
    diagramType: 'DE04_BBT_P1_Q4',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$-3$' },
      { key: 'C', text: '$5$' },
      { key: 'D', text: '$0$' },
    ],
    correctAnswer: 'D',
    explanation: `Từ bảng biến thiên của hàm số $y = f(x)$, ta thấy tại điểm $x = 1$ đạo hàm $y'$ đổi dấu từ dương ($+$) sang âm ($-$), nên hàm số đạt cực đại tại $x_{\\text{CĐ}} = 1$ và giá trị cực đại của hàm số là $y_{\\text{CĐ}} = f(1) = 0$.
Vậy chọn đáp án D.`,
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText: 'Đường cong trong hình bên là đồ thị của hàm số nào dưới đây?',
    diagramType: 'DE04_GRAPH_P1_Q5',
    options: [
      { key: 'A', text: '$y = x^3 + x^2 - 1$' },
      { key: 'B', text: '$y = x^3 - 3x + 1$' },
      { key: 'C', text: '$y = -x^2 + x - 1$' },
      { key: 'D', text: '$y = -x^3 + 3x - 1$' },
    ],
    correctAnswer: 'D',
    explanation: `Quan sát đồ thị hàm số:
- Đây là đồ thị của hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ có nhánh cuối đi xuống khi $x \\to +\\infty$, suy ra $a < 0$ (loại A, B, C).
- Kiểm tra hàm số $y = -x^3 + 3x - 1$: $y' = -3x^2 + 3 = 0 \\iff x = \\pm 1$; đồ thị đi qua $(0; -1)$, đạt cực đại tại $(1; 1)$ và đạt cực tiểu tại $(-1; -3)$, hoàn toàn trùng khớp với hình vẽ.
Vậy chọn đáp án D.`,
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác đều cạnh $a$. Tính góc tạo bởi $B'C$ và mặt phẳng $(ABB'A')$ biết $BB' = \\dfrac{a\\sqrt{2}}{2}$.",
    options: [
      { key: 'A', text: '$45^\\circ$' },
      { key: 'B', text: '$60^\\circ$' },
      { key: 'C', text: '$90^\\circ$' },
      { key: 'D', text: '$30^\\circ$' },
    ],
    correctAnswer: 'A',
    explanation: `Gọi $M$ là trung điểm của cạnh $AB$.
Vì $\\triangle ABC$ là tam giác đều cạnh $a$ nên $CM \\perp AB$ và $CM = \\dfrac{a\\sqrt{3}}{2}$.
Do lăng trụ đứng nên $BB' \\perp (ABC) \\implies BB' \\perp CM$. Kết hợp $CM \\perp AB \\implies CM \\perp (ABB'A')$.
Do đó $B'M$ là hình chiếu vuông góc của $B'C$ lên mặt phẳng $(ABB'A')$, suy ra góc giữa $B'C$ và mặt phẳng $(ABB'A')$ là $\\widehat{CB'M}$.
Trong $\\triangle B'BM$ vuông tại $B$:
$$B'M = \\sqrt{BM^2 + BB'^2} = \\sqrt{\\left(\\frac{a}{2}\\right)^2 + \\left(\\frac{a\\sqrt{2}}{2}\\right)^2} = \\frac{a\\sqrt{3}}{2}$$
Trong $\\triangle CB'M$ vuông tại $M$:
$$\\tan\\widehat{CB'M} = \\frac{CM}{B'M} = \\frac{\\frac{a\\sqrt{3}}{2}}{\\frac{a\\sqrt{3}}{2}} = 1 \\implies \\widehat{CB'M} = 45^\\circ$$
Vậy chọn đáp án A.`,
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Biết $\\sin^2\\alpha = \\cos\\alpha - 1$, khi đó $\\sin\\left(\\alpha + \\dfrac{3\\pi}{2}\\right) =$',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$-1$' },
      { key: 'C', text: '$2$' },
      { key: 'D', text: '$-\\dfrac{1}{2}$' },
    ],
    correctAnswer: 'B',
    explanation: `Ta có:
$$\\sin^2\\alpha = \\cos\\alpha - 1 \\iff 1 - \\cos^2\\alpha = \\cos\\alpha - 1 \\iff \\cos^2\\alpha + \\cos\\alpha - 2 = 0 \\iff \\left[\\begin{array}{l} \\cos\\alpha = 1 \\text{ (nhận)} \\\\ \\cos\\alpha = -2 \\text{ (loại)} \\end{array}\\right.$$
Khi đó:
$$\\sin\\left(\\alpha + \\frac{3\\pi}{2}\\right) = -\\cos\\alpha = -1$$
Vậy chọn đáp án B.`,
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      "Cho hình lập phương $ABCD.A'B'C'D'$. Gọi $O$ là tâm của hình lập phương. Khẳng định nào sau đây là đúng?",
    options: [
      { key: 'A', text: "$\\overrightarrow{AO} = \\dfrac{1}{3}(\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'})$" },
      { key: 'B', text: "$\\overrightarrow{AO} = \\dfrac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'})$" },
      { key: 'C', text: "$\\overrightarrow{AO} = \\dfrac{2}{3}(\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'})$" },
      { key: 'D', text: "$\\overrightarrow{AO} = \\dfrac{1}{4}(\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'})$" },
    ],
    correctAnswer: 'B',
    explanation: `Theo quy tắc hình hộp, ta có:
$$\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$$
Vì $O$ là tâm của hình lập phương nên $O$ là trung điểm của đường chéo $AC'$, suy ra:
$$\\overrightarrow{AO} = \\frac{1}{2}\\overrightarrow{AC'} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'})$$
Vậy chọn đáp án B.`,
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Đường tiệm cận ngang của đồ thị hàm số $y = \\dfrac{2x - 4}{x - 1}$ có phương trình là',
    options: [
      { key: 'A', text: '$x = 1$' },
      { key: 'B', text: '$y = 2$' },
      { key: 'C', text: '$x = 2$' },
      { key: 'D', text: '$y = 4$' },
    ],
    correctAnswer: 'B',
    explanation: `Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.
Ta có:
$$\\lim_{x \\to \\pm\\infty} y = \\lim_{x \\to \\pm\\infty} \\frac{2x - 4}{x - 1} = 2$$
Vậy đường tiệm cận ngang của đồ thị hàm số có phương trình là $y = 2$. Chọn đáp án B.`,
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Hệ số của hạng tử chứa $x^2$ trong khai triển của nhị thức $\\left(x^2 - \\dfrac{1}{2x}\\right)^4$ là',
    options: [
      { key: 'A', text: '$-\\dfrac{3}{2}$' },
      { key: 'B', text: '$\\dfrac{3}{2}$' },
      { key: 'C', text: '$-\\dfrac{1}{2}$' },
      { key: 'D', text: '$\\dfrac{1}{2}$' },
    ],
    correctAnswer: 'B',
    explanation: `Số hạng tổng quát trong khai triển của nhị thức $\\left(x^2 - \\dfrac{1}{2x}\\right)^4$ là:
$$T_{k+1} = C_4^k (x^2)^{4-k} \\left(-\\frac{1}{2x}\\right)^k = C_4^k \\left(-\\frac{1}{2}\\right)^k x^{8 - 3k} \\quad (0 \\le k \\le 4, k \\in \\mathbb{N})$$
Số hạng chứa $x^2$ ứng với $8 - 3k = 2 \\iff k = 2$.
Hệ số của hạng tử chứa $x^2$ là:
$$C_4^2 \\left(-\\frac{1}{2}\\right)^2 = 6 \\cdot \\frac{1}{4} = \\frac{3}{2}$$
Vậy chọn đáp án B.`,
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Quỹ đạo của sao Hỏa là elip có bán trục lớn $227,9$ triệu $\\text{km}$, bán trục nhỏ bằng $226,9$ triệu $\\text{km}$ và quay quanh Mặt Trời một vòng hết $687$ ngày. Khoảng cách xa nhất giữa sao Hỏa và Mặt Trời gần số nào sau đây nhất?',
    options: [
      { key: 'A', text: '$21,32604$' },
      { key: 'B', text: '$226,9$' },
      { key: 'C', text: '$206,57396$' },
      { key: 'D', text: '$249,22604$' },
    ],
    correctAnswer: 'D',
    explanation: `Quỹ đạo elip của sao Hỏa nhận Mặt Trời làm một tiêu điểm, có bán trục lớn $a = 227,9$ (triệu $\\text{km}$) và bán trục nhỏ $b = 226,9$ (triệu $\\text{km}$).
Nửa tiêu cự của elip là:
$$c = \\sqrt{a^2 - b^2} = \\sqrt{227,9^2 - 226,9^2} = \\sqrt{454,8} \\approx 21,32604 \\text{ (triệu km)}$$
Khoảng cách xa nhất giữa sao Hỏa và Mặt Trời là:
$$d_{\\max} = a + c \\approx 227,9 + 21,32604 = 249,22604 \\text{ (triệu km)}$$
Vậy chọn đáp án D.`,
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $f(x) = \\begin{cases} x^2 + 4x, & x \\ge 0 \\\\ -x^2 + 4x, & x < 0 \\end{cases}$ đồng thời $a + b > 0, b + c > 0, c + a > 0$. Khi đó giá trị của $f(a) + f(b) + f(c)$:',
    options: [
      { key: 'A', text: 'Luôn dương' },
      { key: 'B', text: 'Luôn âm' },
      { key: 'C', text: 'Luôn bằng $0$' },
      { key: 'D', text: 'Không xác định được' },
    ],
    correctAnswer: 'A',
    explanation: `Ta viết lại hàm số dưới dạng $f(x) = x|x| + 4x, \\forall x \\in \\mathbb{R}$.
- Ta có $f(-x) = (-x)|-x| + 4(-x) = -f(x)$, nên $f(x)$ là hàm số lẻ trên $\\mathbb{R}$.
- Mặt khác, $f'(x) = 2|x| + 4 > 0, \\forall x \\neq 0$ và hàm số liên tục tại $x = 0$, nên $f(x)$ đồng biến trên $\\mathbb{R}$.
Vì $a + b > 0, b + c > 0, c + a > 0$ nên trong ba số $a, b, c$ có nhiều nhất một số âm:
- Nếu $a, b, c \\ge 0$ (và có ít nhất hai số dương) thì $f(a), f(b), f(c) \\ge 0$ (ít nhất hai giá trị dương) nên $f(a) + f(b) + f(c) > 0$.
- Nếu có một số âm, giả sử $c < 0$, thì $a > -c > 0$ và $b > 0$. Do $f$ đồng biến và là hàm lẻ nên $f(a) > f(-c) = -f(c) \\iff f(a) + f(c) > 0$, kết hợp $f(b) > f(0) = 0$ suy ra $f(a) + f(b) + f(c) > 0$.
Vậy $f(a) + f(b) + f(c)$ luôn dương. Chọn đáp án A.`,
  },

  // ============================================================================
  // PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG SAI (CÂU 1 - CÂU 4, ID 13 - 16)
  // ============================================================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Nhà ông A cần làm một bể chứa nước có dạng khối hộp chữ nhật không nắp, có đáy là hình chữ nhật và chiều dài gấp ba lần chiều rộng, khối hộp tương ứng có thể tích bằng $1152\\text{ dm}^3$. Giả sử bề dày của thành bể và đáy bể là không đáng kể. Giá thuê công nhân để làm bể là $400\\,000\\text{ đồng/m}^2$. Gọi $x$ là chiều rộng của đáy bể ($x$ là số dương và có đơn vị là $\\text{dm}$). Các khẳng định sau đúng hay sai?',
    statements: [
      {
        key: 'a',
        text: 'Chi phí thấp nhất mà ông A trả cho công nhân làm bể nước theo yêu cầu là $3\\,072\\,000$ đồng.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Chiều cao của bể nước là $\\dfrac{384}{x^2}\\text{ (dm)}$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Diện tích xung quanh của bể chứa nước là $\\dfrac{3072}{x}\\text{ (dm}^2)$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Tổng diện tích cần làm của bể chứa nước là $\\dfrac{3072}{x} + 6x^2\\text{ (dm}^2)$.',
        correct: false,
      },
    ],
    explanation: `Chiều rộng của đáy bể là $x\\text{ (dm)}$ ($x > 0$), suy ra chiều dài của đáy bể là $3x\\text{ (dm)}$ và diện tích đáy bể là $S_{\\text{đáy}} = 3x^2\\text{ (dm}^2)$.
- **Ý b) Đúng**: Gọi $h\\text{ (dm)}$ là chiều cao của bể. Từ $V = 3x^2 h = 1152 \\implies h = \\dfrac{1152}{3x^2} = \\dfrac{384}{x^2}\\text{ (dm)}$.
- **Ý c) Đúng**: Diện tích xung quanh của bể là:
  $$S_{\\text{xq}} = 2(x + 3x)h = 8x \\cdot \\frac{384}{x^2} = \\frac{3072}{x}\\text{ (dm}^2)$$
- **Ý d) Sai**: Vì bể chứa nước **không có nắp** nên tổng diện tích cần làm chỉ gồm diện tích xung quanh và $1$ mặt đáy:
  $$S = S_{\\text{xq}} + S_{\\text{đáy}} = \\frac{3072}{x} + 3x^2\\text{ (dm}^2) \\neq \\frac{3072}{x} + 6x^2$$
- **Ý a) Sai**: Áp dụng bất đẳng thức AM-GM cho $3$ số dương:
  $$S = \\frac{1536}{x} + \\frac{1536}{x} + 3x^2 \\ge 3\\sqrt[3]{\\frac{1536}{x} \\cdot \\frac{1536}{x} \\cdot 3x^2} = 576\\text{ (dm}^2) = 5,76\\text{ (m}^2)$$
  Dấu "$=$" xảy ra khi $\\dfrac{1536}{x} = 3x^2 \\iff x = 8\\text{ (dm)}$.
  Chi phí thấp nhất là $5,76 \\times 400\\,000 = 2\\,304\\,000\\text{ đồng} \\neq 3\\,072\\,000\\text{ đồng}$.`,
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hình nón có đỉnh $P$, tâm đường tròn đáy là $O$, $AB$ là đường kính của đáy, $\\widehat{APB} = 120^\\circ$, $PA = 2$. Điểm $C$ nằm trên đường tròn đáy và góc nhị diện $[P, AC, O]$ bằng $45^\\circ$. Khi đó:',
    statements: [
      {
        key: 'a',
        text: 'Thể tích của hình nón bằng $\\pi$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Diện tích xung quanh của hình nón bằng $4\\sqrt{3}\\pi$.',
        correct: false,
      },
      {
        key: 'c',
        text: '$AC = 2\\sqrt{2}$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Diện tích tam giác $PAC$ bằng $\\sqrt{3}$.',
        correct: false,
      },
    ],
    explanation: `Trong $\\triangle PAB$ cân tại $P$ có $PA = PB = l = 2$ và $\\widehat{APB} = 120^\\circ$:
- Chiều cao hình nón: $h = PO = PA\\cos 60^\\circ = 1$.
- Bán kính đáy: $r = OA = PA\\sin 60^\\circ = \\sqrt{3}$.
- **Ý a) Đúng**: Thể tích hình nón là $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi (\\sqrt{3})^2 \\cdot 1 = \\pi$.
- **Ý b) Sai**: Diện tích xung quanh của hình nón là $S_{\\text{xq}} = \\pi r l = \\pi \\cdot \\sqrt{3} \\cdot 2 = 2\\sqrt{3}\\pi \\neq 4\\sqrt{3}\\pi$.
- **Ý c) Đúng**: Gọi $M$ là trung điểm của $AC$. Vì $OM \\perp AC$ và $PM \\perp AC$ nên góc phẳng nhị diện của $[P, AC, O]$ là $\\widehat{PMO} = 45^\\circ$.
  Tam giác $POM$ vuông cân tại $O$ nên $OM = PO = 1$ và $PM = \\sqrt{2}$.
  Trong $\\triangle OAM$ vuông tại $M$: $AM = \\sqrt{OA^2 - OM^2} = \\sqrt{3 - 1} = \\sqrt{2} \\implies AC = 2AM = 2\\sqrt{2}$.
- **Ý d) Sai**: Diện tích $\\triangle PAC$ là $S_{\\triangle PAC} = \\dfrac{1}{2} \\cdot AC \\cdot PM = \\dfrac{1}{2} \\cdot 2\\sqrt{2} \\cdot \\sqrt{2} = 2 \\neq \\sqrt{3}$.`,
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hàm số $y = f(x) = \\dfrac{ax^2 + bx + c}{x + d}$ có đồ thị là đường cong như hình vẽ dưới đây. Biết đường tiệm cận xiên của đồ thị hàm số đi qua $2$ điểm $(0; 1)$ và $(1; 0)$. Xét tính đúng sai của các mệnh đề sau:',
    diagramType: 'DE04_GRAPH_P2_Q3',
    statements: [
      {
        key: 'a',
        text: 'Hàm số đồng biến trên khoảng $(-4; 0)$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Tập xác định của hàm số là $\\mathbb{R} \\setminus \\{2\\}$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Ta có $a + b + c + d = -2$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Tiếp tuyến tại điểm $M$ thuộc đồ thị hàm số cắt các đường tiệm cận lần lượt tại $A$ và $B$. Khi đó $MA \\cdot MB$ đạt giá trị nhỏ nhất là $8\\sqrt{2} - 8$.',
        correct: true,
      },
    ],
    explanation: `Từ đồ thị hàm số:
- Tiệm cận đứng là $x = -2 \\implies d = 2$, tập xác định $D = \\mathbb{R} \\setminus \\{-2\\}$.
- Tiệm cận xiên đi qua $(0; 1)$ và $(1; 0)$ nên có phương trình $y = -x + 1$.
- Đồ thị đi qua điểm cực đại $(0; -1)$ nên $f(x) = -x + 1 - \\dfrac{4}{x + 2} = \\dfrac{-x^2 - x - 2}{x + 2}$, suy ra $a = -1, b = -1, c = -2, d = 2$.
- **Ý a) Sai**: Hàm số bị gián đoạn tại $x = -2 \\in (-4; 0)$ nên không đồng biến trên khoảng $(-4; 0)$ (chỉ đồng biến trên từng khoảng $(-4; -2)$ và $(-2; 0)$).
- **Ý b) Sai**: Tập xác định của hàm số là $\\mathbb{R} \\setminus \\{-2\\}$.
- **Ý c) Đúng**: Ta có $a + b + c + d = (-1) + (-1) + (-2) + 2 = -2$.
- **Ý d) Đúng**: Đặt $t = x_0 + 2 \\neq 0$ với $M(x_0; y_0)$ thuộc đồ thị. Tiếp tuyến tại $M$ cắt tiệm cận đứng $x = -2$ tại $A$ và cắt tiệm cận xiên $y = -x + 1$ tại $B$, trong đó $M$ là trung điểm của $AB$ và $\\overrightarrow{MB} = \\left(t; -t + \\dfrac{4}{t}\\right)$.
  Khi đó:
  $$MA \\cdot MB = MB^2 = t^2 + \\left(-t + \\frac{4}{t}\\right)^2 = 2t^2 + \\frac{16}{t^2} - 8 \\ge 2\\sqrt{2t^2 \\cdot \\frac{16}{t^2}} - 8 = 8\\sqrt{2} - 8$$`,
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Trong hoạt động liên hoan chào mừng Ngày Nhà giáo, một số cán bộ, giáo viên, nhân viên tham gia cuộc thi trò chơi do công đoàn nhà trường tổ chức. Trong đó, thể lệ của trò chơi ném bóng vào rổ tại chỗ như sau:\n① Mỗi người được ném bóng $7$ lần, mỗi lần ném thành công được tính $1$ điểm;\n② Nếu ném thành công liên tiếp $2$ lần thì được cộng $0,5$ điểm; ném thành công liên tiếp $3$ lần thì được cộng $1$ điểm; ném thành công liên tiếp $4$ lần thì được cộng $1,5$ điểm; cứ như vậy, ném thành công liên tiếp $7$ lần thì được cộng $3$ điểm.\nGiả sử xác suất ném bóng thành công trong mỗi lần của một giáo viên là $\\dfrac{2}{3}$, và các lần ném độc lập với nhau.',
    statements: [
      {
        key: 'a',
        text: 'Xác suất giáo viên đó ném thành công đúng $3$ lần và $3$ lần đó liên tiếp là $\\dfrac{5 \\times 2^3}{3^7}$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Xác suất giáo viên đó ném thành công đúng $3$ lần là $\\dfrac{35 \\times 2^3}{3^7}$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Xác suất giáo viên đó đạt đúng $4$ điểm trong cuộc thi là $\\dfrac{5 \\times 2^3}{3^7}$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Xác suất giáo viên đó đạt đúng $5$ điểm trong cuộc thi là $\\dfrac{2^5}{3^5}$.',
        correct: true,
      },
    ],
    explanation: `- **Ý a) Đúng**: Có $5$ vị trí cho chuỗi $3$ lần ném thành công liên tiếp trong $7$ lần ném: $(1,2,3), (2,3,4), (3,4,5), (4,5,6), (5,6,7)$. Xác suất là $5 \\cdot \\left(\\dfrac{2}{3}\\right)^3 \\left(\\dfrac{1}{3}\\right)^4 = \\dfrac{5 \\times 2^3}{3^7}$.
- **Ý b) Đúng**: Xác suất ném thành công đúng $3$ lần trong $7$ lần là $C_7^3 \\left(\\dfrac{2}{3}\\right)^3 \\left(\\dfrac{1}{3}\\right)^4 = \\dfrac{35 \\times 2^3}{3^7}$.
- **Ý c) Sai**: Đạt đúng $4$ điểm gồm $2$ trường hợp xung khắc:
  + Ném trúng $3$ lần liên tiếp ($3 + 1 = 4$ điểm): xác suất $\\dfrac{5 \\times 2^3}{3^7}$;
  + Ném trúng $4$ lần nhưng không có $2$ lần nào liên tiếp (chuỗi \`T-S-T-S-T-S-T\`, được $4 + 0 = 4$ điểm): xác suất $\\dfrac{2^4}{3^7}$.
  Vậy xác suất đạt đúng $4$ điểm là $\\dfrac{5 \\times 2^3 + 2^4}{3^7} = \\dfrac{7 \\times 2^3}{3^7} \\neq \\dfrac{5 \\times 2^3}{3^7}$.
- **Ý d) Đúng**: Đạt đúng $5$ điểm chỉ xảy ra khi ném trúng đúng $4$ lần ($4$ điểm cơ bản) và được cộng $1$ điểm thưởng:
  + Có $1$ chuỗi $3$ lần trúng liên tiếp và $1$ lần trúng rời nhau: có $A_4^2 = 12$ cách;
  + Có $2$ chuỗi $2$ lần trúng liên tiếp rời nhau ($0,5 + 0,5 = 1$ điểm thưởng): có $C_4^2 = 6$ cách.
  Tổng cộng có $12 + 6 = 18$ kết quả thuận lợi, xác suất là:
  $$P = 18 \\cdot \\left(\\frac{2}{3}\\right)^4 \\left(\\frac{1}{3}\\right)^3 = \\frac{18 \\times 2^4}{3^7} = \\frac{2^5}{3^5}$$`,
  },

  // ============================================================================
  // PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (CÂU 1 - CÂU 6, ID 17 - 22)
  // ============================================================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Cho $x, y$ thỏa mãn $\\log_2\\left[4\\cos^2(xy) + \\dfrac{1}{4\\cos^2(xy)}\\right] = -y^2 + 4y - 3$. Khi đó $y\\cos 4x = ?$',
    correctAnswer: '-1',
    explanation: `Điều kiện: $\\cos(xy) \\neq 0$.
Áp dụng bất đẳng thức AM-GM cho hai số dương:
$$4\\cos^2(xy) + \\frac{1}{4\\cos^2(xy)} \\ge 2 \\implies \\text{VT} = \\log_2\\left[4\\cos^2(xy) + \\frac{1}{4\\cos^2(xy)}\\right] \\ge \\log_2 2 = 1$$
Mặt khác:
$$\\text{VP} = -y^2 + 4y - 3 = 1 - (y - 2)^2 \\le 1$$
Đẳng thức xảy ra khi và chỉ khi:
$$\\begin{cases} 4\\cos^2(xy) = 1 \\\\ y = 2 \\end{cases} \\iff \\begin{cases} \\cos^2(2x) = \\dfrac{1}{4} \\\\ y = 2 \\end{cases}$$
Khi đó $\\cos 4x = 2\\cos^2(2x) - 1 = 2\\cdot\\dfrac{1}{4} - 1 = -\\dfrac{1}{2}$, suy ra:
$$y\\cos 4x = 2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$$
Đáp số: $-1$.`,
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Có $5$ quyển sách khác nhau, trong đó có $2$ quyển Ngữ văn, $2$ quyển Toán, $1$ quyển Vật lí. Xếp ngẫu nhiên chúng thành một hàng trên cùng một tầng giá sách. Số cách sao cho các sách cùng môn đều không kề nhau là?',
    correctAnswer: '48',
    explanation: `Số cách xếp $5$ quyển sách bất kỳ thành một hàng là $5! = 120$ (cách).
- Số cách xếp mà $2$ quyển Ngữ văn đứng kề nhau là $2! \\cdot 4! = 48$ (cách).
- Số cách xếp mà $2$ quyển Toán đứng kề nhau là $2! \\cdot 4! = 48$ (cách).
- Số cách xếp mà cả $2$ quyển Ngữ văn kề nhau và $2$ quyển Toán kề nhau là $2! \\cdot 2! \\cdot 3! = 24$ (cách).
Theo nguyên lý bù trừ, số cách xếp sao cho các sách cùng môn đều không kề nhau là:
$$120 - (48 + 48 - 24) = 48 \\text{ (cách)}$$
Đáp số: $48$.`,
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Cho cấp số cộng $(a_n)$ thỏa mãn $a_1^2 + a_{10}^2 = 10$. Khi đó giá trị lớn nhất của $S = a_{10} + a_{11} + \\dots + a_{19}$ là?',
    correctAnswer: '50',
    explanation: `Gọi $d$ là công sai của cấp số cộng $(a_n)$, ta có $9d = a_{10} - a_1$.
Tổng $S$ gồm $10$ số hạng từ $a_{10}$ đến $a_{19}$:
$$S = \\frac{10(a_{10} + a_{19})}{2} = 5(2a_{10} + 9d) = 5\\left[2a_{10} + (a_{10} - a_1)\\right] = 5(3a_{10} - a_1)$$
Áp dụng bất đẳng thức Bunyakovsky (Cauchy-Schwarz):
$$3a_{10} - a_1 \\le \\sqrt{(3^2 + (-1)^2)(a_{10}^2 + a_1^2)} = \\sqrt{10 \\cdot 10} = 10$$
Suy ra $S = 5(3a_{10} - a_1) \\le 5 \\cdot 10 = 50$.
Dấu "$=$" xảy ra khi $a_1 = -1$ và $a_{10} = 3$.
Đáp số: $50$.`,
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Như hình vẽ, trong lăng trụ đứng tam giác $ABC-A_1B_1C_1$, biết $AB = 2$, $BC = \\sqrt{3}$, $AC = 1$, $AA_1 = 3$. Điểm $F$ di động trên cạnh $AA_1$. Khi $BF + FC_1$ đạt giá trị nhỏ nhất thì diện tích tam giác $BFC_1$ bằng bao nhiêu? (Làm tròn kết quả đến hàng phần trăm)',
    diagramType: 'DE04_PRISM_P3_Q4',
    correctAnswer: '1,94',
    explanation: `Trải phẳng hai mặt bên $(ABB_1A_1)$ và $(ACC_1A_1)$ quanh cạnh $AA_1$, tổng $BF + FC_1$ nhỏ nhất khi $B, F, C_1$ thẳng hàng.
Khi đó $\\dfrac{AF}{A_1F} = \\dfrac{AB}{A_1C_1} = 2$, kết hợp $AF + A_1F = AA_1 = 3 \\implies AF = 2, A_1F = 1$.
Tính độ dài ba cạnh của $\\triangle BFC_1$:
- $BF = \\sqrt{AB^2 + AF^2} = \\sqrt{2^2 + 2^2} = 2\\sqrt{2}$
- $FC_1 = \\sqrt{A_1C_1^2 + A_1F^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$
- $BC_1 = \\sqrt{BC^2 + CC_1^2} = \\sqrt{(\\sqrt{3})^2 + 3^2} = 2\\sqrt{3}$
Áp dụng định lý cosin trong $\\triangle BFC_1$:
$$\\cos\\widehat{BFC_1} = \\frac{BF^2 + FC_1^2 - BC_1^2}{2\\cdot BF \\cdot FC_1} = \\frac{8 + 2 - 12}{8} = -\\frac{1}{4} \\implies \\sin\\widehat{BFC_1} = \\frac{\\sqrt{15}}{4}$$
Diện tích tam giác $BFC_1$ là:
$$S_{\\triangle BFC_1} = \\frac{1}{2} \\cdot BF \\cdot FC_1 \\cdot \\sin\\widehat{BFC_1} = \\frac{1}{2} \\cdot 2\\sqrt{2} \\cdot \\sqrt{2} \\cdot \\frac{\\sqrt{15}}{4} = \\frac{\\sqrt{15}}{2} \\approx 1,94$$
Đáp số: $1,94$.`,
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Từ sáu đỉnh của lục giác đều $ABCDEF$, chọn ngẫu nhiên $3$ đỉnh và lập tam giác có ba đỉnh là ba điểm đã chọn. Xác suất để tam giác đó là tam giác vuông bằng $\\dfrac{q}{p}$. Tính $p + q$. (Biết $p$ và $q$ là hai số tự nhiên nguyên tố cùng nhau.)',
    diagramType: 'DE04_HEXAGON_P3_Q5',
    correctAnswer: '8',
    explanation: `Số tam giác tạo thành từ $6$ đỉnh của lục giác đều $ABCDEF$ là $n(\\Omega) = C_6^3 = 20$.
Lục giác đều $ABCDEF$ nội tiếp đường tròn có $3$ đường kính là $AD, BE, CF$.
Mỗi đường kính tạo với $4$ đỉnh còn lại đúng $4$ tam giác vuông, nên tổng số tam giác vuông là $3 \\times 4 = 12$.
Xác suất để tam giác được chọn là tam giác vuông là:
$$P = \\frac{12}{20} = \\frac{3}{5} = \\frac{q}{p} \\implies q = 3, \\ p = 5$$
Vậy $p + q = 5 + 3 = 8$.
Đáp số: $8$.`,
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Từ một tấm bìa mỏng hình lục giác đều cạnh $4\\sqrt{3}\\text{ dm}$, bạn An cắt bỏ sáu tam giác cân bằng nhau có cạnh đáy là cạnh của hình lục giác đều ban đầu và đỉnh là đỉnh của một hình lục giác đều nhỏ phía trong rồi gấp lên, ghép lại tạo thành một khối chóp lục giác đều (hình vẽ). Thể tích của khối chóp có giá trị lớn nhất bằng $\\dfrac{a\\sqrt{b}}{c}\\text{ dm}^3$, với $\\dfrac{a}{c}$ là phân số tối giản và $b < 20$. Tính $a + 2b + 3c$.',
    diagramType: 'DE04_HEXAGON_NET_P3_Q6',
    correctAnswer: '1921',
    explanation: `Gọi $x\\text{ (dm)}$ là độ dài cạnh của hình lục giác đều nhỏ làm đáy chóp ($0 < x < 4$).
Khoảng cách từ tâm $O$ đến mỗi đỉnh của tấm bìa lục giác đều lớn là $R_0 = 4\\sqrt{3}\\text{ (dm)}$, và khoảng cách từ tâm $O$ đến trung điểm mỗi cạnh của lục giác đều nhỏ là $r = \\dfrac{x\\sqrt{3}}{2}\\text{ (dm)}$.
Độ dài trung đoạn của hình chóp lục giác đều sau khi gấp lên là:
$$d = R_0 - r = 4\\sqrt{3} - \\frac{x\\sqrt{3}}{2} = \\frac{\\sqrt{3}(8 - x)}{2}$$
Chiều cao của khối chóp lục giác đều là:
$$h = \\sqrt{d^2 - r^2} = \\sqrt{\\frac{3(8 - x)^2}{4} - \\frac{3x^2}{4}} = 2\\sqrt{3(4 - x)}$$
Diện tích đáy lục giác đều cạnh $x$ là $S_{\\text{đáy}} = \\dfrac{3\\sqrt{3}}{2}x^2$.
Thể tích khối chóp lục giác đều là:
$$V(x) = \\frac{1}{3} S_{\\text{đáy}} \\cdot h = \\frac{1}{3} \\cdot \\frac{3\\sqrt{3}}{2}x^2 \\cdot 2\\sqrt{3(4 - x)} = 3x^2\\sqrt{4 - x} \\quad (0 < x < 4)$$
Ta có đạo hàm:
$$V'(x) = 3\\left(2x\\sqrt{4 - x} - \\frac{x^2}{2\\sqrt{4 - x}}\\right) = \\frac{3x(16 - 5x)}{2\\sqrt{4 - x}} = 0 \\iff x = \\frac{16}{5}$$
Giá trị lớn nhất của thể tích khối chóp là:
$$V_{\\max} = V\\left(\\frac{16}{5}\\right) = 3 \\cdot \\left(\\frac{16}{5}\\right)^2 \\cdot \\sqrt{4 - \\frac{16}{5}} = \\frac{768}{25} \\cdot \\frac{2\\sqrt{5}}{5} = \\frac{1536\\sqrt{5}}{125}\\text{ (dm}^3)$$
Do đó $a = 1536, b = 5, c = 125$.
Vậy $a + 2b + 3c = 1536 + 2 \\cdot 5 + 3 \\cdot 125 = 1921$.
Đáp số: $1921$.`,
  },
];
