// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info:


const pdfParse = require('pdf-parse');

let text = '';

pdfParse.pdf2json('sample.pdf').then(function(data) {

  // Loop through each item to extract text
  data.items.forEach(function(item) {
    if (item.type === 'text') {
      text += item.str;
    }
  });

});