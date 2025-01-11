import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai"; // Mail simgesi

const Header = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-center gap-2 text-white mt-2">
          <div>
            <h1>Kubilay Taşkafa's Portfolio</h1>
          </div>
          <div className="flex items-center justify-center gap-4 text-xl">
            <a
              href="https://www.linkedin.com/in/kubilaytaskafa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/kubilaytaskafa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/kubilaytaskafa0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/kubilaytaskafa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href="mailto:info.kubilay0@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail />
            </a>{" "}
            {/* Mail ikonu */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
