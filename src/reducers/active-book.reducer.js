// State argument is not application state. It is only the state
// this reducer is responsible for
export function activeBookReducer(state = null, action) {
    debugger;
    switch (action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}
