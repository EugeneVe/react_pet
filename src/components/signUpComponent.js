import React, { useState, useEffect } from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Container, Typography } from "@material-ui/core";
import { useStyles } from "./usesstyles";
import PermIdentitySharpIcon from "@material-ui/icons/PermIdentitySharp";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import { validateSignUp } from "./validateInfo";
// import useForm from "./useForm";

const SignUpComponent = ({ submitForm }) => {
  // SIGN UP VALIDATION
  const validateSignUp = (values) => {
    let errors = {};
    if (!values.username.trim()) {
      errors.username = "Username required";
    }
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
    return errors;
  };
  //FORM SUBMID FUNCTION
  const useForm = (callback, validate) => {
    const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
    };
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        console.log("Great, now you have new account");
      } else if (Object.keys(errors).length !== 0 && isSubmitting) {
        console.log("Nop, you have fill up all forms");
      }
    }, [isSubmitting, errors]);
    return { handleChange, handleSubmit, values, errors };
  };
  // Add show hide password
  const [valueses, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues(Object.assign(Object.assign({}, valueses), { showPassword: !valueses.showPassword }));
  };
  // call functions FORM SUBMID & VALIDATION
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validateSignUp);
  const classes = useStyles();
  return (
    <div className="signUp">
      <Box mt={5}></Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PermIdentitySharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={handleSubmit} noValidate className={classes.form}>
            <div className="form-inputs">
              <TextField
                // autoFocus
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                className="form-input"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
                error={Boolean(errors.username)}
                helperText={errors.username}
              />
            </div>
            <div className="form-inputs">
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                className="form-input"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </div>
            <div className="form-inputs">
              <TextField
                id="inptxt"
                variant="outlined"
                required
                fullWidth
                label="Password"
                className="form-input"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                type={valueses.showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton id="trigger" aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                        {valueses.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login" className="linkAlterColor" variant="body2">
                  Already have an account?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
};

export default SignUpComponent;
