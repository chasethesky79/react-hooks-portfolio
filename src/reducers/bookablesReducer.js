import  { SET_BOOKABLE_INDEX, SET_GROUP, SET_NEXT_BOOKABLE_INDEX, TOGGLE_BOOKABLE_DETAILS, FETCH_BOOKABLES_REQUEST, FETCH_BOOKABLES_SUCCESS, FETCH_BOOKABLES_ERROR } from '../actions/bookablesActions';

export function bookablesReducer(state = {}, action) {
    switch(action.type) {
        case FETCH_BOOKABLES_REQUEST: 
            return { ...state, bookables: [], isLoading: true, error: false }
        case FETCH_BOOKABLES_SUCCESS:
            return { ...state, isLoading: false, bookables: action.payload }
        case FETCH_BOOKABLES_ERROR:
            return { ...state, error: true, isLoading: false }
        case SET_BOOKABLE_INDEX: 
            return { ...state, bookableIndex: action.payload };
        case SET_GROUP:
            return { ...state, group: action.payload, bookableIndex: 0 };
        case SET_NEXT_BOOKABLE_INDEX: {
            const { bookableIndex, bookables, group } = state;
            const bookablesInGroup = bookables?.filter(bookable => bookable.group === group);
            return { ...state, bookableIndex: (bookableIndex + 1) % bookablesInGroup.length };
        }
        case TOGGLE_BOOKABLE_DETAILS: 
            return { ...state, showDetails: !state?.showDetails }
        default:
            return state;
    }
}