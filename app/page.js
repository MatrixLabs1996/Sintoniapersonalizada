// app/page.js
"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function HomePage() {
  useEffect(() => {
    const checkoutURL = "https://pay.kirvano.com/f28ae34b-4cd7-4478-a64a-90ddf6c0dbb6";

    const handlePopState = () => { window.location.href = checkoutURL; };
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    const handleVisibilityChange = () => {
      if (document.hidden) window.location.href = checkoutURL;
    };
    const handleBlur = () => { window.location.href = checkoutURL; };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sintonia Personalizada | VSL Exclusiva</title>
        <meta name="description" content="Assista ao vídeo especial e libere sua Sintonia Personalizada." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-[400px] p-4">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <vturb-smartplayer 
                  id="vid-68f1486c3ad93e6cd68376be" 
                  style="display:block;margin:0 auto;width:100%;max-width:400px;">
                </vturb-smartplayer>
                <script type="text/javascript">
                  var s=document.createElement("script");
                  s.src="https://scripts.converteai.net/ff253a86-28e2-448c-9671-4142ad206bd6/players/68f1486c3ad93e6cd68376be/v4/player.js";
                  s.async=true;document.head.appendChild(s);
                </script>
              `,
            }}
          />
        </div>
      </main>
    </>
  );
}
