import React from 'react';
import {RouteComponentProps} from "react-router";
import {GetPersonDetail} from "../queries/getPersonDetail";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {NotAHuman, NotFound} from "../components/NotFound";
import PersonDataDisplay from "../components/PersonDataDisplay";
import {connect, MapDispatchToProps} from "react-redux";
import * as HistoryActions from "../store/history";
import {CoStars} from "../components/CoStars";
import {filterByConsecutiveMovies, GetCoStars} from "../queries/getCoStars";
import {GetCoStarQuery_allPersons} from "../queries/__generated__/GetCoStarQuery";

const MIN_CONSECUTIVE = 2;

interface Params {
    id: string;
}

interface PropsFromDispatch {
    addVisitedPerson: (id: string, name: string) => void
}

type Props = RouteComponentProps<Params> & PropsFromDispatch

const PersonDetail: React.FunctionComponent<Props> = ({match, addVisitedPerson}) => {
    const {id} = match.params;

    const coStars = <GetCoStars variables={{id}}>
        {({loading, error, data}) => {
            if (loading) return null;
            if (error || !data || !data.Person || !data.Person.films) return <Error/>;

            const appearedTogetherInMoreThanTwoMovies: GetCoStarQuery_allPersons[] = filterByConsecutiveMovies(data.Person.films, data.allPersons, MIN_CONSECUTIVE);

            if (appearedTogetherInMoreThanTwoMovies.length === 0) return null;

            return <CoStars stars={appearedTogetherInMoreThanTwoMovies}/>
        }}
    </GetCoStars>;

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

                addVisitedPerson(id, name);

                return <PersonDataDisplay
                    id={id}
                    name={name}
                    gender={gender || undefined}
                    appearedInFilms={films ? films.map(({title, releaseDate}) => ({
                        title,
                        releaseDate: new Date(releaseDate)
                    })) : undefined}
                    homeworldName={homeworld ? homeworld.name : undefined}
                >
                    {coStars}
                </PersonDataDisplay>
            }}
        </GetPersonDetail>
    )
};


const mapDispatchToProps: MapDispatchToProps<PropsFromDispatch, {}> = (dispatch) => ({
    addVisitedPerson: (id, name) => dispatch(HistoryActions.addVisitedPerson(id, name)),
});

export default connect(null, mapDispatchToProps)(PersonDetail);
