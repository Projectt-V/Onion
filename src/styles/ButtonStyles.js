import styled from 'styled-components';

export const PrimaryButtonStyle = styled.div`
   color: #ffff;
   height: 100%;
   width: 100%;
   display: flex;
   background-color: ${ (props) => props.isActive ? props.theme.buttonBackgroundActive : props.theme.buttonBackgroundInActive };
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   cursor: pointer;
`;

export const ButtonText = styled.h4`
   font-size: 20px;
   font-family: 'Work Sans', sans-serif;
   text-align: center;
   

`