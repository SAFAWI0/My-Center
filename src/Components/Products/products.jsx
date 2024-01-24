import "./products.css";
import Container from "../Container/container";
import BannerSlider from "../Banner/banner";
import { Card } from "../Card/card";
import { Categories } from "../Categories/categories";
import { GridItems } from "../GridItems/gridItems";



export const Products = () => {

  return (
    <div>
      <Container>
        <BannerSlider />
        <GridItems />
        <Categories />
        <Card />
        {/* <Centercard/> */}
      </Container>
    </div>
  );
};
