const express = require("express")

// Instanciando o express numa constante
const app = express()

// Habilitando o template Engine no Express p/ ler EJS.
// default de organization /views
app.set("view engine", "ejs")

// Criando as Rotas.
// Rota da Pagina Index

app.get("/", (req, res) => {
	const items = [
		{
			title: "D",
			message: "esenvolver aplicações/serviços de forma fácil"
		},
		{
			title: "E",
			message: "JS usa Javascript para renderizar HTML"
		},
		{
			title: "M",
			message: "uito fácil de usar"
		},
		{
			title: "A",
			message: "morzinho"
		},
		{
			title: "I",
			message: "nstall ejs"
		},
		{
			title: "S",
			message: "intaxe simples"
		}
	]

	const subtitle =
		"Uma linguagem de modelagem para criação de paginas HTML utilizando JS"

	//Nao precisa pasta /views pq ja eh o default do ejs
	res.render("pages/index", {
		qualitys: items,
		subtitle: subtitle
	})
})

// Rota da Pagina sobre
app.get("/sobre", (req, res) => {
	res.render("pages/about")
})

// Rota da pagina Contato
app.get("/contato", (req, res) => {
	res.render("pages/contact")
})

// Habilitando a porta no servidor express
app.listen(8080)
console.log("Start Server listening on port 8080")
