import { MeetProvider } from "../context/MeetContext";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {



  console.log('hello wwwww')
  return (
    <MeetProvider>
      <Component {...pageProps} />
    </MeetProvider>
  );
}

export default MyApp;
