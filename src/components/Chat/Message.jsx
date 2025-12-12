import { useState, useEffect } from 'react'

const Message = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (message.sender === 'user') {
      setDisplayedText(message.text)
      return
    }

    if (currentIndex < message.text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(message.text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 20) // Ajusta este valor para cambiar la velocidad de escritura

      return () => clearTimeout(timeoutId)
    }
  }, [message.text, currentIndex, message.sender])

  return (
    <div className={`message ${message.sender}`}>
      <div className="message-content">{displayedText}</div>
    </div>
  )
}

export default Message