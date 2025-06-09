import aboutUsContent from "../../contents/aboutUsContent/aboutUsContent";
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';

const Developer = () => {
  const { title, members } = aboutUsContent.team;

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
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "#003f7f",
            fontWeight: "700",
          }}
        >
          {title}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            justifyContent: "center",
            justifyItems: "stretch",
          }}
        >
          {members.map((member, index) => (
            <div
              key={index}
              style={{
                padding: "25px 20px",
                boxSizing: "border-box",
                borderRadius: "16px",
                backgroundColor: "#e6f0ff",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.2s ease",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                maxWidth: "280px",
                margin: "0 auto",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "1.25rem",
                  color: "#003f7f",
                  marginBottom: "4px",
                }}
              >
                {member.name}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#555",
                  marginBottom: "12px",
                }}
              >
                {member.role}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  fontSize: "1.5rem",
                }}
              >
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} GitHub`}
                  style={{ display: "inline-block", width: "24px", height: "24px" }}
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  style={{ display: "inline-block", width: "24px", height: "24px" }}
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developer;
