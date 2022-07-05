import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <ul>
                <li>
                    <a href='https://jgallagher.github.io/lostark-refining/'>Ability Stone</a>
                </li>
                <br />
                <li>
                    <a href='https://loa-todo.com/engrave'>Engraving Calculator</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar