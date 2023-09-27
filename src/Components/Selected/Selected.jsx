import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Select from "../Select/Select";

const Selected = () => {
  let { id } = useParams();
  const [item, setItem] = useState({});
  const data = useLoaderData();
  useEffect(() => {
    const findcategory = data.find((data) => data.id === id);
    setItem(findcategory);
  }, [id, data]);
  //   console.log(item);
  return (
    <div className="mt-10">
      <Select item={item}></Select>
    </div>
  );
};

export default Selected;
