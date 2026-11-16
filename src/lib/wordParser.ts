import JSZip from 'jszip';
import mammoth from 'mammoth/mammoth.browser.js';
import * as pdfjsLib from 'pdfjs-dist';
import { Question } from '../types';
import { normalizeVectors } from '../components/MathText';

// Set up pdf.js worker for browser execution
if (typeof window !== 'undefined' && (pdfjsLib as any).GlobalWorkerOptions) {
  (pdfjsLib as any).GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`;
}

export const SAMPLE_WORD_FORMAT = `==== ĐỀ THI TRẮC NGHIỆM MẪU (CHUẨN GDPT 2018) ====

PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn (Thí sinh trả lời từ câu 1 đến câu 12)

Câu 1. Cho hàm số $y = f(x)$ có bảng biến thiên trên đoạn $[-2; 3]$. Tìm giá trị lớn nhất $M$ của $f(x)$ trên $[-2; 3]$.
[Hình vẽ: GRAPH]
A. $M = 5$.
B. $M = 3$.
C. $M = -2$.
D. $M = 0$.
Đáp án: A
Lời giải: Dựa vào đồ thị/bảng biến thiên, giá trị cao nhất của hàm số trên đoạn $[-2; 3]$ là $y = 5$ tại $x = 1$.

Câu 2. Tập xác định $D$ của hàm số $y = \\log_2(x - 3)$ là:
A. $D = (3; +\\infty)$.
B. $D = [3; +\\infty)$.
C. $D = (-\\infty; 3)$.
D. $D = \\mathbb{R} \\setminus \\{3\\}$.
Đáp án: A
Lời giải: Hàm số logarit xác định khi $x - 3 > 0 \\Leftrightarrow x > 3$.

Câu 3. Trong không gian $Oxyz$, cho điểm $M(2; 3; 4)$. Tìm tọa độ hình chiếu vuông góc $H$ của $M$ trên mặt phẳng $(Oxy)$.
[Hình vẽ: OXYZ]
A. $H(2; 3; 0)$.
B. $H(0; 0; 4)$.
C. $H(2; 0; 0)$.
D. $H(0; 3; 0)$.
Đáp án: A
Lời giải: Hình chiếu của $M(x, y, z)$ lên mặt phẳng $(Oxy)$ giữ nguyên $x, y$ và cho $z = 0$.

... (Từ Câu 4 đến Câu 12 tương tự)

PHẦN II. Câu trắc nghiệm Đúng/Sai (Thí sinh trả lời từ câu 1 đến câu 4)

Câu 1. Cho hàm số $f(x) = x^3 - 3x + 2$. Xét tính đúng sai của các mệnh đề sau:
a) Hàm số $f(x)$ có hai điểm cực trị. [Đúng]
b) Giá trị cực đại của hàm số bằng $4$. [Đúng]
c) Hàm số nghịch biến trên khoảng $(-1; 1)$. [Đúng]
d) Đồ thị hàm số cắt trục tung tại điểm $(0; 1)$. [Sai]
Lời giải: $f'(x) = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$. $f(1) = 0$, $f(-1) = 4$. Đồ thị cắt $Oy$ tại $(0; 2)$.

Câu 2. Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Xét tính đúng/sai:
a) Thể tích khối hộp bằng $60$. [Đúng]
b) Đường chéo $AC' = 5\\sqrt{2}$. [Đúng]
c) Khoảng cách giữa $AB$ và $C'D'$ bằng $5$. [Đúng]
d) Diện tích toàn phần bằng $94$. [Đúng]
Lời giải: $V = 3 \\cdot 4 \\cdot 5 = 60$, $AC' = \\sqrt{3^2+4^2+5^2} = 5\\sqrt{2}$.

... (Câu 3 và Câu 4 của Phần II tương tự)

PHẦN III. Câu trắc nghiệm trả lời ngắn (Thí sinh trả lời từ câu 1 đến câu 6)

Câu 1. Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{3}$. Tính số đo góc giữa đường thẳng $SD$ và mặt phẳng $(ABCD)$ theo độ.
[Hình vẽ: PYRAMID_SABCD]
Đáp số: 60
Lời giải: $SA \\perp (ABCD)$ nên góc giữa $SD$ và $(ABCD)$ là góc $\\widehat{SDA}$. $\\tan \\widehat{SDA} = \\frac{SA}{AD} = \\sqrt{3} \\Rightarrow \\widehat{SDA} = 60^\\circ$.

Câu 2. Một đội văn nghệ có 5 học sinh nam và 7 học sinh nữ. Có bao nhiêu cách chọn ra một ban đại diện gồm 3 học sinh sao cho có cả nam và nữ?
Đáp số: 175
Lời giải: Số cách chọn bất kì $C_{12}^3 = 220$. Trừ 3 nam ($C_5^3=10$) và 3 nữ ($C_7^3=35$), còn $220 - 10 - 35 = 175$.

