# Ignite Lab 01

## Sobre

Projeto criado para uma plataforma de cursos onlines, aonde é possível realizar a compra e a matrícula de cursos.

## Tecnologias utilizadas

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Apache Kafka](https://graphql.org/)
- [Auth0](https://auth0.com/)
- [Apollo Client (GraphQL)](https://nestjs.com/)
- [Docker](https://www.docker.com/)
- [Next.js](https://nextjs.org/)
- [TaildwindCSS](https://tailwindui.com/)

# Funcionalidades

## Serviço de compras (purchases)

- [Admin] Cadastro de produtos
- [Admin] Listagem de produtos
- [Auth] Listagem de compras
- [Public] Compra de um produto
- [Public] Lista produtos disponíveis p/ compra

## Serviço de sala de aula (classroom)

- [Admin] Listar matrículas
- [Admin] Listar alunos
- [Admin] Listar cursos
- [Admin] Cadastrar cursos
- [Auth] Listar cursos que tenho acesso
- [Auth] Acessar conteúdo do curso

# Subindo aplicações

**_Lembre-se de configurar as variáveis ambientes de cada projeto antes de seguir os passos abaixo. Cada projeto tem um arquivo `.env.example` com exemplos_**

- Clone o projeto: `git clone https://github.com/lmiguelm/ignite-lab-01.git`

- Inicie os containers: `docker-compose up -d`

- Dentro da pasta **purchases** rode os seguintes comandos:

  - `yarn || npm i`
  - `npx prisma migrate dev`
  - `yarn run start:dev || npm run start:dev`

- Dentro da pasta **classroom** rode os seguintes comandos:
  - `yarn || npm i`
  - `npx prisma migrate dev`
  - `yarn run start:dev || npm run start:dev`
- Dentro da pasta **gateway** rode os seguintes comandos:

  - `yarn || npm i`
  - `yarn run start:dev || npm run start:dev`

- Dentro da pasta **web** rode os seguintes comandos:
  - `yarn || npm i`
  - `yarn dev`
