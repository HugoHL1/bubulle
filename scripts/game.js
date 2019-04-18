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

//SubMenuSetting
const settingButton = document.querySelector('#setting')
const openSubMenuSetting = document.querySelector('.subMenuSettings')

settingButton.addEventListener(
    'click',
    function(){
        openSubMenuSetting.classList.toggle('subMenuSettingsOpen')
        openSubMenuSetting.classList.toggle('subMenuSettings')
    }
)

//Suppression de la propagation du click
const subMenus = document.querySelectorAll('.subMenu')

for (let i = 0; i < subMenus.length; i++) {
    subMenus[i].addEventListener('click',
    function(e){
        e.stopPropagation()
    }
    )
}

//Add Username
addUsername()

function addUsername(){
    if(localStorage.getItem('localUsername') != null){
    let username = document.querySelector(".pseudo")
    username.innerHTML = localStorage.getItem('localUsername')
    }
}

//Sounds
const soundsButton = document.querySelector('.sounds')
const soundsAudio = document.querySelectorAll('.soundsAudio')
const OffOn1 = document.querySelector('.soundsOffOn')
let switch1 = false

soundsButton.addEventListener(
    'click',
    function(){
        if(switch1 == false){
            for (let i = 0; i < soundsAudio.length; i++) {
                soundsAudio[i].pause()
                OffOn1.innerHTML = 'Off'
            }
        }else{
            for (let i = 0; i < soundsAudio.length; i++) {
                soundsAudio[i].play()
                OffOn1.innerHTML = 'On'
            }
        }
        switch1 = !switch1
    }
)

//Music
const $music = document.querySelector('.musicAudio')
const closeCrossButton = document.querySelector('#closeCross')
let isMusicOn = false

closeCrossButton.addEventListener(
    'click',
    function() {
        if(!isMusicOn) {
            $music.play()
        }
    }
)

const musicButton = document.querySelector('.music')
const musicAudio = document.querySelector('.musicAudio')
const OffOn2 = document.querySelector('.musicOffOn')
let switch2 = false

musicButton.addEventListener(
    'click',
    function(){
        if(switch2 == false){
            musicAudio.pause()
            OffOn2.innerHTML = 'Off'
        }else{
            musicAudio.play()
            OffOn2.innerHTML = 'On'
        }
        switch2 = !switch2
    }
)

// Close Rules
const gameRules = document.querySelector('.gameRules')
const startButton = document.querySelector('.buttonStart')
const body = document.querySelector('body')

closeCrossButton.addEventListener('click', function(){
    gameRules.style.display = 'none'
    startButton.style.display = 'block'
    body.style.overflow = 'scroll'
})

// <<<<<<< HEAD
// <<<<<<< HEAD
// //GAME MECA/////////////////////////////

let fishType1 = document.querySelectorAll('.type1')
let fishType2 = document.querySelectorAll('.type2')
let fishType3 = document.querySelectorAll('.type3')
let fishType4 = document.querySelectorAll('.type4')
let fishType5 = document.querySelectorAll('.type5')
let fishType6 = document.querySelectorAll('.type6')
let fishType100 = document.querySelectorAll('.type100')

let deep0 = 790,
    deep2 = 2290,
    deep4 = 3790,
    deep6 = 5290,
    deep8 = 6790,
    deep10 = 8290


//window.onscroll = function() {myFunction()}     //Fonction pour connaitre la position du scroll 


for(let i = 0; i < fishType1.length ; i++){
    let posFishType1Y = Math.floor(Math.random()*(deep2-deep0)+deep0)
    console.log(posFishType1Y)
    fishType1[i].style.top = posFishType1Y + 'px'
    if (fishType1[i].classList.contains('right')){
        fishType1[i].style.right = -20 + '%'
    }else if(fishType1[i].classList.contains('left')){
        fishType1[i].style.left = -10 + '%'
    }
}

for(let j = 0; j< fishType2.length ; j++){

    let posFishType2Y = Math.floor(Math.random()*(deep4-deep0)+deep0)
    console.log(posFishType2Y)
    fishType2[j].style.top = posFishType2Y + 'px'
    if (fishType2[j].classList.contains('right')){
        fishType2[j].style.right = -20 + '%'
    }else if(fishType2[j].classList.contains('left')){
        fishType2[j].style.left = -10 + '%'
    }
}

