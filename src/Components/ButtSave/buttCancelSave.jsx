import "./buttSave.css";
import { useAppStore } from "../../store";
import { TiDelete } from "react-icons/ti";

export const ButtCancelSave = ({ center }) => {
  const { cart, setCart } = useAppStore();

  const handleChange = () => {
    const updatedCart = cart.filter(
      (item) => item.product.center_id !== center.center_id
    );
    setCart(updatedCart);
  };
  return (
    <div>
      <TiDelete className="iconDelete" onClick={handleChange} />
    </div>
  );
};
