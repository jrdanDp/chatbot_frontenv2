
import Header from '../components/Common/Header';
import SecurityBadge from '../components/Common/SecurityBadge';
import Chat from '../components/Chat/Chat.jsx';
import '../styles/chat-view.css';

const ChatView = () => {
  return (
    <div className="chat-view">
      <Header variant="chat" showExitButton={true} />
      
      <main className="chat-main-container">
        <Chat />
      </main>

      <footer className="chat-security-footer">
        <span className="security-icon">🔒</span>
        <span>Tus conversaciones no se guardan. SerenBot es completamente anónimo.</span>
      </footer>
      
    </div>
  );
};

export default ChatView;
