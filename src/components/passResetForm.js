import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";

export default class passwordRecovery extends React.Component {
  state = {
    email: "",
  };

  handleChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
  };

  handleSubmit = () => {
    alert("LOLOLO");
  };

  render() {
    const { email } = this.state;
    return (
      <ValidatorForm onSubmit={this.handleSubmit} onError={(errors) => console.log(errors)}>
        <TextValidator
          fullWidth
          autoFocus
          variant="outlined"
          required
          label="Email"
          onChange={this.handleChange}
          name="email"
          value={email}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          reset password
        </Button>
      </ValidatorForm>
    );
  }
}
