# Code Status : Unverififed
# Code Generation: AI generated
# Code Source: Claudia.io
# Code Project Info: 
# http://github.com/scanny/python-pptx


from pptx import Presentation


prs = Presentation('sample.pptx')

text = ""
for slide in prs.slides:
    for shape in slide.shapes:
        if not shape.has_text_frame:
            continue
        for paragraph in shape.text_frame.paragraphs:
            text += paragraph.text