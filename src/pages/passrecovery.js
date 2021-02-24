import React from "react";
import { Avatar, CssBaseline, Grid, Box, Container, Typography } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
import { useStyles } from "../components/usesstyles";
import PasswordRecovery from "../components/passResetForm";

const PassworReset = () => {
  const classes = useStyles();
  return (
    <div className="password-reset">
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
          <div className={classes.form}>
            <PasswordRecovery />
            <Box mt={1}></Box>
            <Grid container>
              <Grid item>
                <Link to="/login" className="linkAlterColor" variant="body2">
                  I remembered the password!!!
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
};

export default PassworReset;
