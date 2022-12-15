import React, { useContext, useState } from "react";

import { useRouter } from "next/router";

// import MuiAlert from "@material-ui/lab/Alert";
import Alert from "@mui/material/Alert";

import { Button, createTheme, Paper, Snackbar, TextField } from "@mui/material";

import { generateString } from "../utils";
import { MeetContext, MNameContext } from "../context/MeetContext";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { style } from "@mui/system";
import { useMediaQuery } from "react-responsive";

const AlertBar = ({ open, handleClose }) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="error">
      Please Enter 7 Characters
    </Alert>
  </Snackbar>
);

const StartupPage = () => {
  // we will use this to navigate next page
  const router = useRouter();

  const isTabletOrMobile = useMediaQuery({ query: " (max-width: 992px)" });

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
    <>
      {!isTabletOrMobile ? (
        <div className={styles.container}>
          {/* <div className={styles.title_container}> */}
          <p className={styles.title}>Get the most out of your meetings !</p>
          {/* </div> */}
          <Image
            src="/meet.svg"
            height={150}
            width={250}
            alt="svg here"
            className={styles.meet_svg}
          />
          <Image
            src="/business-meet.svg"
            height={250}
            width={350}
            alt="svg here"
            className={styles.business_meet}
          />
          <Image
            src="/unique.svg"
            height={150}
            width={250}
            alt="svg here"
            className={styles.unique}
          />
          <Image
            src="/conference.svg"
            height={250}
            width={450}
            alt="svg here"
            className={styles.conference}
          />
          <Image
            src="/remote.svg"
            height={150}
            width={250}
            alt="svg here"
            className={styles.remote}
          />
          <div className={styles.content}>
            <p
              style={{ position: "absolute", top: "20px", fontSize: "14px" }}
              className={styles.click}
            >
              <a href="https://mirakitech.com/">
                click on the link below to know more about our services
              </a>
            </p>
            <a
              className={styles.a_tag}
              href="https://mirakitech.com/"
              style={{
                position: "absolute",
                top: "50px",
                fontSize: "14px",
                color: "blue",
                cursor: "pointer",
              }}
            >
              www.mirakitech.com
            </a>

            <a href="https://mirakitech.com/" style={{ cursor: "pointer" }}>
              <Image
                src="/logo-miraki.png"
                height={70}
                width={140}
                alt="logo here"
                className={styles.miraki_logo}
              />
            </a>

            <p className={styles.desc}>
              We, at Miraki Tech, serve to facilitate businesses to grow
              mutually higher with customers. We focus on three core factors:
              your web site, apps, brand, promotion. We understand the means of
              establishing websites and mobile applications via our expertise
              and deliver award-winning solutions. What makes us stand out from
              the crowd? We possess technologically advanced IT solutions given
              by creative and experienced professionals.
            </p>

            <div>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "290px",
                  // paddingLeft: "50px",
                  // paddingRight: "50px",
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
                onClick={() => {
                  // if name is empty we mandate user to enter it as we also trigger to open snackbar here
                  // if (mName === "") {
                  //   handleClick();
                  //   return;
                  // }
                  // if all goes well we will be redirecting the user to meet room
                  router.push(`/meet/${generateString(7)}`);
                }}
              >
                Start a Meeting
              </Button>
            </div>
            <p style={{ color: "#CA63FF", alignSelf: "center" }}>Or</p>
            <div
              style={{
                marginBottom: "1.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                label="Enter Meeting Code"
                variant="outlined"
                color="secondary"
                // className={classes.input}
                value={mName}
                onChange={(e) => setMName(e.target.value)}
                style={{ marginRight: "20px", marginTop: "20px" }}
                inputProps={{ maxLength: 7, minLength: 7 }}
                required={true}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  // paddingLeft: "30px",
                  // paddingRight: "30px",
                  width: "290px",
                  marginTop: "10px",
                  // marginBottom:'20px'
                }}
                onClick={() => {
                  // if name is empty we mandate user to enter it as we also trigger to open snackbar here
                  if (mName.length != 7) {
                    handleClick();
                    return;
                  }
                  // if all goes well we will be redirecting the user to meet room
                  router.push(`/meet/${mName.slice(0, 7)}`);
                }}
              >
                Join
              </Button>
            </div>
          </div>

          <AlertBar open={open} handleClose={handleClose} />
        </div>
      ) : (
        <div className={styles.mobile_container}>
          {/* <div className={styles.title_container}> */}
          <p className={styles.mobile_title}>
            Get the most out of your meetings !
          </p>
          {/* </div> */}

          <Image
            src="/conference.svg"
            height={250}
            width={450}
            alt="svg here"
            className={styles.mobile_conference}
          />

        
            <a href="https://mirakitech.com/" style={{ cursor: "pointer" }}>
              <Image
                src="/logo-miraki.png"
                height={70}
                width={140}
                alt="logo here"
                // className={styles.mobile_miraki_logo}
              />
            </a>

            <div>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "290px",
                  // paddingLeft: "50px",
                  // paddingRight: "50px",
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
                onClick={() => {
                  // if name is empty we mandate user to enter it as we also trigger to open snackbar here
                  // if (mName === "") {
                  //   handleClick();
                  //   return;
                  // }
                  // if all goes well we will be redirecting the user to meet room
                  router.push(`/meet/${generateString(7)}`);
                }}
              >
                Start a Meeting
              </Button>
            </div>
            <p style={{ color: "#CA63FF", alignSelf: "center" }}>Or</p>
            <div
              style={{
                marginBottom: "1.5rem",
                display: "flex",
                alignItems:'center',
                flexDirection: "column",
              }}
            >
              <TextField
                label="Enter Meeting Code"
                variant="outlined"
                color="secondary"
                // className={classes.input}
                value={mName}
                onChange={(e) => setMName(e.target.value)}
                style={{  marginTop: "20px",width:'290px' }}
                inputProps={{ maxLength: 7, minLength: 7 ,autoComplete:'off'}}
                required={true}
                autoComplete='off'
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  // paddingLeft: "30px",
                  // paddingRight: "30px",
                  width: "290px",
                  marginTop: "10px",
                  // marginBottom:'20px'
                }}
                onClick={() => {
                  // if name is empty we mandate user to enter it as we also trigger to open snackbar here
                  if (mName.length != 7) {
                    handleClick();
                    return;
                  }
                  // if all goes well we will be redirecting the user to meet room
                  router.push(`/meet/${mName.slice(0, 7)}`);
                }}
              >
                Join
              </Button>
            </div>
         
          <p
            // style={{ position: "absolute", top: "20px", fontSize: "14px" }}
            className={styles.mobile_click}
          >
            <a href="https://mirakitech.com/">
              click on the link below to know more about our services
            </a>
          </p>
          <a
            className={styles.mobile_a_tag}
            href="https://mirakitech.com/"
            style={{
              color: "blue",
              cursor: "pointer",
            }}
          >
            www.mirakitech.com
          </a>

          <AlertBar open={open} handleClose={handleClose} />
        </div>
      )}
    </>
  );
};

export default StartupPage;
