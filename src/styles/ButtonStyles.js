import styled from 'styled-components';

export const ButtonStyle = styled.div` 
   height: 100%;
   width: 100%;
   display: flex;
   background-image: ${ (props) => props.isPrimary ? props.theme.buttonBackgroundPrimary : props.theme.buttonBackgroundSecondary  };
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   cursor: pointer;
   font-family: 'Work Sans', sans-serif;
   
   @media (max-width: 425px) {
      height: 80%
    }

`;

export const DepTextl = styled.p`
   font-size: 15px;
   color: #fff;
   
   @media (max-width: 425px) {
      font-size: 8px;
    }
   @media (min-width: 426px) and (max-width: 768px) {
      font-size: 12px;
    }
`;

export const ButtonText = styled.p`
   font-size: 18px;
   font-weight: bold;
   color: #fff;

   
   @media (max-width: 425px) {
      font-size: 12px;
    }

    
   @media (min-width: 426px) and (max-width: 768px) {
      font-size: 16px;
    }
`;


export const DepTextr = styled.p`
   font-size: 15px;
   font-weight: bold;
   color: #4bbdd6;
   margin-left: 10px;

   @media (max-width: 425px) {
      font-size: 8px;
    }
   @media (min-width: 426px) and (max-width: 768px) {
      font-size: 12px;
    }
`;
