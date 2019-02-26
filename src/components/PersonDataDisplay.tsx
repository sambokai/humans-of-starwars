import React from 'react';
import {PERSON_GENDER} from '../__generated__/globalTypes';

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

const getGenderString = (gender?: PERSON_GENDER) => {
    switch (gender) {
        case PERSON_GENDER.FEMALE:
            return "Female";
        case PERSON_GENDER.MALE:
            return "Male";
        case PERSON_GENDER.HERMAPHRODITE:
            return "Hermaphrodite";

        case PERSON_GENDER.UNKNOWN:
        default:
            return undefined;
    }
};

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
