import React from 'react';
import PersonLink from "../components/PersonLink";

import {Query} from "react-apollo";
import gql from "graphql-tag";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Person} from "../types/types";

class AllPersonsQuery extends Query<{
    allPersons:  Array<Person>,
}, {}> {}

const getAllPersons = gql`{
    allPersons(filter: {species_some: {name: "Human"}}) {
        id
        name
        homeworld {
            name
        }
    }
}`;

export const Search = () => {
    return (
        <section>
            <form>
                <input type="text" placeholder="Skywalker"/>
                <button type="submit">Search</button>
            </form>


            <ul>
                <AllPersonsQuery query={getAllPersons}>
                    {({loading, error, data}) => {
                        if (loading) return <Loading/>;
                        if (error ||!data) return <Error/>;

                        return data.allPersons.map(({id, name}) =>
                            <li key={id}>
                                <PersonLink id={id} name={name}/>
                            </li>
                        );
                    }}
                </AllPersonsQuery>
            </ul>
        </section>
    )
};
