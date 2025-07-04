import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.optimizers import Adam
import os

# Set paths
train_dir = "dataset/train"
val_dir = "dataset/val"
test_dir = "dataset/test"

# Parameters
IMG_SIZE = (224, 224)
BATCH_SIZE = 16  # Increased batch size for fewer steps (reduce CPU load)
EPOCHS = 5       # Fewer epochs for quick testing
NUM_CLASSES = 15

# Efficient data loader with small cache
def prepare_dataset(directory, shuffle=True, limit_batches=200):
    ds = tf.keras.utils.image_dataset_from_directory(
        directory,
        label_mode='categorical',
        image_size=IMG_SIZE,
        batch_size=BATCH_SIZE,
        shuffle=shuffle
    )
    ds = ds.take(limit_batches)  # Take limited batches for low RAM usage
    return ds.prefetch(tf.data.AUTOTUNE)

train_dataset = prepare_dataset(train_dir, shuffle=True, limit_batches=2000)
val_dataset = prepare_dataset(val_dir, shuffle=False, limit_batches=2000)
test_dataset = prepare_dataset(test_dir, shuffle=False, limit_batches=2000)

# Load base model with downloaded weights
base_model = MobileNetV2(
    weights='mobilenet_v2_weights.h5',
    include_top=False,
    input_shape=(224, 224, 3)
)
base_model.trainable = False

# Add classification head
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(128, activation='relu')(x)
predictions = Dense(NUM_CLASSES, activation='softmax')(x)
model = Model(inputs=base_model.input, outputs=predictions)

# Compile
model.compile(
    optimizer=Adam(learning_rate=1e-4),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train (no memory-clearing callback to retain dataset cache)
model.fit(
    train_dataset,
    epochs=EPOCHS,
    validation_data=val_dataset
)

# Save model
<<<<<<< HEAD
model.save("plant_disease_model.h5")
=======
model.save("plant_disease_model.keras") 
>>>>>>> 9ed4c699 (WIP: Save local changes before rebase)

# Evaluate
loss, accuracy = model.evaluate(test_dataset)
print(f"Test accuracy: {accuracy:.4f}")
