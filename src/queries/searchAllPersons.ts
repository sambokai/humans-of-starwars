import gql from "graphql-tag";
import {Query} from "react-apollo";
import {SearchPersonsQuery, SearchPersonsQueryVariables} from "./__generated__/SearchPersonsQuery";

const searchAllPersons = gql`query SearchPersonsQuery($queryString: String!) {
    allPersons(filter: {
        name_contains: $queryString
        AND: {species_some: {name: "Human"}}
    }) {
        id
        name
    }
}`;


export class SearchAllPersons extends Query<SearchPersonsQuery, SearchPersonsQueryVariables> {
    static defaultProps = {
        query: searchAllPersons
    }
}
