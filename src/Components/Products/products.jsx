import Container from "../Container/container";
import BannerSlider from "../Banner/banner";
import { Card } from "../Card/card";
import { Categories } from "../Categories/categories";

export const Products = () => {
  return (
    <div>
      <Container>
        <BannerSlider />
        <Categories />
        <Card />
      </Container>
    </div>
  );
};
