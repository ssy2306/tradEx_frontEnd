// CommunityChat.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box'

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({ name: '', chat: '' });

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getCommunityChat');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/postCommunityChat', newMessage);
      setNewMessage({ name: '', chat: '' });
      fetchMessages(); // Refresh messages after posting a new one
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []); // Fetch messages when the component mounts

  return (
    <Box sx={{
        marginLeft: '270px'}}>
      <h2>Community Chat</h2>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.name}:</strong> {message.chat}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={newMessage.name}
          onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
        />
        <br />
        <textarea
          placeholder="Type your message here..."
          value={newMessage.chat}
          onChange={(e) => setNewMessage({ ...newMessage, chat: e.target.value })}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </Box>
  );
};

export default CommunityChat;
