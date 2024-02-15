import "./centers.css";
import Container from "../Container/container";
import Header from "../Header/header";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const Centers = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState();

  const getData = () => {
    var requestOptions = {
      method: "GET",
    };
    fetch(
      `https://my-center-api.onrender.com/api/v1/centers/show?search=${search}`,
      requestOptions
    )
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
    <div className="centers">
      <Header />
      <Container>
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
        <div className="content-centers">
          {products.map((el, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <Link to={`/page/${el.center_id}`}>
                <div className="imag-item">
                  <img className="backgrond" src={el.cover_img} />
                  <img className="logo" src={el.logo} />
                </div>
                <div className="details-item">
                  <span>{el.center_name}</span>
                  <p> {el.details}</p>
                  <div className="evaluation">
                    <p>{el.evaluation}</p>
                    <FaStar style={{ color: "gold" }} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
