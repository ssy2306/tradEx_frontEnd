import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentBox = ({ coinId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        console.log(coinId);
        const params = {
          id: coinId
        };
        console.log(params);
        const response = await axios.get('http://localhost:3000/getComments', {
  params});


        if (response.data.success !== true) {
          throw new Error(`Request failed with message: ${response.data.message}`);
        }

        const data = response.data;

        const Comments = response.data.comments.filter(comment => comment.coinid === coinId);
        setComments(Comments);
      
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setLoading(false);
      }
    };

    fetchComments();
  }, [coinId]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/postComment', {
        id: coinId,
        comment: newComment,
      });
      console.log(response);

      if (response.data.success !== true) {
        throw new Error(`Request failed with message: ${response.data.message}`);
      }

      // Clear the comment input after successful submission
      setNewComment('');

      // Reload the comments
      fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };


  return (
    <div>
      <h2>Comments</h2>
      {/* Comment Input Box */}
      <div>
        <textarea
          placeholder="Enter your comment here..."
          value={newComment}
          onChange={handleCommentChange}
          style={commentInputStyle}
        />
        <button onClick={handleCommentSubmit} style={submitButtonStyle}>
          Post Comment
        </button>
      </div>
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} style={commentBoxStyle}>
              <div style={userInfoStyle}>
                <span>{comment.userid || 'Anonymous'}</span>
                <span>{formatDate(comment.datecreated)}</span>
              </div>
              <div style={commentTextStyle}>{comment.comment}</div>
            </div>
          ))}
        </div>
      )}
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

const commentHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const commentUserStyle = {
  fontWeight: 'bold',
};

const commentTimeStyle = {
  color: '#666',
};

const commentContentStyle = {
  marginTop: '8px',
};


const commentBoxStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  margin: '10px 0',
  padding: '10px',
};

const userInfoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
};

const commentTextStyle = {
  wordWrap: 'break-word',
};

const formatDate = (dateString) => {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

export default CommentBox;
