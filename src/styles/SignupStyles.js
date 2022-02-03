import styled from 'styled-components';
export const SignupScreen = styled.div`
   height: 100vh;
   background-color: #fffff;
  
`;
export const SignupBackgroud = styled.div`
   height: 80vh;
   background: linear-gradient(112.1deg, #F16648 0%, #C1005B 95.63%);
   clip-path: ellipse(135% 100% at 50% 0%);
   
`;
export const SignupBoxText = styled.div`
  min-height:8vh;
   
`;

export const SignupContainer = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   padding-left: 10%;
   padding-right: 10%;
   height: 100%;
   
`;

export const SignupBox = styled.div`
  
   min-width:30vw;
   min-height:35vh;
   background: radial-gradient(100% 657.92% at 0% 0%, rgba(255, 255, 255, 0.511) 0%, rgba(255, 255, 255, 0.28) 100%);
   background-blend-mode: overlay;
   border: 1px solid rgba(254, 254, 254, 0.3);
   box-sizing: border-box;
   box-shadow: 0px 10px 20px 3px rgba(0, 0, 0, 0.15);
   backdrop-filter: blur(100px);
/* Note: backdrop-filter has minimal browser support */

   border-radius: 5px;
   color:white;
   font-size:16px;
   padding:3%;
  
`;
export const SignupHeaderContainer = styled.div`
  width: 100vw;
  height: 6vh;
  min-height: 6vh;
  align-items: center;
  padding-top:10px;
  
`;
export const SignupHeaderContent = styled.div`
  width:100vw;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  
`;
export const Icon = styled.h2`
  padding-left:5%;
  color: white;
`;
export const Icon1 = styled.h2`
  padding-right:5%;
  color: white;
  cursor: pointer;

`;
export const TextDiv = styled.div`
 
   padding:10px;
   margin-top: 5px;
   border: 2px solid rgba(254, 254, 254, 0.3);
   border-radius: 5px;
   align-items: initial;
   display: flex;
   
  
`;
export const Label = styled.h4`
  padding-top:10px;
  color:white;
   
  
`;
export const SignupBtn = styled.h4`

  padding:10px;
  display:flex;
  align-item:center;
  justify-content:center;
   
  
`;
