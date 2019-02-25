import React, {ChangeEvent, Component, FormEvent} from 'react';
import PersonLink from "../components/PersonLink";

import {ApolloConsumer} from "react-apollo";
import gql from "graphql-tag";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Person} from "../types/types";
import ApolloClient from "apollo-client/ApolloClient";


interface SearchAllPersonsResult { allPersons: Array<Person> }
interface SearchAllPersonsVariables {queryString: string;}

const searchAllPersons = gql`query SearchPersonsQuery($queryString: String!) {
    allPersons(filter: {
        name_contains: $queryString
        AND: {species_some: {name: "Human"}}
    }) {
        id
        name
        homeworld {
            name
        }
    }
}`;


interface State {
    searchInput: string;
    searchResults?: Array<Person>
    loading: boolean;
    error: boolean;
}

export class Search extends Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            searchInput: '',
            loading: false,
            error: false,
        }
    }


    render() {
        const {searchResults, loading, error} = this.state;
        return (
            <section>
                <ApolloConsumer>
                    {(client) => (
                        <form onSubmit={event => this.handleSubmit(event, client)}>
                            <input type="text" placeholder="Skywalker" value={this.state.searchInput}
                                   onChange={this.handleSearchInputChange}/>

                            <button type="submit">Search</button>
                        </form>
                    )}
                </ApolloConsumer>


                {loading && <Loading/>}
                {error && <Error/>}

                <ul>
                    {searchResults && searchResults.map(({id, name}, key) =>
                        <li key={key}>
                            <PersonLink id={id} name={name}/>
                        </li>
                    )}
                </ul>
            </section>
        )
    }

    private handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({searchInput: event.target.value})
    };

    private async handleSubmit(event: FormEvent, client: ApolloClient<any>) {
        event.preventDefault();
        this.setState({loading: true});

        client.query<SearchAllPersonsResult, SearchAllPersonsVariables>({
            query: searchAllPersons,
            variables: {queryString: this.state.searchInput}
        })
            .then(({data}) => {
                return this.setState({searchResults: data.allPersons});
            })
            .catch((error: any) => {
                console.log(error);
                return this.setState({error: true});
            })
            .finally(() => this.setState({loading: false}));

    };
}
