import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [page, setPage] = useState('home');
    const [open, setOpen] = useState(false);

    const navColor = {
        'home': '#6c5ce7',
        'pricing': 'crimson',
        'contact': '#3e93fa'
    };

    const Navbar = styled.nav`
        padding: 0 2rem; 
        height: 8rem;
        border-bottom: 1px solid ${navColor[page]};
        justify-content: space-between;
    `;

    const LogoLink = styled.a`
        text-decoration: none;
        color: ${navColor[page]};
        text-decoration: underline ${navColor[page]};
    `

    const Logo = styled.h1`
        font-size: 3.5rem;
    `

    const Menu = styled.ul`
        width: 45%;
        justify-content: space-evenly;
    `

    const MenuItem = styled.li`
        list-style: none;
    `

    const MenuLink = styled(Link)`
        text-decoration: none;
        font-size: 2rem;
        color: #616161;
        font-weight: 500;
    `

    const Button = styled.button`
        font-size: 1.7rem;
        width: 13rem;
        height: 4rem;
        background-color: ${navColor[page]};
        color: white;
        border: 2px solid white;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
        padding: 0.5rem 1rem;
    `;

    const Hamburger = styled.div`
        font-size: 3rem;
        color: ${navColor[page]};
        font-weight: bold;
        display: none;
        cursor: pointer;
    `

    return (
        <>
            <Navbar className='d-flex navbar' >
                <Logo className='logo'><LogoLink to="/">Aman</LogoLink></Logo>


                {
                    open ? <Hamburger className="hamburger" onClick={() => setOpen(!open)}>&#x78;</Hamburger> : <Hamburger className="hamburger" onClick={() => setOpen(!open)}>&#x2630;</Hamburger>
                }


                <Menu className={`d-flex menu ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                    <MenuItem><MenuLink className='nav-link' to='/' onClick={() => setPage('home')} >Home</MenuLink></MenuItem>
                    <MenuItem><MenuLink className='nav-link' to='/' onClick={() => setPage('home')} >Features</MenuLink></MenuItem>
                    <MenuItem><MenuLink className='nav-link' to='/' onClick={() => setPage('home')} >Services</MenuLink></MenuItem>
                    <MenuItem><MenuLink className='nav-link' to='pricing' onClick={() => setPage('pricing')} >Pricing</MenuLink></MenuItem>
                    <MenuItem><MenuLink className='nav-link' to='/contact' onClick={() => setPage('contact')} >Contact</MenuLink></MenuItem>
                </Menu>

                <Button className='join-btn'>Join today</Button>


            </Navbar>



        </>
    )
}

export default Navbar
