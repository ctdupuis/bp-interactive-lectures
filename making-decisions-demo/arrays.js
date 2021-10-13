let jonSnowAttack = 25;
let jaimeLannisterAttack = 35;

if (jonSnowAttack > jaimeLannisterAttack) {
    console.log("Jon Snow has better attack than Jaime Lannister " )
} else if (jonSnowAttack === jaimeLannisterAttack) {
    console.log("Jon Snow and Jaime Lannister have the same attack")
} else {
    console.log("Jaime Lannister has better attack than Jon Snow")
}


let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jaimeLannisterAttack) {
    console.log("Jon Snow has been slain")
} else {
    jonSnowHealth -= jaimeLannisterAttack
    console.log(`Jon Snow has ${jonSnowHealth} health`) 
}

jonSnowDefense += 25

if (jonSnowHealth <= jaimeLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain")
} else {
    jonSnowHealth -= jaimeLannisterAttack - jonSnowDefense
    console.log(`Jon Snow has ${jonSnowHealth} health`)
}

if ((jonSnowHealth + 50) >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

let coinLandsHeads = false

if (coinLandsHeads) {
    console.log("The fight continues")
} else {
    console.log("Jon Snow is allowed to escape")
}

if (!coinLandsHeads) {
    console.log("Jon Snow is allowed to escape")
} else {
    console.log("The fight continues")
}

while (jonSnowHealth > 0) {
    jonSnowHealth -= jaimeLannisterAttack - jonSnowDefense
    console.log(`Jon Snow has ${jonSnowHealth} health`)
    if (jonSnowHealth <= 0) {
        console.log(`Jon Snow has been slain`)
    }
}

let pack = []

pack.push("sword")
pack.push("shield")
pack.push("food")

pack.splice(0, 1)

let coat = "fur coat"

pack.push(coat)

pack.pop()

let itemCount = pack.length

pack.push('flint', 'blanket', 'knife', 'toothbrush')

let satchel = pack.splice(2, 5)


for (let i = 0; i < satchel.length; i++) {
    console.log("Digging through the satchel:", satchel[i])
}

if (pack.length > 3) {
    for (let i = 0; i < 3; i++) {
        console.log("Digging through the backpack:", pack[i])
    }
} else {
    for (let i = 0; i < pack.length; i++) {
        console.log("Digging through the backpack:", pack[i])
    }
}