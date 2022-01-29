import React from 'react';
import { ButtonStyle, DepTextl, ButtonText, DepTextr } from '../styles/ButtonStyles';

export default function Button(props) {
  return (
     <ButtonStyle isPrimary = { props.isPrimary }>
       <DepTextl> { props.deptext1 }  </DepTextl>
       <ButtonText>{ props.text }</ButtonText>
       <DepTextr> { props.depText2 }  </DepTextr>
     </ButtonStyle>
  );
}
