import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";
import Swal from "sweetalert2";

const Donation = () => {
  const [storedData, setStoredData] = useState([]);
  const [isFound, setIsFound] = useState("");
  const [isSee, setIsSee] = useState(false);
  useEffect(() => {
    const addDonation = JSON.parse(localStorage.getItem("items"));
    if (addDonation) {
      setStoredData(addDonation);
    } else {
      setIsFound("No data Found");
    }
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        setStoredData([]);
        setIsFound("No data Found");
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="mt-20 md:mt-28 mb-10 mx-[5%]">
      {isFound ? (
        <p className="h-[60vh] flex justify-center items-center text-lg font-bold">
          No Data Found
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {isSee
              ? storedData.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : storedData
                  .slice(0, 4)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>
          <div className="py-5 flex justify-center items-center gap-12">
            {storedData.length >= 4 && (
              <button
                onClick={() => setIsSee(!isSee)}
                className="bg-[#3085d6] px-4 py-1 rounded-md text-white"
              >
                {isSee ? "See Less" : "See All"}
              </button>
            )}
            {storedData.length > 0 && (
              <button
                onClick={handleDelete}
                className="bg-[#d33] px-4 py-1 rounded-md text-white"
              >
                Delete All
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
