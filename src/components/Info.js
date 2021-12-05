// email button && linkedin button
import ProfilePhoto from "../images/profile-pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Info() {
  return (
    <header className="Info-header">
      <img src={ProfilePhoto} alt="profile"></img>
      <h1 className="Info-name">Adrian Murage</h1>
      <h2 className="Info-role">Frontend Developer</h2>
      <a className="Info-website" href="https://adrianmurage.com">
        adrianmurage.com
      </a>
      <div className="Info-buttons">
        <a
          className="Info-mailto"
          href="mailto:adrianmurage21@gmail.com"
          type="button"
        >
          <FontAwesomeIcon icon="envelope" /> Email
        </a>
        <a
          className="Info-linkedin"
          href="https://www.linkedin.com/in/adrianmurage/"
          type="button"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Info;
