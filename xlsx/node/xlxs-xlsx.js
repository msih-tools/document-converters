const xlsx = require('xlsx');
// https://www.npmjs.com/package/xlsx

const workbook = xlsx.readFile('sample.xlsx');

let text = '';

workbook.SheetNames.forEach(function(sheetName) {
  const sheet = workbook.Sheets[sheetName];
  
  for (let cell in sheet) {
    if (sheet[cell].t == 's') {
      text += sheet[cell].v;
    }
  }
})