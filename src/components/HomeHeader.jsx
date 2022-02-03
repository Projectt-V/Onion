import React from 'react';
import { HomeHeaderContainer, SearchBarStyle, HomeHeaderIcons } from '../styles/HomeHeaderStyle';
import Logo from '../components/Logo';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import TextField from '../components/TextField';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import ExploreIcon from '@material-ui/icons/Explore';

function HomeHeader() {
    const iconStyle = {
        color: "#fff",
        fontSize: "25px",
        justifyContent: "flex-start",
        fontFamily: "'Work Sans', sans-serif",
        marginTop: "3px",
        marginRight: "4px",
    };
    return (
        <HomeHeaderContainer>
            <Logo width="150px" height="60px" />
            <SearchBarStyle>
                <SearchRoundedIcon style={ iconStyle } />
                <TextField type={"text"} placeholder={"Type to search"} />
            </SearchBarStyle>
            <HomeHeaderIcons>
                <AddBoxRoundedIcon style={iconStyle}/>
                <ExploreIcon style={iconStyle}/>
                <Badge badgeContent={4} color="secondary" >
                    <NotificationsIcon style={iconStyle}/>
                </Badge>
                <Avatar>H</Avatar>
            </HomeHeaderIcons>
        </HomeHeaderContainer>
    );
}

export default HomeHeader;
