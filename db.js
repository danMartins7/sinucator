const { Season } = require("./entities/season");
const { SeasonType } = require("./entities/seasonType");
const { match } = require("./entities/match")

function DB() {
    this.matches = [];
    this.players = [];
    this.playerMatches = [];
    this.seasons = [];
    this.seasonRakings = [];
    this.seasonRakingPlayers = [];
    this.seasonTypes = [];

    // cadastro de valores fixos da aplicaçao
    this.init = function () {
        this.saveSeasonType(new SeasonType("par/impar", "individual"));
        this.saveSeasonType(new SeasonType("par/impar", "dupla"));
        this.saveSeasonType(new SeasonType("3 bolinhas", "individual"));
    }

    this.saveMatch = function (match) {
        match.id = this.matches.length + 1;
        this.matches.push(match);
    }
    this.savePlayer = function (player) {
        player.id = this.players.length + 1;
        this.players.push(player);
    }
    this.savePlayerMatch = function (playerMatch) {
        playerMatch.id = this.playerMatches.length + 1;
        this.playerMatches.push(playerMatch);
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