import { createStore, applyMiddleware, compose} from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk'

const middleware = [thunk];

const store = createStore(rootReducers,{}, compose(
    applyMiddleware(...middleware)
))

export default store;