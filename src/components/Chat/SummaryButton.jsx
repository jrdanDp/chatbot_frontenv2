import { useState } from 'react';
import "../../styles/SumaryButton.css";


const SummaryButton = ({ sessionId, messageCount }) => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage({ text: 'Por favor ingresa un correo válido', type: 'error' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/summary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          email: email.trim()
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Error al enviar el resumen');

      setMessage({ 
        text: '¡Resumen enviado exitosamente! Revisa tu correo.', 
        type: 'success' 
      });
      setEmail('');
      setTimeout(() => setShowForm(false), 2000);
    } catch (error) {
      setMessage({ 
        text: error.message || 'Error al enviar el resumen', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (messageCount < 4) return null;

  return (
    <div className="summary-container">
      {!showForm ? (
        <button 
          className="summary-button"
          onClick={() => setShowForm(true)}
          title="Solicitar resumen por correo"
        >
          📩 Enviar resumen
        </button>
      ) : (
        <div className="summary-form-container">
          <form onSubmit={handleSubmit} className="summary-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              disabled={isLoading}
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
            <button 
              type="button" 
              onClick={() => {
                setShowForm(false);
                setMessage({ text: '', type: '' });
              }}
              disabled={isLoading}
            >
              Cancelar
            </button>
          </form>
          {message.text && (
            <div className={`summary-message ${message.type}`}>
              {message.text}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SummaryButton;