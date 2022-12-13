const Taxi = function(manufacturer, model, driver){
    this.manufacturer = manufacturer;
    this.model = model;
    this.driver = driver;
    this.passengers = [];
};

Taxi.prototype.numberOfPassengers = function(){
    return this.passengers.length;
}

Taxi.prototype.addPassenger = function(person){
    this.passengers.push(person);
}

Taxi.prototype.removePassengerByName = function(name){
    const index = this.passengers.indexOf(name);
    this.passengers.splice(index, 1)
}

Taxi.prototype.removeAllPassengers = function(person){
    this.passengers = [];
}

module.exports = Taxi;