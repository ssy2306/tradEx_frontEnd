import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios correctly

const CommentBox = ({ coinId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getComments', {
          headers: {
            'Content-Type': 'application/json',
          },
          params: { id: coinId },
        });
    
        console.log("->", response, response.data.success, response.data.comments);
    
        if (response.data.success !== true) {
          throw new Error(`Request failed with message: ${response.data.message}`);
        }
    
        const data = response.data;
        setComments(data.comments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setLoading(false);
      }
    };

    fetchComments();
  }, [coinId]);

  return (
    <div>
      <h2>Comments</h2>
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.message.id}>{comment.message.comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentBox;