... (Từ Câu 3 đến Câu 6 của Phần III tương tự)`;

/**
 * Determine MIME type from image filename extension in word/media/*
 */
function getMimeTypeFromFilename(filename: string): string | null {
  const lower = filename.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.gif')) return 'image/gif';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.bmp')) return 'image/bmp';
  return null;
}

/**
 * Convert Word OMML (<m:oMath> / <m:oMathPara>) XML element to LaTeX
 */
function ommlNodeToLatex(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.nodeValue || '';
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return '';
  }

  const el = node as Element;
  const local = el.localName || el.tagName.replace(/^.*:/, '');

  const childrenLatex = (parent: Element): string => {
    let out = '';
    for (let i = 0; i < parent.childNodes.length; i++) {
      out += ommlNodeToLatex(parent.childNodes[i]);
    }
    return out;
  };

  const findChild = (parent: Element, name: string): Element | null => {
    for (let i = 0; i < parent.childNodes.length; i++) {
      const c = parent.childNodes[i] as Element;
      if (c.nodeType === Node.ELEMENT_NODE) {
        const cLocal = c.localName || c.tagName.replace(/^.*:/, '');
        if (cLocal === name) return c;
      }
    }
    return null;
  };

  const getAttrVal = (parent: Element | null, propName: string): string => {
    if (!parent) return '';
    const propEl = findChild(parent, propName);
    if (!propEl) return '';
    return (
      propEl.getAttribute('m:val') ||
      propEl.getAttribute('w:val') ||
      propEl.getAttribute('val') ||
      ''
    );
  };

  switch (local) {
    case 'oMathPara':
    case 'oMath':
    case 'e':
    case 'num':
    case 'den':
    case 'sub':
    case 'sup':
    case 'deg':
    case 'lim':
    case 'fName':
      return childrenLatex(el);

    case 'r': {
      // Math run
      let text = '';
      for (let i = 0; i < el.childNodes.length; i++) {
        const c = el.childNodes[i] as Element;
        if (c.nodeType === Node.ELEMENT_NODE) {
          const cLocal = c.localName || c.tagName.replace(/^.*:/, '');
          if (cLocal === 't') {
            text += c.textContent || '';
          }
        }
      }
      return text;
    }

    case 'f': {
      // Fraction \frac{num}{den}
      const num = findChild(el, 'num');
      const den = findChild(el, 'den');
      return `\\frac{${num ? childrenLatex(num) : ''}}{${den ? childrenLatex(den) : ''}}`;
    }

    case 'rad': {
      // Square root or nth root
      const radPr = findChild(el, 'radPr');
      const degHide = getAttrVal(radPr, 'degHide');
      const deg = findChild(el, 'deg');
      const e = findChild(el, 'e');
      const degStr = deg ? childrenLatex(deg).trim() : '';
      const eStr = e ? childrenLatex(e) : '';
      if (degHide === '1' || degHide === 'true' || !degStr) {
        return `\\sqrt{${eStr}}`;
      }
      return `\\sqrt[${degStr}]{${eStr}}`;
    }

    case 'sSup': {
      // Superscript
      const e = findChild(el, 'e');
      const sup = findChild(el, 'sup');
      return `{${e ? childrenLatex(e) : ''}}^{${sup ? childrenLatex(sup) : ''}}`;
    }

    case 'sSub': {
      // Subscript
      const e = findChild(el, 'e');
      const sub = findChild(el, 'sub');
      return `{${e ? childrenLatex(e) : ''}}_{${sub ? childrenLatex(sub) : ''}}`;
    }

    case 'sSubSup': {
      // Subscript + Superscript
      const e = findChild(el, 'e');
      const sub = findChild(el, 'sub');
      const sup = findChild(el, 'sup');
      return `{${e ? childrenLatex(e) : ''}}_{${sub ? childrenLatex(sub) : ''}}^{${sup ? childrenLatex(sup) : ''}}`;
    }

    case 'nary': {
      // Integral, sum, product
      const naryPr = findChild(el, 'naryPr');
      const chr = getAttrVal(naryPr, 'chr') || '∫';
      const sub = findChild(el, 'sub');
      const sup = findChild(el, 'sup');
      const e = findChild(el, 'e');
      let op = '\\int';
      if (chr === '∑') op = '\\sum';
      else if (chr === '∏') op = '\\prod';
      else if (chr === '∬') op = '\\iint';
      else if (chr === '∭') op = '\\iiint';
      else if (chr === '∮') op = '\\oint';
      else if (chr === '⋃') op = '\\bigcup';
      else if (chr === '⋂') op = '\\bigcap';

      const subStr = sub ? childrenLatex(sub).trim() : '';
      const supStr = sup ? childrenLatex(sup).trim() : '';
      const eStr = e ? childrenLatex(e) : '';
      let limits = '';
      if (subStr) limits += `_{${subStr}}`;
      if (supStr) limits += `^{${supStr}}`;
      return `${op}${limits} ${eStr}`;
    }

    case 'd': {
      // Delimiters (parentheses, brackets, absolute value, cases)
      const dPr = findChild(el, 'dPr');
      const begChr = dPr ? getAttrVal(dPr, 'begChr') || '(' : '(';
      const endChr = dPr ? getAttrVal(dPr, 'endChr') : ')';
      const eNodes: Element[] = [];
      for (let i = 0; i < el.childNodes.length; i++) {
        const c = el.childNodes[i] as Element;
        if (c.nodeType === Node.ELEMENT_NODE && (c.localName || c.tagName.replace(/^.*:/, '')) === 'e') {
          eNodes.push(c);
        }
      }
      const inner = eNodes.map((n) => childrenLatex(n)).join(' \\\\ ');
      if (begChr === '{' && (!endChr || endChr === '')) {
        return `\\begin{cases} ${inner} \\end{cases}`;
      }
      const leftMap: Record<string, string> = {
        '(': '\\left(',
        '[': '\\left[',
        '{': '\\left\\{',
        '|': '\\left|',
        '‖': '\\left\\|',
      };
      const rightMap: Record<string, string> = {
        ')': '\\right)',
        ']': '\\right]',
        '}': '\\right\\}',
        '|': '\\right|',
        '‖': '\\right\\|',
        '': '\\right.',
      };
      const l = leftMap[begChr] ?? `\\left${begChr}`;
      const r = rightMap[endChr ?? ')'] ?? (endChr ? `\\right${endChr}` : '\\right)');
      return `${l}${inner}${r}`;
    }

    case 'acc': {
      // Accent (vector arrow, hat, bar, tilde)
      const accPr = findChild(el, 'accPr');
      const chr = getAttrVal(accPr, 'chr');
      const e = findChild(el, 'e');
      const inner = e ? childrenLatex(e).trim() : '';
      if (chr === '̂' || chr === '^' || chr === '\u0302') {
        return `\\widehat{${inner}}`;
      }
      if (chr === '̄' || chr === '-' || chr === '\u0304' || chr === '\u0305') {
        return `\\overline{${inner}}`;
      }
      if (chr === '̃' || chr === '~' || chr === '\u0303') {
        return `\\widetilde{${inner}}`;
      }
      return inner.length > 1 ? `\\overrightarrow{${inner}}` : `\\vec{${inner}}`;
    }

    case 'bar': {
      const e = findChild(el, 'e');
      return `\\overline{${e ? childrenLatex(e) : ''}}`;
    }

    case 'limLow': {
      const e = findChild(el, 'e');
      const lim = findChild(el, 'lim');
      const eStr = e ? childrenLatex(e).trim() : '\\lim';
      const limStr = lim ? childrenLatex(lim).trim() : '';
      return `${eStr === 'lim' ? '\\lim' : eStr}_{${limStr.replace(/→/g, '\\to ')}} `;
    }

    case 'limUpp': {
      const e = findChild(el, 'e');
      const lim = findChild(el, 'lim');
      return `{${e ? childrenLatex(e) : ''}}^{${lim ? childrenLatex(lim) : ''}}`;
    }

    case 'func': {
      const fName = findChild(el, 'fName');
      const e = findChild(el, 'e');
      let fn = fName ? childrenLatex(fName).trim() : '';
      if (/^(sin|cos|tan|cot|ln|log|lim|min|max)$/i.test(fn)) {
        fn = `\\${fn.toLowerCase()}`;
      }
      return `${fn} ${e ? childrenLatex(e) : ''}`;
    }

    case 'eqArr': {
      // Equation array (often inside cases or aligned systems)
      const rows: string[] = [];
      for (let i = 0; i < el.childNodes.length; i++) {
        const c = el.childNodes[i] as Element;
        if (c.nodeType === Node.ELEMENT_NODE && (c.localName || c.tagName.replace(/^.*:/, '')) === 'e') {
          rows.push(childrenLatex(c));
        }
      }
      return rows.join(' \\\\ ');
    }

    case 'm': {
      // Matrix
      const rows: string[] = [];
      for (let i = 0; i < el.childNodes.length; i++) {
        const mr = el.childNodes[i] as Element;
        if (mr.nodeType === Node.ELEMENT_NODE && (mr.localName || mr.tagName.replace(/^.*:/, '')) === 'mr') {
          const cols: string[] = [];
          for (let j = 0; j < mr.childNodes.length; j++) {
            const me = mr.childNodes[j] as Element;
            if (me.nodeType === Node.ELEMENT_NODE && (me.localName || me.tagName.replace(/^.*:/, '')) === 'e') {
              cols.push(childrenLatex(me));
            }
          }
          rows.push(cols.join(' & '));
        }
      }
      return `\\begin{matrix} ${rows.join(' \\\\ ')} \\end{matrix}`;
    }

    default:
      if (local.endsWith('Pr')) return '';
      return childrenLatex(el);
  }
}

/**
 * Convert a statistical/data Word table into an inline SVG diagram string
 */
function buildSvgFromWordTable(rows: string[][]): string {
  const numRows = rows.length;
  const numCols = Math.max(...rows.map((r) => r.length), 1);
  const colWidths = Array.from({ length: numCols }, (_, colIdx) => {
    const maxChars = Math.max(...rows.map((r) => (r[colIdx] || '').replace(/\$|\\/g, '').length), 4);
    return Math.min(200, Math.max(76, maxChars * 9 + 24));
  });
  const totalW = colWidths.reduce((a, b) => a + b, 0) + 20;
  const rowH = 38;
  const totalH = numRows * rowH + 20;

  const escapeXml = (s: string) =>
    s
      .replace(/\[\/?U\]/gi, '')
      .replace(/\$/g, '')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
      .replace(/\\infty/g, '∞')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${totalH}" class="w-full max-w-[680px] h-auto mx-auto select-none" style="font-family: 'Times New Roman', Times, serif;">`;
  svg += `<rect x="0" y="0" width="${totalW}" height="${totalH}" rx="8" fill="#ffffff"/>`;

  let curY = 10;
  for (let r = 0; r < numRows; r++) {
    let curX = 10;
    for (let c = 0; c < numCols; c++) {
      const w = colWidths[c];
      const isHeader = r === 0 || c === 0;
      svg += `<rect x="${curX}" y="${curY}" width="${w}" height="${rowH}" fill="${isHeader ? '#f1f5f9' : '#ffffff'}" stroke="#1e293b" stroke-width="1.4"/>`;
      const cellText = escapeXml((rows[r][c] || '').trim());
      svg += `<text x="${curX + w / 2}" y="${curY + rowH / 2 + 5}" text-anchor="middle" font-size="15" font-weight="${isHeader ? 'bold' : 'normal'}" fill="#0f172a">${cellText}</text>`;
      curX += w;
    }
    curY += rowH;
  }

  svg += `</svg>`;
  return svg;
}

/**
 * Direct, Ultra-Fast OpenXML (.docx) Extractor supporting:
 * 1. In Line with Text images (<wp:inline>), Anchored images (<wp:anchor>), and VML (<v:imagedata>)
 * 2. Word native Equation Editor (<m:oMath>) -> LaTeX
 * 3. Underlined / Highlighted / Red-colored correct answer detection ([U]...[/U])
 * 4. Word automatic lists (<w:numPr>) and layout/data tables (<w:tbl>)
 */
