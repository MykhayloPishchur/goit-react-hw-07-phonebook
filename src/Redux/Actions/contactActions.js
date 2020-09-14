import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const deleteContactRequest = createAction("contacts/deleteRequest");
const deleteContactSuccess = createAction("contacts/deleteSuccess");
const deleteContactError = createAction("contacts/deleteError");

const filterByNames = createAction("contacts/filter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterByNames,
};
