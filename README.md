# 🥗 Calorie Inspector & Nutrition Search

A modern, responsive web application built with Vanilla JavaScript to help users compute their daily energy needs (BMR & TDEE) and search for detailed food nutritional data.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/javascript-ES6%2B-yellow.svg)
![CSS3](https://img.shields.io/badge/css3-modern-blue.svg)

---

## 📌 Features

- **Daily Energy Calculator**: Calculates Basal Metabolic Rate (**BMR**) using the *Mifflin-St Jeor Equation* and Total Daily Energy Expenditure (**TDEE**) based on weekly activity levels.
- **Nutrition API Search**: Seamless integration with external nutrition APIs to retrieve instant nutritional information per food item.
- **Responsive UI**: Glassmorphism aesthetic crafted with custom modern CSS, fully adaptable to desktop and mobile displays.
- **Interactive Navigation**: Clean tabbed layout for switching between calculation and search modules without page reloads.

---

## 🧮 Math & Logic Behind Calculations

The calculator uses the standardized **Mifflin-St Jeor** formula:

### 1. Basal Metabolic Rate (BMR)
- **Men:** $BMR = (10 \times \text{weight in kg}) + (6.25 \times \text{height in cm}) - (5 \times \text{age}) + 5$
- **Women:** $BMR = (10 \times \text{weight in kg}) + (6.25 \times \text{height in cm}) - (5 \times \text{age}) - 161$

### 2. Total Daily Energy Expenditure (TDEE)
Multiply $BMR$ by the corresponding activity multiplier:
- **Sedentary / Light:** $1.2$
- **Mild Activity (1–3 days/week):** $1.375$
- **Moderate Activity (3–5 days/week):** $1.55$
- **Heavy Activity (6–7 days/week):** $1.725$

---

## 🛠️ Tech Stack

* **HTML5**: Semantic document structure and input validation.
* **CSS3**: Custom variables, Grid/Flexbox layouts, Glassmorphism backdrop filters.
* **JavaScript (ES6+)**: DOM manipulation, asynchronous `fetch` calls, and event listeners.

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/calorie-inspector.git](https://github.com/YOUR_USERNAME/calorie-inspector.git)
