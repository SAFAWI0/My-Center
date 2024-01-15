
import "./page.css";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Container from "../Container/container";

export const Page = () => {
  const { id } = useParams();

  return (
    <div>
         <img className="background" src="https://picsum.photos/900/800" />
      <Container>
        <div className="page-content">
          <div className="image">
         
            <div className="content">
              <h1>Beauty</h1>
              <img className="logo" src="https://picsum.photos/900/900" />
            </div>
          </div>
          <div className="evaluation">
            <FaStar style={{ color: "gold" }} />
            <p>
              2.5
              : تقييم المركز</p>
          </div>
            <span>center is good</span>
          <p>:ايام الدوام</p>
        </div>
      </Container>
    </div>
  );
};
