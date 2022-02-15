import React from 'react';
import LoginHeader from '../components/LoginHeader';
import Button from '../components/Button';
import TextField from '../components/TextField';
import { LoginScreen, LoginBody, LoginContainer, TextDiv, WidthFixer, ForgotPass } from '../styles/LoginPageStyle';
import { LoginSignupHeader } from '../styles/HeadingFonts';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Logo from '../components/Logo';
import { useHistory } from 'react-router-dom';



function LoginPage(props) {


    const iconStyle = {
        fontSize: "25px",
        justifyContent: "flex-start",
        fontFamily: "'Work Sans', sans-serif"
    };

    const history = useHistory();

    return (

        <LoginScreen>
            <LoginBody>
                <LoginContainer>
                    <LoginSignupHeader>Login For <br/> <Logo width="200px" height="80px" /></LoginSignupHeader>
                    <TextDiv>
                        <PersonOutlineOutlinedIcon style={iconStyle} />
                        <TextField type={"text"} placeholder={"Username"} />
                    </TextDiv>
                    <TextDiv>
                        <LockOutlinedIcon style={iconStyle} />
                        <TextField type={"password"} placeholder={"Password"} />
                    </TextDiv>
                    <ForgotPass>Forgot Password?</ForgotPass>
                    <WidthFixer  onClick={ () => { history.push("/home"); window.location.reload(); } } >
                        <Button text="Login" isPrimary={true} />
                    </WidthFixer>
                    <WidthFixer onClick={ () => history.push("/signup") } >
                        <Button deptext1="Don't have an account?" depText2="Sign up" isPrimary={false} />
                    </WidthFixer>
                </LoginContainer>
            </LoginBody>
        </LoginScreen>
    )
}

export default LoginPage;
