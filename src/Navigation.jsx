import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import Signup2page from './pages/Signup2page';
import NewPost from './pages/NewPost';
import HomePage from './pages/HomePage';
import HomeHeader from './components/HomeHeader';
import BottomNavigator from './components/BottomNavigator';
import LoginHeader from './components/LoginHeader';


function Navigation() {

    const widt = window.innerWidth;

    const [bottomNav, setBottomNav] = useState(false);

    if(widt == 768){
        setBottomNav(true);
    }

    const BottomNavstyle = {
        display: "none"
    }
 
    return (
        <Router>
            {
            
              (window.location.pathname == "/login") ? (<LoginHeader />) : (<HomeHeader />)

            }

            <Switch>
                {["/", "/login"].map((path, index) =>
                    <Route exact path={path} key={index}><LoginPage /></Route>
                )}

                <Route exact path="/signup"><SignupPage /></Route>

                <Route path={"/getpassword"} ><Signup2page /></Route>

                <Route path={"/home"} ><HomePage /></Route>

                <Route path={"/newpost"} ><NewPost /></Route>

            </Switch>

            <BottomNavigator/>
            
        </Router>
    );
}



export default Navigation;
