import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function Navigation() {
    return (
        <Router>
            <Routes>
                {["/", "/login"].map((path, index) =>
                    <Route path={path} element={<LoginPage />} key={index} />
                )}
            </Routes>
        </Router>
    );
}



export default Navigation;
