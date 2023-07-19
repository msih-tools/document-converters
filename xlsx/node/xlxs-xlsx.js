// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info:
// https://www.npmjs.com/package/xlsx


const xlsx = require('xlsx');

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