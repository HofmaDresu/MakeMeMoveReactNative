
import {  DrawerNavigator, TabNavigator } from 'react-navigation';
import  ScheduleScreen from './views/schedule';
import  ExercisesScreen from './views/exercises';


const TabStack = TabNavigator({
    MySchedule: {screen: ScheduleScreen},
    MyExercises: {screen: ExercisesScreen},
})


export default DrawerNavigator(
    {
        Main: {
            screen: TabStack,
        },
    }
)