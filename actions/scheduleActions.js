import {UPDATE_SCHEDULE} from './actionTypes';

export function updateSchedule({startTime, endTime, activeDays, reminderPeriod}) {
    return {
        type: UPDATE_SCHEDULE,
        scheduleData: {
            startTime,
            endTime,
            activeDays, 
            reminderPeriod,
        },
    }
}