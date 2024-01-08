import { Header } from "../../components/Header/header";
import { Table } from "../../components/productsTable/productsTable";
import { Container } from "../../components/container/container";
import "./homeScreen.css";
import AddProducts from "../../components/Add/Add";
import EditProducts from "../../components/Edit/edit";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="content">
        <AddProducts/>
        <EditProducts/>
        </div>
        <Table/>
      </Container>
    </div>
  );
};

export default HomeScreen;
