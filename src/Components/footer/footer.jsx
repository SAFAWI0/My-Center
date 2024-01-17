import "./footer.css";
import Container from "../Container/container";
import imag1 from "../../assets/facebook.png";
import imag2 from "../../assets/instagram.png";
import imag3 from "../../assets/x.png";
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
              <a
                href={"https://www.facebook.com/earthlinktele/?locale=ar_AR"}
              />
              <img src={imag1} alt="imageIcon" />
            </li>

            <li>
              <a
                href={
                  "https://www.instagram.com/aon.iq?igsh=MXh2ZXNiM2Y3NGg4bA=="
                }
              />
              <img src={imag2} alt="imageIcon" />
            </li>

            <li>
              <a href={"https://twitter.com/EarthlinkTele"} />
              <img src={imag3} alt="imageIcon" />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
