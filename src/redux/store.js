import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import complexCounetrReducer from './Counter/counter-reducer';

const counterPersistConfig = {
   key: 'couner',
   storage,
};

export const store = configureStore({
   reducer: {
      counter: persistReducer(counterPersistConfig, complexCounetrReducer),
   },
   devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
