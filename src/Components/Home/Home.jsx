import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";

const Home = () => {
  const cardsInfo = useLoaderData();
  const [searchValue, setSearchValue] = useState("");
  const [searchCategory, setSearchCategory] = useState(cardsInfo);

  useEffect(() => {
    const filteredCategory = searchCategory.filter((item) =>
      item.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchCategory(filteredCategory);
    if (searchValue === "") {
      setSearchCategory(cardsInfo);
    }
  }, [searchValue]);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    const filteredCategory = searchCategory.filter((item) =>
      item.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchCategory(filteredCategory);
    setSearchValue("");
  };
  //   console.log(searchValue);
  console.log(searchCategory);
  return (
    <div>
      <Hero
        handleSearchValue={handleSearchValue}
        handleSearch={handleSearch}
        searchValue={searchValue}
      ></Hero>
      <div className="my-5 md:my-10">
        <Categories searchCategory={searchCategory}></Categories>
      </div>
    </div>
  );
};

export default Home;
