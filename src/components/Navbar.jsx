import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <Link to='/'>Daily Tracker</Link>
                </li>
                <li>
                    <Link to='/casinostone'>Ability Stone</Link>
                </li>
                <li>
                    <Link to='/engraving'>Engraving Calculator</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar