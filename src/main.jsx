import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* Estilos Globales (Variables y Reset) */
import './styles/theme.css';
import './styles/base.css';

/* Estilos de Componentes y Utilidades */
import './styles/components.css';
import './styles/animation.css';

/* Estilos de Vistas */
import './styles/views.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
