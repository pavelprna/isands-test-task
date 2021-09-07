import { useState } from "react";
import '../styles/compare.css';

function Comparsion(props: any) {
  const [quantity, setQuantity] = useState(3);

  const handleClick = (e: any) => {
    setQuantity(Number(e.target.textContent));
    console.log(quantity);
  }
  return (
    <section className="compare section">
      <div className="section__container compare__container">
        <h1 className="compare__title">{props.title}</h1>
        <div className="compare__quantity">
          <p className="compare__quantity-text">
            Отобразить товары:
            <button className={`compare__button ${quantity === 2 ? 'compare__button_active' : ''}`} onClick={handleClick}>2</button>
            <button className={`compare__button ${quantity === 3 ? 'compare__button_active' : ''}`} onClick={handleClick}>3</button>
            <button className={`compare__button ${quantity === 4 ? 'compare__button_active' : ''}`} onClick={handleClick}>4</button>
            <button className={`compare__button ${quantity === 5 ? 'compare__button_active' : ''}`} onClick={handleClick}>5</button>
            <button className={`compare__button ${quantity === 6 ? 'compare__button_active' : ''}`} onClick={handleClick}>6</button>
          </p>
        </div>
        <div className="compare__table">
          <div className="compare__differences">
            <input type="checkbox" name="differences" id="differences" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Comparsion;