import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 9vh;
  background-color: ${(props) => props.theme.headerBackground}; 
  min-height: 9vh;
  align-items: center;
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: auto;
  
`;


export const Icon = styled.h3`
  padding-left: 3vw;
  color: ${ (props) => props.theme.fontcolor }
`;