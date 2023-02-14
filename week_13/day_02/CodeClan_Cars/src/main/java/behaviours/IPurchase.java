package behaviours;

import vehicle.Vehicle;

public interface IPurchase {
    double defaultPrice();
    double priceFor(Vehicle vehicle);
}
