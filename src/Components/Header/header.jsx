import "./header.css";

import Container from "../Container/container";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="content">
          <h1>DASHBOARD</h1>
          <div className="admin">
            <p>SAFAWI</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
