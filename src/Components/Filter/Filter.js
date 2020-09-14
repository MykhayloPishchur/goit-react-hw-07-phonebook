import React from "react";
import PropTypes from "prop-types";
import styles from "./filter.module.css";
import { connect } from "react-redux";
import contactsActions from "../../Redux/Actions/contactActions";
import contactsSelectors from "../../Redux/Selectors/contactSelectors";

const Filter = ({ onChangeFilter, value }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => onChangeFilter(e.target.value)}
        value={value}
        name="filter"
      />
    </div>
  </div>
);

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  value: PropTypes.string,
};

const mapStateToProps = (state) => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.filterByNames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
