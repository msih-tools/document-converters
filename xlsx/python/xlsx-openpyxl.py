import openpyxl
# https://pypi.org/project/openpyxl/
# https://openpyxl.readthedocs.io/en/stable/


wb = openpyxl.load_workbook('sample.xlsx')
sheet = wb.active

text = ""
for row in sheet.rows:
    for cell in row:
        text += cell.value