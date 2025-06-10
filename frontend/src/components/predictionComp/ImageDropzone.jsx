import { useDropzone } from 'react-dropzone';
import './PredictionComp.css';

const ImageDropzone = ({ onDrop }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false
    });

    return (
        <div
            {...getRootProps()}
            className={`dropzone-container ${isDragActive ? 'active' : ''}`}
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
