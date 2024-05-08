import React from "react";

const ReadItem = ({label, value}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{label}</h2>
      <p>{value}</p>
    </div>
  );
};

export default ReadItem;
