import style from "./header.module.css";
import Container from "../Container/container";
import { RiHome2Line } from "react-icons/ri";
import { CgFormatJustify } from "react-icons/cg";
import { ViewBox } from "../ViewBox/viewBox";
import { useAppStore } from "../../store";
import { Link } from "react-router-dom";

const Header = () => {
  const { setOpen, setOpenD } = useAppStore();

  const handleOpenDrawer = () => {
    setOpen(true);
  };
  const handleOpenaD = () => {
    setOpenD(true);
  };

  return (
    <div className={style.header}>
      <Container>
        <div className={style.content}>
          <RiHome2Line className={style.icon} onClick={handleOpenaD} />
         <Link className={style.logolink} to={'/'}> <div className={style.logo}>
            <h2>My Center</h2>
          </div></Link>
          <CgFormatJustify className={style.icon} onClick={handleOpenDrawer} />
        </div>
      </Container>
      <ViewBox />
    </div>
  );
};

export default Header;
