import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Borders from './components/Borders.jsx';

const Main = () => {
  const [posts, setPosts] = useState([]);  // 게시글 리스트
  const [selectedPost, setSelectedPost] = useState(null);  // 선택된 게시글

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<App posts={posts} setPosts={setPosts} setSelectedPost={setSelectedPost} />} 
        />
        <Route 
          path="/Borders" 
          element={<Borders selectedPost={selectedPost} />} 
        />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
