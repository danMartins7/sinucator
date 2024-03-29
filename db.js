const { Season } = require("./entities/season");
const { SeasonType } = require("./entities/seasonType");
const { match } = require("./entities/match")

function DB() {
    this.matches = [];
    this.players = [];
    this.seasons = [];
    this.seasonRakings = [];
    this.seasonRakingPlayers = [];
    this.seasonTypes = [];
    this.teams = []

    // cadastro de valores fixos da aplicaçao
    this.init = function () {
        this.saveSeasonType(new SeasonType("par/impar", "individual"));
        this.saveSeasonType(new SeasonType("par/impar", "dupla"));
        this.saveSeasonType(new SeasonType("3 bolinhas", "individual"));
    }

    this.findPlayerByName = function(name){
        return this.players.find(x => x.name == name)
    }

    this.findMatchesBySeason = function(seasonName){
       var season = this.seasons.find(x => x.name == seasonName)
        return this.matches.filter(x => x.seasonID == season.id)
    }

    this.findVictorysByName = function (name, isWinner){
        var player = this.players.find(x => x.name == name)
        var pmatches= this.playerMatches.filter(x => x.playerID == player.id)
        return pmatches.filter(x => x.isWinner == isWinner).length

    }

    this.findVictorysByNameAndSeason = function (playerName, isWinner, seasonName){
        var player = this.players.find(x => x.name == playerName)
        var pmatches= this.playerMatches.filter(x => x.playerID == player.id)
        var season = this.seasons.find(x => x.name == seasonName)
        
        

    }



    this.saveMatch = function (match) {
        match.id = this.matches.length + 1;
        this.matches.push(match);
    }
    this.savePlayer = function (player) {
        player.id = this.players.length + 1;
        this.players.push(player);
    }
    this.saveTeam = function (team) {
        team.id = this.teams.length + 1;
        this.teams.push(team);
    }
    this.saveSeason = function (season) {
        season.id = this.seasons.length + 1;
        this.seasons.push(season);
    }
    this.saveSeasonRaking = function (seasonRaking) {
        seasonRaking.id = this.seasonRakings.length + 1;
        this.seasonRakings.push(seasonRaking);
    }
    this.saveSeasonRakingPlayer = function (seasonRakingPlayer) {
        this.seasonRakingPlayer.id = this.seasonRakingPlayers.length + 1;
        this.seasonRakingPlayers.push(seasonRakingPlayer);
    }
    this.saveSeasonType = function (seasonType) {
        seasonType.id = this.seasonTypes.length + 1;
        this.seasonTypes.push(seasonType);
    }

    return this;
}
const db = new DB();
db.init();
exports.DB = db;