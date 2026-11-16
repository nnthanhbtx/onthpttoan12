import { Question } from '../types';

export const QUESTIONS_DE10: Question[] = [
  // =========================================================================
  // PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn (12 câu)
  // =========================================================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Cho hàm số $y = f(x)$ có bảng biến thiên như hình vẽ dưới đây:\nĐồ thị hàm số $y = f(x)$ có bao nhiêu đường tiệm cận?',
    diagramType: 'DE10_BBT_P1_Q1',
    options: [
      { key: 'A', text: '$2$.' },
      { key: 'B', text: '$3$.' },
      { key: 'C', text: '$1$.' },
      { key: 'D', text: '$4$.' },
    ],
    correctAnswer: 'B',
    explanation: `Từ bảng biến thiên của hàm số $y = f(x)$, ta có:
- $\\lim_{x \\to -\\infty} f(x) = -1 \\implies$ đường thẳng $y = -1$ là một tiệm cận ngang.
- $\\lim_{x \\to +\\infty} f(x) = 2 \\implies$ đường thẳng $y = 2$ là một tiệm cận ngang.
- $\\lim_{x \\to 1^-} f(x) = -\\infty$ và $\\lim_{x \\to 1^+} f(x) = +\\infty \\implies$ đường thẳng $x = 1$ là một tiệm cận đứng.

Vậy đồ thị hàm số $y = f(x)$ có tất cả $3$ đường tiệm cận. Chọn B.`,
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Nếu $a = \\log_3 5$, $5^b = 6$, thì $ab - \\log_3 2 =$',
    options: [
      { key: 'A', text: '$1$.' },
      { key: 'B', text: '$-1$.' },
      { key: 'C', text: '$2$.' },
      { key: 'D', text: '$-2$.' },
    ],
    correctAnswer: 'A',
    explanation: `Từ giả thiết $5^b = 6 \\implies b = \\log_5 6$.
Khi đó:
$$ab - \\log_3 2 = \\log_3 5 \\cdot \\log_5 6 - \\log_3 2 = \\log_3 6 - \\log_3 2 = \\log_3 \\left(\\dfrac{6}{2}\\right) = \\log_3 3 = 1$$
Chọn A.`,
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Trong không gian $Oxyz$, cosin của góc giữa hai vectơ $\\overrightarrow{u}(10; 10; 20),\\ \\overrightarrow{v}(10; -20; 10)$ là',
    options: [
      { key: 'A', text: '$\\dfrac{1}{6}$.' },
      { key: 'B', text: '$-\\dfrac{1}{6}$.' },
      { key: 'C', text: '$\\dfrac{1}{2}$.' },
      { key: 'D', text: '$-\\dfrac{1}{2}$.' },
    ],
    correctAnswer: 'A',
    explanation: `Ta có:
$$\\cos\\left(\\overrightarrow{u}, \\overrightarrow{v}\\right) = \\dfrac{\\overrightarrow{u} \\cdot \\overrightarrow{v}}{|\\overrightarrow{u}| \\cdot |\\overrightarrow{v}|} = \\dfrac{10 \\cdot 10 + 10 \\cdot (-20) + 20 \\cdot 10}{\\sqrt{10^2 + 10^2 + 20^2} \\cdot \\sqrt{10^2 + (-20)^2 + 10^2}} = \\dfrac{100}{\\sqrt{600} \\cdot \\sqrt{600}} = \\dfrac{100}{600} = \\dfrac{1}{6}$$
Chọn A.`,
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Trong hình hộp chữ nhật $ABCD - A_1B_1C_1D_1$, đường thẳng $A_1C$ cắt mặt phẳng $AB_1D_1$ tại điểm $M$, hai đường thẳng $A_1C_1$ và $B_1D_1$ cắt nhau tại điểm $O$. Khi đó kết luận đúng là',
    options: [
      { key: 'A', text: 'Ba điểm $A, M, O$ xác định một mặt phẳng.' },
      { key: 'B', text: 'Ba điểm $A, M, O$ thẳng hàng.' },
      { key: 'C', text: 'Bốn điểm $D, D_1, O, M$ đồng phẳng.' },
      { key: 'D', text: 'Bốn điểm $A, B_1, B, M$ đồng phẳng.' },
    ],
    correctAnswer: 'B',
    explanation: `Xét hai mặt phẳng $(AA_1C_1C)$ và $(AB_1D_1)$:
- Điểm $A$ là điểm chung thứ nhất của hai mặt phẳng.
- Vì $O = A_1C_1 \\cap B_1D_1$ nên $O \\in A_1C_1 \\subset (AA_1C_1C)$ và $O \\in B_1D_1 \\subset (AB_1D_1)$, suy ra $O$ là điểm chung thứ hai.
Do đó giao tuyến của hai mặt phẳng $(AA_1C_1C)$ và $(AB_1D_1)$ là đường thẳng $AO$.

Mặt khác, $M = A_1C \\cap (AB_1D_1)$ mà $A_1C \\subset (AA_1C_1C)$, nên $M$ thuộc giao tuyến $AO$ của hai mặt phẳng.
Vậy ba điểm $A, M, O$ thẳng hàng. Chọn B.`,
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Nếu $\\sin\\left(\\alpha + \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{4}$, thì $\\cos\\left(\\alpha + \\dfrac{5\\pi}{6}\\right) =$',
    options: [
      { key: 'A', text: '$\\dfrac{1}{4}$.' },
      { key: 'B', text: '$-\\dfrac{1}{4}$.' },
      { key: 'C', text: '$\\pm\\dfrac{1}{4}$.' },
      { key: 'D', text: '$\\dfrac{\\sqrt{15}}{4}$.' },
    ],
    correctAnswer: 'B',
    explanation: `Ta có:
$$\\alpha + \\dfrac{5\\pi}{6} = \\left(\\alpha + \\dfrac{\\pi}{3}\\right) + \\dfrac{\\pi}{2}$$
Áp dụng công thức $\\cos\\left(x + \\dfrac{\\pi}{2}\\right) = -\\sin x$, ta được:
$$\\cos\\left(\\alpha + \\dfrac{5\\pi}{6}\\right) = \\cos\\left[\\left(\\alpha + \\dfrac{\\pi}{3}\\right) + \\dfrac{\\pi}{2}\\right] = -\\sin\\left(\\alpha + \\dfrac{\\pi}{3}\\right) = -\\dfrac{1}{4}$$
Chọn B.`,
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Thời gian truy cập internet mỗi buổi tối của một số học sinh lớp 12 được cho trong bảng sau:\nSố trung vị $M_e$ của mẫu số liệu ghép nhóm này là',
    diagramType: 'DE10_TABLE_P1_Q6',
    options: [
      { key: 'A', text: '$18$.' },
      { key: 'B', text: '$18{,}1$.' },
      { key: 'C', text: '$18{,}2$.' },
      { key: 'D', text: '$18{,}3$.' },
    ],
    correctAnswer: 'B',
    explanation: `Cỡ mẫu là $n = 3 + 12 + 15 + 24 + 2 = 56$.
Ta có $\\dfrac{n}{2} = 28$.
Tần số tích lũy của các nhóm lần lượt là:
- Nhóm 1 $[9{,}5; 12{,}5)$: $cf_1 = 3$
- Nhóm 2 $[12{,}5; 15{,}5)$: $cf_2 = 3 + 12 = 15$
- Nhóm 3 $[15{,}5; 18{,}5)$: $cf_3 = 15 + 15 = 30 \\ge 28$

Suy ra nhóm chứa trung vị là nhóm 3: $[15{,}5; 18{,}5)$ với $u_3 = 15{,}5$, $n_3 = 15$, $cf_2 = 15$, độ dài nhóm $h = 3$.
Số trung vị của mẫu số liệu ghép nhóm là:
$$M_e = 15{,}5 + \\dfrac{28 - 15}{15} \\cdot 3 = 15{,}5 + \\dfrac{13}{5} = 15{,}5 + 2{,}6 = 18{,}1$$
Chọn B.`,
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Trong các hàm số sau, hàm số thỏa mãn điều kiện “Với mọi $x_1, x_2 \\in (0; +\\infty)$ và $x_1 \\neq x_2$, ta có $\\dfrac{f(x_1) - f(x_2)}{x_1 - x_2} < 0$” là',
    options: [
      { key: 'A', text: '$f(x) = -x^2 - 2x + 1$.' },
      { key: 'B', text: '$f(x) = x - \\dfrac{1}{x}$.' },
      { key: 'C', text: '$f(x) = x + 1$.' },
      { key: 'D', text: '$f(x) = \\log_2(2x) + 1$.' },
    ],
    correctAnswer: 'A',
    explanation: `Điều kiện “$\\forall x_1, x_2 \\in (0; +\\infty),\\ x_1 \\neq x_2: \\dfrac{f(x_1) - f(x_2)}{x_1 - x_2} < 0$” tương đương với hàm số $f(x)$ nghịch biến trên khoảng $(0; +\\infty)$.
Xét các phương án:
- Phương án A: $f(x) = -x^2 - 2x + 1$ có $f'(x) = -2x - 2 < 0,\\ \\forall x \\in (0; +\\infty) \\implies f(x)$ nghịch biến trên $(0; +\\infty)$.
- Các phương án B, C, D đều có đạo hàm dương trên $(0; +\\infty)$ nên đồng biến trên $(0; +\\infty)$.
Chọn A.`,
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Cho các điểm $A(a; -3; 5)$, $B(0; b; 2)$, $C(2; 7; -1)$. Nếu ba điểm $A, B, C$ thẳng hàng thì giá trị của $a, b$ lần lượt là',
    options: [
      { key: 'A', text: '$-2; 3$.' },
      { key: 'B', text: '$-1; 2$.' },
      { key: 'C', text: '$1; 3$.' },
      { key: 'D', text: '$-2; 2$.' },
    ],
    correctAnswer: 'D',
    explanation: `Ta có:
$$\\overrightarrow{AB} = (-a;\\ b + 3;\\ -3), \\quad \\overrightarrow{BC} = (2;\\ 7 - b;\\ -3)$$
Ba điểm $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ cùng phương:
$$\\dfrac{-a}{2} = \\dfrac{b + 3}{7 - b} = \\dfrac{-3}{-3} = 1 \\iff \\begin{cases} -a = 2 \\\\ b + 3 = 7 - b \\end{cases} \\iff \\begin{cases} a = -2 \\\\ b = 2 \\end{cases}$$
Chọn D.`,
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Cho dãy cấp số nhân dương $(a_n)$, biết $a_2 a_4 = 16$, đồng thời $a_3, 10, \\dfrac{a_6}{2}$ lập thành một cấp số cộng. Khi đó $a_1 + a_4 + a_7 =$',
    options: [
      { key: 'A', text: '$157$.' },
      { key: 'B', text: '$156$.' },
      { key: 'C', text: '$74$.' },
      { key: 'D', text: '$73$.' },
    ],
    correctAnswer: 'D',
    explanation: `Vì $(a_n)$ là cấp số nhân có các số hạng dương nên:
$$a_3^2 = a_2 a_4 = 16 \\implies a_3 = 4$$
Mặt khác, $a_3, 10, \\dfrac{a_6}{2}$ lập thành cấp số cộng nên:
$$a_3 + \\dfrac{a_6}{2} = 2 \\cdot 10 = 20 \\implies 4 + \\dfrac{a_6}{2} = 20 \\implies a_6 = 32$$
Gọi $q > 0$ là công bội của cấp số nhân:
$$q^3 = \\dfrac{a_6}{a_3} = \\dfrac{32}{4} = 8 \\implies q = 2$$
Suy ra:
- $a_1 = \\dfrac{a_3}{q^2} = \\dfrac{4}{4} = 1$
- $a_4 = a_1 q^3 = 1 \\cdot 8 = 8$
- $a_7 = a_4 q^3 = 8 \\cdot 8 = 64$

Vậy $a_1 + a_4 + a_7 = 1 + 8 + 64 = 73$. Chọn D.`,
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Cho đường cong $y = f(x) = x \\ln x$. Tiếp tuyến $l$ của đường cong tại điểm $(1; f(1))$ cắt trục tung tại điểm có tung độ bằng bao nhiêu?',
    options: [
      { key: 'A', text: '$-2$.' },
      { key: 'B', text: '$-1$.' },
      { key: 'C', text: '$1$.' },
      { key: 'D', text: '$2$.' },
    ],
    correctAnswer: 'B',
    explanation: `Ta có $f(x) = x \\ln x\\ (x > 0) \\implies f(1) = 1 \\cdot \\ln 1 = 0$.
Đạo hàm: $f'(x) = \\ln x + 1 \\implies f'(1) = \\ln 1 + 1 = 1$.
Phương trình tiếp tuyến $l$ tại điểm $(1; 0)$ là:
$$y = f'(1)(x - 1) + f(1) \\iff y = x - 1$$
Cho $x = 0 \\implies y = -1$. Vậy tiếp tuyến $l$ cắt trục tung tại điểm có tung độ bằng $-1$. Chọn B.`,
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Như hình vẽ, trong hình hộp $ABCD - A_1B_1C_1D_1$, điểm $M$ là giao điểm của $A_1C_1$ và $B_1D_1$. Biết $\\overrightarrow{AB} = \\overrightarrow{a}$, $\\overrightarrow{AD} = \\overrightarrow{b}$, $\\overrightarrow{AA_1} = \\overrightarrow{c}$. Khi đó trong các vectơ sau, vectơ bằng $\\overrightarrow{BM}$ là',
    diagramType: 'DE10_PARALLELEPIPED_P1_Q11',
    options: [
      { key: 'A', text: '$\\dfrac{1}{2}\\overrightarrow{a} + \\dfrac{1}{2}\\overrightarrow{b} + \\overrightarrow{c}$.' },
      { key: 'B', text: '$-\\dfrac{1}{2}\\overrightarrow{a} + \\dfrac{1}{2}\\overrightarrow{b} + \\overrightarrow{c}$.' },
      { key: 'C', text: '$-\\dfrac{1}{2}\\overrightarrow{a} - \\dfrac{1}{2}\\overrightarrow{b} + \\overrightarrow{c}$.' },
      { key: 'D', text: '$\\dfrac{1}{2}\\overrightarrow{a} - \\dfrac{1}{2}\\overrightarrow{b} + \\overrightarrow{c}$.' },
    ],
    correctAnswer: 'B',
    explanation: `Vì $M$ là giao điểm hai đường chéo của hình bình hành $A_1B_1C_1D_1$ nên $M$ là trung điểm của $B_1D_1$.
Ta có:
$$\\overrightarrow{BM} = \\overrightarrow{BB_1} + \\overrightarrow{B_1M} = \\overrightarrow{AA_1} + \\dfrac{1}{2}\\overrightarrow{B_1D_1} = \\overrightarrow{AA_1} + \\dfrac{1}{2}\\overrightarrow{BD}$$
Mà $\\overrightarrow{BD} = \\overrightarrow{AD} - \\overrightarrow{AB} = \\overrightarrow{b} - \\overrightarrow{a}$, suy ra:
$$\\overrightarrow{BM} = \\overrightarrow{c} + \\dfrac{1}{2}(\\overrightarrow{b} - \\overrightarrow{a}) = -\\dfrac{1}{2}\\overrightarrow{a} + \\dfrac{1}{2}\\overrightarrow{b} + \\overrightarrow{c}$$
Chọn B.`,
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Hình chóp cụt lục giác đều có cạnh đáy trên và cạnh đáy dưới lần lượt là $2$ và $6$, cạnh bên bằng $5$. Khi đó diện tích toàn phần và thể tích của nó lần lượt là',
    options: [
      { key: 'A', text: '$16\\sqrt{21} + 60\\sqrt{3};\\ 26\\sqrt{3}$.' },
      { key: 'B', text: '$16\\sqrt{21} + 60\\sqrt{3};\\ 52\\sqrt{3}$.' },
      { key: 'C', text: '$24\\sqrt{21} + 60\\sqrt{3};\\ 78\\sqrt{3}$.' },
      { key: 'D', text: '$24\\sqrt{21} + 60\\sqrt{3};\\ 84\\sqrt{3}$.' },
    ],
    correctAnswer: 'C',
    explanation: `1. **Tính diện tích toàn phần**:
- Đáy trên là lục giác đều cạnh $a_1 = 2$ nên có diện tích:
$$S_1 = 6 \\cdot \\dfrac{a_1^2\\sqrt{3}}{4} = 6 \\cdot \\dfrac{4\\sqrt{3}}{4} = 6\\sqrt{3}$$
- Đáy dưới là lục giác đều cạnh $a_2 = 6$ nên có diện tích:
$$S_2 = 6 \\cdot \\dfrac{a_2^2\\sqrt{3}}{4} = 6 \\cdot \\dfrac{36\\sqrt{3}}{4} = 54\\sqrt{3}$$
- Mỗi mặt bên là một hình thang cân có hai đáy $a_1 = 2$, $a_2 = 6$ và cạnh bên $l = 5$. Chiều cao của mặt bên (trung đoạn) là:
$$d = \\sqrt{l^2 - \\left(\\dfrac{a_2 - a_1}{2}\\right)^2} = \\sqrt{5^2 - 2^2} = \\sqrt{21}$$
- Diện tích xung quanh gồm $6$ mặt bên:
$$S_{\\text{xq}} = 6 \\cdot \\dfrac{a_1 + a_2}{2} \\cdot d = 6 \\cdot \\dfrac{2 + 6}{2} \\cdot \\sqrt{21} = 24\\sqrt{21}$$
- Diện tích toàn phần:
$$S_{\\text{tp}} = S_{\\text{xq}} + S_1 + S_2 = 24\\sqrt{21} + 6\\sqrt{3} + 54\\sqrt{3} = 24\\sqrt{21} + 60\\sqrt{3}$$

2. **Tính thể tích**:
- Bán kính đường tròn ngoại tiếp đáy trên và đáy dưới lần lượt là $R_1 = a_1 = 2$ và $R_2 = a_2 = 6$.
- Chiều cao của hình chóp cụt là:
$$h = \\sqrt{l^2 - (R_2 - R_1)^2} = \\sqrt{5^2 - (6 - 2)^2} = \\sqrt{25 - 16} = 3$$
- Thể tích khối chóp cụt là:
$$V = \\dfrac{h}{3}\\left(S_1 + S_2 + \\sqrt{S_1 S_2}\\right) = \\dfrac{3}{3}\\left(6\\sqrt{3} + 54\\sqrt{3} + 18\\sqrt{3}\\right) = 78\\sqrt{3}$$
Chọn C.`,
  },

  // =========================================================================
  // PHẦN II. Câu trắc nghiệm đúng sai (4 câu: id 13 -> 16)
  // =========================================================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle:
      'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.',
    questionText:
      'Nhà máy $A$ chuyên sản xuất một loại sản phẩm cho nhà máy $B$. Hai nhà máy thỏa thuận rằng, hàng tháng nhà máy $A$ cung cấp cho nhà máy $B$ số lượng sản phẩm theo đơn đặt hàng của nhà máy $B$ (tối đa $100$ tấn sản phẩm). Biết rằng, nếu số lượng đặt hàng là $x$ (tấn) sản phẩm thì giá bán cho mỗi tấn sản phẩm là $P(x) = 45 - 0{,}001x^2$ (triệu đồng) và chi phí để nhà máy $A$ sản xuất được $x$ (tấn) sản phẩm trong một tháng là $C(x) = 100 + 30x$ (triệu đồng, gồm $100$ triệu đồng chi phí cố định và $30$ triệu đồng cho mỗi tấn sản phẩm).',
    statements: [
      {
        key: 'a',
        text: 'Số tiền nhà máy $A$ thu được khi bán $10$ tấn sản phẩm cho nhà máy $B$ là $500$ triệu đồng.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Nhà máy $A$ bán cho nhà máy $B$ là $70$ tấn sản phẩm mỗi tháng thì thu được lợi nhuận lớn nhất.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Chi phí để nhà máy $A$ sản xuất $10$ tấn sản phẩm trong một tháng là $400$ triệu đồng.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Lợi nhuận nhà máy $A$ thu được khi bán $x$ (tấn) sản phẩm ($0 \\le x \\le 100$) cho nhà máy $B$ là $H(x) = -0{,}001x^3 + 15x - 100$ (triệu đồng).',
        correct: true,
      },
    ],
    explanation: `- **Ý a) Sai**: Doanh thu khi bán $x$ tấn sản phẩm là $R(x) = x \\cdot P(x) = 45x - 0{,}001x^3$ (triệu đồng). Khi $x = 10$, số tiền thu được là:
$$R(10) = 45 \\cdot 10 - 0{,}001 \\cdot 10^3 = 450 - 1 = 449 \\text{ (triệu đồng)} \\neq 500$$
- **Ý b) Sai**: Xét hàm lợi nhuận $H(x) = -0{,}001x^3 + 15x - 100$ trên đoạn $[0; 100]$.
Ta có $H'(x) = -0{,}003x^2 + 15 = 0 \\iff x^2 = 5000 \\iff x = 50\\sqrt{2} \\approx 70{,}71$ (tấn).
Kể cả khi xét $x$ nguyên thì $H(71) = 607{,}089 > H(70) = 607$, nên bán $70$ tấn chưa phải là mức lợi nhuận lớn nhất.
- **Ý c) Đúng**: Chi phí để sản xuất $10$ tấn sản phẩm là $C(10) = 100 + 30 \\cdot 10 = 400$ (triệu đồng).
- **Ý d) Đúng**: Lợi nhuận thu được là:
$$H(x) = R(x) - C(x) = (45x - 0{,}001x^3) - (100 + 30x) = -0{,}001x^3 + 15x - 100 \\text{ (triệu đồng)}$$`,
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle:
      'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.',
    questionText:
      'Trong không gian $Oxyz$, cho ba điểm $A(2; -1; 1),\\ B(-1; 3; -1),\\ C(5; -3; 4)$.',
    statements: [
      {
        key: 'a',
        text: 'Tích vô hướng của hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ bằng $-23$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Góc $\\widehat{BAC}$ là góc nhọn.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Côsin của góc giữa hai vectơ $\\overrightarrow{AB}, \\overrightarrow{AC}$ bằng $-\\dfrac{23}{\\sqrt{638}}$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Lấy điểm $M$ trên mặt phẳng $Oxy$ sao cho biểu thức $MA^2 + MB^2 + MC^2$ đạt giá trị nhỏ nhất. Khi đó, tọa độ của $M$ là $\\left(2; -\\dfrac{1}{3}; 0\\right)$.',
        correct: true,
      },
    ],
    explanation: `Ta có $\\overrightarrow{AB} = (-3; 4; -2)$ và $\\overrightarrow{AC} = (3; -2; 3)$.
- **Ý a) Đúng**:
$$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-3) \\cdot 3 + 4 \\cdot (-2) + (-2) \\cdot 3 = -9 - 8 - 6 = -23$$
- **Ý b) Sai**: Vì $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = -23 < 0$ nên $\\cos\\widehat{BAC} < 0$, suy ra góc $\\widehat{BAC}$ là góc tù.
- **Ý c) Đúng**: Ta có $|\\overrightarrow{AB}| = \\sqrt{(-3)^2 + 4^2 + (-2)^2} = \\sqrt{29}$ và $|\\overrightarrow{AC}| = \\sqrt{3^2 + (-2)^2 + 3^2} = \\sqrt{22}$.
Do đó:
$$\\cos\\left(\\overrightarrow{AB}, \\overrightarrow{AC}\\right) = \\dfrac{-23}{\\sqrt{29} \\cdot \\sqrt{22}} = -\\dfrac{23}{\\sqrt{638}}$$
- **Ý d) Đúng**: Gọi $G$ là trọng tâm tam giác $ABC$, ta có:
$$G\\left(\\dfrac{2 - 1 + 5}{3};\\ \\dfrac{-1 + 3 - 3}{3};\\ \\dfrac{1 - 1 + 4}{3}\\right) = G\\left(2;\\ -\\dfrac{1}{3};\\ \\dfrac{4}{3}\\right)$$
Vì $MA^2 + MB^2 + MC^2 = 3MG^2 + GA^2 + GB^2 + GC^2$ nên tổng này đạt giá trị nhỏ nhất khi $MG$ nhỏ nhất, tức $M$ là hình chiếu vuông góc của $G$ lên mặt phẳng $(Oxy)$.
Vậy $M\\left(2; -\\dfrac{1}{3}; 0\\right)$.`,
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle:
      'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.',
    questionText:
      'Cho hàm số $y = \\dfrac{x^2 + bx + c}{x + n}$ có đồ thị và hai đường tiệm cận $d_1, d_2$ như hình vẽ dưới đây.',
    diagramType: 'DE10_GRAPH_P2_Q3',
    statements: [
      {
        key: 'a',
        text: 'Đồ thị hàm số có tiệm cận đứng là đường thẳng $x = -1$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Hàm số đồng biến trên khoảng $(0; +\\infty)$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Đồ thị hàm số có $2$ trục đối xứng, trong đó có một trục đối xứng là đường thẳng $y = \\left(p + \\sqrt{q}\\right)(x + 1) - r$ ($p, q, r$ là các số nguyên). Khi đó $p + q + r = 4$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Điểm $M(1212; 2025)$ và hai điểm cực trị của đồ thị hàm số thẳng hàng.',
        correct: false,
      },
    ],
    explanation: `Từ đồ thị gốc, ta thấy:
- Tiệm cận đứng là đường thẳng $d_1: x = -1 \\implies n = 1$.
- Tiệm cận xiên là đường thẳng $d_2: y = x$ (đi qua gốc tọa độ $O(0; 0)$ và giao điểm $I(-1; -1)$).
- Đồ thị đạt cực tiểu tại $(0; 1)$ và đạt cực đại tại $(-2; -3)$, suy ra hàm số là:
$$y = x + \\dfrac{1}{x + 1} = \\dfrac{x^2 + x + 1}{x + 1}$$
(tức $b = 1,\\ c = 1,\\ n = 1$).

- **Ý a) Đúng**: Đường tiệm cận đứng của đồ thị hàm số là $x = -1$.
- **Ý b) Đúng**: Ta có $y' = 1 - \\dfrac{1}{(x + 1)^2} > 0,\\ \\forall x \\in (0; +\\infty)$, nên hàm số đồng biến trên khoảng $(0; +\\infty)$.
- **Ý c) Đúng**: Hai đường tiệm cận là $d_1: x + 1 = 0$ và $d_2: x - y = 0$.
Hai trục đối xứng của đồ thị là hai đường phân giác của góc tạo bởi $d_1$ và $d_2$:
$$\\dfrac{x + 1}{1} = \\pm \\dfrac{x - y}{\\sqrt{2}} \\iff (x + 1) - 1 - y = \\pm \\sqrt{2}(x + 1) \\iff y = \\left(1 \\pm \\sqrt{2}\\right)(x + 1) - 1$$
Do đó một trục đối xứng là đường thẳng $y = \\left(1 + \\sqrt{2}\\right)(x + 1) - 1$, suy ra $p = 1,\\ q = 2,\\ r = 1 \\implies p + q + r = 1 + 2 + 1 = 4$.
- **Ý d) Sai**: Hai điểm cực trị của đồ thị là $A(-2; -3)$ và $B(0; 1)$. Đường thẳng đi qua hai điểm cực trị $A, B$ có phương trình:
$$y = 2x + 1$$
Thay $x = 1212$ vào phương trình đường thẳng ta được $y = 2 \\cdot 1212 + 1 = 2425 \\neq 2025$, nên $M(1212; 2025)$ không thẳng hàng với hai điểm cực trị.`,
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle:
      'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.',
    questionText:
      'Trong hộp có $4$ quả bóng nhỏ cùng kích thước, gồm $2$ quả bóng đỏ và $2$ quả bóng trắng. Lần thứ nhất, lấy ngẫu nhiên $2$ quả bóng từ hộp, ghi lại màu rồi bỏ lại vào hộp. Lần thứ hai cũng lấy ngẫu nhiên $2$ quả bóng từ hộp, ghi lại màu rồi bỏ lại vào hộp.\nGọi biến cố $A$: “Cả hai lần đều không lấy được bóng đỏ”;\nbiến cố $B$: “Cả hai lần đều không lấy được bóng trắng”;\nbiến cố $C$: “Trong hai quả bóng lấy ra ở lần thứ nhất có bóng đỏ”;\nbiến cố $D$: “Trong hai quả bóng lấy ra ở lần thứ hai có bóng trắng”.\nKhi đó:',
    statements: [
      {
        key: 'a',
        text: '$A$ và $B$ độc lập với nhau.',
        correct: false,
      },
      {
        key: 'b',
        text: '$A$ và $C$ độc lập với nhau.',
        correct: false,
      },
      {
        key: 'c',
        text: '$B$ và $C$ độc lập với nhau.',
        correct: false,
      },
      {
        key: 'd',
        text: '$C$ và $D$ độc lập với nhau.',
        correct: true,
      },
    ],
    explanation: `Trong mỗi lần lấy $2$ quả bóng từ $4$ quả bóng (gồm $2$ đỏ, $2$ trắng), số kết quả có thể là $C_4^2 = 6$:
- Xác suất lấy được $2$ bóng trắng (không có bóng đỏ) trong 1 lần là $\\dfrac{C_2^2}{C_4^2} = \\dfrac{1}{6}$.
- Xác suất lấy được $2$ bóng đỏ (không có bóng trắng) trong 1 lần là $\\dfrac{C_2^2}{C_4^2} = \\dfrac{1}{6}$.

Do đó:
- $P(A) = \\dfrac{1}{6} \\cdot \\dfrac{1}{6} = \\dfrac{1}{36}$; $P(B) = \\dfrac{1}{6} \\cdot \\dfrac{1}{6} = \\dfrac{1}{36}$.
- $P(C) = 1 - \\dfrac{1}{6} = \\dfrac{5}{6}$; $P(D) = 1 - \\dfrac{1}{6} = \\dfrac{5}{6}$.

Xét từng mệnh đề:
- **Ý a) Sai**: $A$ và $B$ xung khắc nên $P(AB) = 0 \\neq P(A)P(B)$.
- **Ý b) Sai**: Nếu $A$ xảy ra thì lần 1 không có bóng đỏ nên $C$ không thể xảy ra ($A \\cap C = \\varnothing$), suy ra $P(AC) = 0 \\neq P(A)P(C)$.
- **Ý c) Sai**: Nếu $B$ xảy ra thì cả 2 lần đều lấy được 2 bóng đỏ, suy ra lần 1 chắc chắn có bóng đỏ ($B \\subset C$). Do đó $P(BC) = P(B) = \\dfrac{1}{36} \\neq P(B)P(C) = \\dfrac{5}{216}$.
- **Ý d) Đúng**: Biến cố $C$ chỉ phụ thuộc kết quả lần lấy thứ nhất, biến cố $D$ chỉ phụ thuộc kết quả lần lấy thứ hai. Vì phép thử có hoàn lại nên hai lần lấy độc lập, suy ra $C$ và $D$ độc lập ($P(CD) = P(C)P(D) = \\dfrac{25}{36}$).`,
  },

  // =========================================================================
  // PHẦN III. Câu trắc nghiệm trả lời ngắn (6 câu: id 17 -> 22)
  // =========================================================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Cho hàm số $y = \\log_a(x - 2) + 1\\ (a > 0, a \\neq 1)$. Nếu điểm cố định mà đồ thị hàm số luôn đi qua nằm trên elip $\\dfrac{x^2}{m} + \\dfrac{y^2}{n} = 1\\ (m > 0, n > 0)$, thì giá trị nhỏ nhất của $m + n$ bằng bao nhiêu?',
    correctAnswer: '16',
    explanation: `Đồ thị hàm số $y = \\log_a(x - 2) + 1\\ (a > 0, a \\neq 1)$ luôn đi qua điểm cố định khi:
$$\\begin{cases} x - 2 = 1 \\\\ y = \\log_a 1 + 1 \\end{cases} \\iff \\begin{cases} x = 3 \\\\ y = 1 \\end{cases}$$
Vậy điểm cố định là $M(3; 1)$.
Vì $M(3; 1)$ nằm trên elip $\\dfrac{x^2}{m} + \\dfrac{y^2}{n} = 1\\ (m > 0, n > 0)$ nên:
$$\\dfrac{9}{m} + \\dfrac{1}{n} = 1$$
Áp dụng bất đẳng thức Cauchy-Schwarz (Bunhiacopxki):
$$m + n = (m + n)\\left(\\dfrac{9}{m} + \\dfrac{1}{n}\\right) \\ge (3 + 1)^2 = 16$$
Dấu “$=$” xảy ra khi $\\dfrac{m}{3} = \\dfrac{n}{1}$ và $m + n = 16 \\iff m = 12,\\ n = 4$.
Vậy giá trị nhỏ nhất của $m + n$ bằng $16$.`,
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Hình lăng trụ $ABCD - A_1B_1C_1D_1$ được ghép từ bốn khối lập phương có cạnh bằng $1$ như hình vẽ. Điểm $P$ là tâm của hình vuông $A_1B_1C_1D_1$. Khi đó $\\overrightarrow{AD_1} \\cdot \\overrightarrow{AP} =$',
    diagramType: 'DE10_PRISM_P3_Q2',
    correctAnswer: '3',
    explanation: `Hình lăng trụ $ABCD - A_1B_1C_1D_1$ là hình hộp chữ nhật có đáy $ABCD$ là hình vuông cạnh $2$ (do ghép từ $4$ khối lập phương cạnh $1$) và chiều cao $AA_1 = 1$.
Chọn hệ trục tọa độ $Oxyz$ với $A(0; 0; 0)$, tia $AB$ trùng $Ox$, tia $AD$ trùng $Oy$, tia $AA_1$ trùng $Oz$.
Khi đó:
- $A(0; 0; 0)$
- $D_1(0; 2; 1) \\implies \\overrightarrow{AD_1} = (0; 2; 1)$
- Tâm $P$ của hình vuông $A_1B_1C_1D_1$ có tọa độ $P(1; 1; 1) \\implies \\overrightarrow{AP} = (1; 1; 1)$.

Vậy tích vô hướng cần tìm là:
$$\\overrightarrow{AD_1} \\cdot \\overrightarrow{AP} = 0 \\cdot 1 + 2 \\cdot 1 + 1 \\cdot 1 = 3$$`,
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Cho hàm số $f(x) = (x - m)^2 + (ae^x - 3m)^2\\ (m \\in \\mathbb{R})$ có giá trị nhỏ nhất bằng $\\dfrac{9}{10}$. Biết $a > 0$. Gọi $S$ là tổng tất cả các giá trị của $a$ thỏa mãn bài toán. Khi đó $S$ bằng bao nhiêu?',
    correctAnswer: '3',
    explanation: `Xét trên mặt phẳng tọa độ $Oxy$, với mỗi $x, m \\in \\mathbb{R}$, đặt $M(x; ae^x)$ thuộc đồ thị $(C): y = ae^x\\ (a > 0)$ và $N(m; 3m)$ thuộc đường thẳng $\\Delta: 3x - y = 0$.
Khi đó:
$$f(x) = (x - m)^2 + (ae^x - 3m)^2 = MN^2$$
Do $a > 0$ và hàm số $f(x)$ (với tham số $m$ cố định hoặc chạy trên $\\mathbb{R}$) có giá trị nhỏ nhất bằng $\\dfrac{9}{10} \\iff MN_{\\min} = \\dfrac{3}{\\sqrt{10}}$, nghĩa là khoảng cách ngắn nhất giữa đồ thị $(C): y = ae^x$ và đường thẳng $\\Delta: 3x - y = 0$ bằng $\\dfrac{3}{\\sqrt{10}}$ (khi đó $(C)$ nằm hoàn toàn phía trên $\\Delta$).

Tiếp tuyến của $(C)$ song song với $\\Delta$ có hệ số góc bằng $3$:
$$y'(x_0) = ae^{x_0} = 3 \\implies M_0(x_0; 3)$$
Vì $(C)$ không cắt $\\Delta$ nên $ae^x > 3x,\\ \\forall x \\in \\mathbb{R} \\implies$ tại $x_0$ ta có $3 > 3x_0 \\iff x_0 < 1$.
Khoảng cách từ tiếp điểm $M_0(x_0; 3)$ đến $\\Delta: 3x - y = 0$ bằng $\\dfrac{3}{\\sqrt{10}}$:
$$d(M_0, \\Delta) = \\dfrac{|3x_0 - 3|}{\\sqrt{3^2 + (-1)^2}} = \\dfrac{3}{\\sqrt{10}} \\iff |x_0 - 1| = 1$$
Do $x_0 < 1$ nên $1 - x_0 = 1 \\iff x_0 = 0$.
Thay $x_0 = 0$ vào $ae^{x_0} = 3$ ta được $a = 3$.
Vậy $S = 3$.`,
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Bình và An chơi một trò rút thẻ. Quy tắc như sau: Có $7$ thẻ được đánh số $1, 2, 3, 4, 5, 6, 7$, mỗi số có đúng $1$ thẻ. Hai người lần lượt rút ngẫu nhiên mỗi lần $1$ thẻ, không hoàn lại, cho đến khi có một người rút được các thẻ có tổng số bằng $12$, hoặc đến khi tất cả các thẻ đều đã được rút hết thì trò chơi kết thúc. Biết Bình rút trước. Xác suất để khi Bình rút được $3$ thẻ thì trò chơi vừa kết thúc là ______.',
    correctAnswer: '29/210',
    explanation: `Thứ tự rút thẻ là: Bình (lần 1) $\\to$ An (lần 1) $\\to$ Bình (lần 2) $\\to$ An (lần 2) $\\to$ Bình (lần 3).
Để khi Bình rút được $3$ thẻ thì trò chơi vừa kết thúc, cần thỏa mãn đồng thời:
1. $2$ thẻ đầu tiên của Bình có tổng khác $12$;
2. $2$ thẻ đầu tiên của An có tổng khác $12$;
3. $3$ thẻ của Bình có tổng đúng bằng $12$ (vì mới rút đến thẻ thứ 5 của hộp nên chưa hết 7 thẻ).

Xét các bộ $3$ số phân biệt trong $\\{1, 2, 3, 4, 5, 6, 7\\}$ có tổng bằng $12$:
$$\\{1, 4, 7\\},\\ \\{1, 5, 6\\},\\ \\{2, 3, 7\\},\\ \\{2, 4, 6\\},\\ \\{3, 4, 5\\}$$
(có tất cả $5$ bộ; chú ý rằng trong mỗi bộ 3 số dương có tổng bằng $12$, tổng của 2 số bất kỳ luôn nhỏ hơn $12$ nên Bình không bao giờ dừng ở lượt thứ 2).

Số cách chọn tập $3$ thẻ cho Bình và tập $2$ thẻ cho An từ $4$ thẻ còn lại là $C_7^3 \\cdot C_4^2 = 35 \\cdot 6 = 210$ (mỗi cách tương ứng với $3! \\cdot 2! = 12$ thứ tự rút thẻ đồng khả năng).
Kiểm tra điều kiện tổng $2$ thẻ của An khác $12$ (các cặp có tổng bằng $12$ trong $\{1..7\}$ là $\{5, 7\}$):
- Với $4$ bộ $\\{1, 4, 7\\},\\ \\{1, 5, 6\\},\\ \\{2, 3, 7\\},\\ \\{3, 4, 5\\}$: trong $4$ thẻ còn lại không chứa đồng thời cả $5$ và $7$, nên mọi cách chọn $2$ thẻ cho An đều có tổng khác $12$ ($4 \\cdot C_4^2 = 24$ cách).
- Với bộ $\\{2, 4, 6\\}$: $4$ thẻ còn lại là $\\{1, 3, 5, 7\\}$ có chứa cặp $\\{5, 7\\}$ có tổng bằng $12$, nên An có $C_4^2 - 1 = 5$ cách chọn $2$ thẻ hợp lệ.

Vậy xác suất cần tìm là:
$$P = \\dfrac{24 + 5}{210} = \\dfrac{29}{210} \\approx 0{,}14$$`,
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Cho lăng trụ tam giác đều $ABC - A_1B_1C_1$ có cạnh đáy bằng $4$, cạnh bên bằng $6$. Gọi $M, N$ lần lượt là trung điểm của $CC_1, AB$. Nếu $P$ là một điểm trên mặt bên $BCC_1B_1$ và $PN \\parallel (AB_1M)$, thì giá trị nhỏ nhất của đoạn thẳng $PN$ là ______.',
    correctAnswer: '2.5',
    explanation: `Trong mặt phẳng $(BCC_1B_1)$, gọi $E$ là trung điểm của $BB_1$. Vì $N$ là trung điểm $AB$, $E$ là trung điểm $BB_1$ nên $NE \\parallel AB_1 \\subset (AB_1M)$.
Gọi $F$ là trung điểm của $B_1M$, hoặc dựng đường thẳng qua $E$ trong $(BCC_1B_1)$ sao cho mặt phẳng $(NEK) \\parallel (AB_1M)$:
Chọn hệ trục tọa độ hoặc tính trực tiếp:
Đặt gốc tọa độ tại $N(0; 0; 0)$, với $B(2; 0; 0),\\ A(-2; 0; 0),\\ C(0; 2\\sqrt{3}; 0)$ và trục $Oz$ song song $AA_1$:
- $A(-2; 0; 0),\\ B_1(2; 0; 6),\\ M(0; 2\\sqrt{3}; 3)$.
- $\\overrightarrow{AB_1} = (4; 0; 6),\\ \\overrightarrow{AM} = (2; 2\\sqrt{3}; 3)$.
- Vectơ pháp tuyến của $(AB_1M)$ là:
$$\\overrightarrow{n} = \\dfrac{1}{2\\sqrt{3}}\\left[\\overrightarrow{AB_1}, \\overrightarrow{AM}\\right] = (-3; 0; 2)$$
Điểm $P$ nằm trên mặt bên $BCC_1B_1$ có phương trình tham số:
$$P(2 - 2t;\\ 2\\sqrt{3}t;\\ z) \\quad (t \\in [0; 1],\\ z \\in [0; 6])$$
Vì $PN \\parallel (AB_1M)$ nên $\\overrightarrow{NP} \\cdot \\overrightarrow{n} = 0$:
$$-3(2 - 2t) + 2z = 0 \\iff z = 3(1 - t)$$
Khi đó:
$$PN^2 = (2 - 2t)^2 + (2\\sqrt{3}t)^2 + 9(1 - t)^2 = 13(1 - t)^2 + 12t^2 = 25t^2 - 26t + 13$$
Đạt giá trị nhỏ nhất tại $t = \\dfrac{13}{25} \\in [0; 1]$:
$$PN_{\\min} = \\sqrt{13 - \\dfrac{13^2}{25}} = \\sqrt{\\dfrac{156}{25}} = \\dfrac{2\\sqrt{39}}{5} \\approx 2{,}5$$`,
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Bạn Minh sử dụng $12$ thanh sắt gắn thành một hình hộp chữ nhật với kích thước ba cạnh lần lượt là $20\\text{ cm}$, $30\\text{ cm}$, $60\\text{ cm}$. Vào lúc ánh nắng mặt trời vuông góc với mặt sân, Minh để hình hộp đó trong không trung. Các cạnh hình hộp được in bóng là các đoạn thẳng trên mặt sân. Giả sử rằng các tia nắng song song với nhau và mặt sân phẳng. Giá trị lớn nhất của tổng độ dài bóng tất cả các cạnh hình hộp chữ nhật (đơn vị $\\text{cm}$) có dạng $a + b\\sqrt{13}\\ (a, b \\in \\mathbb{N}^*)$. Tính $a + b$. (Trích đề KSCL THPT Bãi Cháy - Quảng Ninh 2026)',
    diagramType: 'DE10_BOX_SHADOW_P3_Q6',
    correctAnswer: '280',
    explanation: `Gọi $\\overrightarrow{u}, \\overrightarrow{v}, \\overrightarrow{w}$ là ba vectơ đơn vị đôi một vuông góc cùng hướng với ba cạnh xuất phát từ một đỉnh của hình hộp chữ nhật có độ dài lần lượt là $20\\text{ cm}, 30\\text{ cm}, 60\\text{ cm}$, và $\\overrightarrow{k}$ là vectơ đơn vị vuông góc với mặt sân (cùng phương với tia nắng).
Gọi $\\alpha, \\beta, \\gamma \\in \\left[0; \\dfrac{\\pi}{2}\\right]$ lần lượt là góc giữa ba cạnh của hình hộp chữ nhật với phương tia nắng $\\overrightarrow{k}$.
Vì ba cạnh đôi một vuông góc nên:
$$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1 \\iff \\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = 2$$
Độ dài bóng của các cạnh trên mặt sân bằng độ dài hình chiếu vuông góc của chúng lên mặt sân:
- $4$ cạnh độ dài $20\\text{ cm}$ có bóng dài $20\\sin\\alpha$ mỗi cạnh;
- $4$ cạnh độ dài $30\\text{ cm}$ có bóng dài $30\\sin\\beta$ mỗi cạnh;
- $4$ cạnh độ dài $60\\text{ cm}$ có bóng dài $60\\sin\\gamma$ mỗi cạnh.

Tổng độ dài bóng của tất cả $12$ cạnh hình hộp chữ nhật là:
$$L = 4\\left(20\\sin\\alpha + 30\\sin\\beta + 60\\sin\\gamma\\right)$$
với $\\sin\\alpha, \\sin\\beta, \\sin\\gamma \\in [0; 1]$ và $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = 2$.
Đặt $x = \\sin\\alpha,\\ y = \\sin\\beta,\\ z = \\sin\\gamma \\in [0; 1]$ thỏa mãn $x^2 + y^2 + z^2 = 2$.
Để $20x + 30y + 60z$ lớn nhất, vì hệ số $60$ lớn nhất và $z \\le 1$, theo bất đẳng thức Cauchy-Schwarz cho hai số $x, y$ với $x^2 + y^2 = 2 - z^2$:
$$20x + 30y + 60z \\le \\sqrt{(20^2 + 30^2)(2 - z^2)} + 60z = 10\\sqrt{13}\\sqrt{2 - z^2} + 60z$$
Xét hàm $g(z) = 10\\sqrt{13}\\sqrt{2 - z^2} + 60z$ trên $[0; 1]$, ta có:
$$g'(z) = \\dfrac{-10\\sqrt{13}z}{\\sqrt{2 - z^2}} + 60 > 0, \\quad \\forall z \\in [0; 1]$$
(vì với $z \\in [0; 1]$ thì $\\dfrac{z}{\\sqrt{2 - z^2}} \\le 1 < \\dfrac{60}{10\\sqrt{13}} = \\dfrac{6}{\\sqrt{13}} \\approx 1{,}66$).
Do đó $g(z)$ đồng biến trên $[0; 1]$, suy ra $\\max_{[0; 1]} g(z) = g(1) = 60 + 10\\sqrt{13}$ (đạt được khi $z = 1,\\ x = \\dfrac{2}{\\sqrt{13}},\\ y = \\dfrac{3}{\\sqrt{13}}$).

Khi đó giá trị lớn nhất của tổng độ dài bóng tất cả $12$ cạnh là:
$$L_{\\max} = 4\\left(60 + 10\\sqrt{13}\\right) = 240 + 40\\sqrt{13} \\text{ (cm)}$$
Suy ra $a = 240,\\ b = 40 \\implies a + b = 240 + 40 = 280$.`,
  },
];
