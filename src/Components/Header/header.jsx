import "./header.css";
import Container from "../Container/container";
import { RiHome2Line } from "react-icons/ri";
import { CgFormatJustify } from "react-icons/cg";
import { ViewBox } from "../ViewBox/viewBox";
import { useAppStore } from "../../store";
import { Link } from "react-router-dom";

const Header = () => {
  const { setOpen } = useAppStore();

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  return (
    <div className="header">
      <Container>
        <div className="content">
          <Link to="/">
            <RiHome2Line className="icon" />
          </Link>
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
