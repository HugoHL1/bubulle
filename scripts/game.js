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

const subMenus = document.querySelectorAll('.subMenu')

for (let i = 0; i < subMenus.length; i++) {
    subMenus[i].addEventListener('click',
    function(e){
        e.stopPropagation()
    }
    )
}

// <<<<<<< HEAD
// <<<<<<< HEAD
// //GAME MECA/////////////////////////////

window.onscroll = function() {myFunction()};
 
function myFunction() {
var x = document.documentElement.scrollTop
console.log(x)
if (x > 2250) 
{
console.log("youhou");
}
else
{
console.log("Oh")
}
 
}

class fish {
    constructor(id, type, speed, price, direction)
    {
        this.id = id
        this.type = type
        this.speed = speed
        this.price = price
        this.direction = direction
        this.posX = 10
        this.posY = 20
    }  
    //function display(){
        
    }
    function move(){
        
    }
//}

let specie1 = new fish('fish', 'type1', 3000, 8, 'right')
let specie2 = new fish('fish', 'type1', 3000, 10, 'right')
let specie3 = new fish('fish', 'type1', 3000, 15, 'left')
let specie4 = new fish('fish', 'type1', 3000, 20, 'left')
let specie5 = new fish('fish', 'type2', 3000, 25, 'right')
let specie6 = new fish('fish', 'type2', 3000, 30, 'right')
let specie7 = new fish('whale', 'type100', 3000, -180, 'right')
let specie8 = new fish('fish', 'type3', 3000, 20, 'right')
let specie9 = new fish('fish', 'type3', 3000, 28, 'right')
let specie10 = new fish('shark', 'type100', 3000, -40, 'right')
let specie11 = new fish('fish', 'type4', 3000, 34, 'left')
let specie12 = new fish('fish', 'type4', 3000, 40, 'left')
let specie13 = new fish('fish', 'type4', 3000, 45, 'right')
let specie14 = new fish('fish', 'type5', 3000, 52, 'right')
let specie15 = new fish('fish', 'type5', 3000, 58, 'right')
let specie16 = new fish('fish', 'type5', 3000, 64, 'left')
let specie17 = new fish('fish', 'type6', 3000, 70, 'right')
let specie18 = new fish('fish', 'type6', 3000, 72, 'left')
let specie19 = new fish('goldFish', 'type100', 3000, 150, 'right')
let specie20 = new fish('turtle', 'type100', 3000, -180, 'right')
let specie21 = new fish('algea', 'type100', 3000, 0, 'right')
let specie22 = new fish('garbage', 'type100', 3000, 0, 'left')
let specie23 = new fish('garbage', 'type100', 3000, 0, 'right')
let specie24 = new fish('garbage', 'type100', 3000, 0, 'left')


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

// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3



// // // let x = event.clientX    // Get the horizontal coordinate
// // // let y = event.clientY   // Get the vertical coordinate
// // // let coor = "X coords: " + x + ", Y coords: " + y
// // // console.log(coor)
// <<<<<<< HEAD
// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
// =======
// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
