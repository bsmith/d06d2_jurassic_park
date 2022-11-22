const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    let index;
    while (-1 != (index = this.dinosaurs.indexOf(dinosaur))) {
        this.dinosaurs.splice(index, 1);
    }
};

Park.prototype.findMostAttractiveDinosaur = function () {
    let maxAttractiveness = -Infinity;
    let bestDino;
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > maxAttractiveness) {
            maxAttractiveness = dinosaur.guestsAttractedPerDay;
            bestDino = dinosaur;
        }
    }
    return bestDino;
};

Park.prototype.findDinosaursBySpecies = function (species) {
    let foundDinosaurs = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species)
            foundDinosaurs.push(dinosaur);
    }
    return foundDinosaurs;
};

Park.prototype.totalVisitorsPerDay = function () {
    let totalVisitorsPerDay = 0;
    for (let dinosaur of this.dinosaurs) {
        totalVisitorsPerDay += dinosaur.guestsAttractedPerDay;
    }
    return totalVisitorsPerDay;
};

Park.prototype.totalVisitorsPerYear = function () {
    return this.totalVisitorsPerDay() * 365.25;
};

Park.prototype.totalRevenuePerYear = function () {
    return this.totalVisitorsPerYear() * this.ticketPrice;
};

module.exports = Park;