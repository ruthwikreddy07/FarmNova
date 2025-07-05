import streamlit as st
import numpy as np
from keras.models import load_model
from keras.preprocessing import image
import os
import base64
from pathlib import Path

# --- Page Config ---
st.set_page_config(page_title="Plant Disease Identifier", layout="centered")
# --- Page Config ---
def set_background(image_path):
    with open(image_path, "rb") as img_file:
        encoded = base64.b64encode(img_file.read()).decode()
    page_bg = f"""
    <style>
    .stApp {{
        background-image: url("data:image/jpg;base64,{encoded}");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }}
    </style>
    """
    st.markdown(page_bg, unsafe_allow_html=True)

# --- Set Background ---
# --- Set Background ---
set_background(os.path.join(os.path.dirname(__file__), "bg.jpg"))


import os
import gdown
from keras.models import load_model

model_path = "plant_disease_model.keras"
gdrive_file_id = "1DEkYjnpWFjamJV1ryuUubHe8w1TygsFr"

if not os.path.exists(model_path):
    gdown.download(f"https://drive.google.com/uc?id={gdrive_file_id}", model_path, quiet=False)

model = load_model(model_path)


# --- Disease Info ---
disease_info = {
    "Pepper__bell___Bacterial_spot": {
        "description": "Caused by *Xanthomonas campestris*, it forms dark, water-soaked lesions on leaves and fruits of bell pepper.",
        "link": "https://plantvillage.psu.edu/topics/bacterial-spot-pepper/infos"
    },
    "Pepper__bell___healthy": {
        "description": "The plant is healthy with no visible signs of bacterial or fungal disease.",
        "link": "https://www.researchgate.net/figure/Healthy-pepper-plant_fig1_327527437"
    },
    "Potato___Early_blight": {
        "description": "Caused by *Alternaria solani*, it leads to concentric leaf spots and premature defoliation.",
        "link": "https://www.cabi.org/isc/datasheet/14515"
    },
    "Potato___Late_blight": {
        "description": "*Phytophthora infestans* causes black lesions on leaves and tuber rot, especially in wet conditions.",
        "link": "https://www.apsnet.org/publications/imageresources/Pages/2011-01.aspx"
    },
    "Potato___healthy": {
        "description": "Leaves are fresh and free of disease symptoms, with even green coloring.",
        "link": "https://www.researchgate.net/figure/Healthy-potato-plant_fig1_318004161"
    },
    "Tomato_Bacterial_spot": {
        "description": "Caused by *Xanthomonas spp.*, it causes dark spots on foliage and fruit, reducing yield.",
        "link": "https://extension.umn.edu/diseases/bacterial-spot-tomato"
    },
    "Tomato_Early_blight": {
        "description": "*Alternaria solani* causes dark lesions on older leaves, often with concentric rings.",
        "link": "https://www.apsnet.org/edcenter/disandpath/fungalbasics/Pages/EarlyBlight.aspx"
    },
    "Tomato_Late_blight": {
        "description": "*Phytophthora infestans* causes water-soaked, rapidly spreading lesions on leaves and fruit.",
        "link": "https://www.apsnet.org/edcenter/disandpath/oomycete/pdlessons/Pages/LateBlight.aspx"
    },
    "Tomato_Leaf_Mold": {
        "description": "*Passalora fulva* causes pale green or yellow spots on upper leaf surfaces and olive-green mold underneath.",
        "link": "https://www.apsnet.org/edcenter/disandpath/fungalbasics/Pages/LeafMold.aspx"
    },
    "Tomato_Septoria_leaf_spot": {
        "description": "*Septoria lycopersici* creates small, circular spots with gray centers and dark borders on leaves.",
        "link": "https://ag.umass.edu/vegetable/fact-sheets/tomato-septoria-leaf-spot"
    },
    "Tomato_Spider_mites_Two_spotted_spider_mite": {
        "description": "Caused by *Tetranychus urticae*, these pests lead to stippling and bronzing on tomato leaves.",
        "link": "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7405.html"
    },
    "Tomato__Target_Spot": {
        "description": "Caused by *Corynespora cassiicola*, it leads to round brown lesions with concentric rings on leaves.",
        "link": "https://edis.ifas.ufl.edu/publication/pp313"
    },
    "Tomato__Tomato_YellowLeaf__Curl_Virus": {
        "description": "This virus, spread by whiteflies, causes leaf curling, stunted growth, and yellowing.",
        "link": "https://www.apsnet.org/edcenter/disandpath/viral/pdlessons/Pages/TYLCV.aspx"
    },
    "Tomato__Tomato_mosaic_virus": {
        "description": "TMV causes mottled, discolored patches on tomato leaves and malformed fruits.",
        "link": "https://www.gardeningknowhow.com/edible/vegetables/tomato/tomato-mosaic-virus.htm"
    },
    "Tomato_healthy": {
        "description": "No signs of stress, disease, or damage — the plant is vigorous and thriving.",
        "link": "https://www.researchgate.net/figure/Healthy-tomato-plant-leaves_fig1_339316772"
    }
}


# --- Class names (match folder names) ---
dataset_path = os.path.join(os.path.dirname(__file__), "dataset", "test")
class_names = sorted(os.listdir(dataset_path))


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
