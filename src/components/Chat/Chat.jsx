import { useState, useRef, useEffect } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import useChat from '../../hooks/useChat';
<<<<<<< HEAD
import SummaryButton from './SummaryButton';
import '../../styles/chat.css';
import '../../styles/animation.css';
import '../../styles/SumaryButton.css';
=======
import '../../styles/chat.css';
import '../../styles/animation.css';
>>>>>>> 3ba1d143ba0c1fdab7309cb55ed369554f725765

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(localStorage.getItem('chatSessionId') || null);
  const messagesEndRef = useRef(null);
  const { addMessage, streamMessage } = useChat(setMessages);

  // Guardar sessionId en localStorage
  //useEffect(() => {
  //  if (sessionId) {
   //   localStorage.setItem('chatSessionId', sessionId);
   // }
  //}, [sessionId]);

  // Auto-scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    // Agregar mensaje del usuario
    addMessage({ text: inputValue, sender: 'user' });
    setInputValue('');
    setIsTyping(true);

    try {
      const requestBody = {
        user_input: inputValue,
        ...(sessionId && { session_id: sessionId })
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      // Obtener sessionId de los headers
      const newSessionId = response.headers.get('x-session-id');
      if (newSessionId && newSessionId !== sessionId) {
        setSessionId(newSessionId);
      }

      // Procesar stream SSE
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let messageContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonData = line.substring(6).trim();
              if (jsonData) {
                // Extraer solo el texto del mensaje
                const data = JSON.parse(jsonData);
                const text = data.message || jsonData;
                messageContent = text;
                streamMessage({ text: messageContent, sender: 'bot' });
              }
            } catch (err) {
              console.error('Error procesando mensaje:', err);
              // Si falla el parseo, mostrar el contenido directo
              messageContent = line.substring(6).trim();
              streamMessage({ text: messageContent, sender: 'bot' });
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      addMessage({
        text: 'Error de conexión. Por favor intenta nuevamente.',
        sender: 'bot'
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
<<<<<<< HEAD

      <SummaryButton 
        sessionId={sessionId} 
        messageCount={messages.filter(m => m.sender === 'user').length} 
      />

=======
>>>>>>> 3ba1d143ba0c1fdab7309cb55ed369554f725765
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          className="input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe tu mensaje..."
          disabled={isTyping}
        />
        <button 
          type="submit" 
          className="button primary-button"
          disabled={!inputValue.trim() || isTyping}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;