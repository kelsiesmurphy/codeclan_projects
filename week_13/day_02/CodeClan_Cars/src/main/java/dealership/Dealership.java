package dealership;

import customer.Customer;
import vehicle.ElectricCar;
import vehicle.Vehicle;

import java.util.ArrayList;

public class Dealership {
    private ArrayList<Vehicle> stockOfCars;
    private double till;

    public Dealership(ArrayList<Vehicle> stockOfCars, double till) {
        this.stockOfCars = stockOfCars;
        this.till = till;
    }

    public ArrayList<Vehicle> getStockOfCars() {
        return stockOfCars;
    }

    public void setTill(double till) {
        this.till = till;
    }

    public double getTill() {
        return till;
    }

    public void buyVehicle(Vehicle vehicle){
        if(this.till >= vehicle.getPrice()) {
            this.getStockOfCars().add(vehicle);
            this.till -= vehicle.getPrice();
        }
    }

    public void sellVehicleToCustomer(Customer customer, Vehicle vehicle) {
        this.stockOfCars.remove(vehicle);
        customer.buyVehicle(vehicle);
        this.till += vehicle.getPrice();
    }
}
