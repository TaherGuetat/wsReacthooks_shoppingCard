import React from "react";
import { AddProduct } from "./AddProduct";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
const ProductList = ({ list, handelAdd,handleDeleteProd }) => {
  return (
    <div>

    <Link to='/add'>Add Product</Link>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {list.map((el) => (
        <ProductCard el={el} key={el.id} handelAdd={handelAdd} handleDeleteProd={handleDeleteProd} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
