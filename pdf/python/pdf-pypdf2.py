# Code Status : Unverififed
# Code Generation: AI generated
# Code Source: Claudia.io
# Code Project Info: 
# https://pypi.org/project/PyPDF2/

import PyPDF2


pdfFileObj = open('sample.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

text = ""

for pageNum in range(pdfReader.numPages):
    pageObj = pdfReader.getPage(pageNum)
    text += pageObj.extractText()

pdfFileObj.close()