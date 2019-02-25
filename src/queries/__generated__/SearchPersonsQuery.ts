/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchPersonsQuery
// ====================================================

export interface SearchPersonsQuery_allPersons {
  __typename: "Person";
  id: string;
  /**
   * The name of this person.
   */
  name: string;
}

export interface SearchPersonsQuery {
  allPersons: SearchPersonsQuery_allPersons[];
}

export interface SearchPersonsQueryVariables {
  queryString: string;
}
