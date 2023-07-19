

using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;

// https://github.com/dotnet/Open-XML-SDK

using (SpreadsheetDocument doc = SpreadsheetDocument.Open(excelPath, false))
{
    string text = doc.WorkbookPart.Workbook.InnerText;
}