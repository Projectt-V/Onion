import React from 'react';
import { useTheme } from 'styled-components';

function TextField(props) {

  const theme = useTheme();
 
  const textStyle = {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      fontSize: "14px",
      outline: "none",
      border: "none",
      paddingLeft: "10px",
      color: theme.fontcolor,
      
  };



  
  return(
     <input type={props.type} placeholder = {props.placeholder} style={textStyle} />
  );
}

export default TextField;
