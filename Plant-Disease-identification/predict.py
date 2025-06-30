import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image

# Load the model
model = load_model("plant_disease_model.h5")

# Class labels (same order as your training folders)
class_names = ['Apple___Black_rot', 'Apple___healthy', 'Corn___Common_rust', ..., 'Tomato___YellowLeaf__Curl_Virus']

def predict_image(image_path):
    img = Image.open(image_path).resize((224, 224))
    img_array = np.expand_dims(np.array(img) / 255.0, axis=0)

    prediction = model.predict(img_array)
    class_idx = np.argmax(prediction)
    confidence = np.max(prediction)

    print(f"Prediction: {class_names[class_idx]} ({confidence*100:.2f}%)")

# Example usage
predict_image("sample_leaf.jpg")
