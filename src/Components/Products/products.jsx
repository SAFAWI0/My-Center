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
import { products } from "../../fake";

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
        <GridProducts />
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
          {products.map((el, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <div className="imag-product">
                <img className="backgrond" src={el.background} />
                <img className="logo" src={el.logo} />
              </div>

              <div className="title-product">
                <span>{el.name}</span>
                <p className="evaluation">
                  {el.description}
                  <SlActionUndo style={{ color: "#666", marginRight: "6px" }} />
                </p>
                <p className="evaluation">
                  <FaStar style={{ color: "gold" }} />
                  {el.evaluation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
