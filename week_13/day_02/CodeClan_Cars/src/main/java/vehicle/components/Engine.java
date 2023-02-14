package vehicle.components;

import vehicle.Vehicle;

public class Engine {
    private double engineSize;
    private double horsepower;

    public Engine(double engineSize, double horsepower) {
        this.engineSize = engineSize;
        this.horsepower = horsepower;
    }

    public double getEngineSize() {
        return engineSize;
    }

    public double getHorsepower() {
        return horsepower;
    }
}
