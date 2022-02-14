import React from 'react';
import { MessageHeaderContainer, MessageHeaderBody, Title, MessageTitleSection, MessageIconSection} from '../styles/MessageBoxHeaderStyles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'; 
import { Icon } from '@iconify/react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Switch from '@material-ui/core/Switch';
import { useTheme } from 'styled-components';

function MessageBoxHeader() {
    const theme = useTheme();
    const iconStyle = {
        color: theme.messageHeaderFontcolor,
        fontSize: "25px",
        justifyContent: "flex-start",
        fontFamily: "'Work Sans', sans-serif",
        marginTop: "3px",
    };
    
  return (
        <MessageHeaderContainer>
            <MessageHeaderBody>
                <MessageTitleSection>
                    <Icon icon="bx:bx-chat"style={ iconStyle }/>
                    <Title>Message</Title>
                </MessageTitleSection>
                <MessageIconSection>
                    <SearchRoundedIcon style={ iconStyle } />
                    <Switch  defaultChecked color="secondary"/>
                    <MoreVertIcon style={iconStyle} />
                </MessageIconSection>
            </MessageHeaderBody>

        </MessageHeaderContainer>
  );
}

export default MessageBoxHeader;
