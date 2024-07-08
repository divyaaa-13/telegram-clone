import React from "react";
import "./Chat.css";

function Chat({ name, msgCount, createdAt, imageColor, onClick, isSelected }) {
  return (
    <ul className="chatlist-box">
      <li
        className="chat"
        onClick={onClick}
        style={{ backgroundColor: isSelected ? "#907fe3" : "transparent" }}
      >
        <img style={{ backgroundColor: imageColor }} />
        <div className="chat-name">
          <h2 className="chat-name-heading">{name}</h2>
          <h4 
          className="chat-name-subheading"
          style={{ color: isSelected ? "white" : "#AAAAAA" }}
          >This is a new message...</h4>
        </div>
        <div className="corner-box">
          <p
          style={{color : isSelected ? "white" : "AAAAAA"}}
          >{createdAt}</p>
          <div className="unread">
            <p
            style={{
              backgroundColor : isSelected ? "white" : "#707579",
              color : isSelected ? "#707579" : "white"
              }}
            >{msgCount}</p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Chat;
