import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Occurrences, Notifications, Users, Regions } from '../pages/index'

const RoutesParams: React.FC = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/occurrences" element={<Occurrences />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/users" element={<Users />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/" element={<Dashboard />} />
        </Routes>
    )
};

export default RoutesParams;