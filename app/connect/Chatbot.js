import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState(''); // Track user's input

  const responses = [
    'Welcome to your fitness journey! How can I assist you with your workout or diet today?',
    'Looking to achieve specific fitness goals? Lets discuss your workout plan and dietary preferences',
    'Im here to support your fitness goals! Tell me more about your current fitness routine and dietary habits.',
    'Interested in a personalized workout regimen or dietary advice? Feel free to share your questions or concerns',
    'Im here to assist you!',
    'Ready to boost your fitness and nutrition knowledge? Lets explore workout routines and healthy eating options'
  ];

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleUserMessage = () => {
    if (inputMessage.trim() === '') return; // Don't add empty messages

    // Add the user's message to the chat log
    const newUserMessage = { text: `User: ${inputMessage}`, user: true };
    setMessages([...messages, newUserMessage]);

    // Clear the input field
    setInputMessage('');

    // Simulate chatbot response
    setTimeout(() => {
      const response = getRandomResponse();
      const newChatbotMessage = { text: `Leo: ${response}`, user: false };
      setMessages([...messages, newChatbotMessage]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'user' : 'chatbot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          className="input-text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleUserMessage} className="button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
