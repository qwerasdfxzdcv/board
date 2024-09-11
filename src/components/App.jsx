import { useState } from 'react';
import { Link } from 'react-router-dom';


const App = ({ posts, setPosts, setSelectedPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    if (title && content) {
      setPosts([...posts, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div style={{ padding: '20px', width: '300px', margin: '0 auto' }}>
      <h2>게시글 작성</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '5px' }}
      />
      <button onClick={handleAddPost} style={{ width: '100%', padding: '10px' }}>
        Add
      </button>

      <h3>게시글 리스트</h3>
      <ul style={{ padding: '0', listStyle: 'none' }}>
        {posts.map((post, index) => (
          <li key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <Link to="/borders" onClick={() => setSelectedPost(post)} style={{  color: 'black' }}>
              <h4>{post.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
