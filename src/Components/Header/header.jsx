import "./header.css";
import Container from "../Container/container";
import { RiHome2Line } from "react-icons/ri";
import { CgFormatJustify } from "react-icons/cg";
import { ViewBox } from "../ViewBox/viewBox";
import { useAppStore } from "../../store";

const Header = () => {
  const { setOpen, setOpenD } = useAppStore();

  const handleOpenDrawer = () => {
    setOpen(true);
  };
  const handleOpenaD = () => {
    setOpenD(true);
  };

  return (
    <div className="header">
      <Container>
        <div className="contenth">
          <RiHome2Line className="icon" onClick={handleOpenaD} />
          <div className="logo">
            <h2>My Center</h2>
          </div>
          <CgFormatJustify className="icon" onClick={handleOpenDrawer} />
        </div>
      </Container>
      <ViewBox />
    </div>
  );
};

export default Header;
