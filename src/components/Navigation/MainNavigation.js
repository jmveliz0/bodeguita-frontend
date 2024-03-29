import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../context/auth-context'

import './MainNavigation.css'

const mainNavigation = props => ( 
    <AuthContext.Consumer>
    {
        (context)=>{
            return (<header className="main-navigation">
            <div className="main-navigation__logo">
                <h1>Bodeguita</h1>
            </div>
            <nav className="main-navigation__items">
                <ul>
                    {!context.token && <li><NavLink to="/auth">Authenticate</NavLink></li>}
                    {context.token && <li><NavLink to="/home">Home</NavLink></li>}
                    {context.token && <li><NavLink id="products" to="/products">Products</NavLink></li>}
                </ul>
            </nav>
        </header>)
        }
    }
    
    </AuthContext.Consumer>
)

export default mainNavigation