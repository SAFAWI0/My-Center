import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../Container/container";
import ima1 from "../../assets/facebook.png";
import ima2 from "../../assets/instagram.png";
import aon from "../../assets/Aon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="content">
          <div className="title">
            <p>By - Aon 2023 </p>
            <img src={aon} alt="facebook"></img>
          </div>
          <ul>
            <li>
              <a href={"https://www.facebook.com/earthlinktele/?locale=ar_AR"}>
                <img src={ima1} alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href={
                  "https://www.instagram.com/aon.iq?igsh=MXh2ZXNiM2Y3NGg4bA=="
                }
                alt="instagram"
              >
                <img src={ima2} alt="facebook" />
              </a>
            </li>
            <li>
              <a href={"https://twitter.com/EarthlinkTele"}>
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
