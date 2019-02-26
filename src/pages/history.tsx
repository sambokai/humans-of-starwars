import React from 'react';
import {connect, MapStateToProps} from "react-redux";
import {ApplicationState} from "../store";
import PersonLink from "../components/PersonLink";
import {VisitedPerson} from "../store/history";

interface PropsFromState {
    visitedPersons: VisitedPerson[]
}

type Props = PropsFromState

const History: React.FunctionComponent<Props> = ({visitedPersons}) => {
    return (
        <section>
            <ul>
                {visitedPersons.map((person, i) => <li key={i}><PersonLink id={person.id} name={person.name}/></li>)}
            </ul>
        </section>
    )
};


const mapStateToProps: MapStateToProps<PropsFromState, undefined, ApplicationState> = (state) => ({
    visitedPersons: state.history.visitedPersons
});


export default connect(mapStateToProps)(History)
