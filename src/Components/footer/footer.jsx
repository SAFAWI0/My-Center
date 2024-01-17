import "./footer.css";
import Container from "../Container/container";
import imag1 from "../../assets/facebook.png";
import imag2 from "../../assets/instagram.png";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="content">
          <div className="title">
            <p>By - Aon 2023 </p>
          </div>
          <ul>
            <li>
              <a href="https://www.facebook.com/earthlinktele/?locale=ar_AR">
                <img src={imag1} alt="imageIcon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aon.iq?igsh=MXh2ZXNiM2Y3NGg4bA==">
                <img src={imag2} alt="imageIcon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EarthlinkTele">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
