import { useState } from "react";

// --- DADOS DAS UNIDADES (Pode ficar fora do componente) ---
const units = [
    {
        id: 1,
        title: 'TL Jardins',
        imageSrc: 'https://lirp.cdn-website.com/b580dc39/dms3rep/multi/opt/1765544850418-2880w.jpg',
        whatsappLink: 'https://api.whatsapp.com/send/?phone=5511986313512&text&type=phone_number&app_absent=0', // Coloque o link real
    },
    {
        id: 2,
        title: 'TL JK',
        imageSrc: 'https://lirp.cdn-website.com/b580dc39/dms3rep/multi/opt/1765544851029-2880w.jpg',
        whatsappLink: 'https://api.whatsapp.com/send/?phone=5511940393311&text&type=phone_number&app_absent=0',
    },
    {
        id: 3,
        title: 'TL Moema',
        imageSrc: 'https://lirp.cdn-website.com/b580dc39/dms3rep/multi/opt/1765545116845-1920w.jpg',
        whatsappLink: 'https://api.whatsapp.com/send/?phone=5511942044423&text&type=phone_number&app_absent=0',
    },
];

export function Navbar() {
    // Estado para controlar se o modal está aberto ou fechado
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <nav>
            <nav className="w-full bg-transparent shadow-md">
                {/* h-20: Define a altura da barra (80px)
         flex: Habilita o flexbox
         items-center: Alinha verticalmente (centro)
         justify-between: Espalha os itens (Logo na esquerda, Menu no meio, Botão na direita)
         px-6: Espaçamento nas laterais
      */}
                <div className="container mx-auto h-20 flex items-center justify-between px-6">

                    {/* LOGO */}
                    <div className="flex-shrink-0">
                        <a href="/#">
                            <img
                                src="https://lirp.cdn-website.com/b580dc39/dms3rep/multi/opt/Logo-Tennis-Lounge-02-d3fbbd91-1920w.png"
                                alt="Logo Tennis Lounge"
                                // h-10 (40px) ou h-12 (48px) controla a altura do logo sem estourar a barra
                                className="h-9 w-auto"
                            />
                        </a>
                    </div>

                    {/* MENU */}
                    {/* hidden md:flex -> Esconde no celular e mostra no PC */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li><a href="/" className="text-white hover:text-gray-300 font-medium transition-colors">Início</a></li>
                        <li><a href="/" className="text-white hover:text-gray-300 font-medium transition-colors">Tênis</a></li>
                        <li><a href="/" className="text-white hover:text-gray-300 font-medium transition-colors">Kids</a></li>
                        <li><a href="/" className="text-white hover:text-gray-300 font-medium transition-colors">Squash</a></li>
                        <li><a href="/" className="text-white hover:text-gray-300 font-medium transition-colors">Unidades</a></li>
                    </ul>

                    {/* BOTÃO */}
                    <div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer bg-[#b9ce30] text-white font-bold px-5 py-2 rounded hover:bg-[#7c8f02] hover:text-gray-100 transition-colors"
                        >
                            Agendar Aula
                        </button>
                    </div>

                </div>

                {/* --- O MODAL CONTINUA AQUI --- */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                        <div className="relative bg-white p-8 rounded shadow-lg max-w-4xl w-full">
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-black text-xl font-bold">X</button>
                            <h2 className="text-2xl font-bold text-center mb-6 text-black">Agende sua aula experimental</h2>
                            <div className="text-center text-black">Conteúdo do Modal Aqui...</div>
                        </div>
                    </div>
                )}
            </nav>

            {/* --- MODAL (Renderizado apenas se isModalOpen for true) --- */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)} // Fecha ao clicar fora
                >
                    <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl p-6 md:p-12 animate-in zoom-in-95 duration-200">

                        {/* Botão X para fechar */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Conteúdo do Modal */}
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 leading-tight">
                            Agende sua aula experimental em<br />
                            uma de nossas unidades
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {units.map((unit) => (
                                <a
                                    key={unit.id}
                                    href={unit.whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative h-64 md:h-72 w-full overflow-hidden rounded-md shadow-md cursor-pointer block"
                                >
                                    <img
                                        src={unit.imageSrc}
                                        alt={unit.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                                    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                        <h3 className="text-xl md:text-2xl font-bold mb-1">{unit.title}</h3>
                                        <div className="flex items-center text-sm md:text-base font-medium underline underline-offset-4 opacity-90 group-hover:opacity-100 transition-opacity">
                                            Agende pelo WhatsApp
                                            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}