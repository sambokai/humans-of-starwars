import React from 'react';
import {RouteComponentProps} from "react-router";
import {GetPersonDetail} from "../queries/getPersonDetail";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {NotAHuman, NotFound} from "../components/NotFound";
import PersonDataDisplay from "../components/PersonDataDisplay";

interface Params {
    id: string;
}

type Props = RouteComponentProps<Params>

export const PersonDetail: React.FunctionComponent<Props> = ({match}) => {
    const {id} = match.params;
    return (
        <GetPersonDetail variables={{id}}>
            {({loading, error, data}) => {
                if (loading) return <Loading/>;
                if (error || !data) return <Error/>;

                const {Person} = data;

                if (!Person) return <NotFound/>;

                if (Person.species && !Person.species.some(species => species.name.toUpperCase() === "HUMAN")) {
                    return <NotAHuman/>
                }

                const {id, name, gender, homeworld, films} = Person;

                return <PersonDataDisplay
                    id={id}
                    name={name}
                    gender={gender || undefined}
                    appearedInFilms={films ? films.map(({title, releaseDate}) => ({
                        title,
                        releaseDate: new Date(releaseDate)
                    })) : undefined}
                    homeworldName={homeworld ? homeworld.name : undefined}
                />
            }}
        </GetPersonDetail>
    )
};
