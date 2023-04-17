
let input = document.querySelector(".input")
let result = document.querySelector(".result")
let button = document.querySelector(".button")

button.onclick = function(){
let userInput = input.value
console.log(userInput)
  
if (userInput == 'good') {
  result.innerHTML = "That's good to hear"
  
}
else if (userInput == "bad"){
  result.innerHTML = "hope it gets better"
}
  else if (userInput == 'okay'){
    result.innerHTML = "wanna talk about it"
  }
}