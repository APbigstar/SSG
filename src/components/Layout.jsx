import React from 'react';
import Header from './Header';
import Menu from './Menu';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
const Layout  = (props) => {
    const  { isMenuOpen , setIsMenuOpen } = props
    return(
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <Menu isMenuOpen={isMenuOpen}/>
            <Outlet/>
        </>
    )
}

export default Layout

Layout.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired, // isMenuOpen should be a boolean and is required
    setIsMenuOpen: PropTypes.func.isRequired,
}