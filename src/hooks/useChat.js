import { useCallback } from 'react'

const useChat = (setMessages) => {
  const addMessage = useCallback(
    (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    },
    [setMessages]
  )

  const streamMessage = useCallback(
    (message) => {
      setMessages((prevMessages) => {
        // Si el último mensaje es del bot, lo actualizamos
        if (prevMessages.length > 0 && prevMessages[prevMessages.length - 1].sender === 'bot') {
          return [...prevMessages.slice(0, -1), message]
        }
        // Si no, agregamos un nuevo mensaje
        return [...prevMessages, message]
      })
    },
    [setMessages]
  )

  return { addMessage, streamMessage }
}

export default useChat