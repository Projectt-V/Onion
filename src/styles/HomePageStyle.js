import styled from 'styled-components';

export const HomeStyle = styled.div`
   
`;

export const HomeBody = styled.div`
   width: 100%;
   height: 91vh;
   background-color: #393939;
   display: grid;
   grid-template-columns: 70vw 30vw;
   grid-template-rows: auto;


`;

export const FeedBody = styled.div`
   width: 100%;
   height: 100%;
   overflow: auto;
   background: transparent;
   border-right: 2px solid #717272;
   
`;


export const MessageBody = styled.div`
   width: 100%;
   height: 100%;
   overflow: auto;
   background: transparent;
   
`;

export const StoryDiv = styled.div`
   width: 100%;
   background-color: green;
   height: 15%;
   margin-bottom: 10px;

`;

export const PostDiv = styled.div`
 
   height: 100%;
   width: 100%;

`;

export const PostHeader = styled.div`
   background-color: #393939;
   width: 100%;
   height: 9%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const PostProfile = styled.div`
   display: flex;
   flex-direction:row;
   justify-content: space-between;
   align-items:center;
   width: 30%;
   margin-left: 2%;
   height: 100%;
`;
export const ProfileNameContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:left;
  text-align:left;

`;
export const PostProfileName = styled.h4`
   color: #fff;
   font-style: normal;
   font-weight: bold;
   cursor:pointer;
`;
export const PostTime = styled.p`
   font-style: normal;
   font-weight: normal;
   font-size:12px;
   color: #fff;
  
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
   color: #fff;
   font-style: normal;
   font-weight: bold;
   margin-left:2%;
   letter-spacing:.5px;
   cursor:pointer;
`;
export const PostCommentViewmore = styled.h5`
   margin-top:1%;
   color: #fff;
   font-style: normal;
   font-weight: normal;
   margin-left:2%;
   padding-bottom:1%;
   cursor:pointer;
`;
export const PostCommentBoxSection = styled.div`
  height: 50px;
  padding-left:2%;
  padding-right:2%;
  padding-bottom:1%;
`;
export const PostCommentBox = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.headerBackground};
  display: flex;
  align-iitems: center;
  justify-content: center;
  padding:10px;
  border-radius:8px;
  

`;

export const PostCommentBoxRight = styled.div`
  width:10%;
  display:flex;
  justify-content:space-between;

`;

// export const ProfileDp = styled.div`
//    width: ${ (props) => props.size };
//    height: ${ (props) => props.size };
//    background-image: url(${ (props) => props.dpUrl });
//    borger-radius: 50%;
// `;

