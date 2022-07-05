import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"

//history
import { history } from './helpers/history';

//pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/Login"
import Register from "./pages/Register";

function Routers() {
    return (
        <BrowserRouter>
            <Routes history={history}>
                <Route path="/" element={<RouteGuard />}>
                    <Route path="/home" element={<HomePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers