import React, { useState } from 'react';
import axios from 'axios';

const CommentInputBox = ({ coinId, onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/postComments', {
        id: coinId,
        comment: comment,
      });

      if (response.data.success !== true) {
        throw new Error(`Request failed with message: ${response.data.message}`);
      }

      // Clear the comment input after successful submission
      setComment('');

      // Trigger a callback to update the comments in the parent component
      onCommentSubmit();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      <h2>Add a Comment</h2>
      <textarea
        placeholder="Enter your comment here..."
        value={comment}
        onChange={handleCommentChange}
        style={commentInputStyle}
      />
      <button onClick={handleCommentSubmit} style={submitButtonStyle}>
        Post Comment
      </button>
    </div>
  );
};

const commentInputStyle = {
  width: '100%',
  minHeight: '80px',
  padding: '8px',
  marginBottom: '10px',
};

const submitButtonStyle = {
  padding: '8px',
  cursor: 'pointer',
};

export default CommentInputBox;
