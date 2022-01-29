import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import Signup2page from './pages/Signup2page';
import HomePage from './pages/HomePage';

function Navigation() {
    return (
        <Router>
            <Switch>
                {["/", "/login"].map((path, index) =>
                    <Route exact path={path} key={index}><LoginPage /></Route>
                )}

                <Route exact path="/signup"><SignupPage /></Route>

                <Route path={"/getpassword"} ><Signup2page /></Route>

                <Route path={"/home"} ><HomePage /></Route>
            </Switch>
        </Router>
    );
}



export default Navigation;
