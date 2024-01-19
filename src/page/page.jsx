import "./page.css";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Container from "../Components/Container/container";
import { Sessioncard } from "../Components/Sessioncard/sessioncard";



export const Page = () => {
  const { id } = useParams();

  return (
    <div>
      <Container>
        <div className="page-content">
          <div className="image">
            <img className="background" src="https://picsum.photos/900/800" />
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

            <Sessioncard/>
          
        </div>
      </Container>
    </div>
  );
};
