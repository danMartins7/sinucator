function Season(seasonTypeID, name, startedAt, endedAt, matches){
    this.seasonTypeID = seasonTypeID;
    this.name = name;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.matches = matches;

    return this;
}