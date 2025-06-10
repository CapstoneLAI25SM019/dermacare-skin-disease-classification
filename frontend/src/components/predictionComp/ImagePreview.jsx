import './PredictionComp.css';

const ImagePreview = ({ preview, onReset }) => {
    return (
        <div className="image-preview-container">
            <button onClick={onReset} className="remove-image-button" title="Hapus Gambar">
                &times;
            </button>

            <img src={preview} alt="Preview" className="image-preview" />
        </div>
    );
};

export default ImagePreview;
