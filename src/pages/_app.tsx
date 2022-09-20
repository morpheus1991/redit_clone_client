import Axios from "axios";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import { AuthProvider } from "../context/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api`;
  Axios.defaults.withCredentials = true;

  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);
  return (
    <AuthProvider>
      {!authRoute && <NavBar />}
      <div className={authRoute ? "" : "pt-12 bg-gray-200 min-h-screen"}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
