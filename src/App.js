import React, { Component } from "react";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import style from "./app.module.css";
import pop from "./Transiction/pop.module.css";
import { connect } from "react-redux";
import contactsOperations from "./Redux/Operations/contactOperation";
import contactsSelectors from "./Redux/Selectors/contactSelectors";
import { CoffeeLoading } from "react-loadingg";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts, isLoadingContacts } = this.props;

    return (
      <div className={style.container}>
        {isLoadingContacts && (
          <CoffeeLoading color="rgb(42, 54, 147)"></CoffeeLoading>
        )}

        <ContactForm />

        <CSSTransition
          in={contacts.length > 1}
          timeout={500}
          classNames={pop}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
