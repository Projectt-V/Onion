import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from '@iconify/react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Confetti from './Confetti';
import CommentIcon from '@material-ui/icons/Comment';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import LaunchIcon from '@material-ui/icons/Launch';
import EmojiTextBox from '../components/EmojiTextBox'
import TextField from '../components/TextField';
import { PostDivStyle, PostHeader, PostProfile, ProfileNameContainer, PostProfileName, PostTime,
PostImage, PostFooter, PostLikeSection, PostCommentSection, PostCommentViewmore, PostCommentBoxSection, PostCommentBox, PostCommentBoxRight } from '../styles/PostStyle';
import PopoverContainer from '@idui/react-popover'
import ProfileHover from './ProfileHover'

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
      const commentIconStyle = {
        color:"#fff",
        background: '#465CCF',
        boxShadow: 'inset 4px 4px 8px #60678B, inset -4px -4px 8px #283CA4',
        borderRadius: "50%",
        padding:'8px',
        
      };
      const shareIconStyle = {
        color:"#fff",
        background: 'linear-gradient(180deg, #BE4DFF 0%, #7B02C0 100%)',
        borderRadius: "50%",
        padding:'8px',
      };
      const downloadIconStyle = {
        color:"#fff",
        background: 'green',
        // boxShadow: 'inset 4px 4px 8px #60678B, inset -4px -4px 8px #283CA4',
        borderRadius: "50%",
        padding:'8px',
        
      };
      const postStyle = {
        width: "100%",
        height: "90%",
      }
      

    return (
        <PostDivStyle>
            <PostHeader>
                <PopoverContainer
                  animation={{
                    animate: {
                      opacity: 1,
                      scale: 1
                    },
                    exit: {
                      opacity: 0,
                      scale: 0.9,
                      transition: {
                        duration: 0.1
                      }
                    },
                    initial: {
                      opacity: 0,
                      scale: 0.9
                    }
                  }}
                 
                  arrowOffset={195}
                  arrowPlacement="left"
                  arrowSize={15}
                  closeOnScroll
                  placement="bottomLeft"
                  content={ProfileHover}
                  fitMaxHeightToBounds
                  fitMaxWidthToBounds
                  lazy
                  offset={[
                    0,
                    0
                  ]}
                  onChangeOpen={function noRefCheck(){}}
                  onFocus={function noRefCheck(){}}
                >
                  
                  <PostProfile>
                    <Avatar style={{ position: "static" }}>H</Avatar>
                    <ProfileNameContainer>
                        <PostProfileName>people_call_e_eruma</PostProfileName>
                        <PostTime>just now</PostTime>
                    </ProfileNameContainer>
                    <Icon icon="healthicons:award-ribbon" color=" #BB8403" height={45} />
                 </PostProfile>
                
                </PopoverContainer>
                <MoreVertIcon style={iconStyle} />
            </PostHeader>
            <PostImage>
                <img src="../post.png" style={postStyle} />
            </PostImage>
            <PostFooter>
                <PostLikeSection>
                    < Confetti />
                    <IconButton   style={commentIconStyle}>
                       <CommentIcon  />
                    </IconButton>
                    <IconButton   style={shareIconStyle}>
                       <LaunchIcon  />
                    </IconButton>
                </PostLikeSection>
                <IconButton   style={downloadIconStyle}>
                    <PlayForWorkIcon  />
                </IconButton>
                
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
 