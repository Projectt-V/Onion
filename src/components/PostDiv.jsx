import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from '@iconify/react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Confetti from './Confetti';
import CommentIcon from '@material-ui/icons/Comment';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import LaunchIcon from '@material-ui/icons/Launch';
import EmojiTextBox from '../components/EmojiTextBox'
import TextField from '../components/TextField';
import { PostDivStyle, PostHeader, PostProfile, ProfileNameContainer, PostProfileName, PostTime,
PostImage, PostFooter, PostLikeSection, PostCommentSection, PostCommentViewmore, PostCommentBoxSection, PostCommentBox, PostCommentBoxRight } from '../styles/PostStyle';


function PostDiv(props) {

    const iconStyle = {
        marginRight: "10px",
        
      };
    
      const cmdiconStyle = {
        fontSize: "27px",
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
        <PostDivStyle>
            <PostHeader>
                <PostProfile>
                    <Avatar style={{ position: "static" }} >H</Avatar>
                    <ProfileNameContainer>
                        <PostProfileName>people_call_e_eruma</PostProfileName>
                        <PostTime>just now</PostTime>
                    </ProfileNameContainer>
                    <Icon icon="healthicons:award-ribbon" color=" #BB8403" height={45} />
                </PostProfile>
                <MoreVertIcon style={iconStyle} />
            </PostHeader>
            <PostImage>
                <img src="../post.png" style={postStyle} />
            </PostImage>
            <PostFooter>
                <PostLikeSection>
                    < Confetti />
                    <CommentIcon style={{ fontSize: "30px", cursor:"pointer" }} />
                    <LaunchIcon style={{ fontSize: "30px", cursor:"pointer" }} />
                </PostLikeSection>
                <PlayForWorkIcon style={{ fontSize: "30px", cursor:"pointer" }} />
            </PostFooter>
            <PostCommentSection>
                <p style={{ cursor:"pointer" }}>Blasted by i_am_akash_babu and 4,508 others </p>
            </PostCommentSection>
            <PostCommentViewmore>View All Comments more..</PostCommentViewmore>
            <EmojiTextBox isMicEnabled={true}/>
        </PostDivStyle>
    );
}  

export default PostDiv;
