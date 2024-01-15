import "./products.css";
import { SearchOutlined } from "@ant-design/icons";
import Container from "../Container/container";
import BannerSlider from "../Banner/banner";
import { Card } from "../Card/card";
import { Categories } from "../Categories/categories";

export const Products = () => {
  return (
    <div>
      <Container>
        <div className="search-box">
          <button>
            <SearchOutlined style={{ paddingLeft: "10px", fontSize: "18px" }} />
          </button>
          <input
            placeholder="ابحث عن المراكز التي تريدها"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log("hi");
              }
            }}
          />
        </div>
        <BannerSlider />
        <Categories/>
        <Card />
      </Container>
    </div>
  );
};
