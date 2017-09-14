import React from 'react';
import { render } from 'react-dom';

import Home from './src/smart/home';


class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.onChange = this.onChange.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    
    render() {

        const { message } = this.state

        return (
            <div className="jumbotron">
                <input name="message" value={message} onChange={this.onChange} placeholder="Escribe . . . " className="form-control" />
                <hr />
                <Home message={message} />
            </div>
        )
    }

}

render(
    <Layout />,
    document.getElementById('app')
);