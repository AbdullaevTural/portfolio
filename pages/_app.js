import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import Script from "next/script";
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
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
          }
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=113019185', 'ym');

        ym(113019185, 'init', {
          ssr: true,
          webvisor: true,
          clickmap: true,
          ecommerce: 'dataLayer',
          referrer: document.referrer,
          url: location.href,
          accurateTrackBounce: true,
          trackLinks: true
        });`}
      </Script>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className="xl:mb-0 md:mt-[70px] md:mb-[56px] min-h-[calc(100%-126px)] xl:min-h-[calc(100%-70px)] content-center"
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
