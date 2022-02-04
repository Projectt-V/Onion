import React from 'react';
import { HomeStyle, HomeBody, FeedBody, MessageBody, StoryDiv, PostDiv, PostHeader, PostProfile, ProfileNameContainer, PostProfileName, PostTime
, PostImage, PostFooter, PostLikeSection, PostCommentSection, PostCommentViewmore, PostCommentBoxSection, PostCommentBox, PostCommentBoxRight
, MessageFeedBody} from '../styles/HomePageStyle';
import HomeHeader from '../components/HomeHeader';
import Confetti from '../components/Confetti';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from '@iconify/react';
import CommentIcon from '@material-ui/icons/Comment';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import LaunchIcon from '@material-ui/icons/Launch';
import TextField from '../components/TextField';
import MessageBox from '../components/MessageBox';
import MessageBoxHeader from '../components/MessageBoxHeader';


function HomePage() {
  
  const iconStyle = {
    color: "#fff",
    marginRight: "10px",
  };

  const cmdiconStyle = {
    color: "#fff",
    fontSize: "25px",
    marginRight: "4px",
  };

  const dpStyle = {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
  };
  const postStyle = {
    width: "100%",
    height: "90%",
  }

  return (
    <HomeStyle>
      <HomeHeader />
      <HomeBody>
        <FeedBody>
          <StoryDiv></StoryDiv>
          <PostDiv>
                <PostHeader>
                    <PostProfile>
                      <Avatar>H</Avatar>
                      <ProfileNameContainer>
                          <PostProfileName>people_call_e_eruma</PostProfileName>
                          <PostTime>just now</PostTime>
                      </ProfileNameContainer>
                      <Icon icon="healthicons:award-ribbon" color=" #BB8403" height={30} /> 
                    </PostProfile>
                    <MoreVertIcon style={iconStyle} />
                </PostHeader>
                <PostImage>
                    <img src="../post.png" style={postStyle}/>
                </PostImage>
                <PostFooter>
                    <PostLikeSection>
                        < Confetti/>
                        <CommentIcon style={{color:"#fff", fontSize:"30px"}}/>
                        <LaunchIcon  style={{color:"#fff", fontSize:"30px"}}/>
                    </PostLikeSection>
                    <PlayForWorkIcon style={{color:"#fff", fontSize:"30px"}}/>
                </PostFooter>
                <PostCommentSection>
                  Blasted by i_am_akash_babu and 4,508 others
                </PostCommentSection>
                <PostCommentViewmore>View All Comments more..</PostCommentViewmore>
                <PostCommentBoxSection>
                    <PostCommentBox>
                        
                        <Icon icon="fluent:emoji-20-regular" style={cmdiconStyle} />
                        <TextField type={"text"} placeholder={"Add a comment..."} />
                        <PostCommentBoxRight>
                          <Icon icon="fluent:mic-48-regular" style={cmdiconStyle} />
                          <Icon icon="fluent:send-20-filled" style={cmdiconStyle} />
                        </PostCommentBoxRight>
                    </PostCommentBox>
                    
                </PostCommentBoxSection>
          </PostDiv>
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
