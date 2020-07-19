import React from "react";
import PropType from "prop-types";
import { connect } from "react-redux";
import { filter } from "../actions/todo.actions";

const Link = ({ active, children }) => {
  return (
    <button onClick={() => {}} style={{ marginLeft: "4px" }}>
      {children}
    </button>
  );
};
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === ""
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
