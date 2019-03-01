import React from 'react';
import {PERSON_GENDER} from '../__generated__/globalTypes';
import getGenderString from "../queries/utils/getGenderString";

interface Props {
    id: string;
    name: string;
    gender?: PERSON_GENDER;
    homeworldName?: string;
    appearedInFilms?: Film[];
}

interface Film {
    title: string;
    releaseDate: Date;
}



const PersonDataDisplay: React.FunctionComponent<Props> = ({name, gender, homeworldName, appearedInFilms, children}) => {


    return (
        <article>
            <h2>{name}</h2>
            <h4>{getGenderString(gender)} {homeworldName && `from ${homeworldName}`}</h4>


            {appearedInFilms && <ul>
                <p>Appeared in:</p>
                {appearedInFilms.map((film, i) => <li key={i}>{film.title} ({film.releaseDate.getFullYear()})</li>)}
            </ul>}

            {children}

        </article>
    )
};

export default PersonDataDisplay;
