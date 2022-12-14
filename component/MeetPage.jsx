
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect } from "react";
import { MeetContext, MNameContext } from "../context/MeetContext";


const MeetPage = ({ query }) => {
  //AS OF NOW DOMAIN WOULD BE JITSI'S AS WE ARE STILL USING THIER SERVERS
  const domain = "meet.jit.si";
  let api = {};

  const router = useRouter();

  // THIS IS TO EXTRACT THE NAME WHICH WAS FILLED IN THE FIRST PAGE
  const [name] = useContext(MeetContext);
  const [mName] = useContext(MNameContext);

  // INTIALISE THE MEET WITH THIS FUNCTION
  const startMeet = useCallback(() => {
    const options = {
      roomName:'Miraki',
      width: "100%",
      height: 500,
      configOverwrite: {
        prejoinPageEnabled: true,
        disableDeepLinking: true
      },
      interfaceConfigOverwrite: {
        // overwrite interface properties if you want
      },
      // VIDEO FRAME WILL BE ADDED HERE
      parentNode: document.querySelector("#jitsi-iframe"),
      userInfo: {
        displayName: name,
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    api = new window.JitsiMeetExternalAPI(domain, options);

    api.addEventListeners({
      readyToClose: handleClose,
      participantLeft: handleParticipantLeft,
      participantJoined: handleParticipantJoined,
      videoConferenceJoined: handleVideoConferenceJoined,
      videoConferenceLeft: handleVideoConferenceLeft,
    });
  }, [api]);

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      startMeet();
    } else {
      alert("JitsiMeetExternalAPI not loaded");
    }
  }, [startMeet]);

  // ALL OUR HANDLERS
  const handleClose = () => {
    console.log("handleClose");
  };

  const handleParticipantLeft = async (participant) => {
    console.log("handleParticipantLeft", participant);
    await getParticipants();
  };

  const handleParticipantJoined = async (participant) => {
    console.log("handleParticipantJoined", participant);
    await getParticipants();
  };

  const handleVideoConferenceJoined = async (participant) => {
    console.log("handleVideoConferenceJoined", participant);
    await getParticipants();
  };

  const handleVideoConferenceLeft = () => {
    console.log("handleVideoConferenceLeft");
    router.push("/thank-you");
  };

  // GETTING ALL PARTICIPANTS
  const getParticipants = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(api.getParticipantsInfo());
      }, 500);
    });
  };

  return (
    <React.Fragment>
      <header
        style={{
          backgroundColor: "#d930ff",
          color: "white",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, padding: 10 }}>{mName}</p>
      </header>

      <div id="jitsi-iframe" style={{ marginBottom: 0 }}></div>


    </React.Fragment>
  );
};

export default MeetPage;

