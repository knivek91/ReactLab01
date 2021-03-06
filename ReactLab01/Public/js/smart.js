﻿import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import Character from './src/dump/characters';

class Smart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            error: ''
        };
    }

    componentWillMount() {
        axios.get('https://swapi.co/api/people/?page=1')
            .then(({ data }) => {
                const characters = data.results;
                this.setState({ characters });
            })
            .catch((error) => { this.setState({ error }) });
    }

    render() {
        const { characters } = this.state
        return (
            <Character characters={characters} />
        )
    }

}

render(
    <Smart />,
    document.getElementById('app')
);