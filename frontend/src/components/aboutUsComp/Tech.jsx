import aboutUsContent from "../../contents/aboutUsContent/aboutUsContent";
import "../aboutUsComp/AboutUsComp.css"

const Tech = () => {
  const { title, stack } = aboutUsContent.tech;

  return (
    <section className="tech-section">
      <div className="tech-container">
        <h2 className="tech-title">{title}</h2>

        <div className="tech-grid">
          {stack.map(({ name, url, icon }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card"
              aria-label={`Dokumentasi ${name}`}
            >
              <img src={icon} alt={`${name} logo`} className="tech-icon" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
