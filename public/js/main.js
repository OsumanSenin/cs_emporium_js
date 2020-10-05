let btnNoir= document.querySelector(".btn2")
let buttonBlanc = document.querySelector(".btn1")
let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")
let section5 = document.getElementById("section5")
let section6 = document.getElementById("section6")
let nav1 = document.getElementById("nav1")
let brand = document.getElementById("navbar-brand")
let h1 = document.getElementById("h1")
console.log(nav1);
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
nav1.setAttribute("class","navbar navbar-expand-lg navbar-light bg-dark")
h1.setAttribute("class","text-center bolder text-white")
})

buttonBlanc.addEventListener("click", (e) => {
    e.preventDefault()
    body.style.backgroundColor = ""
    body.style.color = ""

section1.style.backgroundColor = ""
section2.style.backgroundColor = ""
section3.style.backgroundColor = ""
section4.style.backgroundColor = ""
section5.style.backgroundColor = ""
section6.style.backgroundColor = ""
nav1.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light")

})

// scrolling now!!!

let header = document.querySelector("header")
let title = document.getElementById("title")
console.log(title)
let nav = document.querySelector(".navbar")

console.log(brand);



window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 259) {
        
        header.style.position = "fixed"
        header.style.top = "0"
        header.style.width = "100%"
        header.style.zIndex = "2"
        title.setAttribute("class", "d-none") 
        brand.setAttribute("class","text-dark")
        h1.style.display = "none"
        title.style.marginRight = "150px"
        
        
        
        
        
    } else {
        header.style.position = 'static'
        title.setAttribute("class", "")
        h1.style.display = ""
        brand.setAttribute("class","d-none")
    }
})

// connexion panel 
let conexion = document.querySelector(".conexion")
let panel = document.getElementById("panel")
let croix = document.getElementById("croix")
croix.addEventListener("click", (e) => {
    panel.setAttribute("class", "text-center d-none")
    e.preventDefault()
})


conexion.addEventListener("click", (e) => {
    e.preventDefault()
    panel.setAttribute("class", "text-center")
})


let register = document.getElementById("register")
let signUp = document.getElementById("signUp")
let form = document.getElementById("form")
let sousPanel = document.getElementById("sous-panel")


register.addEventListener("click", (e) => {
    e.preventDefault();
    sousPanel.setAttribute("class", "p-3")
    form.setAttribute("class", "d-none")
    
    
})

signUp.addEventListener("click", (e) => {
    e.preventDefault()
    sousPanel.setAttribute("class", "p-3 d-none")
    form.setAttribute("class", "")

})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        panel.style.position = "fixed"
        panel.style.top = "100px"
        panel.style.width = "50%"
        panel.style.zIndex = "2"
        panel.style.height = "50%"
        panel.style.backgroundColor="white"
        panel.style.marginLeft="18em"
        
       
        
        
        
    }
})

