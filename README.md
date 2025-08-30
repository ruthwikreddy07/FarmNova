# 🌾 FarmNova – Smart Farming Assistant

FarmNova is an AI-powered smart farming platform designed to assist farmers with crop recommendation, fertilizer suggestions, plant disease identification, weather forecasting, and crop cultivation guidance – all from one place.
LINK - https://farmnova.netlify.app/
---

## 🚀 Features

- 🌱 **Crop Recommendation**: Suggests the most suitable crop based on soil nutrients, temperature, humidity, and more.
- 🌾 **Fertilizer Recommendation**: Recommends the right fertilizer based on crop and soil analysis.
- 🦠 **Plant Disease Detection**: Identifies leaf diseases using deep learning on uploaded leaf images.
- ☀️ **Weather Forecast**: Provides weather updates to assist in planning agricultural activities.
- 📘 **Farmer Guide**: Detailed crop cultivation practices for various crops.
- 🖥️ **Responsive Frontend**: Built with HTML, CSS, and JavaScript for a smooth user experience.

---

## 🧠 Tech Stack

### 🖥️ Frontend
- HTML, CSS, JavaScript (UI Design)
- Streamlit (ML tool interface)
- **Deployment**: Netlify

### ⚙️ Backend & ML
- **Crop & Fertilizer**: scikit-learn, XGBoost
- **Disease Detection**: TensorFlow + Keras (MobileNetV2)
- OpenCV, PIL, Pandas, NumPy
- **Model Formats**: `.pkl` (ML), `.h5` (DL)

### 🌐 APIs
- OpenWeatherMap (Live weather data)
- `gdown` for Google Drive model loading

### 🚀 Deployment
- **Frontend**: Netlify
- **ML Tools**: Streamlit Cloud

---
## 📁 Project Structure

```
FarmNova/
│
├── Crop-Recommendation/
│ ├── static/
│ |  └──background.jpg
│ ├── app.py
│ ├── RF.pkl
│ ├── Crop_recommendation.csv
│ ├── train_model.py
│ └── requirements.txt
│
├── Fertilizer-recommendation/
│ ├── static/
│ |  └──background.jpg
│ ├── .gitignore
│ ├── data_loader.csv
│ ├── app.py
│ ├── model.pkl
│ ├── data_core.csv
│ ├── analyze_data.py
│ ├── model.py
│ ├── predictor.py
│ └── requirements.txt
│
├── Plant-Disease-identification/
│ ├── dataset
│ ├── app.py
│ ├── bg.jpg
│ ├── download_weights.py
│ ├── plant_disease_model.h5 / .keras
│ ├── mobilenet_v2_weights.h5
│ ├── predict.py
│ ├── train_model.py
│ ├── runtime.txt
│ └── requirements.txt
│
├── Weather-forecast/
│ ├── images
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── Farmer-guide/
│ ├── rice.jpg
│ ├── index.html
│ ├── styles.css
│ └── script.js
│
├── FarmNova-homepage/
│ ├── index.html
│ ├── CSS/
│ |  └── style.css
│ ├── images/
│ └── js/
│    └── main.js
│
└── README.md 
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js & npm (for frontend)
- Python 3.x & pip (for backend)
- [Optional] Virtual environment for Python

### Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/ruthwikreddy07/FarmNova.git
   cd FarmNova
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

4. **Configure Environment Variables:**
   - Copy `.env.example` to `.env` and add your keys/configs.

5. **Run the Backend Server:**
   ```bash
   python app.py
   ```

6. **Run the Frontend (if using local dev server):**
   ```bash
   npm start
   ```

---


