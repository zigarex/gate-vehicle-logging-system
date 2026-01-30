function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}
function logPlateToSheet(plate, brand, colour, imageBase64) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("Gate_Vehicle_Log");
  const timeIn = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "HH:mm:ss"
  );
  const date = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "yyyy-MM-dd"
  );
  let imageLink = "";
  if (imageBase64) {
    const blob = Utilities.newBlob(
      Utilities.base64Decode(imageBase64.split(",")[1]),
      "image/png",
      "vehicle.png"
    );
    const file = DriveApp.createFile(blob);
    imageLink = file.getUrl();
  }
  sheet.appendRow([plate, brand, colour, timeIn, date, imageLink]);
  return "✅ Vehicle logged successfully";
}
