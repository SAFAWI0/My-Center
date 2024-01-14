import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Container from "../Container/container";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="content">
          <p>All Rights Reserved - Aon2023</p>
          <ul>
            <li>
              <a href={"https://www.facebook.com/earthlinktele/?locale=ar_AR"}>
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href={
                  "https://www.instagram.com/aon.iq?igsh=MXh2ZXNiM2Y3NGg4bA=="
                }
              >
                <FaSquareInstagram />
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
