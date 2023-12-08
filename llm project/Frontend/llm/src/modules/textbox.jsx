import React, { useRef, useEffect } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatBox = ({ sendMessage }) => {
  const [userMessage, setUserMessage] = React.useState('');
  const [chatMessages, setChatMessages] = React.useState([]);
  const chatContainerRef = useRef(null);

  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  // Scroll to bottom when chat messages change
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (userMessage.trim() !== '') {
      const newMessage = { text: userMessage, sender: 'user', id: chatMessages.length };
      setUserMessage('');
      setChatMessages(prevMessages => [...prevMessages, newMessage]);

      try {
        const response = await fetch('http://localhost:5000/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();

        const serverResponse = {
          text: data.message,
          sender: 'chatbot',
          id: chatMessages.length + 1, // Incrementing the ID for the chatbot response
        };

        setChatMessages(prevMessages => [...prevMessages, serverResponse]);
        scrollToBottom(); // Scroll to bottom after sending a message
      } catch (error) {
        console.error('Error sending/receiving message:', error);
      }
    }
  };

  const renderChatBubbles = () => {
    return chatMessages.map((msg) => {
      const isUser = msg.sender === 'user';
      const bubbleColor = isUser ? 'black' : '#31c48d';

      return (
        <Box
          key={msg.id}
          sx={{
            display: 'flex',
            justifyContent: isUser ? 'flex-end' : 'flex-start',
            marginBottom: '10px',
          }}
        >
          <Box
            sx={{
              backgroundColor: bubbleColor,
              color: 'white',
              borderRadius: '10px',
              padding: '8px 12px',
              maxWidth: '90%',
            }}
          >
            {msg.text}
          </Box>
        </Box>
      );
    });
  };

  return (

    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        width: '50%',
        left: '350px',
      }}
    >
      
      {/* Wrapping chat messages in a scrollable container */}
      <Box
        ref={chatContainerRef}
        sx={{
          maxHeight: '500px', // Adjust the maximum height as needed
          overflowY: 'auto',
          marginBottom: '10px',
        }}
      >
        {/* Render chat bubbles */}
        {renderChatBubbles()}
      </Box>
      {/* Text box for input */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '10px',
          backgroundColor: 'black',
          color: 'white',
          border: '2px solid #ccc',
        }}
      >
        <TextField
          placeholder="Type your message"
          variant="standard"
          size="small"
          fullWidth
          sx={{
            borderRadius: '10px',
            borderStyle: 'dashed',
            flexGrow: 1,
            backgroundColor: 'none',
            padding: 2,
            '& input': {
              color: 'white',
            },
            '& .MuiInputBase-input': {
              caretColor: 'white',
            },
            '& label': {
              color: 'white !important',
            },
          }}
          value={userMessage}
          onChange={handleUserMessageChange}
        />
        <IconButton
          color="primary"
          aria-label="send message"
          onClick={handleSendMessage}
          sx={{ marginLeft: '5px' }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBox;
