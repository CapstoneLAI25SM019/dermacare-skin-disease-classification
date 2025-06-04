import React from 'react';

const ResultDisplay = ({ result }) => {
    return (
        result && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <h3>Hasil Prediksi:</h3>
                <p>{result}</p>
            </div>
        )
    );
};

export default ResultDisplay;
