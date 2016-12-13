import { combineReducers } from 'redux';
import { outerReducer } from 'redux-async-initial-state';

import meditationWidget from './widgets/meditationWidget';

export default outerReducer(combineReducers({
  meditationWidget,
}));
