import React from 'react';
import {SignupHeaderContainer, Icon, Icon1, SignupHeaderContent   } from '../styles/SignupStyles';
import { useHistory } from 'react-router-dom';
function SignupHeader() {
  const history = useHistory();
  return(
      <SignupHeaderContainer>
        <SignupHeaderContent>
          <Icon>Onion</Icon>
          <Icon1 onClick={ () => history.push("/login") }>login</Icon1>
        </SignupHeaderContent>
      </SignupHeaderContainer>
  )
}

export default SignupHeader;