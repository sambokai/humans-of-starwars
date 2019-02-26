/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCoStarQuery
// ====================================================

export interface GetCoStarQuery_allPersons_films {
  __typename: "Film";
  id: string;
  /**
   * The episode number of this film.
   */
  episodeId: number;
}

export interface GetCoStarQuery_allPersons {
  __typename: "Person";
  id: string;
  /**
   * The name of this person.
   */
  name: string;
  films: GetCoStarQuery_allPersons_films[] | null;
}

export interface GetCoStarQuery_Person_films {
  __typename: "Film";
  id: string;
  /**
   * The episode number of this film.
   */
  episodeId: number;
}

export interface GetCoStarQuery_Person {
  __typename: "Person";
  id: string;
  films: GetCoStarQuery_Person_films[] | null;
}

export interface GetCoStarQuery {
  allPersons: GetCoStarQuery_allPersons[];
  Person: GetCoStarQuery_Person | null;
}

export interface GetCoStarQueryVariables {
  id: string;
}
