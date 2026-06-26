import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrincipalView from '../src/pages/PrincipalView';
import Login from '../src/pages/Login';
import WebRTCPage from "./pages/WebRTCPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<PrincipalView />} />
            <Route path="/login" element={<Login />} />
            <Route
                    path="/webrtc"
                    element={<WebRTCPage />}
                />
        </Routes>
    );
};

export default App;