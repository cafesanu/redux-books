import { combineReducers } from 'redux';
import { booksReducer } from '@app/reducers/books.reducer';
import { activeBookReducer } from '@app/reducers/active-book.reducer';

export const rootReducer = combineReducers({
    books: booksReducer,
    activeBook: activeBookReducer

});
