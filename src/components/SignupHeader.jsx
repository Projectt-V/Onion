import React from 'react';
import {SignupHeaderContainer, Icon, Icon1, SignupHeaderContent   } from '../styles/SignupStyles';

function SignupHeader() {
  return(
      <SignupHeaderContainer>
        <SignupHeaderContent>
          <Icon>Onion</Icon>
          <Icon1>login</Icon1>
        </SignupHeaderContent>
      </SignupHeaderContainer>
  )
}

export default SignupHeader;