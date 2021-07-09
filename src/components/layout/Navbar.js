import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <Link to='/'>
                    <i className={props.icon} /> {props.title}
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
export default Navbar;
