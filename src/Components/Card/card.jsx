import "./card.css";
import { FaStar } from "react-icons/fa";
import { SlActionUndo } from "react-icons/sl";
import { products } from "../../fake";
import { HiMiniScissors } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useAppStore } from "../../store";

export const Card = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState();
  const {s} = useAppStore();
console.log(s)
  const getData = (s) => {
    var requestOptions = {
      method: "GET",
    };

    // let url = "http://localhost:3000/api/v1/centers/show"
    // if (s) url =`http://localhost:3000/api/v1/centers/getCentersByCat?cat=${s}`
    // else url=`http://localhost:3000/api/v1/centers/show?search=${search}`


    fetch(`http://localhost:3000/api/v1/centers/getCentersByCat?cat=${s}`, requestOptions  )
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, [search]);
  const handleInputChange = () => {
    setSearch(value);
  };
  return (
    <div>
     
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
            
            <a href={`${el.center_id}`}>
              <div className="imag-item">
                <img className="backgrond" src={el.cover_img} />
                <img className="logo" src={el.logo} />
              </div>

              <div className="details-item">
                <span>{el.center_name}</span>
                <div className="evaluation">
                  <p> {el.details}</p>
                  <SlActionUndo style={{ color: "#666", marginRight: "6px" }} />
                </div>
                <div className="evaluation">
                  <p>{el.evaluation}</p>
                  <FaStar style={{ color: "gold" }} />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
