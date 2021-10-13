import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducer';

const myMiddleware = store => next => action => {
  console.log('Моя прослойка!', action);

  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
  myMiddleware,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});

//const store = createStore(rootReducer, composeWithDevTools());

export default store;
