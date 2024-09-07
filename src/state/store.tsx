import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './user/userSlice';
 
const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

// Export types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
