import PropTypes from "prop-types";
import Swal from "sweetalert2";

const Select = ({ item }) => {
  const handleStorage = () => {
    const addDonationArr = [];
    const addDonation = JSON.parse(localStorage.getItem("items"));
    if (!addDonation) {
      addDonationArr.push(item);
      localStorage.setItem("items", JSON.stringify(addDonationArr));
      Swal.fire("Good job!", "Successfully added this donation!", "success");
    } else {
      const exist = addDonation.find((donation) => donation.id === item.id);
      if (!exist) {
        addDonationArr.push(...addDonation, item);
        localStorage.setItem("items", JSON.stringify(addDonationArr));
        Swal.fire("Good job!", "Successfully added this donation!", "success");
      } else {
        Swal.fire("Oppss..!", "Already added this donation!", "error");
      }
    }
  };

  return (
    <>
      <div className="relative overflow-hidden w-[85%] lg:h-[28rem] mx-auto rounded-xl">
        <img src={item.image} className="w-full h-full" alt="" />
        <div className="absolute w-full bottom-0 h-20 bg-[#0b0b0b80] flex items-center ps-10">
          <button
            className="px-2 py-1 text-white rounded-md"
            onClick={handleStorage}
            style={{ backgroundColor: item.textColor }}
          >
            Donate ${item.price}
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold capitalize mt-5 mb-4 w-[85%] mx-auto">
        {item.title}
      </h1>
      <p className="text-sm w-[85%] mx-auto">{item.description}</p>
    </>
  );
};

Select.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Select;
