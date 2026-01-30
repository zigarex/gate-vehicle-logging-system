# Gate Vehicle Logging System — Code Walkthrough

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
<p id="status"></p>
