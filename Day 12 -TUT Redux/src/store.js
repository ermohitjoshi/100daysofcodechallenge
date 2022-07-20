import {configureStore } from "redux"
import rootReducer from "./Reducers/index";

const store = configureStore(rootReducer);

export default store;