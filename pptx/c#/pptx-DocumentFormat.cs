using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Presentation;

// https://github.com/dotnet/Open-XML-SDK

using (PresentationDocument doc = PresentationDocument.Open(pptPath, false))
{
    string text = doc.PresentationPart.Presentation.InnerText;
}