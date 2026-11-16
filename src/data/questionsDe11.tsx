import { Question } from '../types';

export const QUESTIONS_DE11: Question[] = [
  // =========================================================================
  // PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn (12 câu)
  // =========================================================================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Trong không gian với hệ trục tọa độ $Oxyz$, cho hai điểm $A(1; 3; 5)$ và $B(5; -3; 1)$. Trung điểm của đoạn thẳng $AB$ có tọa độ là',
    options: [
      { key: 'A', text: '$(3; 0; 3)$.' },
      { key: 'B', text: '$(6; 0; 6)$.' },
      { key: 'C', text: '$(-2; 3; 2)$.' },
      { key: 'D', text: '$(-4; 6; 4)$.' },
    ],
    correctAnswer: 'A',
    explanation: `Gọi $I$ là trung điểm của đoạn thẳng $AB$. Ta có:
$$I\\left(\\dfrac{1 + 5}{2};\\ \\dfrac{3 + (-3)}{2};\\ \\dfrac{5 + 1}{2}\\right) = I(3; 0; 3)$$
Chọn A.`,
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$, có bảng xét dấu đạo hàm như sau:\nKhẳng định nào dưới đây đúng?',
    diagramType: 'DE11_SIGN_TABLE_P1_Q2',
    options: [
      { key: 'A', text: 'Hàm số nghịch biến trên khoảng $(-\\infty; 0)$.' },
      { key: 'B', text: 'Hàm số đồng biến trên khoảng $(1; +\\infty)$.' },
      { key: 'C', text: 'Hàm số đồng biến trên khoảng $(-\\infty; -2)$.' },
      { key: 'D', text: 'Hàm số nghịch biến trên khoảng $(0; 4)$.' },
    ],
    correctAnswer: 'C',
    explanation: `Dựa vào bảng xét dấu đạo hàm $f'(x)$:
- Trên khoảng $(-\\infty; -2)$, ta có $f'(x) > 0$ nên hàm số đồng biến trên khoảng $(-\\infty; -2)$.
- Trên các khoảng $(-2; 0)$ và $(0; 2)$, ta có $f'(x) < 0$ (và hàm số liên tục tại $x = 0$) nên hàm số nghịch biến trên $(-2; 2)$.
- Trên khoảng $(2; +\\infty)$, ta có $f'(x) > 0$ nên hàm số đồng biến trên $(2; +\\infty)$.
Vậy khẳng định đúng là C.`,
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Trong không gian với hệ trục tọa độ $Oxyz$, cho hai vectơ $\\overrightarrow{u} = (2; -1; -2)$ và $\\overrightarrow{v} = (1; 1; 3)$. Giá trị của $\\overrightarrow{u} \\cdot \\overrightarrow{v}$ bằng',
    options: [
      { key: 'A', text: '$9$.' },
      { key: 'B', text: '$7$.' },
      { key: 'C', text: '$3\\sqrt{11}$.' },
      { key: 'D', text: '$-5$.' },
    ],
    correctAnswer: 'D',
    explanation: `Tích vô hướng của hai vectơ $\\overrightarrow{u}$ và $\\overrightarrow{v}$ là:
$$\\overrightarrow{u} \\cdot \\overrightarrow{v} = 2 \\cdot 1 + (-1) \\cdot 1 + (-2) \\cdot 3 = 2 - 1 - 6 = -5$$
Chọn D.`,
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Giá trị lớn nhất của hàm số $y = x^3 - 3x + 2$ trên đoạn $[0; 3]$ bằng',
    options: [
      { key: 'A', text: '$2$.' },
      { key: 'B', text: '$3$.' },
      { key: 'C', text: '$20$.' },
      { key: 'D', text: '$0$.' },
    ],
    correctAnswer: 'C',
    explanation: `Hàm số $y = x^3 - 3x + 2$ liên tục trên đoạn $[0; 3]$.
Ta có $y' = 3x^2 - 3 = 0 \\iff x = \\pm 1$. Trên đoạn $[0; 3]$ có $x = 1$.
Tính giá trị hàm số tại các điểm đầu mút và điểm tới hạn:
- $y(0) = 2$
- $y(1) = 1 - 3 + 2 = 0$
- $y(3) = 27 - 9 + 2 = 20$

Vậy $\\max_{[0; 3]} y = 20$. Chọn C.`,
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Cho cấp số cộng $(a_n)$ có tổng $n$ số hạng đầu tiên là $S_n$. Biết $a_1 = 2$, $a_3 + a_7 = 8$. Khi đó $S_{17} =$',
    options: [
      { key: 'A', text: '$51$.' },
      { key: 'B', text: '$102$.' },
      { key: 'C', text: '$119$.' },
      { key: 'D', text: '$238$.' },
    ],
    correctAnswer: 'B',
    explanation: `Gọi $d$ là công sai của cấp số cộng $(a_n)$.
Từ giả thiết $a_3 + a_7 = 8 \\iff 2a_1 + 8d = 8 \\implies a_1 + 4d = 4$.
Vì $a_1 = 2$ nên $4d = 2 \\implies d = \\dfrac{1}{2}$.
Khi đó tổng $17$ số hạng đầu tiên của cấp số cộng là:
$$S_{17} = 17a_1 + \\dfrac{17 \\cdot 16}{2}d = 17 \\cdot 2 + 136 \\cdot \\dfrac{1}{2} = 34 + 68 = 102$$
Chọn B.`,
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\dfrac{x^2 + x - 3}{x + 1}$ là',
    options: [
      { key: 'A', text: '$y = x + 1$.' },
      { key: 'B', text: '$y = x$.' },
      { key: 'C', text: '$y = x - 3$.' },
      { key: 'D', text: '$y = 2x$.' },
    ],
    correctAnswer: 'B',
    explanation: `Ta viết lại hàm số dưới dạng:
$$y = \\dfrac{x(x + 1) - 3}{x + 1} = x - \\dfrac{3}{x + 1}$$
Vì $\\lim_{x \\to \\pm\\infty} (y - x) = \\lim_{x \\to \\pm\\infty} \\left(-\\dfrac{3}{x + 1}\\right) = 0$ nên đường tiệm cận xiên của đồ thị hàm số là $y = x$.
Chọn B.`,
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Điểm kiểm tra môn Toán của học sinh lớp 12A được ghi lại ở bảng số liệu ghép nhóm sau:\nKhoảng biến thiên của mẫu số liệu ghép nhóm trên là',
    diagramType: 'DE11_TABLE_P1_Q7',
    options: [
      { key: 'A', text: '$10$.' },
      { key: 'B', text: '$8$.' },
      { key: 'C', text: '$12$.' },
      { key: 'D', text: '$14$.' },
    ],
    correctAnswer: 'A',
    explanation: `Trong bảng số liệu ghép nhóm, đầu mút trái của nhóm đầu tiên $[0; 2)$ là $a_1 = 0$ và đầu mút phải của nhóm cuối cùng $[8; 10)$ là $a_6 = 10$.
Khoảng biến thiên của mẫu số liệu ghép nhóm là:
$$R = a_6 - a_1 = 10 - 0 = 10$$
Chọn A.`,
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Trong không gian với hệ trục tọa độ $Oxyz$, cho hai vectơ $\\overrightarrow{u} = (2; 3; -1)$ và $\\overrightarrow{v} = (1; 3; 2)$. Độ dài của vectơ $\\overrightarrow{w} = 2\\overrightarrow{u} - 3\\overrightarrow{v}$ là',
    options: [
      { key: 'A', text: '$\\sqrt{290}$.' },
      { key: 'B', text: '$290$.' },
      { key: 'C', text: '$74$.' },
      { key: 'D', text: '$\\sqrt{74}$.' },
    ],
    correctAnswer: 'D',
    explanation: `Ta có:
- $2\\overrightarrow{u} = (4; 6; -2)$
- $3\\overrightarrow{v} = (3; 9; 6)$
Suy ra $\\overrightarrow{w} = 2\\overrightarrow{u} - 3\\overrightarrow{v} = (4 - 3;\\ 6 - 9;\\ -2 - 6) = (1; -3; -8)$.
Độ dài của vectơ $\\overrightarrow{w}$ là:
$$|\\overrightarrow{w}| = \\sqrt{1^2 + (-3)^2 + (-8)^2} = \\sqrt{1 + 9 + 64} = \\sqrt{74}$$
Chọn D.`,
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Đồ thị hàm số $y = \\dfrac{2x + 3}{x - 1}$ có tâm đối xứng là điểm',
    options: [
      { key: 'A', text: '$N(3; -1)$.' },
      { key: 'B', text: '$P(1; 2)$.' },
      { key: 'C', text: '$Q\\left(1; -\\dfrac{3}{2}\\right)$.' },
      { key: 'D', text: '$M(2; -1)$.' },
    ],
    correctAnswer: 'B',
    explanation: `Đồ thị hàm số phân thức bậc nhất trên bậc nhất $y = \\dfrac{2x + 3}{x - 1}$ có:
- Tiệm cận đứng: $x = 1$.
- Tiệm cận ngang: $y = 2$.
Giao điểm của hai đường tiệm cận là $P(1; 2)$, chính là tâm đối xứng của đồ thị hàm số.
Chọn B.`,
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Hình vẽ dưới đây là mô hình cấu tạo không gian của một con quay.\nBiết đường kính của mặt đáy hình tròn là $AB = 12\\text{ cm}$, chiều cao phần hình trụ là $BC = 6\\text{ cm}$, chiều cao phần hình nón là $CD = 4\\text{ cm}$. Khi đó, diện tích bề mặt của con quay (đơn vị: $\\text{cm}^2$) là',
    diagramType: 'DE11_SPINNING_TOP_P1_Q10',
    options: [
      { key: 'A', text: '$(72 + 12\\sqrt{13})\\pi$.' },
      { key: 'B', text: '$(84 + 24\\sqrt{13})\\pi$.' },
      { key: 'C', text: '$(108 + 12\\sqrt{13})\\pi$.' },
      { key: 'D', text: '$(108 + 24\\sqrt{13})\\pi$.' },
    ],
    correctAnswer: 'C',
    explanation: `Bán kính đáy của phần hình trụ và phần hình nón là $r = \\dfrac{AB}{2} = \\dfrac{12}{2} = 6\\text{ cm}$.
Độ dài đường sinh của phần hình nón là:
$$l = \\sqrt{r^2 + CD^2} = \\sqrt{6^2 + 4^2} = \\sqrt{52} = 2\\sqrt{13}\\text{ (cm)}$$
Diện tích bề mặt của con quay gồm diện tích mặt đáy trên hình tròn, diện tích xung quanh phần hình trụ và diện tích xung quanh phần hình nón:
$$S = \\pi r^2 + 2\\pi r \\cdot BC + \\pi r l = \\pi \\cdot 6^2 + 2\\pi \\cdot 6 \\cdot 6 + \\pi \\cdot 6 \\cdot 2\\sqrt{13} = (108 + 12\\sqrt{13})\\pi\\ (\\text{cm}^2)$$
Chọn C.`,
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Một trường đại học nông nghiệp dự định chọn $5$ giống cây trồng từ $10$ giống lúa khác nhau và $7$ giống lúa mì khác nhau để trồng trên $5$ ô ruộng thí nghiệm được đánh số như hình:\nYêu cầu chỉ chọn đúng $2$ giống lúa mì và hai giống này phải được trồng trên hai ô ruộng thí nghiệm kề nhau; ba ô ruộng còn lại trồng các giống lúa. Khi đó, số cách trồng khác nhau là',
    diagramType: 'DE11_PLOTS_P1_Q11',
    options: [
      { key: 'A', text: '$30240$.' },
      { key: 'B', text: '$60480$.' },
      { key: 'C', text: '$120960$.' },
      { key: 'D', text: '$241920$.' },
    ],
    correctAnswer: 'C',
    explanation: `- Số cặp ô ruộng kề nhau trong $5$ ô đánh số $1, 2, 3, 4, 5$ là $4$ cặp: $(1; 2), (2; 3), (3; 4), (4; 5)$.
- Chọn $2$ giống lúa mì từ $7$ giống lúa mì và xếp vào $2$ ô kề nhau đã chọn: có $4 \\cdot A_7^2 = 4 \\cdot 42 = 168$ (cách).
- Chọn $3$ giống lúa từ $10$ giống lúa và xếp vào $3$ ô ruộng còn lại: có $A_{10}^3 = 10 \\cdot 9 \\cdot 8 = 720$ (cách).

Theo quy tắc nhân, tổng số cách trồng khác nhau là:
$$168 \\cdot 720 = 120\\,960 \\text{ (cách)}$$
Chọn C.`,
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle:
      'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu thí sinh chỉ chọn một phương án.',
    questionText:
      'Cho cấp số nhân $(a_n)$ có $a_{1012} = 2$. Xét hàm số $f(x) = \\dfrac{1}{2}x(x - a_1)(x - a_2)\\cdots(x - a_{2023})$. Khi đó $f\'(0) =$',
    options: [
      { key: 'A', text: '$-2^{2022}$.' },
      { key: 'B', text: '$2^{2022}$.' },
      { key: 'C', text: '$-2^{2023}$.' },
      { key: 'D', text: '$2^{2023}$.' },
    ],
    correctAnswer: 'A',
    explanation: `Ta có $f(0) = 0$. Theo định nghĩa đạo hàm tại $x = 0$:
$$f'(0) = \\lim_{x \\to 0} \\dfrac{f(x) - f(0)}{x} = \\lim_{x \\to 0} \\dfrac{1}{2}(x - a_1)(x - a_2)\\cdots(x - a_{2023}) = \\dfrac{1}{2}(-a_1)(-a_2)\\cdots(-a_{2023}) = -\\dfrac{1}{2}a_1 a_2 \\cdots a_{2023}$$
Vì $(a_n)$ là cấp số nhân nên với mọi $k \\in \\{1, 2, \\dots, 2023\\}$, ta có $a_k \\cdot a_{2024 - k} = a_{1012}^2$, suy ra:
$$a_1 a_2 \\cdots a_{2023} = \\left(a_{1012}\\right)^{2023} = 2^{2023}$$
Vậy:
$$f'(0) = -\\dfrac{1}{2} \\cdot 2^{2023} = -2^{2022}$$
Chọn A.`,
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
      'Cho hàm số $f(x) = ax^3 + bx^2 + cx + d$ có đồ thị như hình sau đây:',
    diagramType: 'DE11_GRAPH_P2_Q1',
    statements: [
      {
        key: 'a',
        text: 'Giá trị cực tiểu của hàm số $f(x)$ bằng $-1$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Phương trình $\\log_3\\left(f(x) + 6\\right) = 2$ có $2$ nghiệm.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Hàm số $y = f(x)$ đồng biến trên khoảng $(1; 3)$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Tổng $2025a + b + c + d = -2023$.',
        correct: true,
      },
    ],
    explanation: `Từ đồ thị hàm số $f(x) = ax^3 + bx^2 + cx + d$, ta thấy:
- Đồ thị đạt cực tiểu tại $(0; -1)$ và đạt cực đại tại $(2; 3)$.
- Suy ra $f(0) = d = -1$, $f'(0) = c = 0$, và:
$$\\begin{cases} f(2) = 8a + 4b - 1 = 3 \\\\ f'(2) = 12a + 4b = 0 \\end{cases} \\iff \\begin{cases} a = -1 \\\\ b = 3 \\end{cases}$$
Vậy $f(x) = -x^3 + 3x^2 - 1$.

- **Ý a) Đúng**: Giá trị cực tiểu của hàm số là $y_{\\text{CT}} = f(0) = -1$.
- **Ý b) Đúng**: Phương trình $\\log_3\\left(f(x) + 6\\right) = 2 \\iff f(x) + 6 = 9 \\iff f(x) = 3$.
Đường thẳng $y = 3$ đi qua điểm cực đại $(2; 3)$ và cắt nhánh bên trái tại $x = -1$, nên phương trình có đúng $2$ nghiệm phân biệt ($x = -1$ và $x = 2$).
- **Ý c) Sai**: Hàm số đồng biến trên $(0; 2)$ và nghịch biến trên $(2; +\\infty)$, nên không đồng biến trên khoảng $(1; 3)$.
- **Ý d) Đúng**: Ta có $2025a + b + c + d = 2025(-1) + 3 + 0 + (-1) = -2023$.`,
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle:
      'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.',
    questionText:
      'Số giờ có ánh sáng mặt trời của một thành phố ven biển A trong ngày thứ $t$ của một năm không nhuận được cho bởi hàm số $d(t) = 3\\sin\\left[\\dfrac{\\pi}{180}(t - 70)\\right] + 10$ với $t \\in \\mathbb{Z}$ và $0 < t \\le 365$. Cánh đồng muối B (thuộc địa phận của thành phố A) có thể hoạt động nếu trong ngày nắng nhiều hơn $10$ giờ.',
    statements: [
      {
        key: 'a',
        text: 'Ngày có nhiều giờ ánh sáng nhất là $13$ giờ.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Số giờ có ánh sáng giảm liên tục trong tháng 7.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Cánh đồng muối B có thể hoạt động $213$ ngày mỗi năm.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Ngày thứ $70$ trong năm, thành phố có $10$ giờ có ánh sáng.',
        correct: true,
      },
    ],
    explanation: `- **Ý a) Đúng**: Vì $\\sin\\left[\\dfrac{\\pi}{180}(t - 70)\\right] \\le 1$ (đạt bằng $1$ khi $t = 160$) nên số giờ có ánh sáng nhiều nhất trong ngày là $3 \\cdot 1 + 10 = 13$ giờ.
- **Ý b) Đúng**: Trong năm không nhuận, tháng 7 bắt đầu từ ngày thứ $t = 31 + 28 + 31 + 30 + 31 + 30 + 1 = 182$ đến ngày thứ $t = 212$.
Khi $t \\in [182; 212]$, ta có $\\dfrac{\\pi}{180}(t - 70) \\in \\left[\\dfrac{112\\pi}{180};\\ \\dfrac{142\\pi}{180}\\right] \\subset \\left(\\dfrac{\\pi}{2};\\ \\pi\\right)$. Trên khoảng $\\left(\\dfrac{\\pi}{2};\\ \\pi\\right)$, hàm số $\\sin$ nghịch biến nên $d(t)$ giảm liên tục trong tháng 7.
- **Ý c) Sai**: Cánh đồng muối hoạt động khi $d(t) > 10 \\iff \\sin\\left[\\dfrac{\\pi}{180}(t - 70)\\right] > 0 \\iff 0 < \\dfrac{\\pi}{180}(t - 70) < \\pi \\iff 70 < t < 250$.
Vì $t \\in \\mathbb{Z}$ nên $t \\in \\{71; 72; \\dots; 249\\}$, có tất cả $249 - 71 + 1 = 179$ ngày ($\\neq 213$ ngày).
- **Ý d) Đúng**: Khi $t = 70$, ta có $d(70) = 3\\sin 0 + 10 = 10$ giờ.`,
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle:
      'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.',
    questionText:
      'Một kho chứa hàng có dạng hình lăng trụ đứng $ABFPE.DCGQH$ với $ABFE$ là hình chữ nhật và $EFP$ là tam giác cân tại $P$. Gọi $T$ là trung điểm của $DC$. Các kích thước của kho chứa lần lượt là $AB = 6\\text{ m};\\ AE = 5\\text{ m};\\ AD = 8\\text{ m};\\ QT = 7\\text{ m}$. Người ta mô hình hoá nhà kho bằng cách chọn hệ trục toạ độ có gốc toạ độ là điểm $O$ thuộc đoạn $AD$ sao cho $OA = 2\\text{ m}$ và các trục toạ độ tương ứng như hình vẽ dưới đây. Khi đó:',
    diagramType: 'DE11_WAREHOUSE_P2_Q3',
    statements: [
      {
        key: 'a',
        text: 'Toạ độ điểm $Q$ là $(-6; 3; 5)$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Vectơ $\\overrightarrow{OC}$ có toạ độ là $(-6; 6; 0)$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Người ta muốn lắp camera quan sát trong nhà kho tại vị trí trung điểm của $FG$ và đầu thu dữ liệu đặt tại vị trí $O$. Người ta thiết kế đường dây cáp nối từ $O$ đến $K$ sau đó nối thẳng đến camera. Độ dài đoạn cáp nối tối thiểu bằng $5 + 2\\sqrt{10}\\text{ m}$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Mái nhà được lợp bằng tôn Hoa Sen, giá tiền mỗi mét vuông tôn là $130.000$ đồng. Số tiền cần bỏ ra để mua tôn lợp mái nhà là $3.750.000$ đồng (không kể hao phí do việc cắt và ghép các miếng tôn, làm tròn kết quả đến hàng nghìn).',
        correct: false,
      },
    ],
    explanation: `Với gốc tọa độ $O(0; 0; 0)$ thuộc đoạn $AD$ sao cho $OA = 2\\text{ m} \\implies OD = 8 - 2 = 6\\text{ m}$:
- Tia $Ox$ trùng tia $OA \\implies A(2; 0; 0),\\ D(-6; 0; 0)$.
- Tia $Oy$ cùng hướng $\\overrightarrow{AB}$ ($AB = 6\\text{ m}$) $\\implies B(2; 6; 0),\\ C(-6; 6; 0),\\ T(-6; 3; 0)$.
- Tia $Oz$ hướng thẳng đứng lên trên qua $K(0; 0; 5)$ ($AE = 5\\text{ m}$) $\\implies E(2; 0; 5),\\ F(2; 6; 5),\\ H(-6; 0; 5),\\ G(-6; 6; 5)$.
- Vì $QT = 7\\text{ m}$ thẳng đứng trên $T(-6; 3; 0)$ nên $Q(-6; 3; 7)$ và $P(2; 3; 7)$.

Xét từng mệnh đề:
- **Ý a) Sai**: Tọa độ điểm $Q$ là $(-6; 3; 7) \\neq (-6; 3; 5)$.
- **Ý b) Đúng**: Điểm $C(-6; 6; 0)$ nên $\\overrightarrow{OC} = (-6; 6; 0)$.
- **Ý c) Đúng**: Gọi $M$ là trung điểm của $FG$, ta có $M(-2; 6; 5)$.
Độ dài cáp nối từ $O(0; 0; 0)$ đến $K(0; 0; 5)$ rồi tới $M(-2; 6; 5)$ là:
$$OK + KM = 5 + \\sqrt{(-2 - 0)^2 + (6 - 0)^2 + (5 - 5)^2} = 5 + \\sqrt{40} = 5 + 2\\sqrt{10}\\text{ (m)}$$
- **Ý d) Sai**: Mái nhà gồm hai mái hình chữ nhật bằng nhau là $EFQP$ và $FGQP$.
Ta có $PE = PF = \\sqrt{3^2 + (7 - 5)^2} = \\sqrt{13}\\text{ m}$ và $PQ = AD = 8\\text{ m}$.
Tổng diện tích hai mặt mái nhà là $S = 2 \\cdot 8 \\cdot \\sqrt{13} = 16\\sqrt{13}\\text{ m}^2$.
Số tiền mua tôn lợp cả mái nhà là:
$$16\\sqrt{13} \\times 130\\,000 \\approx 7\\,499\\,559 \\approx 7\\,500\\,000\\text{ (đồng)} \\neq 3\\,750\\,000\\text{ (đồng)}$$`,
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle:
      'PHẦN II. Câu trắc nghiệm đúng sai. Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.',
    questionText:
      'Lớp 12B11 có $40$ học sinh. Thời gian tự học tại nhà hàng ngày của các học sinh trong lớp được thống kê trong bảng sau:',
    diagramType: 'DE11_TABLE_P2_Q4',
    statements: [
      {
        key: 'a',
        text: 'Khoảng biến thiên của mẫu số liệu ghép nhóm này là $5$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Khoảng tứ phân vị của mẫu số liệu này bằng $1{,}8$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Phương sai của mẫu số liệu này là $1{,}66$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Cô giáo chia lớp thành ba nhóm: Nhóm chưa chăm gồm các em học sinh có thời gian tự học tại nhà hàng ngày ít hơn $3$ giờ, nhóm đạt yêu cầu gồm các em học sinh có thời gian tự học tại nhà hàng ngày từ $3$ giờ trở lên nhưng ít hơn $5$ giờ, nhóm chăm chỉ gồm các em học sinh có thời gian tự học tại nhà hàng ngày từ $5$ giờ trở lên. Cô giáo chọn ngẫu nhiên $4$ học sinh trong lớp để kiểm tra bài tập về nhà. Xác suất để ba nhóm học sinh trên đều có học sinh được chọn bằng $\\dfrac{88}{247}$.',
        correct: true,
      },
    ],
    explanation: `Cỡ mẫu $n = 4 + 6 + 12 + 10 + 8 = 40$.
- **Ý a) Đúng**: Khoảng biến thiên của mẫu số liệu ghép nhóm là $R = 6 - 1 = 5$.
- **Ý b) Đúng**:
  + Tứ phân vị thứ nhất $Q_1$: $\\dfrac{n}{4} = 10$, mà tần số tích lũy của nhóm $[2; 3)$ là $cf_2 = 4 + 6 = 10$, nên $Q_1 = 2 + \\dfrac{10 - 4}{6} \\cdot 1 = 3$.
  + Tứ phân vị thứ ba $Q_3$: $\\dfrac{3n}{4} = 30$, nhóm chứa $Q_3$ là $[4; 5)$ ($cf_3 = 22,\\ n_4 = 10$), nên:
  $$Q_3 = 4 + \\dfrac{30 - 22}{10} \\cdot 1 = 4{,}8$$
  + Khoảng tứ phân vị là $\\Delta_Q = Q_3 - Q_1 = 4{,}8 - 3 = 1{,}8$.
- **Ý c) Sai**: Giá trị đại diện của các nhóm là $1{,}5;\\ 2{,}5;\\ 3{,}5;\\ 4{,}5;\\ 5{,}5$.
  + Số trung bình:
  $$\\bar{x} = \\dfrac{4 \\cdot 1{,}5 + 6 \\cdot 2{,}5 + 12 \\cdot 3{,}5 + 10 \\cdot 4{,}5 + 8 \\cdot 5{,}5}{40} = \\dfrac{152}{40} = 3{,}8$$
  + Phương sai:
  $$s^2 = \\dfrac{4(1{,}5)^2 + 6(2{,}5)^2 + 12(3{,}5)^2 + 10(4{,}5)^2 + 8(5{,}5)^2}{40} - (3{,}8)^2 = 15{,}95 - 14{,}44 = 1{,}51 \\neq 1{,}66$$
- **Ý d) Đúng**: Số học sinh của 3 nhóm lần lượt là:
  + Nhóm chưa chăm ($< 3$ giờ): $4 + 6 = 10$ học sinh.
  + Nhóm đạt yêu cầu ($[3; 5)$ giờ): $12 + 10 = 22$ học sinh.
  + Nhóm chăm chỉ ($\\ge 5$ giờ): $8$ học sinh.
  Chọn $4$ học sinh từ $40$ học sinh sao cho cả $3$ nhóm đều có mặt (các bộ số lượng $(2;1;1), (1;2;1), (1;1;2)$):
  $$P = \\dfrac{C_{10}^2 \\cdot 22 \\cdot 8 + 10 \\cdot C_{22}^2 \\cdot 8 + 10 \\cdot 22 \\cdot C_8^2}{C_{40}^4} = \\dfrac{7920 + 18480 + 6160}{91390} = \\dfrac{32560}{91390} = \\dfrac{88}{247}$$`,
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
      'Một doanh nghiệp đã tiến hành nghiên cứu công nghệ: chuyển đổi carbon dioxide thành một loại sản phẩm hóa học có thể sử dụng.\nQua tính toán, tổng chi phí xử lí $y$ (đơn vị: triệu đồng) và khối lượng xử lí $x$ (đơn vị: tấn), với $x \\in [120; 500]$, có mối quan hệ gần đúng như sau:\n$$y = \\begin{cases} \\dfrac{1}{3}x^3 - 80x^2 + 5040x, & x \\in [120; 144) \\\\[6pt] \\dfrac{1}{2}x^2 - 200x + 80000, & x \\in [144; 500]. \\end{cases}$$\nKhi khối lượng xử lí $x$ bằng bao nhiêu tấn thì chi phí xử lí trung bình trên mỗi tấn là nhỏ nhất?',
    correctAnswer: '400',
    explanation: `Chi phí xử lí trung bình trên mỗi tấn là hàm số $\\bar{y}(x) = \\dfrac{y}{x}$:
1. Với $x \\in [120; 144)$:
$$\\bar{y}(x) = \\dfrac{1}{3}x^2 - 80x + 5040 = \\dfrac{1}{3}(x - 120)^2 + 240 \\ge 240$$
Giá trị nhỏ nhất trên $[120; 144)$ bằng $240$ tại $x = 120$.

2. Với $x \\in [144; 500]$:
$$\\bar{y}(x) = \\dfrac{1}{2}x - 200 + \\dfrac{80000}{x}$$
Áp dụng bất đẳng thức AM-GM cho hai số dương $\\dfrac{1}{2}x$ và $\\dfrac{80000}{x}$:
$$\\bar{y}(x) \\ge 2\\sqrt{\\dfrac{1}{2}x \\cdot \\dfrac{80000}{x}} - 200 = 2 \\cdot 200 - 200 = 200$$
Dấu “$=$” xảy ra khi $\\dfrac{1}{2}x = \\dfrac{80000}{x} \\iff x^2 = 160\\,000 \\iff x = 400 \\in [144; 500]$.

Vì $200 < 240$ nên chi phí xử lí trung bình trên mỗi tấn nhỏ nhất bằng $200$ (triệu đồng/tấn) khi $x = 400$ tấn.`,
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Như Hình 1, có một bình chứa hình nón có đường kính đáy bằng $10\\text{ cm}$ và chiều cao bằng $25\\text{ cm}$. Người ta rót dung dịch vào bình với tốc độ $2\\text{ cm}^3/\\text{s}$. Khi thời gian $t$ (đơn vị: $\\text{s}$) tăng lên thì chiều cao của phần dung dịch trong bình hình nón cũng tăng theo, như Hình 2.\nBỏ qua độ dày của thành bình. Khi $t = \\pi$, tốc độ thay đổi tức thời của chiều cao phần dung dịch trong bình là ______ (làm tròn kết quả đến hàng phần trăm).',
    diagramType: 'DE11_CONES_P3_Q2',
    correctAnswer: '0.56',
    explanation: `Bán kính đáy của bình hình nón là $R = \\dfrac{10}{2} = 5\\text{ cm}$ và chiều cao $H = 25\\text{ cm}$.
Khi chiều cao phần dung dịch tại thời điểm $t$ là $h(t)$, bán kính mặt thoáng của dung dịch là:
$$r(t) = \\dfrac{R}{H}h(t) = \\dfrac{5}{25}h(t) = \\dfrac{h(t)}{5}$$
Thể tích phần dung dịch trong bình tại thời điểm $t$ là:
$$V(t) = \\dfrac{1}{3}\\pi r^2(t) h(t) = \\dfrac{\\pi}{75}h^3(t)$$
Mặt khác, dung dịch được rót vào với tốc độ $2\\text{ cm}^3/\\text{s}$ nên $V(t) = 2t$ và $V'(t) = 2$.
- Tại thời điểm $t = \\pi$:
$$\\dfrac{\\pi}{75}h^3(\\pi) = 2\\pi \\implies h^3(\\pi) = 150 \\implies h(\\pi) = \\sqrt[3]{150}$$
- Đạo hàm hai vế của $\\dfrac{\\pi}{75}h^3(t) = 2t$ theo biến $t$:
$$\\dfrac{\\pi}{25}h^2(t) \\cdot h'(t) = 2 \\implies h'(\\pi) = \\dfrac{50}{\\pi \\cdot h^2(\\pi)} = \\dfrac{50}{\\pi \\cdot 150^{2/3}} = \\dfrac{\\sqrt[3]{150}}{3\\pi} \\approx 0{,}56\\text{ (cm/s)}$$`,
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Một công ty du lịch quốc tế hiện có $11$ phiên dịch viên, trong đó có $5$ người chỉ biết tiếng Anh, $4$ người chỉ biết tiếng Pháp và $2$ người biết cả tiếng Anh lẫn tiếng Pháp. Chọn trong $11$ người đó $4$ người làm phiên dịch tiếng Anh và $4$ người làm phiên dịch tiếng Pháp. Khi đó có bao nhiêu cách chọn khác nhau?',
    correctAnswer: '185',
    explanation: `Gọi nhóm A gồm $5$ người chỉ biết tiếng Anh, nhóm P gồm $4$ người chỉ biết tiếng Pháp và nhóm AP gồm $2$ người biết cả hai thứ tiếng.
Xét các trường hợp theo số người thuộc nhóm AP được chọn:
- **TH1**: Không chọn người nào trong nhóm AP:
  Chọn $4$ người từ nhóm A và $4$ người từ nhóm P: có $C_5^4 \\cdot C_4^4 = 5 \\cdot 1 = 5$ (cách).
- **TH2**: Chọn đúng $1$ người trong nhóm AP ($C_2^1 = 2$ cách):
  + Nếu người đó làm phiên dịch tiếng Anh: có $2 \\cdot C_5^3 \\cdot C_4^4 = 2 \\cdot 10 \\cdot 1 = 20$ (cách).
  + Nếu người đó làm phiên dịch tiếng Pháp: có $2 \\cdot C_5^4 \\cdot C_4^3 = 2 \\cdot 5 \\cdot 4 = 40$ (cách).
- **TH3**: Chọn cả $2$ người trong nhóm AP:
  + Cả $2$ người làm phiên dịch tiếng Anh: có $C_5^2 \\cdot C_4^4 = 10 \\cdot 1 = 10$ (cách).
  + Cả $2$ người làm phiên dịch tiếng Pháp: có $C_5^4 \\cdot C_4^2 = 5 \\cdot 6 = 30$ (cách).
  + $1$ người dịch tiếng Anh, $1$ người dịch tiếng Pháp ($2! = 2$ cách phân công): có $2 \\cdot C_5^3 \\cdot C_4^3 = 2 \\cdot 10 \\cdot 4 = 80$ (cách).

Vậy tổng số cách chọn khác nhau là:
$$5 + 20 + 40 + 10 + 30 + 80 = 185 \\text{ (cách)}$$`,
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Cho hình hộp chữ nhật $ABCD.A_1B_1C_1D_1$ có $AB = AD = 2$, $AA_1 = 4$. Điểm $M$ là trung điểm của $BB_1$. Điểm $P$ thỏa mãn $\\overrightarrow{BP} = \\lambda\\overrightarrow{BC} + \\mu\\overrightarrow{BB_1}$, trong đó $\\lambda \\in [0; 1],\\ \\mu \\in [0; 1]$, đồng thời $MP \\parallel (AB_1D_1)$. Khi đó, độ dài quỹ tích của điểm $P$ là bao nhiêu? (làm tròn kết quả đến hàng phần trăm)',
    correctAnswer: '2.24',
    explanation: `Từ hệ thức $\\overrightarrow{BP} = \\lambda\\overrightarrow{BC} + \\mu\\overrightarrow{BB_1}$ với $\\lambda, \\mu \\in [0; 1]$, suy ra điểm $P$ thuộc hình chữ nhật $BCC_1B_1$.
Gọi $N$ là trung điểm của cạnh $B_1C_1$.
Trong tam giác $BB_1C_1$, vì $M$ là trung điểm $BB_1$ và $N$ là trung điểm $B_1C_1$ nên $MN$ là đường trung bình, suy ra:
$$MN \\parallel BC_1$$
Mặt khác, trong hình hộp chữ nhật $ABCD.A_1B_1C_1D_1$, ta có $BC_1 \\parallel AD_1 \\subset (AB_1D_1)$, nên $MN \\parallel (AB_1D_1)$.
Do đó tập hợp (quỹ tích) các điểm $P$ thuộc hình chữ nhật $BCC_1B_1$ sao cho $MP \\parallel (AB_1D_1)$ chính là đoạn thẳng $MN$.
Độ dài quỹ tích của điểm $P$ là:
$$MN = \\sqrt{B_1M^2 + B_1N^2} = \\sqrt{2^2 + 1^2} = \\sqrt{5} \\approx 2{,}24$$`,
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Cho các số thực $a, b, c, d$ thỏa mãn $|\\ln(a - 1) - b| + |c - d + 2| = 0$. Giá trị nhỏ nhất của $(a - c)^2 + (b - d)^2$ bằng bao nhiêu?',
    correctAnswer: '8',
    explanation: `Vì $|\\ln(a - 1) - b| \\ge 0$ và $|c - d + 2| \\ge 0$ nên:
$$|\\ln(a - 1) - b| + |c - d + 2| = 0 \\iff \\begin{cases} b = \\ln(a - 1) \\quad (a > 1) \\\\ d = c + 2 \\end{cases}$$
Trên mặt phẳng tọa độ $Oxy$, xét điểm $M(a; b)$ thuộc đồ thị $(C): y = \\ln(x - 1)$ và điểm $N(c; d)$ thuộc đường thẳng $\\Delta: x - y + 2 = 0$.
Khi đó:
$$(a - c)^2 + (b - d)^2 = MN^2$$
Độ dài $MN$ nhỏ nhất khi $M$ là tiếp điểm của tiếp tuyến với $(C)$ song song với đường thẳng $\\Delta$ (có hệ số góc $k = 1$) và $N$ là hình chiếu vuông góc của $M$ lên $\\Delta$.
Ta có:
$$y'(a) = \\dfrac{1}{a - 1} = 1 \\iff a - 1 = 1 \\iff a = 2 \\implies b = \\ln 1 = 0 \\implies M(2; 0)$$
Khoảng cách từ $M(2; 0)$ đến đường thẳng $\\Delta: x - y + 2 = 0$ là:
$$MN_{\\min} = d(M, \\Delta) = \\dfrac{|2 - 0 + 2|}{\\sqrt{1^2 + (-1)^2}} = \\dfrac{4}{\\sqrt{2}} = 2\\sqrt{2}$$
Vậy giá trị nhỏ nhất của $(a - c)^2 + (b - d)^2$ là $MN_{\\min}^2 = \\left(2\\sqrt{2}\\right)^2 = 8$.`,
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle:
      'PHẦN III. Câu trắc nghiệm trả lời ngắn. Thí sinh trả lời từ câu 1 đến câu 6.',
    questionText:
      'Trong mùa mưa lũ, nước ở trên thượng nguồn đổ dồn về hạ lưu rất mạnh nên thường làm lệch quỹ đạo chuyển động của tàu, thuyền trên sông. Giả sử trong một hệ trục tọa độ $Oxy$ cho trước, một chiếc thuyền đang ở tại điểm $A\\left(4; \\dfrac{5}{3}\\right)$ và chuyển động về phía gốc tọa độ $O$.\nDo dòng chảy mạnh nên thuyền di chuyển trên cung đường $AB$ là một phần của đồ thị hàm số $y = \\dfrac{ax + b}{cx + d}$ như hình vẽ, với $B(-1; 0)$. Gọi $M$ là một điểm bất kỳ nằm trên cung đường di chuyển của chiếc thuyền. Biết đồ thị hàm số đi qua điểm $C(0; 1)$. Khoảng cách từ $M$ đến $O$ ngắn nhất bằng bao nhiêu? (làm tròn kết quả đến hàng phần trăm) (Trích đề thi thử Sở Ninh Bình 2026)',
    diagramType: 'DE11_BOAT_CURVE_P3_Q6',
    correctAnswer: '2',
    explanation: `Đồ thị hàm số $y = \\dfrac{ax + b}{cx + d}$ đi qua các điểm $B(-1; 0)$, $C(0; 1)$ và $A\\left(4; \\dfrac{5}{3}\\right)$ nên:
- Đi qua $B(-1; 0) \\implies -a + b = 0 \\iff b = a$.
- Đi qua $C(0; 1) \\implies \\dfrac{b}{d} = 1 \\iff d = b = a$.
- Đi qua $A\\left(4; \\dfrac{5}{3}\\right) \\implies \\dfrac{4a + a}{4c + a} = \\dfrac{5}{3} \\iff 4c + a = 3a \\iff c = \\dfrac{a}{2}$.
Chọn $c = 1 \\implies a = b = d = 2$, ta được hàm số:
$$y = \\dfrac{2x + 2}{x + 2} = 2 - \\dfrac{2}{x + 2}, \\quad x \\in [-1; 4]$$

Xét điểm $M(x; y)$ thuộc cung $AB$ ($x \\in [-1; 4]$). Đặt $t = x + 2 \\in [1; 6]$, khi đó $x = t - 2$ và $y = 2 - \\dfrac{2}{t}$.
Bình phương khoảng cách từ $M$ đến gốc tọa độ $O(0; 0)$ là:
$$OM^2 = x^2 + y^2 = (t - 2)^2 + \\left(2 - \\dfrac{2}{t}\\right)^2 = t^2 + \\dfrac{4}{t^2} - 4\\left(t - \\dfrac{2}{t}\\right) + 4$$
$$= \\left(t - \\dfrac{2}{t}\\right)^2 - 4\\left(t - \\dfrac{2}{t}\\right) + 8 = \\left(t - \\dfrac{2}{t} - 2\\right)^2 + 4 \\ge 4$$
Dấu “$=$” xảy ra khi $t - \\dfrac{2}{t} = 2 \\iff t^2 - 2t - 2 = 0 \\implies t = 1 + \\sqrt{3} \\in [1; 6]$ (tương ứng $x = \\sqrt{3} - 1 \\in [-1; 4]$).
Vậy khoảng cách ngắn nhất từ $M$ đến $O$ bằng $\\sqrt{4} = 2$.`,
  },
];
