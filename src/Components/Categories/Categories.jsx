import PropTypes from "prop-types";
import Category from "../Category/Category";

const Categories = ({ propsForChild }) => {
  console.log(propsForChild.length);
  return (
    <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {propsForChild?.map((card) => (
        <Category key={card.id} card={card}></Category>
      ))}
    </div>
  );
};

Categories.propTypes = {
  propsForChild: PropTypes.array,
};

export default Categories;
