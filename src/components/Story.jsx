import React from 'react';
import { useTheme } from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Avatar from '@material-ui/core/Avatar';
import {AddStory,StoryUsername,StoryBody,UserStory  } from '../styles/StoryStyles';


function Story() {
    const theme = useTheme();

    
    const avatarStyle = {
        color: "#fff",
        fontSize:"30px",
        padding:"15px",
        background:"green"
    };
    const avatarStyle1 = {
      color: "#fff",
      fontSize:"30px",
      padding:"15px",
      border:"3px solid #C1005B",
      background:"orange"
      
  };
 

  return (
    <StoryBody>
       <AddStory>
              <Avatar style={avatarStyle}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
        </AddStory>
         
      <Tabs
        
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        > 
        
          
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
         <UserStory>
              <Avatar style={avatarStyle1}>H</Avatar>
              <StoryUsername>Add Yours</StoryUsername>
         </UserStory>
        
         
      </Tabs>
      </StoryBody>
  );
}

export default Story;