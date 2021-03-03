import React, { useState, useEffect } from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Container, Typography } from "@material-ui/core";
import { useStyles } from "./usesstyles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import { validateLogin } from "./validateInfo";
// import useForm from "./useForm";

const SignInComponent = ({ submitForm }) => {
  // SIGN IN VALIDATION
  const validateLogin = (values) => {
    let errors = {};
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
        console.log("Wellcome to your account");
      } else if (Object.keys(errors).length !== 0 && isSubmitting) {
        console.log("Nop, you have fill up all forms");
      }
    }, [isSubmitting, errors]);
    return { handleChange, handleSubmit, values, errors };
  };
  // This add show hide password
  const [valueses, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues(Object.assign(Object.assign({}, valueses), { showPassword: !valueses.showPassword }));
  };
  // call functions FORM SUBMID & VALIDATION
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validateLogin);
  const classes = useStyles();
  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit} noValidate className={classes.form}>
            <div className="form-inputs">
              <TextField
                autoFocus
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                className="form-input"
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
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                        {valueses.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              sign in
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/password-recovery" className="linkAlterColor" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" className="linkAlterColor" variant="body2">
                  Don't have an account?
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

export default SignInComponent;
