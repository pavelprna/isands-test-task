import Header from './Header';
import '../styles/App.css';
import Comparsion from './Comparsion';
import Main from './Main';
import initialProoducts from '../data/smartphones.json';
import { useState } from 'react';

function App() {
  const [products] = useState(initialProoducts || null);

  return (
    <div className="page">
      <Header title="Каталог" />
      <Main>
        <Comparsion
        title="Смартфоны"
        products={products} />
      </Main>
    </div>
  );
}

export default App;