export async function extractTextFromDocx(file: File): Promise<string> {
  if (file.name.endsWith('.txt')) {
    return await file.text();
  }

  const arrayBuffer = await file.arrayBuffer();

  try {
    const zip = await JSZip.loadAsync(arrayBuffer);
    const docXmlFile = zip.file('word/document.xml');
    if (!docXmlFile) {
      throw new Error('Missing word/document.xml');
    }

    // 1. Parse relationships in word/_rels/document.xml.rels to map rId -> media file
    const relsMap = new Map<string, string>();
    const relsXmlFile = zip.file('word/_rels/document.xml.rels');
    if (relsXmlFile) {
      const relsXml = await relsXmlFile.async('string');
      const relRegex = /<Relationship\b[^>]*?>/gi;
      let m: RegExpExecArray | null;
      while ((m = relRegex.exec(relsXml)) !== null) {
        const tag = m[0];
        const idMatch = tag.match(/\bId=["']([^"']+)["']/i);
        const targetMatch = tag.match(/\bTarget=["']([^"']+)["']/i);
        if (idMatch && targetMatch) {
          relsMap.set(idMatch[1], targetMatch[1]);
        }
      }
    }

    // 2. Load all browser-supported media files in word/media/* into Base64 data URLs in parallel
    const rIdToDataUrl = new Map<string, string>();
    const relEntries = Array.from(relsMap.entries());
    await Promise.all(
      relEntries.map(async ([rId, target]) => {
        const cleanTarget = target.replace(/^\/+/, '').replace(/^\.\.\//, '');
        const candidatePaths = [
          `word/${cleanTarget}`,
          cleanTarget,
          `word/media/${cleanTarget.split('/').pop()}`,
        ];
        for (const p of candidatePaths) {
          const mediaEntry = zip.file(p);
          if (mediaEntry) {
            const mime = getMimeTypeFromFilename(p);
            if (mime) {
              const b64 = await mediaEntry.async('base64');
              rIdToDataUrl.set(rId, `data:${mime};base64,${b64}`);
            }
            break;
          }
        }
      })
    );

    // 3. Parse word/document.xml
    const docXml = await docXmlFile.async('string');
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(docXml, 'application/xml');
    const body =
      xmlDoc.getElementsByTagName('w:body')[0] ||
      xmlDoc.getElementsByTagName('body')[0] ||
      xmlDoc.documentElement;

    // Extract image tag from <w:drawing> (wp:inline / wp:anchor) or <w:pict> (v:imagedata)
    const extractDrawingImageTag = (drawingEl: Element): string => {
      // Collect candidate rIds from <a:blip>, <asvg:svgBlip>, <v:imagedata>
      const rIds: string[] = [];
      const allEls = drawingEl.getElementsByTagName('*');
      let widthPx = 0;
      let heightPx = 0;

      for (let i = 0; i < allEls.length; i++) {
        const el = allEls[i];
        const local = el.localName || el.tagName.replace(/^.*:/, '');
        if (local === 'extent') {
          const cx = parseInt(el.getAttribute('cx') || '0', 10);
          const cy = parseInt(el.getAttribute('cy') || '0', 10);
          if (cx > 0 && cy > 0) {
            widthPx = Math.round(cx / 9525);
            heightPx = Math.round(cy / 9525);
          }
        } else if (local === 'shape') {
          const style = el.getAttribute('style') || '';
          const wM = style.match(/width\s*:\s*([\d.]+)\s*(pt|px|in|cm)/i);
          const hM = style.match(/height\s*:\s*([\d.]+)\s*(pt|px|in|cm)/i);
          if (wM && hM) {
            const factor =
              wM[2].toLowerCase() === 'in'
                ? 96
                : wM[2].toLowerCase() === 'cm'
                ? 37.8
                : wM[2].toLowerCase() === 'pt'
                ? 1.333
                : 1;
            widthPx = Math.round(parseFloat(wM[1]) * factor);
            heightPx = Math.round(parseFloat(hM[1]) * factor);
          }
        } else if (local === 'blip' || local === 'svgBlip') {
          const embed =
            el.getAttribute('r:embed') ||
            el.getAttribute('embed') ||
            el.getAttribute('r:link');
          if (embed && !rIds.includes(embed)) {
            rIds.push(embed);
          }
        } else if (local === 'imagedata') {
          const rid =
            el.getAttribute('r:id') ||
            el.getAttribute('id') ||
            el.getAttribute('o:relid');
          if (rid && !rIds.includes(rid)) {
            rIds.push(rid);
          }
        }
      }

      // Find first rId that maps to a valid browser data URL
      for (const rId of rIds) {
        const dataUrl = rIdToDataUrl.get(rId);
        if (dataUrl) {
          // Distinguish tiny inline equation/symbol images from real diagrams/figures
          if (widthPx > 0 && heightPx > 0 && heightPx < 36 && widthPx < 95) {
            return ` [Hình công thức: ${dataUrl}] `;
          }
          return ` [Hình ảnh: ${dataUrl}] `;
        }
      }

      return '';
    };

    // Check if a run <w:r> has underline, highlight, or red/green answer marker color
    const isRunMarkedAsAnswer = (rEl: Element): boolean => {
      for (let i = 0; i < rEl.childNodes.length; i++) {
        const child = rEl.childNodes[i] as Element;
        if (child.nodeType === Node.ELEMENT_NODE) {
          const local = child.localName || child.tagName.replace(/^.*:/, '');
          if (local === 'rPr') {
            for (let j = 0; j < child.childNodes.length; j++) {
              const pr = child.childNodes[j] as Element;
              if (pr.nodeType !== Node.ELEMENT_NODE) continue;
              const prLocal = pr.localName || pr.tagName.replace(/^.*:/, '');
              if (prLocal === 'u') {
                const val = pr.getAttribute('w:val') || pr.getAttribute('val') || 'single';
                if (val && val !== 'none') return true;
              }
              if (prLocal === 'highlight') {
                const val = pr.getAttribute('w:val') || pr.getAttribute('val') || 'yellow';
                if (val && val !== 'none') return true;
              }
              if (prLocal === 'color') {
                const val = (pr.getAttribute('w:val') || pr.getAttribute('val') || '').toUpperCase();
                if (/^(FF0000|C00000|EE0000|CC0000|FF3300|00B050|RED)$/.test(val)) {
                  return true;
                }
              }
            }
          }
        }
      }
      return false;
    };

    // Check if run has superscript or subscript
    const getRunVertAlign = (rEl: Element): 'superscript' | 'subscript' | null => {
      for (let i = 0; i < rEl.childNodes.length; i++) {
        const child = rEl.childNodes[i] as Element;
        if (child.nodeType === Node.ELEMENT_NODE && (child.localName || child.tagName.replace(/^.*:/, '')) === 'rPr') {
          for (let j = 0; j < child.childNodes.length; j++) {
            const pr = child.childNodes[j] as Element;
            if (pr.nodeType === Node.ELEMENT_NODE && (pr.localName || pr.tagName.replace(/^.*:/, '')) === 'vertAlign') {
              const val = pr.getAttribute('w:val') || pr.getAttribute('val');
              if (val === 'superscript' || val === 'subscript') return val;
            }
          }
        }
      }
      return null;
    };

    const extractRunContent = (rEl: Element): string => {
      let runOut = '';
      let textOnly = '';
      for (let i = 0; i < rEl.childNodes.length; i++) {
        const c = rEl.childNodes[i] as Element;
        if (c.nodeType !== Node.ELEMENT_NODE) continue;
        const local = c.localName || c.tagName.replace(/^.*:/, '');
        if (local === 't') {
          const t = c.textContent || '';
          runOut += t;
          textOnly += t;
        } else if (local === 'tab') {
          runOut += '\t';
        } else if (local === 'br' || local === 'cr') {
          runOut += '\n';
        } else if (local === 'drawing' || local === 'pict' || local === 'object') {
          runOut += extractDrawingImageTag(c);
        } else if (local === 'AlternateContent') {
          // Prefer mc:Choice over mc:Fallback to avoid duplicate images
          let choiceHandled = false;
          for (let k = 0; k < c.childNodes.length; k++) {
            const mcChild = c.childNodes[k] as Element;
            if (mcChild.nodeType === Node.ELEMENT_NODE) {
              const mcLocal = mcChild.localName || mcChild.tagName.replace(/^.*:/, '');
              if (mcLocal === 'Choice') {
                const imgTag = extractDrawingImageTag(mcChild);
                if (imgTag) {
                  runOut += imgTag;
                  choiceHandled = true;
                  break;
                }
              }
            }
          }
          if (!choiceHandled) {
            runOut += extractDrawingImageTag(c);
          }
        }
      }

      const vAlign = getRunVertAlign(rEl);
      if (vAlign === 'superscript' && textOnly.trim()) {
        runOut = `^{${textOnly.trim()}}`;
      } else if (vAlign === 'subscript' && textOnly.trim()) {
        runOut = `_{${textOnly.trim()}}`;
      }

      if (isRunMarkedAsAnswer(rEl) && textOnly.trim()) {
        return `[U]${runOut}[/U]`;
      }
      return runOut;
    };

    const extractParagraphContent = (pEl: Element): string => {
      let pOut = '';
      let hasNumPr = false;

      for (let i = 0; i < pEl.childNodes.length; i++) {
        const c = pEl.childNodes[i] as Element;
        if (c.nodeType !== Node.ELEMENT_NODE) continue;
        const local = c.localName || c.tagName.replace(/^.*:/, '');

        if (local === 'pPr') {
          for (let j = 0; j < c.childNodes.length; j++) {
            const pr = c.childNodes[j] as Element;
            if (pr.nodeType === Node.ELEMENT_NODE && (pr.localName || pr.tagName.replace(/^.*:/, '')) === 'numPr') {
              hasNumPr = true;
            }
          }
        } else if (local === 'r') {
          pOut += extractRunContent(c);
        } else if (local === 'hyperlink' || local === 'smartTag' || local === 'ins' || local === 'sdtContent') {
          for (let j = 0; j < c.childNodes.length; j++) {
            const sub = c.childNodes[j] as Element;
            if (sub.nodeType === Node.ELEMENT_NODE) {
              const subLocal = sub.localName || sub.tagName.replace(/^.*:/, '');
              if (subLocal === 'r') pOut += extractRunContent(sub);
              else if (subLocal === 'oMath' || subLocal === 'oMathPara') {
                const ltx = ommlNodeToLatex(sub).trim();
                if (ltx) pOut += ` $${ltx}$ `;
              }
            }
          }
        } else if (local === 'oMath' || local === 'oMathPara') {
          const ltx = ommlNodeToLatex(c).trim();
          if (ltx) {
            pOut += ` $${ltx}$ `;
          }
        } else if (local === 'drawing' || local === 'pict' || local === 'object') {
          pOut += extractDrawingImageTag(c);
        } else if (local === 'AlternateContent') {
          pOut += extractDrawingImageTag(c);
        }
      }

      // Merge adjacent [U]...[/U][U]...[/U]
      pOut = pOut.replace(/\[\/U\](\s*)\[U\]/gi, '$1');

      const trimmed = pOut.trim();
      if (!trimmed) return '';

      if (
        hasNumPr &&
        !/^(?:Câu|Bài|Câu\s*hỏi|PHẦN|Phần|PART|[A-D][\.\)]|[a-d][\.\)])/i.test(
          trimmed.replace(/^\[U\]/i, '').trim()
        )
      ) {
        return `[LIST_ITEM] ${trimmed}`;
      }

      return trimmed;
    };

    const outputLines: string[] = [];

    for (let i = 0; i < body.childNodes.length; i++) {
      const node = body.childNodes[i] as Element;
      if (node.nodeType !== Node.ELEMENT_NODE) continue;
      const local = node.localName || node.tagName.replace(/^.*:/, '');

      if (local === 'p') {
        const line = extractParagraphContent(node);
        if (line) outputLines.push(line);
      } else if (local === 'tbl') {
        // Extract table rows & cells
        const tableRows: string[][] = [];
        for (let r = 0; r < node.childNodes.length; r++) {
          const tr = node.childNodes[r] as Element;
          if (tr.nodeType !== Node.ELEMENT_NODE || (tr.localName || tr.tagName.replace(/^.*:/, '')) !== 'tr') {
            continue;
          }
          const rowCells: string[] = [];
          for (let c = 0; c < tr.childNodes.length; c++) {
            const tc = tr.childNodes[c] as Element;
            if (tc.nodeType !== Node.ELEMENT_NODE || (tc.localName || tc.tagName.replace(/^.*:/, '')) !== 'tc') {
              continue;
            }
            const cellParas: string[] = [];
            for (let p = 0; p < tc.childNodes.length; p++) {
              const child = tc.childNodes[p] as Element;
              if (child.nodeType === Node.ELEMENT_NODE) {
                const cLocal = child.localName || child.tagName.replace(/^.*:/, '');
                if (cLocal === 'p') {
                  const pLine = extractParagraphContent(child);
                  if (pLine) cellParas.push(pLine);
                }
              }
            }
            rowCells.push(cellParas.join('\n'));
          }
          if (rowCells.some((cell) => cell.trim().length > 0)) {
            tableRows.push(rowCells);
          }
        }

        if (tableRows.length === 0) continue;
        const flatTableText = tableRows.map((r) => r.join(' ')).join('\n');

        // Case 1: Answer Key Table (e.g. Row 1: 1 | 2 | 3..., Row 2: A | B | C...)
        const isTwoRowAnswerGrid =
          tableRows.length >= 2 &&
          tableRows[0].length >= 4 &&
          tableRows[0].every((c) => /^(?:Câu\s*)?\d+$/i.test(c.replace(/\[\/?U\]/gi, '').trim())) &&
          tableRows[1].every((c) => /^[A-D]$/i.test(c.replace(/\[\/?U\]/gi, '').trim()));

        if (isTwoRowAnswerGrid) {
          for (let r = 0; r + 1 < tableRows.length; r += 2) {
            const nums = tableRows[r];
            const ans = tableRows[r + 1];
            if (!ans) break;
            const pairs: string[] = [];
            for (let k = 0; k < Math.min(nums.length, ans.length); k++) {
              const n = nums[k].replace(/\D+/g, '');
              const a = ans[k].replace(/\[\/?U\]/gi, '').trim().toUpperCase();
              if (n && /^[A-D]$/.test(a)) {
                pairs.push(`${n}.${a}`);
              }
            }
            if (pairs.length > 0) {
              outputLines.push(`BẢNG ĐÁP ÁN: ${pairs.join(' ')}`);
            }
          }
          continue;
        }

        // Case 2: Layout table containing questions, options, or inline images
        const hasQuestionOrImageOrOptions =
          /(?:Câu|Bài|Câu\s*hỏi)\s*\d+/i.test(flatTableText) ||
          /\[Hình\s*(?:ảnh|công\s*thức)\s*:/i.test(flatTableText) ||
          /(?:^|\s)[A-D][\.\)]/m.test(flatTableText) ||
          /(?:^|\s)[a-d][\.\)]/m.test(flatTableText);

        if (hasQuestionOrImageOrOptions) {
          for (const row of tableRows) {
            // If a 2-column row has an image in Col 0 and "Câu X" in Col 1, put "Câu X" first so the image stays inside Câu X!
            if (
              row.length === 2 &&
              /\[Hình\s*ảnh\s*:/i.test(row[0]) &&
              !/Câu\s*\d+/i.test(row[0]) &&
              /(?:Câu|Bài)\s*\d+/i.test(row[1])
            ) {
              outputLines.push(row[1]);
              outputLines.push(row[0]);
            } else {
              for (const cell of row) {
                if (cell.trim()) outputLines.push(cell.trim());
              }
            }
          }
        } else if (tableRows.length >= 2 && tableRows[0].length >= 2) {
          // Case 3: Pure statistical / variation data table inside a question -> generate crisp SVG diagram
          const svg = buildSvgFromWordTable(tableRows);
          outputLines.push(`[Hình vẽ: ${svg}]`);
        }
      }
    }

    if (outputLines.length > 0) {
      return resolveAutoNumberedLists(outputLines).join('\n');
    }
  } catch (xmlErr) {
    console.warn('Direct OpenXML parser fallback to Mammoth:', xmlErr);
  }

  // Fallback to Mammoth if direct XML parsing did not return lines
  try {
    const result = await mammoth.convertToHtml(
      { arrayBuffer },
      {
        styleMap: ['u => u', 'strike => s'],
        convertImage: (mammoth.images as any).inline((element: any) => {
          return element.read('base64').then((imageBuffer: string) => {
            return {
              src: `data:${element.contentType || 'image/png'};base64,${imageBuffer}`,
            };
          });
        }),
      }
    );

    let html = result.value || '';
    html = html.replace(/<img\s+[^>]*?src=["']?([^"'\s>]+)["']?[^>]*?>/gi, ' [Hình ảnh: $1] ');
    html = html.replace(/<u>([\s\S]*?)<\/u>/gi, '[U]$1[/U]');
    html = html
      .replace(/<\/p>/gi, '\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<li[^>]*>/gi, '[LIST_ITEM] ')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
    const lines = html
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    return resolveAutoNumberedLists(lines).join('\n');
  } catch (err) {
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  }
}

