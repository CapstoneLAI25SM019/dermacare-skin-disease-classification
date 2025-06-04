import React from 'react';

const ImagePreview = ({ preview, onReset }) => {
    return (
        <div style={{ position: 'relative', textAlign: 'center', marginBottom: '20px' }}>
            {/* Tombol silang di pojok kanan atas */}
            <button
                onClick={onReset}
                style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    background: '#ff4d4d',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    lineHeight: '26px',
                    textAlign: 'center',
                    padding: 0
                }}
                title="Hapus Gambar"
            >
                &times;
            </button>

            <img
                src={preview}
                alt="Preview"
                style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    objectFit: 'contain',
                    borderRadius: '6px',
                    border: '2px solid #000'
                }}
            />
        </div>
    );
};

export default ImagePreview;