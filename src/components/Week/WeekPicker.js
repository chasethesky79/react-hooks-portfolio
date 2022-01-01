import { useReducer } from "react";
import { weekPickerReducer } from "../../reducers/weekPickerReducer";
import { getWeek } from "../../utils/date-wrangler";
import { FaArrowLeft, FaArrowRight, FaCalendarDay } from 'react-icons/fa';

export default function WeekPicker({ date }) {
    const [week, dispatch ] = useReducer(weekPickerReducer, date, getWeek);
    const { firstDayOfWeek, lastDayOfWeek } = week;
    return (
        <>
            <div className='week-picker'>
                <button className='btn' onClick={ () => dispatch({ type: 'PREV_WEEK' })}  autoFocus><FaArrowLeft/><span>Prev</span></button>
                <button className='btn' onClick={ () => dispatch({ type: 'CURRENT_WEEK' })}  autoFocus><FaCalendarDay/><span>Today</span></button>
                <button className='btn' onClick={ () => dispatch({ type: 'NEXT_WEEK' })}  autoFocus><FaArrowRight/><span>Next</span></button>
            </div>
            <p style={{ textAlign: 'center' }}>{firstDayOfWeek?.toDateString()} - {lastDayOfWeek?.toDateString()}</p>
        </>
    )
}