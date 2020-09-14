import { createSelector } from "reselect";

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getLoading = (state) => state.contacts.loading;

const showContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);

// const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//      { contact.name.toLowerCase().includes(filter)}
//     );
//   }
// );

export default {
  getContacts,
  getFilter,
  getLoading,
  showContacts,
};
