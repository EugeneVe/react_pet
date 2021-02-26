import React from "react";
import { validateSignUp } from "./validateInfo";
import useForm from "./useForm";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Container, Typography } from "@material-ui/core";
import { useStyles } from "./usesstyles";
import PermIdentitySharpIcon from "@material-ui/icons/PermIdentitySharp";
import { Link } from "react-router-dom";

const FormSignup = ({ submitForm }) => {
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
            sign up
          </Typography>
          <form onSubmit={handleSubmit} noValidate className={classes.form}>
            <div className="form-inputs">
              <TextField
                autoFocus
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
              />
              {errors.username && <p>{errors.username}</p>}
            </div>

            <div className="form-inputs">
              <TextField
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
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                className="form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            {/* <div className="form-inputs">
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Repeat password"
                className="form-input"
                type="password"
                name="password2"
                placeholder="Confirm your password"
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div> */}
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

export default FormSignup;
