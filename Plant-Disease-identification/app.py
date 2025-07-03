import streamlit as st
import numpy as np
from keras.models import load_model
from keras.preprocessing import image
import os
import base64
from pathlib import Path

# --- Page Config ---
st.set_page_config(page_title="Plant Disease Identifier", layout="centered")

# --- Load background image from static/background.jpg ---

# --- Load the model ---
model = load_model("plant_disease_model.keras")

# --- Disease Info ---
disease_info = {
    "Tomato_Late_blight": {
        "description": "A serious tomato disease caused by *Phytophthora infestans*, leading to large, dark, water-soaked lesions.",
        "link": "https://www.apsnet.org/edcenter/disandpath/oomycete/pdlessons/Pages/LateBlight.aspx"
    },
    # Add more diseases as needed...
}

# --- Class names (match folder names) ---
class_names = sorted(os.listdir("dataset/test"))

# --- UI ---
st.markdown("""
    <h1 style='text-align: center; color: #ffffff; font-size: 3rem; margin-top: 30px; text-shadow: 2px 2px 4px #000000;'>
        🌿 Plant Disease Recognition
    </h1>
""", unsafe_allow_html=True)

st.subheader("Upload an image of the plant leaf to identify the disease.")
uploaded_file = st.file_uploader("📷 Choose an Image of the Plant:", type=["jpg", "jpeg", "png"])

if uploaded_file:
    st.image(uploaded_file, caption="Uploaded Image", use_container_width=True)

    if st.button("🔍 Predict"):
        st.write("Analyzing the image...")

        img = image.load_img(uploaded_file, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0

        predictions = model.predict(img_array)
        predicted_index = np.argmax(predictions[0])
        predicted_class = class_names[predicted_index]
        confidence = predictions[0][predicted_index] * 100

        st.subheader("🧪 Prediction:")
        st.markdown(f"**{predicted_class}**")
        st.write(f"🔍 **Confidence:** {confidence:.2f}%")

        if predicted_class in disease_info:
            st.subheader(f"📖 About {predicted_class.replace('_', ' ')}")
            st.markdown(f"**Description:** {disease_info[predicted_class]['description']}")
            st.markdown(f"[🔗 Learn more]({disease_info[predicted_class]['link']})", unsafe_allow_html=True)
        else:
            st.info("No additional information available for this disease.")
