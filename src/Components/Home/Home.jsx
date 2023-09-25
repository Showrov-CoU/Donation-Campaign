import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";

const Home = () => {
  const cardsInfo = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <div className="my-5 md:my-10">
        <Categories cardsInfo={cardsInfo}></Categories>
      </div>
    </div>
  );
};

export default Home;
