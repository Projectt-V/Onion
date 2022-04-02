import styled from 'styled-components';

export const LoginScreen = styled.div`
   height: 100%;
   width: 100%;
   display: grid;
   grid-template-rows: 91vh;
   grid-template-columns: auto;
`;

export const LoginBody = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${(props) => props.theme.bodyBackground};
`;


export const LoginContainer = styled.div`
   background-color: ${ (props) => props.theme.loginContainerBackground } ;
   width: 28vw;
   padding: 3vw;
   align-items: center;
   border-radius: 10px;
   text-align: center;  
   color: ${(props) => props.theme.loginHeader};
   box-shadow: 10px 10px 100px 5px rgba(33, 32, 32, 0.25);


   @media (max-width: 425px) {
      width: 90vw;
      margin-left: 0px;
    }

    @media (max-height: 550px) {
       height: 40vh;
    }

    
   @media (min-width: 426px) and (max-width: 768px) {
      width: 60vw;
      top: 0px
      left: 0px;
      margin-left: 0px;
    }
`;

export const WidthFixer = styled.div`  
   margin-top: 30px;
   width: 100%;
   height: 40px;
   display: flex;
   flex-direction: row:
   flex: auto;

`;

export const TextDiv = styled.div`
   color: #E64E4C;
   width: 98%;
   height: 38px;
   margin-top: 20px;
   background-color: ${ (props) => props.theme.textBoxBackground };
   border-radius: 10px;
   align-items: center;
   display: flex;
   padding-left: 10px;

   ::placeholder{
      font-size: 14px;
      color: ${ (props) => props.theme.fontcolor } ;
    }


`;

export const ForgotPass = styled.div`
   color: #329DFF;
   font-size: 14px;
   text-decoration: underline;
   margin-top: 7px;
   font-family: 'Work Sans', sans-serif;
   justify-content: flex-end;
   cursor: pointer;
   margin-left: 70%;

   @media (max-width: 425px) {
      font-size: 9px;
    }

    
   @media (min-width: 426px) and (max-width: 768px) {
      font-size: 10px;
    }
`; 
