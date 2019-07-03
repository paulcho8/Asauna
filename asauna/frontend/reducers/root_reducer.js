import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import entitiesReducer from './entities.reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
});
