import Header from './Header';
import '../styles/App.css';
import Comparsion from './Comparsion';
import Main from './Main';
import initialProducts from '../data/smartphones.json';
import initialSpecifications from '../data/specifications.json';
import { useState } from 'react';

function App() {
  const [products] = useState(initialProducts || null);
  const [specifications] = useState(initialSpecifications || null);

  return (
    <div className="page">
      <Header title="Каталог" />
      <Main>
        <Comparsion
        title="Смартфоны"
        products={products}
        specifications={specifications} />
      </Main>
    </div>
  );
}

export default App;
