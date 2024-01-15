import "./porduct.css";
import Container from "../Container/container";
import { SearchOutlined } from "@ant-design/icons";
import BannerSlider from "../Banner/banner";
import { Card } from "../Card/card";
import { Categories } from "../Categories/categories";
import { GridItems } from "../GridItems/gridItems";

export const Porduct = () => {
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
        <Categories />
        <GridItems />
        <Card />
      </Container>
    </div>
  );
};
