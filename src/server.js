//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables

require("dotenv").config()
const PORT = process.env.PORT ;

const Koa = require('koa');
const bodyParser = require("koa-bodyparser");
const json = require("koa-json")

const app = new Koa();

const router = require("./routes/index.routes")

app.use(bodyParser())
app.use(json())

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(PORT, console.log("Server is Running!"));

module.exports = server;