function DB(){
    this.matches = [];
    this.players = [];
    this.playerMatches = [];
    this.seasons = [];
    this.seasonRakings = [];
    this.seasonRakingPlayers = [];
    this.seasonTypes = [];

    return this;
}

exports.DB = new DB ();