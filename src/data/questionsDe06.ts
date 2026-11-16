import { Question } from '../types';

export const QUESTIONS_DE06: Question[] = [
  // ============================================================================
  // PHẦN I: CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (CÂU 1 - CÂU 12)
  // ============================================================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText: 'Họ nghiệm của phương trình $\\sin 3x = \\dfrac{1}{2}$ là:',
    options: [
      {
        key: 'A',
        text: '$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{18} + \\dfrac{k2\\pi}{3} \\\\[6pt] x = \\dfrac{5\\pi}{18} + \\dfrac{k2\\pi}{3} \\end{array}\\right.$',
      },
      {
        key: 'B',
        text: '$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + \\dfrac{k2\\pi}{3} \\\\[6pt] x = \\dfrac{\\pi}{12} + \\dfrac{k2\\pi}{3} \\end{array}\\right.$',
      },
      {
        key: 'C',
        text: '$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{18} + k2\\pi \\\\[6pt] x = -\\dfrac{\\pi}{18} + k2\\pi \\end{array}\\right.$',
      },
      {
        key: 'D',
        text: '$\\left[\\begin{array}{l} x = \\dfrac{\\pi}{6} + \\dfrac{k2\\pi}{3} \\\\[6pt] x = \\dfrac{5\\pi}{6} + \\dfrac{k2\\pi}{3} \\end{array}\\right.$',
      },
    ],
    correctAnswer: 'A',
    explanation: `Ta có:
$$\\sin 3x = \\frac{1}{2} \\iff \\sin 3x = \\sin\\frac{\\pi}{6} \\iff \\left[\\begin{array}{l} 3x = \\dfrac{\\pi}{6} + k2\\pi \\\\[6pt] 3x = \\pi - \\dfrac{\\pi}{6} + k2\\pi \\end{array}\\right. \\iff \\left[\\begin{array}{l} x = \\dfrac{\\pi}{18} + \\dfrac{k2\\pi}{3} \\\\[6pt] x = \\dfrac{5\\pi}{18} + \\dfrac{k2\\pi}{3} \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$
Vậy chọn đáp án A.`,
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $y = \\log_a(x + b)$, trong đó $a, b$ là các hằng số, $a > 0$ và $a \\neq 1$, có đồ thị như hình vẽ. Khẳng định nào sau đây đúng?',
    diagramType: 'DE06_GRAPH_P1_Q2',
    options: [
      { key: 'A', text: '$a = 0,5, \\ b = 2$' },
      { key: 'B', text: '$a = 2, \\ b = 2$' },
      { key: 'C', text: '$a = 0,5, \\ b = 0,5$' },
      { key: 'D', text: '$a = 2, \\ b = 0,5$' },
    ],
    correctAnswer: 'D',
    explanation: `Quan sát đồ thị hàm số $y = \\log_a(x + b)$, ta thấy đồ thị đi qua hai điểm $(0,5; 0)$ và $(0; -1)$:
- Thay tọa độ điểm $(0,5; 0)$ vào phương trình hàm số:
  $$\\log_a(0,5 + b) = 0 \\iff 0,5 + b = 1 \\iff b = 0,5$$
- Thay tọa độ điểm $(0; -1)$ và $b = 0,5$ vào phương trình hàm số:
  $$\\log_a(0 + 0,5) = -1 \\iff a^{-1} = 0,5 \\iff a = 2$$
Vậy $a = 2, \\ b = 0,5$. Chọn đáp án D.`,
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho bảng ô vuông $3 \\times 3$ như hình vẽ, trong đó ô chính giữa đã được điền số $5$. Chỉ điền vào bốn ô còn lại thuộc hàng thứ hai hoặc cột thứ hai, mỗi ô một số được chọn từ các số tự nhiên $1, 2, \\dots, 9$, các số đã điền đôi một khác nhau. Yêu cầu các số ở hàng thứ hai, theo thứ tự từ trái sang phải, và các số ở cột thứ hai, theo thứ tự từ trên xuống dưới, đều tăng dần. Khi đó số cách điền khác nhau là',
    diagramType: 'DE06_GRID_P1_Q3',
    options: [
      { key: 'A', text: '$72$' },
      { key: 'B', text: '$108$' },
      { key: 'C', text: '$144$' },
      { key: 'D', text: '$196$' },
    ],
    correctAnswer: 'C',
    explanation: `Theo yêu cầu bài toán:
- Ô bên trái của số $5$ (hàng thứ hai, cột thứ nhất) và ô phía trên của số $5$ (hàng thứ nhất, cột thứ hai) phải điền các số nhỏ hơn $5$, tức được chọn từ tập $\\{1; 2; 3; 4\\}$ (gồm $4$ phần tử). Số cách chọn và điền vào $2$ ô này là $A_4^2 = 4 \\times 3 = 12$ (cách).
- Ô bên phải của số $5$ (hàng thứ hai, cột thứ ba) và ô phía dưới của số $5$ (hàng thứ ba, cột thứ hai) phải điền các số lớn hơn $5$, tức được chọn từ tập $\\{6; 7; 8; 9\\}$ (gồm $4$ phần tử). Số cách chọn và điền vào $2$ ô này là $A_4^2 = 4 \\times 3 = 12$ (cách).
Theo quy tắc nhân, tổng số cách điền khác nhau là:
$$12 \\times 12 = 144 \\text{ (cách)}$$
Vậy chọn đáp án C.`,
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật. Gọi $M, N$ theo thứ tự là trọng tâm $\\triangle SAB; \\triangle SCD$. Khi đó $MN$ song song với mặt phẳng',
    options: [
      { key: 'A', text: '$(SAC)$' },
      { key: 'B', text: '$(SBD)$' },
      { key: 'C', text: '$(SAB)$' },
      { key: 'D', text: '$(ABCD)$' },
    ],
    correctAnswer: 'D',
    explanation: `Gọi $E, F$ lần lượt là trung điểm của các cạnh $AB$ và $CD$.
Vì $M, N$ lần lượt là trọng tâm của $\\triangle SAB$ và $\\triangle SCD$ nên trong $\\triangle SEF$, ta có:
$$\\frac{SM}{SE} = \\frac{SN}{SF} = \\frac{2}{3}$$
Theo định lý Thalès đảo, suy ra $MN \\parallel EF$.
Mà $EF \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$ nên $MN \\parallel (ABCD)$.
Vậy chọn đáp án D.`,
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Tìm hiểu thời gian hoàn thành một bài tập (đơn vị: phút) của một số học sinh thu được kết quả ở bảng sau. Thời gian trung bình (phút) để hoàn thành bài tập của các em học sinh là',
    diagramType: 'DE06_TABLE_P1_Q5',
    options: [
      { key: 'A', text: '$7$' },
      { key: 'B', text: '$11,3$' },
      { key: 'C', text: '$10,4$' },
      { key: 'D', text: '$12,5$' },
    ],
    correctAnswer: 'C',
    explanation: `Giá trị đại diện của các nhóm $[0; 4), [4; 8), [8; 12), [12; 16), [16; 20)$ lần lượt là $2; 6; 10; 14; 18$.
Cỡ mẫu là $n = 2 + 4 + 7 + 4 + 3 = 20$.
Thời gian trung bình để hoàn thành bài tập của các em học sinh là:
$$\\bar{x} = \\frac{2\\cdot 2 + 4\\cdot 6 + 7\\cdot 10 + 4\\cdot 14 + 3\\cdot 18}{20} = \\frac{208}{20} = 10,4 \\text{ (phút)}$$
Vậy chọn đáp án C.`,
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Như hình vẽ, hai linh kiện $A$ và $B$ được mắc nối tiếp tạo thành một đoạn mạch. Gọi $M$ là biến cố “linh kiện $A$ bị hỏng”, $N$ là biến cố “linh kiện $B$ bị hỏng”. Khi đó, biến cố biểu thị “đoạn mạch không bị hỏng” là',
    diagramType: 'DE06_CIRCUIT_P1_Q6',
    options: [
      { key: 'A', text: '$M \\cup N$' },
      { key: 'B', text: '$M \\cap N$' },
      { key: 'C', text: '$\\overline{M} \\cap \\overline{N}$' },
      { key: 'D', text: '$\\overline{M} \\cup \\overline{N}$' },
    ],
    correctAnswer: 'C',
    explanation: `Vì hai linh kiện $A$ và $B$ được mắc nối tiếp nên đoạn mạch không bị hỏng khi và chỉ khi cả hai linh kiện $A$ và $B$ đều không bị hỏng.
Biến cố “linh kiện $A$ không bị hỏng” là $\\overline{M}$, biến cố “linh kiện $B$ không bị hỏng” là $\\overline{N}$.
Do đó biến cố “đoạn mạch không bị hỏng” là $\\overline{M} \\cap \\overline{N}$.
Vậy chọn đáp án C.`,
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
    diagramType: 'DE06_BBT_P1_Q7',
    options: [
      { key: 'A', text: '$(-1; 0)$' },
      { key: 'B', text: '$(-\\infty; 0)$' },
      { key: 'C', text: '$(1; +\\infty)$' },
      { key: 'D', text: '$(0; 1)$' },
    ],
    correctAnswer: 'D',
    explanation: `Dựa vào bảng biến thiên, ta thấy $f'(x) < 0$ trên các khoảng $(-\\infty; -1)$ và $(0; 1)$.
Do đó hàm số đã cho nghịch biến trên khoảng $(0; 1)$.
Vậy chọn đáp án D.`,
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Biết $0 < b < a < 1$. Xét bốn mệnh đề sau:\n① Với mọi $x \\in (0; +\\infty)$, $a^x > b^x$;\n② Với mọi $x \\in (0; 1)$, $\\log_a x > \\log_b x$;\n③ Tồn tại $x \\in (0; 1)$ sao cho $x^a > x^b$;\n④ Tồn tại $x \\in (0; b)$ sao cho $a^x > \\log_a x$.\nTrong các mệnh đề trên, các mệnh đề đúng là:',
    options: [
      { key: 'A', text: '①③' },
      { key: 'B', text: '②④' },
      { key: 'C', text: '①②' },
      { key: 'D', text: '③④' },
    ],
    correctAnswer: 'C',
    explanation: `Với $0 < b < a < 1$:
- **Mệnh đề ① đúng**: Vì $\\dfrac{a}{b} > 1$ nên với mọi $x > 0$, ta có $\\left(\\dfrac{a}{b}\\right)^x > 1 \\iff a^x > b^x$.
- **Mệnh đề ② đúng**: Vì $0 < b < a < 1$ nên $\\ln b < \\ln a < 0 \\implies \\dfrac{1}{\\ln a} < \\dfrac{1}{\\ln b} < 0$. Với mọi $x \\in (0; 1)$, ta có $\\ln x < 0$, nhân hai vế với $\\ln x < 0$ ta được $\\dfrac{\\ln x}{\\ln a} > \\dfrac{\\ln x}{\\ln b} \\iff \\log_a x > \\log_b x$.
- **Mệnh đề ③ sai**: Với mọi $x \\in (0; 1)$, hàm số mũ cơ số $x$ nghịch biến nên từ $a > b$ suy ra $x^a < x^b$ với mọi $x \\in (0; 1)$.
- **Mệnh đề ④ sai**: Với mọi $x \\in (0; b)$, vì $0 < a < 1$ nên $a^x < a^0 = 1$, trong khi $\\log_a x > \\log_a b > \\log_a a = 1$, suy ra $a^x < 1 < \\log_a x$.
Vậy các mệnh đề đúng là ① và ②. Chọn đáp án C.`,
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Cho hàm số $f(x)$ có đồ thị như hình bên. Giá trị lớn nhất của hàm số $f(x)$ trên đoạn $[-3; 2]$ đạt tại $x$ bằng',
    diagramType: 'DE06_GRAPH_P1_Q9',
    options: [
      { key: 'A', text: '$4$' },
      { key: 'B', text: '$2$' },
      { key: 'C', text: '$-3$' },
      { key: 'D', text: '$0$' },
    ],
    correctAnswer: 'C',
    explanation: `Quan sát đồ thị hàm số $y = f(x)$ trên đoạn $[-3; 2]$:
- Điểm cao nhất của đồ thị trên đoạn $[-3; 2]$ là điểm $(-3; 4)$, tức $\\max_{[-3; 2]} f(x) = 4$ đạt được tại $x = -3$.
Vậy chọn đáp án C.`,
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText: 'Tiệm cận đứng của đồ thị hàm số $y = \\dfrac{2x + 4}{x - 1}$ là',
    options: [
      { key: 'A', text: '$x = 1$' },
      { key: 'B', text: '$x = -1$' },
      { key: 'C', text: '$x = 2$' },
      { key: 'D', text: '$x = -2$' },
    ],
    correctAnswer: 'A',
    explanation: `Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.
Ta có $\\lim_{x \\to 1^+} \\dfrac{2x + 4}{x - 1} = +\\infty$ và $\\lim_{x \\to 1^-} \\dfrac{2x + 4}{x - 1} = -\\infty$.
Vậy đường thẳng $x = 1$ là tiệm cận đứng của đồ thị hàm số. Chọn đáp án A.`,
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText: 'Hàm số nào dưới đây có đồ thị như đường cong trong hình bên?',
    diagramType: 'DE06_GRAPH_P1_Q11',
    options: [
      { key: 'A', text: '$y = \\dfrac{x^2 - 2x + 3}{x - 1}$' },
      { key: 'B', text: '$y = \\dfrac{x + 1}{x - 1}$' },
      { key: 'C', text: '$y = x^3 - 3x - 1$' },
      { key: 'D', text: '$y = x^2 + x - 1$' },
    ],
    correctAnswer: 'C',
    explanation: `Đường cong trong hình vẽ là đồ thị của hàm số bậc ba có hai điểm cực trị và nhánh ngoài cùng bên phải đi lên ($a > 0$), cắt trục tung tại điểm có tung độ âm $(0; -1)$.
Trong bốn phương án đã cho, chỉ có hàm số $y = x^3 - 3x - 1$ thỏa mãn.
Vậy chọn đáp án C.`,
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I: Trắc nghiệm 4 phương án',
    questionText:
      'Như hình vẽ, trong hình hộp $ABCD-A_1B_1C_1D_1$, điểm $M$ là giao điểm của $A_1C_1$ và $B_1D_1$. Biết $\\overrightarrow{AB} = \\vec{a}, \\overrightarrow{AD} = \\vec{b}, \\overrightarrow{AA_1} = \\vec{c}$. Khi đó $\\overrightarrow{BM} =$',
    diagramType: 'DE06_BOX_P1_Q12',
    options: [
      { key: 'A', text: '$\\dfrac{1}{2}\\vec{a} - \\dfrac{1}{2}\\vec{b} + \\vec{c}$' },
      { key: 'B', text: '$\\dfrac{1}{2}\\vec{a} + \\dfrac{1}{2}\\vec{b} + \\vec{c}$' },
      { key: 'C', text: '$-\\dfrac{1}{2}\\vec{a} - \\dfrac{1}{2}\\vec{b} + \\vec{c}$' },
      { key: 'D', text: '$-\\dfrac{1}{2}\\vec{a} + \\dfrac{1}{2}\\vec{b} + \\vec{c}$' },
    ],
    correctAnswer: 'D',
    explanation: `Vì $M$ là giao điểm hai đường chéo của hình bình hành $A_1B_1C_1D_1$ nên $M$ là trung điểm của $B_1D_1$.
Ta có:
$$\\overrightarrow{BM} = \\overrightarrow{BB_1} + \\overrightarrow{B_1M} = \\overrightarrow{AA_1} + \\frac{1}{2}\\overrightarrow{B_1D_1} = \\overrightarrow{AA_1} + \\frac{1}{2}\\overrightarrow{BD}$$
Mà $\\overrightarrow{BD} = \\overrightarrow{AD} - \\overrightarrow{AB} = \\vec{b} - \\vec{a}$, suy ra:
$$\\overrightarrow{BM} = \\vec{c} + \\frac{1}{2}(\\vec{b} - \\vec{a}) = -\\frac{1}{2}\\vec{a} + \\frac{1}{2}\\vec{b} + \\vec{c}$$
Vậy chọn đáp án D.`,
  },

  // ============================================================================
  // PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG SAI (CÂU 1 - CÂU 4, ID 13 - 16)
  // ============================================================================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Đối với hàm số bậc ba $f(x) = ax^3 + bx^2 + cx + d$ với $a \\neq 0$, cho định nghĩa: $f\'(x)$ là đạo hàm của hàm số $y = f(x)$, $f\'\'(x)$ là đạo hàm của hàm số $f\'(x)$. Nếu phương trình $f\'\'(x) = 0$ có nghiệm thực $x_0$ thì điểm $(x_0; f(x_0))$ được gọi là “điểm uốn” của hàm số $y = f(x)$.\nMột học sinh sau khi tìm hiểu đã phát hiện rằng: mọi hàm số bậc ba đều có “điểm uốn”; mọi hàm số bậc ba đều có tâm đối xứng và “điểm uốn” chính là tâm đối xứng.\nCho hàm số $f(x) = \\dfrac{2}{3}x^3 - x^2 - 12x + \\dfrac{49}{6}$. Khi đó:',
    statements: [
      {
        key: 'a',
        text: 'Giá trị cực đại của $f(x)$ là $\\dfrac{137}{6}$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Hàm số $f(x)$ có đúng $2$ nghiệm.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Điểm $\\left(\\dfrac{1}{2}; 2\\right)$ là tâm đối xứng của đồ thị hàm số $f(x)$.',
        correct: true,
      },
      {
        key: 'd',
        text: '$f\\left(\\dfrac{1}{2024}\\right) + f\\left(\\dfrac{2}{2024}\\right) + f\\left(\\dfrac{3}{2024}\\right) + \\dots + f\\left(\\dfrac{2023}{2024}\\right) = 4046$.',
        correct: true,
      },
    ],
    explanation: `Ta có $f'(x) = 2x^2 - 2x - 12 = 2(x + 2)(x - 3)$ và $f''(x) = 4x - 2$.
- **Ý a) Đúng**: Cho $f'(x) = 0 \\iff x = -2$ (điểm cực đại) hoặc $x = 3$ (điểm cực tiểu).
  Giá trị cực đại của hàm số là:
  $$f(-2) = \\frac{2}{3}(-2)^3 - (-2)^2 - 12(-2) + \\frac{49}{6} = -\\frac{16}{3} + 20 + \\frac{49}{6} = \\frac{137}{6}$$
- **Ý b) Sai**: Giá trị cực tiểu là $f(3) = \\dfrac{2}{3}\\cdot 27 - 9 - 36 + \\dfrac{49}{6} = -\\dfrac{113}{6} < 0$.
  Vì $f(-2) \\cdot f(3) < 0$ nên đồ thị hàm số bậc ba cắt trục hoành tại $3$ điểm phân biệt, tức hàm số có $3$ nghiệm phân biệt.
- **Ý c) Đúng**: Cho $f''(x) = 0 \\iff 4x - 2 = 0 \\iff x_0 = \\dfrac{1}{2}$.
  Ta có $f\\left(\\dfrac{1}{2}\\right) = \\dfrac{2}{3}\\cdot\\dfrac{1}{8} - \\dfrac{1}{4} - 6 + \\dfrac{49}{6} = 2$.
  Vậy điểm uốn $I\\left(\\dfrac{1}{2}; 2\\right)$ là tâm đối xứng của đồ thị hàm số.
- **Ý d) Đúng**: Vì $I\\left(\\dfrac{1}{2}; 2\\right)$ là tâm đối xứng của đồ thị nên với mọi $x \\in \\mathbb{R}$, ta có $f(x) + f(1 - x) = 2\\cdot 2 = 4$.
  Ghép cặp $2023$ số hạng của tổng $S = \\sum_{k=1}^{2023} f\\left(\\dfrac{k}{2024}\\right)$, ta được:
  $$2S = \\sum_{k=1}^{2023} \\left[f\\left(\\frac{k}{2024}\\right) + f\\left(1 - \\frac{k}{2024}\\right)\\right] = 2023 \\times 4 \\implies S = 4046$$`,
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Cho hàm số $y = f(x) = \\dfrac{x^2 - x + 2}{x - 2}$ có đồ thị $(C)$.',
    statements: [
      {
        key: 'a',
        text: 'Tiệm cận đứng của đồ thị $(C)$ là $x = 2$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Hàm số đồng biến trên $(0; 2)$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Đường thẳng $y = x + 1$ là tiệm cận xiên của đồ thị $(C)$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Có $2024$ giá trị nguyên của $m \\in [0; 2025]$ để đường thẳng $y = m$ cắt đồ thị $(C)$ tại hai điểm phân biệt.',
        correct: false,
      },
    ],
    explanation: `Tập xác định: $D = \\mathbb{R} \\setminus \\{2\\}$. Viết lại hàm số:
$$y = f(x) = x + 1 + \\frac{4}{x - 2} \\implies f'(x) = 1 - \\frac{4}{(x - 2)^2} = \\frac{x(x - 4)}{(x - 2)^2}$$
- **Ý a) Đúng**: Vì $\\lim_{x \\to 2^+} f(x) = +\\infty$ và $\\lim_{x \\to 2^-} f(x) = -\\infty$ nên $x = 2$ là tiệm cận đứng của $(C)$.
- **Ý b) Sai**: Với mọi $x \\in (0; 2)$, ta có $f'(x) < 0$ nên hàm số nghịch biến trên $(0; 2)$.
- **Ý c) Đúng**: Vì $\\lim_{x \\to \\pm\\infty} [f(x) - (x + 1)] = \\lim_{x \\to \\pm\\infty} \\dfrac{4}{x - 2} = 0$ nên $y = x + 1$ là tiệm cận xiên của $(C)$.
- **Ý d) Sai**: Hàm số đạt cực đại tại $x = 0$ với $y_{\\text{CĐ}} = f(0) = -1$ và đạt cực tiểu tại $x = 4$ với $y_{\\text{CT}} = f(4) = 7$.
  Đường thẳng $y = m$ cắt $(C)$ tại hai điểm phân biệt khi và chỉ khi $m < -1$ hoặc $m > 7$.
  Với $m \\in [0; 2025]$ và $m \\in \\mathbb{Z}$, ta có $m \\in \\{8; 9; \\dots; 2025\\}$, tức có $2025 - 8 + 1 = 2018$ giá trị nguyên (không phải $2024$).`,
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Trò chơi nhảy ô: Như hình vẽ, một người đứng ngoài các ô và chỉ có thể đi vào ô thứ nhất. Khi ở trong các ô, mỗi lần người đó có thể nhảy về phía trước $1$ ô hoặc $2$ ô. Khi đó:',
    diagramType: 'DE06_HOPSCOTCH_P2_Q3',
    statements: [
      {
        key: 'a',
        text: 'Có $2$ cách để đi đến ô thứ nhất.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Có $1$ cách để đi đến ô thứ hai.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Có $2$ cách để đi đến ô thứ ba.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Có $21$ cách để đi đến ô thứ tám.',
        correct: true,
      },
    ],
    explanation: `Gọi $u_n$ là số cách đi đến ô thứ $n$ ($n \\ge 1$).
- **Ý a) Sai**: Vì người đó đứng ngoài các ô và chỉ có thể bước vào ô thứ nhất nên chỉ có duy nhất $1$ cách đến ô thứ nhất ($u_1 = 1$).
- **Ý b) Đúng**: Để đến ô thứ hai, người đó chỉ có thể đi từ ngoài vào ô $1$ rồi nhảy $1$ ô sang ô $2$, nên có $u_2 = 1$ cách.
- **Ý c) Đúng**: Để đến ô thứ ba, người đó có thể nhảy từ ô $1$ sang ô $3$ hoặc nhảy $1 \\to 2 \\to 3$, nên có $u_3 = u_1 + u_2 = 1 + 1 = 2$ cách.
- **Ý d) Đúng**: Với mỗi $n \\ge 3$, để đến ô thứ $n$ người đó có thể nhảy $1$ bước từ ô $n - 1$ hoặc nhảy $2$ bước từ ô $n - 2$, nên $u_n = u_{n-1} + u_{n-2}$.
  Liệt kê các số hạng:
  $$u_1 = 1, \\ u_2 = 1, \\ u_3 = 2, \\ u_4 = 3, \\ u_5 = 5, \\ u_6 = 8, \\ u_7 = 13, \\ u_8 = 21$$
  Vậy có $21$ cách để đi đến ô thứ tám.`,
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II: Trắc nghiệm đúng sai',
    questionText:
      'Như hình vẽ, trong hình hộp $ABCD-A_1B_1C_1D_1$, ba cạnh xuất phát từ đỉnh $A$ đều có độ dài bằng $6$ và góc giữa từng cặp cạnh đều bằng $60^\\circ$.',
    diagramType: 'DE06_PARALLELEPIPED_P2_Q4',
    statements: [
      {
        key: 'a',
        text: '$AC_1 = 6\\sqrt{6}$.',
        correct: true,
      },
      {
        key: 'b',
        text: '$AC_1 \\perp BD$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Góc giữa hai vectơ $\\overrightarrow{B_1C}$ và $\\overrightarrow{AA_1}$ bằng $60^\\circ$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Cosin của góc giữa hai vectơ $\\overrightarrow{BD_1}$ và $\\overrightarrow{AC}$ bằng $\\dfrac{\\sqrt{6}}{3}$.',
        correct: false,
      },
    ],
    explanation: `Đặt $\\vec{a} = \\overrightarrow{AB}, \\vec{b} = \\overrightarrow{AD}, \\vec{c} = \\overrightarrow{AA_1}$. Theo giả thiết: $|\\vec{a}| = |\\vec{b}| = |\\vec{c}| = 6$ và $\\vec{a}\\cdot\\vec{b} = \\vec{b}\\cdot\\vec{c} = \\vec{c}\\cdot\\vec{a} = 6\\cdot 6\\cdot\\cos 60^\\circ = 18$.
- **Ý a) Đúng**: Ta có $\\overrightarrow{AC_1} = \\vec{a} + \\vec{b} + \\vec{c}$, suy ra:
  $$AC_1^2 = (\\vec{a} + \\vec{b} + \\vec{c})^2 = 3\\cdot 36 + 2(18 + 18 + 18) = 216 \\implies AC_1 = 6\\sqrt{6}$$
- **Ý b) Đúng**: Ta có $\\overrightarrow{BD} = \\vec{b} - \\vec{a}$, suy ra:
  $$\\overrightarrow{AC_1}\\cdot\\overrightarrow{BD} = (\\vec{a} + \\vec{b} + \\vec{c})\\cdot(\\vec{b} - \\vec{a}) = |\\vec{b}|^2 - |\\vec{a}|^2 + \\vec{c}\\cdot\\vec{b} - \\vec{c}\\cdot\\vec{a} = 36 - 36 + 18 - 18 = 0 \\implies AC_1 \\perp BD$$
- **Ý c) Sai**: Ta có $\\overrightarrow{B_1C} = \\overrightarrow{A_1D} = \\vec{b} - \\vec{c}$ (với $|\\overrightarrow{B_1C}| = 6$).
  Khi đó $\\overrightarrow{B_1C}\\cdot\\overrightarrow{AA_1} = (\\vec{b} - \\vec{c})\\cdot\\vec{c} = 18 - 36 = -18$, nên:
  $$\\cos(\\overrightarrow{B_1C}, \\overrightarrow{AA_1}) = \\frac{-18}{6\\cdot 6} = -\\frac{1}{2} \\implies (\\overrightarrow{B_1C}, \\overrightarrow{AA_1}) = 120^\\circ \\neq 60^\\circ$$
- **Ý d) Sai**: Ta có $\\overrightarrow{BD_1} = \\vec{b} + \\vec{c} - \\vec{a}$ (độ dài $|\\overrightarrow{BD_1}| = \\sqrt{3\\cdot 36 + 2(18 - 18 - 18)} = 6\\sqrt{2}$) và $\\overrightarrow{AC} = \\vec{a} + \\vec{b}$ (độ dài $|\\overrightarrow{AC}| = 6\\sqrt{3}$).
  Tích vô hướng $\\overrightarrow{BD_1}\\cdot\\overrightarrow{AC} = (\\vec{b} + \\vec{c} - \\vec{a})\\cdot(\\vec{a} + \\vec{b}) = 36 - 36 + 18 + 18 = 36$.
  Suy ra:
  $$\\cos(\\overrightarrow{BD_1}, \\overrightarrow{AC}) = \\frac{36}{6\\sqrt{2}\\cdot 6\\sqrt{3}} = \\frac{1}{\\sqrt{6}} = \\frac{\\sqrt{6}}{6} \\neq \\frac{\\sqrt{6}}{3}$$`,
  },

  // ============================================================================
  // PHẦN III: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (CÂU 1 - CÂU 6, ID 17 - 22)
  // ============================================================================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Như hình vẽ, thiết diện qua trục của hình trụ là hình chữ nhật $ABCD$. Các điểm $M, N$ lần lượt nằm trên đường tròn đáy trên và đường tròn đáy dưới, $\\overset{\\frown}{NB} = 2\\overset{\\frown}{AN}$, $\\overset{\\frown}{CM} = 2\\overset{\\frown}{DM}$, $AB = 2$, $BC = 3$. Khi đó cosin của góc giữa hai đường thẳng chéo nhau $AM$ và $CN$ bằng bao nhiêu? (Làm tròn kết quả đến hàng phần trăm)',
    diagramType: 'DE06_CYLINDER_P3_Q1',
    correctAnswer: '0,82',
    explanation: `Hình trụ có bán kính đáy $R = \\dfrac{AB}{2} = 1$ và đường sinh $h = BC = AD = 3$.
Vì $\\overset{\\frown}{NB} = 2\\overset{\\frown}{AN}$ và $\\overset{\\frown}{CM} = 2\\overset{\\frown}{DM}$ trên hai nửa đường tròn tương ứng nên $\\text{sđ}\\overset{\\frown}{AN} = \\text{sđ}\\overset{\\frown}{DM} = 60^\\circ$.
Suy ra $MN$ là một đường sinh của hình trụ, do đó $MN \\parallel BC$ và $MN = BC = 3$.
Tứ giác $MBCN$ là hình bình hành nên $CN \\parallel BM$. Khi đó góc giữa hai đường thẳng $AM$ và $CN$ bằng góc giữa $AM$ và $BM$.
Trong đáy trên (đường tròn đường kính $DC = 2$), vì $\\text{sđ}\\overset{\\frown}{DM} = 60^\\circ$ nên $DM = 1$ và $CM = \\sqrt{3}$.
- Trong $\\triangle ADM$ vuông tại $D$: $AM = \\sqrt{AD^2 + DM^2} = \\sqrt{3^2 + 1^2} = \\sqrt{10}$.
- Trong $\\triangle BCM$ vuông tại $C$: $BM = \\sqrt{BC^2 + CM^2} = \\sqrt{3^2 + (\\sqrt{3})^2} = 2\\sqrt{3}$.
Áp dụng định lý cosin trong $\\triangle AMB$ với $AB = 2$:
$$\\cos(AM, CN) = |\\cos\\widehat{AMB}| = \\frac{AM^2 + BM^2 - AB^2}{2\\cdot AM\\cdot BM} = \\frac{10 + 12 - 4}{2\\cdot\\sqrt{10}\\cdot 2\\sqrt{3}} = \\frac{3\\sqrt{30}}{20} \\approx 0,82$$
Đáp số: $0,82$.`,
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Cho hàm số $f(x) = \\log_a x$ với $a > 0, a \\neq 1$. Biết giá trị lớn nhất của hàm số trên đoạn $\\left[\\dfrac{1}{2}; 4\\right]$ bằng $2$, giá trị nhỏ nhất bằng $m$. Hàm số $g(x) = (3 + 2m)\\sqrt{x}$ đồng biến trên $[0; +\\infty)$. Khi đó giá trị của $a - m$ bằng bao nhiêu?',
    correctAnswer: '3',
    explanation: `Vì hàm số $g(x) = (3 + 2m)\\sqrt{x}$ đồng biến trên $[0; +\\infty)$ nên $3 + 2m > 0 \\iff m > -\\dfrac{3}{2}$.
- **Trường hợp 1**: $a > 1$. Hàm số $f(x) = \\log_a x$ đồng biến trên $\\left[\\dfrac{1}{2}; 4\\right]$:
  + $\\max_{\\left[\\frac{1}{2}; 4\\right]} f(x) = f(4) = \\log_a 4 = 2 \\iff a = 2$ (thỏa mãn $a > 1$).
  + $m = \\min_{\\left[\\frac{1}{2}; 4\\right]} f(x) = f\\left(\\dfrac{1}{2}\\right) = \\log_2\\left(\\dfrac{1}{2}\\right) = -1$ (thỏa mãn $m > -\\dfrac{3}{2}$).
- **Trường hợp 2**: $0 < a < 1$. Hàm số $f(x) = \\log_a x$ nghịch biến trên $\\left[\\dfrac{1}{2}; 4\\right]$:
  + $\\max_{\\left[\\frac{1}{2}; 4\\right]} f(x) = f\\left(\\dfrac{1}{2}\\right) = \\log_a\\left(\\dfrac{1}{2}\\right) = 2 \\iff a = \\dfrac{\\sqrt{2}}{2}$.
  + Khi đó $m = f(4) = \\log_{\\frac{\\sqrt{2}}{2}} 4 = -4 < -\\dfrac{3}{2}$ (loại).
Vậy $a = 2, m = -1$, suy ra $a - m = 2 - (-1) = 3$.
Đáp số: $3$.`,
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Cho elip $(C): \\dfrac{x^2}{9} + \\dfrac{y^2}{5} = 1$ có hai tiêu điểm trái, phải lần lượt là $F_1, F_2$. Điểm $A$ thuộc elip $(C)$, $B(2; 1)$. Khi đó giá trị lớn nhất của $AB + AF_1$ bằng bao nhiêu?',
    correctAnswer: '7',
    explanation: `Elip $(C): \\dfrac{x^2}{9} + \\dfrac{y^2}{5} = 1$ có $a = 3, b = \\sqrt{5} \\implies c = \\sqrt{a^2 - b^2} = 2$.
Hai tiêu điểm của elip là $F_1(-2; 0)$ và $F_2(2; 0)$.
Với điểm $B(2; 1)$, ta có $BF_2 = \\sqrt{(2 - 2)^2 + (1 - 0)^2} = 1$.
Theo định nghĩa elip, với mọi điểm $A \\in (C)$, ta có $AF_1 + AF_2 = 2a = 6 \\implies AF_1 = 6 - AF_2$.
Khi đó:
$$AB + AF_1 = 6 + (AB - AF_2) \\le 6 + BF_2 = 6 + 1 = 7$$
Dấu "$=$" xảy ra khi $A$ là giao điểm của tia $BF_2$ với elip $(C)$, tức $A\\left(2; -\\dfrac{5}{3}\\right)$.
Vậy giá trị lớn nhất của $AB + AF_1$ bằng $7$.
Đáp số: $7$.`,
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Khi loại thuốc $A$ được tiêm vào bệnh nhân, nồng độ mg/l của thuốc trong máu sau $x$ phút (kể từ khi bắt đầu tiêm) được xác định bởi công thức: $C(x) = \\dfrac{30x}{x^2 + 2}$. Để đưa ra những lời khuyên và cách xử lí phù hợp cho bệnh nhân, ta cần tìm khoảng thời gian mà nồng độ của thuốc trong máu đang tăng. Em hãy cho biết hàm nồng độ thuốc trong máu $C(x)$ đạt giá trị cực đại là bao nhiêu trong khoảng thời gian $6$ phút sau khi tiêm (kết quả làm tròn đến hàng phần mười)?',
    correctAnswer: '10,6',
    explanation: `Xét hàm số $C(x) = \\dfrac{30x}{x^2 + 2}$ với $x \\in (0; 6]$.
Ta có đạo hàm:
$$C'(x) = \\frac{30(x^2 + 2) - 30x\\cdot 2x}{(x^2 + 2)^2} = \\frac{30(2 - x^2)}{(x^2 + 2)^2}$$
Trên khoảng $(0; 6]$, cho $C'(x) = 0 \\iff x = \\sqrt{2} \\approx 1,41 \\text{ (phút)}$.
Vì $C'(x)$ đổi dấu từ dương ($+$) sang âm ($-$) khi đi qua $x = \\sqrt{2}$ nên hàm số $C(x)$ đạt cực đại tại $x = \\sqrt{2}$.
Giá trị cực đại của nồng độ thuốc trong máu là:
$$C(\\sqrt{2}) = \\frac{30\\sqrt{2}}{(\\sqrt{2})^2 + 2} = \\frac{15\\sqrt{2}}{2} \\approx 10,6 \\text{ (mg/l)}$$
Đáp số: $10,6$.`,
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Một doanh nghiệp đầu tư $100$ triệu đồng để mua một thiết bị. Chi phí vận hành của thiết bị mỗi năm là $0,5$ triệu đồng. Ngoài ra, mỗi năm doanh nghiệp còn phải chi một khoản phí bảo trì nhất định. Chi phí bảo trì năm thứ nhất là $2$ triệu đồng; do thiết bị ngày càng cũ, chi phí bảo trì mỗi năm sau tăng thêm $2$ triệu đồng so với năm trước. Để chi phí trung bình mỗi năm của thiết bị là nhỏ nhất, doanh nghiệp cần thay mới thiết bị sau bao nhiêu năm?',
    correctAnswer: '10',
    explanation: `Gọi $n$ ($n \\in \\mathbb{N}^*$) là số năm sử dụng thiết bị.
- Tổng chi phí vận hành trong $n$ năm là $0,5n$ (triệu đồng).
- Tổng chi phí bảo trì trong $n$ năm là tổng của cấp số cộng có $u_1 = 2, d = 2$:
  $$S_n = \\frac{n[2\\cdot 2 + (n - 1)\\cdot 2]}{2} = n(n + 1) = n^2 + n \\text{ (triệu đồng)}$$
Tổng chi phí sau $n$ năm (bao gồm $100$ triệu đồng mua thiết bị) là:
$$T(n) = n^2 + 1,5n + 100 \\text{ (triệu đồng)}$$
Chi phí trung bình mỗi năm là:
$$\\overline{C}(n) = \\frac{T(n)}{n} = n + \\frac{100}{n} + 1,5$$
Áp dụng bất đẳng thức Cauchy cho hai số dương $n$ và $\\dfrac{100}{n}$:
$$\\overline{C}(n) \\ge 2\\sqrt{n \\cdot \\frac{100}{n}} + 1,5 = 21,5 \\text{ (triệu đồng)}$$
Dấu "$=$" xảy ra khi và chỉ khi $n = \\dfrac{100}{n} \\iff n = 10$ (năm).
Đáp số: $10$.`,
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III: Trả lời ngắn',
    questionText:
      'Đèn hoa, còn gọi là “đèn màu”, “đèn lồng”, là một sản phẩm văn hóa, vừa có công năng trong đời sống, vừa mang giá trị nghệ thuật. Như hình vẽ, hiện có $6$ chiếc đèn hoa khác nhau đang được treo và cần được tháo xuống. Mỗi lần tháo $1$ chiếc và đối với mỗi cặp đèn treo theo chiều dọc thì phải tháo chiếc ở dưới trước rồi mới tháo chiếc ở trên. Hỏi có tất cả bao nhiêu cách tháo khác nhau?',
    diagramType: 'DE06_LANTERNS_P3_Q6',
    correctAnswer: '90',
    explanation: `Có $6$ chiếc đèn hoa khác nhau được treo thành $3$ cột dọc, mỗi cột gồm $2$ chiếc đèn.
Nếu xếp thứ tự tháo bất kỳ $6$ chiếc đèn thì có $6! = 720$ cách.
Trong mỗi cột dọc (gồm $2$ chiếc đèn), có $2! = 2$ thứ tự tháo giữa hai chiếc đèn đó, nhưng chỉ có đúng $1$ thứ tự thỏa mãn yêu cầu (tháo chiếc dưới trước, chiếc trên sau).
Vì có $3$ cột dọc nên số cách tháo khác nhau thỏa mãn bài toán là:
$$\\frac{6!}{2! \\cdot 2! \\cdot 2!} = \\frac{720}{8} = 90 \\text{ (cách)}$$
Đáp số: $90$.`,
  },
];
