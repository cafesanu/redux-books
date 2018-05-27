import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    onChange={(event) => this.onInputChange(event.target.value)}
                    value={this.state.term}
                />
                <div>Value of input: {this.state.term}</div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({
            term,
        });
        this.props.onSearchTermChange(term);
    }
}

SearchBar.propTypes = {
    onSearchTermChange: PropTypes.func.isRequired,
};
