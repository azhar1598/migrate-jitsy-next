import React, { useContext, useState } from "react";
// import {
//   Paper,
//   makeStyles,
//   TextField,
//   Button,
//   Snackbar,
// } from "@material-ui/core";
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useRouter } from "next/router";

// import MuiAlert from "@material-ui/lab/Alert";
import Alert from "@mui/material/Alert";

import { Button, createTheme, Paper, Snackbar, TextField } from "@mui/material";

import { ThemeProvider } from "styled-components";
import { generateString } from "./utils";
import { makeStyles } from "@mui/styles";
import { MeetContext } from "./context/MeetContext";

// Alert when the user hasn't filled up their name
// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const AlertBar = ({ open, handleClose }) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="error">
      Enter your name please!
    </Alert>
  </Snackbar>
);

// stylings for the page
const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: "#f7cbc8",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    colorScheme: "dark",
    flexDirection: "column",
  },

  card: {
    backgroundColor: "#523843",
    colorScheme: "dark",
    border: "1px solid rgb(19, 47, 76)",
    color: "white",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    maxHeight: "200px",
    objectFit: "contain",
  },
  input: {
    width: "350px",
  },
}));

const StartupPage = () => {
  const classes = useStyles();

  // we will be preferring dark theme for our page
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: "dark",
        },
      }),
    []
  );

  // we will use this to navigate next page
  const router = useRouter();

  // will be using name across all pages from context
  const [name, setName] = useContext(MeetContext);

  // state and handler function for the snackbar
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.background}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={4}
      >
        <img src="/favicon.ico" className={classes.logo} alt="logo here" />
        <h4>MAGIC FEST</h4>
        <ThemeProvider theme={theme}>
          <div style={{ marginBottom: "1.5rem" }}>
            <TextField
              label="Name"
              variant="outlined"
              color="secondary"
              className={classes.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                // if name is empty we mandate user to enter it as we also trigger to open snackbar here
                if (name === "") {
                  handleClick();
                  return;
                }

                // if all goes well we will be redirecting the user to meet room
                router.push(`/meet/${generateString(7)}`);
              }}
            >
              Start the Magic
            </Button>
          </div>
        </ThemeProvider>
      </div>
      <AlertBar open={open} handleClose={handleClose} />
    </div>
  );
};

export default StartupPage;
