import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>Slow page 🐌</title>


            {/* Google Tag Manager Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TQFZ4LVH');`,
                }}
            />


        </Head>
        <body>
        <noscript
            dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
        />

        <Main/>
        <NextScript/>



        <script
            dangerouslySetInnerHTML={{
                __html: `
              window.intercomSettings = {
                api_base: "https://api-iam.intercom.io",
                app_id: "dx5ogmvs",
              };
            `,
            }}
        />

        {/*Intercom script*/}
        <script
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
            }}
        />
        </body>
    </Html>
  );
}
