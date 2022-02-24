import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { HomeStyle, HomeBody, MessageBody, MessageFeedBody } from '../styles/HomePageStyle';
import { NewPostBody, PostPreview1, PrevTitle, SelectFiles, PostPreview2, CaptionBox, PostButton } from '../styles/NewPostStyle';
import MessageBox from '../components/MessageBox';
import MessageBoxHeader from '../components/MessageBoxHeader';
import { PostHeader, PostProfile, ProfileNameContainer, PostProfileName } from '../styles/PostStyle';
import EmojiTextBox from '../components/EmojiTextBox';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from '@iconify/react';
import Button from '../components/Button';
import TextField from '../components/TextField';

function NewPost() {


    const [isImage, setIsImage] = useState(false);
    const [isVideo, setIsVideo] = useState(false);


    const theme = useTheme();


    const cmdiconStyle = {
        fontSize: "27px",
        marginRight: "4px",
    };

    

    const [imgUrl, setImgUrl] = useState("../logo.png");

    const postHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImgUrl(reader.result)
                document.getElementById("prv1").style.display = "none"
                document.getElementById("prv2").style.display = "block"
                console.log("Hello")
                if(reader.result[5] === 'i'){
                    setIsImage(true);
                }
                else if(reader.result[5] === 'v') {
                    setIsVideo(true);
                }
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const VideoTag = <video src={imgUrl} style={{ height: "100%", width: "100%" }} controls loop ></video>


    const ImageTag = <img src={imgUrl} style={{ height: "100%", width: "100%" }} />


    return (
        <HomeStyle>
            <HomeBody>
                <NewPostBody>
                    <PostHeader>
                        <PostProfile>
                            <Avatar>H</Avatar>
                            <ProfileNameContainer>
                                <PostProfileName>people_call_e_eruma</PostProfileName>
                            </ProfileNameContainer>
                            <Icon icon="healthicons:award-ribbon" color=" #BB8403" height={45} />
                        </PostProfile>
                    </PostHeader>
                    <PostPreview1 id='prv1'>
                        <PrevTitle>
                            Drag and Drop files here
                        </PrevTitle>
                        <SelectFiles>

                            <input type="file" id="inputFile" style={{ display: "none" }} onChange={postHandler} />
                            <label htmlFor="inputFile"><Button text="choose file" isPrimary={true} /></label>

                        </SelectFiles>
                    </PostPreview1>
                    <PostPreview2 id="prv2" style={{ display: "none" }}>
                        { isVideo? VideoTag: ImageTag }
                    </PostPreview2>
                    
                    <EmojiTextBox isMicEnabled={false} />
                    
                </NewPostBody>
                <MessageBody>
                    <MessageBoxHeader />
                    <MessageFeedBody>
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                    </MessageFeedBody>
                </MessageBody>
            </HomeBody>
        </HomeStyle>
    )
}

export default NewPost