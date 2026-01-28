# Gate Vehicle Logging System

A cloud-based vehicle entry logging system that replaces manual gate notebooks with real-time digital records using Google Apps Script and Google Sheets.

## 🚨 Problem

Security guards in residential estates typically log vehicle entries manually, leading to data loss, inconsistent records, and slow reporting. This project digitizes that workflow and moves all storage to the cloud.

## 🎯 Features

- Custom HTML frontend form
- Real-time backend logging via Google Apps Script
- Automatic timestamping
- Image capture and storage
- Structured Google Sheets database
- Zero server infrastructure

## 🏗️ Tech Stack

- Google Apps Script (JavaScript)
- HTML / CSS
- Google Sheets
- Google Drive (for image storage)

## 📊 Data Schema

| Column | Field |
|--------|-------|
| A | Car Brand |
| B | Color |
| C | Time In (Auto) |
| D | Date |
| E | Plate Number |
| F | Image Link |

## 🔄 Workflow

1. Guard fills digital form at gate
2. Data submits to Apps Script endpoint
3. Script processes and logs entry to Google Sheets
4. Timestamp and image link stored automatically

## 🌍 Real-World Use

Deployed for security operations at residential estates in Lekki, Lagos, Nigeria, replacing manual bookkeeping entirely.

## 👨🏾‍💻 Author

**Mahus Ekene Enoch (Ziga)**  
Automation Engineer / Embedded Systems Developer  
https://zigarex.github.io/ZigaRex-Start-point/
