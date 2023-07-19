using iTextSharp.text.pdf;
using iTextSharp.text.pdf.parser;

// https://github.com/itext/itextsharp

PdfReader reader = new PdfReader(pdfPath);
string text = PdfTextExtractor.GetTextFromPage(reader, 1);