/**
 * Convert [LIST_ITEM] paragraphs from Word auto-numbering into A. B. C. D. or a) b) c) d) or Câu X.
 */
function resolveAutoNumberedLists(lines: string[]): string[] {
  const result: string[] = [];
  let currentSec: 'PART_I' | 'PART_II' | 'PART_III' = 'PART_I';
  let listCounter = 0;
  let autoQuestionCounter = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const sec = detectSectionHeader(line);
    if (sec) {
      currentSec = sec;
      listCounter = 0;
      autoQuestionCounter = 0;
      result.push(line);
      continue;
    }

    if (/^(?:Câu|Bài|Câu\s*hỏi)\s*\d+/i.test(line.replace(/^\[U\]/i, '').trim())) {
      listCounter = 0;
      result.push(line);
      continue;
    }

    if (line.startsWith('[LIST_ITEM]')) {
      const content = line.replace(/^\[LIST_ITEM\]\s*/, '').trim();
      if (currentSec === 'PART_I' && listCounter < 4) {
        const key = ['A', 'B', 'C', 'D'][listCounter];
        listCounter++;
        result.push(`${key}. ${content}`);
      } else if (currentSec === 'PART_II' && listCounter < 4) {
        const key = ['a', 'b', 'c', 'd'][listCounter];
        listCounter++;
        result.push(`${key}) ${content}`);
      } else {
        autoQuestionCounter++;
        listCounter = 0;
        result.push(`Câu ${autoQuestionCounter}. ${content}`);
      }
    } else {
      result.push(line);
    }
  }

  return result;
}

/**
 * Extract raw text from a .pdf File using pdfjs-dist
 */
export async function extractTextFromPdf(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  try {
    const loadingTask = (pdfjsLib as any).getDocument({
      data: new Uint8Array(arrayBuffer),
      useWorkerFetch: false,
      isEvalSupported: false,
      useSystemFonts: true,
    });
    const pdf = await loadingTask.promise;
    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item: any) => (typeof item.str === 'string' ? item.str : ''))
        .join(' ');
      fullText += `\n--- TRANG ${i} ---\n` + pageText + '\n';
    }
    return fullText;
  } catch (err: any) {
    console.warn('Local PDF parse fallback error:', err);
    throw new Error(
      'Không thể đọc trực tiếp văn bản từ file PDF (có thể là file scan hoặc bị mã hóa). Vui lòng dùng tính năng "Quét đề AI" bên dưới để đọc tài liệu tự động.'
    );
  }
}

/**
 * Convert a File into a base64 string
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64Data = result.split(',')[1] || result;
      resolve(base64Data);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * AI Smart Exam Parser using Server Gemini endpoint /api/parse-exam-document
 */
export async function aiParseExamDocumentAsync(params: {
  file?: File;
  rawText?: string;
  fileName?: string;
}): Promise<{ questions: Question[]; title?: string; isAiParsed?: boolean }> {
  let fileBase64: string | undefined = undefined;
  let mimeType: string | undefined = undefined;

  if (params.file) {
    fileBase64 = await fileToBase64(params.file);
    mimeType = params.file.type;
    if (!mimeType) {
      if (params.file.name.endsWith('.pdf')) mimeType = 'application/pdf';
      else if (params.file.name.endsWith('.docx'))
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      else if (params.file.name.endsWith('.txt')) mimeType = 'text/plain';
    }
  }

  const response = await fetch('/api/parse-exam-document', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      rawText: params.rawText,
      fileBase64,
      mimeType,
      fileName: params.fileName || params.file?.name,
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error || `Lỗi từ máy chủ khi bóc tách đề (${response.status})`);
  }

  const data = await response.json();
  return {
    questions: data.questions || [],
    title: data.title,
    isAiParsed: true,
  };
}

/**
 * Helper to download sample format file (.txt)
 */
