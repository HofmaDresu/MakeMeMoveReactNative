import {connect} from 'react-redux';
import MyScheduleView from '../views/schedule';

const mapStateToProps = state => ({
    schedule: state.schedule,
});

const mapDispatchToProps = () => ({
  });

  const Schedule = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyScheduleView);
   
  export default Schedule