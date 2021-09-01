import React, {useState} from 'react';
import {GlobalStyles, Primary} from './Layout.styles';
import Hamburger from '../Hamburger/Hamburger';
import OverlayMenu from '../OverlayMenu/OverlayMenu';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Overlay } from '../OverlayMenu/OverlayMenu.styles';

const Layout = ({children}) =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const handleOverlayMenu = () => setMenuOpen(prev => !prev)
    return (
        <>
          <GlobalStyles />
          <Hamburger handleOverlaymenu={handleOverlayMenu} />
          <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
          <Header></Header>
          <Primary>{children}</Primary>
          <Footer></Footer>
        </>
    )
}
export default Layout;
