import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <div>
        <div className="absolute w-full">
          <Hero></Hero>
        </div>
        <div className="relative pt-8 pb-4 container mx-auto">
          <NavBar></NavBar>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
