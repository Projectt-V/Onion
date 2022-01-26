import React from 'react';
import LoginHeader from '../components/LoginHeader';
import PrimaryButton from '../components/PrimaryButton';
import TextField from '../components/TextField';
import { LoginScreen, LoginBody, LoginContainer, WidthFixer, TextDiv, ForgotPass } from '../styles/LoginPageStyle';
import { LoginSignupHeader } from '../styles/HeadingFonts';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


//NAVIGATION IMPORTS

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//AAGATHU....

function LoginPage() {
    const iconStyle = {
        color: "#fff",
        fontSize: "35px",
        marginTop: "7px",
        justifyContent: "flex-start"
    }
    return (

        <LoginScreen>
            <LoginHeader />
            <LoginBody>
                <LoginContainer>
                    <LoginSignupHeader>Onion</LoginSignupHeader>
                    <WidthFixer>
                        <PrimaryButton text="LOGIN" isActive={true} />
                        <PrimaryButton text="SIGN UP" isActive={false} />
                    </WidthFixer>
                    <TextDiv>
                        <PersonOutlineOutlinedIcon style={iconStyle} />
                        <TextField type={"text"} placeholder={"Username"} />
                    </TextDiv>
                    <TextDiv>
                        <LockOutlinedIcon style={iconStyle} />
                        <TextField type={"password"} placeholder={"Password"} />
                    </TextDiv>
                    <ForgotPass>Forgot Password?</ForgotPass>
                    <WidthFixer>
                        <PrimaryButton text="LOGIN" isActive={true} />
                    </WidthFixer>
                </LoginContainer>
            </LoginBody>
        </LoginScreen>
    )
}

export default LoginPage;
