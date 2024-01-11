import "./header.css";
import Container from "../Container/container";
import { RiHome2Line } from "react-icons/ri";
import { CgFormatJustify } from "react-icons/cg";
import { ViewBox } from "../ViewBox/viewBox";
import { useAppStore } from "../../store";

const Header = () => {
  const { setOpen } = useAppStore();

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  return (
    <div className="header">
      <Container>
        <div className="content">
          <a href="/">
            <RiHome2Line />
          </a>
          <div className="logo">
            <h2>My Center</h2>
          </div>
          <CgFormatJustify className="categ" onClick={handleOpenDrawer} />
        </div>
      </Container>
      <ViewBox />
    </div>
  );
};

export default Header;
