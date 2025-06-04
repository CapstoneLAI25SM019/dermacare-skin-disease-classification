import React, { useState, useCallback } from 'react';
import axios from 'axios';
import ImageDropzone from '../components/predictionComp/ImageDropzone';
import ImagePreview from '../components/predictionComp/ImagePreview';
import ResultDisplay from '../components/predictionComp/ResultDisplay';

// Import komponen penyakit
import CacarAir from '../components/articleComp/CacarAir';
import Eczema from '../components/articleComp/Eczema';
import Jerawat from '../components/articleComp/Jerawat';
import Kudis from '../components/articleComp/Kudis';
import Kurap from '../components/articleComp/Kurap';
import Kutil from '../components/articleComp/Kutil';
import Lupus from '../components/articleComp/Lupus';
import Psioriasis from '../components/articleComp/Psioriasis';
import Rosacea from '../components/articleComp/Rosacea';
import Vitiligo from '../components/articleComp/Vitiligo';


const Predict = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [diseaseComponent, setDiseaseComponent] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
        setResult('');
        setDiseaseComponent(null);
    }, []);

    const handleReset = () => {
        setImage(null);
        setPreview(null);
        setResult('');
        setDiseaseComponent(null);
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

            if (response.data.prediction) {
                const prediction = response.data.prediction.toLowerCase();
                const confidence = Math.round(response.data.confidence * 100);
                setResult(`Prediksi: ${prediction} (Confidence: ${confidence}%)`);

                const diseaseMap = {
                    'cacar air': <CacarAir />,
                    'eczema': <Eczema />,
                    'jerawat': <Jerawat />,
                    'kudis': <Kudis />,
                    'kurap': <Kurap />,
                    'kutil': <Kutil />,
                    'lupus': <Lupus />,
                    'psioriasis': <Psioriasis />,
                    'rosacea': <Rosacea />,
                    'vitiligo': <Vitiligo />
                };

                setDiseaseComponent(diseaseMap[prediction] || null);
            } else if (response.data.error) {
                setResult(`Error: ${response.data.error}`);
                setDiseaseComponent(null);
            } else {
                setResult('Tidak ada hasil');
                setDiseaseComponent(null);
            }

        } catch (error) {
            console.error(error);
            setResult('Terjadi kesalahan saat memproses gambar.');
            setDiseaseComponent(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Upload Gambar untuk Prediksi</h2>

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

            <ResultDisplay result={result} />

            {diseaseComponent && (
                <div style={{ marginTop: '30px' }}>
                    <h3>Informasi Penyakit</h3>
                    {diseaseComponent}
                </div>
            )}
        </div>
    );
};

export default Predict;