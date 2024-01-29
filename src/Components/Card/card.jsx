import "./card.css";
import { FaStar } from "react-icons/fa";
import { SlActionUndo } from "react-icons/sl";
import { products } from "../../fake";
import { HiMiniScissors } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Categories } from "../Categories/categories";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store";
// import { useAppStore } from "../../store";

export const Card = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // const { s } = useAppStore();
  // console.log(s)
  const getData = (cat) => {
    var requestOptions = {
      method: "GET",
    };

    let url = "https://my-center-api.onrender.com/api/v1/centers/show";
    if (search) {
      url = `https://my-center-api.onrender.com/api/v1/centers/show?search=${search}`;
    } else if (cat) {
      url = `https://my-center-api.onrender.com/api/v1/centers/getCentersByCat?cat=${cat}`;
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData(selectedCategory);
  }, [selectedCategory, search]);

  const handleInputChange = () => {
    setSearch(value);
  };
  return (
    <div>
      <Categories onCategoryClick={(catId) => setSelectedCategory(catId)} />
      <div className="search-box">
        <button onClick={handleInputChange}>
          <SearchOutlined style={{ paddingLeft: "10px", fontSize: "18px" }} />
        </button>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="ابحث عن المراكز التي تريدها"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearch(value);
            }
          }}
        />
      </div>

      <div className="list-item">
        <div className="title">
          <HiMiniScissors style={{ marginBottom: "12px" }} />
          <p> ... المراكز</p>
        </div>
        {products.map((el, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <Link to={`/page/${el.center_id}`}>
              <div className="imag-item">
                <img className="backgrond" src={el.cover_img} />
                <img className="logo" src={el.logo} />
              </div>
              <div className="details-item">
                <span>{el.center_name}</span>
                <div className="evaluation">
                  <p className="textDet"> {el.details}</p>
                  <SlActionUndo
                    style={{
                      color: "#666",
                      marginRight: "6px",
                      marginTop: "5px",
                    }}
                  />
                </div>
                <div className="evaluation">
                  <p>{el.evaluation}</p>
                  <FaStar style={{ color: "gold" }} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: "100px" }} />
    </div>
  );
};
