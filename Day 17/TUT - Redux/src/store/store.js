import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,           //Cart here is the name of the reducer //
    },
});

export default store;