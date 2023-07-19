# Code Status : Unverififed
# Code Generation: AI generated
# Code Source: Claudia.io
# Code Project Info: 
# https://pypi.org/project/openpyxl/
# https://openpyxl.readthedocs.io/en/stable/

import openpyxl


wb = openpyxl.load_workbook('sample.xlsx')
sheet = wb.active

text = ""
for row in sheet.rows:
    for cell in row:
        text += cell.value