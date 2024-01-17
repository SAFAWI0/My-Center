import "./footer.css";
import Container from "../Container/container";
import imag1 from "../../assets/facebook.png";
import imag2 from "../../assets/instagram.png";
import imag3 from "../../assets/aon.png";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="content">
          <div className="title">
            <p>By - Aon 2023 </p>
            <img src={imag3} alt="imageIcon" />
          </div>
          <ul>
            <li>
              <img src={imag1} alt="imageIcon" />
            </li>

            <li>
              <img src={imag2} alt="imageIcon" />
            </li>

            <li>
              <FaXTwitter />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
