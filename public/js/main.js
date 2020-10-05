let btnNoir= document.querySelector(".btn2")
let buttonBlanc = document.querySelector(".btn1")
let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")
let section5 = document.getElementById("section5")
let section6 = document.getElementById("section6")

let body = document.querySelector("body")
btnNoir.addEventListener("click", (e) => {
    e.preventDefault()
    body.style.backgroundColor = "black"
    body.style.color = "white"

section1.style.backgroundColor = "black"
section2.style.backgroundColor = "black"
section3.style.backgroundColor = "black"
section4.style.backgroundColor = "black"
section5.style.backgroundColor = "black"
section6.style.backgroundColor = "black"
})