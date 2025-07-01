import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load dataset
df = pd.read_csv('Crop_recommendation.csv')
X = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
y = df['label']

# Train model
model = RandomForestClassifier()
model.fit(X, y)

# Save model to RF.pkl
with open("RF.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Model trained and saved to RF.pkl")
