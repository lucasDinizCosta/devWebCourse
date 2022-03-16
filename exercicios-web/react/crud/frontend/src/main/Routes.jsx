import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

export default props => (
    <Routes>
        {/* Navega para Home se for exatamente(exact) o '/' */}
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/users" element={<UserCrud />}></Route>
        {/* Qualquer outra URL redireciona pra Home */}
        <Route path="*" element={<Home />}></Route>
    </Routes>
)