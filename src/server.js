//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables

const dotenv = require("dotenv") 
dotenv.config()
const PORT = process.env.PORT || 3000 ;

const Koa = require('koa')

const swagger = require("swagger2");
const { ui} = require("swagger2-koa");
const swaggerDocument = swagger.loadDocumentSync("./api.yaml");

const bodyParser = require( "koa-bodyparser")
const json = require("koa-json")
const router = require("./routes/index.routes.js") 

const app = new Koa()

app
  .use(ui(swaggerDocument, '/swagger'))
  .use(bodyParser())
  .use(json())

app
  .use(router.routes())
  .use(router.allowedMethods())

const server = app.listen(PORT, console.log("Server is Running!"))
 
module.exports = server