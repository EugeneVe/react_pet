import React from "react";
import { validateLogin } from "./validateInfo";
import useForm from "./useForm";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Container, Typography } from "@material-ui/core";
import { useStyles } from "./usesstyles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const LogInPage = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validateLogin);
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
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
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

export default LogInPage;
