import React from 'react';
import { HeaderContainer, Icon } from '../styles/Header';
import Logo from './Logo';

function Header() {

  return(
      <HeaderContainer>
         <Logo width="150px" height="60px" />
      </HeaderContainer>
  )
}

export default Header;
