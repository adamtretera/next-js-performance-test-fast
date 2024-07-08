import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import type { AppProps } from "next/app";
import { Poppins } from 'next/font/google'
import Script from "next/script";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={poppins.className}>
          <Component {...pageProps} />
          <GoogleTagManager gtmId="GTM-TQFZ4LVH"/>

          <Script strategy={"worker"} id={"intercom"} dangerouslySetInnerHTML={{
              __html: `
              window.intercomSettings = {
                api_base: "https://api-iam.intercom.io",
                app_id: "dx5ogmvs",
              };
            `,
          }} />
          <Script strategy={"worker"}
                  id={"intercom-2"}
              dangerouslySetInnerHTML={{
              __html: `
              (function(){
                var w=window;var ic=w.Intercom;if(typeof ic==="function"){
                  ic('reattach_activator');ic('update',w.intercomSettings);
                } else {
                  var d=document;var i=function(){i.c(arguments);};i.q=[];
                  i.c=function(args){i.q.push(args);};w.Intercom=i;
                  var l=function(){
                    var s=d.createElement('script');s.type='text/javascript';s.async=true;
                    s.src='https://widget.intercom.io/widget/dx5ogmvs';
                    var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
                  };
                  if(document.readyState==='complete'){l();}
                  else if(w.attachEvent){w.attachEvent('onload',l);}
                  else{w.addEventListener('load',l,false);}
                }
              })();
            `,
          }}/>

      </main>
  )
}