export function downloadSampleFormatFile() {
  const blob = new Blob([SAMPLE_WORD_FORMAT], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'De_Thi_Mau_THPT_Chuan_3_Phan.txt';
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Detect explicit section header keyword from a line
 */
export function detectSectionHeader(line: string): 'PART_I' | 'PART_II' | 'PART_III' | null {
  const trimmed = line.replace(/\[\/?U\]/gi, '').trim();
  if (!trimmed) return null;

  // 1. Check PART III first (III, 3, Thứ ba, Trả lời ngắn)
  if (
    /(?:^|[^\w\d])(?:PHẦN|Phần|PART)\s*(?:III|3|THỨ\s*(?:BA|3|III)|BA)\b/i.test(trimmed) ||
    /^(?:III|3)\s*[\.\:\-]\s*(?:PHẦN|CÂU\s*HỎI|TRẢ\s*LỜI\s*NGẮN|TRẮC\s*NGHIỆM\s*TRẢ\s*LỜI\s*NGẮN)/i.test(trimmed) ||
    /^(?:PHẦN\s*THỨ\s*BA|TRẮC\s*NGHIỆM\s*TRẢ\s*LỜI\s*NGẮN\s*\(PHẦN\s*III\)|PHẦN\s*3\b)/i.test(trimmed)
  ) {
    return 'PART_III';
  }

  // 2. Check PART II second (II, 2, Thứ hai, Đúng Sai)
  if (
    /(?:^|[^\w\d])(?:PHẦN|Phần|PART)\s*(?:II|2|THỨ\s*(?:HAI|2|II)|HAI)\b/i.test(trimmed) ||
    /^(?:II|2)\s*[\.\:\-]\s*(?:PHẦN|CÂU\s*HỎI|TRẮC\s*NGHIỆM\s*ĐÚNG\s*SAI|ĐÚNG\s*SAI)/i.test(trimmed) ||
    /^(?:PHẦN\s*THỨ\s*HAI|TRẮC\s*NGHIỆM\s*ĐÚNG\s*SAI\s*\(PHẦN\s*II\)|PHẦN\s*2\b)/i.test(trimmed)
  ) {
    return 'PART_II';
  }

  // 3. Check PART I third (I, 1, Thứ nhất, Nhiều lựa chọn)
  if (
    /(?:^|[^\w\d])(?:PHẦN|Phần|PART)\s*(?:I|1|THỨ\s*(?:NHẤT|1|I)|MỘT)\b/i.test(trimmed) ||
    /^(?:I|1)\s*[\.\:\-]\s*(?:PHẦN|CÂU\s*HỎI|TRẮC\s*NGHIỆM\s*NHIỀU\s*LỰA\s*CHỌN|TRẮC\s*NGHIỆM)/i.test(trimmed) ||
    /^(?:PHẦN\s*THỨ\s*NHẤT|TRẮC\s*NGHIỆM\s*NHIỀU\s*LỰA\s*CHỌN\s*\(PHẦN\s*I\)|PHẦN\s*1\b)/i.test(trimmed)
  ) {
    return 'PART_I';
  }

  return null;
}

/**
 * Parse raw text into array of Question items supporting:
 * - PHẦN I: Câu 1 -> 12 (hoặc 1..12)
 * - PHẦN II: Câu 1 -> 4 (hoặc 13..16) -> maps to IDs 13..16
 * - PHẦN III: Câu 1 -> 6 (hoặc 17..22) -> maps to IDs 17..22
 * - Both inline answers/solutions AND end-of-document BẢNG ĐÁP ÁN / HƯỚNG DẪN GIẢI CHI TIẾT
 * - Direct In Line with Text images ([Hình ảnh: data:image/...])
 */
export function parseExamText(rawText: string): { questions: Question[]; errors: string[] } {
  const errors: string[] = [];
  const questions: Question[] = [];

  if (!rawText || rawText.trim().length === 0) {
    return { questions: [], errors: ['Nội dung file rỗng hoặc không có văn bản.'] };
  }

  // Normalize lines
  const allLines = rawText
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  // Detect if there is an end-of-document "BẢNG ĐÁP ÁN" / "HƯỚNG DẪN GIẢI CHI TIẾT" section
  let examLines = allLines;
  let solutionSectionLines: string[] = [];

  for (let i = 10; i < allLines.length; i++) {
    const cleanLine = allLines[i].replace(/\[\/?U\]/gi, '').trim();
    if (
      /^(?:BẢNG\s*ĐÁP\s*ÁN|ĐÁP\s*ÁN\s*VÀ\s*HƯỚNG\s*DẪN\s*GIẢI|HƯỚNG\s*DẪN\s*GIẢI\s*CHI\s*TIẾT|LỜI\s*GIẢI\s*CHI\s*TIẾT|ĐÁP\s*ÁN\s*CHI\s*TIẾT)\b/i.test(
        cleanLine
      )
    ) {
      examLines = allLines.slice(0, i);
      solutionSectionLines = allLines.slice(i);
      break;
    }
  }

  let currentSection: 'PART_I' | 'PART_II' | 'PART_III' = 'PART_I';
  const sectionCounts = { PART_I: 0, PART_II: 0, PART_III: 0 };

  interface RawQuestionBlock {
    globalId: number; // 1 to 22
    localNum: number;
    section: 'PART_I' | 'PART_II' | 'PART_III';
    lines: string[];
  }

  const questionBlocks: RawQuestionBlock[] = [];
  let currentBlockLines: string[] = [];
  let pendingOrphanImages: string[] = [];
  let currentLocalNum = 0;
  let currentGlobalId = 0;
  let currentBlockSection: 'PART_I' | 'PART_II' | 'PART_III' = 'PART_I';

  for (let i = 0; i < examLines.length; i++) {
    let line = examLines[i];

    // If a line starts with an inline image immediately followed by "Câu X.", reorder so "Câu X." leads
    line = line.replace(
      /^((?:\[Hình\s*(?:ảnh|công\s*thức)\s*:\s*[^\]]+\]\s*)+)((?:Câu|Bài|Câu\s*hỏi)\s*\d+)/i,
      '$2 $1'
    );

    // Detect explicit section header (PHẦN I, PHẦN II, PHẦN III)
    const detectedSec = detectSectionHeader(line);
    if (detectedSec) {
      currentSection = detectedSec;
      if (!/(?:Câu|Bài|Câu\s*hỏi)\s*\d+/i.test(line)) {
        continue;
      }
      line = line
        .replace(
          /(?:PHẦN|Phần|PART)\s*(?:[I123]|II|III|THỨ\s*(?:NHẤT|HAI|BA|1|2|3))[^\.\:\n]*[\.\:\-]?\s*/gi,
          ''
        )
        .trim();
    }

    // Match "Câu 1.", "Câu 1:", "Câu 1 ", "Bài 1.", "Câu hỏi 1." (ignoring leading [U] tags)
    const cleanForMatch = line.replace(/^\[U\]\s*/i, '');
    const qMatch = cleanForMatch.match(/^(?:Câu|Bài|Câu\s*hỏi)\s*(\d+)[\.\:\s]\s*(.*)/i);
    if (qMatch) {
      if (currentBlockLines.length > 0 && currentGlobalId > 0) {
        questionBlocks.push({
          globalId: currentGlobalId,
          localNum: currentLocalNum,
          section: currentBlockSection,
          lines: [...currentBlockLines],
        });
      }

      const num = parseInt(qMatch[1], 10);
      currentLocalNum = num;

      // Smart Section Auto-Transition if no explicit section header was provided:
      if (currentSection === 'PART_I') {
        if (num >= 13 && num <= 16) {
          currentSection = 'PART_II';
        } else if (num >= 17) {
          currentSection = 'PART_III';
        } else if (num === 1 && sectionCounts.PART_I >= 10) {
          currentSection = 'PART_II';
        }
      } else if (currentSection === 'PART_II') {
        if (num >= 17) {
          currentSection = 'PART_III';
        } else if (num === 1 && sectionCounts.PART_II >= 3) {
          currentSection = 'PART_III';
        }
      }

      currentBlockSection = currentSection;

      // Calculate global ID (1 to 22)
      if (currentSection === 'PART_I') {
        currentGlobalId = num >= 1 && num <= 12 ? num : sectionCounts.PART_I + 1;
        sectionCounts.PART_I++;
      } else if (currentSection === 'PART_II') {
        if (num >= 1 && num <= 4) {
          currentGlobalId = 12 + num; // 13..16
        } else if (num >= 13 && num <= 16) {
          currentGlobalId = num;
        } else {
          currentGlobalId = 12 + (sectionCounts.PART_II + 1);
        }
        sectionCounts.PART_II++;
      } else {
        if (num >= 1 && num <= 6) {
          currentGlobalId = 16 + num; // 17..22
        } else if (num >= 17 && num <= 22) {
          currentGlobalId = num;
        } else {
          currentGlobalId = 16 + (sectionCounts.PART_III + 1);
        }
        sectionCounts.PART_III++;
      }

      currentBlockLines = [line, ...pendingOrphanImages];
      pendingOrphanImages = [];
    } else {
      if (currentGlobalId > 0) {
        currentBlockLines.push(line);
      } else if (/\[Hình\s*(?:ảnh|công\s*thức)\s*:/i.test(line)) {
        pendingOrphanImages.push(line);
      }
    }
  }

  // Push last block
  if (currentBlockLines.length > 0 && currentGlobalId > 0) {
    questionBlocks.push({
      globalId: currentGlobalId,
      localNum: currentLocalNum,
      section: currentBlockSection,
      lines: [...currentBlockLines],
    });
  }

  if (questionBlocks.length === 0) {
    errors.push('Không tìm thấy các câu hỏi theo định dạng "Câu 1.", "Câu 2.", ... trong tài liệu.');
    return { questions: [], errors };
  }

  // Parse each question block
  questionBlocks.forEach((block) => {
    try {
      const q = parseSingleQuestionBlock(block.globalId, block.section, block.lines);
      if (q) {
        questions.push(q);
      }
    } catch (e: any) {
      errors.push(`Lỗi khi xử lý Câu ${block.localNum} (${block.section}): ${e?.message || 'Không rõ'}`);
    }
  });

  // If there was an end-of-document solution/answer section, apply answers & explanations!
  if (solutionSectionLines.length > 0 && questions.length > 0) {
    applyEndDocumentAnswersAndSolutions(questions, solutionSectionLines);
  }

  return { questions, errors };
}

/**
 * Apply end-of-document BẢNG ĐÁP ÁN and HƯỚNG DẪN GIẢI CHI TIẾT to parsed questions
 */
function applyEndDocumentAnswersAndSolutions(questions: Question[], solLines: string[]) {
  const fullSolText = solLines.join('\n');

  // 1. Parse quick Part I pairs like "1.A", "1-A", "1A", "Câu 1: A"
  const pairRegex = /\b(\d{1,2})\s*[\.\-\:]?\s*([A-D])\b/g;
  let pm: RegExpExecArray | null;
  while ((pm = pairRegex.exec(fullSolText)) !== null) {
    const qNum = parseInt(pm[1], 10);
    const ans = pm[2].toUpperCase() as 'A' | 'B' | 'C' | 'D';
    if (qNum >= 1 && qNum <= 12) {
      const targetQ = questions.find((q) => q.section === 'PART_I' && q.id === qNum);
      if (targetQ && targetQ.section === 'PART_I') {
        targetQ.correctAnswer = ans;
      }
    }
  }

  // 2. Parse detailed solution blocks by section & Câu X
  let curSec: 'PART_I' | 'PART_II' | 'PART_III' = 'PART_I';
  let curQId = 0;
  let curLines: string[] = [];

  const flushSol = () => {
    if (curQId <= 0 || curLines.length === 0) return;
    const targetQ = questions.find((q) => q.id === curQId);
    if (!targetQ) return;

    const solBody = curLines.join('\n').replace(/^(?:Câu|Bài)\s*\d+[\.\:\s]*/i, '').trim();
    if (!solBody) return;

    if (
      !targetQ.explanation ||
      targetQ.explanation === 'Hướng dẫn giải chi tiết đang được cập nhật.'
    ) {
      targetQ.explanation = stripU(solBody);
    }

    if (targetQ.section === 'PART_I') {
      const m = solBody.match(/(?:Chọn|Đáp án(?:\s*đúng)?)\s*[\:\-]?\s*([A-D])\b/i);
      if (m) {
        targetQ.correctAnswer = m[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
      }
    } else if (targetQ.section === 'PART_III') {
      const m = solBody.match(/(?:Đáp số|Đáp án|Kết quả|Vậy[^\n\r=]*=)\s*[\:\-]?\s*([\-0-9\.,\/]+)/i);
      if (m && (!targetQ.correctAnswer || targetQ.correctAnswer === '0')) {
        targetQ.correctAnswer = stripU(m[1].trim());
      }
    }
  };

  for (const line of solLines) {
    const sec = detectSectionHeader(line);
    if (sec) {
      flushSol();
      curSec = sec;
      curQId = 0;
      curLines = [];
      continue;
    }

    const qm = line.replace(/^\[U\]\s*/i, '').match(/^(?:Câu|Bài)\s*(\d+)[\.\:\s]/i);
    if (qm) {
      flushSol();
      const num = parseInt(qm[1], 10);
      if (curSec === 'PART_I') curQId = num;
      else if (curSec === 'PART_II') curQId = num <= 4 ? 12 + num : num;
      else curQId = num <= 6 ? 16 + num : num;
      curLines = [line];
    } else if (curQId > 0) {
      curLines.push(line);
    }
  }
  flushSol();
}

function parseSingleQuestionBlock(
  id: number,
  section: 'PART_I' | 'PART_II' | 'PART_III',
  lines: string[]
): Question {
  const fullBlockText = lines.join('\n');

  // Separate main question + options from Explanation ("Lời giải:", "Hướng dẫn giải:", "HDG:")
  let explanation = 'Hướng dẫn giải chi tiết đang được cập nhật.';
  let mainPartText = fullBlockText;

  const explRegex = /(?:^|\n)\s*(?:\[U\])?\s*(?:Lời\s*giải|Hướng\s*dẫn\s*giải|HDG)\s*(?:\[\/U\])?\s*[\:\.\-]\s*([\s\S]*)$/i;
  const explMatch = fullBlockText.match(explRegex);
  if (explMatch && explMatch.index !== undefined) {
    explanation = explMatch[1].trim();
    mainPartText = fullBlockText.slice(0, explMatch.index).trim();
  }

  // Extract explicit Diagram Type if specified by tag [Hình vẽ: NAME] or [Hình vẽ: <svg...>]
  let detectedDiagram: string | undefined = undefined;
  const diagMatch = mainPartText.match(
    /\[(?:Hình\s*vẽ|Sơ\s*đồ|Diagram|Mô\s*hình)\s*:\s*([\s\S]*?)\]/i
  );
  if (diagMatch) {
    const diagVal = diagMatch[1].trim();
    if (diagVal.startsWith('<svg')) {
      detectedDiagram = diagVal;
    } else if (/^[A-Za-z0-9_]+$/.test(diagVal)) {
      detectedDiagram = diagVal.toUpperCase();
    }
    mainPartText = mainPartText.replace(diagMatch[0], '').trim();
  }

  // Extract In Line with Text images ([Hình ảnh: data:image/...] or ![...](...)) from mainPartText
  let imageUrl: string | undefined = undefined;
  const figureImgRegex = /(?:\[(?:Hình\s*ảnh|Ảnh|Hình|Image)\s*:\s*([^\]]+)\]|!\[[^\]]*\]\(([^\)]+)\))/gi;
  const allFigureMatches = Array.from(mainPartText.matchAll(figureImgRegex));

  if (allFigureMatches.length > 0) {
    // Check if there are 4 option images (1 per option A, B, C, D)
    const isFourOptionImages = section === 'PART_I' && allFigureMatches.length >= 4;
    if (!isFourOptionImages) {
      const firstRawUrl = (allFigureMatches[0][1] || allFigureMatches[0][2] || '').trim();
      if (
        firstRawUrl.startsWith('data:image/') ||
        firstRawUrl.startsWith('http://') ||
        firstRawUrl.startsWith('https://') ||
        firstRawUrl.startsWith('blob:') ||
        firstRawUrl.startsWith('/assets/')
      ) {
        imageUrl = firstRawUrl;
        // Remove the primary figure image tag from mainPartText so it renders in QuestionDiagram without duplicating in text
        mainPartText = mainPartText.replace(allFigureMatches[0][0], ' ').trim();
      }
    }
  }

  // Section title badge string
  let sectionTitle = 'PHẦN I: Trắc nghiệm (1-12)';
  if (section === 'PART_II') sectionTitle = 'PHẦN II: Đúng / Sai (13-16)';
  if (section === 'PART_III') sectionTitle = 'PHẦN III: Trả lời ngắn (17-22)';

  // Strip leading "Câu X." from mainPartText
  const bodyWithU = mainPartText
    .replace(/^\s*(?:\[U\])?\s*(?:Câu|Bài|Câu\s*hỏi)\s*\d+\s*(?:\[\/U\])?\s*[\.\:\-]?\s*/i, '')
    .trim();

  if (section === 'PART_I') {
    const choices: { key: 'A' | 'B' | 'C' | 'D'; text: string }[] = [];
    let correctAnswer: 'A' | 'B' | 'C' | 'D' = 'A';

    // Remove explicit "Đáp án: X" line from bodyWithU while recording the explicit answer
    let explicitAns: 'A' | 'B' | 'C' | 'D' | null = null;
    const ansLineRegex = /(?:^|\n|\s)(?:\[U\])?\s*(?:Đáp\s*án(?:\s*đúng)?|Chọn)\s*(?:\[\/U\])?\s*[\:\-]\s*(?:\[U\])?\s*([A-D])\b[\s\S]*$/i;
    const ansMatch = bodyWithU.match(ansLineRegex) || explanation.match(/(?:Đáp\s*án(?:\s*đúng)?|Chọn)\s*[\:\-]?\s*([A-D])\b/i);
    if (ansMatch) {
      explicitAns = ansMatch[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
    }

    const cleanBodyWithU = bodyWithU.replace(ansLineRegex, '').trim();
    const cleanBodyPlain = stripUPreserveImages(cleanBodyWithU);

    // Locate A., B., C., D. positions in order
    const findOptionIndices = (text: string): { A: number; B: number; C: number; D: number } | null => {
      const findKeyAfter = (key: string, minIdx: number): number => {
        const re = new RegExp(`(?:^|[\\n\\t]|\\s{1,})(?:\\[U\\]\\s*)?${key}(?:\\s*\\[\\/U\\])?[\\.\\)\\:](?=\\s|\\$|\\[|$)`, 'g');
        re.lastIndex = Math.max(0, minIdx);
        const m = re.exec(text);
        if (!m) return -1;
        // Advance past leading whitespace/newline to the actual option start
        const leadingWs = m[0].match(/^[\s\n\t]+/);
        return m.index + (leadingWs ? leadingWs[0].length : 0);
      };

      const aIdx = findKeyAfter('A', 0);
      if (aIdx === -1) return null;
      const bIdx = findKeyAfter('B', aIdx + 2);
      if (bIdx === -1) return null;
      const cIdx = findKeyAfter('C', bIdx + 2);
      if (cIdx === -1) return null;
      const dIdx = findKeyAfter('D', cIdx + 2);
      if (dIdx === -1) return null;
      return { A: aIdx, B: bIdx, C: cIdx, D: dIdx };
    };

    const indicesWithU = findOptionIndices(cleanBodyWithU);
    const indicesPlain = findOptionIndices(cleanBodyPlain);

    let qText = cleanBodyPlain;
    if (indicesPlain) {
      qText = cleanBodyPlain.slice(0, indicesPlain.A).trim();
      const rawA = cleanBodyPlain.slice(indicesPlain.A, indicesPlain.B).replace(/^A[\.\)\:]\s*/i, '').trim();
      const rawB = cleanBodyPlain.slice(indicesPlain.B, indicesPlain.C).replace(/^B[\.\)\:]\s*/i, '').trim();
      const rawC = cleanBodyPlain.slice(indicesPlain.C, indicesPlain.D).replace(/^C[\.\)\:]\s*/i, '').trim();
      const rawD = cleanBodyPlain.slice(indicesPlain.D).replace(/^D[\.\)\:]\s*/i, '').trim();

      choices.push({ key: 'A', text: stripU(rawA || 'Đáp án A') });
      choices.push({ key: 'B', text: stripU(rawB || 'Đáp án B') });
      choices.push({ key: 'C', text: stripU(rawC || 'Đáp án C') });
      choices.push({ key: 'D', text: stripU(rawD || 'Đáp án D') });
    } else {
      choices.push({ key: 'A', text: 'Đáp án A' });
      choices.push({ key: 'B', text: 'Đáp án B' });
      choices.push({ key: 'C', text: 'Đáp án C' });
      choices.push({ key: 'D', text: 'Đáp án D' });
    }

    // Detect underlined / highlighted / red-colored correct option if explicitAns wasn't provided
    if (explicitAns) {
      correctAnswer = explicitAns;
    } else if (indicesWithU) {
      const segA = cleanBodyWithU.slice(indicesWithU.A, indicesWithU.B);
      const segB = cleanBodyWithU.slice(indicesWithU.B, indicesWithU.C);
      const segC = cleanBodyWithU.slice(indicesWithU.C, indicesWithU.D);
      const segD = cleanBodyWithU.slice(indicesWithU.D);

      if (/\[U\]/i.test(segA)) correctAnswer = 'A';
      else if (/\[U\]/i.test(segB)) correctAnswer = 'B';
      else if (/\[U\]/i.test(segC)) correctAnswer = 'C';
      else if (/\[U\]/i.test(segD)) correctAnswer = 'D';
    } else {
      const uMatch = cleanBodyWithU.match(/\[U\]\s*([A-D])[\.\)]?/i);
      if (uMatch) {
        correctAnswer = uMatch[1].toUpperCase() as 'A' | 'B' | 'C' | 'D';
      }
    }

    return {
      id,
      section: 'PART_I',
      sectionTitle,
      questionText: stripU(qText || `Câu ${id}`),
      diagramType: detectedDiagram,
      imageUrl,
      options: choices,
      correctAnswer,
      explanation: stripU(explanation),
    };
  } else if (section === 'PART_II') {
    const statements: { key: 'a' | 'b' | 'c' | 'd'; text: string; correct: boolean }[] = [];

    const ansMap: Record<string, boolean> = {};
    const globalAnsMatch =
      bodyWithU.match(/(?:Đáp\s*án|ĐA)[\:\s]+([^\n\r]+)/i) ||
      explanation.match(/(?:Đáp\s*án|ĐA)[\:\s]+([^\n\r]+)/i);
    if (globalAnsMatch) {
      const ansStr = globalAnsMatch[1];
      const items = ansStr.split(/[,;\s]+/);
      items.forEach((item) => {
        const m = item.match(/([abcd])\s*[\:\-\=\)]?\s*(Đ|S|Đúng|Sai|true|false)/i);
        if (m) {
          const key = m[1].toLowerCase();
          const isTrue = /^(Đ|Đúng|true)$/i.test(m[2]);
          ansMap[key] = isTrue;
        }
      });
    }

    const cleanBodyWithU = bodyWithU.replace(/(?:^|\n)\s*(?:Đáp\s*án|ĐA)[\:\s]+[^\n\r]+/gi, '').trim();
    const cleanBodyPlain = stripUPreserveImages(cleanBodyWithU);

    const findStmtIndex = (text: string, key: string, minIdx: number): number => {
      const re = new RegExp(`(?:^|[\\n\\t]|\\s{1,})(?:\\[U\\]\\s*)?${key}(?:\\s*\\[\\/U\\])?[\\)\\.](?=\\s|\\$|\\[|$)`, 'gi');
      re.lastIndex = Math.max(0, minIdx);
      const m = re.exec(text);
      if (!m) return -1;
      const leadingWs = m[0].match(/^[\s\n\t]+/);
      return m.index + (leadingWs ? leadingWs[0].length : 0);
    };

    const aIdxP = findStmtIndex(cleanBodyPlain, 'a', 0);
    const bIdxP = aIdxP !== -1 ? findStmtIndex(cleanBodyPlain, 'b', aIdxP + 2) : -1;
    const cIdxP = bIdxP !== -1 ? findStmtIndex(cleanBodyPlain, 'c', bIdxP + 2) : -1;
    const dIdxP = cIdxP !== -1 ? findStmtIndex(cleanBodyPlain, 'd', cIdxP + 2) : -1;

    const aIdxU = findStmtIndex(cleanBodyWithU, 'a', 0);
    const bIdxU = aIdxU !== -1 ? findStmtIndex(cleanBodyWithU, 'b', aIdxU + 2) : -1;
    const cIdxU = bIdxU !== -1 ? findStmtIndex(cleanBodyWithU, 'c', bIdxU + 2) : -1;
    const dIdxU = cIdxU !== -1 ? findStmtIndex(cleanBodyWithU, 'd', cIdxU + 2) : -1;

    const qText = aIdxP > 0 ? cleanBodyPlain.slice(0, aIdxP).trim() : cleanBodyPlain;

    const rawSegmentsPlain: Record<'a' | 'b' | 'c' | 'd', string> = {
      a: aIdxP !== -1 && bIdxP !== -1 ? cleanBodyPlain.slice(aIdxP, bIdxP) : '',
      b: bIdxP !== -1 && cIdxP !== -1 ? cleanBodyPlain.slice(bIdxP, cIdxP) : '',
      c: cIdxP !== -1 && dIdxP !== -1 ? cleanBodyPlain.slice(cIdxP, dIdxP) : '',
      d: dIdxP !== -1 ? cleanBodyPlain.slice(dIdxP) : '',
    };

    const rawSegmentsU: Record<'a' | 'b' | 'c' | 'd', string> = {
      a: aIdxU !== -1 && bIdxU !== -1 ? cleanBodyWithU.slice(aIdxU, bIdxU) : '',
      b: bIdxU !== -1 && cIdxU !== -1 ? cleanBodyWithU.slice(bIdxU, cIdxU) : '',
      c: cIdxU !== -1 && dIdxU !== -1 ? cleanBodyWithU.slice(cIdxU, dIdxU) : '',
      d: dIdxU !== -1 ? cleanBodyWithU.slice(dIdxU) : '',
    };

    const keys: ('a' | 'b' | 'c' | 'd')[] = ['a', 'b', 'c', 'd'];
    keys.forEach((k) => {
      let stmtText = (rawSegmentsPlain[k] || '')
        .replace(new RegExp(`^${k}[\\)\\.]\\s*`, 'i'), '')
        .trim();

      let isCorrect = ansMap[k];
      if (isCorrect === undefined) {
        isCorrect = /\[U\]/i.test(rawSegmentsU[k] || '');
      }

      if (/(?:\[|\()\s*(?:Đúng|Đ|True)\s*(?:\]|\))$/i.test(stmtText)) {
        isCorrect = true;
        stmtText = stmtText.replace(/(?:\[|\()\s*(?:Đúng|Đ|True)\s*(?:\]|\))$/gi, '').trim();
      } else if (/(?:\[|\()\s*(?:Sai|S|False)\s*(?:\]|\))$/i.test(stmtText)) {
        isCorrect = false;
        stmtText = stmtText.replace(/(?:\[|\()\s*(?:Sai|S|False)\s*(?:\]|\))$/gi, '').trim();
      }

      statements.push({
        key: k,
        text: stripU(stmtText || `Mệnh đề ${k}`),
        correct: Boolean(isCorrect),
      });
    });

    return {
      id,
      section: 'PART_II',
      sectionTitle,
      questionText: stripU(qText || `Câu ${id - 12}`),
      diagramType: detectedDiagram,
      imageUrl,
      statements,
      explanation: stripU(explanation),
    };
  } else {
    // PART_III: Short answer
    let correctAnswer = '0';
    let qText = stripUPreserveImages(bodyWithU);

    const ansMatch =
      bodyWithU.match(/(?:Đáp\s*số|Đáp\s*án|KQ|Kết\s*quả)[\:\s]+([^\n\r]+)/i) ||
      explanation.match(/(?:Đáp\s*số|Đáp\s*án|KQ|Kết\s*quả)[\:\s]+([^\n\r]+)/i);
    if (ansMatch) {
      correctAnswer = stripU(ansMatch[1].trim());
      qText = qText.replace(/(?:Đáp\s*số|Đáp\s*án|KQ|Kết\s*quả)[\:\s]+[^\n\r]+/gi, '').trim();
    }

    return {
      id,
      section: 'PART_III',
      sectionTitle,
      questionText: stripU(qText || `Câu ${id - 16}`),
      diagramType: detectedDiagram,
      imageUrl,
      correctAnswer,
      explanation: stripU(explanation),
    };
  }
}

