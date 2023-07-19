import PyPDF2
# https://pypi.org/project/PyPDF2/

pdfFileObj = open('sample.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

text = ""

for pageNum in range(pdfReader.numPages):
    pageObj = pdfReader.getPage(pageNum)
    text += pageObj.extractText()

pdfFileObj.close()