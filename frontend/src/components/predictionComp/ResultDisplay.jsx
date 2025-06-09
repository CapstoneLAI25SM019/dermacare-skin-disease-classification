const progressBarContainerStyle = {
  backgroundColor: '#eee',
  borderRadius: '8px',
  overflow: 'hidden',
  height: '16px',
  width: '100%',
  maxWidth: '600px',
  marginLeft: '10px',
};

const progressBarStyle = (widthPercent) => ({
  height: '100%',
  width: `${widthPercent}%`,
  backgroundColor: '#003f7f',
  borderRadius: '8px 0 0 8px',
});

const ResultDisplay = ({ predictions }) => {
  if (!predictions || predictions.length === 0) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ textAlign: 'center' }}>Hasil Prediksi</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {predictions.map((item, idx) => {
          const percent = (item.confidence * 100).toFixed(2);
          return (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ flexBasis: '120px', textTransform: 'lowercase', fontWeight: idx === 0 ? 'bold' : 'normal' }}>
                {item.label}
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={progressBarContainerStyle}>
                  <div style={progressBarStyle(percent)} />
                </div>
              </div>
              <div style={{ width: '50px', textAlign: 'right', marginLeft: '10px', fontWeight: idx === 0 ? 'bold' : 'normal' }}>
                {percent}%
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultDisplay;
