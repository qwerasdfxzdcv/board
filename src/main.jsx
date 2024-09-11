import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Borders from './components/Borders.jsx';

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<App posts={posts} setPosts={setPosts} setSelectedPost={setSelectedPost} />} 
        />
        <Route 
          path="/Borders/:id" 
          element={<Borders posts={posts} setPosts={setPosts} setSelectedPost={setSelectedPost} />}
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
