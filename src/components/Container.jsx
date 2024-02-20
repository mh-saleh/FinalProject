import React from "react";

const Container = ({ child }) => {
  return (
    <section className={`max-w-Container px-[1vw] box-border`}>{child}</section>
  );
};

export default Container;
