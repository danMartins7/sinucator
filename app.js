const { DB } = require("./db");
const { Player } = require("./entities/player");

const p1 = new  Player("Danilo", "Martins", [])

DB.players.push(p1)
console.log(DB.matches);