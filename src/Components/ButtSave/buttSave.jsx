import "./buttSave.css";
import { BsBookmarkDash } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { useAppStore } from "../../store";

export const ButtSave = ({ center }) => {
  const { cart, setCart } = useAppStore();

  let qt =
    cart.find((el) => el.product.center_id === center.center_id)?.qt || 0;

  const handleChange = (newQt) => {
    if (newQt === 0) {
      setCart(cart.filter((el) => el.product.center_id !== center.center_id));
    } else {
      let newItem = {
        product: center,
        qt: newQt,
      };
      let index = cart.findIndex(
        (el) => el?.product?.center_id === center?.center_id
      );
      if (index === -1) {
        setCart([...cart, newItem]);
      }
    }
  };
  return (
    <div>
      {qt === 0 ? (
        <BsBookmarkDash className="iconAdd" onClick={() => handleChange(1)} />
      ) : (
        <BsBookmarkCheckFill
          className="iconAdd"
          onClick={() => handleChange(qt - 1)}
        />
      )}
    </div>
  );
};
