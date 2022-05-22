let startButton = document.getElementById("start-button")

let diceAttackEnemy = 0
let diceSkillEnemy = 0
let diceAttackHero = 0
let diceSkillHero = 0

startButton.addEventListener("click", function() {
    loadHTML();
    buttonsAppear()
})

//add a few more skills to each character, depending on the number of diceCube that is automatically rolled, the given skill may or may not be taken under consideration, a special attack button that activates when you roll 6 on the diceCube andf it allows you at add all the skills you've got and multiply it by 6 | in other case depending on the number on one of the diceCube, you use that 'power' multiply it by the diceCube and use it in attack

let heroData = ""

function chooseHero(character) {
    heroData = character
}



//DATA FOR HEROES - START

//we are creating objects containing all the avaliable heroes data

//IMPORTANT - make all diceCube random 

let skywalker = {
    name: "Anakin Skywalker",
    avatar: "images/skywalker.png",
    health: 60,
    intelligence: 6,
    stealth: 3,
    force: 8,
    diceCube: diceAttackHero,
    diceTetrahedron: diceSkillHero,
}

let kenobi = {
    name: "Obi-Wan Kenobi",
    avatar: "images/kenobi.png",
    health: 80,
    intelligence: 10,
    stealth: 5,
    force: 5,
    diceCube: diceAttackHero,
    diceTetrahedron: diceSkillHero,
}

let tano = {
    name: "Ahsoka Tano",
    avatar: "images/tano.png",
    health: 50,
    intelligence: 5,
    stealth: 4,
    force: 4,
    diceCube: diceAttackHero,
    diceTetrahedron: diceSkillHero,
}

let thorne = {
    name: "Jason Thorne",
    avatar: "images/thorne.png",
    health: 60,
    intelligence: 5,
    stealth: 3,
    force: 5,
    diceCube: diceAttackHero,
    diceTetrahedron: diceSkillHero,
}

let jared = {
    name: "Youngling Jared",
    avatar: "images/jared.png",
    health: 20,
    intelligence: 9,
    stealth: 5,
    force: 4,
    diceCube: diceAttackHero,
    diceTetrahedron: diceSkillHero,
}

chooseHero(skywalker)
    // we created a new var that stores the data of the chosen hero, so that we can change heroes we are using

//using object destructuring, we are creating new variables using data from objects



let divHero = document.getElementById("hero")

let hero = document.createElement('div')

//DATA FOR HEROES - END



//DATA FOR MONSTERS - START

//we are creating objects containing all the avaliable monstewrs data
let verra = {
    name: "Verra",
    avatar: "images/verra.png",
    health: 150,
    intelligence: 2,
    stealth: 2,
    force: 1,
    diceCube: diceAttackEnemy,
    diceTetrahedron: diceSkillEnemy,
}

let dooku = {
    name: "Count Dooku",
    avatar: "images/dooku.png",
    health: 70,
    intelligence: 7,
    stealth: 3,
    force: 7,
    diceCube: diceAttackEnemy,
    diceTetrahedron: diceSkillEnemy,
}

let grievous = {
    name: "General Grievous",
    avatar: "images/grievous.png",
    health: 80,
    intelligence: 8,
    stealth: 2,
    force: 1,
    diceCube: diceAttackEnemy,
    diceTetrahedron: diceSkillEnemy,
}

let ventress = {
    name: "Assaj Ventress",
    avatar: "images/ventress.png",
    health: 50,
    intelligence: 5,
    stealth: 5,
    force: 6,
    diceCube: diceAttackEnemy,
    diceTetrahedron: diceSkillEnemy,
}

let palpatine = {
    name: "Darth Sidious",
    avatar: "images/palpatine.png",
    health: 80,
    intelligence: 5,
    stealth: 3,
    force: 8,
    diceCube: diceAttackEnemy,
    diceTetrahedron: diceSkillEnemy,
}

let monsterData = verra
monsterRandom() //makling the monster type random 

//using object destructuring, we are creating new variables using data from objects
let { name: monsterName, avatar: monsterAvatar, health: monsterHealth, diceCube: monsterdiceCube } = monsterData



