import { Component } from 'react';
import './style.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <a
              href="https://github.com/tjgtll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="github.svg" alt="Github" />
            </a>
          </div>
          <div className="footer-date">2024</div>
          <div className="footer-logo">
            <a
              href="https://rs.school/courses/reactjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="rs_school_js.svg" alt="rs.school" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
