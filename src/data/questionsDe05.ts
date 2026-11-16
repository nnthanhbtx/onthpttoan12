import { Question } from '../types';

export const QUESTIONS_DE05: Question[] = [
  // ============================================================================
  // PHẦN I: CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (CÂU 1 - CÂU 12)
  // ============================================================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hình chóp $S.ABC$, gọi $G$ là trọng tâm tam giác $ABC$. Khẳng định nào sau đây là đúng?',
    options: [
      { key: 'A', text: '$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = 3\\overrightarrow{SG}$' },
      { key: 'B', text: '$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = 2\\overrightarrow{SG}$' },
      { key: 'C', text: '$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = \\overrightarrow{SG}$' },
      { key: 'D', text: '$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = 4\\overrightarrow{SG}$' },
    ],
    correctAnswer: 'A',
    explanation: `Vì $G$ là trọng tâm của tam giác $ABC$ nên $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$.
Theo quy tắc chèn điểm $G$, ta có:
$$\\overrightarrow{SA} + \\overrightarrow{SB} + \\overrightarrow{SC} = 3\\overrightarrow{SG} + (\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC}) = 3\\overrightarrow{SG}$$
Vậy chọn đáp án A.`,
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Biết hàm số $f(x) = x\\sin\\left(x + \\dfrac{\\pi}{2}\\right)$. Khi đó $f\'\\left(\\dfrac{\\pi}{2}\\right)$ bằng',
    options: [
      { key: 'A', text: '$0$' },
      { key: 'B', text: '$2$' },
      { key: 'C', text: '$\\dfrac{\\pi}{2}$' },
      { key: 'D', text: '$-\\dfrac{\\pi}{2}$' },
    ],
    correctAnswer: 'D',
    explanation: `Ta có $\\sin\\left(x + \\dfrac{\\pi}{2}\\right) = \\cos x$, suy ra $f(x) = x\\cos x$.
Đạo hàm của hàm số là:
$$f'(x) = \\cos x - x\\sin x$$
Thay $x = \\dfrac{\\pi}{2}$ vào biểu thức đạo hàm:
$$f'\\left(\\frac{\\pi}{2}\\right) = \\cos\\frac{\\pi}{2} - \\frac{\\pi}{2}\\sin\\frac{\\pi}{2} = 0 - \\frac{\\pi}{2}\\cdot 1 = -\\frac{\\pi}{2}$$
Vậy chọn đáp án D.`,
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      "Thể tích của khối lăng trụ đứng $ABC.A'B'C'$ biết $AA' = 2a; AB = 3a; AC = 4a$ và $AB \\perp AC$ bằng",
    options: [
      { key: 'A', text: '$8a^3$' },
      { key: 'B', text: '$12a^3$' },
      { key: 'C', text: '$24a^3$' },
      { key: 'D', text: '$4a^3$' },
    ],
    correctAnswer: 'B',
    explanation: `Vì $AB \\perp AC$ nên đáy $\\triangle ABC$ vuông tại $A$, có diện tích là:
$$S_{\\triangle ABC} = \\frac{1}{2} AB \\cdot AC = \\frac{1}{2} \\cdot 3a \\cdot 4a = 6a^2$$
Thể tích khối lăng trụ đứng $ABC.A'B'C'$ là:
$$V = S_{\\triangle ABC} \\cdot AA' = 6a^2 \\cdot 2a = 12a^3$$
Vậy chọn đáp án B.`,
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x^2 - 9x + 10$ trên đoạn $[-2; 2]$ bằng:',
    options: [
      { key: 'A', text: '$-1$' },
      { key: 'B', text: '$-12$' },
      { key: 'C', text: '$15$' },
      { key: 'D', text: '$10$' },
    ],
    correctAnswer: 'C',
    explanation: `Hàm số $f(x) = x^3 - 3x^2 - 9x + 10$ liên tục trên đoạn $[-2; 2]$.
Ta có đạo hàm:
$$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3)$$
Trên khoảng $(-2; 2)$, cho $f'(x) = 0 \\iff x = -1 \\in (-2; 2)$ (nghiệm $x = 3 \\notin (-2; 2)$).
Tính giá trị của hàm số tại các điểm:
- $f(-2) = (-2)^3 - 3(-2)^2 - 9(-2) + 10 = 8$
- $f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 10 = 15$
- $f(2) = 2^3 - 3\\cdot 2^2 - 9\\cdot 2 + 10 = -12$
Vậy $\\max_{[-2; 2]} f(x) = f(-1) = 15$. Chọn đáp án C.`,
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Nếu $\\cos\\left(\\dfrac{\\pi}{2} + 2\\alpha\\right) - 4\\sin^2\\alpha = -2$, thì $\\tan 2\\alpha =$',
    options: [
      { key: 'A', text: '$-2$' },
      { key: 'B', text: '$-\\dfrac{1}{2}$' },
      { key: 'C', text: '$2$' },
      { key: 'D', text: '$\\dfrac{1}{2}$' },
    ],
    correctAnswer: 'C',
    explanation: `Áp dụng công thức $\\cos\\left(\\dfrac{\\pi}{2} + 2\\alpha\\right) = -\\sin 2\\alpha$ và $2\\sin^2\\alpha = 1 - \\cos 2\\alpha$, ta có:
$$-\\sin 2\\alpha - 2(1 - \\cos 2\\alpha) = -2 \\iff -\\sin 2\\alpha - 2 + 2\\cos 2\\alpha = -2 \\iff \\sin 2\\alpha = 2\\cos 2\\alpha$$
Chia hai vế cho $\\cos 2\\alpha \\neq 0$, ta được:
$$\\tan 2\\alpha = 2$$
Vậy chọn đáp án C.`,
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$, $M$ là trung điểm $SA$. Khẳng định nào sau đây là đúng?',
    diagramType: 'DE05_PYRAMID_P1_Q6',
    options: [
      { key: 'A', text: '$OM \\parallel (SAD)$' },
      { key: 'B', text: '$OM \\parallel (SAB)$' },
      { key: 'C', text: '$OM \\parallel (SBD)$' },
      { key: 'D', text: '$OM \\parallel (SCD)$' },
    ],
    correctAnswer: 'D',
    explanation: `Trong tam giác $SAC$, có $M$ là trung điểm của $SA$ và $O$ là trung điểm của $AC$ (vì $O$ là tâm của hình bình hành $ABCD$).
Suy ra $OM$ là đường trung bình của tam giác $SAC$, do đó $OM \\parallel SC$.
Mà $OM \\not\\subset (SCD)$ và $SC \\subset (SCD)$ nên $OM \\parallel (SCD)$.
Vậy chọn đáp án D.`,
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Hình dưới đây biểu diễn đồ thị của hàm số $y = f(x)$ và tiếp tuyến $d$ của đồ thị tại điểm $(3; 0)$. Tìm giá trị tung độ giao điểm của đường thẳng $d$ với trục $Oy$?',
    diagramType: 'DE05_GRAPH_P1_Q7',
    options: [
      { key: 'A', text: "$f'(3)$" },
      { key: 'B', text: "$-f'(3)$" },
      { key: 'C', text: "$-2f'(3)$" },
      { key: 'D', text: "$-3f'(3)$" },
    ],
    correctAnswer: 'D',
    explanation: `Phương trình tiếp tuyến $d$ của đồ thị hàm số $y = f(x)$ tại tiếp điểm $(3; 0)$ (với $f(3) = 0$) là:
$$y = f'(3)(x - 3) + 0 = f'(3)x - 3f'(3)$$
Cho $x = 0$, ta tìm được tung độ giao điểm của đường thẳng $d$ với trục $Oy$ là:
$$y(0) = -3f'(3)$$
Vậy chọn đáp án D.`,
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho cấp số cộng $(u_n)$ có số $u_3 = 6$ và $u_7 = -2$. Tìm số hạng đầu tiên?',
    options: [
      { key: 'A', text: '$u_1 = -14$' },
      { key: 'B', text: '$u_1 = 10$' },
      { key: 'C', text: '$u_1 = 2$' },
      { key: 'D', text: '$u_1 = -10$' },
    ],
    correctAnswer: 'B',
    explanation: `Gọi $d$ là công sai của cấp số cộng $(u_n)$. Theo giả thiết ta có hệ phương trình:
$$\\begin{cases} u_3 = u_1 + 2d = 6 \\\\ u_7 = u_1 + 6d = -2 \\end{cases} \\iff \\begin{cases} 4d = -8 \\\\ u_1 = 6 - 2d \\end{cases} \\iff \\begin{cases} d = -2 \\\\ u_1 = 10 \\end{cases}$$
Vậy số hạng đầu tiên là $u_1 = 10$. Chọn đáp án B.`,
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Thời gian (phút) để học sinh hoàn thành một câu hỏi thi được cho như bảng dưới đây. Mốt (đơn vị: phút) của mẫu số liệu trên gần nhất số nào sau đây?',
    diagramType: 'DE05_TABLE_P1_Q9',
    options: [
      { key: 'A', text: '$12,67$' },
      { key: 'B', text: '$17,42$' },
      { key: 'C', text: '$14,56$' },
      { key: 'D', text: '$17,17$' },
    ],
    correctAnswer: 'D',
    explanation: `Nhóm chứa mốt là nhóm $[10,5; 20,5)$ vì có tần số lớn nhất $m_2 = 10$.
Ta có: $u_m = 10,5$, $m_1 = 2$, $m_2 = 10$, $m_3 = 6$, độ dài nhóm $h = 20,5 - 10,5 = 10$.
Mốt của mẫu số liệu ghép nhóm là:
$$M_o = u_m + \\frac{m_2 - m_1}{(m_2 - m_1) + (m_2 - m_3)} \\cdot h = 10,5 + \\frac{10 - 2}{(10 - 2) + (10 - 6)} \\cdot 10 = 10,5 + \\frac{8}{12} \\cdot 10 \\approx 17,17$$
Vậy chọn đáp án D.`,
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $f(x) = \\begin{cases} \\log_2(2 - x), & x < 1 \\\\ 2^{x-1}, & x \\ge 1 \\end{cases}$. Khi đó $f(-2) + f(\\log_2 10) =$',
    options: [
      { key: 'A', text: '$2$' },
      { key: 'B', text: '$5$' },
      { key: 'C', text: '$7$' },
      { key: 'D', text: '$10$' },
    ],
    correctAnswer: 'C',
    explanation: `- Vì $-2 < 1$ nên $f(-2) = \\log_2(2 - (-2)) = \\log_2 4 = 2$.
- Vì $\\log_2 10 > \\log_2 2 = 1$ nên $f(\\log_2 10) = 2^{\\log_2 10 - 1} = \\dfrac{2^{\\log_2 10}}{2} = \\dfrac{10}{2} = 5$.
Suy ra:
$$f(-2) + f(\\log_2 10) = 2 + 5 = 7$$
Vậy chọn đáp án C.`,
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Hiện có một hoạt động cần kéo dài hai ngày, cần chọn $2$ người trong $5$ người để tham gia, mỗi ngày sắp xếp một người. Nếu trong đó hai người An, Bình đều không tham gia trong hai ngày này, thì có bao nhiêu cách sắp xếp khác nhau?',
    options: [
      { key: 'A', text: '$20$ cách' },
      { key: 'B', text: '$10$ cách' },
      { key: 'C', text: '$8$ cách' },
      { key: 'D', text: '$6$ cách' },
    ],
    correctAnswer: 'D',
    explanation: `Vì hai người An và Bình đều không tham gia nên ta chọn $2$ người từ $5 - 2 = 3$ người còn lại để xếp vào $2$ ngày (mỗi ngày một người).
Số cách sắp xếp là $A_3^2 = 3 \\times 2 = 6$ (cách).
Vậy chọn đáp án D.`,
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Biết bán kính hai đáy của hình nón cụt lần lượt là $1, 3$, đường sinh dài $4$, khi đó diện tích xung quanh của hình nón cụt là',
    options: [
      { key: 'A', text: '$32\\pi$' },
      { key: 'B', text: '$26\\pi$' },
      { key: 'C', text: '$16\\pi$' },
      { key: 'D', text: '$8\\pi$' },
    ],
    correctAnswer: 'C',
    explanation: `Diện tích xung quanh của hình nón cụt có bán kính hai đáy $r_1 = 1, r_2 = 3$ và đường sinh $l = 4$ là:
$$S_{\\text{xq}} = \\pi (r_1 + r_2) l = \\pi (1 + 3) \\cdot 4 = 16\\pi$$
Vậy chọn đáp án C.`,
  },

  // ============================================================================
  // PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG SAI (CÂU 1 - CÂU 4, ID 13 - 16)
  // ============================================================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Một xưởng in có $13$ máy in được cài đặt tự động và được giám sát bởi một kỹ sư, mỗi máy in có thể in được $12$ ấn phẩm/giờ. Chi phí cài đặt và bảo dưỡng cho mỗi máy in cho một đợt hàng là $48\\,000$ đồng. Chi phí trả cho kỹ sư giám sát là $28\\,000$ đồng/giờ. Đợt hàng này xưởng in nhận $2280$ ấn phẩm. Gọi $x$ là số lượng máy in cần sử dụng. Khi đó:',
    statements: [
      {
        key: 'a',
        text: 'Chi phí cài đặt và bảo dưỡng cho đợt hàng là $48x$ nghìn đồng.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Số lượng ấn phẩm in được trong một giờ là $12x$ ấn phẩm.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Thời gian để in xong $2280$ ấn phẩm là $\\dfrac{190}{x}$ giờ.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Số máy cần sử dụng để tổng chi phí nhỏ nhất là $10$ máy.',
        correct: false,
      },
    ],
    explanation: `- **Ý a) Đúng**: Chi phí cài đặt và bảo dưỡng cho $x$ máy in là $48x$ (nghìn đồng).
- **Ý b) Đúng**: Mỗi máy in được $12$ ấn phẩm/giờ nên $x$ máy in được $12x$ ấn phẩm/giờ.
- **Ý c) Đúng**: Thời gian để $x$ máy in xong $2280$ ấn phẩm là $t = \\dfrac{2280}{12x} = \\dfrac{190}{x}$ (giờ).
- **Ý d) Sai**: Tổng chi phí cho đợt hàng (đơn vị: nghìn đồng) là:
  $$C(x) = 48x + 28 \\cdot \\frac{190}{x} = 48x + \\frac{5320}{x} \\quad (x \\in \\mathbb{N}^*, 1 \\le x \\le 13)$$
  Ta có $C'(x) = 48 - \\dfrac{5320}{x^2} = 0 \\iff x = \\sqrt{\\dfrac{665}{6}} \\approx 10,53$.
  So sánh giá trị tại $x = 10$ và $x = 11$:
  + $C(10) = 480 + 532 = 1012$ (nghìn đồng);
  + $C(11) = 528 + \\dfrac{5320}{11} \\approx 1011,64$ (nghìn đồng).
  Vì $C(11) < C(10)$ nên cần sử dụng $11$ máy in để tổng chi phí nhỏ nhất.`,
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hàm số $f(x) = x^3 - 27x + 8$. Khi đó:',
    statements: [
      {
        key: 'a',
        text: "$f'(x) = 3x^2 - 27$.",
        correct: true,
      },
      {
        key: 'b',
        text: "Tập nghiệm của phương trình $f'(x) = 0$ là $S = \\{3\\}$.",
        correct: false,
      },
      {
        key: 'c',
        text: '$f(3) = -46$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[-4; 4]$ là $-46$.',
        correct: false,
      },
    ],
    explanation: `- **Ý a) Đúng**: Đạo hàm của hàm số là $f'(x) = 3x^2 - 27$.
- **Ý b) Sai**: Phương trình $f'(x) = 0 \\iff 3x^2 - 27 = 0 \\iff x = \\pm 3$, nên tập nghiệm là $S = \\{-3; 3\\} \\neq \\{3\\}$.
- **Ý c) Đúng**: Thay $x = 3$ vào hàm số: $f(3) = 3^3 - 27\\cdot 3 + 8 = -46$.
- **Ý d) Sai**: Trên đoạn $[-4; 4]$, ta có $f(-4) = 52, f(-3) = 62, f(3) = -46, f(4) = -36$. Giá trị lớn nhất của hàm số trên đoạn $[-4; 4]$ là $f(-3) = 62$ (còn $-46$ là giá trị nhỏ nhất).`,
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Biết hàm số $f(x) = (1 - 2x)^6 = a_0 + a_1 x + a_2 x^2 + \\dots + a_6 x^6$, $a_i \\in \\mathbb{R}, i = \\{0, 1, 2, 3, \\dots, 6\\}$. Khi đó:',
    statements: [
      {
        key: 'a',
        text: '$a_0 + a_1 + a_2 + \\dots + a_6 = -1$.',
        correct: false,
      },
      {
        key: 'b',
        text: '$a_1 + a_3 + a_5 = -364$.',
        correct: true,
      },
      {
        key: 'c',
        text: '$a_1 + 2a_2 + 3a_3 + \\dots + 6a_6 = 12$.',
        correct: true,
      },
      {
        key: 'd',
        text: '$f(5)$ chia cho $8$ dư $7$.',
        correct: false,
      },
    ],
    explanation: `- **Ý a) Sai**: Thay $x = 1$ vào $f(x)$, ta được $a_0 + a_1 + a_2 + \\dots + a_6 = f(1) = (1 - 2)^6 = 1 \\neq -1$.
- **Ý b) Đúng**: Ta có $f(1) = 1$ và $f(-1) = (1 + 2)^6 = 729$.
  Suy ra $a_1 + a_3 + a_5 = \\dfrac{f(1) - f(-1)}{2} = \\dfrac{1 - 729}{2} = -364$.
- **Ý c) Đúng**: Lấy đạo hàm hai vế: $f'(x) = -12(1 - 2x)^5 = a_1 + 2a_2 x + 3a_3 x^2 + \\dots + 6a_6 x^5$.
  Thay $x = 1$, ta được $a_1 + 2a_2 + 3a_3 + \\dots + 6a_6 = f'(1) = -12(1 - 2)^5 = 12$.
- **Ý d) Sai**: Ta có $f(5) = (1 - 10)^6 = (-9)^6 = 9^6$. Vì $9 \\equiv 1 \\pmod 8$ nên $9^6 \\equiv 1^6 \\equiv 1 \\pmod 8$, tức $f(5)$ chia cho $8$ dư $1$.`,
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Như hình vẽ, trong hình chữ nhật $ABCD$, $AB = 2AD$, $E$ là trung điểm của cạnh $AB$. Gấp tam giác $ADE$ theo đường thẳng $DE$ để được tam giác $A_1DE$. Nếu $M$ là trung điểm của đoạn thẳng $A_1C$, thì trong quá trình gấp tam giác $ADE$, xét tính đúng/sai các mệnh đề sau:',
    diagramType: 'DE05_FOLD_P2_Q4',
    statements: [
      {
        key: 'a',
        text: 'Độ dài $BM$ là một hằng số.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Quỹ tích chuyển động của điểm $M$ nằm trên một đường tròn.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Tồn tại một vị trí sao cho $DE \\perp A_1C$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Khi $A_1$ không nằm trên mặt phẳng $(BCD)$ thì $MB \\parallel (A_1DE)$.',
        correct: true,
      },
    ],
    explanation: `Đặt $AD = a > 0 \\implies AB = 2a, AE = EB = a$. Gọi $O$ là trung điểm của $DE$.
- **Ý b) Đúng, Ý a) Đúng**: Trong quá trình gấp, vì $A_1O \\perp DE$ và $A_1O = \\dfrac{a\\sqrt{2}}{2}$ không đổi nên $A_1$ chuyển động trên đường tròn tâm $O$, bán kính $R = \\dfrac{a\\sqrt{2}}{2}$ nằm trong mặt phẳng vuông góc với $DE$ tại $O$.
  Vì $M$ là trung điểm của $CA_1$, qua phép vị tự tâm $C$ tỉ số $\\dfrac{1}{2}$, quỹ tích điểm $M$ nằm trên đường tròn tâm $O_1$ (với $O_1$ là trung điểm của $CO$), bán kính $r = \\dfrac{R}{2} = \\dfrac{a\\sqrt{2}}{4}$ trong mặt phẳng vuông góc với $DE$ tại $O_1$.
  Mặt khác, dễ thấy $BO_1 \\parallel DE$ nên $BO_1$ vuông góc với mặt phẳng chứa đường tròn quỹ tích của $M$ tại tâm $O_1$ (với $BO_1 = \\dfrac{3a\\sqrt{2}}{4}$). Do đó:
  $$BM = \\sqrt{BO_1^2 + O_1M^2} = \\sqrt{\\frac{9a^2}{8} + \\frac{a^2}{8}} = \\frac{a\\sqrt{5}}{2} = \\text{hằng số}$$
- **Ý c) Sai**: Vì $OA_1 \\perp DE$ nên $\\overrightarrow{A_1C} \\cdot \\overrightarrow{DE} = (\\overrightarrow{OC} - \\overrightarrow{OA_1}) \\cdot \\overrightarrow{DE} = \\overrightarrow{OC} \\cdot \\overrightarrow{DE} = a^2 > 0$ không đổi, nên không tồn tại vị trí để $DE \\perp A_1C$.
- **Ý d) Đúng**: Gọi $F$ là trung điểm của $CD$. Ta có $BF \\parallel DE$ và $MF \\parallel A_1D$, suy ra $(MBF) \\parallel (A_1DE) \\implies MB \\parallel (A_1DE)$.`,
  },

  // ============================================================================
  // PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (CÂU 1 - CÂU 6, ID 17 - 22)
  // ============================================================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Cho hàm số bậc ba $f(x)$ có hệ số của số hạng bậc cao nhất bằng $1$ và $f(0) = 1$. Biết rằng với mọi số thực $x \\neq -1$, $\\dfrac{f(x)}{x + 1} \\ge 0$. Hãy tìm giá trị lớn nhất của $f\'(2)$.',
    correctAnswer: '27',
    explanation: `Vì $\\dfrac{f(x)}{x + 1} \\ge 0$ với mọi $x \\neq -1$ và $f(x)$ là đa thức bậc ba có hệ số cao nhất bằng $1$, nên $f(x)$ phải đổi dấu khi đi qua $x = -1$, tức $f(-1) = 0$.
Ta viết $f(x) = (x + 1)(x^2 + bx + c)$.
Do $f(0) = 1 \\implies c = 1$, suy ra $f(x) = (x + 1)(x^2 + bx + 1)$.
Điều kiện $\\dfrac{f(x)}{x + 1} = x^2 + bx + 1 \\ge 0, \\forall x \\neq -1 \\iff \\Delta = b^2 - 4 \\le 0 \\iff -2 \\le b \\le 2$.
Khai triển $f(x) = x^3 + (b + 1)x^2 + (b + 1)x + 1 \\implies f'(x) = 3x^2 + 2(b + 1)x + (b + 1)$.
Tại $x = 2$:
$$f'(2) = 12 + 5(b + 1) = 5b + 17 \\le 5 \\cdot 2 + 17 = 27$$
Dấu "$=$" xảy ra khi $b = 2$. Vậy giá trị lớn nhất của $f'(2)$ là $27$.
Đáp số: $27$.`,
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Biết dãy số $a_n$ thỏa mãn $a_1 = a_2 = 1$, $a_{n+2} = \\begin{cases} a_n + 2, & n = 2k - 1 \\\\ a_n, & n = 2k \\end{cases}, (k \\in \\mathbb{N}^*)$. Nếu $S_n$ là tổng $n$ số hạng đầu của dãy số $a_n$, thì $S_{50}$ bằng bao nhiêu?',
    correctAnswer: '650',
    explanation: `Từ công thức truy hồi của dãy số $(a_n)$:
- Dãy các số hạng có chỉ số lẻ $a_1, a_3, a_5, \\dots, a_{49}$ lập thành một cấp số cộng có $a_1 = 1$, công sai $d = 2$ (gồm $25$ số hạng).
- Dãy các số hạng có chỉ số chẵn $a_2, a_4, a_6, \\dots, a_{50}$ là dãy hằng: $a_{2k} = 1$ (gồm $25$ số hạng).
Do đó tổng $50$ số hạng đầu tiên của dãy là:
$$S_{50} = (a_1 + a_3 + \\dots + a_{49}) + (a_2 + a_4 + \\dots + a_{50}) = \\frac{25\\cdot [2\\cdot 1 + 24\\cdot 2]}{2} + 25\\cdot 1 = 625 + 25 = 650$$
Đáp số: $650$.`,
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Một xưởng cơ khí có hai công nhân là Chiến và Bình. Xưởng sản xuất loại sản phẩm I và II. Mỗi sản phẩm I bán lãi $500$ nghìn đồng, mỗi sản phẩm II bán lãi $400$ nghìn đồng. Để sản xuất được một sản phẩm I thì Chiến phải làm việc trong $3$ giờ, Bình phải làm việc trong $1$ giờ. Để sản xuất được một sản phẩm II thì Chiến phải làm việc trong $2$ giờ, Bình phải làm việc trong $6$ giờ. Một người không thể làm được đồng thời hai sản phẩm. Biết rằng trong một tháng Chiến không thể làm việc quá $180$ giờ và Bình không thể làm việc quá $220$ giờ. Số tiền lãi lớn nhất trong một tháng của xưởng là bao nhiêu triệu đồng?',
    correctAnswer: '32',
    explanation: `Gọi $x, y$ lần lượt là số sản phẩm loại I và loại II sản xuất trong một tháng ($x, y \\ge 0$).
Theo giả thiết ta có hệ bất phương trình:
$$\\begin{cases} 3x + 2y \\le 180 \\\\ x + 6y \\le 220 \\\\ x \\ge 0, \\ y \\ge 0 \\end{cases}$$
Tiền lãi thu được (đơn vị: triệu đồng) là $F(x; y) = 0,5x + 0,4y$.
Miền nghiệm của hệ là tứ giác lồi có các đỉnh $O(0; 0)$, $A(60; 0)$, $B(40; 30)$, $C\\left(0; \\dfrac{110}{3}\\right)$.
Tính giá trị của $F(x; y)$ tại các đỉnh:
- $F(0; 0) = 0$
- $F(60; 0) = 30$
- $F(40; 30) = 0,5\\cdot 40 + 0,4\\cdot 30 = 32$
- $F\\left(0; \\dfrac{110}{3}\\right) = \\dfrac{44}{3} \\approx 14,67$
Vậy số tiền lãi lớn nhất trong một tháng của xưởng là $32$ triệu đồng.
Đáp số: $32$.`,
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Một lớp 11 của một trường THPT có $18$ học sinh học giỏi môn Toán, $12$ học sinh học giỏi môn Ngữ Văn và có $10$ học sinh không giỏi môn nào (lớp không có học sinh học giỏi môn khác ngoài $2$ môn Toán và Ngữ Văn). Dịp đại hội Đoàn xã tháng 10 vừa qua, lớp này được chọn ra $2$ học sinh giỏi để dự đại hội Đoàn. Xác suất để trong $2$ học sinh được chọn có đúng $1$ học sinh giỏi cả Toán và Ngữ văn là $\\dfrac{9}{23}$. Số học sinh của lớp 11 này bằng bao nhiêu?',
    correctAnswer: '34',
    explanation: `Gọi $x$ là số học sinh giỏi cả hai môn Toán và Ngữ Văn ($x \\in \\mathbb{N}^*, 1 \\le x \\le 12$).
Tổng số học sinh giỏi của lớp là $n = 18 + 12 - x = 30 - x$, và số học sinh chỉ giỏi đúng $1$ môn là $(30 - x) - x = 30 - 2x$.
Xác suất chọn ra $2$ học sinh giỏi trong đó có đúng $1$ học sinh giỏi cả hai môn là:
$$\\frac{x(30 - 2x)}{C_{30-x}^2} = \\frac{9}{23} \\iff \\frac{2x(30 - 2x)}{(30 - x)(29 - x)} = \\frac{9}{23}$$
$$\\iff 101x^2 - 1911x + 7830 = 0 \\iff \\left[\\begin{array}{l} x = 6 \\text{ (nhận)} \\\\ x = \\dfrac{1305}{101} \\text{ (loại)} \\end{array}\\right.$$
Với $x = 6$, tổng số học sinh giỏi là $30 - 6 = 24$ (học sinh).
Vậy tổng số học sinh của lớp 11 này là $24 + 10 = 34$ (học sinh).
Đáp số: $34$.`,
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Cho hình lập phương $ABCD-A_1B_1C_1D_1$ có cạnh bằng $2$. Điểm $P$ thuộc không gian và thỏa mãn $AP \\perp (A_1BD)$. Qua $A_1B$ dựng mặt phẳng song song với $AP$, mặt phẳng này cắt $B_1C_1$ tại điểm $Q$. Khi đó $CQ$ bằng bao nhiêu? (Làm tròn kết quả đến hàng phần trăm)',
    correctAnswer: '2,24',
    explanation: `Chọn hệ trục tọa độ $Oxyz$ với gốc $A(0; 0; 0)$, $B(2; 0; 0)$, $D(0; 2; 0)$, $A_1(0; 0; 2)$, suy ra $C(2; 2; 0)$, $B_1(2; 0; 2)$, $C_1(2; 2; 2)$.
Mặt phẳng $(A_1BD)$ có vectơ pháp tuyến là $\\vec{n} = (1; 1; 1)$. Vì $AP \\perp (A_1BD)$ nên đường thẳng $AP$ có vectơ chỉ phương $\\vec{u}_{AP} = (1; 1; 1)$.
Mặt phẳng $(\\alpha)$ chứa $A_1B$ (có $\\overrightarrow{A_1B} = (2; 0; -2)$) và song song với $AP$ có vectơ pháp tuyến:
$$\\vec{n}_\\alpha = \\left[\\frac{1}{2}\\overrightarrow{A_1B}, \\vec{u}_{AP}\\right] = (1; -2; 1)$$
Phương trình mặt phẳng $(\\alpha)$ đi qua $B(2; 0; 0)$ là: $x - 2y + z - 2 = 0$.
Điểm $Q \\in B_1C_1$ có tọa độ $Q(2; y_Q; 2)$. Thay vào phương trình $(\\alpha)$:
$$2 - 2y_Q + 2 - 2 = 0 \\iff y_Q = 1 \\implies Q(2; 1; 2)$$
Vậy $CQ = \\sqrt{(2 - 2)^2 + (1 - 2)^2 + (2 - 0)^2} = \\sqrt{5} \\approx 2,24$.
Đáp số: $2,24$.`,
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Như hình vẽ, có $2$ thẻ màu đen và $8$ thẻ màu trắng, trên $8$ thẻ màu trắng lần lượt ghi các số tự nhiên từ $1$ đến $8$. Sử dụng tất cả các thẻ, mỗi thẻ đúng một lần, rồi xếp thành một hàng từ trái sang phải. Hỏi có bao nhiêu cách xếp thỏa mãn đồng thời các điều kiện sau?\n(Các thẻ màu đen không phân biệt với nhau.)\n(a) Các thẻ màu trắng được xếp sao cho các số ghi trên chúng tăng dần từ trái sang phải.\n(b) Giữa hai thẻ màu đen có ít nhất $2$ thẻ màu trắng.\n(c) Giữa hai thẻ màu đen có ít nhất $1$ thẻ màu trắng mang số là bội của $3$.',
    diagramType: 'DE05_CARDS_P3_Q6',
    correctAnswer: '25',
    explanation: `Do $8$ thẻ màu trắng được xếp tăng dần từ $1$ đến $8$ từ trái sang phải nên thứ tự của $8$ thẻ trắng là duy nhất.
Gọi $i$ là số thẻ trắng đứng bên trái thẻ đen thứ nhất và $j$ là số thẻ trắng đứng bên trái thẻ đen thứ hai ($0 \\le i < j \\le 8$).
Khi đó tập hợp các thẻ trắng nằm giữa hai thẻ đen là $S_{i,j} = \\{i + 1, i + 2, \\dots, j\\}$ (gồm $j - i$ thẻ).
- Theo điều kiện (b), $j - i \\ge 2 \\iff 1 \\le i + 1 < j \\le 8$. Số cặp $(i, j)$ thỏa mãn là $C_8^2 = 28$ (cách).
- Trong $28$ cách trên, các cách **không** chứa thẻ số $3$ và **không** chứa thẻ số $6$ ở giữa hai thẻ đen chỉ xảy ra khi $S_{i,j}$ là một trong $3$ tập hợp: $\\{1; 2\\}$, $\\{4; 5\\}$, $\\{7; 8\\}$ (có $3$ cách).
Vậy số cách xếp thỏa mãn đồng thời cả ba điều kiện là $28 - 3 = 25$ (cách).
Đáp số: $25$.`,
  },
];
