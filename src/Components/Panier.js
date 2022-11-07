import React from "react";
import ProductPanier from "./ProductPanier";

export const Panier = ({ panier,total,increament,decreament,handleDelete}) => {
  return (
    <div>
      <button>update Card</button>
      <table border={1}>
        <tr>
          <th>ProductPhoto</th>
          <th>ProductName</th>
          <th>Prix u</th>
          <th>Quantity</th>
          <th>Prix TOTAL</th>
        </tr>
        <tbody>
          {panier.map((el) => (
            <ProductPanier el={el} key={el.id} increament={increament} decreament={decreament} handleDelete={handleDelete}/>
          ))}
        </tbody>
      </table>
      <p>T:{total} DT</p>
    </div>
  );
};
