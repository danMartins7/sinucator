exports.Season = function Season(seasonTypeID, name, startedAt, endedAt, matches){
    this.id = 0;
    this.seasonTypeID = seasonTypeID;
    this.name = name;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.matches = matches;

    return this;
}