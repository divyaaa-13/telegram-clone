import React, { useState } from "react";
import SavedIcon from '@mui/icons-material/TurnedInNot';
import StoriesIcon from '@mui/icons-material/DonutLargeSharp';
import ContactsIcon from '@mui/icons-material/PermIdentityRounded';
import SettingsIcon from '@mui/icons-material/SettingsRounded';
import DarkIcon from '@mui/icons-material/Brightness2Outlined';
import AnimationIcon from '@mui/icons-material/AnimationOutlined';
import HelpOutIcon from '@mui/icons-material/HelpOutlineOutlined';
import BugIcon from '@mui/icons-material/PestControlOutlined';
import AIcon from '@mui/icons-material/FontDownloadOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import "./Options.css"; // Make sure to include styles for Options

function Options(){
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleMode = () => {
        setIsLightMode(prevMode => !prevMode);
    };

    return (
      <div className="options"
       style={{ 
        backgroundColor: isLightMode ? 'white' : '#212121fa',
        color : isLightMode ? "black" : "white"
         }}>
        <div className="options-container saved">
          <SavedIcon />
          <p>Saved Messages</p>
        </div>
        <div className="options-container stories">
          <StoriesIcon />
          <p>Stories</p>
        </div>
        <div className="options-container contacts">
          <ContactsIcon />
          <p>Contacts</p>
        </div>
        <div className="options-container settings">
          <SettingsIcon />
          <p>Settings</p>
        </div>
        <div className="options-container dark-mode">
          <DarkIcon style={{ display: isLightMode ? 'none' : 'inline-block' }} onClick={toggleMode} />
          <p>Dark Mode</p>
          <i className="fa-solid fa-toggle-on toggle dark-mode" onClick={toggleMode} style={{ display: isLightMode ? 'none' : 'inline-block' }}></i>
          <i className="fa-solid fa-toggle-off toggle light-mode" onClick={toggleMode} style={{ display: isLightMode ? 'inline-block' : 'none' }}></i>
        </div>
        <div className="options-container animation">
          <AnimationIcon />
          <p>Animation</p>
        </div>
        <div className="options-container features">
          <HelpOutIcon />
          <p>Telegram Features</p>
        </div>
        <div className="options-container report">
          <BugIcon />
          <p>Report Bug</p>
        </div>
        <div className="options-container switch">
          <AIcon />
          <p>Switch to A Version</p>
        </div>
        <div className="options-container install">
          <AddIcon />
          <p>Install</p>
        </div>
        <div className="version"
        style={{ color : isLightMode ? "#707579" : "#AAAAAA"}}
        >Telegram WebK 2.1.0(517)</div>
      </div>
    );
}

export default Options;
