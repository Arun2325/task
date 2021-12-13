import { createStore,applyMiddleware} from 'redux'
import cakeReducer from './Cake/CakeReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(cakeReducer,composeWithDevTools(applyMiddleware(logger)))

export default store