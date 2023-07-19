// Code Status : Unverififed
// Code Generation: AI generated
// Code Source: Claudia.io
// Code Project Info: 
// https://github.com/meshesha/PPTXjs

let presentation = await pptxjs.load(pptFile);

let text = '';
presentation.slides.forEach(slide => {
  slide.shapes.forEach(shape => {
    if(shape.text){
      text += shape.text.value; 
    }
  });
});