let pos = 0
let howPdiv = document.querySelector('.howPlayP')
let howP = new Array("Pour jouer c'est très simple il suffit de vous munir d'une souris ou de votre track pad, si vous possédez la puissance. ","Afin de contrôler la canne a pêche et commencez attraper des poissons en pressant le click gauche de votre souris. ")

playText()

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

