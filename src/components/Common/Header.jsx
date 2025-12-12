import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ variant = 'default', showExitButton = false }) => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  if (variant === 'chat') {
    return (
      <header className="header header-chat">
        <div className="header-content container">
          <Link to="/" className="header-logo">
            <span className="logo-icon">🧠</span>
            SerenBot
          </Link>
          {showExitButton && (
            <button className="button button-sm button-outline" onClick={handleExit}>
              Salir
            </button>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className="header header-default">
      <div className="header-content container">
        <Link to="/" className="header-logo">
          <span className="logo-icon">🧠</span>
          SerenBot
        </Link>
        <nav className="header-nav">
          <Link to="/" className="header-link">Inicio</Link>
          <Link to="/chat" className="header-link">Chat</Link>
          <a href="#about" className="header-link">Sobre SerenBot</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
