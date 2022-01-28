import React from 'react';

function TextField(props) {
  const textStyle = {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      fontSize: "15px",
      color: "#fff",
      outline: "none",
      border: "none",
      paddingLeft: "10px"
  }
  return(
     <input type={props.type} placeholder = {props.placeholder} style={textStyle} color={"#fff"} />
  );
}

export default TextField;
