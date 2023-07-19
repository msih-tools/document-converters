// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info: 
// https://www.npmjs.com/package/mammoth?activeTab=dependents
// https://github.com/mwilliamson/mammoth.js

const mammoth = require("mammoth");


mammoth.extractRawText({path: "sample.docx"})
  .then(function(result){
    const text = result.value; // The raw text
  })