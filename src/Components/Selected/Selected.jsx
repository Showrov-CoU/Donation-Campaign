import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Selected = () => {
  let { id } = useParams();
  const [item, setItem] = useState({});
  const data = useLoaderData();
  useEffect(() => {
    const findcategory = data.find((data) => data.id === id);
    setItem(findcategory);
  }, [id, data]);
  console.log(item);
  return (
    <div className="mt-10">
      <div className="relative overflow-hidden w-[85%] h-[28rem] mx-auto rounded-xl">
        <img src={item.image} className="w-full h-full" alt="" />
        <div className="absolute w-full bottom-0 h-20 bg-[#0b0b0b80] flex items-center ps-10">
          <p className="px-2 py-1 text-white rounded-md" style={{ backgroundColor: item.textColor }}>
            Donate {item.price}
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-bold capitalize mt-10 mb-5 w-[85%] mx-auto">{item.title}</h1>
      <p className="text-sm w-[85%] mx-auto">{item.description}</p>
    </div>
  );
};

export default Selected;
