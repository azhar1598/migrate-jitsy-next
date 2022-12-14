import React, { useContext, useState } from "react";

import { useRouter } from "next/router";

// import MuiAlert from "@material-ui/lab/Alert";
import Alert from "@mui/material/Alert";

import { Button, createTheme, Paper, Snackbar, TextField } from "@mui/material";

import { generateString } from "../utils";
import { MeetContext, MNameContext } from "../context/MeetContext";
import Script from "next/script";

const AlertBar = ({ open, handleClose }) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="error">
      Enter your name please!
    </Alert>
  </Snackbar>
);

const StartupPage = () => {
  // we will use this to navigate next page
  const router = useRouter();

  // will be using name across all pages from context

  const [mName, setMName] = useContext(MNameContext);


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

  console.log("hello world");

  return (
    <div style={{ padding: "20px" }}>
  
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/favicon.ico" alt="logo here" />

        <h4>MAGIC FEST</h4>
        <div style={{ marginBottom: "1.5rem" ,}}>
          <TextField
            label="Meeting Name"
            variant="outlined"
            color="secondary"
            // className={classes.input}
            value={mName}
            onChange={(e) => setMName(e.target.value)}
            style={{marginRight:'20px'}}
          />
        
        </div>
        <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              // if name is empty we mandate user to enter it as we also trigger to open snackbar here
              if (mName === "") {
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
      </div>
      <AlertBar open={open} handleClose={handleClose} />
    </div>
  );
};

export default StartupPage;
