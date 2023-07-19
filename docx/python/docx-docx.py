import docx

# https://github.com/python-openxml/python-docx

doc = docx.Document('sample.docx')
text = []

for para in doc.paragraphs:
    text.append(para.text)
    
text = '\n'.join(text)