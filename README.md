<div align="center">

# 🛡️ सुरक्षा Square

### *India's First Community-Driven Cyber Incident Reporting & Real-Time Intelligence Platform*

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-2a5298?logo=githubpages)](https://github.com/prasharindustries)
[![License](https://img.shields.io/badge/License-MIT-16a34a.svg)](LICENSE)
[![Made in India](https://img.shields.io/badge/Made%20in-India-ff9933?logo=india)](https://www.india.gov.in)
[![Languages](https://img.shields.io/badge/Languages-English%20%7C%20हिंदी-dc2626.svg)](https://en.wikipedia.org/wiki/Languages_of_India)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-16a34a)]()

**सुरक्षित भारत, सशक्त नागरिक**  
*Secure India, Empowered Citizens*

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [The Problem](#-the-problem)
- [Solution](#-solution)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [How It Works](#-how-it-works)
- [Screenshots](#-screenshots)
- [Impact Metrics](#-impact-metrics)
- [Future Roadmap](#-future-roadmap)
- [Certifications Demonstrated](#-certifications-demonstrated)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 📖 Overview

**सुरक्षा Square** (Suraksha = Security, Square = Community Space) is a comprehensive cyber incident reporting and intelligence platform designed specifically for Indian citizens. It bridges the critical gap between cyber crime victims and actionable intelligence by providing **real-time, location-based scam alerts** before victims lose money.

Unlike traditional reporting portals that only log complaints after financial loss, सुरक्षा Square **prevents cyber crimes** by warning potential victims about active scams in their pincode area — in real-time.

| | |
|---|---|
| **🌐 Website** | [https://prasharindustries.github.io/suraksha-square](https://prasharindustries.github.io/suraksha-square) |
| **📧 Contact** | security@surakshasquare.in |
| **🏢 Author** | Prashar Industries |

---

## 🎯 The Problem

### Cyber Crime in India — The Hard Truth

| Metric | Number | Source |
|--------|--------|--------|
| Annual cyber crime loss | ₹10,000+ Crore | NCRB 2024 |
| Daily scam calls received | 50+ Million | TRAI |
| SIM swap frauds (2024) | 2.5+ Lakh cases | DoT |
| UPI fraud transactions | 1.2+ Lakh/day | NPCI |
| Citizens without internet | 40%+ | IAMAI |
| Cyber cells per district | <1 (mostly 0) | MHA |

### Why Current Solutions Fail

| Issue | Current State | Our Solution |
|-------|---------------|--------------|
| **Reporting lag** | Victims report AFTER losing money | Real-time alerts BEFORE victimization |
| **Geographic blindness** | No local threat intelligence | Pincode-based scam tracking |
| **Language barrier** | English-only interfaces | English + Hindi (more coming) |
| **Evidence preservation** | Manual screenshots | Structured digital reporting + PDF export |
| **Police handoff** | No standardized format | One-click police-ready PDF report |
| **Accessibility** | Requires app installation | Web-based, works on any device |

---

## 💡 Solution

**सुरक्षा Square** solves these problems through a multi-layered approach:

### 1. 📝 Real-Time Incident Reporting
Citizens report suspicious calls, phishing links, UPI frauds, or SIM swap attempts in under 60 seconds — anonymously if they choose.

### 2. 🗺️ Geospatial Threat Intelligence
Every report is tagged with a pincode. The platform aggregates reports to show:
- Active scam types in your area
- Number and frequency of recent incidents
- Geographic hotspots via interactive map

### 3. 🌐 Bilingual Accessibility
Complete interface available in:
- 🇬🇧 English (default)
- 🇮🇳 Hindi (हिंदी) — reaching 500M+ speakers

### 4. 👥 Community Self-Defense
When you report a scam, you're not just helping yourself — you're warning every person in your pincode within seconds.

### 5. 📄 Police-Ready Evidence
One-click PDF export generates a standardized, professional report that can be submitted directly to:
- National Cyber Crime Reporting Portal
- Local police station
- Bank's fraud investigation team

---

## 🌐 Live Demo

**Access the live platform:**
https://prasharindustries.github.io/suraksha-square/


### Test These Searches

| Search Term | Expected Result |
|-------------|-----------------|
| `Phagwara, Punjab` | Zooms to Phagwara region |
| `Connaught Place, Delhi` | Central Delhi location |
| `144401` | Phagwara pincode area |
| `Mumbai` | Mumbai city |

---

## ✨ Key Features

### 🗺️ Interactive Scam Map
- Built with Leaflet.js and OpenStreetMap
- Color-coded markers (red = scam calls, orange = phishing, yellow = UPI fraud, blue = SIM swap)
- Marker clustering for high-density areas
- Click any marker to see full incident details
- Legend shows incident type classification

### 🔍 Search Any Place in India
- Search by city, town, village, district, or pincode
- Autocomplete suggestions as you type
- One-click popular location shortcuts
- "My Location" button (GPS-based)

### 📝 Incident Reporting Form
- Structured fields for all incident types
- Anonymous reporting option
- Client-side validation
- LocalStorage persistence (no backend required)

### 📊 Live Statistics Dashboard
- Total reports submitted
- Reports submitted today
- Active alerts in your area (last 7 days)

### 📚 Cyber Awareness Center
- Scam call identification guide
- Phishing link detection tutorial
- SIM swap protection checklist
- UPI fraud prevention tips
- Interactive quiz to test knowledge

### 📄 Police Report Export
- One-click PDF generation
- Professional, police-ready format
- Includes incident details, suspect info, action checklist
- Signature lines for police and victim
- Unique Report ID for tracking

### 🆘 Emergency Resources
- Direct helpline numbers: 1930, 112, 1098, 181
- Links to official portals (Cyber Crime Portal, CERT-In, TRAI, RBI)

### 🌐 Bilingual Interface
- Toggle between English and Hindi
- All UI text, form labels, and awareness content translated
- Language preference saved locally

### 📱 Mobile Responsive
- Works on all screen sizes
- Hamburger menu for mobile navigation
- Touch-friendly buttons and form inputs

---

## 🛠️ Technology Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and semantic markup |
| CSS3 | Styling, animations, responsive design |
| JavaScript (ES6+) | Core logic, DOM manipulation, API integration |
| Leaflet.js | Interactive mapping |
| OpenStreetMap | Map tiles (free, no API key) |
| Leaflet.markercluster | Marker clustering for performance |

### APIs & Services
| Service | Purpose | Cost |
|---------|---------|------|
| Nominatim (OpenStreetMap) | Geocoding (place name → coordinates) | Free |
| html2pdf.js | PDF generation | Free |

### Storage
| Method | Purpose |
|--------|---------|
| localStorage | Report storage, user preferences, pincode cache |

### Hosting
| Platform | Purpose | Cost |
|----------|---------|------|
| GitHub Pages | Static site hosting | Free |

---

## 📁 Project Structure
suraksha-square/
│
├── index.html # Homepage with stats and hero section
├── report.html # Incident reporting form
├── tracker.html # Interactive map + incident list + PDF export
├── awareness.html # Cyber safety guides + interactive quiz
├── resources.html # Helplines and official links
├── style.css # Complete styling (responsive, mobile-first)
├── script.js # Core logic (reports, localStorage, stats)
├── i18n.js # Internationalization (English + Hindi)
└── README.md # This file


### File Descriptions

| File | Lines | Primary Functions |
|------|-------|-------------------|
| `index.html` | ~150 | Hero section, stats dashboard, recent alerts |
| `report.html` | ~120 | Incident submission, validation, localStorage |
| `tracker.html` | ~600 | Map initialization, geocoding, PDF export |
| `awareness.html` | ~180 | Educational content, interactive quiz |
| `resources.html` | ~100 | Emergency contacts, external links |
| `style.css` | ~600 | All visual styling, responsive breakpoints |
| `script.js` | ~400 | Data management, DOM manipulation |
| `i18n.js` | ~500 | Complete English/Hindi translations |

**Total:** ~2,500+ lines of production-ready code

---

## 🔧 Installation

### Deploy to GitHub Pages

```bash
# Clone the repository
git clone https://github.com/prasharindustries/suraksha-square.git
cd suraksha-square

# Push to GitHub
git add .
git commit -m "Initial commit: सुरक्षा Square"
git push origin main