for(let k = 0; k < fishType3.length ; k++){

    let posFishType3Y = Math.floor(Math.random()*(deep6-deep2)+deep2)
    console.log(posFishType3Y)
    fishType3[k].style.top = posFishType3Y + 'px'
    if (fishType3[k].classList.contains('right')){
        fishType3[k].style.right = -20 + '%'
    }else if(fishType3[k].classList.contains('left')){
        fishType3[k].style.left = -10 + '%'
    }
}

for(let l = 0; l< fishType4.length ; l++){

    let posFishType4Y = Math.floor(Math.random()*(deep8-deep4)+deep4)
    console.log(posFishType4Y)
    fishType4[l].style.top = posFishType4Y + 'px'
    if (fishType4[l].classList.contains('right')){
        fishType4[l].style.right = -20 + '%'
    }else if(fishType4[l].classList.contains('left')){
        fishType4[l].style.left = -10 + '%'
    }
}

for(let m = 0; m< fishType5.length ; m++){

    let posFishType5Y = Math.floor(Math.random()*(deep10-deep6)+deep6)
    console.log(posFishType5Y)
    fishType5[m].style.top = posFishType5Y + 'px'
    if (fishType5[m].classList.contains('right')){
        fishType5[m].style.right = -20 + '%'
    }else if(fishType5[m].classList.contains('left')){
        fishType5[m].style.left = -10 + '%'
    }
}

for(let n = 0; n< fishType6.length ; n++){

    let posFishType6Y = Math.floor(Math.random()*(deep10-deep8)+deep8)
    console.log(posFishType6Y)
    fishType6[n].style.top = posFishType6Y + 'px'
    if (fishType6[n].classList.contains('right')){
        fishType6[n].style.right = -20 + '%'
    }else if(fishType6[n].classList.contains('left')){
        fishType6[n].style.left = -10 + '%'
    }
}

for(let o = 0; o< fishType100.length ; o++){

    let posFishType100Y = Math.floor(Math.random()*(deep10-deep0)+deep0)
    console.log(posFishType100Y)
    fishType100[o].style.top = posFishType100Y + 'px'
    if (fishType100[o].classList.contains('right')){
        fishType100[o].style.right = -20 + '%'
    }else if(fishType100[o].classList.contains('left')){
        fishType100[o].style.left = -10 + '%'
    }
}


// function myFunction() {
//     var x = document.documentElement.scrollTop
//     //console.log(x)
//     if (x >= 790 && x < 2290){
//         //Faire spawn des poissons de type 1 et 2 
//         for(let i = 0; i<= fishType1.length ; i++){
//             posFishY = Math.floor(Math.random()*(2290-790)+790)
//             console.log('La position du poisson '+fishType1+' est '+posFishY)
//         }
        
//         console.log("Poisson de type 1 et 2")
//     }
//     else if(x >= 2290 && x < 3790){
//         // Faire spawn des poissons de type 2 et 3
//         console.log("Poisson de type 2 et 3")
//     }else if (x >= 3790 && x < 5290){
//         // Faire spawn des poissons de type 3 et 4
//         console.log("Poisson de type 3 et 4")
//     }else if (x >= 5290 && x < 6790){
//         // Faire spawn des poissons de type 4 et 5
//         console.log("Poisson de type 4 et 5")
//     }else if (x >= 6790 && x < 8290){
//         // Faire spawn des poissons de type 5 et 6
//         console.log("Poisson de type 5 et 6")
//     }else{
//         console.log("No fish area")
//     } 
// }

// Start the game 
const buttonStart = document.querySelector('.buttonStart')


/*
function scrollAuto(){
    window.scrollBy(0,1)
    setTimeout('scrollAuto()',1);   
}

buttonStart.addEventListener(
    'click',
    
    scrollAuto()
)
*/


