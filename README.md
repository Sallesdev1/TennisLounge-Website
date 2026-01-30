
# 🎾 Tennis Lounge - Website

> **Raquete e Conexão. Excelência e Paixão.**

![Tennis Lounge]

## 📖 Sobre o Projeto

Este projeto é a landing page oficial da **Tennis Lounge**, uma rede de academias premium dedicada ao ensino e prática de **Tênis** e **Squash**.

O site foi desenvolvido para atender alunos em diversas áreas nobres de São Paulo, oferecendo uma interface moderna, rápida e responsiva onde os usuários podem:
* Conhecer a metodologia de ensino (individualizada e personalizada).
* Visualizar as modalidades disponíveis (Tênis, Squash, Kids).
* Encontrar a unidade mais próxima.
* **Agendar aulas experimentais** diretamente através de botões de ação (CTA) integrados.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema front-end para garantir performance e facilidade de manutenção:

* **[React](https://reactjs.org/):** Biblioteca principal para construção da interface.
* **[Vite](https://vitejs.dev/):** Build tool de próxima geração para um desenvolvimento extremamente rápido.
* **[TypeScript](https://www.typescriptlang.org/):** (Opcional, se estiver usando .tsx) Para maior segurança e tipagem do código.
* **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilitários para estilização ágil e design responsivo premium.

## 🎨 Funcionalidades Principais

* **Hero Section Imersiva:** Design impactante com foco na identidade visual da marca.
* **Responsividade:** Layout totalmente adaptado para Celulares, Tablets e Desktops.
* **Navegação Fluida:** Menu interativo para acesso rápido às sessões (Início, Tênis, Kids, Squash, Unidades).
* **Conversão:** Botões de agendamento estrategicamente posicionados.

## 🔧 Como Rodar o Projeto Localmente

Siga os passos abaixo para baixar e executar o código na sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Sallesdev1/TennisLounge-Website.git](https://github.com/Sallesdev1/TennisLounge-Website.git)
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd TennisLounge-Website
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse no navegador:**
    O terminal mostrará um link (geralmente `http://localhost:5173/`).

## 📍 Estrutura de Pastas

```text
TennisLounge-Website/
├── public/          # Assets estáticos (imagens, ícones)
├── src/
│   ├── components/  # Componentes reutilizáveis (Botões, Navbar, etc.)
│   ├── assets/      # Imagens e estilos globais
│   ├── App.tsx      # Componente principal
│   └── main.tsx     # Ponto de entrada do React
├── index.html       # HTML base
└── tailwind.config  # Configurações de estilização
