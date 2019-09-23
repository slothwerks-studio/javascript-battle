/* 
  This is a game that uses nothing but the 
  concepts covered in the Grand Circus Intro to Code
  workshop.
  https://www.grandcircus.co/slides/intro-coding/index.html#/

  It is written in JavaScript and features a protaganist
  named Sloth.  He needs to defeat an enemy in battle,
  which is played out using a for loop.

  One may name the enemy anything they wish, as well as the enemy's weapon.  Sloth has a choice of weapons, which do varying damage; this weapon is selected in the code prior to the battle loop.

  Results of the battle are printed to the console using console.log.
*/

// Variables
var enemyName = "Zorg, the Imposter";
var slothHealth = 20;
var enemyHealth = 20;
var slothWeapon; // Possible options:  "axe", "boomerang", "fist"
var enemyWeapon = "flaming sword of doom";
var enemyDamage = 3;
var axeDamage = 3;
var boomerangDamage = 2;
var fistDamage = 1;
var dashLine = "------------------------------"

// Introduction
console.log(dashLine);
console.log("Welcome to Sloth's Game!");
console.log(dashLine);
console.log("Sloth needs to defeat the evil " + enemyName + "!");
console.log("The two will fight to the death.");

// Pick a weapon for Sloth
slothWeapon = "axe";
console.log("Sloth will fight with his trusty " + slothWeapon + ".");
console.log("The battle begins!");
console.log(dashLine);

// The battle
for (var roundNumber = 1; (slothHealth > 0 && enemyHealth > 0); roundNumber++) {
  console.log("Sloth attacks with his " + slothWeapon + "!");
  if (slothWeapon === "axe") {
    enemyHealth = enemyHealth - axeDamage;
    console.log("Wow!  Sloth does " + axeDamage + " damage to " + enemyName + ".");
  } else if (slothWeapon === "boomerang") {
    enemyHealth = enemyHealth - boomerangDamage;
    console.log("Whirrrr!  Sloth does " + boomerangDamage + " damage to " + enemyName + ".");
  } else if (slothWeapon === "fist") {
    enemyHealth = enemyHealth - fistDamage;
    console.log("Whap!  Sloth does " + fistDamage + " damage to " + enemyName + ".");
  } else {
    console.log("Alas!  Sloth has no idea how to use his " + slothWeapon + ", and therefore does absolutely no damage to " + enemyName + ".");
  }
  console.log("Oh no!  " + enemyName + " retaliates with his " + enemyWeapon + "!");
  slothHealth = slothHealth - enemyDamage;
  console.log("Nooooo!  " + enemyName + " does " + enemyDamage + " damage to Sloth!");
  console.log(dashLine);
  console.log("Round " + roundNumber + " is over.");
  console.log("Current standings:  Sloth has " + slothHealth + " health, and " + enemyName + " has " + enemyHealth + " health.");
  console.log(dashLine);
}

// The Results
console.log("The battle is over!");
if (slothHealth > 0) {
  console.log("Sloth is victorious!  Whoooo hoooo!");
  console.log(dashLine);
} else if (enemyHealth > 0) {
  console.log("Oh no!  " + enemyName + " wins!  What a sad day indeed.");
  console.log(dashLine);
} else if (slothHealth < 1 && enemyHealth < 1) {
  console.log("With their last desperate breath, both Sloth and " + enemyName + " dispatch each other in locked battle.  An epic ending made for the bards!");
  console.log(dashLine);
} else {
  console.log("An error occurred; please contact your administrator for assistance.");
  console.log(dashLine);
}