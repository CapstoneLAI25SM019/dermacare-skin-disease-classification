import tensorflow as tf
from PIL import Image
import numpy as np
import os

# Load model
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model_klasifikasi_kulit.h5')
model = tf.keras.models.load_model(MODEL_PATH)

# Daftar label kelas
class_names = [
    'cacar air', 
    'eczema', 
    'jerawat', 
    'kudis', 
    'kurap',
    'kutil', 
    'lupus', 
    'psioriasis', 
    'rosacea', 
    'vitiligo'
]

def predict_disease(img, top_k=3):
    try:
        img = img.resize((224, 224))

        img_array = np.array(img)
        img_array = tf.keras.applications.mobilenet.preprocess_input(img_array)
        img_array = np.expand_dims(img_array, axis=0)

        preds = model.predict(img_array)[0]

        top_indices = preds.argsort()[-top_k:][::-1]
        predictions = [
            {
                "label": class_names[i],
                "confidence": round(float(preds[i]), 4)
            }
            for i in top_indices
        ]

        return {"predictions": predictions}

    except Exception as e:
        return {"error": str(e)}

