import "./products.css";
import Container from "../Container/container";
import BannerSlider from "../Banner/banner";
import { Card } from "../Card/card";
import { GridItems } from "../GridItems/gridItems";



export const Products = () => {

  return (
    <div>
      <Container>
        <BannerSlider />
        <GridItems />
        <Card />
        {/* <Centercard/> */}
      </Container>
    </div>
  );
};