class fish {
    constructor(id, type, speed, price, direction, data)
    {
        this.id = id
        this.type = type
        this.speed = speed
        this.price = price
        this.direction = direction
        this.data = data
        this.posX = 10
        this.posY = 20
    }  
    //function display(){
        
    }
    function move(){
        
    }
//}
let fishs = 
[
    new fish('fish', 'type1', 3000, 8, 'right', 0),
    new fish('fish', 'type1', 3000, 10, 'right', 1),
    new fish('fish', 'type1', 3000, 15, 'left', 2),
    new fish('fish', 'type1', 3000, 20, 'left', 3),
    new fish('fish', 'type2', 3000, 25, 'right', 4),
    new fish('fish', 'type2', 3000, 30, 'right', 5),
    new fish('whale', 'type100', 3000, -180, 'right', 6),
    new fish('fish', 'type3', 3000, 20, 'right', 7),
    new fish('fish', 'type3', 3000, 28, 'right', 8),
    new fish('shark', 'type100', 3000, -40, 'right', 9),
    new fish('fish', 'type4', 3000, 34, 'left', 10),
    new fish('fish', 'type4', 3000, 40, 'left', 11),
    new fish('fish', 'type4', 3000, 45, 'right', 12),
    new fish('fish', 'type5', 3000, 52, 'right', 13),
    new fish('fish', 'type5', 3000, 58, 'right', 14),
    new fish('fish', 'type5', 3000, 64, 'left', 15),
    new fish('fish', 'type6', 3000, 70, 'right', 16),
    new fish('fish', 'type6', 3000, 72, 'left', 17),
    new fish('goldFish', 'type100', 3000, 150, 'right', 18),
    new fish('turtle', 'type100', 3000, -180, 'right', 19),
    new fish('algea', 'type100', 3000, 0, 'right', 20),
    new fish('garbage', 'type100', 3000, 0, 'left', 21),
    new fish('garbage', 'type100', 3000, 0, 'right', 22),
    new fish('garbage', 'type100', 3000, 0, 'left', 23)
]


// // generer avec class
// /*class Fish {
//     constructor(id, type, speed, deep, price)
//     {
//         this.type = type
//         this.speed = speed
//         this.deep = deep
//         this.price = price
//         this.posX = 10
//         this.posY = 20
//     }  
//     function display() {
        
// =======
// =======
// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
// settingButton.addEventListener(
//     'click',
//     function(){
//         openSubMenuSetting.classList.toggle('subMenuSettingsOpen')
//         openSubMenuSetting.classList.toggle('subMenuSettings')
// <<<<<<< HEAD
// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
// =======
// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
//     }
// )


// // //GAME MECA/////////////////////////////

// // // generer avec class
// // class Fish {
// //     constructor(id, type, speed, deep, price)
// //     {
// //         this.type = type
// //         this.speed = speed
// //         this.deep = deep
// //         this.price = price
// //         this.posX = 10
// //         this.posY = 20
// //     }  
// //     function display() {
        
// <<<<<<< HEAD
// <<<<<<< HEAD
//     }
// }*/
// const test = function generate() {
//     let type = Math.floor(Math.random())
//     let speed = Math.floor(Math.random())
//     let deep = Math.floor(Math.random())
//     let price = 2
//     return new Fish(15,type,speed,deep,price)
// }  
// test()
// // let newFish = generate()
// // listFish.push(newFish)
// // const fishCreated = []
// // for (let index = 0; index <= 18; index++) {
// //     fishCreated = new Fish(index,type(), speed aleatoire, deep aleatoire)
// //     exemple.genere()
// // }

// // mouse click
// const fishArray = document.querySelectorAll('.fish')
// const fishClicked = []


// fishArray.forEach(function(element, index)
// {
//     element.addEventListener('click', (_event) => {
//         if(!fishClicked.includes(element)) {
//             fishClicked.push(element)
//         }
//         else {
//             console.log('fish in array')
//         }
//         fishFollow(_event.clientX, _event.clientY, element)
//         document.addEventListener('mousemove', _event => {
//             fishFollow(_event.clientX, _event.clientY, element)
//         })
//     })
// })

// function fishFollow(clientX, clientY, element) {
//     let fishX = clientX - element.width / 2
//     let fishY = clientY - element.height / 2
//     element.classList.remove('fish1', "fish")
//     element.style.zIndex = '-100px'

