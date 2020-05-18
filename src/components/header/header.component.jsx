import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import Logo from "../../assets/img/logo.png";
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component.js';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.js';
import {connect} from 'react-redux';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img alt="logo" src={Logo} className="logo"></img>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <Link className="option" to="/signin" onClick={()=> auth.signOut()}>
                    SIGN OUT
                </Link> :
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
                
            }
            <CartIcon />
        </div>
        { 
          !hidden && <CartDropdown />
        }
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);