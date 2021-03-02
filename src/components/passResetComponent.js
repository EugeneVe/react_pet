import React, { useState, useEffect } from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Container, Typography } from "@material-ui/core";
import { useStyles } from "./usesstyles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
// import { validatePassReset } from "./validateInfo";
// import useForm from "./useForm";

const PassworResetComponent = ({ submitForm }) => {
  // PUSSWORD RESET IN VALIDATION
  const validatePassReset = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    return errors;
  };
  //FORM SUBMID FUNCTION
  const useForm = (callback, validate) => {
    const [values, setValues] = useState({
      email: "",
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
        console.log("Your new password will be sent on email");
      } else if (Object.keys(errors).length !== 0 && isSubmitting) {
        console.log("Nop, you have fill up all forms");
      }
    }, [isSubmitting, errors]);
    return { handleChange, handleSubmit, values, errors };
  };
  // call functions FORM SUBMID & VALIDATION
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validatePassReset);
  const classes = useStyles();
  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className="recovery_password__title">
            Recover your password
          </Typography>
          <Typography component="p" variant="subtitle2">
            Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
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
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              reset password
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/login" className="linkAlterColor" variant="body2">
                  I remembered the password!!!
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

export default PassworResetComponent;
