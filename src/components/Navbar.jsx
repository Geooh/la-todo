import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <ul>
                <li>
                    <a href='https://jgallagher.github.io/lostark-refining/'>Ability Stone</a>
                </li>
                <br/><br/>
                <li>
                    <a href='https://loa-todo.com/engrave'>Engraving Calculator</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar