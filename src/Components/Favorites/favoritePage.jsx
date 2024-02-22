import "./favoritePage.css";
import Container from "../Container/container";
import Header from "../Header/header";
import { useAppStore } from "../../store";
import { Link } from "react-router-dom";
import { ButtCancelSave } from "../ButtSave/buttCancelSave";

export const FavoritePage = () => {
  const { cart } = useAppStore();

  return (
    <div>
      <Header />
      <Container>
        <div className="favoritePage">
          {cart.map((el, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <div className="iconX">
                <ButtCancelSave center={el.product} />
              </div>
              <Link to={`/page/${el.product.center_id}`}>
                <div className="imag-item">
                  <img className="backgrond" src={el.product.cover_img} />
                  <img className="logo" src={el.product.logo} />
                </div>
                <div className="details-item">
                  <span>{el.product.center_name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
