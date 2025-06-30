import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2

# This will automatically download the weights correctly and place in .keras/models/
model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
print("✅ Download complete and verified.")
