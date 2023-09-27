import PropTypes from "prop-types";
import Category from "../Category/Category";

const Categories = ({ cardsInfo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardsInfo?.map((card) => (
        <Category key={card.id} card={card}></Category>
      ))}
    </div>
  );
};

Categories.propTypes = {
  cardsInfo: PropTypes.array,
};

export default Categories;
