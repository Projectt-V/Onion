import React from 'react';
import { MessageContainer, MessageBody, MessageContent, MessageDetail, ReceiverName, RecentMessage, MessageNotifiaction } from '../styles/MessageBoxStyles'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

function MessageBox() {
  return (
    <MessageContainer>
       <MessageBody>
         <MessageContent>
           <Avatar>H</Avatar>
           <MessageDetail>
               <ReceiverName>people_call_e_eruma</ReceiverName>
               <RecentMessage>You: Enga irukka ?</RecentMessage>
           </MessageDetail>

         </MessageContent>
         <MessageNotifiaction>
            <Badge badgeContent={4} color="secondary" ></Badge>
         </MessageNotifiaction>

       </MessageBody>
         
    </MessageContainer>
  );
}

export default MessageBox;
