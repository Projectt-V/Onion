import styled from 'styled-components';

export const BottomNavContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: none;
  background-color: ${(props) => props.theme.bodyBackground};
  align-items: center;
  justify-content: center;
  margin-top: -9vh;
  position: relative;
  border-top: 1px solid ${ (props) => props.theme.fontcolor }

  @media (max-width: 425px) {
    display: flex;
  }

 @media (min-width: 426px) and (max-width: 768px) {
    display: flex;
 }

`;


export const BottomNavBox = styled.div`
  background-color: transparent;
  width: 96%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


//
//background-color: ${(props) => props.theme.headerBackground}; 