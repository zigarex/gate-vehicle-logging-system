
## Frontend Walkthrough

This document explains what each part of the system code does and why it exists.

---

## 🧩 FRONTEND — `frontend/index.html`

### Purpose
Provides a simple web form for security guards to:
- Enter plate number
- Enter car brand and color
- Upload vehicle image
- Submit data to backend

---

### 1️⃣ HTML Structure

```html
<h2>Gate Vehicle Capture</h2>
<input type="text" id="plate">
<input type="text" id="brand">
<input type="text" id="colour">
<input type="file" id="photo">
<button onclick="submitForm()">Capture & Log</button>
<p id="status"></p>.


## 🧩 Backend Walkthrough
Features
Log vehicle plate number, brand, color, and time/date of entry.
Optional image capture and storage in Google Drive.
Automatically generates a link to uploaded vehicle images.
Clean, timestamped records in a Google Sheet.

submitForm() Function

function submitForm() {
✅ Triggered when user clicks Capture & Log

const plate = document.getElementById("plate").value;
const brand = document.getElementById("brand").value;
const colour = document.getElementById("colour").value;
const file = document.getElementById("photo").files[0];
✅ Reads values from input fields.

if (!plate || !brand || !colour) {
  alert("Please fill all fields");
  return;
}
✅ Prevents empty submissions.

if (!file) {
  google.script.run
    .withSuccessHandler(showResult)
    .logPlateToSheet(plate, brand, colour, null);
  return;
}
✅ If no image is uploaded, data is sent without image.


const reader = new FileReader();
reader.onload = function () {
  google.script.run
    .withSuccessHandler(showResult)
    .logPlateToSheet(plate, brand, colour, reader.result);
};
reader.readAsDataURL(file);
✅ Converts image to Base64 and sends it to backend.

showResult() Function

function showResult(msg) {
  document.getElementById("status").innerText = msg;
  document.getElementById("plate").value = "";
  document.getElementById("brand").value = "";
  document.getElementById("colour").value = "";
  document.getElementById("photo").value = "";
}
✅ Displays backend response and resets form.
🧠 BACKEND — backend/Code.gs
Purpose
Receives frontend data, stores it in Google Sheets, saves images to Drive, and returns confirmation.

doGet()
function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}
✅ Serves the frontend HTML file as a web app.
logPlateToSheet(...)

function logPlateToSheet(plate, brand, colour, imageBase64) {
✅ Entry point from frontend.

const sheet = SpreadsheetApp.getActiveSpreadsheet()
  .getSheetByName("Gate_Vehicle_Log");
✅ Selects target Google Sheet.

const timeIn = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "HH:mm:ss");
const date = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd");
✅ Generates automatic timestamp.

let imageLink = "";
✅ Prepares storage for image URL.

if (imageBase64) {
  const blob = Utilities.newBlob(
    Utilities.base64Decode(imageBase64.split(",")[1]),
    "image/png",
    "vehicle.png"
  );
  const file = DriveApp.createFile(blob);
  imageLink = file.getUrl();
}
✅ Decodes Base64 image, saves to Drive, stores URL.

sheet.appendRow([plate, brand, colour, timeIn, date, imageLink]);
✅ Writes entry into spreadsheet.

return "✅ Vehicle logged successfully";
✅ Sends success message back to frontend.
