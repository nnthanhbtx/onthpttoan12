import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // ==========================================
  // PHẦN I: Câu trắc nghiệm nhiều phương án lựa chọn (12 câu)
  // ==========================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $y = f(x) = \\dfrac{2x-1}{x+1}$. Giá trị $f\'(3)$ bằng',
    options: [
      { key: 'A', text: '$\\dfrac{4}{5}$' },
      { key: 'B', text: '$\\dfrac{3}{16}$' },
      { key: 'C', text: '$\\dfrac{2}{9}$' },
      { key: 'D', text: '$\\dfrac{1}{6}$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.\nÁp dụng công thức đạo hàm của hàm phân thức bậc nhất trên bậc nhất $y = \\dfrac{ax+b}{cx+d}$:\n$$f\'(x) = \\dfrac{2\\cdot 1 - 1\\cdot(-1)}{(x+1)^2} = \\dfrac{3}{(x+1)^2}, \\quad \\forall x \\neq -1$$\nThay $x = 3$ vào biểu thức đạo hàm, ta được:\n$$f\'(3) = \\dfrac{3}{(3+1)^2} = \\dfrac{3}{16}$$\nVậy đáp án đúng là B.',
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hình lập phương $ABCD.A\'B\'C\'D\'$. Vectơ nào dưới đây bằng vectơ $\\overrightarrow{AD}$?',
    diagramType: 'DE01_CUBE_ABCD',
    options: [
      { key: 'A', text: '$\\overrightarrow{BC\'}$' },
      { key: 'B', text: '$\\overrightarrow{DC}$' },
      { key: 'C', text: '$\\overrightarrow{B\'C\'}$' },
      { key: 'D', text: '$\\overrightarrow{AB}$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Trong hình lập phương $ABCD.A\'B\'C\'D\'$, tứ giác $ADC\'B\'$ là hình chữ nhật nên $AD \\parallel B\'C\'$ và $AD = B\'C\'$.\nHai vectơ $\\overrightarrow{AD}$ và $\\overrightarrow{B\'C\'}$ có cùng phương, cùng hướng và cùng độ dài nên:\n$$\\overrightarrow{AD} = \\overrightarrow{B\'C\'}$$\nVậy đáp án đúng là C.',
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Tập xác định của hàm số $y = (x-1)^{\\frac{1}{6}} + \\log\\left(4-x^2\\right)$ là',
    options: [
      { key: 'A', text: '$[1;2)$' },
      { key: 'B', text: '$(-2;2)$' },
      { key: 'C', text: '$(1;2]$' },
      { key: 'D', text: '$(1;2)$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Điều kiện xác định của hàm số:\n• Biểu thức lũy thừa $(x-1)^{\\frac{1}{6}}$ có số mũ $\\dfrac{1}{6} \\notin \\mathbb{Z}$ nên xác định khi và chỉ khi $x - 1 > 0 \\iff x > 1$.\n• Biểu thức lôgarit $\\log\\left(4-x^2\\right)$ xác định khi và chỉ khi $4 - x^2 > 0 \\iff -2 < x < 2$.\nKết hợp hai điều kiện trên:\n$$\\begin{cases} x > 1 \\\\ -2 < x < 2 \\end{cases} \\iff 1 < x < 2$$\nVậy tập xác định của hàm số là $D = (1;2)$. Đáp án đúng là D.',
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Khảo sát thời gian tập thể dục của một số học sinh khối 11 thu được mẫu số liệu ghép nhóm như sau:\nTrung vị của mẫu số liệu trên gần với số nào nhất?',
    diagramType: 'DE01_TABLE_STATS',
    options: [
      { key: 'A', text: '$41,23$' },
      { key: 'B', text: '$51,54$' },
      { key: 'C', text: '$40,55$' },
      { key: 'D', text: '$50,44$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Cỡ mẫu của mẫu số liệu là $n = 5 + 9 + 13 + 10 + 6 = 43$.\nGọi $x_1, x_2, \\dots, x_{43}$ là thời gian tập thể dục của $43$ học sinh được sắp xếp theo thứ tự không giảm. Trung vị của mẫu số liệu gốc là $x_{22} \\in [40; 60)$ vì:\n• Tần số tích lũy đến nhóm $[20; 40)$ là $cf_2 = 5 + 9 = 14 < \\dfrac{n}{2} = 21,5$.\n• Tần số tích lũy đến nhóm $[40; 60)$ là $cf_3 = 14 + 13 = 27 \\ge 21,5$.\nNhóm chứa trung vị là $[40; 60)$ với đầu mút dưới $u_m = 40$, tần số $n_m = 13$, tần số tích lũy nhóm liền trước $C = 14$, độ dài nhóm $u_{m+1} - u_m = 20$.\nÁp dụng công thức tính trung vị của mẫu số liệu ghép nhóm:\n$$M_e = u_m + \\dfrac{\\dfrac{n}{2} - C}{n_m} \\cdot (u_{m+1} - u_m) = 40 + \\dfrac{21,5 - 14}{13} \\cdot 20 = 40 + \\dfrac{150}{13} \\approx 51,54$$\nVậy đáp án đúng là B.',
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $y = -x^3 + 3x^2 + 9x - 1$. Hệ số góc lớn nhất của tiếp tuyến với đồ thị hàm số là',
    options: [
      { key: 'A', text: '$9$' },
      { key: 'B', text: '$12$' },
      { key: 'C', text: '$6$' },
      { key: 'D', text: '$8$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tập xác định: $D = \\mathbb{R}$. Đạo hàm của hàm số là $y\' = -3x^2 + 6x + 9$.\nHệ số góc của tiếp tuyến với đồ thị hàm số tại tiếp điểm có hoành độ $x_0$ là:\n$$k = y\'(x_0) = -3x_0^2 + 6x_0 + 9 = -3(x_0 - 1)^2 + 12 \\le 12, \\quad \\forall x_0 \\in \\mathbb{R}$$\nĐẳng thức xảy ra khi và chỉ khi $x_0 = 1$.\nVậy hệ số góc lớn nhất của tiếp tuyến với đồ thị hàm số bằng $12$. Đáp án đúng là B.',
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Biết hàm số $f(x) = \\begin{cases} \\log_3 x, & x > 0 \\\\ 3^x, & x \\le 0 \\end{cases}$, khi đó $f\\left(f\\left(\\dfrac{1}{2}\\right)\\right) =$',
    options: [
      { key: 'A', text: '$\\dfrac{1}{4}$' },
      { key: 'B', text: '$\\dfrac{1}{2}$' },
      { key: 'C', text: '$\\dfrac{\\sqrt{2}}{2}$' },
      { key: 'D', text: '$2$' },
    ],
    correctAnswer: 'B',
    explanation:
      'Vì $\\dfrac{1}{2} > 0$ nên:\n$$f\\left(\\dfrac{1}{2}\\right) = \\log_3\\left(\\dfrac{1}{2}\\right) = -\\log_3 2 < 0$$\nVì $-\\log_3 2 < 0$ nên thay vào nhánh $x \\le 0$ của hàm số, ta được:\n$$f\\left(f\\left(\\dfrac{1}{2}\\right)\\right) = f\\left(-\\log_3 2\\right) = 3^{-\\log_3 2} = 3^{\\log_3\\left(\\frac{1}{2}\\right)} = \\dfrac{1}{2}$$\nVậy đáp án đúng là B.',
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hai hình bình hành $ABCD$ và $ABEF$ không cùng nằm trong một mặt phẳng. Gọi $O_1, O_2$ lần lượt là tâm của $ABCD, ABEF$. $M$ là trung điểm của $CD$. Chọn khẳng định sai trong các khẳng định sau',
    options: [
      { key: 'A', text: '$MO_2$ cắt $(BEC)$' },
      { key: 'B', text: '$O_1O_2$ song song với $(AFD)$' },
      { key: 'C', text: '$O_1O_2$ song song với $(BEC)$' },
      { key: 'D', text: '$O_1O_2$ song song với $(EFM)$' },
    ],
    correctAnswer: 'A',
    explanation:
      '• Trong $\\triangle BDF$, $O_1$ và $O_2$ lần lượt là trung điểm của $BD$ và $BF$ nên $O_1O_2$ là đường trung bình $\\implies O_1O_2 \\parallel DF$.\n  - Vì $DF \\subset (AFD)$ và $O_1O_2 \\not\\subset (AFD)$ nên $O_1O_2 \\parallel (AFD)$ (B đúng).\n  - Vì $CD \\parallel AB \\parallel EF$ và $CD = AB = EF$ nên $CDFE$ là hình bình hành, suy ra $DF \\subset (CDFE) \\equiv (EFM) \\implies O_1O_2 \\parallel (EFM)$ (D đúng).\n• Trong $\\triangle ACE$, $O_1$ và $O_2$ lần lượt là trung điểm của $AC$ và $AE$ nên $O_1O_2 \\parallel CE$. Mà $CE \\subset (BEC)$ nên $O_1O_2 \\parallel (BEC)$ (C đúng).\n• Trong $\\triangle BCD$, $O_1M$ là đường trung bình nên $O_1M \\parallel BC \\subset (BEC) \\implies O_1M \\parallel (BEC)$. Kết hợp với $O_1O_2 \\parallel (BEC)$ suy ra $(MO_1O_2) \\parallel (BEC) \\implies MO_2 \\parallel (BEC)$, tức $MO_2$ không cắt $(BEC)$. Vậy khẳng định A sai.',
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Biết $\\alpha$ là góc nhọn, $\\cos\\alpha = \\dfrac{1+\\sqrt{5}}{4}$, khi đó $\\sin\\dfrac{\\alpha}{2} =$',
    options: [
      { key: 'A', text: '$\\dfrac{3-\\sqrt{5}}{8}$' },
      { key: 'B', text: '$\\dfrac{-1+\\sqrt{5}}{8}$' },
      { key: 'C', text: '$\\dfrac{3-\\sqrt{5}}{4}$' },
      { key: 'D', text: '$\\dfrac{-1+\\sqrt{5}}{4}$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Vì $\\alpha$ là góc nhọn ($0 < \\alpha < \\dfrac{\\pi}{2}$) nên $0 < \\dfrac{\\alpha}{2} < \\dfrac{\\pi}{4} \\implies \\sin\\dfrac{\\alpha}{2} > 0$.\nÁp dụng công thức hạ bậc:\n$$\\sin^2\\dfrac{\\alpha}{2} = \\dfrac{1 - \\cos\\alpha}{2} = \\dfrac{1 - \\dfrac{1+\\sqrt{5}}{4}}{2} = \\dfrac{3 - \\sqrt{5}}{8} = \\dfrac{6 - 2\\sqrt{5}}{16} = \\left(\\dfrac{\\sqrt{5}-1}{4}\\right)^2$$\nDo $\\sin\\dfrac{\\alpha}{2} > 0$ và $\\sqrt{5} - 1 > 0$ nên:\n$$\\sin\\dfrac{\\alpha}{2} = \\dfrac{\\sqrt{5}-1}{4} = \\dfrac{-1+\\sqrt{5}}{4}$$\nVậy đáp án đúng là D.',
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tam giác $ABC$. Phát biểu nào sau đây là sai?',
    options: [
      { key: 'A', text: '$\\overrightarrow{DA} + \\overrightarrow{DB} + \\overrightarrow{DC} = 3\\overrightarrow{DG}$' },
      { key: 'B', text: '$\\overrightarrow{GD} - \\overrightarrow{GA} = \\overrightarrow{AD}$' },
      { key: 'C', text: '$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{0}$' },
      { key: 'D', text: '$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\overrightarrow{0}$' },
    ],
    correctAnswer: 'D',
    explanation:
      'Vì $G$ là trọng tâm của tam giác $ABC$ nên:\n• Theo tính chất trọng tâm tam giác: $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{0}$ (C đúng).\n• Với điểm $D$ bất kỳ: $\\overrightarrow{DA} + \\overrightarrow{DB} + \\overrightarrow{DC} = 3\\overrightarrow{DG}$ (A đúng).\n• Theo quy tắc hiệu hai vectơ chung gốc $G$: $\\overrightarrow{GD} - \\overrightarrow{GA} = \\overrightarrow{AD}$ (B đúng).\n• Ta có $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\overrightarrow{0} + \\overrightarrow{GD} = \\overrightarrow{GD} \\neq \\overrightarrow{0}$ (vì $ABCD$ là tứ diện nên $D \\notin (ABC) \\implies D \\not\\equiv G$). Vậy phát biểu D sai.',
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Như hình vẽ, trong hình chóp tam giác $V.ABC$, có $VA = VB = VC = 8$, $\\widehat{AVB} = \\widehat{AVC} = \\widehat{BVC} = 30^\\circ$. Qua điểm $A$ dựng mặt cắt $AEF$ ($E \\in VB, F \\in VC$), khi đó giá trị nhỏ nhất của chu vi tam giác $AEF$ bằng bao nhiêu?',
    diagramType: 'DE01_PYRAMID_VABC',
    options: [
      { key: 'A', text: '$6\\sqrt{2}$' },
      { key: 'B', text: '$6\\sqrt{3}$' },
      { key: 'C', text: '$8\\sqrt{2}$' },
      { key: 'D', text: '$8\\sqrt{3}$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Cắt hình chóp dọc theo cạnh bên $VA$ rồi trải phẳng ba mặt bên $(VAB), (VBC), (VCA)$ lên cùng một mặt phẳng. Khi đó điểm $A$ tách thành hai vị trí $A$ và $A\'$ sao cho $VA = VA\' = 8$, và góc ở đỉnh $V$ trên hình trải phẳng là:\n$$\\widehat{AVA\'} = \\widehat{AVB} + \\widehat{BVC} + \\widehat{CVA\'} = 30^\\circ + 30^\\circ + 30^\\circ = 90^\\circ$$\nVới mọi vị trí của $E \\in VB$ và $F \\in VC$, ta có $FA = FA\'$ nên chu vi tam giác $AEF$ là:\n$$C_{\\triangle AEF} = AE + EF + FA = AE + EF + FA\' \\ge AA\'$$\nĐẳng thức xảy ra khi và chỉ khi $A, E, F, A\'$ thẳng hàng theo thứ tự đó trên hình trải phẳng.\nXét $\\triangle VAA\'$ vuông cân tại $V$ ($VA = VA\' = 8$, $\\widehat{AVA\'} = 90^\\circ$):\n$$AA\' = \\sqrt{VA^2 + VA\'^2} = \\sqrt{8^2 + 8^2} = 8\\sqrt{2}$$\nVậy giá trị nhỏ nhất của chu vi tam giác $AEF$ bằng $8\\sqrt{2}$. Đáp án đúng là C.',
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Tìm số hạng tổng quát $u_n$ của cấp số nhân lùi vô hạn có tổng bằng $3$ và công bội $q = \\dfrac{2}{3}$.',
    options: [
      { key: 'A', text: '$\\left(\\dfrac{2}{3}\\right)^{n-1}$' },
      { key: 'B', text: '$\\left(\\dfrac{2}{3}\\right)^{n}$' },
      { key: 'C', text: '$\\left(\\dfrac{2}{3}\\right)^{n+1}$' },
      { key: 'D', text: '$\\left(\\dfrac{2}{3}\\right)^{n+2}$' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tổng của cấp số nhân lùi vô hạn có số hạng đầu $u_1$ và công bội $q = \\dfrac{2}{3}$ ($|q| < 1$) được tính theo công thức:\n$$S = \\dfrac{u_1}{1 - q} = 3 \\iff u_1 = 3\\left(1 - \\dfrac{2}{3}\\right) = 1$$\nSố hạng tổng quát $u_n$ ($n \\in \\mathbb{N}^*$) của cấp số nhân là:\n$$u_n = u_1 \\cdot q^{n-1} = 1 \\cdot \\left(\\dfrac{2}{3}\\right)^{n-1} = \\left(\\dfrac{2}{3}\\right)^{n-1}$$\nVậy đáp án đúng là A.',
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $f(x)$ xác định trên $\\mathbb{R}$. Đồ thị phác thảo của đạo hàm $f\'(x)$ được cho như hình vẽ. Phát biểu nào sau đây đúng?',
    diagramType: 'DE01_GRAPH_P1_Q12',
    options: [
      { key: 'A', text: '$f(b) > f(c) > f(d)$' },
      { key: 'B', text: '$f(b) > f(a) > f(e)$' },
      { key: 'C', text: '$f(c) > f(b) > f(a)$' },
      { key: 'D', text: '$f(c) > f(e) > f(d)$' },
    ],
    correctAnswer: 'C',
    explanation:
      'Quan sát đồ thị của hàm đạo hàm $y = f\'(x)$, ta thấy:\n• Trên khoảng $(-\\infty; c)$, đồ thị $y = f\'(x)$ nằm phía trên trục hoành $Ox$, tức là $f\'(x) > 0, \\forall x \\in (-\\infty; c)$ và $f\'(c) = 0$.\n• Do đó hàm số $y = f(x)$ đồng biến trên nửa khoảng $(-\\infty; c]$.\nVì $a < b < c$ đều thuộc $(-\\infty; c]$ nên:\n$$f(a) < f(b) < f(c) \\iff f(c) > f(b) > f(a)$$\nVậy đáp án đúng là C.',
  },

  // ==========================================
  // PHẦN II: Câu trắc nghiệm đúng sai (4 câu: id 13 -> 16)
  // ==========================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Hình vẽ là đồ thị $y = f\'(x)$ của hàm số $y = f(x)$. Xét tính đúng sai của các mệnh đề sau:',
    diagramType: 'DE01_GRAPH_P2_Q1',
    statements: [
      {
        key: 'a',
        text: '$x = a$ là điểm cực tiểu của hàm số $y = f(x)$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Phương trình $f(x) = 0$ có hai nghiệm.',
        correct: false,
      },
      {
        key: 'c',
        text: '$f(ab) > f(b^2)$.',
        correct: false,
      },
      {
        key: 'd',
        text: '$f(-ab) < f(-b^2)$.',
        correct: true,
      },
    ],
    explanation:
      '• a) Sai: Đồ thị đã cho là đồ thị của hàm đạo hàm $y = f\'(x)$ (không phải đồ thị của $y = f(x)$). Tại $x = a$, hàm số $f\'(x)$ đạt cực tiểu nhưng $f\'(x) < 0$ trên toàn khoảng $(0; b)$, tức là $f\'(x)$ không đổi dấu khi đi qua $x = a$. Vì vậy $x = a$ không phải là điểm cực trị của hàm số $y = f(x)$.\n• b) Sai: Đồ thị $y = f\'(x)$ chỉ xác định được dấu của đạo hàm (chiều biến thiên) và hoành độ điểm cực trị $x = b$ của $y = f(x)$, còn giá trị cụ thể của $f(x)$ phụ thuộc vào hằng số cộng $C$. Do chưa biết vị trí tương đối của đồ thị $y = f(x)$ so với trục hoành $Ox$ nên không thể kết luận phương trình $f(x) = 0$ có hai nghiệm.\n• c) Sai: Từ đồ thị ta có $0 < a < b \\implies 0 < ab < b^2$. Trên nửa khoảng $(-\\infty; b]$, $f\'(x) \\le 0$ (bằng $0$ tại $x = -a$ và $x = b$) nên $f(x)$ nghịch biến trên $(-\\infty; b]$; trên $[b; +\\infty)$, $f\'(x) \\ge 0$ nên $f(x)$ đồng biến trên $[b; +\\infty)$. Tuy nhiên, vì đề bài chưa cho biết giá trị của $a, b$ so với $1$:\n  - Nếu $1 \\le a < b$ thì $b \\le ab < b^2 \\in [b; +\\infty)$: do $f(x)$ đồng biến trên $[b; +\\infty)$ nên $f(ab) < f(b^2)$.\n  Do đó mệnh đề $f(ab) > f(b^2)$ là sai.\n• d) Đúng: Vì $0 < a < b$ nên $ab < b^2 \\implies -b^2 < -ab < 0 < b$. Trên toàn bộ nửa khoảng $(-\\infty; b]$, đồ thị $y = f\'(x)$ nằm phía dưới trục $Ox$ và chỉ tiếp xúc với $Ox$ tại $x = -a$, tức là $f\'(x) \\le 0, \\forall x \\in (-\\infty; b]$ (dấu bằng chỉ xảy ra tại hữu hạn điểm). Do đó hàm số $y = f(x)$ nghịch biến nghiêm ngặt trên $(-\\infty; b]$. Vì $-b^2 < -ab$ và cả hai điểm đều thuộc $(-\\infty; 0) \\subset (-\\infty; b]$ nên:\n$$f(-b^2) > f(-ab) \\iff f(-ab) < f(-b^2)$$',
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, cạnh bên bằng $\\sqrt{2}a$. Gọi $F$ là trung điểm của cạnh $SA$.',
    statements: [
      {
        key: 'a',
        text: 'Khoảng cách từ $S$ đến mặt phẳng $(FCD)$ bằng $\\dfrac{a\\sqrt{10}}{5}$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Độ lớn của góc giữa đường thẳng $SA$ và mặt phẳng đáy bằng $30^\\circ$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Thể tích của khối chóp $S.FCD$ bằng $\\dfrac{a^3\\sqrt{3}}{24}$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Khoảng cách giữa $AC$ và $SB$ bằng $\\dfrac{a\\sqrt{6}}{4}$.',
        correct: true,
      },
    ],
    explanation:
      'Gọi $O = AC \\cap BD$ là tâm hình vuông $ABCD$ cạnh $a \\implies OA = OB = \\dfrac{a\\sqrt{2}}{2}$, $SO \\perp (ABCD)$ và:\n$$SO = \\sqrt{SA^2 - OA^2} = \\sqrt{2a^2 - \\dfrac{a^2}{2}} = \\dfrac{a\\sqrt{6}}{2}$$\n• b) Sai: Hình chiếu vuông góc của $SA$ trên $(ABCD)$ là $AO$ nên góc giữa $SA$ và $(ABCD)$ là $\\widehat{SAO}$. Ta có:\n$$\\cos\\widehat{SAO} = \\dfrac{OA}{SA} = \\dfrac{\\dfrac{a\\sqrt{2}}{2}}{a\\sqrt{2}} = \\dfrac{1}{2} \\implies \\widehat{SAO} = 60^\\circ \\neq 30^\\circ$$\n• c) Sai: Thể tích khối chóp $S.ABCD$ là $V_{S.ABCD} = \\dfrac{1}{3}S_{ABCD} \\cdot SO = \\dfrac{1}{3}a^2 \\cdot \\dfrac{a\\sqrt{6}}{2} = \\dfrac{a^3\\sqrt{6}}{6} \\implies V_{S.ACD} = \\dfrac{1}{2}V_{S.ABCD} = \\dfrac{a^3\\sqrt{6}}{12}$. Vì $F$ là trung điểm $SA$ nên:\n$$V_{S.FCD} = \\dfrac{SF}{SA}V_{S.ACD} = \\dfrac{1}{2} \\cdot \\dfrac{a^3\\sqrt{6}}{12} = \\dfrac{a^3\\sqrt{6}}{24} \\neq \\dfrac{a^3\\sqrt{3}}{24}$$\n• a) Đúng: Tam giác $SAC$ có $SA = SC = AC = a\\sqrt{2}$ nên là tam giác đều cạnh $a\\sqrt{2}$, suy ra đường trung tuyến $CF = \\dfrac{a\\sqrt{2}\\cdot\\sqrt{3}}{2} = \\dfrac{a\\sqrt{6}}{2}$. Trong $\\triangle SAD$, áp dụng công thức đường trung tuyến:\n$$DF = \\sqrt{\\dfrac{2(SD^2 + AD^2) - SA^2}{4}} = \\sqrt{\\dfrac{2(2a^2 + a^2) - 2a^2}{4}} = a$$\nTam giác $FCD$ cân tại $D$ ($DF = DC = a$, đáy $CF = \\dfrac{a\\sqrt{6}}{2}$) có đường cao hạ từ $D$ là $h_D = \\sqrt{a^2 - \\left(\\dfrac{a\\sqrt{6}}{4}\\right)^2} = \\dfrac{a\\sqrt{10}}{4}$, diện tích $S_{\\triangle FCD} = \\dfrac{1}{2}\\cdot\\dfrac{a\\sqrt{6}}{2}\\cdot\\dfrac{a\\sqrt{10}}{4} = \\dfrac{a^2\\sqrt{15}}{8}$. Suy ra:\n$$d(S,(FCD)) = \\dfrac{3V_{S.FCD}}{S_{\\triangle FCD}} = \\dfrac{3 \\cdot \\dfrac{a^3\\sqrt{6}}{24}}{\\dfrac{a^2\\sqrt{15}}{8}} = \\dfrac{a\\sqrt{6}}{\\sqrt{15}} = \\dfrac{a\\sqrt{10}}{5}$$\n• d) Đúng: Vì $AC \\perp BD$ và $AC \\perp SO$ nên $AC \\perp (SBD)$ tại $O$. Trong $(SBD)$, kẻ $OK \\perp SB$ tại $K$ thì $OK$ là đoạn vuông góc chung của $AC$ và $SB$:\n$$d(AC, SB) = OK = \\dfrac{OB \\cdot OS}{SB} = \\dfrac{\\dfrac{a\\sqrt{2}}{2} \\cdot \\dfrac{a\\sqrt{6}}{2}}{a\\sqrt{2}} = \\dfrac{a\\sqrt{6}}{4}$$',
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Trong hộp có $45$ quả cầu có cùng kích thước và khối lượng được đánh số từ $1$ đến $45$. Lấy ngẫu nhiên đồng thời $3$ quả cầu từ hộp đó. Xét tính đúng sai của các mệnh đề sau:',
    statements: [
      {
        key: 'a',
        text: 'Số cách lấy được cả 3 quả cầu đánh số chẵn bằng $1540$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Xác suất để tích 3 số ghi trên 3 quả cầu là một số chia hết cho 8 bằng $\\dfrac{523}{1290}$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Xác suất để tổng 3 số ghi trên 3 quả cầu là số lẻ bằng $\\dfrac{1}{2}$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Xác suất để tổng 3 số ghi trên 3 quả cầu là số chia hết cho 4 bằng $\\dfrac{323}{1290}$.',
        correct: true,
      },
    ],
    explanation:
      'Số phần tử của không gian mẫu là $n(\\Omega) = C_{45}^3 = 14190$. Từ $1$ đến $45$ có $22$ số chẵn và $23$ số lẻ.\n• a) Đúng: Số cách lấy được cả $3$ quả cầu đánh số chẵn là $C_{22}^3 = 1540$.\n• b) Sai: Phân loại $22$ số chẵn từ $1$ đến $45$ theo lũy thừa của $2$:\n  - Nhóm $A_1$ (chia $4$ dư $2$, dạng $4k+2$): gồm $11$ số ($2, 6, \\dots, 42$).\n  - Nhóm $A_2$ (chia hết cho $4$ nhưng không chia hết cho $8$, dạng $8k+4$): gồm $6$ số ($4, 12, 20, 28, 36, 44$).\n  - Nhóm $A_3$ (chia hết cho $8$): gồm $5$ số ($8, 16, 24, 32, 40$).\n  Tích $3$ số không chia hết cho $8$ trong các trường hợp:\n  (1) Cả $3$ số đều lẻ: $C_{23}^3 = 1771$ cách.\n  (2) $2$ số lẻ và $1$ số thuộc $A_1 \\cup A_2$: $C_{23}^2 \\cdot (11 + 6) = 253 \\cdot 17 = 4301$ cách.\n  (3) $1$ số lẻ và $2$ số thuộc $A_1$: $23 \\cdot C_{11}^2 = 23 \\cdot 55 = 1265$ cách.\n  Tổng số kết quả để tích không chia hết cho $8$ là $1771 + 4301 + 1265 = 7337$.\n  Xác suất để tích $3$ số chia hết cho $8$ là:\n  $$P = \\dfrac{14190 - 7337}{14190} = \\dfrac{6853}{14190} = \\dfrac{623}{1290} \\neq \\dfrac{523}{1290}$$\n• c) Sai: Tổng $3$ số là số lẻ khi lấy được $3$ số lẻ hoặc ($1$ số lẻ và $2$ số chẵn). Số kết quả thuận lợi là $C_{23}^3 + C_{23}^1 \\cdot C_{22}^2 = 1771 + 5313 = 7084$. Xác suất là:\n$$P = \\dfrac{7084}{14190} = \\dfrac{322}{645} \\neq \\dfrac{1}{2}$$\n• d) Đúng: Phân chia $45$ số theo số dư khi chia cho $4$: nhóm $R_0$ (dư $0$) có $11$ số; nhóm $R_1$ (dư $1$) có $12$ số; nhóm $R_2$ (dư $2$) có $11$ số; nhóm $R_3$ (dư $3$) có $11$ số.\n  Tổng $3$ số chia hết cho $4$ ứng với các bộ số dư $(0,0,0), (0,1,3), (0,2,2), (1,1,2), (2,3,3)$:\n  $$n = C_{11}^3 + 11\\cdot 12\\cdot 11 + 11\\cdot C_{11}^2 + C_{12}^2\\cdot 11 + 11\\cdot C_{11}^2 = 165 + 1452 + 605 + 726 + 605 = 3553$$\n  Xác suất cần tìm là $P = \\dfrac{3553}{14190} = \\dfrac{323}{1290}$.',
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hàm số $y = \\left(9-x^2\\right)^{\\frac{1}{3}} + \\ln(1-x)$.',
    statements: [
      {
        key: 'a',
        text: 'Tập xác định của hàm số là khoảng $(-\\infty; 1)$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Hàm số có đạo hàm $y\' = \\dfrac{1}{3\\sqrt[3]{(9-x^2)^2}} - \\dfrac{1}{1-x}$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Hàm số nghịch biến trên khoảng $(0; 1)$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Giá trị nhỏ nhất của hàm số trên đoạn $\\left[\\dfrac{1}{4}; \\dfrac{1}{2}\\right]$ bằng $\\dfrac{1}{2}\\sqrt[3]{70} - \\ln 2$.',
        correct: true,
      },
    ],
    explanation:
      '• a) Sai: Vì số mũ $\\dfrac{1}{3} \\notin \\mathbb{Z}$ nên điều kiện xác định của hàm số là:\n$$\\begin{cases} 9 - x^2 > 0 \\\\ 1 - x > 0 \\end{cases} \\iff \\begin{cases} -3 < x < 3 \\\\ x < 1 \\end{cases} \\iff -3 < x < 1$$\nTập xác định của hàm số là $D = (-3; 1)$.\n• b) Sai: Với mọi $x \\in (-3; 1)$, đạo hàm của hàm số là:\n$$y\' = \\dfrac{1}{3}\\left(9-x^2\\right)^{-\\frac{2}{3}} \\cdot (-2x) + \\dfrac{-1}{1-x} = \\dfrac{-2x}{3\\sqrt[3]{(9-x^2)^2}} - \\dfrac{1}{1-x}$$\n• c) Đúng: Với mọi $x \\in (0; 1)$, ta có $\\dfrac{-2x}{3\\sqrt[3]{(9-x^2)^2}} < 0$ và $-\\dfrac{1}{1-x} < 0 \\implies y\' < 0, \\forall x \\in (0; 1)$. Vậy hàm số nghịch biến trên khoảng $(0; 1)$.\n• d) Đúng: Vì hàm số liên tục và nghịch biến trên đoạn $\\left[\\dfrac{1}{4}; \\dfrac{1}{2}\\right] \\subset (0; 1)$ nên giá trị nhỏ nhất đạt tại $x = \\dfrac{1}{2}$:\n$$\\min_{\\left[\\frac{1}{4}; \\frac{1}{2}\\right]} y = y\\left(\\dfrac{1}{2}\\right) = \\left(9 - \\dfrac{1}{4}\\right)^{\\frac{1}{3}} + \\ln\\left(1 - \\dfrac{1}{2}\\right) = \\sqrt[3]{\\dfrac{35}{4}} - \\ln 2 = \\sqrt[3]{\\dfrac{70}{8}} - \\ln 2 = \\dfrac{1}{2}\\sqrt[3]{70} - \\ln 2$$',
  },

  // ==========================================
  // PHẦN III: Câu trắc nghiệm trả lời ngắn (6 câu: id 17 -> 22)
  // ==========================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Năm 2020, một công ty kinh doanh một loại sản phẩm kỹ thuật số, thu được lợi nhuận $200$ triệu đồng. Từ năm 2021 trở đi, dự kiến lợi nhuận mỗi năm giảm $20$ triệu đồng so với năm trước. Theo quy luật này, nếu công ty không phát triển sản phẩm mới và cũng không điều chỉnh chiến lược kinh doanh thì bắt đầu từ năm nào, việc kinh doanh sản phẩm này của công ty sẽ bị thua lỗ?',
    correctAnswer: '2031',
    explanation:
      'Gọi $u_n$ (triệu đồng) là lợi nhuận ở năm thứ $n$ tính từ năm 2020 ($n = 1$ ứng với năm 2020, tức năm thứ $n$ là năm $2019 + n$).\nTheo giả thiết, $(u_n)$ là một cấp số cộng với số hạng đầu $u_1 = 200$ và công sai $d = -20$.\nSố hạng tổng quát của dãy là:\n$$u_n = u_1 + (n-1)d = 200 - 20(n-1)$$\nCông ty bắt đầu bị thua lỗ khi lợi nhuận âm:\n$$u_n < 0 \\iff 200 - 20(n-1) < 0 \\iff n - 1 > 10 \\iff n > 11$$\nVì $n \\in \\mathbb{N}^*$ nên giá trị nhỏ nhất của $n$ là $n = 12$, ứng với năm $2019 + 12 = 2031$.\nĐáp số: 2031.',
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Dùng ba màu đỏ, vàng, xanh lam để tô $9$ ô vuông nhỏ được đánh số $1, 2, 3, \\dots, 9$ như hình, sao cho hai ô vuông nhỏ bất kỳ kề nhau (có cạnh chung) đều được tô màu khác nhau, đồng thời các ô mang số $3, 5, 7$ được tô cùng một màu. Hỏi có tất cả bao nhiêu cách tô màu thỏa mãn điều kiện?',
    diagramType: 'DE01_GRID_3X3',
    correctAnswer: '108',
    explanation:
      '• Bước 1: Chọn màu để tô cho 3 ô mang số $3, 5, 7$ (được tô cùng một màu): có $3$ cách chọn.\n• Bước 2: Tô màu cho cụm 3 ô mang số $1, 2, 4$ (trong đó ô $2$ kề với ô $3, 5$ và ô $4$ kề với ô $5, 7$):\n  - Trường hợp 1 (ô $2$ và ô $4$ cùng màu): Vì ô $2, 4$ khác màu với ô $3, 5, 7$ nên có $2$ cách chọn màu cho cặp $(2, 4)$. Khi đó ô $1$ (kề với ô $2$ và ô $4$) chỉ cần khác màu với màu chung của $(2, 4)$ nên có $2$ cách chọn. Suy ra có $2 \\cdot 2 = 4$ cách.\n  - Trường hợp 2 (ô $2$ và ô $4$ khác màu): Vì cả hai ô đều khác màu với ô $3, 5, 7$ nên có $2 \\cdot 1 = 2$ cách chọn màu cho $(2, 4)$. Khi đó ô $1$ phải khác màu cả ô $2$ và ô $4$ nên có $1$ cách chọn. Suy ra có $2 \\cdot 1 = 2$ cách.\n  Do đó cụm 3 ô $(1, 2, 4)$ có $4 + 2 = 6$ cách tô màu.\n• Bước 3: Hoàn toàn tương tự và độc lập, cụm 3 ô $(6, 8, 9)$ cũng có $6$ cách tô màu.\nTheo quy tắc nhân, tổng số cách tô màu thỏa mãn yêu cầu là:\n$$3 \\cdot 6 \\cdot 6 = 108\\text{ (cách)}$$\nĐáp số: 108.',
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Biết các số thực $x, y$ thỏa mãn $\\begin{cases} x + y \\le 6, \\\\ y \\le 2x, \\\\ y \\ge \\dfrac{1}{2}x. \\end{cases}$ Khi đó, giá trị lớn nhất của $z = xy$ bằng bao nhiêu?',
    correctAnswer: '9',
    explanation:
      'Từ điều kiện $\\dfrac{1}{2}x \\le y \\le 2x$ suy ra $2x \\ge \\dfrac{1}{2}x \\iff x \\ge 0$, kéo theo $y \\ge \\dfrac{1}{2}x \\ge 0$.\nÁp dụng bất đẳng thức AM-GM cho hai số thực không âm $x, y$:\n$$z = xy \\le \\left(\\dfrac{x+y}{2}\\right)^2 \\le \\left(\\dfrac{6}{2}\\right)^2 = 9$$\nĐẳng thức xảy ra khi và chỉ khi:\n$$\\begin{cases} x = y \\\\ x + y = 6 \\end{cases} \\iff x = y = 3$$\nCặp $(x; y) = (3; 3)$ thỏa mãn tất cả các bất phương trình của hệ đã cho. Vậy giá trị lớn nhất của $z = xy$ bằng $9$.\nĐáp số: 9.',
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Như Hình, trong tứ diện $ABCD$, tam giác $ABC$ là tam giác đều, mặt phẳng $(ABC)$ vuông góc với mặt phẳng $(ABD)$, điểm $M$ là trung điểm của cạnh $AB$, $AB = 2$, $AD = 2\\sqrt{3}$, $\\widehat{BAD} = 90^\\circ$. Tính cosin của góc giữa hai đường thẳng chéo nhau $BC$ và $MD$ (kết quả làm tròn đến hàng phần trăm).',
    diagramType: 'DE01_TETRAHEDRON_ABCD',
    correctAnswer: '0,14',
    explanation:
      'Vì $(ABC) \\perp (ABD)$ theo giao tuyến $AB$ và $AD \\subset (ABD), AD \\perp AB$ ($\\widehat{BAD} = 90^\\circ$) nên $AD \\perp (ABC)$.\nChọn hệ trục tọa độ vuông góc $Oxyz$ với gốc tọa độ tại $A(0;0;0)$, tia $Ax$ trùng với tia $AB$, tia $Az$ trùng với tia $AD$, tia $Ay \\subset (ABC)$ vuông góc với $AB$.\nKhi đó tọa độ các điểm là:\n$$A(0;0;0), \\quad B(2;0;0), \\quad M(1;0;0), \\quad C(1;\\sqrt{3};0), \\quad D(0;0;2\\sqrt{3})$$\nTa có các vectơ chỉ phương:\n• $\\overrightarrow{BC} = (-1; \\sqrt{3}; 0) \\implies |\\overrightarrow{BC}| = \\sqrt{(-1)^2 + (\\sqrt{3})^2 + 0^2} = 2$.\n• $\\overrightarrow{MD} = (-1; 0; 2\\sqrt{3}) \\implies |\\overrightarrow{MD}| = \\sqrt{(-1)^2 + 0^2 + (2\\sqrt{3})^2} = \\sqrt{13}$.\nCosin của góc giữa hai đường thẳng $BC$ và $MD$ là:\n$$\\cos(BC, MD) = \\dfrac{|\\overrightarrow{BC} \\cdot \\overrightarrow{MD}|}{|\\overrightarrow{BC}| \\cdot |\\overrightarrow{MD}|} = \\dfrac{|(-1)(-1) + \\sqrt{3}\\cdot 0 + 0\\cdot 2\\sqrt{3}|}{2\\sqrt{13}} = \\dfrac{1}{2\\sqrt{13}} = \\dfrac{\\sqrt{13}}{26} \\approx 0,14$$\nĐáp số: 0,14.',
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Trong quá trình di chuyển của một con tàu, chi phí nhiên liệu tỉ lệ thuận với lập phương vận tốc của tàu. Biết rằng khi vận tốc là $10\\text{ km/h}$ thì chi phí nhiên liệu là $6\\text{ (\\$)}$ mỗi giờ, còn các chi phí khác không phụ thuộc vào vận tốc là $96\\text{ (\\$)}$ mỗi giờ. Hỏi tàu phải chạy với vận tốc bao nhiêu ($\\text{km/h}$) để tổng chi phí cho mỗi $1\\text{ km}$ hành trình là nhỏ nhất?',
    correctAnswer: '20',
    explanation:
      'Gọi $v\\text{ (km/h)}$ ($v > 0$) là vận tốc của tàu.\nChi phí nhiên liệu trong mỗi giờ có dạng $C_{\\text{nl}} = k \\cdot v^3$ ($k > 0$). Theo đề bài, khi $v = 10$ thì $C_{\\text{nl}} = 6$ nên:\n$$k \\cdot 10^3 = 6 \\implies k = 0,006$$\nThời gian tàu đi hết quãng đường $1\\text{ km}$ là $\\dfrac{1}{v}\\text{ (giờ)}$. Tổng chi phí cho mỗi $1\\text{ km}$ hành trình là:\n$$T(v) = \\dfrac{0,006v^3 + 96}{v} = 0,006v^2 + \\dfrac{96}{v} = 0,006v^2 + \\dfrac{48}{v} + \\dfrac{48}{v}$$\nÁp dụng bất đẳng thức AM-GM cho $3$ số dương:\n$$T(v) \\ge 3\\sqrt[3]{0,006v^2 \\cdot \\dfrac{48}{v} \\cdot \\dfrac{48}{v}} = 3\\sqrt[3]{13,824} = 7,2\\text{ (\\$)}$$\nĐẳng thức xảy ra khi và chỉ khi:\n$$0,006v^2 = \\dfrac{48}{v} \\iff v^3 = 8000 \\iff v = 20\\text{ (km/h)}$$\nĐáp số: 20.',
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trắc nghiệm trả lời ngắn',
    questionText:
      'Biết $\\dfrac{1}{5} \\le k < 1$. Phương trình $f(x) = \\lvert 2^x - 1 \\rvert - k = 0$ có hai nghiệm là $x_1, x_2$ ($x_1 < x_2$); phương trình $g(x) = \\lvert 2^x - 1 \\rvert - \\dfrac{k}{2k+1} = 0$ có hai nghiệm là $x_3, x_4$ ($x_3 < x_4$). Khi đó, giá trị nhỏ nhất của $(x_4 - x_3) + (x_2 - x_1)$ bằng bao nhiêu?',
    correctAnswer: '1',
    explanation:
      'Với $\\dfrac{1}{5} \\le k < 1$, ta có $0 < \\dfrac{k}{2k+1} < k < 1$.\n• Phương trình $\\lvert 2^x - 1 \\rvert = k \\iff \\left[\\begin{array}{l} 2^x = 1 - k \\\\ 2^x = 1 + k \\end{array}\\right.$ có hai nghiệm $x_1 = \\log_2(1-k) < x_2 = \\log_2(1+k)$, suy ra:\n$$x_2 - x_1 = \\log_2(1+k) - \\log_2(1-k) = \\log_2\\left(\\dfrac{1+k}{1-k}\\right)$$\n• Phương trình $\\lvert 2^x - 1 \\rvert = \\dfrac{k}{2k+1}$ có hai nghiệm $x_3 = \\log_2\\left(1 - \\dfrac{k}{2k+1}\\right) = \\log_2\\left(\\dfrac{k+1}{2k+1}\\right)$ và $x_4 = \\log_2\\left(1 + \\dfrac{k}{2k+1}\\right) = \\log_2\\left(\\dfrac{3k+1}{2k+1}\\right)$, suy ra:\n$$x_4 - x_3 = \\log_2\\left(\\dfrac{3k+1}{2k+1}\\right) - \\log_2\\left(\\dfrac{k+1}{2k+1}\\right) = \\log_2\\left(\\dfrac{3k+1}{k+1}\\right)$$\nDo đó tổng cần tìm là:\n$$P = (x_4 - x_3) + (x_2 - x_1) = \\log_2\\left(\\dfrac{3k+1}{k+1} \\cdot \\dfrac{1+k}{1-k}\\right) = \\log_2\\left(\\dfrac{3k+1}{1-k}\\right)$$\nXét hàm số $h(k) = \\dfrac{3k+1}{1-k} = -3 + \\dfrac{4}{1-k}$ trên nửa khoảng $\\left[\\dfrac{1}{5}; 1\\right)$, ta có $h\'(k) = \\dfrac{4}{(1-k)^2} > 0$ nên $h(k)$ đồng biến trên $\\left[\\dfrac{1}{5}; 1\\right)$.\nSuy ra với mọi $k \\in \\left[\\dfrac{1}{5}; 1\\right)$:\n$$h(k) \\ge h\\left(\\dfrac{1}{5}\\right) = \\dfrac{3\\cdot\\dfrac{1}{5} + 1}{1 - \\dfrac{1}{5}} = \\dfrac{\\dfrac{8}{5}}{\\dfrac{4}{5}} = 2 \\implies P = \\log_2\\big(h(k)\\big) \\ge \\log_2 2 = 1$$\nĐẳng thức xảy ra khi và chỉ khi $k = \\dfrac{1}{5}$. Vậy giá trị nhỏ nhất bằng $1$.\nĐáp số: 1.',
  },
];
