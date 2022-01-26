import React from 'react';
import { PrimaryButtonStyle, ButtonText } from '../styles/ButtonStyles';

export default function PrimaryButton(props) {
  return (
     <PrimaryButtonStyle isActive = { props.isActive }>
       <ButtonText>{ props.text }</ButtonText>
     </PrimaryButtonStyle>
  );
}
