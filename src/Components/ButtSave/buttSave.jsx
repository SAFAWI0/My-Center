import "./buttSave.css";
import { BsBookmarkDash } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { useAppStore } from "../../store";
import { useEffect } from "react";

export const ButtSave = ({ center }) => {
  const { cart, setCart } = useAppStore();

  let isCenterInCart = cart.find(
    (el) => el.product.center_id === center.center_id
  );

  const handleChange = () => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex(
      (el) => el.product.center_id === center.center_id
    );
    if (index !== -1) {
      updatedCart.splice(index, 1); // remove the center if it already exists
    } else {
      updatedCart.push({ product: center }); // add the center if it doesn't exist
    }
    setCart(updatedCart); // update the cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // update localStorage
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div>
      {isCenterInCart ? (
        <BsBookmarkCheckFill className="iconAdd" onClick={handleChange} />
      ) : (
        <BsBookmarkDash className="iconAdd" onClick={handleChange} />
      )}
    </div>
  );
};
