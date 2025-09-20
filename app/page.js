// app/page.js

import Image from "next/image";

export const metadata = {
  title: "Última Chance | Sintonia Personalizada por R$27",
  description:
    "Oferta exclusiva da Sintonia Secreta: sua chance única de ativar a Sintonia Personalizada com desconto especial.",
  robots: { index: false, follow: false }, 
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center px-6 text-white">
      <section className="w-full max-w-2xl text-center">
        {/* Banner */}
        <div className="mb-6">
          <Image
            src="/banner backredirect SS.png"
            alt="Oferta especial Sintonia Secreta"
            width={1200}
            height={600}
            className="mx-auto rounded-xl shadow-lg"
            priority
          />
        </div>

        {/* Benefícios */}
        <div className="mt-8 bg-zinc-800/80 border border-pink-500/30 rounded-2xl p-6 shadow-lg text-left">
          <ul className="space-y-3 text-base md:text-lg">
            <li>🔑 Reative a conexão emocional em apenas <strong>5 minutos por dia</strong></li>
            <li>💌 Aumente as chances de receber <strong>mensagens em até 7 dias</strong></li>
            <li>💖 Volte a se sentir <strong>desejada e confiante</strong></li>
            <li>🌙 Sua <strong>Sintonia Personalizada</strong> é feita sob medida para o <strong>seu caso</strong></li>
            <li>🎧 Acesso imediato ao <strong>áudio exclusivo</strong> que acelera a reconexão</li>
          </ul>
        </div>

        {/* Botão */}
        <a
          href="https://pay.kirvano.com/f28ae34b-4cd7-4478-a64a-90ddf6c0dbb6"
          className="mt-8 inline-block rounded-xl px-8 py-4 font-bold text-white text-lg shadow-md transition
                     bg-pink-500 hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
        >
          👉 Ativar Minha Sintonia Personalizada por R$27 Agora
        </a>

        <p className="mt-4 text-sm text-zinc-400">
          ✔️ Garantia de 30 dias — risco zero para você.
        </p>
      </section>
    </main>
  );
}
