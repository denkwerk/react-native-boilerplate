import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers'; // the value from combineReducers
import { AsyncStorage, Platform } from 'react-native';

const isVerboseLoggingPlatform = Platform.OS === 'android';
const middlewares = [];

middlewares.push(thunk, promise);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    stateTransformer: state => {
      return isVerboseLoggingPlatform ? state : 'state';
    },
  });
  middlewares.push(logger);
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
