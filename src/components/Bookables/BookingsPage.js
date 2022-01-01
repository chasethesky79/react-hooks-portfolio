import WeekPicker from "../Week/WeekPicker";

export default function BookingsPage() {
    return (
        <div>
            <WeekPicker date={new Date()}/>
        </div>
    )
}