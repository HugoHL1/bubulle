//SubMenu setting

const settingButton = document.querySelector('.settingButton')
const subMenu = document.querySelector('.subMenuClose')

settingButton.addEventListener(
    'click',
    function(){
        subMenu.classList.toggle('subMenu')
        subMenu.classList.toggle('subMenuClose')
    }
)

// //menuWorm

// const yellowPlus = document.querySelector('.yellowPlus')
// const /* nomDeLaDivQuiOuvreLeMenuWorm */ = document.querySelector(/* nomDeSaClass */)

// yellowPlus.addEventListener(
//     'click',
//     function(){
//         subMenu.classList.toggle(/* nom de la class au premier click pour ouvrir */)
//         subMenu.classList.toggle(/* nom de la class au second click pour fermer */)
//     }
// )
