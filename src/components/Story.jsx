import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
function Story() {

    const iconStyle = {
        color: "#fff",
        fontSize:"10px",
        justifyContent: "flex-start",
        fontFamily: "'Work Sans', sans-serif",
    };
    const avatarStyle = {
        color: "#fff",
        fontSize:"30px",
        padding:"15px"
        
    };

  return (
    <div>
      <Tabs
        
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Item One" icon={<Avatar style={avatarStyle}>H</Avatar>} style={iconStyle}/>
          <Tab label="Item Two" icon={<Avatar style={avatarStyle}>H</Avatar>}  style={iconStyle}/>
          <Tab label="Item Three" icon={<Avatar style={avatarStyle}>H</Avatar>}  style={iconStyle}/>
          <Tab label="Item Four" icon={<Avatar style={avatarStyle}>H</Avatar>}  style={iconStyle}/>
          <Tab label="Item Five" icon={<Avatar style={avatarStyle}>H</Avatar>} style={iconStyle}/>
          <Tab label="Item Six" icon={<Avatar style={avatarStyle}>H</Avatar>}  style={iconStyle}/>
          <Tab label="Item Seven" icon={<Avatar style={avatarStyle}>H</Avatar>} style={iconStyle}/>
        </Tabs>
      
    </div>
  );
}

export default Story;