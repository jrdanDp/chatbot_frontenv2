import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ChatView from './views/Chatview.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatView />} />
      </Routes>
    </Router>
  );
}

export default App;