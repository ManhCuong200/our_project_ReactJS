import React, { useState } from "react";

const FilterBar = ({ categories }) => {
  const [active, setActive] = useState("");

  return (
    <div className="relative z-20 flex justify-center -mt-9">
      <div className="flex bg-white rounded-xl shadow-lg px-8 py-4 space-x-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`font-medium text-[15px] cursor-pointer ${
              active === category || (active === "" && category === "All")
                ? "bg-[#6ea544] text-white px-4 py-2 rounded-lg "
                : "text-gray-900 hover:text-[#6ea544]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
