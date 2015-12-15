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
	const store = createStoreWithMiddleware(rmenApp, initialState);
	if (module.hot) {
		console.log(module.hot)
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
	return store;
}
