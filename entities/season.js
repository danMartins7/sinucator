exports.Season = function Season(seasonTypeID, name, startedAt, endedAt){
    this.id = 0;
    this.seasonTypeID = seasonTypeID;
    this.name = name;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    

    return this;
}