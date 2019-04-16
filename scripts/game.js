//SubMenuDynamite
const settingDynamite = document.querySelector('.dynamites')
const openSubMenuDynamite = document.querySelector('.subMenuDynamites')

settingDynamite.addEventListener(
    'click',
    function(){
        openSubMenuDynamite.classList.toggle('subMenuDynamitesOpen')
        openSubMenuDynamite.classList.toggle('subMenuDynamites')
    }
)

//SubMenuBoat
const settingBoat = document.querySelector('.boats')
const openSubMenuBoat = document.querySelector('.subMenuBoats')

settingBoat.addEventListener(
    'click',
    function(){
        openSubMenuBoat.classList.toggle('subMenuBoatsOpen')
        openSubMenuBoat.classList.toggle('subMenuBoats')
    }
)

//SubMenuWorm
const settingWorm = document.querySelector('.worms')
const openSubMenuWorm = document.querySelector('.subMenuWorms')

settingWorm.addEventListener(
    'click',
    function(){
        openSubMenuWorm.classList.toggle('subMenuWormsOpen')
        openSubMenuWorm.classList.toggle('subMenuWorms')
    }
)
