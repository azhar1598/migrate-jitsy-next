import React, { useContext, useEffect } from "react";
// import { Paper, makeStyles, Button } from "@material-ui/core";
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// import { Button} from "@mui/material";

import { useRouter } from "next/router";
import { MeetContext, MNameContext } from "../context/MeetContext";

const ThankYouPage = () => {
  // we will be preferring dark theme for our page

  // we will use this to navigate next page
  const router = useRouter();
  const [name, setName] = useContext(MeetContext);
  const [mName, setMName] = useContext(MNameContext);

  useEffect(() => {
    setName("");
    setMName("");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h4>Thank You</h4>

      <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <p>You can go back home and create another meeting !</p>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push(`/`);
          }}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
