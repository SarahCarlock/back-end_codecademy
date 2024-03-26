const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.yColumns = 0;
    this.xRows = 0;
    // Make sure that player starts at top left corner
    this.field[Math.floor(Math.random() * this.yColumns)][Math.floor(Math.random() * this.xRows)] = pathCharacter;
}
  //Start your engines! Let's play!
  playGame() {
    let playing = true;
    while (playing) {
      this.print();
      this.movePlayer();
      if (!this.playInBounds()) {
        console.log("Sorry! You can't move there!");
        playing = false;
        break;
      } else if (this.holeTile()) {
        console.log("Whoopsee! Right down the hole!");
        playing = false;
        break;
      } else if (this.hatTile()) {
        console.log("Yee Haw! THERE's your Hat!");
        playing = false;
        break;
      }
      // Update the current location on the map
        this.field[this.yColumns][this.xRows] = pathCharacter;
  }
  }
  //Retrieve user's input and move the player's cursor
  movePlayer() {
    let move = prompt(
      "Move your character").toLowerCase();
    switch (move) {
      case "d":
        this.xRows += 1;
        break;
      case "a":
        this.xRows -= 1;
        break;
      case "w":
        this.yColumns -= 1;
        break;
      case "s":
        this.yColumns += 1;
        break;
      default:
        console.log("Enter w, a, s, or d.");
        this.movePlayer();
        break;
    }
  }
  //Print the field to the terminal in a two-dimensional plane
  print() {
    for (let row of this.field) {
      console.log(row.join(" "));
    }
  }
  // Stay in the game area
  playInBounds() {
    return (
      this.yColumns >= 0 &&
      this.xRows >= 0 &&
      this.yColumns < this.field.length &&
      this.xRows < this.field[0].length
    );
  }
  hatTile() {
    return this.field[this.yColumns][this.xRows] === hat;
  }
  holeTile() {
    return this.field[this.yColumns][this.xRows] === hole;
  }
  //Generate a new field and limit minimum size.
  static generateField(columns, rows, holeCount = 0.15) {
    const field = new Array(columns).fill(0).map((el) => new Array(rows));
    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const randomMath = Math.random();
        field[y][x] = randomMath > holeCount ? fieldCharacter : hole;
      }
    }
    // Set the "hat" location
    const hatLocation = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * columns),
    };
    // Make sure the "hat" is not at the starting point
    while (hatLocation.x === 0 && hatLocation.y === 0) {
      hatLocation.x = Math.floor(Math.random() * x);
      hatLocation.y = Math.floor(Math.random() * y);
    }
    field[hatLocation.y][hatLocation.x] = hat;
    return field;
  }
}
//end constructor

const myfield = new Field(Field.generateField(10, 10));
myfield.playGame();
