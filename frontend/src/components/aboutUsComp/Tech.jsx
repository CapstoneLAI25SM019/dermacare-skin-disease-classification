import aboutUsContent from "../../contents/aboutUsContent/aboutUsContent";

const Tech = () => {
  const { title, stack } = aboutUsContent.tech;

  return (
    <section
      style={{
        padding: "60px 40px",
        backgroundColor: "#f9fbfc",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
            color: "#003f7f",
            fontWeight: "700",
          }}
        >
          {title}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "30px",
            justifyItems: "center",
          }}
        >
          {stack.map(({ name, url, icon }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "180px",
                padding: "20px",
                borderRadius: "16px",
                backgroundColor: "#e6f0ff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                fontWeight: "600",
                fontSize: "1.1rem",
                color: "#003f7f",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                gap: "12px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              aria-label={`Dokumentasi ${name}`}
            >
              <img
                src={icon}
                alt={`${name} logo`}
                style={{ width: "48px", height: "48px", objectFit: "contain" }}
              />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
