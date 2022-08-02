const questions = [
	"O que aprendi hoje?",
	"O que me deixou aborrecido? O que eu poderia fazer para melhorar?",
	"O que me deixou feliz hoje?",
	"Quantas pessoas ajudei hoje?"
]
const ask = (index = 0) => {
	process.stdout.write("\n" + questions[index] + " > ")
}
ask()
// ask(2)

// const answer = []
// process.stdin.on("data", (data) => {
// 	answer.push(data.toString())
// 	if (answer.length < questions.length) {
// 		ask(answer.length)
// 	} else {
// 		process.exit()
// 	}
// })
// process.on("exit", () => {
// 	console.log(`
//   Bacana, Andressa!
//   ${questions[0]}
//   ${answer[0]}
//   ${questions[1]}
//   ${answer[1]}
//   ${questions[2]}
//   ${answer[2]}
//   ${questions[3]}
//   ${answer[3]}
//   'Volte amanhã para novas reflexões!!
// `)
// })


const answer = []
process.stdin.on("data", data => {
	answer.push(data.toString().trim())
	if (answer.length < questions.length) {
		ask(answer.length)
	} else {
		process.exit()
	}
})
process.on("exit", () => {
	console.log(`
  Bacana, Andressa!

O que você aprendeu hoje foi:
  ${answer[0]}

O que te aborreceu e você poderia melhorar foi:
  ${answer[1]}

  O que te deixou feliz hoje:
  ${answer[2]}

  Você ajudou ${answer[3]} pessoas hoje!!!

  Volte amanhã para novas reflexões!!
`)
})
