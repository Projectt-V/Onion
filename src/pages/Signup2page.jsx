import React, {useEffect} from 'react';
import SignupHeader from '../components/SignupHeader';
import { SignupScreen, SignupContainer, SignupBox, SignupBackgroud, TextDiv, Label, SignupBoxText, SignupBtn  } from '../styles/SignupStyles';
import TextField from '../components/TextField';
import Button from '@material-ui/core/Button';
import SignupPage from './SignupPage';
import Aos from "aos";
import "aos/dist/aos.css";
import { useHistory } from 'react-router-dom';
 


function Signup2Page() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);

    const history = useHistory();

  return (
 
       <SignupScreen>
           <SignupBackgroud data-aos="fade-down" data-aos-delay="0">
           
           <SignupHeader/>  
              <SignupContainer>
               
                <SignupBox data-aos="fade-up" data-aos-delay="1000">
                    <div data-aos="fade-up" data-aos-delay="1900">
                    <Label>Password</Label>
                    <TextDiv>
                        <TextField type={"password"} placeholder={""} />
                    </TextDiv>
                    <Label>Confirm Password</Label>
                    <TextDiv>
                        <TextField type={"password"} placeholder={""} />
                    </TextDiv>
                    <SignupBtn>
                      <Button variant="contained" color="secondary" onClick={ () => history.push("/home") } >continue</Button>
                    </SignupBtn>  
                    </div>
                 </SignupBox>  
              </SignupContainer>
            </SignupBackgroud>  
         </SignupScreen>
        
     
  );
}

export default Signup2Page;