import Search from "../Search/Search";
import PropTypes from "prop-types";

const Hero = ({ handleSearchValue, handleSearch, searchValue }) => {
  return (
    <div className="relative">
      <img src="/hero.png" className="opacity-10" alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70%] md:-translate-y-[60%] lg:-translate-y-[50%] w-full">
        <Search
          handleSearchValue={handleSearchValue}
          handleSearch={handleSearch}
          searchValue={searchValue}
        ></Search>
      </div>
    </div>
  );
};

Hero.propTypes = {
  handleSearchValue: PropTypes.func,
  handleSearch: PropTypes.func,
  searchValue: PropTypes.string,
};
export default Hero;
