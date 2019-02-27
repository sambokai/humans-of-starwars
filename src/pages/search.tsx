import React, {ChangeEvent, Component, FormEvent} from 'react';
import PersonLink from "../components/PersonLink";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {SearchAllPersons} from "../queries/searchAllPersons";
import {RouteComponentProps} from "react-router";

interface State {
    userInput: string;
}

interface QueryParams {
    q: string;
}

type Props = RouteComponentProps<QueryParams>

export class Search extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            userInput: '',
        }
    }

    public render() {
        const params = new URLSearchParams(this.props.location.search);
        const queryString: string | null = params.get('q');

        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Skywalker"
                        value={this.state.userInput}
                        onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Search</button>
                </form>

                {queryString && <ul>
                    <SearchAllPersons variables={{queryString}}>
                        {({loading, error, data}) => {
                            if (loading) return <Loading/>;
                            if (error || !data) return <Error/>;

                            return data.allPersons.map(({id, name}) =>
                                <li key={id}>
                                    <PersonLink id={id} name={name}/>
                                </li>
                            );
                        }}
                    </SearchAllPersons>
                </ul>}
            </section>
        )
    }

    private handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({userInput: event.target.value})
    };

    private handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const {userInput} = this.state;

        this.props.history.push({search: userInput ? `?q=${userInput}` : undefined})
    };
}
