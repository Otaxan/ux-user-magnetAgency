import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
// import PullToRefresh from 'react-pull-to-refresh';


import avatar from '../images/avatar.png'



function Navbar() {
    const [isOpen, NavIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        NavIsOpen(!isOpen);
    };
    useEffect(() => {
        NavIsOpen(false);
    }, [location]);

    useEffect(() => {
        if (isOpen){
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);
    // Чтобы получалось обновлять страницу !=
    // const handleRefresh = () => {
    //     return new Promise((resolve) => {
    //         window.location.reload();
    //         resolve();
    //     })
    // }
    return (
        <>


            <nav>
                
                <div className="topnav">
                    
                    <div className="topleftnav" style={{ backgroundColor: 'black' }}>
                        <Link to="my_profile/" style={{ textDecoration: 'none', color: 'black' }}>
                        <img src={avatar} alt="avatar" />
                        </Link>
                        <div className="texttopleft">
                            <Link to="my_profile/" style={{ textDecoration: 'none', color: 'black' }}>
                            <h3>Александр</h3>
                            </Link>
                            <Link to="balance/" style={{ textDecoration: 'none', color: 'black' }}>
                            <p>Ваш баланс: 7000</p>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="hamburger" onClick={toggleMenu}>
                        <div className={`bar1 ${isOpen ? 'open' : ''}`}></div>
                        <div className={`bar2 ${isOpen ? 'open' : ''}`}></div>
                        <div className={`bar3 ${isOpen ? 'open' : ''}`}></div>
                    </div>
                </div>
                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                    {/* <div className="close-btn" onClick={toggleMenu}>
                    <div className="bar1">×</div>
                    
                    </div> */}
                    <ul>
                        <Link to="my_profile/" className="linknav">ПРОФИЛЬ</Link>
                        <Link to="all_offers/" className="linknav">ОФФЕРЫ</Link>
                        <Link to="statistics/" className="linknav">СТАТИСТИКА</Link>
                        <Link to="balance/" className="linknav">БАЛАНС</Link>
                    </ul>
                </div>

            </nav>
        </>
    )
}


export default Navbar;