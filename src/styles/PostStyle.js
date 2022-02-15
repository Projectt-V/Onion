import styled from 'styled-components';

export const PostDivStyle = styled.div`
   
   width: 100%;
   color: ${ (props) => props.theme.fontcolor };
   margin-bottom: 10px;

`;

export const PostHeader = styled.div`
   background-color: transparent;
   width: 100%;
   height: 9%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 0px 10px; 
`;

export const PostProfile = styled.div`
   display: flex;
   flex-direction:row;
   justify-content: space-between;
   align-items:center;
   margin-left: 2%;
   height: 100%;
`;
export const ProfileNameContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:left;
  text-align:left;
  margin-left: 5%;

`;
export const PostProfileName = styled.h4`
   color: ${ (props) => props.theme.fontcolor };
   font-style: normal;
   font-weight: bold;
   cursor:pointer;
   margin-right: 10px;
`;
export const PostTime = styled.p`
   font-style: normal;
   font-weight: normal;
   font-size:12px;
   color: ${ (props) => props.theme.fontcolor };
  
`;
export const PostImage = styled.div`
   padding-left:2%;
   padding-right:2%;
   
`;
export const PostFooter = styled.div`
   padding-left:2%;
   padding-right:2%;
   height: 7%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 10px;
   margin-bottom: 10px;
`;
export const PostLikeSection = styled.div`
   display: flex;
   flex-direction:row;
   justify-content: space-between;
   align-items:center;
   width: 15%;
   height: 100%;
`;
export const PostCommentSection = styled.h4`
   color: ${ (props) => props.theme.fontcolor };
   font-style: normal;
   font-weight: bold;
   margin-left:2%;
   letter-spacing:.5px;
`;
export const PostCommentViewmore = styled.h5`
   margin-top:1%;
   color: ${ (props) => props.theme.fontcolor };
   font-style: normal;
   font-weight: normal;
   margin-left:2%;
   padding-bottom:1%;
   cursor:pointer;
`;
export const PostCommentBoxSection = styled.div`
  height: 40px;
  padding-left:2%;
  padding-right:2%;
  padding-bottom:1%;
`;
export const PostCommentBox = styled.div`
  height: 30px;
  background-color: rgba(0,0,0,0.01);
  display: flex;
  align-iitems: center;
  justify-content: center;
  padding:10px;
  border-bottom: 3px solid #C0C0C0;
  

`;

export const PostCommentBoxRight = styled.div`
  width:10%;
  display:flex;
  justify-content:space-between;

`;