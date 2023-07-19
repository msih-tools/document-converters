// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info: https://github.com/dotnet/Open-XML-SDK

using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;


using (WordprocessingDocument doc = WordprocessingDocument.Open(wordPath, false))
{
    string text = doc.MainDocumentPart.Document.Body.InnerText;
}