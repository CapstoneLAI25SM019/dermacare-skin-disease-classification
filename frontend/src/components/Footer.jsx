import { footer } from '../contents/FooterContent';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-left">{footer.copy}</p>
                <a
                    href={footer.viewOnGithub.url}
                    target="_blank"
                    rel="noreferrer"
                    title={footer.viewOnGithub.title}
                    className="footer-right"
                >
                    {footer.viewOnGithub.title}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
