import React from 'react';

function TextField(props) {


  const textStyle = {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      fontSize: "14px",
      outline: "none",
      border: "none",
      paddingLeft: "10px",
      color: "black",
  };


  return(
     <input type={props.type} placeholder = {props.placeholder} style={textStyle} />
  );
}

export default TextField;
