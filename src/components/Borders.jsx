import React from 'react';
import { Link } from 'react-router-dom';

const Borders = ({ selectedPost }) => {
  if (!selectedPost) {
    return <h2>해당 게시글을 찾을 수 없습니다.</h2>;
  }

  return (
    <div style={{ padding: '20px', width: '300px', margin: '0 auto' }}>
      <h2>{selectedPost.title}</h2>
      <p>{selectedPost.content}</p>
      <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
        ← 목록으로 돌아가기
      </Link>
    </div>
  );
};

export default Borders;
