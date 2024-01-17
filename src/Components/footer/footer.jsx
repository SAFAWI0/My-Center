import "./footer.css";
import Container from "../Container/container";


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
              <a href={"https://www.facebook.com/earthlinktele/?locale=ar_AR"}/>
           
            </li>

            <li>
              <a href={"https://www.instagram.com/aon.iq?igsh=MXh2ZXNiM2Y3NGg4bA=="}
              />
             
            </li>

            <li>
              <a href={"https://twitter.com/EarthlinkTele"}/>
           
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
