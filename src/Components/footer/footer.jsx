import "./footer.css";
import Container from "../Container/container";
import imag1 from "../../assets/facebook.png";
import imag2 from "../../assets/instagram.png";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
              <Link to="https://www.facebook.com/earthlinktele/?locale=ar_AR">
                <img src={imag1} alt="imageIcon" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/aon.iq?igsh=MXh2ZXNiM2Y3NGg4bA==">
                <img src={imag2} alt="imageIcon" />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/EarthlinkTele">
                <FaXTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
