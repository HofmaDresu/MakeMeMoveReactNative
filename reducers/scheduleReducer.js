import {UPDATE_SCHEDULE} from "../actions/actionTypes";


const initialState = {
    isRunning: true,
    startTime: '8:30 AM',
    endTime: '5:00 PM',
    activeDays: 'Weekdays Only',
    reminderPeriod: 'Every Half Hour',
}

export default function schedule(state = initialState, action) {
    switch(action.type) {
        case UPDATE_SCHEDULE:
            return Object.assign({}, state, action.scheduleData);
        default:
            return state;
    }
}