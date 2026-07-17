import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
//router 
import { useRouter } from "next/router";

//framer motion
import {  AnimatePresence, motion} from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="xl:min-h-dvh relative pt-[96px] pb-[90px] xl:pt-0 xl:pb-0 ">
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
        </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
