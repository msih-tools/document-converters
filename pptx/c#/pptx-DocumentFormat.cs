// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info: https://github.com/dotnet/Open-XML-SDK

using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Presentation;


using (PresentationDocument doc = PresentationDocument.Open(pptPath, false))
{
    string text = doc.PresentationPart.Presentation.InnerText;
}