let divMonster = document.getElementById("monster")

let monster = document.createElement('div')

//DATA FOR MONSTERS - END


let enemyArray = [verra, dooku, grievous, ventress, palpatine]

function monsterRandom() { //min max so that we can call the function wihtout the characters that'd been killed

    if (monsterData.health <= 0) {

        for (let i = 0; i < enemyArray.length; i++) {
            if (enemyArray[i].health <= 0) {
                enemyArray.splice(i, 1)
            }
        }

        console.log(enemyArray)
        let generatedEnemy = Math.floor(Math.random() * (enemyArray.length))

        monsterData = enemyArray[generatedEnemy]
    }
}


function attack() {
    //monsterHealth -= herodiceCube
    //console.log("monsterhealth" + monsterHealth)
    monsterData.health -= diceAttackHero * activeSkillHero
    console.log("monsterData.health" + monsterData.health)
    console.log("monsterData.name" + monsterData.name)
    heroData.health -= diceAttackEnemy * activeSkillEnemy
    console.log("heroData.health" + heroData.health)
    console.log("heroData.name" + heroData.name)
    loadHTML()
}
let { name: heroName, avatar: heroAvatar, health: heroHealth, diceCube: herodiceCube } = heroData //unless this is called one more time inside lpadHTML function we won't be able to change the active hero appearing on the sacreen?? 

function loadHTML() {
    gameOver()
    startButton.classList.add("invisible")
    document.getElementById("instructions").classList.add("invisible") // so that the start game button will disappear once we start the game 
    document.getElementById("shortInstructions").classList.remove("hiddenVisibility")
    deadHero()
    monsterRandom()

    console.log("verra" + verra.health)
    console.log("grievous" + grievous.health)
    console.log("dooku" + dooku.health)
    console.log("ventress" + ventress.health)
    console.log("palpie" + palpatine.health)


    //reasigning the values so that we can show the character after we've changed it      
    heroName = heroData.name
    heroAvatar = heroData.avatar
    heroHealth = heroData.health
    herodiceCube = heroData.diceCube


    //HTML SETTINGS FOR HERO - START

    hero.innerHTML = `
                <div class="character-card">
                    <h4 class="name"> ${heroData.name} </h4>
                    <img class="avatar" src=${heroData.avatar}/>
                    <div class="specs">health: <b> ${heroData.health} </b></p>
                    <p>force: <b> ${heroData.force} </b></p>
                    <p>stealth: <b> ${heroData.stealth} </b></p>
                    <p>intelligence: <b> ${heroData.intelligence} </b></p></div>
                    <div class="diceCube-container"><div class="dice"> ${diceAttackHero} </div></div><span class="diceSkill, diceSkillTop">Cubic dice - strength.</span>
                     <div class="diceTetrahedron-container"><div class="dice"> ${diceSkillHero}
                </div> </div><span class="diceSkill, diceSkillBottom">Tetrahedral dice - skill: ${nameOfActiveSkillHero} </span>
`

    divHero.appendChild(hero)

    //HTML SETTINGS FOR HERO - END


    //HTML SETTINGS FOR MONSTER - START  diceTetrahedron

    monster.innerHTML = `
            <div class="character-card">
            <h4 class="name"> ${monsterData.name} </h4>
            <img class="avatar" src=${monsterData.avatar}/>
            <div class="specs">health: <b> ${monsterData.health} </b></p>
            <p>force: <b> ${monsterData.force} </b></p>
            <p>stealth: <b> ${monsterData.stealth} </b></p>
            <p>intelligence: <b> ${monsterData.intelligence} </b></p></div>
            <div class="diceCube-container"><div class="dice"> ${diceAttackEnemy} </div></div><span class="diceSkill, diceSkillTop">Cubic dice - strength.</span>
            <div class="diceTetrahedron-container"><div class="dice"> ${diceSkillEnemy} 
            </div></div><span class="diceSkill, diceSkillBottom">Tetrahedral dice - skill: ${nameOfActiveSkillEnemy} </span>
            `

    divMonster.appendChild(monster)

    //HTML SETTINGS FOR MONSTER- END
}

