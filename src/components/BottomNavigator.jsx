import React from 'react'
import { BottomNavContainer, BottomNavBox } from '../styles/BottomNavStyle';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { useTheme } from 'styled-components';

function BottomNavigator() {

  const theme = useTheme();

  const iconStyle = {
    color: theme.fontcolor,

  }


  return (
    <BottomNavContainer>
      <BottomNavBox>
        <HomeOutlinedIcon style={iconStyle} />
        <ExploreOutlinedIcon style={iconStyle} />
        <AddBoxOutlinedIcon style={iconStyle} />
        <NotificationsNoneOutlinedIcon style={iconStyle} />
        <PersonOutlinedIcon style={iconStyle} />
      </BottomNavBox>
    </BottomNavContainer>
  )
}

export default BottomNavigator