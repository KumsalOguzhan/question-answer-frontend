import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import RouteGuard from "./components/RouteGuard"

//history
import { history } from './helpers/history';
import AskQuestion from "./pages/AskQuestion";

//pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/Login"
import Question from "./pages/Question";
import Register from "./pages/Register";
import Users from "./pages/Users";

function Routers() {
    return (
        <BrowserRouter>
            <Routes history={history}>
                <Route path="/" element={<RouteGuard />}>
                    <Route element={<Layout />}>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/question/:questionId" element={<Question />} />
                        <Route path="/ask-question" element={<AskQuestion />} />
                        <Route path="/users" element={<Users />} />
                    </Route>
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers