import styled from 'styled-components';

export const LoginScreen = styled.div`
   height: 100vh;
   display: grid;
   grid-template-rows: 9vh 91vh;
   grid-template-columns: auto;
`;

export const LoginBody = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${ (props) => props.theme.bodyBackground };
`;


export const LoginContainer = styled.div`
   background-color: #474747;
   width: 28vw;
   margin-left: 10px;
   padding: 3vw;
   align-items: center;
   border-radius: 10px;
   position: absolute;
   top: 13vh;
   left: 30vw;
   text-align: center;
   color: ${ (props) => props.theme.loginHeader };
   box-shadow: 0 32px 16px rgba(0,0,0,0.21);;
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
   width: 98%;
   height: 38px;
   margin-top: 20px;
   background-color: #616161;
   border-radius: 10px;
   align-items: center;
   display: flex;
   padding-left: 10px;
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
`;