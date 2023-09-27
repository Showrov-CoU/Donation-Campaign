import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <div>
      <div className="bg-[#fcfcfc] px-[5%] py-3 fixed z-10 top-0 w-full">
        <NavBar></NavBar>
      </div>

      <div className="mt-12 md:mt-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
