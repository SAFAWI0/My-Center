import Container from "../../Components/Container/container";
import Header from "../../Components/Header/header";
import { Products } from "../../Components/Products/products";
import { ViewBox } from "../../Components/ViewBox/viewBox";
import { Footer } from "../../Components/footer/footer";


export const HomeScreen = () => {
  return (
    <div>  
      <Header />
      <Products />
      <Footer />
    </div>
  );
};
