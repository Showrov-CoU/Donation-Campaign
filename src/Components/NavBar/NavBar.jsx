import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="w-32 md:w-48 lg:w-52">
          <img src="/logo.png" alt="" />
        </div>
        <div className="flex gap-0 md:gap-10 text-sm md:text-base">
          <NavLink to="/" className="w-16 md:w-16 text-center">
            Home
          </NavLink>
          <NavLink to="/donation" className="w-20 text-center">
            Donation
          </NavLink>
          <NavLink to="/statistics" className="w-20 md:w-24 text-center">
            Statistics
          </NavLink>
        </div>
      </nav>
    </>
  );
};

NavBar.propTypes = {
  handleHeroImage: PropTypes.func,
};
export default NavBar;
