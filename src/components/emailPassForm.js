import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button, FormControlLabel, Checkbox, Box } from "@material-ui/core";

export default class emailPassword extends React.Component {
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
        <TextValidator fullWidth required type="password" variant="outlined" label="Password" name="password" />
        <FormControlLabel className="alterButtonStyle" control={<Checkbox value="remember" color="primary" />} label="Remember me" />
        <Button type="submit" fullWidth variant="contained" color="primary">
          sign in
        </Button>
        <Box mt={1}></Box>
      </ValidatorForm>
    );
  }
}
