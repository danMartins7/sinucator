const { DB } = require("./db");
const { Player } = require("./entities/player");
const { Match } = require("./entities/match");
const { Season } = require("./entities/season");
const { SeasonType } = require("./entities/seasonType");

const  service = require('./service');

service.addPlayer("P1", "P1");
service.addPlayer("P2", "P2");

service.addSeason("3 bolinhas", "individual", "S1", "05/09", "10/09")
const result = service.addSeason("3 bolinhas", "individual", "S1", "05/09", "10/09")
console.log(result)

const M1 = new Match(S1.id)
const M2 = new Match(S1.id)
DB.saveMatch(M1)
DB.saveMatch(M2)

const p1 = DB.players.find(x => x.name == "P1")
const p2 = DB.players.find(x => x.name == "P2")



const player = DB.findPlayerByName("P2")
const match = DB.findMatchesBySeason("S1")
const victory = DB.findVictorysByName("P1", false)
console.log(victory)

//temporada $temp, modalidade: $modalidade
// partida entre jogadores: $jogador nome, $jogadorNome
//vencedor: $jogadorNome

console.log("temporada :" + S1.name + ", modalidade : " + seasonType.type + " " + seasonType.mode);
console.log("partida entre os jogadores :" + p1.name + " e " + p2.name)
console.log("vencedor: " + p1.name)
//const m1 = new Match(1,)

//DB.players.push(p1)
//DB.players.push(p2)
//console.log(s1);S