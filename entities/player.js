exports.Player = function Player (name, nickname, playerMatches){
    this.id = 0;
    this.name = name;
    this.nickname = nickname;
    this.playerMatches = playerMatches;

    return this;
}