import { Question } from '../types';

export const QUESTIONS_DE13: Question[] = [
  // ==================== PHẦN I (Câu 1 - Câu 12) ====================
  {
    id: 1,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Nghiệm của phương trình $\\log_2(x + 1) = 3$ là',
    options: [
      { key: 'A', text: '$x = 7$.' },
      { key: 'B', text: '$x = 9$.' },
      { key: 'C', text: '$x = 5$.' },
      { key: 'D', text: '$x = 8$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Điều kiện: $x + 1 > 0 \\Leftrightarrow x > -1$.\nKhi đó $\\log_2(x + 1) = 3 \\Leftrightarrow x + 1 = 2^3 = 8 \\Leftrightarrow x = 7$ (thỏa mãn). Chọn A.',
  },
  {
    id: 2,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Mỗi ngày bác Nam đều đi bộ để rèn luyện sức khoẻ. Quãng đường đi bộ mỗi ngày (đơn vị: $\\text{km}$) của bác Nam trong $20$ ngày được thống kê lại ở bảng sau:\nKhoảng tứ phân vị của mẫu số liệu ghép nhóm là',
    diagramType: 'DE13_TABLE_P1_Q2',
    options: [
      { key: 'A', text: '$0,5$.' },
      { key: 'B', text: '$0,9$.' },
      { key: 'C', text: '$0,575$.' },
      { key: 'D', text: '$0,975$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Cỡ mẫu $n = 3 + 6 + 5 + 4 + 2 = 20$.\n• Tứ phân vị thứ nhất $Q_1$: vì $\\frac{n}{4} = 5$ nên nhóm chứa $Q_1$ là $[3,0; 3,3)$:\n$Q_1 = 3,0 + \\frac{5 - 3}{6} \\cdot 0,3 = 3,1$.\n• Tứ phân vị thứ ba $Q_3$: vì $\\frac{3n}{4} = 15$ và $3 + 6 + 5 = 14 < 15 \\le 18$ nên nhóm chứa $Q_3$ là $[3,6; 3,9)$:\n$Q_3 = 3,6 + \\frac{15 - 14}{4} \\cdot 0,3 = 3,675$.\nVậy khoảng tứ phân vị là $\\Delta_Q = Q_3 - Q_1 = 3,675 - 3,1 = 0,575$. Chọn C.',
  },
  {
    id: 3,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hàm số bậc bốn $y = f(x)$ có đồ thị của đạo hàm $y = f\'(x)$ như hình vẽ bên dưới.\nSố điểm cực đại của đồ thị hàm số $y = f(x)$ là',
    diagramType: 'DE13_GRAPH_P1_Q3',
    options: [
      { key: 'A', text: '$2$.' },
      { key: 'B', text: '$1$.' },
      { key: 'C', text: '$3$.' },
      { key: 'D', text: '$4$.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Đồ thị đạo hàm $y = f\'(x)$ cắt trục hoành tại $3$ điểm $x = -2; x = 1; x = 4$.\nTrong đó $f\'(x)$ chỉ đổi dấu từ dương sang âm khi đi qua $x = 1$.\nVậy đồ thị hàm số $y = f(x)$ có đúng $1$ điểm cực đại. Chọn B.',
  },
  {
    id: 4,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Tính giới hạn $L = \\lim_{x \\to -1} \\frac{x^2 - x - 2}{3x^2 + 8x + 5}$.',
    options: [
      { key: 'A', text: '$L = -\\frac{3}{2}$.' },
      { key: 'B', text: '$L = \\frac{1}{2}$.' },
      { key: 'C', text: '$L = -\\infty$.' },
      { key: 'D', text: '$L = 0$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ta có $L = \\lim_{x \\to -1} \\frac{(x + 1)(x - 2)}{(x + 1)(3x + 5)} = \\lim_{x \\to -1} \\frac{x - 2}{3x + 5} = \\frac{-1 - 2}{3(-1) + 5} = -\\frac{3}{2}$. Chọn A.',
  },
  {
    id: 5,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Trong không gian $Oxyz$, cho hai điểm $A(-2; 4; 1)$ và $B(4; 5; 2)$. Điểm $C$ thỏa mãn $\\overrightarrow{OC} = \\overrightarrow{BA}$ có tọa độ là',
    options: [
      { key: 'A', text: '$(-6; -1; -1)$.' },
      { key: 'B', text: '$(-2; -9; -3)$.' },
      { key: 'C', text: '$(6; 1; 1)$.' },
      { key: 'D', text: '$(2; 9; 3)$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ta có $\\overrightarrow{BA} = (-2 - 4; 4 - 5; 1 - 2) = (-6; -1; -1)$.\nVì $\\overrightarrow{OC} = \\overrightarrow{BA}$ nên tọa độ điểm $C$ là $(-6; -1; -1)$. Chọn A.',
  },
  {
    id: 6,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho cấp số nhân $(u_n)$ có $u_1 = 3, q = -\\frac{1}{2}$ khi đó $\\frac{3}{256}$ là số hạng thứ mấy?',
    options: [
      { key: 'A', text: 'Thứ $8$.' },
      { key: 'B', text: 'Thứ $9$.' },
      { key: 'C', text: 'Thứ $7$.' },
      { key: 'D', text: 'Thứ $6$.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ta có $u_n = u_1 \\cdot q^{n-1} = 3 \\cdot \\left(-\\frac{1}{2}\\right)^{n-1} = \\frac{3}{256} \\Leftrightarrow \\left(-\\frac{1}{2}\\right)^{n-1} = \\frac{1}{256} = \\left(-\\frac{1}{2}\\right)^8 \\Leftrightarrow n - 1 = 8 \\Leftrightarrow n = 9$.\nVậy $\\frac{3}{256}$ là số hạng thứ $9$. Chọn B.',
  },
  {
    id: 7,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho số tự nhiên $n$ thỏa mãn $C_n^2 + A_n^2 = 15n$. Mệnh đề nào sau đây là đúng?',
    options: [
      { key: 'A', text: '$n$ không chia hết cho $2$.' },
      { key: 'B', text: '$n$ chia hết cho $7$.' },
      { key: 'C', text: '$n$ chia hết cho $5$.' },
      { key: 'D', text: '$n$ không chia hết cho $11$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Điều kiện: $n \\ge 2, n \\in \\mathbb{N}$.\nPhương trình tương đương: $\\frac{n(n-1)}{2} + n(n-1) = 15n \\Leftrightarrow \\frac{3}{2}(n - 1) = 15 \\Leftrightarrow n - 1 = 10 \\Leftrightarrow n = 11$.\nSố $n = 11$ là số lẻ nên không chia hết cho $2$. Chọn A.',
  },
  {
    id: 8,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho lăng trụ $ABC.A\'B\'C\'$. Gọi $M, N$ lần lượt là trung điểm của $AA\', B\'C\'$. Khi đó đường thẳng $AB\'$ song song với mặt phẳng nào sau đây?',
    options: [
      { key: 'A', text: '$(BMN)$.' },
      { key: 'B', text: '$(C\'MN)$.' },
      { key: 'C', text: '$(A\'CN)$.' },
      { key: 'D', text: '$(A\'BN)$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Gọi $I$ là giao điểm của $A\'C$ và $AC\'$. Vì $ACC\'A\'$ là hình bình hành nên $I$ là trung điểm của $AC\'$.\nTrong tam giác $AB\'C\'$, $I$ là trung điểm của $AC\'$ và $N$ là trung điểm của $B\'C\'$ nên $IN$ là đường trung bình, suy ra $IN \\parallel AB\'$.\nMà $IN \\subset (A\'CN)$ và $AB\' \\not\\subset (A\'CN)$ nên $AB\' \\parallel (A\'CN)$. Chọn C.',
  },
  {
    id: 9,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hàm số $f(x) = \\begin{cases} x^2 & \\text{khi } x \\le 1 \\\\ 2 - x & \\text{khi } x > 1 \\end{cases}$. Phát biểu nào sau đây là sai?',
    options: [
      { key: 'A', text: 'Hàm số nghịch biến trên khoảng $(1; +\\infty)$.' },
      { key: 'B', text: 'Hàm số đạt cực tiểu tại $x = 0$.' },
      { key: 'C', text: 'Hàm số không có cực đại.' },
      { key: 'D', text: 'Hàm số đồng biến trên khoảng $(0; 1)$.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Hàm số liên tục trên $\\mathbb{R}$ (vì $\\lim_{x \\to 1^-} x^2 = \\lim_{x \\to 1^+} (2 - x) = f(1) = 1$).\nTrên khoảng $(0; 1)$ hàm số đồng biến, trên khoảng $(1; +\\infty)$ hàm số nghịch biến, nên hàm số đạt cực đại tại $x = 1$ ($y_{\\text{CĐ}} = 1$).\nDo đó phát biểu "Hàm số không có cực đại" là sai. Chọn C.',
  },
  {
    id: 10,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho $A$ và $B$ là hai biến cố độc lập. Biết $P(A) = 0,3$ và $P(B) = 0,5$. Xác suất của biến cố $\\overline{A}B$ bằng',
    options: [
      { key: 'A', text: '$0,35$.' },
      { key: 'B', text: '$0,25$.' },
      { key: 'C', text: '$0,8$.' },
      { key: 'D', text: '$0,15$.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Vì $A$ và $B$ là hai biến cố độc lập nên $\\overline{A}$ và $B$ cũng độc lập.\nTa có $P(\\overline{A}) = 1 - P(A) = 1 - 0,3 = 0,7$.\nSuy ra $P(\\overline{A}B) = P(\\overline{A}) \\cdot P(B) = 0,7 \\cdot 0,5 = 0,35$. Chọn A.',
  },
  {
    id: 11,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{0\\}$ có bảng biến thiên như hình vẽ.\nSố nghiệm của phương trình $f(x) + 3 = 0$ là',
    diagramType: 'DE13_BBT_P1_Q11',
    options: [
      { key: 'A', text: '$3$.' },
      { key: 'B', text: '$2$.' },
      { key: 'C', text: '$0$.' },
      { key: 'D', text: '$1$.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ta có $f(x) + 3 = 0 \\Leftrightarrow f(x) = -3$.\n• Trên khoảng $(-\\infty; 0)$, hàm số nghịch biến từ $+\\infty$ xuống $-3$ (với $\\lim_{x \\to 0^-} f(x) = -3$), nên $f(x) > -3, \\forall x < 0$. Phương trình không có nghiệm trên $(-\\infty; 0)$.\n• Trên khoảng $(0; +\\infty)$, hàm số tăng từ $-\\infty$ lên $7$ tại $x = 1$ rồi giảm xuống $-\\infty$, nên đường thẳng $y = -3 < 7$ cắt đồ thị tại $2$ điểm phân biệt.\nVậy phương trình có đúng $2$ nghiệm. Chọn B.',
  },
  {
    id: 12,
    section: 'PART_I',
    sectionTitle: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.',
    questionText:
      'Trong không gian cho bốn điểm $O, A, B, C$ sao cho $O, A, B$ không thẳng hàng. Tập hợp những điểm $M$ sao cho $\\overrightarrow{MC} \\cdot (\\overrightarrow{MO} - 2\\overrightarrow{MA} + \\overrightarrow{MB}) = 0$ là',
    options: [
      { key: 'A', text: 'một mặt phẳng.' },
      { key: 'B', text: 'một điểm.' },
      { key: 'C', text: 'tập hợp rỗng.' },
      { key: 'D', text: 'một đường thẳng.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ta có $\\overrightarrow{MO} - 2\\overrightarrow{MA} + \\overrightarrow{MB} = (\\overrightarrow{MO} - \\overrightarrow{MA}) + (\\overrightarrow{MB} - \\overrightarrow{MA}) = \\overrightarrow{AO} + \\overrightarrow{AB}$.\nVì $O, A, B$ không thẳng hàng nên vectơ $\\vec{u} = \\overrightarrow{AO} + \\overrightarrow{AB} \\neq \\vec{0}$ và cố định.\nĐẳng thức trở thành $\\overrightarrow{MC} \\cdot \\vec{u} = 0$, nên tập hợp các điểm $M$ là mặt phẳng đi qua điểm $C$ và nhận $\\vec{u} = \\overrightarrow{AO} + \\overrightarrow{AB}$ làm vectơ pháp tuyến. Chọn A.',
  },

  // ==================== PHẦN II (Câu 1 - Câu 4) ====================
  {
    id: 13,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 1. Trong không gian với hệ tọa độ $Oxyz$, đơn vị mỗi trục tính bằng $\\text{km}$. Một tên lửa phóng từ mặt đất từ vị trí gốc tọa độ $O$ theo hướng, vận tốc không đổi (đặt mặt phẳng $(Oxy)$ trùng với mặt đất). Tên lửa đi từ điểm $O(0; 0; 0)$ đến điểm $A(140; 60; 6)$ trong $8$ phút.',
    diagramType: 'DE13_ROCKET_P2_Q1',
    statements: [
      {
        key: 'a',
        text: 'Trong $8$ phút tên lửa bay được quãng đường (làm tròn đến hàng đơn vị) xấp xỉ bằng $152\\text{ km}$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Ở phút thứ $4$ độ cao của tên lửa là $3\\text{ km}$.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Tọa độ của tên lửa sau $12$ phút kể từ lúc phóng là $(210; 90; 12)$.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Sau $10$ phút tiếp theo kể từ vị trí $A$ tên lửa đạt độ cao là $13,5\\text{ km}$.',
        correct: true,
      },
    ],
    explanation:
      'Vì tên lửa bay thẳng đều từ $O(0;0;0)$ đến $A(140;60;6)$ trong $8$ phút nên sau $t$ phút kể từ lúc phóng, tọa độ của tên lửa là $M(t) = \\frac{t}{8}(140; 60; 6) = (17,5t; 7,5t; 0,75t)$.\n• a) Đúng: Quãng đường tên lửa bay được trong $8$ phút là $OA = \\sqrt{140^2 + 60^2 + 6^2} = \\sqrt{23236} \\approx 152,43\\text{ km} \\approx 152\\text{ km}$.\n• b) Đúng: Ở phút thứ $4$ ($t = 4$), độ cao của tên lửa là $z(4) = 0,75 \\cdot 4 = 3\\text{ km}$.\n• c) Sai: Sau $12$ phút kể từ lúc phóng ($t = 12$), tọa độ của tên lửa là $(17,5\\cdot 12; 7,5\\cdot 12; 0,75\\cdot 12) = (210; 90; 9) \\neq (210; 90; 12)$.\n• d) Đúng: Sau $10$ phút tiếp theo kể từ vị trí $A$, tổng thời gian bay là $t = 8 + 10 = 18$ phút, độ cao của tên lửa là $z(18) = 0,75 \\cdot 18 = 13,5\\text{ km}$.',
  },
  {
    id: 14,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 2. Cho hàm số $y = f(x) = \\frac{x^2 + bx + c}{x - 2}$ có đạo hàm $f\'(x)$. Đồ thị của hàm số $f\'(x)$ như hình vẽ sau:',
    diagramType: 'DE13_GRAPH_P2_Q2',
    statements: [
      {
        key: 'a',
        text: 'Phương trình $f\'(x) = 0$ có hai nghiệm $x = 1$ và $x = 3$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Hàm số $y = f(x)$ nghịch biến trên khoảng $(1; 3)$.',
        correct: false,
      },
      {
        key: 'c',
        text: 'Hàm số $y = f(x)$ đạt cực đại tại $x = 1$ và đạt cực tiểu tại $x = 3$.',
        correct: true,
      },
      {
        key: 'd',
        text: 'Nếu $f(0) = 1$ thì $\\max_{[3; 4]} f(x) = 6$.',
        correct: true,
      },
    ],
    explanation:
      '• a) Đúng: Đồ thị $y = f\'(x)$ cắt trục hoành tại $x = 1$ và $x = 3$ nên phương trình $f\'(x) = 0$ có hai nghiệm $x = 1$ và $x = 3$.\n• b) Sai: Tập xác định $D = \\mathbb{R} \\setminus \\{2\\}$, hàm số bị gián đoạn tại $x = 2$ nên hàm số nghịch biến trên từng khoảng $(1; 2)$ và $(2; 3)$, không nghịch biến trên $(1; 3)$.\n• c) Đúng: Qua $x = 1$, $f\'(x)$ đổi dấu từ $+$ sang $-$ nên $x = 1$ là điểm cực đại; qua $x = 3$, $f\'(x)$ đổi dấu từ $-$ sang $+$ nên $x = 3$ là điểm cực tiểu.\n• d) Đúng: Ta có $f\'(x) = \\frac{x^2 - 4x - 2b - c}{(x - 2)^2}$. Vì $f\'(x) = 0$ có nghiệm $x = 1, x = 3$ nên $-2b - c = 3$. Kết hợp $f(0) = 1 \\Leftrightarrow \\frac{c}{-2} = 1 \\Leftrightarrow c = -2 \\Rightarrow b = -\\frac{1}{2}$.\nKhi đó $f(x) = \\frac{x^2 - \\frac{1}{2}x - 2}{x - 2} = x + \\frac{3}{2} + \\frac{1}{x - 2}$ đồng biến trên $[3; 4]$, suy ra $\\max_{[3; 4]} f(x) = f(4) = 4 + \\frac{3}{2} + \\frac{1}{2} = 6$.',
  },
  {
    id: 15,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 3. Đậu đỏ là một loại thực phẩm quen thuộc trong bữa ăn của người Việt Nam. Ngoài giá trị dinh dưỡng cao, đậu đỏ còn có nhiều công dụng tuyệt vời cho sức khỏe và sắc đẹp. Cây đậu đỏ khi trồng có chiều cao $6\\text{ cm}$. Khảo sát cho thấy độ cao tính bằng centimet của cây đậu đỏ tại thời điểm $t$ kể từ khi được trồng được cho bởi hàm số $h(t) = -0,005t^4 + bt^3 + c$ (trong đó $b, c \\in \\mathbb{R}$), với $t$ tính theo tuần. Giả sử $h\'(t)$ là tốc độ tăng chiều cao của cây đậu đỏ sau khi trồng (đơn vị của $h\'(t)$ là centimet/tuần). Biết $h\'(5) = 5$.',
    statements: [
      {
        key: 'a',
        text: 'Hàm số $h(t)$ có công thức $h(t) = -0,005t^4 + 0,1t^3$.',
        correct: false,
      },
      {
        key: 'b',
        text: 'Giai đoạn tăng trưởng của cây đậu đỏ kéo dài $15$ tuần.',
        correct: true,
      },
      {
        key: 'c',
        text: 'Chiều cao tối đa của cây đậu đỏ là $90$ centimet.',
        correct: false,
      },
      {
        key: 'd',
        text: 'Vào thời điểm cây đậu đỏ phát triển nhanh nhất thì chiều cao của cây là $56$ centimet.',
        correct: true,
      },
    ],
    explanation:
      'Khi mới trồng ($t = 0$), cây cao $6\\text{ cm}$ nên $h(0) = 6 \\Leftrightarrow c = 6$.\nTa có $h\'(t) = -0,02t^3 + 3bt^2$. Vì $h\'(5) = 5 \\Leftrightarrow -0,02 \\cdot 125 + 75b = 5 \\Leftrightarrow 75b = 7,5 \\Leftrightarrow b = 0,1$.\nVậy $h(t) = -0,005t^4 + 0,1t^3 + 6$ và $h\'(t) = -0,02t^3 + 0,3t^2 = 0,02t^2(15 - t)$.\n• a) Sai: Công thức đúng là $h(t) = -0,005t^4 + 0,1t^3 + 6$.\n• b) Đúng: Cây tăng trưởng khi $h\'(t) \\ge 0 \\Leftrightarrow 0 \\le t \\le 15$, tức kéo dài $15$ tuần.\n• c) Sai: Chiều cao tối đa của cây đạt tại $t = 15$: $h(15) = -0,005 \\cdot 15^4 + 0,1 \\cdot 15^3 + 6 = 90,375\\text{ cm} \\neq 90\\text{ cm}$.\n• d) Đúng: Xét tốc độ phát triển $v(t) = h\'(t) = -0,02t^3 + 0,3t^2$ trên $[0; 15]$, ta có $v\'(t) = -0,06t^2 + 0,6t = 0 \\Leftrightarrow t = 10$ (tuần). Khi đó chiều cao của cây là $h(10) = -0,005 \\cdot 10^4 + 0,1 \\cdot 10^3 + 6 = 56\\text{ cm}$.',
  },
  {
    id: 16,
    section: 'PART_II',
    sectionTitle: 'PHẦN II. Câu trắc nghiệm đúng sai.',
    questionText:
      'Câu 4. Thống kê nhiệt độ trung bình của tháng 2 tại thành phố Hà Nội từ 1997 đến hết 2026 ($30$ năm) được kết quả sau:\nMỗi mệnh đề sau đúng hay sai?',
    diagramType: 'DE13_TABLE_P2_Q4',
    statements: [
      {
        key: 'a',
        text: 'Khoảng biến thiên của bảng số liệu là $10^\\circ\\text{C}$.',
        correct: true,
      },
      {
        key: 'b',
        text: 'Giá trị trung bình là $18^\\circ\\text{C}$ (làm tròn đến hàng đơn vị).',
        correct: true,
      },
      {
        key: 'c',
        text: 'Phương sai của mẫu số liệu này là $3,94^\\circ\\text{C}$ (làm tròn đến hàng phần trăm).',
        correct: false,
      },
      {
        key: 'd',
        text: 'Chọn ngẫu nhiên $4$ năm trong $30$ năm được khảo sát. Xác suất để trong $4$ năm được chọn có ít nhất một năm nhiệt độ trung bình tháng 2 dưới $16^\\circ\\text{C}$, ít nhất một năm từ $16^\\circ\\text{C}$ đến dưới $20^\\circ\\text{C}$ và ít nhất một năm từ $20^\\circ\\text{C}$ trở lên bằng $\\frac{6}{29}$.',
        correct: true,
      },
    ],
    explanation:
      'Giá trị đại diện các nhóm nhiệt độ lần lượt là $13; 15; 17; 19; 21$.\n• a) Đúng: Khoảng biến thiên $R = 22 - 12 = 10^\\circ\\text{C}$.\n• b) Đúng: Giá trị trung bình $\\bar{x} = \\frac{1\\cdot 13 + 3\\cdot 15 + 12\\cdot 17 + 9\\cdot 19 + 5\\cdot 21}{30} = \\frac{538}{30} \\approx 17,93^\\circ\\text{C} \\approx 18^\\circ\\text{C}$.\n• c) Sai: Phương sai $s^2 = \\frac{1\\cdot 13^2 + 3\\cdot 15^2 + 12\\cdot 17^2 + 9\\cdot 19^2 + 5\\cdot 21^2}{30} - \\left(\\frac{538}{30}\\right)^2 = \\frac{9766}{30} - \\frac{72361}{225} = \\frac{884}{225} \\approx 3,93 \\neq 3,94$ (và phương sai không có đơn vị $^\\circ\\text{C}$).\n• d) Đúng: Chia $30$ năm thành $3$ nhóm: Nhóm 1 (dưới $16^\\circ\\text{C}$) có $1 + 3 = 4$ năm; Nhóm 2 (từ $16^\\circ\\text{C}$ đến dưới $20^\\circ\\text{C}$) có $12 + 9 = 21$ năm; Nhóm 3 (từ $20^\\circ\\text{C}$ trở lên) có $5$ năm.\nSố cách chọn $4$ năm bất kỳ là $C_{30}^4 = 27405$.\nSố cách chọn $4$ năm có đủ cả $3$ nhóm là: $C_4^2 C_{21}^1 C_5^1 + C_4^1 C_{21}^2 C_5^1 + C_4^1 C_{21}^1 C_5^2 = 630 + 4200 + 840 = 5670$.\nXác suất cần tìm là $P = \\frac{5670}{27405} = \\frac{6}{29}$.',
  },

  // ==================== PHẦN III (Câu 1 - Câu 6) ====================
  {
    id: 17,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 1. Bốn ngư dân góp vốn mua chung một chiếc thuyền. Số tiền người đầu đóng góp bằng nửa tổng số tiền của ba người còn lại. Số tiền người thứ hai đóng góp bằng $\\frac{1}{3}$ tổng số tiền của ba người còn lại. Số tiền người thứ ba đóng góp bằng $\\frac{1}{4}$ tổng số tiền $3$ người còn lại. Biết người thứ tư đóng góp $260$ triệu đồng. Chiếc thuyền này được mua bao nhiêu tỉ đồng?',
    correctAnswer: '1.2',
    explanation:
      '• Người đầu góp bằng $\\frac{1}{2}$ tổng số tiền $3$ người còn lại $\\Rightarrow$ góp $\\frac{1}{1+2} = \\frac{1}{3}$ giá trị chiếc thuyền.\n• Người thứ hai góp bằng $\\frac{1}{3}$ tổng số tiền $3$ người còn lại $\\Rightarrow$ góp $\\frac{1}{1+3} = \\frac{1}{4}$ giá trị chiếc thuyền.\n• Người thứ ba góp bằng $\\frac{1}{4}$ tổng số tiền $3$ người còn lại $\\Rightarrow$ góp $\\frac{1}{1+4} = \\frac{1}{5}$ giá trị chiếc thuyền.\n• Phân số chỉ số tiền người thứ tư đóng góp là: $1 - \\left(\\frac{1}{3} + \\frac{1}{4} + \\frac{1}{5}\\right) = \\frac{13}{60}$ (giá trị chiếc thuyền).\nVậy giá tiền mua chiếc thuyền là $260 : \\frac{13}{60} = 1200$ (triệu đồng) $= 1,2$ (tỉ đồng).',
  },
  {
    id: 18,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 2. Trong không gian tọa độ, cho hai điểm $O(0; 0; 0)$, $A(1; 0; 0)$. Điểm $P(x; y; z)$ chuyển động sao cho diện tích tam giác $OAP$ bằng $2$.\nKhi $0 \\le x \\le 1$, diện tích hình thu được khi trải quỹ tích của điểm $P$ lên một mặt phẳng bằng bao nhiêu (làm tròn đến hàng phần trăm)?',
    correctAnswer: '25.13',
    explanation:
      'Ta có $OA = 1$ nằm trên trục $Ox$. Khoảng cách từ điểm $P(x; y; z)$ đến đường thẳng $OA$ (trục $Ox$) là $d(P, OA) = \\sqrt{y^2 + z^2}$.\nVì $S_{\\triangle OAP} = \\frac{1}{2} \\cdot OA \\cdot d(P, OA) = 2 \\Leftrightarrow \\frac{1}{2} \\cdot 1 \\cdot \\sqrt{y^2 + z^2} = 2 \\Leftrightarrow \\sqrt{y^2 + z^2} = 4$.\nKhi $0 \\le x \\le 1$, quỹ tích điểm $P$ là mặt xung quanh của một hình trụ có bán kính đáy $R = 4$ và chiều cao $h = 1$.\nKhi trải mặt xung quanh này lên một mặt phẳng, ta được hình chữ nhật có diện tích:\n$S = 2\\pi R h = 2\\pi \\cdot 4 \\cdot 1 = 8\\pi \\approx 25,13$.',
  },
  {
    id: 19,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 3. Một hộp chứa $5$ bi trắng, $6$ bi đỏ và $7$ bi xanh, tất cả các bi có kích thước và khối lượng như nhau. Chọn ngẫu nhiên $6$ bi từ hộp đó. Tính xác suất để $6$ bi lấy được có đủ ba màu đồng thời hiệu của số bi đỏ và trắng, hiệu của số bi xanh và đỏ, hiệu của số bi trắng và xanh theo thứ tự lập thành cấp số cộng (làm tròn kết quả đến hàng phần trăm).',
    correctAnswer: '0.18',
    explanation:
      'Tổng số bi là $5 + 6 + 7 = 18$ bi. Số cách chọn $6$ bi là $n(\\Omega) = C_{18}^6 = 18564$.\nGọi $t, d, x$ ($t, d, x \\ge 1$, $t + d + x = 6$) lần lượt là số bi trắng, đỏ, xanh lấy được.\nTheo giả thiết: $(d - t), (x - d), (t - x)$ lập thành cấp số cộng nên:\n$2(x - d) = (d - t) + (t - x) \\Leftrightarrow 2x - 2d = d - x \\Leftrightarrow x = d$.\nThay vào $t + d + x = 6 \\Rightarrow t + 2d = 6$, có $2$ trường hợp:\n• TH1: $d = x = 1, t = 4$: có $C_5^4 \\cdot C_6^1 \\cdot C_7^1 = 210$ cách.\n• TH2: $d = x = 2, t = 2$: có $C_5^2 \\cdot C_6^2 \\cdot C_7^2 = 3150$ cách.\nXác suất cần tìm là $P = \\frac{210 + 3150}{18564} = \\frac{3360}{18564} = \\frac{40}{221} \\approx 0,18$.',
  },
  {
    id: 20,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 4. Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi cạnh bằng $3\\sqrt{2}$, $\\widehat{ABC} = 60^\\circ$, $AB \\perp SC$, $\\triangle SAC$ đều. Khoảng cách giữa hai đường thẳng $AB$ và $SD$ bằng bao nhiêu?',
    correctAnswer: '3',
    explanation:
      'Đặt $a = 3\\sqrt{2}$. Vì $ABCD$ là hình thoi có $\\widehat{ABC} = 60^\\circ$ nên $\\triangle ABC$ đều cạnh $a \\Rightarrow AC = a, BD = a\\sqrt{3}$.\nGọi $O = AC \\cap BD \\Rightarrow OA = OC = \\frac{a}{2}, OB = OD = \\frac{a\\sqrt{3}}{2}$.\nDo $\\triangle SAC$ đều cạnh $a$ nên $SC = a$ và $SO \\perp AC$ với $SO = \\frac{a\\sqrt{3}}{2}$.\nTừ $AB \\perp SC \\Rightarrow \\overrightarrow{AB} \\cdot \\overrightarrow{SC} = 0 \\Leftrightarrow (\\overrightarrow{OB} - \\overrightarrow{OA}) \\cdot (-\\overrightarrow{OA} - \\overrightarrow{OS}) = 0 \\Leftrightarrow OA^2 - \\overrightarrow{OB}\\cdot\\overrightarrow{OS} = 0 \\Rightarrow \\cos\\widehat{BOS} = \\frac{OA^2}{OB \\cdot OS} = \\frac{1}{3} \\Rightarrow \\sin\\widehat{BOS} = \\frac{2\\sqrt{2}}{3}$.\nKhoảng cách từ $S$ đến $(ABCD)$ là $h = SO \\sin\\widehat{BOS} = \\frac{a\\sqrt{3}}{2} \\cdot \\frac{2\\sqrt{2}}{3} = \\frac{a\\sqrt{6}}{3}$.\nThể tích khối chóp $S.ACD$ là $V_{S.ACD} = \\frac{1}{3} S_{\\triangle ACD} \\cdot h = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{3}}{4} \\cdot \\frac{a\\sqrt{6}}{3} = \\frac{a^3\\sqrt{2}}{12}$.\nMặt khác, $AB \\parallel CD$ và $AB \\perp SC \\Rightarrow CD \\perp SC$, suy ra $\\triangle SCD$ vuông cân tại $C$ ($SC = CD = a$) có diện tích $S_{\\triangle SCD} = \\frac{1}{2}a^2$.\nVì $AB \\parallel (SCD)$ nên:\n$d(AB, SD) = d(A, (SCD)) = \\frac{3V_{S.ACD}}{S_{\\triangle SCD}} = \\frac{3 \\cdot \\frac{a^3\\sqrt{2}}{12}}{\\frac{1}{2}a^2} = \\frac{a\\sqrt{2}}{2} = \\frac{3\\sqrt{2} \\cdot \\sqrt{2}}{2} = 3$.',
  },
  {
    id: 21,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 5. Trong hình vẽ, điểm $P$ nằm trên đường cong $y = f(x) = -\\frac{1}{2}x^3 + 2x$ ($0 \\le x \\le 2$), và $B(2; 3)$, $C(0; 1)$. Khi điểm $P$ di chuyển trên đường cong, hoành độ của điểm $P$ để diện tích phần tô màu đạt giá trị lớn nhất là bao nhiêu (làm tròn kết quả đến hàng phần trăm)?',
    diagramType: 'DE13_CURVE_P3_Q5',
    correctAnswer: '0.82',
    explanation:
      'Gọi $P(x; y)$ với $0 \\le x \\le 2$ và $y = -\\frac{1}{2}x^3 + 2x$.\nDiện tích ngũ giác $OABPC$ (tạo bởi hai hình thang vuông có đáy chung là tung độ điểm $P$) là:\n$S(x) = \\frac{1 + y}{2} \\cdot x + \\frac{y + 3}{2} \\cdot (2 - x) = y - x + 3 = -\\frac{1}{2}x^3 + x + 3$.\n(Nếu trừ đi phần diện tích không đổi giữa đường cong và đoạn $CP$ phía bên trái thì phần diện tích thay đổi theo $P$ vẫn đạt cực đại khi tiếp tuyến tại $P$ song song với $BC$, tức $f\'(x) = k_{BC} = 1$).\nTa có $S\'(x) = -\\frac{3}{2}x^2 + 1 = 0 \\Leftrightarrow x^2 = \\frac{2}{3} \\Leftrightarrow x = \\frac{\\sqrt{6}}{3} \\approx 0,82$ (do $x \\in [0; 2]$).\nVậy hoành độ điểm $P$ cần tìm là $x = \\frac{\\sqrt{6}}{3} \\approx 0,82$.',
  },
  {
    id: 22,
    section: 'PART_III',
    sectionTitle: 'PHẦN III. Câu trắc nghiệm trả lời ngắn.',
    questionText:
      'Câu 6. Như hình bên, bên trong một hình lục giác đều, người ta vẽ một hình lục giác đều nhỏ sao cho các cạnh tương ứng song song với nhau. Sau đó nối các đỉnh tương ứng của hai hình lục giác đều và vẽ thêm một đường chéo, chia hình thành $8$ miền.\nDùng $3$ màu khác nhau để tô các miền này. Mỗi miền chỉ được tô một màu; một màu có thể được sử dụng lặp lại cho nhiều miền, nhưng hai miền kề nhau phải được tô bằng hai màu khác nhau.\nHỏi có bao nhiêu cách tô màu?\n(Biết rằng các hình thang nhỏ đôi một bằng nhau, các hình thang lớn đôi một bằng nhau; những cách tô trùng nhau sau một phép quay được xem là cùng một cách.)',
    diagramType: 'DE13_HEXAGON_P3_Q6',
    correctAnswer: '9',
    explanation:
      'Gọi $L, R$ là hai miền hình thang lớn ở trung tâm; $A_1, A_2, A_3$ là $3$ hình thang nhỏ bên trái (kề với $L$); $B_3, B_2, B_1$ là $3$ hình thang nhỏ bên phải (kề với $R$).\n• Nếu giữ cố định hình: có $3 \\times 2 = 6$ cách chọn màu cho $(L, R)$. Giả sử $L$ tô màu $1$, $R$ tô màu $2$.\nKhi đó bộ $(A_1, A_2, A_3)$ chỉ dùng hai màu $\\{2; 3\\}$ xen kẽ nên có $2$ cách: $(2, 3, 2)$ hoặc $(3, 2, 3)$.\nBộ $(B_3, B_2, B_1)$ chỉ dùng hai màu $\\{1; 3\\}$ xen kẽ nên có $2$ cách: $(1, 3, 1)$ hoặc $(3, 1, 3)$.\nĐể $A_1 \\neq B_3$ và $A_3 \\neq B_1$: nếu $(A_1, A_2, A_3) = (2, 3, 2)$ thì $(B_3, B_2, B_1)$ có $2$ cách chọn; nếu $(A_1, A_2, A_3) = (3, 2, 3)$ thì $(B_3, B_2, B_1)$ chỉ có $1$ cách chọn là $(1, 3, 1)$. Vậy có $2 + 1 = 3$ cách tô $6$ miền ngoài.\nSuy ra số cách tô cố định là $6 \\times 3 = 18$ cách.\n• Vì phép quay duy nhất biến hình thành chính nó là phép quay $180^\\circ$ (hoán đổi $L$ và $R$), mà $L \\neq R$ nên mỗi cách tô sau khi quay $180^\\circ$ tạo thành một cặp trùng nhau.\nVậy số cách tô màu thỏa mãn là $\\frac{18}{2} = 9$ cách.',
  },
];
