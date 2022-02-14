import styled from 'styled-components';

export const MessageContainer = styled.div`
   height: 10vh;
   width:100%;
   cursor:pointer;
   background-image: ${ (props) => props.theme.messageBoxBackground};
   background-color: ${ (props) => props.theme.messageBoxBackground};
   border-bottom:${ (props) => props.theme.messageBoxBorder };
   box-sizing: border-box;
`;
export const MessageBody = styled.div`
   
   height:100%;
  
   display:flex;
   align-items: center;
   justify-content:space-between;
   padding-left:2%;
   padding-right:4%;
  
`;
export const MessageContent = styled.div`
   display:flex;
   align-items: center;
   justify-content:space-between;
  
`;
export const MessageDetail = styled.div`
   padding-left:10%;
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items:left;
   text-align:left;
   
  
`;
export const ReceiverName = styled.h4`
   color: ${ (props) => props.theme.messageTextColor };
   font-style: normal;
   font-weight: bold;
   cursor:pointer;
`;
export const RecentMessage = styled.p`
   font-style: normal;
   font-weight: normal;
   font-size:14px;
   color: ${ (props) => props.theme.messageTextColor };
   word-spacing:3px;
  
`;
export const MessageNotifiaction = styled.div`
   margin-right:5%;
  
`;