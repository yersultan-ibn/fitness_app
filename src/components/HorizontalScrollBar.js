import React from "react";

export const HorizontalScrollBar = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};
