import React from 'react';
import PropTypes from 'prop-types';

import { TH } from '../presentional/table-header';
import { TR } from '../presentional/table-row';

class Character extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: [{ class: '', text: 'Name' }, { class: '', text: 'Action' }]
        };
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete({ e, index, text }) {
        console.log(e, index, text);
    }

    render() {

        const { headers } = this.state
        const { characters } = this.props

        const ths = headers.map((item, index) => <TH key={index} cssClass={item.class} text={item.text} />)
        const trs = characters.map((item, index) => <TR key={index} cssClass="" index={index} text={item.name} onDelete={this.onDelete} />)

        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            {ths}
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
            </div>
        )
    }

};

Character.propTypes = {
    characters: PropTypes.array.isRequired
};

export default Character;