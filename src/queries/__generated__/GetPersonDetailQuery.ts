/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetPersonDetailQuery
// ====================================================

import {PERSON_GENDER} from "../../__generated__/globalTypes";

export interface GetPersonDetailQuery_Person_species {
  __typename: "Species";
  /**
   * The name of this species.
   */
  name: string;
}

export interface GetPersonDetailQuery_Person_homeworld {
  __typename: "Planet";
  /**
   * The name of the planet
   */
  name: string;
}

export interface GetPersonDetailQuery_Person_films {
  __typename: "Film";
  /**
   * The title of this film
   */
  title: string;
  /**
   *  The ISO 8601 date format of film release at original creator country.
   */
  releaseDate: any | null;
}

export interface GetPersonDetailQuery_Person {
  __typename: "Person";
  id: string;
  /**
   * The name of this person.
   */
  name: string;
  /**
   *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
   */
  gender: PERSON_GENDER | null;
  species: GetPersonDetailQuery_Person_species[] | null;
  homeworld: GetPersonDetailQuery_Person_homeworld | null;
  films: GetPersonDetailQuery_Person_films[] | null;
}

export interface GetPersonDetailQuery {
  Person: GetPersonDetailQuery_Person | null;
}

export interface GetPersonDetailQueryVariables {
  id: string;
}
