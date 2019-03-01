import React from 'react';
import PersonLink from "./PersonLink";

interface OwnProps {
    stars: ReadonlyArray<{
        id: string;
        name: string;
    }>
}

export const CoStars: React.FunctionComponent<OwnProps> = ({stars}) => {

    if (!stars || stars.length === 0) return null;

    return <ul>
        <p>Co-Stars:</p>

        {stars.map(({id, name}) => <li key={id}><PersonLink id={id} name={name}/></li>)}
    </ul>
};
