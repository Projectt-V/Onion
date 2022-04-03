import React, { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";
import { Icon } from '@iconify/react';
import IconButton from '@material-ui/core/IconButton';

function Confetii() {
  // 'Confetti' only shows the confettig if 'active' turn from 'falsy' to 'truthy'.
  // We set it to 'true', and then immediately set it to 'false' again,
  // so we can hit the button multiple times.
  const [active, setActive] = useState(false);
  useEffect(() => {
    // immediately set 'active' to false again
    setActive(false);
  });
  const cmdiconStyle = {
    color: "black",
    fontSize: "25px",
    marginRight: "4px",
    cursor:"pointer",
  };
  const likeIconStyle = {
    color:"#fff",
    background: '#D44760',
    boxShadow: 'inset 4px 4px 8px #F46E86, inset -4px -4px 8px #973547',
    borderRadius: "50%",
    padding:'8px',
    
  };

  const config = {
    angle: "60",
    spread: "90",
    startVelocity: "30",
    elementCount: "92",
    dragFriction: "0.07",
    duration: "1200",
    stagger: "1",
    width: "10px",
    height: "10px",
    perspective: "1000px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };
  return (
    <div class="confetti-button" >
      <Confetti active={active} config={ config } />
         <IconButton   style={likeIconStyle} onClick={() => setActive(true)}>
     
            <Icon icon="ph:confetti"   />
         </IconButton>

    </div>
  );
}

export default Confetii;