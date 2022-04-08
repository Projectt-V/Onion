import React from 'react';
import { SettingsBody, SettingsLeft, ProfileDp, MessageBody, MessageFeedBody  } from '../styles/SettingsStyle';
import SettingsForm from '../components/SettingsForm';
import MessageBox from '../components/MessageBox';
import MessageBoxHeader from '../components/MessageBoxHeader';

function SettingsPage() {

    return (
        <SettingsBody>
            <SettingsLeft>
                <ProfileDp>
                    +
                </ProfileDp>
                <SettingsForm />
            </SettingsLeft>
            <MessageBody>
                <MessageBoxHeader />
                <MessageFeedBody>
                    <MessageBox />
                    <MessageBox />
                    <MessageBox />
                    <MessageBox />
                    <MessageBox />
                    <MessageBox />
                    <MessageBox />
                    <MessageBox />
                    <MessageBox />
                </MessageFeedBody>
            </MessageBody>
        </SettingsBody>
    )

}

export default SettingsPage