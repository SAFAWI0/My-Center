import "./items.css";
import Container from "../Container/container";
import { SearchOutlined } from "@ant-design/icons";
import BannerSlider from "../Banner/banner";
import { Card } from "../Card/card";
import { Categories } from "../Categories/categories";
import { GridItems } from "../Grid Items/gridItems";

export const Items = () => {
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
       
      </Container>
    </div>
  );
};
