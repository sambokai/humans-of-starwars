import React from 'react';
import {filterByConsecutiveMovies, GetCoStars} from "../queries/getCoStars";
import Error from "./Error";
import PersonLink from "./PersonLink";

interface OwnProps {
    of: string;
    minConsecutive: number;
}

export const CoStars: React.FunctionComponent<OwnProps> = ({of, minConsecutive}) => {

    return (
            <GetCoStars variables={{id: of}}>
                {({loading, error, data}) => {
                    if (loading) return null;
                    if (error || !data || !data.Person || !data.Person.films) return <Error/>;

                    const appearedTogetherInMoreThanTwoMovies = filterByConsecutiveMovies(data.Person.films, data.allPersons, minConsecutive);

                    if (appearedTogetherInMoreThanTwoMovies.length === 0) return null;

                    return (
                        <ul>
                            <p>Co-Stars:</p>

                            {appearedTogetherInMoreThanTwoMovies.map(({id, name}) => (
                                    <li key={id}><PersonLink id={id} name={name}/></li>)
                            )}
                        </ul>
                    )
                }}
            </GetCoStars>
    )
};
