import { useCallback } from 'react';

const useChat = (setMessages) => {
  const addMessage = useCallback(
    (message) => {
      const messageWithId = { ...message, id: Date.now() };
      setMessages((prevMessages) => [...prevMessages, messageWithId]);
    },
    [setMessages]
  );

  const streamMessage = useCallback(
    (message) => {
      setMessages((prevMessages) => {
        // Si el último mensaje es del bot, lo actualizamos
        if (prevMessages.length > 0 && prevMessages[prevMessages.length - 1].sender === 'bot') {
          const lastMessage = prevMessages[prevMessages.length - 1];
          // Mantener el ID original del mensaje que se está actualizando
          const updatedMessage = { ...message, id: lastMessage.id };
          return [...prevMessages.slice(0, -1), updatedMessage];
        }
        // Si no, agregamos un nuevo mensaje con un nuevo ID
        const newMessage = { ...message, id: Date.now() };
        return [...prevMessages, newMessage];
      });
    },
    [setMessages]
  );

  return { addMessage, streamMessage };
};

export default useChat;