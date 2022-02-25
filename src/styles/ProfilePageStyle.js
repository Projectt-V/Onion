import styled from 'styled-components';

export const ProfileStyle = styled.div`
   
`;

export const ProfileBody = styled.div`
   width: 100%;
   height: 91vh;
   background-color: #393939;
   display: grid;
   grid-template-columns: 70vw 30vw;
   grid-template-rows: auto;
   color: ${ (props) => props.theme.fontcolor };


   @media (max-width: 425px) {
      grid-template-columns: 100vw 0vw;
      grid-template-rows: auto;
    }

    @media (max-height: 550px) {
      grid-template-columns: 100vw 0vw;
      grid-template-rows: auto;
    }

   @media (min-width: 426px) and (max-width: 768px) {
      grid-template-columns: 100vw 0vw;
      grid-template-rows: auto;
   }

`;

export const ProfileLeft = styled.div`
   width: 100%;
   height: 100%;
   overflow: scroll;
   overflow-x: hidden;
   background: ${ (props) => props.theme.bodyBackground } ;
   border-right: 2px solid #717272;
   display: flex;
   flex-direction: column;
   align-items: center;
`;


export const ProfileDp = styled.div`
   margin-top: 6vh;
   height: 160px;
   width: 160px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23C1005BFF' stroke-width='10' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");border-radius: 100px;
`;

export const BoldText = styled.p`
   margin-top: 10px;
   text-align center;
   font-size: 20px;
   font-weight: bold;
   cursor: pointer;
   
`;

export const UserInfo = styled.div` 
   width: 80%;
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
`;

export const UserInfoPouch = styled.div`
   height: 100%;
`;

export const BioDiv = styled.div`
   width: 80%;
   margin-top: 20px;
   display: flex;
`;

export const BioDivLeft = styled.div`
   width: 20%;
   font-size: 23px;
   font-weight: bold;
`;

export const BioDivRight = styled.div`
   width: 80%;
   margin-top:4px;
   background-color: ${ (props) => props.theme.searchBar};
   padding: 30px;
   border-bottom-right-radius: 60px;
   border-top-left-radius: 60px;
`;


export const MessageBody = styled.div`
   width: 100%;
   height: 100%;
   background-image: ${ (props) => props.theme.messageBodyBackground };
   background-color: ${ (props) => props.theme.messageBodyBackground };
   overflow: auto;
   box-shadow:${ (props) => props.theme.messageBodyBorder }
   
`;
export const MessageFeedBody = styled.div`
   background-image: ${ (props) => props.theme.messageBodyBackground };
   background-color: ${ (props) => props.theme.messageBodyBackground };
   
   
`;
