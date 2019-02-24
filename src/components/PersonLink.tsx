import React from 'react';
import {Link} from "react-router-dom";

import {PERSON_DETAIL} from "../routes";

interface Props {
    id: string;
    name: string;
}

const PersonLink: React.FunctionComponent<Props> = ({id, name}) => {
    return (
        <Link to={PERSON_DETAIL(id)}>
            {name}
        </Link>
    )
};

export default PersonLink;
