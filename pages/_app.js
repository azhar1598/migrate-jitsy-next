import "../styles/globals.css";
import { MeetProvider } from "./context/MeetContext";

function MyApp({ Component, pageProps }) {
  return (
    <MeetProvider>
      <Component {...pageProps} />
    </MeetProvider>
  );
}

export default MyApp;
