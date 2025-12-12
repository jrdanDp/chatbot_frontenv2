import './Footer.css';

const Footer = ({ hideBackground = false }) => {
  return (
    <footer className={`footer ${hideBackground ? 'footer-transparent' : ''}`}>

      <div className="footer-bottom">
        <p>&copy; 2025 SerenBot. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
