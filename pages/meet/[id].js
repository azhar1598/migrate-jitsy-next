import { JitsiMeeting } from "@jitsi/react-sdk";
import { useRouter } from "next/router";
import React, { useEffect, useCallback, useContext } from "react";
import { MeetContext, MNameContext } from "../../context/MeetContext";

const MeetPage = ({ query }) => {
  //AS OF NOW DOMAIN WOULD BE JITSI'S AS WE ARE STILL USING THIER SERVERS
  const domain = "meet.jit.si";
  let api = {};

  const router = useRouter();

  // THIS IS TO EXTRACT THE NAME WHICH WAS FILLED IN THE FIRST PAGE
  const [name] = useContext(MeetContext);
  const [mName] = useContext(MNameContext);

  // INTIALISE THE MEET WITH THIS FUNCTION
  // const startMeet = useCallback(() => {
    
  //   const options = {
  //     roomName: router.query.id,
  //     width: "100%",
  //     height: 500,
  //     configOverwrite: { prejoinPageEnabled: false },
  //     interfaceConfigOverwrite: {
  //       // overwrite interface properties if you want
  //     },
  //     // VIDEO FRAME WILL BE ADDED HERE
  //     parentNode: document.querySelector("#jitsi-iframe"),
  //     userInfo: {
  //       displayName: name,
  //     },
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   api = new window.JitsiMeetExternalAPI(domain, options);

  //   api.addEventListeners({
  //     readyToClose: handleClose,
  //     participantLeft: handleParticipantLeft,
  //     participantJoined: handleParticipantJoined,
  //     videoConferenceJoined: handleVideoConferenceJoined,
  //     videoConferenceLeft: handleVideoConferenceLeft,
  //   });
  // }, [api]);

  // useEffect(() => {
  //   if (window.JitsiMeetExternalAPI) {
  //     startMeet();
  //   } else {
  //     alert("JitsiMeetExternalAPI not loaded");
  //   }
  // }, [startMeet]);

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
          backgroundColor: "rgb(10, 25, 41)",
          color: "white",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, padding: 10 }}>{mName}</p>
      </header>
      {/* <div id="jitsi-iframe" style={{ marginBottom: 0 }}></div>
       */}

      <JitsiMeeting
        roomName={mName} // make sure it's a good one!
        getIFrameRef={(node) => (node.style.height = "600px")}
      />

      {/* <div
        style={{
          backgroundColor: "rgb(10, 25, 41)",
          height: "20vh",
          margin: 0,
        }}
      ></div> */}
    </React.Fragment>
  );
};

export default MeetPage;

// export const getStaticPaths = () => ({
//   paths: ['/meet/[id]'],
//   fallback: true,
// });

// export const getStaticProps=()=>{

//   return {
//         props: {
//           apiData,
//         },
//       };
// }

// export const getStaticPaths = async (params) => {
//   // Get all posts via API, file, etc.
//   // const posts = [
//   //   { id: "1" },
//   //   { id: "2" },
//   //   { id: "3" },
//   //   { id: "4" },
//   //   { id: "5" },
//   // ]; // Example
//   // const paths = posts.map((post) => ({
//   //   params: { id: post.id },
//   // }));
//   console.log("parammms", params);

//   return { paths: pa, fallback: false };
// };

// export async function getStaticProps({params}) {

//   console.log('parrrramas',params)

//   const options = {
//     roomName: params.query.id,
//     width: "100%",
//     height: 500,
//     configOverwrite: { prejoinPageEnabled: false },
//     interfaceConfigOverwrite: {
//       // overwrite interface properties if you want
//     },
//     // VIDEO FRAME WILL BE ADDED HERE
//     parentNode: document.querySelector("#jitsi-iframe"),
//     userInfo: {
//       displayName: name,
//     },
//   };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   api = new window.JitsiMeetExternalAPI(domain, options);

//   let data=api.addEventListeners({
//     readyToClose: handleClose,
//     participantLeft: handleParticipantLeft,
//     participantJoined: handleParticipantJoined,
//     videoConferenceJoined: handleVideoConferenceJoined,
//     videoConferenceLeft: handleVideoConferenceLeft,
//   });

//   return {
//     props: {
//       apiData,
//     },
//   };
// }

// export const getServerSideProps = async ({ query }) => {
//   console.log("getservvv", query);

//   return {
//     props: {
//       query:  query.id,

//     },
//   };
// };
