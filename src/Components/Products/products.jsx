import "./products.css";
import Container from "../Container/container";
import { SearchOutlined } from "@ant-design/icons";
import BannerSlider from "../Banner/banner";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { SlActionUndo } from "react-icons/sl";
import { GridProducts } from "../Grid Products/gridProducts";

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

        <div className="list-products">
          <div className="view-more">
            <div className="content">
              <Link>
                <GoArrowLeft /> <p>المزيد</p>
              </Link>
              <div className="description">
                <span>
                  <AiFillLike />
                  <p>مراكز ينصح بها</p>
                </span>
                <p>المركز جميل ويحتوي ع جميع الاجهزة</p>
              </div>
            </div>
          </div>
          <div className="imag-product">
            <img className="backgrond" src="https://picsum.photos/907/902" />
            <img className="logo" src="https://picsum.photos/904/902" />
          </div>
          <div className="title-product">
            <span>Beauty</span>
            <p className="evaluation">
              center is good
              <SlActionUndo style={{ color: "#666", marginRight: "6px" }} />
            </p>
            <p className="evaluation">
              <FaStar style={{ color: "gold" }} />
              4.5
            </p>
          </div>
        </div>
        <GridProducts />
      </Container>
    </div>
  );
};
