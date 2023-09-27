import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ card }) => {
  const { id, cardBg, image, textColor, categoryBg, category, title } =
    card || {};
  return (
    <div>
      <Link to={`/category/${id}`}>
        <div
          className="card card-compact rounded-md"
          style={{ backgroundColor: cardBg }}
        >
          <figure>
            <img src={image} className="w-full" alt="" />
          </figure>
          <div className="card-body">
            <span
              className="font-semibold text-sm w-fit px-2 py-[2px] rounded-md"
              style={{
                color: textColor,
                backgroundColor: categoryBg,
              }}
            >
              {category}
            </span>
            <h1 className="text-base font-bold" style={{ color: textColor }}>
              {title}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

Category.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Category;
