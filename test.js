function createWebsite() {
    // Create HTML template for the website
    var htmlTemplate = HtmlService.createTemplateFromFile('index');
    var htmlOutput = htmlTemplate.evaluate();
    htmlOutput.setTitle('My Cool Website');
    return htmlOutput;
  }
  
  function doGet() {
    return createWebsite();
  }
  
  function getSheetsData() {
    // Get data from Google Sheets
    var spreadsheet = SpreadsheetApp.openById('1xbhN6mwqfPJZyRKr3VbA_kl6x2_3TOjXam_D1Z1Jg_g');
    var sheets = spreadsheet.getSheets();
    var data = [];
    
    // Iterate through each sheet and retrieve data
    sheets.forEach(function(sheet) {
      var sheetData = {
        title: sheet.getName(),
        values: sheet.getDataRange().getValues()
      };
      data.push(sheetData);
    });
    
    return data;
  }
  