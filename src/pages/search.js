import React from 'react';
import {PersonLink} from "../components/PersonLink";

export const Search = () => {
    return (
        <section>
            <form>
                <input type="text" placeholder="Skywalker"/>
                <button type="submit">Search</button>
            </form>

            <ul>
                <li><PersonLink id="xyz123"/></li>
            </ul>
        </section>
    )
};
