import React from 'react'
import { BottomNavContainer, BottomNavBox } from '../styles/BottomNavStyle';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';

function BottomNavigator() {

  const theme = useTheme();
  
  const history = useHistory();

  const iconStyle = {
    color: theme.fontcolor,

  }


  return (
    <BottomNavContainer>
      <BottomNavBox>
        <HomeOutlinedIcon style={iconStyle} onClick={ () => history.push("/home") } />
        <ExploreOutlinedIcon style={iconStyle} />
        <AddBoxOutlinedIcon style={iconStyle} onClick={ () => history.push("/newpost") } />
        <NotificationsNoneOutlinedIcon style={iconStyle} onClick={ () => history.push("/notification") }  />
        <PersonOutlinedIcon style={iconStyle} />
      </BottomNavBox>
    </BottomNavContainer>
  )
}

export default BottomNavigator