import React from "react";
import "./ChatWindow.css";
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SmileIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MicIcon from '@mui/icons-material/KeyboardVoiceRounded';

function ChatWindow({ selectedChat }) {
  return (
    <div className="chat-window">
      {selectedChat && (
        <div className="chat-window-header">
          <img 
            src="./public/logo192.png" 
            alt="profile" 
            style={{ backgroundColor: selectedChat.imageColor }} 
          />
          <div className="chat-header-name">
            <h2 className="chat-heading">
              {selectedChat.name}
            </h2>
            <h4 className="chat-subheading">
              last seen {selectedChat.updatedAt}
            </h4>
          </div>
          <PhoneIcon className="app-icon icon" />
          <SearchIcon className="app-icon icon" />
          <MoreVertIcon className="app-icon icon" />
        </div>
      )}
      <div className="message-box">
        <div className="message-bubble">
          <SmileIcon className="icon" />
          <input type="text" placeholder="Message" />
          <i className="fa-solid fa-paperclip icon"></i>
        </div>
        <div className="mic">
          <MicIcon className="mic-icon" />
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
