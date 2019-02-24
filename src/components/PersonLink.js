import React from 'react';
import {Link} from "react-router-dom";

import {PERSON_DETAIL} from "../routes";

export const PersonLink = ({id}) => {
    return (
        <Link to={PERSON_DETAIL(id)}>
            {id}
        </Link>
    )
};
