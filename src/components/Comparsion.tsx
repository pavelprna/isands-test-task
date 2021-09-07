import { useState } from "react";
import '../styles/compare.css';
import '../styles/product.css';

function Comparsion(props: any) {
  const [quantity, setQuantity] = useState(3);

  const handleClick = (e: any) => {
    setQuantity(Number(e.target.textContent));
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
              <input type="checkbox" name="differences" id="differences" />
              Показать различия
            </label>
          </div>
          <div className="compare__products">
            {
            props.products.map((product: any, i: number) => (i < quantity) 
              ? (
                <div key={product._id} className="compare__item product">
                  <img src={`/images/${product.image}`} alt={product.name} className="compare__image"/>
                  <h3 className="product__title">{product.name}</h3>
                  <button className="product__arrow-button"></button>
                </div>
              )
              : '')
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default Comparsion;