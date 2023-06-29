import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './NavBar.css';

function NavBar() {
    const [isScrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let navbarClasses = ['NavBar'];
    if (isScrolled) {
        navbarClasses.push('scrolled');
    }
    return (

        <nav className={navbarClasses.join('')}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <li>
                        <Link to='/photography'>Photography</Link>
                    </li>
                    <ul>
                        <li>
                            <Link to='/analog'>Analog</Link>
                        </li>
                        <li>
                            <Link to='/digital'>Digital</Link>
                        </li>
                        <li>
                            <Link to='/aerial'>Aerial</Link>
                        </li>
                    </ul>
                </li>
                <li>
                <li>
                    <Link to='/experience'>Experience</Link>
                </li>
                    <ul>
                        <li>
                            <Link to='/education'>Education</Link>
                        </li>
                        <li>
                            <Link to='/work'>Work Experience</Link>
                        </li>
                        <li>
                            <Link to='/clubs'>Extracurriculars</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/info">Info</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;