import { articleComponents } from '../contents/articleComponents';
import './TableOfContents.css';

const TableOfContents = () => {
  return (
    <nav className="toc-container">
      <h2 className="toc-title">Daftar Isi</h2>
      <div className="toc-grid">
        {articleComponents.map(({ id, title }) => (
          <button
            key={id}
            className="toc-button"
            onClick={() => {
              const target = document.getElementById(id);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            type="button"
          >
            {title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents;
