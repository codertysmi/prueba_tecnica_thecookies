import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/TheCookies.svg'


export default function Navbar(){
    return (
        <nav style={{maxWidth: "85%"}}>
            <img src={logo} alt="logo" style={{width: "200px", height: "auto"}}/>
            <div className="links">
                <Link activeStyle={{fontWeight: 900}} to="/">Prueba técnica</Link>
                <Link activeStyle={{fontWeight: 900}} to="/requisitos">Requisitos</Link>
            </div>
        </nav>
    )
}