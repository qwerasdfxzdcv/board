import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Borders from './components/Borders.jsx';
import { api } from './api/index.js';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const getPosts = async ()=>{
    const {data} = await api("/api/boards","get")
    setPosts(data)
  }
  useEffect(()=>{
    getPosts()
  },[])

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
        <Route
          path="/register"
          element={<Register/>} >
        </Route>
        <Route path="/login"
           element={<Login/>}>
        </Route>
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
