let pos = 0
let howPdiv = document.querySelector('.howPlayP')
let howP = new Array("Pour jouer c'est très simple il suffit de vous munir d'une souris ou de votre track pad, si vous possédez la puissance. ","Afin de contrôler la canne a pêche et commencez attraper des poissons en pressant le click gauche de votre souris. ")


function playText()
{
    let action = setInterval(
        function()
        {
            if(pos>=howP.length) 
            {
                pos = 0
            }   
            setOpacity()
            howPdiv.innerHTML = howP[pos]
            pos++
        },
        3000
        )
    }
    
    function setOpacity()
    {
        document.querySelector('.howPlayP').classList.remove("noOpa")
        howPdiv.classList.add("fullOpa")
    }
    
    let i = 0, story
    story = "Dans ce jeu vous incarnerez Michel le pécheur. Votre but, attraper le plus de poisson pour amasser un maximum d’argent ! <br> Attention aux algues, aux déchets, aux bombes et aux espèces protégées ; elles vous infligeront des mallus si vous les touchez.<br> Il y a plusieurs zones différentes suivant la profondeur, plus vous allez loin plus vous avez une chance d’attraper des poissons qui vous rapportent une grosse somme."
    
    function typing(){
        if(i<story.length){
            document.querySelector('.story').innerHTML += story.charAt(i)
            i++
            setTimeout(typing,20)
        }
    }

function scrollStory(){
    let ypos = window.pageYOffset
    if(ypos > 600){
        typing()
    }
}

window.addEventListener('scroll', scrollStory)

function scrollRules(){
    let ypos = window.pageYOffset
    if(ypos > 800){
        playText()
    }
}

window.addEventListener('scroll', scrollRules)