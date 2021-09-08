import React, { useState } from "react";
import ReplacementProduct from "./ReplacementProduct";

type ReplacementPopupProps = {
  products: {
    _id: string,
  }[],
  isOpen: boolean,
  onClose: Function,
  onReplace: React.MouseEventHandler
}

function ReplacementPopup({ products, isOpen, onClose, onReplace } : ReplacementPopupProps): JSX.Element {
  const [value, setValue] = useState<string>('');

  const handleChange = (event : React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value);
  }

  const handleReplace = (product: any) => {
    onReplace(product);
  }

  return (
    <div className="popup">
      <input type="text" value={value} onChange={handleChange} className="popup__input" placeholder="Поиск" />
      {
        products.map((product) => <ReplacementProduct product={product} key={product._id} onReplace={handleReplace} find={value.toLowerCase()}/>)
      }
    </div>
  )
}

export default ReplacementPopup;