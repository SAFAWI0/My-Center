import "./footer.css";
import Container from "../Container/container";
import aon from "../../assets/aon.png";
import ima1 from "../../assets/facebook.png";
import ima2 from "../../assets/instagram.png";
import ima3 from "../../assets/x.png";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="content">
          <div className="title">
            <p>By - Aon 2023 </p>
            <img src={aon} alt="aonIcon" />
          </div>
          <ul>
            <li>
              <a href={"https://www.facebook.com/earthlinktele/?locale=ar_AR"}/>
              <img src={ima1} />
            </li>

            <li>
              <a href={"https://www.instagram.com/aon.iq?igsh=MXh2ZXNiM2Y3NGg4bA=="}
              />
              <img src={ima2}/>
            </li>

            <li>
              <a href={"https://twitter.com/EarthlinkTele"}/>
              <img src={ima3}/>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
