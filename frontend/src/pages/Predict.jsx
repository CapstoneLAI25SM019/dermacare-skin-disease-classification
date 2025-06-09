import React, { useState, useCallback } from 'react';
import axios from 'axios';
import ImageDropzone from '../components/predictionComp/ImageDropzone';
import ImagePreview from '../components/predictionComp/ImagePreview';
import DiseaseComponent from '../components/predictionComp/DiseaseComponent';
import ResultDisplay from '../components/predictionComp/ResultDisplay';

const Predict = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setPredictions([]);
  }, []);

  const handleReset = () => {
    setImage(null);
    setPreview(null);
    setPredictions([]);
  };

  const handleSubmit = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('file', image);
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/predict`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      const result = response.data;
      if (result.predictions) {
        setPredictions(result.predictions);
      } else if (result.error) {
        setPredictions([{ label: 'Error', confidence: 0 }]);
      } else {
        setPredictions([{ label: 'Tidak ada hasil', confidence: 0 }]);
      }

    } catch (error) {
      console.error(error);
      setPredictions([{ label: 'Terjadi kesalahan saat memproses gambar.', confidence: 0 }]);
    } finally {
      setLoading(false);
    }
  };

  const topPrediction = predictions.length > 0 ? predictions[0] : null;

  return (
    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <h1
        style={{
            fontSize: '2.4rem',
            marginBottom: '20px',
            color: '#003f7f',
            lineHeight: '1.2',
            fontWeight: 'bold',
            textAlign: 'center',
        }}
        >
        Upload Gambar untuk Prediksi
        </h1>

      {!preview ? (
        <ImageDropzone onDrop={onDrop} />
      ) : (
        <ImagePreview preview={preview} onReset={handleReset} />
      )}

      <button
        onClick={handleSubmit}
        disabled={loading || !image}
        style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          backgroundColor: '#003f7f',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: loading || !image ? 'not-allowed' : 'pointer',
          marginTop: '10px'
        }}
      >
        {loading ? 'Memproses...' : 'Prediksi'}
      </button>

      <ResultDisplay predictions={predictions} />

      {topPrediction && (
        <DiseaseComponent prediction={topPrediction.label} />
      )}
    </div>
  );
};

export default Predict;
