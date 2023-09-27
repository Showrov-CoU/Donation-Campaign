import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import { useState } from "react";

const Home = () => {
  const cardsInfo = useLoaderData();
  const [searchValue, setSearchValue] = useState("");
  const [searchCategory, setSearchCategory] = useState([]);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleSearch = () => {
    // setSearchValue("");
    const filteredCategory = cardsInfo.filter((item) =>
      item.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchCategory(filteredCategory);
  };

  const propsForChild =
    searchCategory.length === 0 ? cardsInfo : searchCategory;

  console.log(propsForChild);
  return (
    <div>
      <div>
        <Hero
          handleSearchValue={handleSearchValue}
          handleSearch={handleSearch}
          searchValue={searchValue}
        ></Hero>
        <div className="mt-4 mb-10">
          <Categories propsForChild={propsForChild}></Categories>
        </div>
      </div>
    </div>
  );
};

export default Home;
