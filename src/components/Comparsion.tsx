import React, { useState } from "react";
import '../styles/compare.css';
import '../styles/product.css';
import '../styles/popup.css';
import CompareRow from "./CompareRow";
import ReplacementPopup from "./ReplacementPopup";
import initialProducts from '../data/smartphones.json';
import initialSpecifications from '../data/specifications.json';

function Comparsion(props: any) {
  const [products, setProducts] = useState(initialProducts);
  const [specifications] = useState(initialSpecifications);
  const [quantity, setQuantity] = useState(3);
  const [onlyDifferences, setOnlyDifferences] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [activeProduct, setActiveProduct] = useState<any>(null);
  

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setQuantity(Number(event.currentTarget.textContent));
  }

  const handleOpenPopup = (product: number): void => {
    setActiveProduct(product)
    setIsPopupOpened(true);
  }

  const closePopup = () => {
    setIsPopupOpened(false);
  }

  const handleReplace = (product: any) => {
    setProducts((products:any) => products.map((p:any) => {
      if (p._id === activeProduct._id) {
        return product;
      }
      if (p._id === product._id) {
        return activeProduct;
      }
      return p;
    }));
    closePopup();
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
              products.map((product: any, i: number) => (i < quantity)
                ? (
                  <div key={product._id} className="compare__item product">
                    <img src={`/images/${product.image}`} alt={product.name} className="compare__image" />
                    <h3 className="product__title">{product.name}</h3>
                    <button className="product__arrow-button" onClick={() => handleOpenPopup(product)}/>
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
            specifications.map((spec: any) => (
              <CompareRow 
              key={spec.name}
              quantity={quantity}
              spec={spec}
              products={products}
              onlyDifferences={onlyDifferences}/>
            ))
          }
          {
            isPopupOpened && 
              <ReplacementPopup 
                isOpen={isPopupOpened} 
                products={products.slice(quantity)}
                onClose={closePopup}
                onReplace={handleReplace} />
          }
          
        </div>
      </div>
    </section>
  )
}

export default Comparsion;