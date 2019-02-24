export interface Person {
    __typename: "Person",
    id: string,
    // The name of this person.
    name: string,
    homeworld: Planet;
}

interface Planet {
    __typename: "Planet",
    // The name of the planet
    name: string,
}
