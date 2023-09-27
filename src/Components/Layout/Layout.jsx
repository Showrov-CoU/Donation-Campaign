import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  //   const [isHome, setIsHome] = useState(0);
  //   const handleHeroImage = (e) => {
  //     console.log(e.target.innerText);
  //     e.target.innerText === "Home" ? setIsHome(0) : setIsHome(1);
  //   };
  return (
    <div className="container mx-auto">
      {/* <div className="relative">
        <div className={isHome === 0 ? "" : "hidden"}>
          <Hero></Hero>
        </div>
        <div className="absolute w-full top-2 md:top-6 px-[4%] md:px-[10%]">
          <NavBar handleHeroImage={handleHeroImage}></NavBar>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div> */}
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
