import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "../Actions/contactActions";

const addContact = (state, action) => {
  return [...state, action.payload];
};
const deleteContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.deleteContactSuccess]: deleteContact,
});

const filter = createReducer("", {
  [contactsActions.filterByNames]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

export default combineReducers({
  items,
  loading,
  filter,
});
