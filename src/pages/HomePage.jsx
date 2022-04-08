import React from 'react';
import { HomeStyle, HomeBody, FeedBody, MessageBody, StoryDiv, MessageFeedBody,FeedArea } from '../styles/HomePageStyle';
import HomeHeader from '../components/HomeHeader';
import Story from '../components/Story';
import PostDiv from '../components/PostDiv';
import MessageBox from '../components/MessageBox';
import MessageBoxHeader from '../components/MessageBoxHeader';


function HomePage() {

  return (
    <HomeStyle>
      <HomeBody>
        <FeedBody>
          <FeedArea>
            <StoryDiv>
              <Story/>
            </StoryDiv>
            <PostDiv />
            <PostDiv />
          </FeedArea>
        </FeedBody>
        <MessageBody>
            <MessageBoxHeader/>
            <MessageFeedBody>
               <MessageBox/>
               <MessageBox/>
               <MessageBox/>
               <MessageBox/>
               <MessageBox/>
               <MessageBox/>
               <MessageBox/>
               <MessageBox/>
               <MessageBox/>
            </MessageFeedBody>
        </MessageBody>
      </HomeBody>
    </HomeStyle>
  );
}

export default HomePage;
