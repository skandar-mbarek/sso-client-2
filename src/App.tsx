import React, {useEffect} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import ExchangePage from "./pages/exchange-page";
import HomePage from "./pages/home-page";
import ProtectedRoute from "./guards/protect-routes";
import {useExchangeToken} from "./hooks/use-exchange-token";
import {useAuthorizeClient} from "./hooks/use-authorize-client";

function App() {

    const authorizeClient = useAuthorizeClient();


    useEffect(() => {

        authorizeClient.mutate();

    },[]);

    if (authorizeClient.isPending) return <div>Loading...</div>;

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/login/exchange" element={<ExchangePage />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
