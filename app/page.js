// app/page.js
"use client";

import { useEffect } from "react";

export const metadata = {
  title: "Sintonia Personalizada | VSL Exclusiva",
  description: "Assista ao vídeo especial e descubra como liberar sua Sintonia Personalizada.",
  robots: { index: false, follow: false },
};

export default function HomePage() {
  useEffect(() => {
    const checkoutURL = "https://pay.kirvano.com/f28ae34b-4cd7-4478-a64a-90ddf6c0dbb6";

    // Redireciona quando o usuário clica no botão "voltar"
    const onPopState = () => (window.location.href = checkoutURL);
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", onPopState);

    // Redireciona em sinais de saída (desktop): mouse saindo pelo topo ou perda de foco
    const onExit = (e) => {
      if ((e && e.clientY <= 0) || document.hidden) {
        window.location.href = checkoutURL;
      }
    };
    document.addEventListener("mouseleave", onExit);
    document.addEventListener("visibilitychange", onExit);

    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("mouseleave", onExit);
      document.removeEventListener("visibilitychange", onExit);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-[400px] p-4">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <vturb-smartplayer 
                id="vid-68f1486c3ad93e6cd68376be" 
                style="display: block; margin: 0 auto; width: 100%; max-width: 400px;">
              </vturb-smartplayer>
              <script type="text/javascript">
                var s = document.createElement("script");
                s.src = "https://scripts.converteai.net/ff253a86-28e2-448c-9671-4142ad206bd6/players/68f1486c3ad93e6cd68376be/v4/player.js";
                s.async = true;
                document.head.appendChild(s);
              </script>
            `,
          }}
        />
      </div>
    </main>
  );
}
