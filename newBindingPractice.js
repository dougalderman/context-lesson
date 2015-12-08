/*
  Create a function that you can create new superheroes with
  Each super hero should have:
    - a name,
    - a power,
    - a battle cry,
    - a function to shout the battle cry
    - a function to use the super power
*/

function Superhero(name, power, battleCry)  {

  this.name = name;
  this.power = power;
  this.battleCry = battleCry;
  this.shoutBattleCry = function() {
    console.log(this.name + " says: " + this.battleCry);
  };
  this.useSuperPower = function() {
    if (this.power > 5)
      console.log(this.name + "says: I'm powerful!")
    else {
      console.log(this.name + "says: I'm a weakling.")
    }
  }

}

var batman = new Superhero("Batman", 8, "Hey!");
var nightcrawler = new Superhero("Nightcrawler", 3, "BAMF!");

batman.shoutBattleCry();
batman.useSuperPower();

nightcrawler.shoutBattleCry();
nightcrawler.useSuperPower();
