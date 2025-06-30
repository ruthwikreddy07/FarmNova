import streamlit as st
import base64
from predictor import predict_fertilizer  # from predictor.py

# --- Page Config ---
st.set_page_config(page_title="Fertilizer Recommender", page_icon="🌿", layout="centered")

# --- Load background image ---
def get_base64_image(image_path):
    with open(image_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode()

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
        </style>
        """,
        unsafe_allow_html=True
    )
except FileNotFoundError:
    st.warning("`background.jpg` not found. Background image will not appear.")
    st.markdown(
        """
        <style>
        .stApp {
            background-color: #f0f2f6;
        }
        </style>
        """,
        unsafe_allow_html=True
    )

# --- Heading ---
st.markdown("""
    <h1 style='text-align: center; color: #ffffff; font-size: 3rem; margin-top: 30px; text-shadow: 2px 2px 4px #000000;'>
        🌾 Fertilizer Recommendation System
    </h1>
""", unsafe_allow_html=True)

# --- Input Fields ---
features = {}
features["Temperature"] = st.number_input("🌡️ Temperature (°C)", 0.0, 100.0, step=0.1)
features["Humidity"] = st.number_input("💧 Humidity (%)", 0.0, 100.0, step=0.1)
features["Moisture"] = st.number_input("🌫️ Moisture (%)", 0.0, 100.0, step=0.1)

soil_types = ["Sandy", "Loamy", "Black", "Red", "Clayey"]
crop_types = ["Sugarcane", "Wheat", "Cotton", "Tobacco", "Paddy", "Barley", "Ground Nuts", "Maize"]

features["Soil Type"] = st.selectbox("🧱 Soil Type", soil_types)
features["Crop Type"] = st.selectbox("🌱 Crop Type", crop_types)

features["Nitrogen"] = st.number_input("🧪 Nitrogen", 0.0, 140.0, step=0.1)
features["Phosphorus"] = st.number_input("🧪 Phosphorus", 0.0, 100.0, step=0.1)
features["Potassium"] = st.number_input("🧪 Potassium", 0.0, 150.0, step=0.1)

# --- Prediction ---
if st.button("🚀 Predict Fertilizer"):
    encoded_features = features.copy()
    encoded_features["Soil Type"] = features["Soil Type"]
    encoded_features["Crop Type"] = features["Crop Type"]

    fertilizer, tip = predict_fertilizer(encoded_features)
    st.success(f"✅ Recommended Fertilizer: **{fertilizer}**")
    st.markdown(f"💡 **Usage Tip**: {tip}")

