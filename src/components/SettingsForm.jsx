import React from 'react'
import { Editable, EditableRow, EditableRowTitle, EditableRowComps, AutoGraph } from '../styles/SettingsPageStyle';
import EmojiTextBox from '../components/EmojiTextBox';

function SettingsForm() {
    const TextStyle = {
        width: "97%",
        height: "20px",
        padding: "2px",
        border: "none",
        outline: "none",
        borderBottom: "1px solid black",
        fontSize: "17px",
    }

    return (
        <Editable>
            <EditableRow>
                <EditableRowTitle>
                    UserName:
                </EditableRowTitle>
                <EditableRowComps>
                    <EmojiTextBox isSendButtonEnabled={false} isMicEnabled = {false} value="jeni_reo" />
                </EditableRowComps>
            </EditableRow>
            <EditableRow>
                <EditableRowTitle>
                    Name:
                </EditableRowTitle>
                <EditableRowComps>
                    <input type="text" style={TextStyle} />
                </EditableRowComps>
            </EditableRow>
            <EditableRow>
                <EditableRowTitle>
                    Autograph:
                </EditableRowTitle>
                <EditableRowComps>
                    <AutoGraph></AutoGraph>
                </EditableRowComps>
            </EditableRow>
            <EditableRow>
                <EditableRowTitle>
                    Email:
                </EditableRowTitle>
                <EditableRowComps>
                    <input type="text" style={TextStyle} />
                </EditableRowComps>
            </EditableRow>
            <EditableRow>
                <EditableRowTitle>
                    Mobile:
                </EditableRowTitle>
                <EditableRowComps>
                    <input type="number" maxlength="10" style={TextStyle} />
                </EditableRowComps>
            </EditableRow>
        </Editable>
    )
}

export default SettingsForm