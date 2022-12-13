import { MeetProvider } from "../context/MeetContext";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <MeetProvider>
      <Component {...pageProps} />
    </MeetProvider>
  );
}

export default MyApp;
