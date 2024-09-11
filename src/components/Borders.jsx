import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Borders = ({ posts, setPosts, setSelectedPost }) => {
  const { id } = useParams();
  const postId = parseInt(id);
  const selectedPost = posts.find((post) => post.id === postId);
  const [isEditing, setIsEditing] = useState(false);  // 수정 모드 관리
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  if (!selectedPost) {
    return <div>
      <h2>해당 게시글을 찾을 수 없습니다.</h2>
      <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
        <button>목록으로 돌아가기</button>
      </Link>
      </div>
    
    
  }
  // 수정 모드로 전환
  const handleEditClick = () => {
    setIsEditing(true);
    setEditTitle(selectedPost.title);
    setEditContent(selectedPost.content);
  };

  // 수정 완료 후 저장
  const handleSaveEdit = () => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, title: editTitle, content: editContent } : post
    );
    setPosts(updatedPosts);
    setIsEditing(false);
  };

  // 게시글 삭제
  const handleDeleteClick = () => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    setSelectedPost(null);  // 삭제 후 선택된 게시글 초기화
  };

  return (
    <div style={{ padding: '20px', width: '300px', margin: '0 auto' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '5px' }}
          />
          <button onClick={handleSaveEdit} style={{ width: '100%', padding: '10px' }}>
            저장
          </button>
        </>
      ) : (
        <>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={handleEditClick} style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
            수정
          </button>
          <button onClick={handleDeleteClick} style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
            삭제
          </button>
        </>
      )}
      <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
        <button>목록으로 돌아가기</button>
      </Link>
    </div>
  );
};

export default Borders;
