import React, { Component } from 'react';
import {BookListContainer} from '@app/containers/book-list/book-list.container';
import {BookDetailContainer} from '@app/containers/book-detail/book-detail.container';

export class App extends Component {
    render() {
        return (
            <div>
                <BookListContainer />
                <BookDetailContainer />
            </div>
        );
    }
}
