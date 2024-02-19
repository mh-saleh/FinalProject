import React from "react";

const Container = ({ Child }) => {
  return (
    <section className={`max-w-Container px-[1vw] box-border`}>{Child}</section>
  );
};

export default Container;
