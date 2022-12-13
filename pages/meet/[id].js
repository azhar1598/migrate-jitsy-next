// import { JitsiMeeting } from "@jitsi/react-sdk";
import { useRouter } from "next/router";
import React, {
  useEffect,
  useCallback,
  useContext,
  useState,
  Fragment,
} from "react";
import { MeetContext, MNameContext } from "../../context/MeetContext";
import CircularProgress from "@mui/material/CircularProgress";

import dynamic from "next/dynamic";
import Script from "next/script";

const ComponentWithNoSSR = dynamic(
  () => import("../../component/MeetPage.jsx"),
  { ssr: false }
);

const MeetPage = ({ query }) => {
  //AS OF NOW DOMAIN WOULD BE JITSI'S AS WE ARE STILL USING THIER SERVERS
  const domain = "meet.jit.si";
  let api = {};

  const router = useRouter();

  // THIS IS TO EXTRACT THE NAME WHICH WAS FILLED IN THE FIRST PAGE
  const [name] = useContext(MeetContext);
  const [mName] = useContext(MNameContext);

  const isSSR = () => typeof window === "undefined";

  const [enable, setEnable] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
      setEnable(true);
      // document.getElementsByClassName('watermark')[0].style.display='none'
    }, 5000);
  }, []);

  return (
    <Fragment>
      <Script src="https://meet.jit.si/external_api.js" />

      {enable && (
        <img
          className="our-logo"
          src="/logo.png"
          style={{
            position: "absolute",
            zIndex: 2,
            height: "60px",
            width: "100px",
            backgroundColor: "black",
            marginTop: "7vh",
            marginLeft: "2vw",
            // borderRadius: "15px",
          }}
        />
      )}

      {showLoader && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="secondary" />
          <h3>Please Wait...</h3>
        </div>
      )}
      {enable && !isSSR() && <ComponentWithNoSSR />}
    </Fragment>
  );
};

export default MeetPage;
