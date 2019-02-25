import gql from "graphql-tag";
import {Person} from "../types/types";
import {Query} from "react-apollo";

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

interface SearchAllPersonsResult {
    allPersons: Array<Person>
}

interface SearchAllPersonsVariables {
    queryString: string;
}

export class SearchAllPersonsQuery extends Query<SearchAllPersonsResult, SearchAllPersonsVariables> {
    static defaultProps = {
        query: searchAllPersons
    }
}
