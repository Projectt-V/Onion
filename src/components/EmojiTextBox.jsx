import React, { useState } from 'react';
import TextField from '../components/TextField';
import { Icon } from '@iconify/react';
import { EmojiTextContainer, EmojiText, EmojiTextBoxRight } from '../styles/EmojiBoxStyle';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { useTheme } from 'styled-components';


function EmojiTextBox(props) {

    const [text, setText] = useState(props.value);
    const [showEmo, setShowEmo] = useState(false);
    const theme = useTheme();

    const cmdiconStyle = {
        fontSize: "27px",
        marginRight: "4px",
        cursor: "pointer",
    };


    const emojiToggler = () => {
        // const hell = document.getElementById("emo");
        // if (hell.style.display === "block") {
        //     hell.style.display = "none";
        // }
        // else {
        //     hell.style.display = "block";
        // }
        setShowEmo((val) => !val);
        console.log(showEmo);
    }

    const EmoContStyle = {
        width: "100%",
        position: "relative",
        display: showEmo ? "block" : "none",
    }



    const textStyle = {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        fontSize: "14px",
        outline: "none",
        border: "none",
        paddingLeft: "10px",
        color: theme.fontcolor
    };

    const pickerStyle = {
        color: "#ffff",
        width: '100%',
        backgroundColor: theme.headerBackground,
        boxShadow: "none",
        border: "2px solid #686868"
    }


    return (
        <EmojiTextContainer>
            <EmojiText>
                <Icon icon="fluent:emoji-20-regular" style={cmdiconStyle} onClick={emojiToggler} />
                <input id="iptext" type="text" placeholder={props.placeHolder} style={textStyle} value={text} onChange={(e) => setText(e.target.value)} />
                <EmojiTextBoxRight>
                    {props.isMicEnabled ? <Icon icon="fluent:mic-48-regular" style={cmdiconStyle} /> : <p></p>}
                    {props.isSendButtonEnabled ? <Icon icon="fluent:send-20-filled" style={cmdiconStyle} onClick={() => console.log(text)} /> : <p></p>}
                </EmojiTextBoxRight>
            </EmojiText>
            <div style={EmoContStyle} >
                <Picker
                    set='twitter'
                    title=""
                    showPreview={false}
                    emoji=""
                    theme={theme.theme}
                    onSelect={(emoji) => { setText((val) => val + emoji.native); }}
                    style={{ width: "100%" }}
                />
            </div>
        </EmojiTextContainer>
    )
}

export default EmojiTextBox