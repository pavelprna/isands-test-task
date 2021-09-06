import '../styles/header.css';
import '../styles/section.css';

function Header(prop: { title: String }) {
  return (
    <header className="header section">
      <div className="section__container">
        <h2 className="header__title">{prop.title}</h2>
        
      </div>
    </header>
  )
}

export default Header;
