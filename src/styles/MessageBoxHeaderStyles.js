import styled from 'styled-components';

export const MessageHeaderContainer = styled.div`
   height: 10vh;
   width:100%;
   background-image:${ (props) => props.theme.messageHeaderBackground};
   background-color:${ (props) => props.theme.messageHeaderBackground};
   overflow: auto;
   color:${ (props) => props.theme.messageHeaderFontcolor};
   
`;
export const MessageHeaderBody = styled.div`
   height:100%;
   display:flex;
   align-items: center;
   justify-content:space-between;
   padding-left:2%;
   padding-right:2%;
   
`;
export const MessageTitleSection = styled.div`
   width:25%;
   display:flex;
   align-items: center;
   justify-content:space-between;
`;
export const MessageIconSection = styled.div`
   
   display:flex;
   align-items: center;
   

`;
export const Title = styled.h3`
   color:${ (props) => props.theme.messageHeaderFontcolor};
   font-style: normal;
   font-weight: bold;
   
  
`;