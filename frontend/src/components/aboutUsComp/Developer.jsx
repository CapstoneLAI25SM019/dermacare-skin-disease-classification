import aboutUsContent from "../../contents/aboutUsContent/aboutUsContent";
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import "../aboutUsComp/AboutUsComp.css";

const Developer = () => {
  const { title, members } = aboutUsContent.team;

  return (
    <section className="developer-section">
      <div className="developer-container">
        <h2 className="developer-title">{title}</h2>

        <div className="developer-grid">
          {members.map((member, index) => (
            <div key={index} className="developer-card">
              <p className="developer-name">{member.name}</p>
              <p className="developer-role">{member.role}</p>

              <div className="developer-icons">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} GitHub`}
                  className="developer-icon-link"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  className="developer-icon-link"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
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
