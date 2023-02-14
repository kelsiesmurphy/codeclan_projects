package dealership;

import customer.Customer;
import org.junit.Before;
import org.junit.Test;
import vehicle.Car;
import vehicle.ElectricCar;
import vehicle.Vehicle;
import vehicle.components.Engine;
import vehicle.components.GearBox;
import vehicle.components.Tyres;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public class DealershipTest {
    private Dealership dealership;
    private ElectricCar electricCar;

    @Before
    public void setup(){
        Engine engine = new Engine(1.8, 200);
        GearBox gearbox = new GearBox(6);
        Tyres tyres = new Tyres(4);
        Car car = new Car(engine, gearbox, tyres, "green", 19000, 200);
        electricCar = new ElectricCar(engine, gearbox, tyres, "white", 35000, 20000, 2000);

        ArrayList<Vehicle> stockOfCars = new ArrayList<>();
        stockOfCars.add(car);
        stockOfCars.add(electricCar);
        dealership = new Dealership(stockOfCars, 50000);
    }

    @Test
    public void getCarStockCount(){
        assertEquals(2, dealership.getStockOfCars().size());
    }

    @Test
    public void canBuyVehicle() {
        dealership.buyVehicle(electricCar);
        assertEquals(3, dealership.getStockOfCars().size());
    }

    @Test
    public void dealershipsMoneyDecreasesByCarValue() {
        dealership.buyVehicle(electricCar);
        assertEquals(15000, dealership.getTill(), 0.00);
    }

    @Test
    public void dealershipCannotAffordCar() {
        dealership.setTill(30);
        dealership.buyVehicle(electricCar);
        assertEquals(2, dealership.getStockOfCars().size());
    }


    @Test
    public void dealershipSellsVehicleToCustomer() {
        Engine engine = new Engine(1.8, 200);
        GearBox gearbox = new GearBox(6);
        Tyres tyres = new Tyres(4);
        Car car = new Car(engine, gearbox, tyres, "silver", 19000, 200);
        electricCar = new ElectricCar(engine, gearbox, tyres, "black", 35000, 20000, 2000);

        ArrayList<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(car);
        vehicles.add(electricCar);
        Customer customer = new Customer(400000, vehicles);

        System.out.println(dealership.getStockOfCars().size());
        dealership.sellVehicleToCustomer(customer, electricCar);
        System.out.println(dealership.getStockOfCars().size());
        assertEquals(1, dealership.getStockOfCars().size());
        assertEquals(85000, dealership.getTill(), 0.00);
    }
}
