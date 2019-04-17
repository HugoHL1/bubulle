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

<<<<<<< HEAD
<<<<<<< HEAD
//GAME MECA/////////////////////////////

// generer avec class
/*class Fish {
    constructor(id, type, speed, deep, price)
    {
        this.type = type
        this.speed = speed
        this.deep = deep
        this.price = price
        this.posX = 10
        this.posY = 20
    }  
    function display() {
        
=======
=======
>>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
settingButton.addEventListener(
    'click',
    function(){
        openSubMenuSetting.classList.toggle('subMenuSettingsOpen')
        openSubMenuSetting.classList.toggle('subMenuSettings')
<<<<<<< HEAD
>>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
=======
>>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
    }
)


// //GAME MECA/////////////////////////////

// // generer avec class
// class Fish {
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
        
<<<<<<< HEAD
<<<<<<< HEAD
    }
}*/
const test = function generate() {
    let type = Math.floor(Math.random())
    let speed = Math.floor(Math.random())
    let deep = Math.floor(Math.random())
    let price = 2
    return new Fish(15,type,speed,deep,price)
}  
test()
// let newFish = generate()
// listFish.push(newFish)
// const fishCreated = []
// for (let index = 0; index <= 18; index++) {
//     fishCreated = new Fish(index,type(), speed aleatoire, deep aleatoire)
//     exemple.genere()
// }

// mouse click
const fishArray = document.querySelectorAll('.fish')
const fishClicked = []


fishArray.forEach(function(element, index)
{
    element.addEventListener('click', (_event) => {
        if(!fishClicked.includes(element)) {
            fishClicked.push(element)
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
    element.style.zIndex = '-100px'

    element.style.position = 'absolute'
    element.style.left = fishX + "px"
    element.style.top = fishY + "px"
}
=======
//     }
//     function move() {
        
//     }
// }
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

=======
//     }
//     function move() {
        
//     }
// }
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

>>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3



// // let x = event.clientX    // Get the horizontal coordinate
// // let y = event.clientY   // Get the vertical coordinate
// // let coor = "X coords: " + x + ", Y coords: " + y
// // console.log(coor)
<<<<<<< HEAD
>>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
=======
>>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
