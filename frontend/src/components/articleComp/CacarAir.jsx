import React from "react";
import cacarAirContent from "../../contents/articleContent/cacarAirContent";

const CacarAir = () => {
  return (
    <section style={{ padding: "40px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{cacarAirContent.title}</h2>

      <img
        src={cacarAirContent.image}
        alt={cacarAirContent.title}
        style={{
          display: "block",
          width: "500px",
          height: "400px",
          objectFit: "cover",
          margin: "0 auto 20px",
          borderRadius: "8px"
        }}
      />

      <p style={{ marginBottom: "20px", textAlign: "justify" }}>
        {cacarAirContent.description}
      </p>

      <h3>Bentuknya bisa berupa:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        {cacarAirContent.forms.map((item, i) => (
          <li key={i} style={{ marginBottom: "10px" }}>{item}</li>
        ))}
      </ul>

      <h3>Penanganan yang dapat dilakukan:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        {cacarAirContent.treatment.map((item, i) => (
          <li key={i} style={{ marginBottom: "10px" }}>{item}</li>
        ))}
      </ul>

      <h3>Yang perlu dihindari:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        {cacarAirContent.avoid.map((item, i) => (
          <li key={i} style={{ marginBottom: "10px" }}>{item}</li>
        ))}
      </ul>

      <h3>Kapan harus ke dokter:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        {cacarAirContent.consult.map((item, i) => (
          <li key={i} style={{ marginBottom: "10px" }}>{item}</li>
        ))}
      </ul>

      <h3>Sumber:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        {cacarAirContent.sources.map((src, i) => (
          <li key={i} style={{ marginBottom: "10px" }}>
            <a href={src} target="_blank" rel="noopener noreferrer">{src}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CacarAir;
