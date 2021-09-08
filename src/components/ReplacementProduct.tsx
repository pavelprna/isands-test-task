import React from "react";

function ReplacementProduct({product, onReplace}: {product: any, onReplace: React.MouseEventHandler}): React.ReactElement {
  return (
    <div className="popup__product">
      <button className="popup__button" onClick={onReplace}></button>
      <img src={`/images/${product.image}`} alt={product.name} className="popup__image" />
      <p className="popup__text">{product.name}</p>
    </div>
  )
}

export default ReplacementProduct;