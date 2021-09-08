import React, { useState } from "react";
import '../styles/compare.css';
import '../styles/product.css';
import '../styles/popup.css';
import CompareRow from "./CompareRow";
import ReplacementPopup from "./ReplacementPopup";

function Comparsion(props: any) {
  const [quantity, setQuantity] = useState(3);
  const [onlyDifferences, setOnlyDifferences] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setQuantity(Number(event.currentTarget.textContent));
  }

  const handleOpenPopup = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsPopupOpened(true);
  }

  const closePopup = () => {
    setIsPopupOpened(false);
  }

  const handleReplace = () => {

  }

  const changeOnlyDifferences = (): void => {
    setOnlyDifferences(!onlyDifferences);
  }

  return (
    <section className="compare section">
      <div className="section__container compare__container">
        <h1 className="compare__title">{props.title}</h1>
        <p className="compare__quantity compare__text">
          Отобразить товары:
          <button className={`compare__button ${quantity === 2 ? 'compare__button_active' : ''}`} onClick={handleClick}>2</button>
          <button className={`compare__button ${quantity === 3 ? 'compare__button_active' : ''}`} onClick={handleClick}>3</button>
          <button className={`compare__button ${quantity === 4 ? 'compare__button_active' : ''}`} onClick={handleClick}>4</button>
          <button className={`compare__button ${quantity === 5 ? 'compare__button_active' : ''}`} onClick={handleClick}>5</button>
          <button className={`compare__button ${quantity === 6 ? 'compare__button_active' : ''}`} onClick={handleClick}>6</button>
        </p>
        <div className="compare__table">
          <div className="compare__differences">
            <label htmlFor="differences" className="compare__text">
              <input type="checkbox" name="differences" id="differences" onClick={changeOnlyDifferences}/>
              Показать различия
            </label>
          </div>
          <div className="compare__products">
            {
              props.products.map((product: any, i: number) => (i < quantity)
                ? (
                  <div key={product._id} className="compare__item product">
                    <img src={`/images/${product.image}`} alt={product.name} className="compare__image" />
                    <h3 className="product__title">{product.name}</h3>
                    <button className="product__arrow-button" onClick={handleOpenPopup}/>
                  </div>
                )
                : '')
            }
          </div>

        </div>

      </div>
      <div className="compare__wrapper">
        <div className="section__container">
          {
            props.specifications.map((spec: any) => (
              <CompareRow 
              key={spec.name}
              quantity={quantity}
              spec={spec}
              products={props.products}
              onlyDifferences={onlyDifferences}/>
            ))
          }
          {
            isPopupOpened && 
              <ReplacementPopup 
                isOpen={isPopupOpened} 
                products={props.products}
                onClose={closePopup}
                onReplace={handleReplace} />
          }
          
        </div>
      </div>
    </section>
  )
}

export default Comparsion;