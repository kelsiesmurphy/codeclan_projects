package vehicle;

import vehicle.components.Engine;
import vehicle.components.GearBox;
import vehicle.components.Tyres;

public class Car extends Vehicle {
    private double milesPerGallon;

    public Car(Engine engine, GearBox gearBox, Tyres tyres, String colour, double price, double milesPerGallon) {
        super(engine, gearBox, tyres, colour, price);
        this.milesPerGallon = milesPerGallon;
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
