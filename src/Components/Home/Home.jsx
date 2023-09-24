import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
