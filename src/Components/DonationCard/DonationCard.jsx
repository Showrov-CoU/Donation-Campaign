import PropTypes from "prop-types";

const DonationCard = ({ card }) => {
  return (
    <div>
      <div
        className="card card-side rounded-md"
        style={{ backgroundColor: card.cardBg }}
      >
        <figure className="w-[40%]">
          <img src={card.image} className="w-full h-full" alt="" />
        </figure>
        <div className="card-body pr-0 pl-4">
          <span
            className="font-semibold text-sm w-fit px-2 py-[2px] rounded-md"
            style={{
              color: card.textColor,
              backgroundColor: card.categoryBg,
            }}
          >
            {card.category}
          </span>
          <h2 className="card-title text-base md:text-lg">{card.title}</h2>
          <p
            className="text-sm font-semibold"
            style={{ color: card.textColor }}
          >
            ${card.price}
          </p>
          <div className="card-actions justify-start">
            <button
              className="px-3 py-1 text-white rounded-md"
              style={{ backgroundColor: card.textColor }}
            >
              View Details
            </button>
          </div>
        </div>
        <div>{}</div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default DonationCard;
