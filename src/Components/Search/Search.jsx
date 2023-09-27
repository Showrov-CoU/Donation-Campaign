import PropTypes from "prop-types";

const Search = ({ handleSearchValue, handleSearch, searchValue }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-5 lg:gap-8 pt-10 md:pt-8 lg:pt-0">
      <h1 className="w-fit mx-auto text-sm md:text-2xl lg:text-3xl font-bold md:font-extrabold">
        I Grow By Helping People In Need
      </h1>
      <div className="w-[40%] md:w-fit mx-auto flex justify-center items-center">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchValue}
          placeholder="Search"
          className="input border-[#DEDEDE] rounded-e-none border-e-0 input-xs md:input-sm w-full focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="btn btn-xs md:btn-sm rounded-s-none bg-[#FF444A] capitalize text-white focus:bg-[#FF444A] hover:bg-[#FF444A]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  handleSearchValue: PropTypes.func,
  handleSearch: PropTypes.func,
  searchValue: PropTypes.string,
};
export default Search;
