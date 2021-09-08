import Header from './Header';
import '../styles/App.css';
import Comparsion from './Comparsion';
import Main from './Main';
function App() {
  

  return (
    <div className="page">
      <Header title="Каталог" />
      <Main>
        <Comparsion
        title="Смартфоны" />
      </Main>
    </div>
  );
}

export default App;
