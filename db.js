function DB(){
    this.matches = [];
    this.players = [];
    this.playerMatches = [];
    this.seasons = [];
    this.seasonRakings = [];
    this.seasonRakingPlayers = [];
    this.seasonTypes = [];

    this.saveSeasonType = function(seasonType){
        seasonType.id = this.seasonTypes.length + 1;
        this.seasonTypes.push(seasonType);
    }

    return this;
}

exports.DB = new DB ();