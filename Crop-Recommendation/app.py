import streamlit as st
import numpy as np
import pickle
import base64

# --- Page config ---
st.set_page_config(page_title="Smart Crop Recommender", layout="centered")

# --- Background Image Loader ---
def get_base64_image(image_path):
    with open(image_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode()

# --- Apply Background Style ---
try:
    bg_img = get_base64_image("background.jpg")
    st.markdown(
        f"""
        <style>
        .stApp {{
            background-image: url("data:image/jpg;base64,{bg_img}");                
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }}

         /* Remove white block container */
        .block-container {{
            background-color: rgba(0, 0, 0, 0); /* fully transparent */
            padding: 2rem;
        }}

        /* Improve heading visibility */
        h1, h2, h3 {{
            color: white !important;
            text-shadow: 2px 2px 4px #000000;
        }}

        label {{
            color: white !important;
        }}
        </style>
        """,
        unsafe_allow_html=True
    )

except:
    st.warning("⚠️ `background.jpg` not found. Add it for background image.")

# --- Load Model ---
model = pickle.load(open("RF.pkl", "rb"))

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
