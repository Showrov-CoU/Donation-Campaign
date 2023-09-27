import PropTypes from "prop-types";
import Category from "../Category/Category";

const Categories = ({ searchCategory }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {searchCategory?.map((cardInfo) => (
        <Category key={cardInfo.id} cardInfo={cardInfo}></Category>
      ))}
    </div>
  );
};

Categories.propTypes = {
  searchCategory: PropTypes.array,
};

export default Categories;
