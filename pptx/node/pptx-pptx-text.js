const pptxText = require('pptx-text');

pptxText('sample.pptx')
  .then(text => {
    // text contains extracted text
  })