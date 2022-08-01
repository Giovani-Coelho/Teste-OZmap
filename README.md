
<h1 align="center">
  Teste OZmap
</h1>

<h3 align="center">
  Aplicação de uma API REST, para o teste da vaga de Estágio
</h3>

<p align="center">JS | Node.js | Koa.js</p>



<p align="center">
  <a href="#-sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;
</p>

## 👨🏻‍💻 Sobre o Projeto 

Foi muito bom fazer esse projeto, em apenas 3 dias aprendi como usar o Koa.js, chai.js e knex.js. Fiquei extremamente comprometido, serviu para que eu reconhecesse minhas capacidades de aprender novas tecnologias, e mostrar para mim mesmo o quão capaz eu sou de me focar em uma tarefa.

Esse projeto é uma API para a criar, deletar e buscar usuários.

## 🚀 Tecnologias

Principais tecnologias usadas para desenvolver está API:


- [Node.js](https://nodejs.org/en/)
- [Koa.js](https://koajs.com/)
- [chai.js](https://www.chaijs.com/)
- [knex.js](http://knexjs.org/)
- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [swagger](https://swagger.io/)

## ⚙ Rodando o Projeto

Rode a migration:
```sh
npx knex migrate:latest

# caso tenha que Removê-la.

npx knex migrate:rollback
```

Execute o Projeto
```sh
node ./src/server.js

# caso tenho o nodemon instalado globalmente:

nodemon ./src/server.js
```

Executar os testes:
```sh
npm run test
```