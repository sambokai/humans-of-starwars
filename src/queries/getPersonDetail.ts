import gql from "graphql-tag";
import {Query} from "react-apollo";
import {GetPersonDetailQuery, GetPersonDetailQueryVariables} from "./__generated__/GetPersonDetailQuery";

const getPersonDetail = gql`query GetPersonDetailQuery($id: ID!) {
    Person(id: $id) {
        id
        name
        gender
        species {
            name
        }
        homeworld {
            name
        }
        films(orderBy: episodeId_ASC) {
            title
            releaseDate
        }
    }
}`;

export class GetPersonDetail extends Query<GetPersonDetailQuery, GetPersonDetailQueryVariables> {
    static defaultProps = {
        query: getPersonDetail
    }
}
