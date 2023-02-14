package vehicle;

import behaviours.IPurchase;
import vehicle.components.Engine;
import vehicle.components.GearBox;
import vehicle.components.Tyres;

public abstract class Vehicle implements IPurchase {
    private Engine engine;
    private GearBox gearBox;
    private Tyres tyres;
    private String colour;
    private double price;

    public Vehicle(Engine engine, GearBox gearBox, Tyres tyres, String colour, double price) {
        this.engine = engine;
        this.gearBox = gearBox;
        this.tyres = tyres;
        this.colour = colour;
        this.price = price;
    }

    public Engine getEngine() {
        return engine;
    }

    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public GearBox getGearBox() {
        return gearBox;
    }

    public void setGearBox(GearBox gearBox) {
        this.gearBox = gearBox;
    }

    public Tyres getTyres() {
        return tyres;
    }

    public void setTyres(Tyres tyres) {
        this.tyres = tyres;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
