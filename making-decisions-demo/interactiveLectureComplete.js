// Create a variable for Jon and Jamie's attack strengths.

let jonSnowAttack = 25
let jamieLannisterAttack = 35

// Before the battle begins, Jon an Jamie decide to compare attack strengths to get insight into who might win this battle. Using an if-else statement, console.log who has the greater attack strength.

if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon Snow has better attack than Jamie Lannister")
} else {
  console.log("Jamie Lannister has better attack than Jon Snow")
}

// What if we have a tie? Our code would actually give the win to Jamie, which is no good. Add in an else if to resolve this.
if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon Snow has better attack than Jamie Lannister")
} else if (jamieLannisterAttack > jonSnowAttack){
  console.log("Jamie Lannister has better attack than Jon Snow")
} else {
  console.log("Jon Snow and Jamie Lannister have the same attack")
}

// Jamie, knowing he is the superior, initiates a fight with Jon.
// Let's create some additional stats for Jon Snow so we can see how this plays out.

let jonSnowHealth = 100
let jonSnowDefense = 0

// Jamie attacks first - use an if/else to determine if Jon Snow can survive the attack. If he does not, console.log "Jon Snow has been slain." Otherwise, condole.log Jon Snow's health.

if (jonSnowHealth <= jamieLannisterAttack) {
  console.log("Jon Snow has been slain.")
} else {
  jonSnowHealth -= jamieLannisterAttack  // OR jonSnowHealth = jonSnowHealth - jamieLannisterAttack
  console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

// Jon Snow, adamant he does not want to fight Jamie (can you blame him?), picks up a shield to help defend himself. Increase Jon's defense by 25.

defense += 25

// Jamie attacks again - use an if/else to determine if Jon Snow can survive the attack. Make sure to account for Jon's defense. If he does not, console.log "Jon Snow has been slain." Otherwise, condole.log Jon Snow's health.

if (health <= jamieLannisterAttack - defense) {
  console.log("Jon Snow has been slain.")
} else {
  health -= (jamieLannisterAttack - defense)
  console.log(`Jon Snow's health is down to ${health}`)
}

// One of the town's people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise Jon's health by 50pts. However, Jon's health cannot exceed 100. Using an if else statement, raise Jon's health to the appropriate level.

if ((jonSnowHealth + 50) >= 100 ) {
  jonSnowHealth = 100
} else {
  jonSnowHealth += 50
}

// Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, he will aim to take Jon's head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).


let coinLandsHeads = false

if (coinLandsHeads === true) {
  console.log("The fight continues.")
} else {
  console.log("Jon is allowed to run away.")
}

// Demonstrate how you can use != to accomplish the same thing.

if (coinLandsHeads !== false) {
  console.log("The fight continues.")
} else {
  console.log("Jon is allowed to run away.")
}


// Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.

let backpack = []

// Now, let's add some of his stuff to that backpack. Add 3 strings to the array, "sword", "shield", and "food".

backpack.push("sword")
backpack.push("shield")
backpack.push("food")

// Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.

backpack.splice(0, 1)

// Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack.

let furCoat = "fur coat"

backpack.push(furCoat)

// Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.

backpack.pop()

// Let's check how much stuff we have in our backpack. Create a variable called itemCount and set it equal to the number of items in the backpack.

let itemCount = backpack.length

// There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.

backpack.push("flint", "blanket", "knife", "toothbrush")

// Realizing his bag is overflowing, Jon decides to split up his content into two bags. Create a backpack2 variable that will hold some items. Use the splice method to move the flint, blanket, and knife from backpack to backpack2

var backpack2 = backpack.splice(2, 5)

// Using bracket syntax, console.log the first item in backpack2

console.log(backpack2[0])

// This, of course, is not a effective way to look at each item. We could console.log the entire array, but how do we handle looking at each item in the array, one at a time? This is where loops come in!

// LOOPS
// Let's see the contents of Jon's backpacks. Use a for loop on each backpack to console.log each item.

for (i =0; i < backpack.length; i++) {
  console.log(backpack[i])
}

for (i=0; i < backpack2.length; i++) {
  console.log(backpack2[i])
}

// How could you rewrite this to only show you the first 3 items of a given backpack?

for (i =0; i < 3; i++) {
  console.log(backpack[i])
}

// What if you ran the above for-loop, but did not have 3 items in the array? We could add a level of safety to it, by wrapping it in an if-else statement.

if (backpack.length >= 3) {
  for (i =0; i < 3; i++) {
    console.log(backpack[i])
  }
} else {
  for (i =0; i < backpack.length; i++) {
    console.log(backpack[i])
  }
}