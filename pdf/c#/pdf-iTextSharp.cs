// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info: https://github.com/itext/itextsharp

using iTextSharp.text.pdf;
using iTextSharp.text.pdf.parser;


PdfReader reader = new PdfReader(pdfPath);
string text = PdfTextExtractor.GetTextFromPage(reader, 1);