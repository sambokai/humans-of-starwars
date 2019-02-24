import React from 'react';
import {Link} from "react-router-dom";
import {HISTORY, ROOT} from "../routes";

const NavBar = () => {
    return (
        <nav>
            <h3>The Humans of Star Wars</h3>
            <ul>
                <li>
                    <Link to={ROOT}>Search</Link>
                </li>
                <li>
                    <Link to={HISTORY}>History</Link>
                </li>
            </ul>
            <hr/>
        </nav>
    )
};

export default NavBar;
