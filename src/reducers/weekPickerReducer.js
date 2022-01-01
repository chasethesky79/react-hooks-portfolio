import { getWeek } from "../utils/date-wrangler";
import { CURRENT_WEEK, NEXT_WEEK, PREV_WEEK, SET_DATE } from "../actions/weekPickerActions";

export function weekPickerReducer(state = {}, action) {
    switch(action.type) {
        case PREV_WEEK: 
            return getWeek(state.date, -7);
        case CURRENT_WEEK:
            return getWeek(new Date());
        case NEXT_WEEK: 
            return getWeek(state.date, 7);
        case SET_DATE:
            return getWeek(action.payload);
        default:
            return state.date;
    }
}