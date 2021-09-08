import React, { useEffect, useState } from "react";

function ReplacementProduct({product, onReplace, find}: {product: any, onReplace: React.MouseEventHandler, find: string}): React.ReactElement {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect (() => {
    setIsVisible(product.name.toLowerCase().includes(find))
  }, [find, product.name])

  if (!isVisible) {
    return <></>;
  } else {
    return (
      <div className="popup__product">
        <button className="popup__button" onClick={() => onReplace(product)}></button>
        <img src={`/images/${product.image}`} alt={product.name} className="popup__image" />
        <p className="popup__text">{product.name}</p>
      </div>
    )
  }
  
  
}

export default ReplacementProduct;