function buttonsAppear() {

    let buttonAppear = document.getElementById("actions")



    let buttonAttack = document.createElement('div')

    buttonAttack.innerHTML = `
            <button id="attack-button">Attack</button>
`

    buttonAppear.appendChild(buttonAttack)

    let buttonSwitch = document.createElement('div')

    buttonSwitch.innerHTML = `
            <button id="roll-button">Roll the dice</button>
               <div>
               <button id="switch-button">Change Active Character</button>
`

    buttonAppear.appendChild(buttonSwitch)

    let switchButton = document.getElementById("switch-button")

    switchButton.addEventListener("click", changeCharacter)

    let diceButton = document.getElementById("roll-button")

    diceButton.addEventListener("click", rollDice)


    let attackButton = document.getElementById("attack-button")

    attackButton.addEventListener("click", attack)
}

let counterHero = 1
let heroArray = [skywalker, kenobi, tano, jared, thorne]

function changeCharacter() { //we will call the function upon clicking the button and automatically when the current character dies


    if (counterHero < heroArray.length) {
        chooseHero(heroArray[counterHero])
    } else {
        counterHero = 0
        chooseHero(heroArray[counterHero])
    }
    counterHero++
    loadHTML()
}


function deadHero() {
    for (let i = 0; i < heroArray.length; i++) {
        if (heroArray[i].health <= 0) {
            heroArray.splice(i, 1)
            changeCharacter()
        }
    }
}

let activeSkillHero = 1
let activeSkillEnemy = 1
let nameOfActiveSkillHero = ""
let nameOfActiveSkillEnemy = ""


function rollDice() {

    console.log("ROLLDICE HAS BEEN ACTIVATED!!!!!!!!!!!")
    diceAttackEnemy = Math.floor(Math.random() * (6)) + 1 //this dice is responsible for the strength of the attack - number on the dice times number on the chosen skill = strength of the attack
    diceSkillEnemy = Math.floor(Math.random() * (3)) + 1 //this dice is responsible fopr chosing the skill that is gonna be used in the next attack
    diceAttackHero = Math.floor(Math.random() * (6)) + 1
    diceSkillHero = Math.floor(Math.random() * (3)) + 1




    switch (diceSkillHero) {
        case 1:
            activeSkillHero = heroData.intelligence
            nameOfActiveSkillHero = "Intelligence"
            break;
        case 2:
            activeSkillHero = heroData.stealth
            nameOfActiveSkillHero = "Stealth"
            break;
        case 3:
            activeSkillHero = heroData.force
            nameOfActiveSkillHero = "Force"
            break;
    }

    //the tetraedral has 4 sides so add one more skill!!!!!

    switch (diceSkillEnemy) {
        case 1:
            activeSkillEnemy = monsterData.intelligence
            nameOfActiveSkillEnemy = "Intelligence"
            break;
        case 2:
            activeSkillEnemy = monsterData.stealth
            nameOfActiveSkillEnemy = "Stealth"
            break;
        case 3:
            activeSkillEnemy = monsterData.force
            nameOfActiveSkillEnemy = "Force"
            break;
    }
    loadHTML()
}


function gameOver() {
    if (enemyArray.length == 0) {
        console.log("YOU WON!")

        document.getElementById("actions").classList.add("invisible")
        document.getElementById("monster").classList.add("invisible")
        document.getElementById("hero").classList.add("invisible")

        document.getElementById("winner").classList.remove("invisible")
    } else if (heroArray.length == 0) {
        console.log("YOU LOST!")

        document.getElementById("actions").classList.add("invisible")
        document.getElementById("monster").classList.add("invisible")
        document.getElementById("hero").classList.add("invisible")

        document.getElementById("loser").classList.remove("invisible")
    }
}



//ADD SOME FATAL STRIKE INFO WHEN YOU GIVE OR RECEIVE THE FATAL BLOW - THAT DECIDES OF WINNING/LOSING and loadHTML inside the function that shows that fatal strike info 
//Add some animation when a party member gets killed maybe?