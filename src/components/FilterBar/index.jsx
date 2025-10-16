import React, { useState } from "react";

const FilterBar = ({ categories, tech, handlefilter }) => {
  const [active, setActive] = useState("");
  // const onClickFilter = (category) => {
  //   // debugger;
  //   console.log("category thao:", category);
  //   setActive(category);
  //   handlefilter(category);
  // };

  return (
    <div className="relative z-20 flex justify-center -mt-9 px-4 sm:px-0">
      <div
        className="
          flex flex-wrap sm:flex-nowrap justify-center sm:justify-start
          bg-white rounded-xl shadow-lg px-4 sm:px-8 py-3 sm:py-4 
          gap-3 sm:space-x-8
          w-full sm:w-auto
        "
      >
        {/* {categories.map((category) => (
          <button
            key={category}
            onClick={() => handlefilter(category)}
            className={`font-medium text-[14px] sm:text-[15px] cursor-pointer ${
              active === category || (active === "" && category === "All")
                ? "bg-[#6ea544] text-white px-4 py-2 rounded-lg"
                : "text-gray-900 hover:text-[#6ea544]"
            }`}
          >
            {category}
          </button>
        ))} */}

        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => handlefilter(item.name)}
            className={`font-medium text-[14px] sm:text-[15px] cursor-pointer ${
              active === item.name || (active === "" && item.name === "All")
                ? "bg-[#6ea544] text-white px-4 py-2 rounded-lg"
                : "text-gray-900 hover:text-[#6ea544]"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
