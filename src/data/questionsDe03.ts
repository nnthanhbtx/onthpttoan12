import { Question } from '../types';

export const QUESTIONS_DE03: Question[] = [
  // ============================================================================
  // PHẦN I: CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (CÂU 1 - CÂU 12)
  // ============================================================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText: 'Nghiệm của phương trình $2^{x-1} = 3$ là',
    options: [
      { key: 'A', text: '$x = 3$' },
      { key: 'B', text: '$x = 1 + \\log_3 2$' },
      { key: 'C', text: '$x = \\log_2 6$' },
      { key: 'D', text: '$x = 2$' },
    ],
    correctAnswer: 'C',
    explanation: `Ta có:
$$2^{x-1} = 3 \\iff x - 1 = \\log_2 3 \\iff x = 1 + \\log_2 3 = \\log_2 2 + \\log_2 3 = \\log_2 6$$
Vậy nghiệm của phương trình là $x = \\log_2 6$. Chọn đáp án C.`,
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText: 'Giá trị cực đại của hàm số $f(x) = 2x^3 - 9x^2 - 24x + 1$ là',
    options: [
      { key: 'A', text: '$-1$' },
      { key: 'B', text: '$14$' },
      { key: 'C', text: '$4$' },
      { key: 'D', text: '$111$' },
    ],
    correctAnswer: 'B',
    explanation: `Tập xác định: $D = \\mathbb{R}$.
Ta có đạo hàm:
$$f'(x) = 6x^2 - 18x - 24 = 6(x^2 - 3x - 4)$$
Cho $f'(x) = 0 \\iff x = -1$ hoặc $x = 4$.
Bảng xét dấu $f'(x)$: $f'(x)$ đổi dấu từ dương ($+$) sang âm ($-$) khi đi qua điểm $x = -1$, nên hàm số đạt cực đại tại $x_{\\text{CĐ}} = -1$.
Giá trị cực đại của hàm số là:
$$y_{\\text{CĐ}} = f(-1) = 2(-1)^3 - 9(-1)^2 - 24(-1) + 1 = 14$$
Vậy chọn đáp án B.`,
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText: "Cho lăng trụ $ABC.A'B'C'$. Khẳng định nào sau đây đúng?",
    options: [
      { key: 'A', text: "$\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{BC}$" },
      { key: 'B', text: "$\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{BC'}$" },
      { key: 'C', text: "$\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{C'B}$" },
      { key: 'D', text: "$\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{B'C}$" },
    ],
    correctAnswer: 'A',
    explanation: `Vì $ABC.A'B'C'$ là hình lăng trụ nên tứ giác $ACC'A'$ là hình bình hành, suy ra $\\overrightarrow{A'C'} = \\overrightarrow{AC}$.
Áp dụng quy tắc ba điểm, ta có:
$$\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{BA} + \\overrightarrow{AC} = \\overrightarrow{BC}$$
Vậy chọn đáp án A.`,
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $y = f(x)$ xác định trên $[-1; 6]$ và có đồ thị như hình vẽ. Hàm số đã cho nghịch biến trên khoảng nào sau đây?',
    diagramType: 'DE03_GRAPH_P1_Q4',
    options: [
      { key: 'A', text: '$(-1; 2)$' },
      { key: 'B', text: '$(0; 2)$' },
      { key: 'C', text: '$(2; 6)$' },
      { key: 'D', text: '$(-2; 0)$' },
    ],
    correctAnswer: 'B',
    explanation: `Quan sát đồ thị hàm số $y = f(x)$ trên đoạn $[-1; 6]$:
- Trên khoảng $(0; 2)$, nhánh đồ thị đi xuống từ trái sang phải nên hàm số nghịch biến trên khoảng $(0; 2)$.
- Trên khoảng $(2; 6)$, đoạn thẳng đồ thị đi lên từ trái sang phải nên hàm số đồng biến.
- Trên khoảng $(-1; 2)$, đồ thị có phần đi lên rồi mới đi xuống nên hàm số không đơn điệu trên $(-1; 2)$.
Vậy hàm số đã cho nghịch biến trên khoảng $(0; 2)$. Chọn đáp án B.`,
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Biết $A = \\{x \\mid \\ln(x - 1) < 0\\}$, $B = \\{x \\mid x^2 - 2x - 8 < 0\\}$, khi đó $A \\cap B =$',
    options: [
      { key: 'A', text: '$(-4; 2)$' },
      { key: 'B', text: '$(-2; 2)$' },
      { key: 'C', text: '$(1; 2)$' },
      { key: 'D', text: '$(-2; 4)$' },
    ],
    correctAnswer: 'C',
    explanation: `- Xét bất phương trình $\\ln(x - 1) < 0 \\iff 0 < x - 1 < 1 \\iff 1 < x < 2 \\implies A = (1; 2)$.
- Xét bất phương trình $x^2 - 2x - 8 < 0 \\iff (x + 2)(x - 4) < 0 \\iff -2 < x < 4 \\implies B = (-2; 4)$.
Khi đó:
$$A \\cap B = (1; 2) \\cap (-2; 4) = (1; 2)$$
Vậy chọn đáp án C.`,
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho cấp số cộng $(u_n)$ với $u_1 = -1$, công sai $d = 3$. Tổng năm số hạng đầu tiên của cấp số cộng đó bằng',
    options: [
      { key: 'A', text: '$11$' },
      { key: 'B', text: '$5$' },
      { key: 'C', text: '$25$' },
      { key: 'D', text: '$50$' },
    ],
    correctAnswer: 'C',
    explanation: `Áp dụng công thức tính tổng $n$ số hạng đầu tiên của cấp số cộng:
$$S_5 = \\frac{5\\cdot [2u_1 + (5 - 1)d]}{2} = \\frac{5\\cdot [2(-1) + 4\\cdot 3]}{2} = \\frac{5\\cdot 10}{2} = 25$$
Vậy chọn đáp án C.`,
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Giá trị nhỏ nhất của hàm số $f(x) = x^4 - 8x^2 + a, (a \\in \\mathbb{R})$ trên đoạn $[-1; 3]$ bằng',
    options: [
      { key: 'A', text: '$-6$' },
      { key: 'B', text: '$a$' },
      { key: 'C', text: '$-16 + a$' },
      { key: 'D', text: '$9 + a$' },
    ],
    correctAnswer: 'C',
    explanation: `Hàm số $f(x) = x^4 - 8x^2 + a$ liên tục trên đoạn $[-1; 3]$.
Ta có đạo hàm:
$$f'(x) = 4x^3 - 16x = 4x(x^2 - 4)$$
Trên khoảng $(-1; 3)$:
$$f'(x) = 0 \\iff \\left[\\begin{array}{l} x = 0 \\in (-1; 3) \\\\ x = 2 \\in (-1; 3) \\\\ x = -2 \\notin (-1; 3) \\end{array}\\right.$$
Tính giá trị của hàm số tại các điểm:
- $f(-1) = (-1)^4 - 8(-1)^2 + a = -7 + a$
- $f(0) = a$
- $f(2) = 2^4 - 8\\cdot 2^2 + a = -16 + a$
- $f(3) = 3^4 - 8\\cdot 3^2 + a = 9 + a$
So sánh các giá trị trên, ta được $\\min_{[-1; 3]} f(x) = f(2) = -16 + a$.
Vậy chọn đáp án C.`,
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $y = f(x)$ xác định trên đoạn $[-1; 5]$ và có đồ thị như hình vẽ. Tập giá trị của hàm số $y = f(x)$ trên đoạn $[-1; 5]$ là',
    diagramType: 'DE03_GRAPH_P1_Q8',
    options: [
      { key: 'A', text: '$[-1; 5]$' },
      { key: 'B', text: '$[1; 3]$' },
      { key: 'C', text: '$[-1; 3]$' },
      { key: 'D', text: '$[1; 5]$' },
    ],
    correctAnswer: 'C',
    explanation: `Dựa vào đồ thị hàm số $y = f(x)$ liên tục trên đoạn $[-1; 5]$:
- Giá trị nhỏ nhất của hàm số trên đoạn $[-1; 5]$ là $\\min_{[-1; 5]} f(x) = f(5) = -1$.
- Giá trị lớn nhất của hàm số trên đoạn $[-1; 5]$ là $\\max_{[-1; 5]} f(x) = f(1) = 3$.
Do đó tập giá trị của hàm số $y = f(x)$ trên đoạn $[-1; 5]$ là $[-1; 3]$.
Vậy chọn đáp án C.`,
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Mỗi ngày bác Bình đều đi bộ để rèn luyện sức khỏe. Quãng đường đi bộ mỗi ngày (đơn vị: km) của bác Bình trong $20$ ngày được thống kê ở bảng sau. Khoảng biến thiên của mẫu số liệu ghép nhóm trên bằng',
    diagramType: 'DE03_TABLE_P1_Q9',
    options: [
      { key: 'A', text: '$1,2$' },
      { key: 'B', text: '$0,362$' },
      { key: 'C', text: '$13,39$' },
      { key: 'D', text: '$1,5$' },
    ],
    correctAnswer: 'D',
    explanation: `Trong mẫu số liệu ghép nhóm đã cho:
- Đầu mút trái của nhóm đầu tiên $[2,7; 3,0)$ là $a_1 = 2,7$.
- Đầu mút phải của nhóm cuối cùng $[3,9; 4,2)$ là $a_6 = 4,2$.
Khoảng biến thiên của mẫu số liệu ghép nhóm là:
$$R = a_6 - a_1 = 4,2 - 2,7 = 1,5$$
Vậy chọn đáp án D.`,
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText: 'Đường tiệm cận xiên của đồ thị hàm số $y = \\dfrac{x^2 + 2x - 2}{x - 2}$ là',
    options: [
      { key: 'A', text: '$y = -x + 3$' },
      { key: 'B', text: '$y = x + 3$' },
      { key: 'C', text: '$y = x - 3$' },
      { key: 'D', text: '$y = x + 4$' },
    ],
    correctAnswer: 'D',
    explanation: `Tập xác định: $D = \\mathbb{R} \\setminus \\{2\\}$.
Chia đa thức tử cho mẫu, ta có:
$$y = \\frac{x^2 + 2x - 2}{x - 2} = x + 4 + \\frac{6}{x - 2}$$
Vì $\\lim_{x \\to \\pm\\infty} [y - (x + 4)] = \\lim_{x \\to \\pm\\infty} \\frac{6}{x - 2} = 0$ nên đường thẳng $y = x + 4$ là đường tiệm cận xiên của đồ thị hàm số.
Vậy chọn đáp án D.`,
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Biết $(x + 1)^5 = a_0 + a_1(x - 1) + a_2(x - 1)^2 + \\dots + a_5(x - 1)^5$. Khi đó, giá trị của $a_1 + 2a_2 + 3a_3 + 4a_4 + 5a_5$ bằng bao nhiêu?',
    options: [
      { key: 'A', text: '$405$' },
      { key: 'B', text: '$5$' },
      { key: 'C', text: '$81$' },
      { key: 'D', text: '$15$' },
    ],
    correctAnswer: 'A',
    explanation: `Lấy đạo hàm hai vế của đẳng thức $(x + 1)^5 = a_0 + a_1(x - 1) + a_2(x - 1)^2 + \\dots + a_5(x - 1)^5$ theo biến $x$, ta được:
$$5(x + 1)^4 = a_1 + 2a_2(x - 1) + 3a_3(x - 1)^2 + 4a_4(x - 1)^3 + 5a_5(x - 1)^4$$
Thay $x = 2$ vào hai vế của phương trình trên:
$$a_1 + 2a_2 + 3a_3 + 4a_4 + 5a_5 = 5\\cdot (2 + 1)^4 = 5\\cdot 3^4 = 405$$
Vậy chọn đáp án A.`,
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Trong hình chóp $P.ABC$, tam giác $ABC$ là tam giác đều cạnh bằng $2$, $PA = PB = 2$, $PC = \\sqrt{6}$. Thể tích của khối chóp đã cho bằng',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$\\sqrt{3}$' },
      { key: 'C', text: '$2$' },
      { key: 'D', text: '$3$' },
    ],
    correctAnswer: 'A',
    explanation: `Gọi $M$ là trung điểm của cạnh $AB$.
Vì $\\triangle ABC$ và $\\triangle PAB$ đều là các tam giác đều cạnh bằng $2$ nên:
$$PM \\perp AB, \\quad CM \\perp AB, \\quad PM = CM = \\frac{2\\sqrt{3}}{2} = \\sqrt{3}$$
Xét $\\triangle PMC$ có:
$$PM^2 + CM^2 = (\\sqrt{3})^2 + (\\sqrt{3})^2 = 6 = PC^2$$
Theo định lý Pythagore đảo, $\\triangle PMC$ vuông tại $M$, tức là $PM \\perp CM$.
Kết hợp $PM \\perp AB$ và $AB \\cap CM = \\{M\\} \\subset (ABC)$, suy ra $PM \\perp (ABC)$.
Diện tích đáy $\\triangle ABC$ là $S_{\\triangle ABC} = \\dfrac{2^2\\sqrt{3}}{4} = \\sqrt{3}$.
Thể tích khối chóp $P.ABC$ là:
$$V_{P.ABC} = \\frac{1}{3} \\cdot PM \\cdot S_{\\triangle ABC} = \\frac{1}{3} \\cdot \\sqrt{3} \\cdot \\sqrt{3} = 1$$
Vậy chọn đáp án A.`,
  },

  // ============================================================================
  // PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG SAI (CÂU 1 - CÂU 4, ID 13 - 16)
  // ============================================================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có bảng biến thiên như sau. Xét tính đúng sai của các mệnh đề sau:',
    diagramType: 'DE03_BBT_P2_Q1',
    statements: [
      {
        key: 'a',
        text: 'Đồ thị hàm số đã cho có hai đường tiệm cận ngang.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Giá trị nhỏ nhất của hàm số trên $(-\\infty; +\\infty)$ bằng $8$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Hàm số đồng biến trên $(8; 38)$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Giá trị lớn nhất của hàm số trên $\\mathbb{R}$ bằng $142$.',
        correct: false,
      },
    ],
    explanation: `- **Ý a) Đúng**: Từ bảng biến thiên ta có $\\lim_{x \\to -\\infty} f(x) = 142$ và $\\lim_{x \\to +\\infty} f(x) = 14$. Do đó đồ thị hàm số có hai đường tiệm cận ngang là $y = 142$ và $y = 14$.
- **Ý b) Đúng**: Trên $\\mathbb{R}$, ta thấy $f(x) \\ge 8, \\forall x \\in \\mathbb{R}$ và $f(-1) = 8$ (với $\\lim_{x \\to +\\infty} f(x) = 14 > 8$). Vậy $\\min_{(-\\infty; +\\infty)} f(x) = 8$.
- **Ý c) Sai**: Hàm số đồng biến trên khoảng $(-1; 1)$, còn trên khoảng $(8; 38) \\subset (1; +\\infty)$ ta có $y' < 0$ nên hàm số nghịch biến trên $(8; 38)$.
- **Ý d) Sai**: Vì $\\lim_{x \\to -\\infty} f(x) = 142$ và không tồn tại $x_0 \\in \\mathbb{R}$ để $f(x_0) = 142$ nên hàm số không có giá trị lớn nhất trên $\\mathbb{R}$.`,
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hình chóp $S.ABC$ có tam giác $ABC$ vuông tại $B$, $BC = 3$, $BA = 2$, $SA$ vuông góc với mặt phẳng $(ABC)$ và $SA = 2$. Xét tính đúng sai của các mệnh đề sau:',
    statements: [
      {
        key: 'a',
        text: 'Thể tích khối chóp $S.ABC$ bằng $6$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Khoảng cách từ $C$ đến mặt phẳng $(SAB)$ bằng $5$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Số đo góc nhị diện $[S, BC, A]$ bằng $45^\\circ$.',
        correct: true,
      },
      {
        key: 'd',
        text: '$\\overrightarrow{SB} \\cdot \\overrightarrow{AC} = 4$.',
        correct: true,
      },
    ],
    explanation: `- **Ý a) Sai**: Diện tích đáy $\\triangle ABC$ vuông tại $B$ là $S_{\\triangle ABC} = \\frac{1}{2} BA \\cdot BC = \\frac{1}{2} \\cdot 2 \\cdot 3 = 3$.
  Thể tích khối chóp $S.ABC$ là $V = \\frac{1}{3} SA \\cdot S_{\\triangle ABC} = \\frac{1}{3} \\cdot 2 \\cdot 3 = 2 \\neq 6$.
- **Ý b) Sai**: Ta có $BC \\perp AB$ và $BC \\perp SA$ (do $SA \\perp (ABC)$), suy ra $BC \\perp (SAB)$.
  Do đó $d(C, (SAB)) = BC = 3 \\neq 5$.
- **Ý c) Đúng**: Vì $BC \\perp (SAB)$ nên $BC \\perp AB$ và $BC \\perp SB$. Góc phẳng nhị diện của $[S, BC, A]$ là $\\widehat{SBA}$.
  Tam giác $SAB$ vuông cân tại $A$ ($SA = AB = 2$) nên $\\widehat{SBA} = 45^\\circ$.
- **Ý d) Đúng**: Ta có $\\overrightarrow{SB} = \\overrightarrow{AB} - \\overrightarrow{AS}$ và $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC}$.
  Do $AS \\perp AB$, $AS \\perp BC$, $AB \\perp BC$ nên:
  $$\\overrightarrow{SB} \\cdot \\overrightarrow{AC} = (\\overrightarrow{AB} - \\overrightarrow{AS}) \\cdot (\\overrightarrow{AB} + \\overrightarrow{BC}) = AB^2 = 2^2 = 4$$`,
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Khảo sát chiều cao của $20$ học sinh nam lớp 12A của một trường THPT X, người ta được kết quả thống kê trong bảng sau. Xét tính đúng sai của các mệnh đề sau:',
    diagramType: 'DE03_TABLE_P2_Q3',
    statements: [
      {
        key: 'a',
        text: 'Gọi $x_1; x_2; \\dots; x_{20}$ là mẫu số liệu gốc gồm chiều cao của $20$ học sinh trên được xếp theo thứ tự không giảm. Khi đó $x_3 \\in [165; 170)$ và $x_9 \\in [170; 175)$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Tứ phân vị thứ ba của mẫu số liệu ghép nhóm đã cho bằng $175$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Khoảng tứ phân vị của mẫu số liệu ghép nhóm đã cho bằng $8,5$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Chọn ngẫu nhiên một học sinh trong nhóm khảo sát nói trên, xác suất chọn được học sinh có chiều cao từ $175\\text{ cm}$ trở lên bằng $0,25$.',
        correct: true,
      },
    ],
    explanation: `- **Ý a) Sai**: Nhóm đầu tiên $[160; 165)$ có $3$ học sinh nên $x_1, x_2, x_3 \\in [160; 165)$. Nhóm thứ hai $[165; 170)$ có $5$ học sinh nên $x_4, \\dots, x_8 \\in [165; 170)$, và $x_9, \\dots, x_{15} \\in [170; 175)$. Vì $x_3 \\in [160; 165) \\notin [165; 170)$ nên mệnh đề a) sai.
- **Ý b) Đúng**: Cỡ mẫu $n = 20$. Tứ phân vị thứ ba $Q_3$ thuộc nhóm $[170; 175)$:
  $$Q_3 = 170 + \\frac{\\frac{3\\cdot 20}{4} - (3 + 5)}{7} \\cdot (175 - 170) = 170 + \\frac{15 - 8}{7} \\cdot 5 = 175$$
- **Ý c) Sai**: Tứ phân vị thứ nhất $Q_1$ thuộc nhóm $[165; 170)$:
  $$Q_1 = 165 + \\frac{\\frac{20}{4} - 3}{5} \\cdot (170 - 165) = 165 + \\frac{2}{5}\\cdot 5 = 167$$
  Khoảng tứ phân vị là $\\Delta_Q = Q_3 - Q_1 = 175 - 167 = 8 \\neq 8,5$.
- **Ý d) Đúng**: Số học sinh có chiều cao từ $175\\text{ cm}$ trở lên là $4 + 1 = 5$ (học sinh).
  Xác suất chọn được học sinh có chiều cao từ $175\\text{ cm}$ trở lên là $P = \\dfrac{5}{20} = 0,25$.`,
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Lần lượt gieo hai con xúc xắc cân đối và ghi lại số chấm xuất hiện ở mặt trên. Gọi $x$ là số chấm xuất hiện ở lần gieo thứ nhất, $y$ là số chấm xuất hiện ở lần gieo thứ hai; dùng $(x; y)$ để biểu diễn kết quả của một phép thử. Gọi "$x + y = 7$" là biến cố $A$, "$xy = 2k - 1 \\ (k \\in \\mathbb{N}^*)$" là biến cố $B$, "$x \\le 3$" là biến cố $C$. Khi đó:',
    statements: [
      {
        key: 'a',
        text: '$A$ và $B$ độc lập.',
        correct: false,
      },
      {
        key: 'b',
        text: '$A$ và $B$ là hai biến cố xung khắc.',
        correct: true,
      },
      {
        key: 'c',
        text: '$A$ và $C$ độc lập.',
        correct: true,
      },
      {
        key: 'd',
        text: '$B$ và $C$ độc lập.',
        correct: false,
      },
    ],
    explanation: `Không gian mẫu có $n(\\Omega) = 6 \\cdot 6 = 36$.
- Biến cố $A = \\{(1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)\\} \\implies n(A) = 6 \\implies P(A) = \\dfrac{6}{36} = \\dfrac{1}{6}$.
- Biến cố $B$: "$xy$ là số lẻ" $\\iff x, y \\in \\{1; 3; 5\\} \\implies n(B) = 3 \\cdot 3 = 9 \\implies P(B) = \\dfrac{9}{36} = \\dfrac{1}{4}$.
- Biến cố $C$: "$x \\le 3$" $\\iff x \\in \\{1; 2; 3\\}, y \\in \\{1; 2; 3; 4; 5; 6\\} \\implies n(C) = 3 \\cdot 6 = 18 \\implies P(C) = \\dfrac{18}{36} = \\dfrac{1}{2}$.

Xét từng mệnh đề:
- **Ý a) Sai, Ý b) Đúng**: Khi $x, y$ đều là số lẻ thì tổng $x + y$ là số chẵn nên $x + y \\neq 7$. Suy ra $A \\cap B = \\varnothing$, tức $A$ và $B$ là hai biến cố xung khắc, và $P(A \\cap B) = 0 \\neq P(A)P(B) = \\dfrac{1}{24}$ nên $A, B$ không độc lập.
- **Ý c) Đúng**: Ta có $A \\cap C = \\{(1; 6), (2; 5), (3; 4)\\} \\implies P(A \\cap C) = \\dfrac{3}{36} = \\dfrac{1}{12} = P(A)\\cdot P(C)$. Vậy $A$ và $C$ độc lập.
- **Ý d) Sai**: Biến cố $B \\cap C$ gồm các cặp $(x; y)$ với $x \\in \\{1; 3\\}$ và $y \\in \\{1; 3; 5\\}$, nên $n(B \\cap C) = 2 \\cdot 3 = 6 \\implies P(B \\cap C) = \\dfrac{6}{36} = \\dfrac{1}{6} \\neq P(B)\\cdot P(C) = \\dfrac{1}{8}$. Vậy $B$ và $C$ không độc lập.`,
  },

  // ============================================================================
  // PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (CÂU 1 - CÂU 6, ID 17 - 22)
  // ============================================================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Cho hình nón cụt có tâm hai đáy trên và dưới lần lượt là $O_1, O_2$, đường sinh $AB = 1$ (điểm $A$ nằm trên đáy trên), đồng thời $BO_2 = 2AO_1$. Chu vi đường tròn đáy dưới tâm $O_2$ bằng $\\dfrac{2\\pi}{3}$. Một con kiến xuất phát từ điểm $A$, bò trên mặt xung quanh của hình nón cụt một vòng đến điểm $B$. Khi đó, quãng đường ngắn nhất mà con kiến bò được là bao nhiêu? (Làm tròn kết quả đến hàng phần trăm)',
    correctAnswer: '1,73',
    explanation: `Gọi $r_1 = AO_1$ là bán kính đáy trên và $r_2 = BO_2$ là bán kính đáy dưới.
Chu vi đường tròn đáy dưới là:
$$2\\pi r_2 = \\frac{2\\pi}{3} \\implies r_2 = BO_2 = \\frac{1}{3} \\implies r_1 = AO_1 = \\frac{1}{6}$$
Kéo dài đường sinh $BA$ cắt trục $O_2O_1$ tại đỉnh $S$ của hình nón chứa hình nón cụt.
Vì $AO_1 \\parallel BO_2$ và $BO_2 = 2AO_1$ nên $A$ là trung điểm của $SB$.
Mà $AB = 1 \\implies SA = 1$ và $SB = 2$.
Trải phẳng mặt xung quanh của hình nón đỉnh $S$ theo đường sinh $SB$, ta được hình quạt tròn tâm $S$, bán kính $R = SB = 2$ (hai bán kính biên là $SB$ và $SB'$).
Độ dài cung $\\overset{\\frown}{BB'}$ bằng chu vi đáy dưới là $l = \\dfrac{2\\pi}{3}$, suy ra góc ở tâm của hình quạt là:
$$\\widehat{BSB'} = \\frac{l}{SB} = \\frac{\\frac{2\\pi}{3}}{2} = \\frac{\\pi}{3} = 60^\\circ$$
Quãng đường ngắn nhất con kiến bò từ $A$ một vòng quanh mặt xung quanh đến $B$ chính là độ dài đoạn thẳng $AB'$ trong $\\triangle SAB'$:
$$AB' = \\sqrt{SA^2 + SB'^2 - 2\\cdot SA\\cdot SB'\\cdot \\cos 60^\\circ} = \\sqrt{1^2 + 2^2 - 2\\cdot 1\\cdot 2\\cdot \\frac{1}{2}} = \\sqrt{3} \\approx 1,73$$
Đáp số: $1,73$.`,
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Biết dãy số $(a_n)$ là cấp số nhân có các số hạng đều dương, $a_1 = 4$, $S_3 = 84$. Khi đó giá trị của $\\log_2(a_1 a_2 a_3 \\cdots a_8)$ bằng bao nhiêu?',
    correctAnswer: '72',
    explanation: `Gọi $q > 0$ là công bội của cấp số nhân $(a_n)$.
Theo giả thiết:
$$S_3 = a_1(1 + q + q^2) = 4(1 + q + q^2) = 84 \\iff q^2 + q - 20 = 0 \\iff \\left[\\begin{array}{l} q = 4 \\text{ (nhận)} \\\\ q = -5 \\text{ (loại do } q > 0\\text{)} \\end{array}\\right.$$
Với $a_1 = 4 = 2^2$ và $q = 4 = 2^2$, tích của $8$ số hạng đầu tiên là:
$$a_1 a_2 a_3 \\cdots a_8 = a_1^8 \\cdot q^{1 + 2 + \\dots + 7} = 4^8 \\cdot 4^{28} = 4^{36} = 2^{72}$$
Do đó:
$$\\log_2(a_1 a_2 a_3 \\cdots a_8) = \\log_2(2^{72}) = 72$$
Đáp số: $72$.`,
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Trong bốn loại trái cây $A, B, C, D$, người ta muốn chọn tổng cộng $12$ quả. Biết rằng loại $A$ được chọn không quá $1$ quả, mỗi loại $B, C$ được chọn ít nhất $1$ quả và loại $D$ được chọn ít nhất $2$ quả. Hỏi có bao nhiêu cách chọn? (Biết rằng mỗi loại trái cây đều có ít nhất $12$ quả.)',
    correctAnswer: '81',
    explanation: `Gọi $x_A, x_B, x_C, x_D$ lần lượt là số quả được chọn thuộc các loại $A, B, C, D$.
Ta có:
$$\\begin{cases} x_A + x_B + x_C + x_D = 12 \\\\ x_A \\in \\{0; 1\\}, \\quad x_B \\ge 1, \\quad x_C \\ge 1, \\quad x_D \\ge 2 \\end{cases}$$
Đặt $b = x_B - 1 \\ge 0$, $c = x_C - 1 \\ge 0$, $d = x_D - 2 \\ge 0$ ($b, c, d \\in \\mathbb{N}$). Phương trình trở thành:
$$x_A + b + c + d = 8$$
- **Trường hợp 1 ($x_A = 0$)**: $b + c + d = 8$.
  Số nghiệm nguyên không âm $(b, c, d)$ là $C_{8 + 3 - 1}^{3 - 1} = C_{10}^2 = 45$ (cách).
- **Trường hợp 2 ($x_A = 1$)**: $b + c + d = 7$.
  Số nghiệm nguyên không âm $(b, c, d)$ là $C_{7 + 3 - 1}^{3 - 1} = C_9^2 = 36$ (cách).
Vậy tổng số cách chọn thỏa mãn yêu cầu bài toán là $45 + 36 = 81$ (cách).
Đáp số: $81$.`,
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Như hình vẽ, trong tứ diện $S.ABC$, các đoạn thẳng $AS, AB, AC$ đôi một vuông góc và $AS = AB = AC = 2\\sqrt{2}$. Các điểm $E, F$ lần lượt là trung điểm của các cạnh $SA, SB$; điểm $G$ thuộc cạnh $SC$ sao cho $\\overrightarrow{SG} = \\dfrac{2}{3}\\overrightarrow{SC}$. Khi đó, thể tích của khối đa diện $EFG-ABC$ bằng bao nhiêu? (Làm tròn kết quả đến hàng phần trăm)',
    diagramType: 'DE03_TETRAHEDRON_P3_Q4',
    correctAnswer: '3,14',
    explanation: `Vì $AS, AB, AC$ đôi một vuông góc và $AS = AB = AC = 2\\sqrt{2}$ nên thể tích khối tứ diện $S.ABC$ là:
$$V_{S.ABC} = \\frac{1}{6} \\cdot AS \\cdot AB \\cdot AC = \\frac{1}{6} \\cdot (2\\sqrt{2})^3 = \\frac{8\\sqrt{2}}{3}$$
Áp dụng công thức tỉ số thể tích cho khối chóp tam giác $S.ABC$:
$$\\frac{V_{S.EFG}}{V_{S.ABC}} = \\frac{SE}{SA} \\cdot \\frac{SF}{SB} \\cdot \\frac{SG}{SC} = \\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{2}{3} = \\frac{1}{6}$$
Suy ra thể tích khối đa diện $EFG-ABC$ là:
$$V_{EFG-ABC} = V_{S.ABC} - V_{S.EFG} = \\frac{5}{6} V_{S.ABC} = \\frac{5}{6} \\cdot \\frac{8\\sqrt{2}}{3} = \\frac{20\\sqrt{2}}{9} \\approx 3,14$$
Đáp số: $3,14$.`,
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Một giờ hoạt động ngoài trời của lớp 1/1 trường tiểu học X, cô giáo cho $35$ học sinh lớp mình nắm tay nhau xếp thành một vòng tròn để chơi trò chơi "Mèo bắt Chuột". Sau khi ổn định, cô gọi tên ngẫu nhiên $6$ học sinh trong lớp ra giữa vòng ($3$ em làm "Mèo", $3$ em làm "Chuột"). Xác suất $6$ em được gọi tên không có hai em nào đứng cạnh nhau trong vòng tròn bằng $a$. Tính $11594a$.',
    correctAnswer: '4095',
    explanation: `Số cách chọn ngẫu nhiên $6$ học sinh từ $35$ học sinh trên vòng tròn là $n(\\Omega) = C_{35}^6$.
Số cách chọn $k = 6$ học sinh từ $n = 35$ học sinh xếp trên một vòng tròn sao cho không có hai học sinh nào đứng cạnh nhau (theo bổ đề Kaplansky trên đường tròn) là:
$$N = \\frac{n}{n - k} C_{n - k}^k = \\frac{35}{35 - 6} C_{35 - 6}^6 = \\frac{35}{29} C_{29}^6$$
Do đó xác suất $a$ cần tìm là:
$$a = \\frac{\\frac{35}{29} C_{29}^6}{C_{35}^6} = \\frac{28 \\cdot 27 \\cdot 26 \\cdot 25 \\cdot 24}{34 \\cdot 33 \\cdot 32 \\cdot 31 \\cdot 30} = \\frac{4095}{11594}$$
Suy ra:
$$11594a = 11594 \\cdot \\frac{4095}{11594} = 4095$$
Đáp số: $4095$.`,
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Gọi $a, b, c$ lần lượt là độ dài các cạnh đối diện với các góc $A, B, C$ của tam giác $ABC$. Biết $\\tan^2 C = \\dfrac{1 - \\cos B}{1 + \\cos B}$. Nếu $b = 2$, hãy tìm giá trị của $\\cos B$ khi diện tích tam giác $ABC$ đạt giá trị lớn nhất (làm tròn kết quả đến hàng phần trăm).',
    correctAnswer: '0,37',
    explanation: `Trong $\\triangle ABC$, ta có $\\dfrac{1 - \\cos B}{1 + \\cos B} = \\tan^2\\dfrac{B}{2}$, suy ra $\\tan^2 C = \\tan^2\\dfrac{B}{2}$.
Vì $B + C < \\pi \\implies \\dfrac{B}{2} + C < \\pi - \\dfrac{B}{2} < \\pi$ nên $C = \\dfrac{B}{2} \\iff B = 2C$ và $A = \\pi - 3C$ (với $0 < C < \\dfrac{\\pi}{3}$).
Theo định lý sin với $b = 2$:
$$c = \\frac{b\\sin C}{\\sin B} = \\frac{2\\sin C}{\\sin 2C} = \\frac{1}{\\cos C}$$
Diện tích tam giác $ABC$ là:
$$S = \\frac{1}{2} b c \\sin A = \\frac{1}{2} \\cdot 2 \\cdot \\frac{1}{\\cos C} \\cdot \\sin 3C = \\frac{\\sin C (4\\cos^2 C - 1)}{\\cos C} = \\tan C (4\\cos^2 C - 1)$$
Đặt $t = \\tan C \\in (0; \\sqrt{3})$, ta có $\\cos^2 C = \\dfrac{1}{1 + t^2}$, suy ra:
$$S(t) = t\\left(\\frac{4}{1 + t^2} - 1\\right) = \\frac{3t - t^3}{t^2 + 1}$$
Lập đạo hàm trên $(0; \\sqrt{3})$:
$$S'(t) = \\frac{-t^4 - 6t^2 + 3}{(t^2 + 1)^2} = 0 \\iff t^2 = 2\\sqrt{3} - 3$$
Hàm số $S(t)$ đạt giá trị lớn nhất khi $\\tan^2\\dfrac{B}{2} = t^2 = 2\\sqrt{3} - 3$.
Khi đó giá trị của $\\cos B$ là:
$$\\cos B = \\frac{1 - \\tan^2\\frac{B}{2}}{1 + \\tan^2\\frac{B}{2}} = \\frac{1 - (2\\sqrt{3} - 3)}{1 + (2\\sqrt{3} - 3)} = \\frac{4 - 2\\sqrt{3}}{2\\sqrt{3} - 2} = \\frac{\\sqrt{3} - 1}{2} \\approx 0,37$$
Đáp số: $0,37$.`,
  },
];
