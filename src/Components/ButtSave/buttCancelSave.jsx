import "./buttSave.css";
import { TiDelete } from "react-icons/ti";
import { useEffect, useState } from "react";

export const ButtCancelSave = ({ center }) => {
  const [favoriteCenters, setFavoriteCenters] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("cart");
    if (storedData) {
      setFavoriteCenters(JSON.parse(storedData));
    }
  }, []);

  const handleChange = () => {
    const updatedCart = favoriteCenters.filter(
      (el) => el.product.center_id !== center.center_id
    );
    setFavoriteCenters(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  return (
    <div>
      <TiDelete className="iconDelete" onClick={handleChange} />
    </div>
  );
};
