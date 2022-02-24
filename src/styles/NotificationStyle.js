import styled from 'styled-components';

export const NotificationBody = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  background: ${ (props) => props.theme.bodyBackground } ;
  border-right: 2px solid #717272;
`;
export const NotificationHeader = styled.h3`
  font-weight:bold;
  color:${ (props) => props.theme.fontcolor } ;
`;
export const NotificationMessage = styled.p`
  
  font-size:14px;
  color:${ (props) => props.theme.fontcolor } ;
`;
export const NotificationTime = styled.p`
  margin-left:1%;
  font-size:14px;
  color:${ (props) => props.theme.fontcolor } ;
`;
export const NotificationBox = styled.div`
  padding:2%;
  margin:2%;
  background: ${ (props) => props.theme.notifyBoxBackground } ;
  box-shadow: ${ (props) => props.theme.notifyBoxShadow };
  border-radius:10px;
`;
export const NotificationSection = styled.div`
  margin-top:2%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom:4%;
 

`;
export const NotificationProfile = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  width:100%;

`;