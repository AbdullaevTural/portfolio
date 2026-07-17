import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
//router 
import { useRouter } from "next/router";
import { useEffect } from "react";

//framer motion
import {  AnimatePresence, motion} from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Scroll to top on route change (fixes mobile staying mid-page)
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
      // Also scroll the .page container which is the actual scrollable element on mobile
      const pageEl = document.querySelector('.page');
      if (pageEl) {
        pageEl.scrollTo(0, 0);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className="xl:min-h-dvh relative pt-[96px] pb-[90px] xl:pt-0 xl:pb-0"
          onAnimationStart={() => {
            window.scrollTo(0, 0);
            const pageEl = document.querySelector('.page');
            if (pageEl) pageEl.scrollTo(0, 0);
          }}
        >
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
        </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
