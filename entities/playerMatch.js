exports.PlayerMatch = function PlayerMatch(playerID, matchID, isWinner){
    this.playerID = playerID;
    this.matchID = matchID;
    this.isWinner = isWinner;

    return this;
}