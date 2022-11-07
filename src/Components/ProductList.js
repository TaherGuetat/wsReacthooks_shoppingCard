import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ list, handelAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {list.map((el) => (
        <ProductCard el={el} key={el.id} handelAdd={handelAdd} />
      ))}
    </div>
  );
};

export default ProductList;
