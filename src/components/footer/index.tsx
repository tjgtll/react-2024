import './style.scss';
import githubLogo from '../../assets/github.svg';
import rsSchoolLogo from '../../assets/rs_school_js.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a
            href="https://github.com/tjgtll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="Github" />
          </a>
        </div>
        <div className="footer-date">2024</div>
        <div className="footer-logo">
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rsSchoolLogo} alt="rs.school" />
          </a>
        </div>
      </div>
    </footer>
  );
};
