import { createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rmenApp from '../reducers';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
	loggerMiddleware
	)(createStore);

export default function configureStore(initialState) {
	return createStoreWithMiddleware(rmenApp, initialState);
}
