import streamlit as st
import numpy as np
import pickle
import base64
import os

# --- Page config ---
st.set_page_config(page_title="Smart Crop Recommender", layout="centered")

# --- Background Image Loader ---
# --- Background Image Loader ---
def get_base64_image(image_path):
    with open(image_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode()

# --- Load and Apply Background Image ---
try:
    bg_image_path = os.path.join(os.path.dirname(__file__), "static", "background.jpg")
    bg_base64 = get_base64_image(bg_image_path)

    st.markdown(
        f"""
        <style>
        .stApp {{
            background-image: url("data:image/jpg;base64,{bg_base64}");
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }}
        .block-container {{
            background-color: rgba(0, 0, 0, 0);
            padding: 2rem;
        }}
        h1, h2, h3, label {{
            color: white !important;
            text-shadow: 2px 2px 4px #000000;
        }}
        </style>
        """,
        unsafe_allow_html=True
    )
except Exception as e:
    st.warning(f"⚠️ Could not load background image: {e}")

# --- Load Model Safely ---
try:
    model_path = os.path.join(os.path.dirname(__file__), "RF.pkl")
    with open(model_path, "rb") as f:
        model = pickle.load(f)
except FileNotFoundError:
    st.error("❌ RF.pkl model file not found! Make sure it's in the same directory as app.py.")
    st.stop()

# --- Header ---
st.markdown("""
<h1 style='text-align: center; white-space: nowrap; color: white; text-shadow: 2px 2px 4px #000; font-size: 2.5rem;'>
🌾 Smart Crop Recommendation System
</h1>
""", unsafe_allow_html=True)

# --- Input Fields ---
st.markdown("### 🌱 Enter Soil and Climate Parameters")

col1, col2 = st.columns(2)

with col1:
    nitrogen = st.number_input("🧪 Nitrogen", 0.0, 150.0, 0.0, 0.1)
    potassium = st.number_input("🧪 Potassium", 0.0, 200.0, 0.0, 0.1)
    humidity = st.number_input("💧 Humidity (%)", 0.0, 100.0, 0.0, 0.1)
    rainfall = st.number_input("🌧️ Rainfall (mm)", 0.0, 300.0, 0.0, 0.1)

with col2:
    phosphorus = st.number_input("🧪 Phosphorus", 0.0, 150.0, 0.0, 0.1)
    temperature = st.number_input("🌡️ Temperature (°C)", 0.0, 50.0, 0.0, 0.1)
    ph = st.number_input("⚗️ pH Level", 0.0, 14.0, 0.0, 0.1)

# --- Prediction ---
if st.button("🚀 Predict Crop"):
    features = np.array([[nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall]])
    prediction = model.predict(features)
    st.success(f"✅ Recommended Crop: **{prediction[0].capitalize()}**")
