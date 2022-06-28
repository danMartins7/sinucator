const { DB } = require("./db");
const { Player } = require("./entities/player");
const { Match } = require("./entities/match")
const { Season } = require("./entities/season")
const { SeasonType } = require("./entities/seasonType")

const sType1 = new SeasonType("par/impar", "individual")
const sType2 = new SeasonType("par/impar", "dupla")

DB.saveSeasonType(sType1);
DB.saveSeasonType(sType2);

const s1 = new Season()

const p1 = new  Player("P1", "P1",[])
const p2 = new Player("P2", "P2", [])

const m1 = new Match()

DB.players.push(p1)
DB.players.push(p2)
console.log(DB.players);