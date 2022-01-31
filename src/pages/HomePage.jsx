import React from 'react';
import { HomeStyle, HomeBody, FeedBody, MessageBody, StoryDiv, PostDiv, PostHeader, PostProfile } from '../styles/HomePageStyle';
import HomeHeader from '../components/HomeHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function HomePage() {
  
  const iconStyle = {
    color: "black",
    marginRight: "10px",
  };

  const dpStyle = {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
  };

  return (
    <HomeStyle>
      <HomeHeader />
      <HomeBody>
        <FeedBody>
          <StoryDiv></StoryDiv>
          <PostDiv>
            <PostHeader>
              <PostProfile>
                
              </PostProfile>
              <MoreVertIcon style={iconStyle} />
            </PostHeader>
          </PostDiv>
        </FeedBody>
        <MessageBody>
        
        </MessageBody>
      </HomeBody>
    </HomeStyle>
  );
}

export default HomePage;
