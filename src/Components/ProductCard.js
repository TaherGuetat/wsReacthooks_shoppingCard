import React from 'react'


const ProductCard = ({el,handelAdd}) => {
  return (
    <div style={{marginTop:'10px' ,borderStyle:'solid'}}>
        <img src={el.image} alt="Product" width={'85px'} />
        <h5>{el.title}</h5>
        <p>{el.price} DT</p>
        <p>{el.QtS}</p>
        <button onClick={()=>handelAdd(el)}>AddToCard</button>
    </div>
  )
}

export default ProductCard