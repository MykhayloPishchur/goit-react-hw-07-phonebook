import contactReducer from "./Reducers/contactsReducers";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
