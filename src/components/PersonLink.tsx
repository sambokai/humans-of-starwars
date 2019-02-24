import React from 'react';
import {Link} from "react-router-dom";

import {PERSON_DETAIL} from "../routes";

interface Props {
    id: string;
}

const PersonLink: React.FunctionComponent<Props> = ({id}) => {
    return (
        <Link to={PERSON_DETAIL(id)}>
            {id}
        </Link>
    )
};

export default PersonLink;
