import {
    combineReducers,
    compose,
    legacy_createStore
} from "redux";

import serviseListReducer from './serviseListReducer'
import serviseAddReducer from './serviseAddReducer'
import serviseListSeach from './serviseListSeach'

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    return legacy_createStore(
        combineReducers({
            serviseList: serviseListReducer,
            serviseAdd: serviseAddReducer,
            seacrhInput: serviseListSeach,
        }),
        undefined,
        compose(
            ReactReduxDevTools
        )
    );
}

export default configureStore;