import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/*
      Criei um ÚNICO contêiner pai que é centralizado na tela.
      Todos os elementos (logo, título, texto, botão) ficarão dentro dele.
    */}
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 z-10">

      {/*
        1. O LOGOTIPO:
           - Removi as classes 'fixed' e de posicionamento dele.
           - Adicionei 'mx-auto' para centralizá-lo horizontalmente.
           - Adicionei 'mb-8' (margin-bottom) para dar o espaço entre ele e o título.
           - Ajustei a largura para 'w-64' (ou o tamanho que preferir) e a altura para 'h-auto' para manter a proporção.
      */}
      <img
        className="w-64 h-auto mx-auto mb-8"
        src="https://lirp.cdn-website.com/b580dc39/dms3rep/multi/opt/Logo-Tennis-Lounge-02-d3fbbd91-1920w.png"
        alt="Tennis Lounge Logo"
      />

      {/*
        2. O TÍTULO H1:
           - Está dentro do mesmo fluxo, logo abaixo da imagem.
           - Removi a 'div' que o envolvia e suas classes 'fixed'.
           - Mantive as classes de estilo de texto.
           - Adicionei classes responsivas (text-4xl md:text-6xl) para ficar melhor em diferentes telas.
      */}
      <h1 className="text-4xl md:text-6xl italic font-bold text-white leading-tight mb-6">
        <span className="text-[#C9DB55]">RAQUETE</span> E CONEXÃO <br />
        EXCELÊNCIA E <span className="text-[#C9DB55]">PAIXÃO</span>
      </h1>

      {/* (Opcional) Você pode adicionar o restante do texto e o botão aqui dentro também */}
      <p className="text-whitetext-lg md:text-xl mb-8 text-white">
        Ensino individualizado e personalizado.<br/>
        Aprendizado rápido, evolutivo e divertido – no seu ritmo.<br/>
        Infraestrutura premium e localização superior.
      </p>

      <button className="bg-[#b9ce30] text-white font-bold py-3 px-8 rounded hover:bg-[#7c8f02] hover:text-gray-100 transition duration-300">
        AGENDAR MINHA AULA EXPERIMENTAL
      </button>

    </div>
  </StrictMode>,
)
