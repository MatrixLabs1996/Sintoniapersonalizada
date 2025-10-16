// app/page.js

export const metadata = {
  title: "Sintonia Personalizada | VSL Exclusiva",
  description:
    "Assista ao vídeo especial da Sintonia Personalizada e descubra o segredo por trás dessa frequência única.",
  robots: { index: false, follow: false },
};

export default function HomePage() {
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
