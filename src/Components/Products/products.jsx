import "./products.css";
import Container from "../Container/container";
import BannerSlider from "../Banner/banner";
import { Card } from "../Card/card";

export const Products = () => {
  return (
    <div>
      <Container>
        <BannerSlider />
        {/* <GridItems /> */}
        <Card />
        {/* <Centercard/> */}
      </Container>
    </div>
  );
};
