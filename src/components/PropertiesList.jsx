import React from "react";
import Property from "./Property";

const PropertiesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-[90%]  mx-auto">
      {Array.from({ length: 20 }).map((_, i) => (
        <Property key={i} />
      ))}
    </div>
  );
};

export default PropertiesList;
