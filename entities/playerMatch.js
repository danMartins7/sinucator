exports.PlayerMatch = function PlayerMatch(playerID, matchID, isWinner){
    this.id = 0;
    this.playerID = playerID;
    this.matchID = matchID;
    this.isWinner = isWinner;

    return this;
}