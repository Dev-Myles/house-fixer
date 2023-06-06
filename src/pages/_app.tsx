import { type AppType } from "next/app";
import Footer from "~/components/layout/Footer";
import HeadTags from "~/components/layout/Headtags";
import NavBar from "~/components/layout/Navbar";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <HeadTags />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default api.withTRPC(MyApp);
