// // base class  acts as constructor.
// function Character(name,health){
//     this.name = name;
//     this.health = health;
// }
// // base class method
// Character.prototype.takeDamage = function(amount){
//     this.health -= amount;
//     return `${this.name} took ${amount} damage. Health now is ${this.health}`;
// }

// // child class with inheritance to a base class using .call
// function Warrior(name,health,weapon){
//     Character.call(this,name,health);
//     this.weapon = weapon;
// }
// // acquiring methods of parent class
// Warrior.prototype = Object.create(Character.prototype);
// // assigning original constructor which was rewritten above
// Warrior.prototype.constructor = Warrior;

// // method for the child class
// Warrior.prototype.attack = function(){
//     return `${this.name} attacks with their ${this.weapon}`;
// }

// // using new creates an object 
// const mywarrior = new Warrior('encrid',100,'double sword');

// console.log(mywarrior.attack());

// console.log(mywarrior.takeDamage(10));

// console.log(mywarrior.constructor.name);

// -------------------------------------------------------------------------------------


// with comments for more details V
// --------------------------------------
// function Hero(name, health) {
//   this.name = name;
//   this.health = health;
// }

// Hero.prototype.takeDamage = function(amount) {
//   this.health -= amount;
//   return `${this.name} took ${amount} damage. Health now is ${this.health}`;
// };

// function Warrior(name, health, weapon) {
//   Hero.call(this, name, health); // 1. Property inheritance
//   this.weapon = weapon;
// }

// // 2. Prototype inheritance
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior; // 3. The birth certificate fix

// Warrior.prototype.attack = function() {
//   return `${this.name} attacks with their ${this.weapon}`;
// };

// // Your test instantiation
// const hero = new Warrior("encrid", 100, "double sword");
// console.log(hero.attack());
// console.log(hero.takeDamage(10));
// console.log(hero.constructor.name); // Outputs: Warrior
