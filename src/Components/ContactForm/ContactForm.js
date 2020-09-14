import React, { Component } from "react";
import styles from "./contactform.module.css";
import contactsOperations from "../../Redux/Operations/contactOperation";
import contactsSelectors from "../../Redux/Selectors/contactSelectors";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import InputMask from "react-input-mask";

class contactform extends Component {
  state = {
    name: "",
    number: "",
    isExist: false,
    duplicateContact: "",
  };

  handleInput = (e) =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;

    const avaibleNames = contacts.map((contact) => contact.name.toLowerCase());

    if (avaibleNames.includes(name.toLowerCase())) {
      this.setState({ isExist: true, duplicateContact: name });
      setTimeout(
        () => this.setState({ isExist: false, duplicateContact: "" }),
        5000
      );
    } else {
      this.props.onAddContact(name, number);
      this.setState({
        name: "",
        number: "",
        isExist: false,
        duplicateContact: "",
      });
    }
  };

  render() {
    const { name, number, isExist, duplicateContact } = this.state;
    return (
      <div>
        <div className={styles.headWrapper}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={styles}
          >
            <h1 className={styles.title}>Phonebook</h1>
          </CSSTransition>

          <CSSTransition
            in={isExist}
            timeout={250}
            classNames={styles}
            unmountOnExit
          >
            <div className={styles.error}>
              {duplicateContact} already exist!
            </div>
          </CSSTransition>
        </div>

        <div className={styles.border}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <h3>Name</h3>
            <input
              className={styles.input}
              name="name"
              type="text"
              onChange={this.handleInput}
              value={name}
            ></input>
            <h3>Number</h3>

            <InputMask
              mask="999-99-99"
              name="number"
              className={styles.input}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="000-00-00"
              type="tel"
              onChange={this.handleInput}
              value={number}
            />

            <br />
            <button
              className={styles.button}
              type="submit"
              disabled={!this.state.name || !this.state.number}
            >
              Add contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(contactform);
