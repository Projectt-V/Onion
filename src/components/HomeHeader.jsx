import React from 'react';
import { HomeHeaderContainer, SearchBarStyle, HomeHeaderIcons, MsgIcon } from '../styles/HomeHeaderStyle';
import Logo from '../components/Logo';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import TextField from '../components/TextField';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import Avatar from '@material-ui/core/Avatar';
import ExploreIcon from '@material-ui/icons/Explore';
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/Home';

function HomeHeader() {
   
    const history = useHistory();

    const theme = useTheme();

    const iconStyle = {
        color: theme.fontcolor,
        fontSize: "25px",
        justifyContent: "flex-start",
        fontFamily: "'Work Sans', sans-serif",
        marginTop: "3px",
        marginRight: "4px",
        cursor: "pointer"
    };
    return (
        <HomeHeaderContainer>
            <Logo width="150px" height="60px" />
            <SearchBarStyle>
                <SearchRoundedIcon style={ iconStyle } />
                <TextField type={"text"} placeholder={"Type to search"} />
            </SearchBarStyle>
            <HomeHeaderIcons>
                <HomeRoundedIcon style={iconStyle} onClick={() => history.push("/home") } />
                <AddBoxRoundedIcon style={iconStyle} onClick={() => history.push("/newpost") } />
                <ExploreIcon style={iconStyle}/>
                <Badge badgeContent={4} color="secondary" >
                    <NotificationsIcon style={iconStyle} onClick={() => history.push("/notification") }/>
                </Badge>
                <Avatar>H</Avatar>
            </HomeHeaderIcons>
            <MsgIcon>
                <QuestionAnswerOutlinedIcon style={iconStyle} />
            </MsgIcon>
        </HomeHeaderContainer>
    );
}

export default HomeHeader;