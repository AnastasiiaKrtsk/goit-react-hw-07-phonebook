import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
// import { combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import contactsReducer from './contactsSlice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    phonebook: contactsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);
