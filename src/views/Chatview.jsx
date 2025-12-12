<<<<<<< HEAD
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
=======
import Chat from '../components/Chat/Chat.jsx';
import '../styles/views.css';

const ChatView = () => {

  return (
    <div className="chat-view-container">

      <header className="chat-header">
        <h1>SerenBot</h1>
      </header>
      <Chat />
>>>>>>> 3ba1d143ba0c1fdab7309cb55ed369554f725765
    </div>
  );
};

export default ChatView;