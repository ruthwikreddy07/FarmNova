import pickle
import numpy as np
import os

# Fertilizer usage tips
fertilizer_tips = {
    "Urea": "Best used before irrigation. Ensure even spreading for nitrogen absorption.",
    "DAP": "Rich in phosphorus. Use during sowing for strong root development.",
    "14-35-14": "Balanced fertilizer. Ideal for flowering stage in many crops.",
    "20-20": "Use when balanced NPK is needed. Do not overuse to avoid leaf burn.",
    "10-26-26": "High phosphorus and potassium. Ideal for root development and crop ripening.",
    "28-28": "Use during early growth stages. Avoid excessive use to prevent nitrogen toxicity.",
    "17-17-17": "General purpose fertilizer for vegetables and cereals. Maintain moisture in soil.",
    "Urea-Ammonium Nitrate": "Quick-release nitrogen source. Apply in cooler weather for efficiency.",
    "Super Phosphate": "Supports root and flower development. Mix well with soil.",
    "Muriate of Potash": "Boosts fruiting and resistance to disease. Avoid overuse in sandy soils."
}

def predict_fertilizer(features):
    model_path = os.path.join(os.path.dirname(__file__), "model.pkl")
    with open(model_path, "rb") as f:
        model, label_encoders, target_encoder, scaler = pickle.load(f)

    # Encode categorical features
    features["Soil Type"] = label_encoders["Soil Type"].transform([features["Soil Type"]])[0]
    features["Crop Type"] = label_encoders["Crop Type"].transform([features["Crop Type"]])[0]

    # Prepare and scale input
    input_features = np.array([
        features["Temperature"], features["Humidity"], features["Moisture"],
        features["Soil Type"], features["Crop Type"],
        features["Nitrogen"], features["Phosphorus"], features["Potassium"]
    ]).reshape(1, -1)

    input_scaled = scaler.transform(input_features)
    prediction = model.predict(input_scaled)
    fertilizer = target_encoder.inverse_transform(prediction)[0]

    tip = fertilizer_tips.get(fertilizer, "Use as directed by agricultural guidelines.")
    return fertilizer, tip
