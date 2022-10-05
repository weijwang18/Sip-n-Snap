import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Location:
        <input type="text" name="location" />
      </label>
      <label>
        Price:
        <input type="number" name="price" />
      </label>
      <label>
        Description:
        <input type="text" name="description"/>
      </label>
        <Button type='submit'>{props.buttonText}</Button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;