package vehicle;

import vehicle.components.Engine;
import vehicle.components.GearBox;
import vehicle.components.Tyres;

public class ElectricCar extends Vehicle{
    private double range;
    private double battery;

    public ElectricCar(Engine engine, GearBox gearBox, Tyres tyres, String colour, double price, double range, double battery) {
        super(engine, gearBox, tyres, colour, price);
        this.range = range;
        this.battery = battery;
    }

    public double getRange() {
        return range;
    }

    public double getBattery() {
        return battery;
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
