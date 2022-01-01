import  { SET_BOOKABLE_INDEX, SET_GROUP, SET_NEXT_BOOKABLE, TOGGLE_BOOKABLE_DETAILS } from '../actions/bookablesActions';

export function bookablesReducer(state = {}, action) {
    switch(action.type) {
        case SET_BOOKABLE_INDEX: 
            return { ...state, bookableIndex: action.payload };
        case SET_GROUP:
            return { ...state, group: action.payload, bookableIndex: 0 };
        case SET_NEXT_BOOKABLE: {
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