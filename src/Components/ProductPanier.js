import React from 'react'

const ProductPanier = ({el,increament,decreament,handleDelete}) => {
  return (
    <tr>
        <td><img src={el.image} width='40px' alt="Product" /></td>
        <td>{el.title}</td>
        <td>{el.price} DT</td>
        <td>
            <button onClick={()=>increament(el)}>+</button>
            <p>{el.qteA}</p>
            <button onClick={()=>decreament(el)}>-</button>
        </td>
        <td>{el.pT}</td>
        <td>
            <button onClick={()=>handleDelete(el)}>x</button>
        </td>
    </tr>
  )
}

export default ProductPanier