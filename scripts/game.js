const settingButton = document.querySelector('.settingButton')
const subMenu = document.querySelector('.subMenuClose')

settingButton.addEventListener(
    'click',
    function(){
        subMenu.classList.toggle('subMenu')
        subMenu.classList.toggle('subMenuClose')
    }
)