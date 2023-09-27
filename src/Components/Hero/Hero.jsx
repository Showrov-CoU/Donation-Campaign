import Search from "../Search/Search";

const Hero = ({ handleSearchValue, handleSearch, searchValue }) => {
  return (
    <div className="relative">
      <img src="/hero.png" className="opacity-5" alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <Search
          handleSearchValue={handleSearchValue}
          handleSearch={handleSearch}
          searchValue={searchValue}
        ></Search>
      </div>
    </div>
  );
};

export default Hero;
