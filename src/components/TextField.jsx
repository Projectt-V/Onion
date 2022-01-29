import React from 'react';

function TextField(props) {
  const textStyle = {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
<<<<<<< HEAD
      fontSize: "15px",
      fontSize: "14px",
=======
<<<<<<< HEAD
      fontSize: "15px",
=======
      fontSize: "14px",
>>>>>>> 5f41c596236afe9081b82d8ffbdc69b1478adff2
>>>>>>> loginpage
      color: "#fff",
      outline: "none",
      border: "none",
      paddingLeft: "10px",
      
  }
  return(
     <input type={props.type} placeholder = {props.placeholder} style={textStyle} color={"#fff"} />
  );
}

export default TextField;
