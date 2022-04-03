import React, {useEffect} from 'react';
import Typist from 'react-typist';
import SignupHeader from '../components/SignupHeader';
import { SignupScreen, SignupContainer, SignupBox, SignupBackgroud, TextDiv, Label, SignupBoxText, SignupBtn  } from '../styles/SignupStyles';
import TextField from '../components/TextField';
import Button from '@material-ui/core/Button';
import Aos from "aos";
import "aos/dist/aos.css";
import { useHistory } from 'react-router-dom';



function SignupPage() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
     }, []);


     const history = useHistory();

  return (
    
       <SignupScreen>
           <SignupBackgroud>
           
           <SignupHeader/>  
              <SignupContainer>
               
                <SignupBox data-aos="fade-up" data-aos-delay="0">
                    <SignupBoxText>
                        <Typist>
                         <Typist.Delay ms={300} />
                            Welcome to onion
                        <Typist.Delay ms={50} />
                        <br />
                            Hope this onion will never make you to cry...
                        </Typist>
                    </SignupBoxText>
                    <div data-aos="fade-up" data-aos-delay="2900">
                    <Label>Enter Your Email</Label>
                    <TextDiv>
                        <TextField type={"email"} placeholder={"Email"} />
                    </TextDiv>
                    <SignupBtn>
                      <Button variant="contained" color="secondary" onClick={ () => history.push("/getpassword") }>continue</Button>
                    </SignupBtn>  
                    </div>
                 </SignupBox>  
              </SignupContainer>
            </SignupBackgroud>  
         </SignupScreen>
    
  );
}

export default SignupPage;
