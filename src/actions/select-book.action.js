export function selectBookAction(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    };

}