function stripUPreserveImages(text: string): string {
  if (!text) return '';
  return text.replace(/\[\/?U\]/gi, '');
}

const VBAR_REGEX_STR =
  '[\\|\\u00A6\\u01C0-\\u01C3\\u2016\\u2223\\u2225\\u23D0\\u23B8\\u23B9\\u2500-\\u257F\\u2580-\\u259F\\u2758-\\u275E\\uFE31-\\uFE34\\uFF5C\\uFFE8\\uFFED\\uFFEE]';

function stripU(text: string): string {
  if (!text) return text;

  // Protect any inline [Hình ảnh: ...] or [Hình công thức: ...] tags from text regexes
  const protectedImgs: string[] = [];
  let res = text.replace(
    /\[(?:Hình\s*ảnh|Hình\s*công\s*thức|Ảnh|Hình|Image)\s*:\s*([^\]]+)\]/gi,
    (match) => {
      const idx = protectedImgs.length;
      protectedImgs.push(match);
      return `___WORD_IMG_${idx}___`;
    }
  );

  res = res.replace(/\[\/?U\]/gi, '');

  // 1. Remove zero-width & invisible control characters
  res = res.replace(
    /[\uFEFF\u200B\u200C\u200D\u200E\u200F\u00AD\u0007\u000B\u000C\u0008\u0002\u0003\u0019\u001F\u001E\u2060\u180E]/g,
    ''
  );

  // 2. Remove private use area / MathType font artifacts
  res = res.replace(/[\uF000-\uF8FF\uE000-\uF8FF]/g, '');

  // 3. Remove all box-drawing and block vertical bars commonly left over by Word tables, cursors or MathType
  res = res.replace(
    /[\u2500-\u257F\u2580-\u259F\u2758-\u275E\uFFE8\u00A6\u01C0-\u01C3\u23D0\u23B8\u23B9\uFE31-\uFE34\uFF5C\uFFED\uFFEE]/g,
    ''
  );

  // 4. Remove HTML entities for vertical bar
  res = res.replace(/&(?:vert|#124|#x7C|#x2502|#9474|vbar|mid|parallel);/gi, ' ');

  // 5. Remove pipes adjacent to math delimiters
  res = res.replace(new RegExp(`\\${'{1,2}'}\\s*${VBAR_REGEX_STR}+`, 'g'), (m) =>
    m.replace(new RegExp(VBAR_REGEX_STR, 'g'), '').trim()
  );
  res = res.replace(new RegExp(`${VBAR_REGEX_STR}+\\s*\\${'{1,2}'}`, 'g'), (m) =>
    m.replace(new RegExp(VBAR_REGEX_STR, 'g'), '').trim()
  );

  // 6. Remove pipes after/before differential terms
  res = res.replace(new RegExp(`\\b(d[xyztuvw])\\s*(\\.*)\\s*${VBAR_REGEX_STR}+`, 'gi'), '$1$2');

  // 7. Remove pipes after/before punctuation
  res = res.replace(new RegExp(`([\\.?!;:,])\\s*${VBAR_REGEX_STR}+`, 'g'), '$1');
  res = res.replace(new RegExp(`${VBAR_REGEX_STR}+\\s*([\\.?!;:,])`, 'g'), '$1');
  res = res.replace(new RegExp(`([\\.?!;:,])\\s*${VBAR_REGEX_STR}+\\s*$`, 'g'), '$1');

  // 8. Remove pipes after closed parentheses, brackets, or braces
  res = res.replace(new RegExp(`([\\)\\]\\}])\\s*(\\.*)\\s*${VBAR_REGEX_STR}+`, 'g'), '$1$2');

  // 9. Remove pipes between Vietnamese words separated by spaces
  res = res.replace(
    new RegExp(`([a-zA-Zà-ỹÀ-Ỹ0-9]{2,})\\s+${VBAR_REGEX_STR}+\\s+([a-zA-Zà-ỹÀ-Ỹ0-9]{2,})`, 'g'),
    '$1 $2'
  );
  res = res.replace(new RegExp(`\\s+${VBAR_REGEX_STR}+\\s+`, 'g'), ' ');

  // 10. Strip trailing and leading pipes
  res = res.replace(new RegExp(`\\s*${VBAR_REGEX_STR}+\\s*$`, 'gm'), '');
  res = res.replace(new RegExp(`^\\s*${VBAR_REGEX_STR}+\\s*`, 'gm'), '');
  res = res.replace(new RegExp(`\\s*${VBAR_REGEX_STR}+\\s*$`, 'g'), '');
  res = res.replace(new RegExp(`^\\s*${VBAR_REGEX_STR}+\\s*`, 'g'), '');

  res = res
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\{<\}/g, ' < ')
    .replace(/\{>\}/g, ' > ');

  // Fix dropped 'đ'
  res = res.replace(
    /\b([Cc]ác|[Hh]ai|[Mm]ột|[Nn]hững|[Vv]ới|[Cc]ho|[Cc]ủa|[Bbi]ết|[Bb]ởi|[Vv]à)\s+([ưƯ]ờng)\b/g,
    '$1 đ$2'
  );
  res = res.replace(/\b([Tt]hu|[Nn]hận|[Tt]ìm|[Đđ]ạt|[Kk]hông)\s+([ưƯ]ợc)\b/g, '$1 đ$2');
  res = res.replace(/\b([Tt]rên)\s+([đĐ]ọan)\b/g, '$1 đoạn');
  res = res.replace(/\b([đĐ]ọan)\b/g, 'đoạn');
  res = res.replace(/\bham\s+s[oö]\b/gi, 'hàm số');
  res = res.replace(/\bcho\s+ham\s+s[oö]\b/gi, 'cho hàm số');

  // Fix and normalize vectors
  res = normalizeVectors(res);

  // Fix MathType OCR corruptions where \left| was stripped to \left f(x) \right]
  res = res.replace(
    /\\left\s*f\s*\\left\(\s*x\s*\\right\)\s*\\right(?:\]|\)|\}|\||\.)?/g,
    '\\left| f(x) \\right|'
  );
  res = cleanedFix(res);

  // Convert array piecewise to cases
  res = res.replace(
    /\\left\\{\s*\\begin\{array\}(?:\{[^{}]*\})?([\s\S]*?)\\end\{array\}\s*\\right\.?/g,
    '\\begin{cases}$1\\end{cases}'
  );

  // Fix integral limits
  res = res.replace(
    /\\int\s*\\limit_\{?([0-9a-zA-Z\-]+)\}?\^\{?([0-9a-zA-Z\-]+)\}?/g,
    '\\int_{$1}^{$2}'
  );
  res = res.replace(
    /\\int\s*\\limit\^\{?([0-9a-zA-Z\-]+)\}?_\{?([0-9a-zA-Z\-]+)\}?/g,
    '\\int_{$2}^{$1}'
  );
  res = res.replace(
    /\\int\s*\\limits_\{?([0-9a-zA-Z\-]+)\}?\^\{?([0-9a-zA-Z\-]+)\}?/g,
    '\\int_{$1}^{$2}'
  );
  res = res.replace(/\\limit_\{?([0-9a-zA-Z\-]+)\}?\^\{?([0-9a-zA-Z\-]+)\}?/g, '_{$1}^{$2}');
  res = res.replace(/\\limit_\{?([0-9a-zA-Z\-]+)\}?/g, '_{$1}');
  res = res.replace(/\\limit\^\{?([0-9a-zA-Z\-]+)\}?/g, '^{$1}');
  res = res.replace(/\\limit\b/g, '\\limits');

  // Strip again any trailing stray pipes or dots
  res = res.replace(/\\(mid|vert|vbar|parallel)\s*$/g, '');
  res = res.replace(/([\.?!;:,])\s*(\\mid|\\vert|\\vbar|\\parallel|\|)+\s*$/g, '$1');
  res = res.replace(new RegExp(`([\\.?!;:,])\\s*${VBAR_REGEX_STR}+`, 'g'), '$1');
  res = res.replace(new RegExp(`${VBAR_REGEX_STR}+\\s*([\\.?!;:,])`, 'g'), '$1');
  res = res.replace(new RegExp(`\\s*${VBAR_REGEX_STR}+\\s*$`, 'g'), '');
  res = res.replace(new RegExp(`^\\s*${VBAR_REGEX_STR}+\\s*`, 'g'), '');
  res = res.replace(new RegExp(`\\b(d[xyztuvw])\\s*(\\.*)\\s*${VBAR_REGEX_STR}+$`, 'gi'), '$1$2');

  // Restore protected inline images
  res = res.replace(/___WORD_IMG_(\d+)___/g, (_, idx) => protectedImgs[Number(idx)] || '');

  return res.trim();
}

function cleanedFix(str: string): string {
  return str
    .replace(/\\left\s*f\s*\(\s*x\s*\)\s*\\right(?:\]|\)|\}|\||\.)?/g, '\\left| f(x) \\right|')
    .replace(
      /\\left\s*([fguhyPQRST]\s*(?:\([^)]+\)|\\left\([^)]+\\right\)))\s*\\right(?:\]|\)|\}|\||\.)?/g,
      '\\left| $1 \\right|'
    )
    .replace(/\\left\s*f\b/g, '\\left| f');
}
