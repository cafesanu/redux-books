
import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBookAction} from '@app/actions/select-book.action';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    className="list-group-item"
                    onClick={() => this.props.selectBookAction(book)}
                    key={book.title}
                >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStatetoProps(state) {
    return {
        books: state.books,
    };
}

// Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({
        selectBookAction,
    }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.
export const BookListContainer = connect(mapStatetoProps, mapDispatchToProps)(BookList);
