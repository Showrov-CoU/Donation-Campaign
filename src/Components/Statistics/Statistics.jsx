import { useEffect, useState } from "react";
import PChart from "../PChart/PChart";

const Statistics = () => {
  const [storedData, setStoredData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [remainPercentage, setRemainPercentage] = useState(100);
  useEffect(() => {
    const donateData = JSON.parse(localStorage.getItem("items"));
    setStoredData(donateData);
    if (donateData) {
      const percent = (donateData.length * 100.0) / 12.0;
      setPercentage(percent.toFixed(1));
      setRemainPercentage((100.0 - percent).toFixed(1));
    }
  }, []);
  console.log(storedData);
  return (
    <div className="flex flex-col justify-center items-center mt-[60px] md:mt-28 mb-10">
      <PChart
        percentage={percentage}
        remainPercentage={remainPercentage}
      ></PChart>
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-10 pb-10">
        <div className="flex items-center gap-2">
          <p>Your Donation</p>
          <div className="h-3 w-20 bg-[#00C49F] rounded-md"></div>
        </div>
        <div className="flex items-center gap-2">
          <p>Total Donation</p>
          <div className="h-3 w-20 bg-[#FF444A] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
