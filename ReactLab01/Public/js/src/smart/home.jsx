import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if (nextProps.message == 'no') {
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        return (
            <div>
                <span>{this.props.message}</span>
            </div>
        )
    }

}

Home.propTypes = {
    message: PropTypes.string.isRequired
};

Home.defaultProps = {
    message: '<Empty Message>'
}

export default Home;