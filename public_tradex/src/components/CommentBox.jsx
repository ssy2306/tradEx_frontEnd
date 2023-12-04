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
          params: { coinId },  // Pass params as an object
        });

        console.log("->", response);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = response.data;  // Access the data directly, no need for response.json()
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
            <li key={comment.id}>{comment.comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentBox;
