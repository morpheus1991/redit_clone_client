import Axios from "axios";
import { AppProps } from "next/app";
import { AuthProvider } from "../context/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api`;
  return (
    <AuthProvider>
      {/* {!authRoute && <NavBar />} */}
      <div className={"pt-12 bg-gray-200 min-h-screen"}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
