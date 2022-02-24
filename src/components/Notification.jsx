import React, { useState,useRef } from 'react';
import { NotificationSection,NotificationMessage,NotificationProfile,NotificationTime} from '../styles/NotificationStyle';
import { PostProfileName } from '../styles/PostStyle';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'; 

function Notification() {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        setLoading((e) => !e);
      };
    const AvatarStyle = {
        marginRight: "2%",
    };
    const BtnStyle = {
        width:"8vw",
        background:"linear-gradient(225deg, #F16648, #C1005B)",
        fontSize:"12px",
        fontWeight:"bold",
        color:"#fff",
        paddingLeft:"10px",
        paddingRight:"10px",
        textTransform:"lowercase"
    };

  return (
    <NotificationSection>
                               
        <NotificationProfile>
            <Avatar style={AvatarStyle}>H</Avatar>
            <PostProfileName>people_call_e_eruma</PostProfileName> 
            <NotificationMessage> Liked your post. </NotificationMessage>
            <NotificationTime>3 hours ago</NotificationTime>
        </NotificationProfile>
        <Button onClick={handleClick} sx={{ m: 2 }} style={BtnStyle}>
            {loading ? 'Following' : 'Follow'}
        </Button>

    </NotificationSection>
  )
}

export default Notification