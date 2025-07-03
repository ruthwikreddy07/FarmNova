import streamlit as st
import numpy as np
from keras.models import load_model
from keras.preprocessing import image
import os

# Load the model
model = load_model("model/plant_disease_model.keras")

# Disease info dictionary
disease_info = {
    "Pepper__bell___Bacterial_spot": {
        "description": "Caused by *Xanthomonas campestris*, leading to water-soaked lesions on leaves and fruits of bell pepper.",
        "link": "https://plantvillage.psu.edu/topics/bell-pepper/infos/diseases_and_pests_description_uses_propagation"
    },
    "Pepper__bell___healthy": {
        "description": "The bell pepper leaf appears healthy with no visible signs of bacterial or fungal infection.",
        "link": "https://en.wikipedia.org/wiki/Bell_pepper"
    },
    "Potato___Early_blight": {
        "description": "A fungal disease caused by *Alternaria solani*, leading to concentric ring lesions on leaves and tubers.",
        "link": "https://www.apsnet.org/edcenter/disandpath/fungalasco/pdlessons/Pages/Earlyblight.aspx"
    },
    "Potato___healthy": {
        "description": "Healthy potato foliage with no signs of fungal blight or bacterial infection.",
        "link": "https://en.wikipedia.org/wiki/Potato"
    },
    "Potato___Late_blight": {
        "description": "Caused by *Phytophthora infestans*, leading to rapidly spreading brown lesions and plant collapse.",
        "link": "https://www.apsnet.org/edcenter/disandpath/oomycete/pdlessons/Pages/LateBlight.aspx"
    },
    "Tomato__Target_Spot": {
        "description": "Caused by *Corynespora cassiicola*, this disease leads to brown lesions with concentric rings on tomato leaves.",
        "link": "https://www.plantwise.org/KnowledgeBank/factsheetforfarmers/20187800115"
    },
    "Tomato__Tomato_mosaic_virus": {
        "description": "*ToMV* causes mottling, yellowing, and deformation of leaves, often leading to reduced yield.",
        "link": "https://en.wikipedia.org/wiki/Tomato_mosaic_virus"
    },
    "Tomato__Tomato_YellowLeaf__Curl_Virus": {
        "description": "Caused by whiteflies, this virus leads to upward curling leaves, yellowing, and stunted growth.",
        "link": "https://en.wikipedia.org/wiki/Tomato_yellow_leaf_curl_virus"
    },
    "Tomato_Bacterial_spot": {
        "description": "Caused by *Xanthomonas spp.*, symptoms include small water-soaked spots that become necrotic.",
        "link": "https://plantvillage.psu.edu/topics/tomato/infos/diseases_and_pests_description_uses_propagation"
    },
    "Tomato_Early_blight": {
        "description": "Caused by *Alternaria solani*, it results in concentric brown lesions with yellow halos on older leaves.",
        "link": "https://www.apsnet.org/edcenter/disandpath/fungalasco/pdlessons/Pages/Earlyblight.aspx"
    },
    "Tomato_healthy": {
        "description": "Healthy tomato plant with green, undamaged leaves and no visible signs of disease.",
        "link": "https://en.wikipedia.org/wiki/Tomato"
    },
    "Tomato_Late_blight": {
        "description": "A serious tomato disease caused by *Phytophthora infestans*, leading to large, dark, water-soaked lesions.",
        "link": "https://www.apsnet.org/edcenter/disandpath/oomycete/pdlessons/Pages/LateBlight.aspx"
    },
    "Tomato_Leaf_Mold": {
        "description": "Caused by *Passalora fulva*, it appears as yellow patches on upper leaf surfaces with mold on the underside.",
        "link": "https://www.planetnatural.com/pest-problem-solver/plant-disease/leaf-mold/"
    },
    "Tomato_Septoria_leaf_spot": {
        "description": "Caused by *Septoria lycopersici*, this disease creates small, circular spots with dark borders and gray centers.",
        "link": "https://extension.umn.edu/diseases/leaf-spot-tomato"
    },
    "Tomato_Spider_mites_Two_spotted_spider_mite": {
        "description": "Caused by *Tetranychus urticae*, these pests lead to stippling and yellowing of tomato leaves.",
        "link": "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7405.html"
    }
}


# Class labels (must match your training set's folder structure)
class_names = sorted(os.listdir("dataset/test"))  # Or hardcode list if needed

# Streamlit UI
st.set_page_config(page_title="Plant Disease Identifier", layout="centered")
st.title("🌿 Plant Disease Recognition")
st.subheader("Upload an image of the plant leaf to identify the disease.")

uploaded_file = st.file_uploader("Choose an Image of the Plant:", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    st.image(uploaded_file, caption="Uploaded Image", use_container_width=True)
    
    # Predict Button
    if st.button("🔍 Predict"):
        st.write("Analyzing the image...")

        # Load image and preprocess
        img = image.load_img(uploaded_file, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize

        # Prediction
        predictions = model.predict(img_array)
        predicted_index = np.argmax(predictions[0])
        predicted_class = class_names[predicted_index]
        confidence = predictions[0][predicted_index] * 100

        # Display result
        st.subheader("🧪 Prediction:")
        st.markdown(f"**{predicted_class}**")
        st.write(f"🔍 **Confidence:** {confidence:.2f}%")

        # Show info if available
        if predicted_class in disease_info:
            st.subheader(f"📖 About {predicted_class.replace('__', ' ').replace('_', ' ')}")
            st.markdown(f"**Description:** {disease_info[predicted_class]['description']}")
            st.markdown(f"[🔗 Learn more]({disease_info[predicted_class]['link']})", unsafe_allow_html=True)
        else:
            st.info("No additional information available for this disease.")
