import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
<<<<<<< HEAD
import Navigation from './Navigation';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Signup2Page from './pages/Signup2page';
=======
<<<<<<< HEAD
import Navigation from './Navigation';

=======
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Signup2Page from './pages/Signup2page';
>>>>>>> 5f41c596236afe9081b82d8ffbdc69b1478adff2
>>>>>>> loginpage

const darkTheme = {
  headerBackground: "#2E2E2E",
  bodyBackground: "#393939",
  fontcolor: "#fff",
  loginHeader: "FEFEFE",
  buttonTextActive: "#fff",
  buttonTextInActive: "#D0D0D0",
  buttonBackgroundPrimary: "linear-gradient(225deg, #F16648, #C1005B)",
  buttonBackgroundSecondary: "linear-gradient(225deg, #9C2441, #53506D)",
};


const lightTheme = {
  background: "#fffff",
  font: "black"
};



function App() {

  const GlobalStyles = createGlobalStyle`
  * {
  text-decoration: none;
  margin:0;
  padding:0;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
}
body {
  font-size: 16px;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: "#c4c4c4";
  overscroll-behavior: none;
  overflow-x: hidden;
}
   
`;

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
<<<<<<< HEAD
      <Navigation />
      <Signup2Page />
      
=======
<<<<<<< HEAD
      <Navigation />
=======
      <Signup2Page />
      
>>>>>>> 5f41c596236afe9081b82d8ffbdc69b1478adff2
>>>>>>> loginpage
    </ThemeProvider>
  );
}

export default App;
