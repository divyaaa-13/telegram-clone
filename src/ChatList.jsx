import React, { useState, useEffect } from "react";
import "./ChatList.css";
import Chat from "./Chat";
import CategoryIcon from '@mui/icons-material/DensityMediumRounded';
import SearchIcon from '@mui/icons-material/Search';
import Options from "./Options"; // Import the Options component

function ChatList({ onSelectChat }) {
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [showOptions, setShowOptions] = useState(false); // State to manage options visibility

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch("https://devapi.beyondchats.com/api/get_all_chats?page=1");
        const data = await response.json();
        const processedChats = data.data.data.map((chat) => ({
          id: chat.id,
          name: chat.creator.name || generateRandomNumber().toString(),
          messageCount: chat.msg_count || generateRandomNumberBetween(0, 100),
          createdAt: formatCreatedAt(chat.created_at),
          updatedAt: formatUpdatedAt(chat.updated_at),
          imageColor: getRandomColor(), // Generate random color for each chat
        }));
        setChats(processedChats);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchChats();
  }, []);

  const generateRandomNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000);
  };

  const generateRandomNumberBetween = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1));
  };

  const formatCreatedAt = (createdAt) => {
    const dateObj = new Date(createdAt);
    const currentDate = new Date();
    const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));

    if (dateObj > oneWeekAgo) {
      // Less than a week ago, display weekday
      const options = { weekday: 'long' };
      return dateObj.toLocaleDateString('en-US', options);
    } else {
      // More than a week ago, display month and date
      const options = { month: 'short', day: 'numeric' };
      return dateObj.toLocaleDateString('en-US', options);
    }
  };

  const formatUpdatedAt = (updatedAt) => {
    const dateObj = new Date(updatedAt);
    const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
    return dateObj.toLocaleDateString('en-US', options);
  };

  const getRandomColor = () => {
    // Generate a random color in hexadecimal format
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const handleChatClick = (chat) => {
    setSelectedChatId(chat.id);
    onSelectChat(chat);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="chat-list"
    >
      <div className="chatlist-header">
        <CategoryIcon className="icon" onClick={toggleOptions} />
        <div className="chatlist-searchbar">
          <SearchIcon className="chatlist-searchbar-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {showOptions && <Options />} {/* Conditionally render Options */}
      <div className="chat-container">
        {chats.map((chat) => (
          <Chat
            key={chat.id}
            name={chat.name}
            msgCount={chat.messageCount}
            createdAt={chat.createdAt}
            updatedAt={chat.updatedAt}
            imageColor={chat.imageColor} // Pass the imageColor prop
            onClick={() => handleChatClick(chat)} // Handle click event
            isSelected={chat.id === selectedChatId} // Pass selection state
          />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
