// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info: https://github.com/dotnet/Open-XML-SDK

using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;

using (SpreadsheetDocument doc = SpreadsheetDocument.Open(excelPath, false))
{
    string text = doc.WorkbookPart.Workbook.InnerText;
}