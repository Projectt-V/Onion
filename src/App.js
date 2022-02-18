import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navigation from './Navigation';

const darkTheme = {
  theme: "dark",
  fontcolor: "#fff",
  headerBackground: "#2E2E2E",
  bodyBackground: "#393939",
  loginContainerBackground: "#474747",
  loginHeader: "#FEFEFE",
  buttonTextActive: "#fff",
  buttonTextInActive: "#D0D0D0",
  buttonBackgroundPrimary: "linear-gradient(225deg, #F16648, #C1005B)",
  buttonBackgroundSecondary: "linear-gradient(225deg, #9C2441, #53506D)",
  textBoxBackground: "#616161",
  messageBodyBackground:"#353535",
  messageHeaderBackground:"#353535",
  messageTextColor:"#fff",
  messageBoxBackground:"#474747",
  messageBoxBorder:"2px solid #9B9B9B",
  searchBar:"#353535",
  messageHeaderFontcolor:"#fff",
}


const lightTheme = {
  theme: "light",
  fontcolor: "#050505",
  loginHeader:"transparent",
  loginContainerBackground: "#fff",
  buttonTextActive: "#fff",
  headerBackground:"#fff",
  bodyBackground: "#fff",
  buttonTextActive: "#fff",
  buttonTextInActive: "#D0D0D0",
  buttonBackgroundPrimary: "linear-gradient(225deg, #F16648, #C1005B)",
  buttonBackgroundSecondary: "linear-gradient(225deg, #9C2441, #53506D)",
  textBoxBackground: "#E9E9E9",
  messageBodyBackground:"#fff",
  messageBodyBorder:" 0px 4px 16px 10px rgba(45, 45, 45, 0.25)",
  messageHeaderBackground:"#C1005B",
  messageBoxBackground:"transparent",
  messageTextColor:"#000",
  messageBoxBorder:" ",
  searchBar:"#E9E9E9",
  messageHeaderFontcolor:"#fff",
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
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