//     element.style.position = 'absolute'
//     element.style.left = fishX + "px"
//     element.style.top = fishY + "px"
// }
// =======
// //     }
// //     function move() {
        
// //     }
// // }
// // const test = function generate() {
// //     let type = Math.floor(Math.random())
// //     let speed = Math.floor(Math.random())
// //     let deep = Math.floor(Math.random())
// //     let price = 2
// //     return new Fish(15,type,speed,deep,price)
// // }  
// // test()
// // // let newFish = generate()
// // // listFish.push(newFish)
// // // const fishCreated = []
// // // for (let index = 0; index <= 18; index++) {
// // //     fishCreated = new Fish(index,type(), speed aleatoire, deep aleatoire)
// // //     exemple.genere()
// // // }

// // // mouse click
// // const fishArray = document.querySelectorAll('.fish')
// // const fishClicked = []


// // fishArray.forEach(function(element, index)
// // {
// //     element.addEventListener('click', (_event) => {
// //         if(!fishClicked.includes(element)) {
// //             fishClicked.push(element)
// //         }
// //         else {
// //             console.log('fish in array')
// //         }
// //         fishFollow(_event.clientX, _event.clientY, element)
// //         document.addEventListener('mousemove', _event => {
// //             fishFollow(_event.clientX, _event.clientY, element)
// //         })
// //     })
// // })

// // function fishFollow(clientX, clientY, element) {
// //     let fishX = clientX - element.width / 2
// //     let fishY = clientY - element.height / 2
// //     element.classList.remove('fish1', "fish")
// //     element.style.zIndex = '-100px'

// //     element.style.position = 'absolute'
// //     element.style.left = fishX + "px"
// //     element.style.top = fishY + "px"
// // }

// =======
// //     }
// //     function move() {
        
// //     }
// // }
// // const test = function generate() {
// //     let type = Math.floor(Math.random())
// //     let speed = Math.floor(Math.random())
// //     let deep = Math.floor(Math.random())
// //     let price = 2
// //     return new Fish(15,type,speed,deep,price)
// // }  
// // test()
// // // let newFish = generate()
// // // listFish.push(newFish)
// // // const fishCreated = []
// // // for (let index = 0; index <= 18; index++) {
// // //     fishCreated = new Fish(index,type(), speed aleatoire, deep aleatoire)
// // //     exemple.genere()
// // // }

// // // mouse click
const fishArray = document.querySelectorAll('.fish')
const fishClicked = []
let coin, totalCoin = document.querySelector('.totalCoin'), TCoin = 0

fishArray.forEach(function(element, index)
{
    element.addEventListener('mousedown', (_event) => {
        if(!fishClicked.includes(element)) {
            fishClicked.push(element)
            element.classList.remove('water')
            
            Coin = fishs[element.getAttribute('data-position')].price
            TCoin = TCoin + Coin
            totalCoin.innerHTML = TCoin
        }
        else {
            console.log('fish in array')
        }
        fishFollow(_event.clientX, _event.clientY, element)
        document.addEventListener('mousemove', _event => {
            fishFollow(_event.clientX, _event.clientY, element)
        })
    })
})



function fishFollow(clientX, clientY, element) {
    let fishX = clientX - element.width / 2
    let fishY = clientY - element.height / 2
    element.classList.remove('fish1', "fish")
    element.style.zIndex = '3'

    element.style.position = 'fixed'
    element.style.left = fishX + "px"
    element.style.top = fishY + "px"

    console.log('test');
    
}

// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3



// // // let x = event.clientX    // Get the horizontal coordinate
// // // let y = event.clientY   // Get the vertical coordinate
// // // let coor = "X coords: " + x + ", Y coords: " + y
// // // console.log(coor)
// <<<<<<< HEAD
// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
// =======
// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3


// Activation de la dynamite
window.addEventListener('keydown', function (event){
    if(event.key == "d"){
        // nom de la function de l'evenement causé par la dynamite
        console.log('function actived') // voir si la function s'active à l'activation de la touche d
    }
})

