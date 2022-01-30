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
   background-color: #BE7869;
   height: 85%;
   width: 100%;

`;

export const PostHeader = styled.div`
   background-color: #ffff;
   width: 100%;
   height: 9%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const PostProfile = styled.div`
   display: flex;
   width: 30%;
   margin-left: 2%;
   background-color: #029193;
   height: 100%;
`;

// export const ProfileDp = styled.div`
//    width: ${ (props) => props.size };
//    height: ${ (props) => props.size };
//    background-image: url(${ (props) => props.dpUrl });
//    borger-radius: 50%;
// `;

