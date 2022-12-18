//QuerySelectors
const buttRight = document.querySelector('.butt-droite')
const buttLeft = document.querySelector('.butt-gauche')
const bulleDouleur = document.querySelector('.bulle img')
const tete = document.querySelector('.matete')

const theme = document.querySelector('#theme-change')
const merci = document.querySelector('#merci')

const body = document.querySelector("body")

//QuerySelectorAlls
const futureGrids = document.querySelectorAll(".f_grid")
const contactCards = document.querySelectorAll(".card > div")

//changement de theme -> permettra de remplir toutes les conditions. comme un thème sombre mais à la place ça mettra un thème aléatoire

//Events
tete.addEventListener('click', function() {

    bulleDouleur.classList.remove('bulletransition')
    bulleDouleur.style.opacity = '100%'
    
})

tete.addEventListener('mouseleave', function() {

    bulleDouleur.classList.add('bulletransition')
    bulleDouleur.style.opacity = '0%'
})


theme.addEventListener('click', function() {

    if(body.classList.contains("default")){
        body.classList.remove("default")
        body.style.backgroundColor = "#01003d"
        
        for(i=0; i<4; i++){
            futureGrids[i].style.backgroundColor = "rgb(112, 65, 48)"
        }
        for(i=0; i<3; i++){
            contactCards[i].style.backgroundColor = "rgb(112, 65, 48)"
        }

    }
    else{
        body.classList.add("default")
        body.style.backgroundColor = "#222222"
        for(i=0; i<4; i++){
            futureGrids[i].style.backgroundColor = "rgba(255, 170, 0, 0.5)"
        }
        for(i=0; i<3; i++){
            contactCards[i].style.backgroundColor = "rgba(255, 170, 0, 0.5)"
        }

    }
})


buttLeft.addEventListener('mouseover', function(){
   // console.log("Gauche")
    if (buttLeft.classList.contains('isNon')){ 

        buttLeft.classList.remove('isNon')
        buttRight.classList.add('isNon')
        
        buttLeft.textContent = "Oui"
        buttRight.textContent = "Non"
    }
})

buttRight.addEventListener('mouseover', function(){

//    console.log("droite")

    if (buttRight.classList.contains('isNon')){
        

        buttLeft.classList.add('isNon')
        buttRight.classList.remove('isNon')
        
        buttLeft.textContent = "Non"
        buttRight.textContent = "Oui"
    }
})

buttRight.addEventListener('click', function(){

    if(merci.style.left == '-100px')
        merci.style.left = '100%'
    else
        merci.style.left = '-100px'
    
})
    
buttLeft.addEventListener('click', function(){

    if(merci.style.left == '-100px')
        merci.style.left = '100%'
    else
        merci.style.left = '-100px'
        
})