// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info:
// https://www.npmjs.com/package/xlsx
// https://github.com/SheetJS/sheetjs

let xlsx = require('xlsx');

let workbook = xlsx.readFile(excelFile);

let text = '';
workbook.SheetNames.forEach(sheet => {
  let rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
  rows.forEach(row => {
    Object.values(row).forEach(value => {
      text += value; 
    });
  });
});