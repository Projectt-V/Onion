import React from 'react';
import { HeaderContainer, Icon } from '../styles/LoginHeaderStyle';
import Logo from './Logo';

function LoginHeader() {

  return(
      <HeaderContainer>
         <Logo width="150px" height="60px" />
      </HeaderContainer>
  )
}

export default LoginHeader;
