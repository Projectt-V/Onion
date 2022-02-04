import React from 'react';
import { HomeStyle, HomeBody, FeedBody, MessageBody, StoryDiv } from '../styles/HomePageStyle';
import HomeHeader from '../components/HomeHeader';
import PostDiv from '../components/PostDiv';



function HomePage() {
  

  return (
    <HomeStyle>
      <HomeHeader />
      <HomeBody>
        <FeedBody>
          <StoryDiv></StoryDiv>
          <PostDiv />
          <PostDiv />
        </FeedBody>
        <MessageBody>
        
        </MessageBody>
      </HomeBody>
    </HomeStyle>
  );
}

export default HomePage;
