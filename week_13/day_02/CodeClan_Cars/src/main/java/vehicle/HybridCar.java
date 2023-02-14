package vehicle;

import vehicle.components.Engine;
import vehicle.components.GearBox;
import vehicle.components.Tyres;

public class HybridCar extends Vehicle {
    private double range;
    private double battery;
    private double milesPerGallon;

    public HybridCar(Engine engine, GearBox gearBox, Tyres tyres, String colour, double price, double range, double battery, double milesPerGallon) {
        super(engine, gearBox, tyres, colour, price);
        this.range = range;
        this.battery = battery;
        this.milesPerGallon = milesPerGallon;
    }

    public double getRange() {
        return range;
    }

    public double getBattery() {
        return battery;
    }

    public double getMilesPerGallon() {
        return milesPerGallon;
    }

    @Override
    public double defaultPrice() {
        return 0;
    }

    @Override
    public double priceFor(Vehicle vehicle) {
        return 0;
    }
}
