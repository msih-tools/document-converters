from pptx import Presentation

# http://github.com/scanny/python-pptx

prs = Presentation('sample.pptx')

text = ""
for slide in prs.slides:
    for shape in slide.shapes:
        if not shape.has_text_frame:
            continue
        for paragraph in shape.text_frame.paragraphs:
            text += paragraph.text