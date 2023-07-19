// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info:
// https://www.npmjs.com/package/pdfjs
// https://mozilla.github.io/pdf.js/

// Load PDF file
let pdfDoc = await pdfjs.getDocument(pdfFile);

let text = '';
// Loop through pages
for(let i = 0; i < pdfDoc.numPages; i++) {
  let page = await pdfDoc.getPage(i+1);
  let content = await page.getTextContent();
  // Extract text content
  text += content.items.map(item => item.str).join('');
}