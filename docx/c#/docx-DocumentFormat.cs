using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// https://github.com/dotnet/Open-XML-SDK

using (WordprocessingDocument doc = WordprocessingDocument.Open(wordPath, false))
{
    string text = doc.MainDocumentPart.Document.Body.InnerText;
}