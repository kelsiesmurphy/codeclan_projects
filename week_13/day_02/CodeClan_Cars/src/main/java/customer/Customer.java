package customer;

import vehicle.Vehicle;

import java.util.ArrayList;

public class Customer {
    private double money;
    private ArrayList<Vehicle> ownedVehicles;

    public Customer(double money, ArrayList<Vehicle> ownedVehicles) {
        this.money = money;
        this.ownedVehicles = ownedVehicles;
    }

    public double getMoney() {
        return money;
    }

    public void setMoney(double money) {
        this.money = money;
    }

    public ArrayList<Vehicle> getOwnedVehicles() {
        return ownedVehicles;
    }

    public void buyVehicle(Vehicle vehicle){
        if(this.money >= vehicle.getPrice()) {
            this.ownedVehicles.add(vehicle);
            this.money -= vehicle.getPrice();
        }
    }
}
