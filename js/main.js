
class Character{
    constructor(name,health,strength){
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0
    }
 attack(target){
     if(this.health > 0){
         const damage = this.strength
         console.log(`${this.name} attacks ${target.name} and causes ${damage} health points left`)
         target.health -= damage
         if(target.health>0){
             console.log(`${target.name} has ${target.health} health points left `)
         }else{
             target.health = 0
             let bonusXP = 10
             console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points  `)
             this.xp += bonusXP
         }
     }else{
         console.log(`${this.name} can't attack they have been defeated`)
     }
     
    }
   describe(){
       return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`
    }
}

const Aurora = new Character("Aurora",150,25)
const Glacius = new Character("Glacius",130,30)

console.log("Our heroes are gonna fight. These are our heroes")
console.log(Aurora.describe())
console.log(Glacius.describe())

const monster = new Character("Spike",40,20)
console.log("A wild monster has appeard: it's named " + monster.name);

monster.attack(Aurora)
monster.attack(Glacius )

Aurora.attack(monster)
Glacius.attack(monster)

console.log(Aurora.describe())
console.log(Glacius.describe())
Aurora.attack(monster)


// Make a game in which there are 2 characters with buttons both chracters will have 150 health spawn will have attack 30 eron will have 20.
// Whenever one dies alert that the other one won 

class Mkcharacters{
    constructor(name,health,attack){
        this.name = name
        this.health = health
        this.attack = attack


    }
    attack1(target){
        if(this.health>0){
            document.querySelector(`#hp${target.name}`).innerHTML =target.health -= this.attack
            document.querySelector("#here").innerHTML = `${this.name} has attacked ${target.name}. ${this.name} dealt ${this.attack} damage points`
        }if(target.health>0){
            console.log(`${target.name} has ${target.health} health points left `)
        }else{
            alert(`${target.name} has died ${this.name} wins`)
        }
        
    }
}



const spawn = new Mkcharacters("spawn",150,30)
const eron = new Mkcharacters("eron",150,20)
document.querySelector("#hperon").innerHTML = eron.health
document.querySelector("#hpspawn").innerHTML = spawn.health



document.querySelector(`#spawnbut`).addEventListener("click",spawnattack)
document.querySelector(`#eronbut`).addEventListener("click",eronattack)


function spawnattack(){
    spawn.attack1(eron)

}

function eronattack(){
    eron.attack1(spawn)

}
