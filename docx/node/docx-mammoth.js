const mammoth = require("mammoth");
// https://www.npmjs.com/package/mammoth?activeTab=dependents
// https://github.com/mwilliamson/mammoth.js

mammoth.extractRawText({path: "sample.docx"})
  .then(function(result){
    const text = result.value; // The raw text
  })