import React from 'react';
import {RouteComponentProps} from "react-router";

interface Params {
    id: string;
}

type Props = RouteComponentProps<Params>

export const PersonDetail: React.FunctionComponent<Props> = ({match}) => {
    return (
        <p>Person detail placeholder for #{match.params.id}</p>
    )
};
