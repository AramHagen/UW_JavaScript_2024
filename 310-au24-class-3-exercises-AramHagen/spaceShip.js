// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console
//   `${name} moving to ${topSpeed}`

class SpaceShip {
  constructor(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
  }
  accelerate(color) {
    const { name, topSpeed } = this;
    console.log(`%c${name} moving to ${topSpeed}`,`color:${color}`);
  }
}

const starChaser = new SpaceShip("StarChaser", "12000 mph");
const novaPhoenix = new SpaceShip("Nova Phoenix", "18000 mph");
const lunarEagle = new SpaceShip("Lunar Eagle", "20000 mph");

const allSpaceShips = [starChaser, novaPhoenix, lunarEagle];

// 2. Call the constructor with a couple ships,
// and call accelerate on both of them.
const colors = ['red','green','pink','yellow'];

allSpaceShips.forEach((ship) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  ship.accelerate(randomColor);
});