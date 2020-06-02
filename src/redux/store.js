import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {auth} from './reducers/auth';

const reducers = combineReducers({auth});

export const store = createStore(
    reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
