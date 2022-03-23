import { createStore, combineReducers } from "redux";
import { loginReducer } from "../services/authentication";
import { drawerReducer } from "../services/drawer";
import { saveState, loadState } from "./sessionStorage";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
    user : loginReducer,
    showDrawer : drawerReducer
});

const persistedState = loadState();
export const store = createStore(reducer, persistedState, reduxDevtools);

store.subscribe(() => {
    saveState(store.getState());
});
