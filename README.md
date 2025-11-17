# GitHubFinder

**GitHubFinder** é uma aplicação desenvolvida com **React** e **TypeScript** que permite pesquisar usuários do GitHub e visualizar seus principais repositórios. O projeto tem como objetivo estudar tecnologias modernas de front-end e praticar o consumo de APIs públicas.

📷 Imagem do Projeto
<p align="center">
  <img src="https://github.com/Tiagliveira/gitHubFinder/blob/main/public/readmeGitHubFinder.png?" alt="Dev-Burg Interface" width="600"/>
</p>

## Funcionalidades

- Pesquisa de usuários do GitHub por nome de usuário
- Exibição dos dados do perfil: nome, bio, seguidores, seguindo
- Listagem dos repositórios públicos com:
  - Nome do repositório
  - Quantidade de estrelas
  - Link direto para o repositório
- Classificação dos repositórios por popularidade (estrelas)
- Acesso rápido ao código dos projetos com apenas um clique

## Tecnologias Utilizadas

- **React** com **TypeScript**
- **CSS Modules** para estilização com escopo local
- **React Icons** e **Simple Icons** para representar visualmente as tecnologias dos repositórios
- **Fetch API** para consumo da [API pública do GitHub](https://api.github.com)

## Estrutura do Projeto
src/ ├── components/       # Componentes reutilizáveis ├── pages/            # Páginas principais da aplicação ├── styles/           # Estilos com CSS Modules ├── types/            # Tipagens personalizadas └── utils/            # Funções auxiliares

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Tiagliveira/githubfinder.git
2. Instale as dependências:
   npm install
3. Inicie o servidor de desenvolvimento:
   npm run dev

Deploy com GitHub Pages
Este projeto está hospedado via GitHub Pages, permitindo que qualquer pessoa acesse a aplicação diretamente pelo navegador.

Acesse aqui:
https://github.com/Tiagliveira/gitHubFinder

Projeto desenvolvido por Tiago Oliveira