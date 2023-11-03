import React from 'react';
import Header from './Header';
import Menu from './Menu';


const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // eslint-disable-next-line react/prop-types
    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Menu isMenuOpen={isMenuOpen} />
        </>
    )
}

export default Layout

