import {PERSON_GENDER} from "../../__generated__/globalTypes";

const getGenderString = (gender?: PERSON_GENDER) => {
    switch (gender) {
        case PERSON_GENDER.FEMALE:
            return "Female";
        case PERSON_GENDER.MALE:
            return "Male";
        case PERSON_GENDER.HERMAPHRODITE:
            return "Hermaphrodite";

        case PERSON_GENDER.UNKNOWN:
        default:
            return undefined;
    }
};

export default getGenderString;
