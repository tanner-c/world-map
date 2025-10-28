# 🌍 Interactive World Map – Angular & REST API Integration

## [Live Demo](https://tanner-c.github.io/world-map/)

## Overview

This project is an **interactive world map web application** built with **Angular** that dynamically displays detailed information for every country using the **World Bank API**. When a user hovers or clicks on a country in the **SVG-based world map**, the app retrieves and displays live data such as capital, region, and income level in real time.

Developed as part of a software engineering project for school, this application demonstrates front-end development proficiency, REST API integration, and interactive UI design using modern JavaScript frameworks.

---

## 🎯 Core Competencies Demonstrated

* **TypeScript** – Built and enhanced web functionality using Angular and TypeScript.
* **Framework Utilization** – Implemented Angular framework, components, and routing to structure the app.
* **API Integration** – Connected the application to the World Bank API to fetch live country data dynamically.

---

## ⚙️ Features

* **Interactive SVG Map** – Highlights countries via mouse events (hover or click).
* **API-Driven Data Display** – Fetches and displays country data
* **Angular Routing** – Automatically redirects from the default route to `/map`.
* **Responsive Layout** – Two-column interface: the left panel displays the map; the right panel shows country details.

---

## 🧠 How It Works

1. The SVG map is converted into an **Angular component**.
2. Mouse events trigger a **country code lookup**.
3. The component calls the **API service** using Angular’s `HttpClient`.
4. Data from the **World Bank API** is displayed dynamically in the right-hand column.

---

## 🧪 API Service Methods

* `country-service.ts`: `getCountryDetails(countryCode: string)` – Fetches country details using the World Bank REST API.
* `map.ts`:`onCountryClick(event)` – Handles map events and updates the view with selected country info.

---

## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed
* Angular CLI installed globally

### Installation

```bash
git clone <repository-url>
cd interactive-world-map
npm install
ng serve
```

---

## 💼 Professional Notes

This project demonstrates front-end engineering skills aligned with **industry expectations for JavaScript and Angular developers**. It highlights:

* API-driven application design
* Event-based interactivity
* Component-driven architecture
