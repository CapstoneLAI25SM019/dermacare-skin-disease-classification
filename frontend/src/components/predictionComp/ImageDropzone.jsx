import React from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropzone = ({ onDrop }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false
    });

    return (
        <div
            {...getRootProps()}
            style={{
                border: '2px dashed #ccc',
                padding: '80px',
                textAlign: 'center',
                cursor: 'pointer',
                marginBottom: '20px'
            }}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Lepaskan gambar di sini ...</p>
            ) : (
                <p>Seret dan lepas gambar ke sini atau klik untuk memilih gambar</p>
            )}
        </div>
    );
};

export default ImageDropzone;
