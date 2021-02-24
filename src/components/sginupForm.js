import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button, Box, TextField } from "@material-ui/core";

export default class signUpForm extends React.Component {
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
      <div className="paper">
        <ValidatorForm onSubmit={this.handleSubmit} onError={(errors) => console.log(errors)}>
          <TextField autoFocus type="text" autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" />
          <TextField type="text" variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname" />
          <TextValidator
            fullWidth
            variant="outlined"
            required
            label="Email"
            onChange={this.handleChange}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <TextValidator fullWidth required type="password" variant="outlined" label="Password" name="password" />
          <Button type="submit" fullWidth variant="contained" color="primary">
            sign up
          </Button>
          <Box mt={1}></Box>
        </ValidatorForm>
      </div>
    );
  }
}
