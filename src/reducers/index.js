import { combineReducers } from 'redux';
import OperatorsReducer from './OperatorsReducer';
import DashboardReducer from './DashboardReducer';
import OperatorsFormReducer from './OperatorsFormReducer';

export default combineReducers({
  operators: OperatorsReducer,
  dashboard: DashboardReducer,
  operatorsForm: OperatorsFormReducer
});
