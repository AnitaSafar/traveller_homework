const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const start = [];
  this.journeys.forEach((journey) => {
    start.push(journey.startLocation)
  });
  return start;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const end = [];
  this.journeys.forEach((journey) => {
    end.push(journey.endLocation)
  });
  return end;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
 const vehicle = this.journeys.filter((journey) => {
  return journey.transport === transport;
 });
 return vehicle;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const distance = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return distance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
};


module.exports = Traveller;
