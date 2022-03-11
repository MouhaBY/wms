import { createStore, combineReducers } from 'redux';

import { loginReducer } from '../features/authentication';
import { drawerReducer } from '../features/drawer';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducer = combineReducers({
    user : loginReducer,
    showDrawer : drawerReducer
})

export const store = createStore(reducer, reduxDevtools);
