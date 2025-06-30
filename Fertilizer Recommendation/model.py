import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from xgboost import XGBClassifier
import pickle
from data_loader import load_dataset


def train_model(df):
    # Label encode categorical features
    label_encoders = {}
    for col in ['Soil Type', 'Crop Type']:
        le = LabelEncoder()
        df[col] = le.fit_transform(df[col])
        label_encoders[col] = le

    # Encode target
    target_encoder = LabelEncoder()
    df['Fertilizer Name'] = target_encoder.fit_transform(df['Fertilizer Name'])

    X = df.drop('Fertilizer Name', axis=1)
    y = df['Fertilizer Name']

    # Scale numeric features
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

    # Train model
    model = XGBClassifier(
        n_estimators=150,
        max_depth=6,
        learning_rate=0.1,
        use_label_encoder=False,
        eval_metric='mlogloss'
    )
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    print("Accuracy:", accuracy_score(y_test, y_pred))

    with open("model.pkl", "wb") as f:
        pickle.dump((model, label_encoders, target_encoder, scaler), f)

if __name__ == "__main__":
    df = load_dataset("data_core.csv")
    train_model(df)
