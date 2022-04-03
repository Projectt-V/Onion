import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navigation from './Navigation';

const darkTheme = {
  theme: "dark",
  fontcolor: "#fff",
  headerBackground: "#2E2E2E",
  headerBottomBorder:'none',
  bodyBackground: "#393939",
  loginContainerBackground: "#474747",
  loginHeader: "#FEFEFE",
  buttonTextActive: "#fff",
  buttonTextInActive: "#D0D0D0",
  buttonBackgroundPrimary: "linear-gradient(225deg, #F16648, #C1005B)",
  buttonBackgroundSecondary: "linear-gradient(225deg, #9C2441, #53506D)",
  textBoxBackground: "#616161",
  messageBodyBackground:"#353535",
  messageHeaderBackground:"#2E2E2E",
  messageHeaderBottom:'none',
  messageTextColor:"#fff",
  messageBoxBackground:"#353535",
  messageBoxBorder:"1px solid #9B9B9B",
  searchBar:"#353535",
  messageHeaderFontcolor:"#fff",
  notifyBoxBackground:"#474747",
  notifyBoxShadow:"none"
}


const lightTheme = {
  theme: "light",
  fontcolor: "#050505",
  loginHeader:"transparent",
  loginContainerBackground: "#fff",
  buttonTextActive: "#fff",
  headerBackground:"#fff",
  headerBottomBorder:'2px solid #E9E9E9',
  bodyBackground: "#fff",
  buttonTextActive: "#fff",
  buttonTextInActive: "#D0D0D0",
  buttonBackgroundPrimary: "linear-gradient(225deg, #F16648, #C1005B)",
  buttonBackgroundSecondary: "linear-gradient(225deg, #9C2441, #53506D)",
  textBoxBackground: "#E9E9E9",
  messageBodyBackground:"#fff",
  messageBodyBorder:" 0px 4px 16px 10px rgba(150, 150, 150, 0.25);",
  messageHeaderBackground:"#E9E9E9",
  messageBoxBackground:"transparent",
  messageTextColor:"#000",
  messageBoxBorder:"1px solid #E9E9E9",
  messageHeaderBottom:'none',
  searchBar:"#E9E9E9",
  messageHeaderFontcolor:"#000",
  notifyBoxBackground:"linear-gradient(94.32deg, rgba(214, 214, 214, 0.19) 0%, rgba(196, 196, 196, 0.22) 100%)",
  notifyBoxShadow:"16px 16px 32px #fff, inset 4px 4px 16px #E5E5E5, inset -8px -8px 16px #e6e6e6",
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
