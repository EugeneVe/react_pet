import React from "react";
import { validateSignUp } from "./validateInfo";
import useForm from "./useForm";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Container, Typography } from "@material-ui/core";
import { useStyles } from "./usesstyles";
import PermIdentitySharpIcon from "@material-ui/icons/PermIdentitySharp";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const SignupPage = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validateSignUp);
  const classes = useStyles();
  // This add show hide password
  const [valueses, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues(Object.assign(Object.assign({}, valueses), { showPassword: !valueses.showPassword }));
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // ! This add show hide password
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
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                        {valueses.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
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
                error={Boolean(errors.password2)}
                helperText={errors.password2}
              />
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

export default SignupPage;
