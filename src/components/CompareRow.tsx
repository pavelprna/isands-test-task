import { useEffect, useState } from "react";

function CompareRow({spec, products, quantity, onlyDifferences}: any) {
  
  const [isEqual, setIsEqual] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const valuesArray = products.map((product: any, i: number) => product[spec.name]);
    setValues(valuesArray.slice(0, quantity));
  }, [quantity, spec.name, products]);

  useEffect(() => {
    setIsEqual( values.every( v => v === values[0]));
  }, [values])

  if (isEqual && onlyDifferences) {
    return null;
  } else {
    return (
      <div className="compare__row">
        <p className="product__specification compare__differences">{spec.title}</p>
        {
          values.map((value, i) => {
            if (typeof(value) === "boolean") {
              
            }
              return <p key={i} className="product__specification">{value}</p>
            
          })
        }
      </div>
    )
  }
}

export default CompareRow;