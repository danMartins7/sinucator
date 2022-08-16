const { DB } = require("./db");
const { Player } = require("./entities/player");
const { Match } = require("./entities/match");
const { Season } = require("./entities/season");
const { SeasonType } = require("./entities/seasonType");
const { PlayerMatch } = require("./entities/playerMatch");


DB.savePlayer(new Player("P1", "P1"));
DB.savePlayer(new Player("P2", "P2"));

const seasonType = DB.seasonTypes.find(x => x.type == "3 bolinhas" && x.mode == "individual")
DB.saveSeason(new Season(seasonType.id,"S1","28/06","30/06"))

const S1 = DB.seasons.find(x => x.name == "S1")
const M1 = new Match(S1.id)
DB.saveMatch(M1)

const p1 = DB.players.find(x => x.name == "P1")
const p2 = DB.players.find(x => x.name == "P2")

var pm1 = new PlayerMatch(p1.id, M1.id, true);
var pm2 = new PlayerMatch(p2.id, M1.id, false);

DB.savePlayerMatch(pm1);
DB.savePlayerMatch(pm2);

console.log(DB)

//temporada $temp, modalidade: $modalidade
// partida entre jogadores: $jogador nome, $jogadorNome
//vencedor: $jogadorNome

console.log("temporada" + S1.name + ", modalidade : " + seasonType + " " + seasonType.mode);

//const m1 = new Match(1,)

//DB.players.push(p1)
//DB.players.push(p2)
//console.log(s1);