import React from 'react';
function Logo(props) {


  const logoStyle = {
    width: props.width,
    height: props.height,
    cursor: "pointer"
  }


  return (
    <img src="../logo.png" style={logoStyle} />
  );
}

export default Logo;
