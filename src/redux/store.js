import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import authReducer from "./adminSlice/authSlice";
// import authDealSlice from './dealerSlice/authSlice';
// import cartReducer from './cartSlice'; 

const rootReducer = combineReducers({
//   auth: authReducer,
//   dealer: authDealSlice,
//   cart: cartReducer,

});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export default store;
