import styled from 'styled-components';

export const MessageContainer = styled.div`
   height: 10vh;
   width:100%;
   background-color: #474747;
   cursor:pointer;
   border-bottom: 2px solid #B4B4B4;
`;
export const MessageBody = styled.div`
   height:100%;
   width:90%;
   display:flex;
   align-items: center;
   justify-content:space-between;
   padding-left:2%;
   padding-right:2%;
  
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
   color: #fff;
   font-style: normal;
   font-weight: bold;
   cursor:pointer;
`;
export const RecentMessage = styled.p`
   font-style: normal;
   font-weight: normal;
   font-size:12px;
   color: #fff;
  
`;
export const MessageNotifiaction = styled.div`
   
  
`;