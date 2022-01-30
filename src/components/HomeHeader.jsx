import React from 'react';
import { HomeHeaderContainer, SearchBarStyle, HomeHeaderIcons } from '../styles/HomeHeaderStyle';
import Logo from '../components/Logo';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import TextField from '../components/TextField';

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

            </HomeHeaderIcons>
        </HomeHeaderContainer>
    );
}

export default HomeHeader;
