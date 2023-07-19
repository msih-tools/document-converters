# Code Status : Unverififed
# Code Generation: AI generated
# Code Source: Claudia.io
# Code Project Info: 
# https://github.com/python-openxml/python-docx
# https://python-docx.readthedocs.io/en/latest/

import docx

doc = docx.Document('sample.docx')
text = []

for para in doc.paragraphs:
    text.append(para.text)
    
text = '\n'.join(text)