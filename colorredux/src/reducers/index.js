import { combineReducers } from 'redux';

import color from './color';

const reducers = combineReducers({
  colorState: color
});

export default reducers;