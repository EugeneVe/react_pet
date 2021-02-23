import React from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Container, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { useStyles } from "../components/usesstyles";

const Login = () => {
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
            Recover your password
          </Typography>
          <Typography component="p" variant="subtitle2">
            Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
          </Typography>
          <form className={classes.form}>
            <TextField
              inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              placeholder="youremail@gmail.com"
              autoComplete="email"
              autoFocus
            />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Reset password
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
        <Box mt={8}></Box>
      </Container>
    </div>
  );
};

export default Login;
