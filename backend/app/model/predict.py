import tensorflow as tf
from PIL import Image
import numpy as np
import os

# Load model saat file ini diimpor
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model_klasifikasi_kulit.h5')
model = tf.keras.models.load_model(MODEL_PATH)

# Daftar label kelas sesuai urutan output model
class_names = [
    'cacar air', 'eczema', 'jerawat', 'kudis', 'kurap',
    'kutil', 'lupus', 'psioriasis', 'rosacea', 'vitiligo'
]

def predict_disease(img_path):
    try:
        # Baca dan ubah ukuran gambar menggunakan PIL
        img = Image.open(img_path).convert("RGB")
        img = img.resize((224, 224))

        # Konversi ke array dan preprocessing
        img_array = np.array(img)
        img_array = tf.keras.applications.mobilenet.preprocess_input(img_array)
        img_array = np.expand_dims(img_array, axis=0)

        # Prediksi
        preds = model.predict(img_array)[0]
        top_class_idx = np.argmax(preds)
        confidence = float(preds[top_class_idx])
        prediction = class_names[top_class_idx]

        return {
            "prediction": prediction,
            "confidence": round(confidence, 4)
        }

    except Exception as e:
        return {
            "error": str(e)
        }
