import gql from "graphql-tag";
import {Query} from "react-apollo";
import {
    GetCoStarQuery,
    GetCoStarQuery_allPersons,
    GetCoStarQuery_allPersons_films,
    GetCoStarQueryVariables
} from "./__generated__/GetCoStarQuery";

const getCoStars = gql`query GetCoStarQuery($id: ID!) {
    allPersons(
        filter: {
            id_not: $id,
            AND: [
                {species_some: {name: "Human"}},
                {films_some: {characters_some: {id: $id}}}
            ]
        }
    )
    {
        id
        name
        films(orderBy: episodeId_ASC) {
            id
            episodeId
        }
    },
    Person(id: $id) {
        id
        films(orderBy: episodeId_ASC) {
            id
            episodeId
        }
    }
}`;

export class GetCoStars extends Query<GetCoStarQuery, GetCoStarQueryVariables> {
    static defaultProps = {
        query: getCoStars,
    }
}

export function filterByConsecutiveMovies(basePersonFilms: GetCoStarQuery_allPersons_films[], persons: GetCoStarQuery_allPersons[], minConsecutive: number): GetCoStarQuery_allPersons[] {
    const basePersonEpisodeIds = basePersonFilms.map(film => film.episodeId);

    return persons.filter(person => {
        if (!person.films) return false;

        const personEpisodeIds = person.films.map(film => film.episodeId);
        const commonEpisodeIds = basePersonEpisodeIds.filter(episode => personEpisodeIds.includes(episode));

        return minConsecutiveSequence(minConsecutive, commonEpisodeIds);
    })
}

export function minConsecutiveSequence(minConsecutive: number, numbers: number[]): boolean {
    const sequences = new Map();
    let longestSequence = 1;

    for (const num of numbers) {
        if (sequences.has(num)) continue;

        const before = sequences.get(num - 1);
        const after = sequences.get(num + 1);

        let length = 1;
        length += (before || 0);
        length += (after || 0);


        longestSequence = Math.max(length, longestSequence);

        if (longestSequence >= minConsecutive) return true;

        sequences.set(num, length);

        if (before) sequences.set(num - before, length);
        if (after) sequences.set(num + after, length);
    }

    return longestSequence >= minConsecutive;
}
