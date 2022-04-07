const container = document.querySelector(".container")
//const element = document.querySelector('#back')
const  main = document.createElement("div")
//import { back } from './bkspc.js'

container.appendChild(main)
main.style.backgroundColor = 'lightGrey'
main.style.height = '700px'
main.style.width = '600px'
main.className = 'main'

const sentences = ["We are smart!", "We are Learning!", "We are smarter!"]


fetch("./class.json")
.then(response => {
   return response.json().then(data => {
       console.log(data)
       for (i in data){
           const card = document.createElement('div')
           card.innerHTML = `${data[i].Name}` + '<br>' + `${data[i].Role}` + '<br>'
           card.style.border = 'solid black 5px'
           card.style.padding = '3px'
           main.appendChild(card)
           card.style.margin = '3px'
        }
   });
})
//back(sentences, 'back')


