import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ cardInfo }) => {
  return (
    <div>
      <div
        className="card card-compact rounded-md"
        style={{ backgroundColor: cardInfo.cardBg }}
      >
        <Link to={`/category/${cardInfo.id}`}>
          <figure>
            <img src={cardInfo.image} className="w-full" alt="" />
          </figure>
          <div className="card-body">
            <span
              className="font-semibold text-sm w-fit px-2 py-[2px] rounded-md"
              style={{
                color: cardInfo.textColor,
                backgroundColor: cardInfo.categoryBg,
              }}
            >
              {cardInfo.category}
            </span>
            <h1
              className="text-base font-bold"
              style={{ color: cardInfo.textColor }}
            >
              {cardInfo.title}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

Category.propTypes = {
  cardInfo: PropTypes.object.isRequired,
};

export default Category;
