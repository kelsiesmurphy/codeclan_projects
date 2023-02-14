package customer;

import org.junit.Before;
import org.junit.Test;
import vehicle.Car;
import vehicle.ElectricCar;
import vehicle.ElectricCarTest;
import vehicle.Vehicle;
import vehicle.components.Engine;
import vehicle.components.GearBox;
import vehicle.components.Tyres;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public class CustomerTest {
    private Customer customer;
    private ElectricCar electricCar;

    @Before
    public void setup() {
        Engine engine = new Engine(1.8, 200);
        GearBox gearbox = new GearBox(6);
        Tyres tyres = new Tyres(4);
        Car car = new Car(engine, gearbox, tyres, "green", 19000, 200);
        electricCar = new ElectricCar(engine, gearbox, tyres, "white", 35000, 20000, 2000);

        ArrayList<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(car);
        vehicles.add(electricCar);
        customer = new Customer(40000, vehicles);
    }

    @Test
    public void getMoney() {
        assertEquals(30000, customer.getMoney(), 0.00);
    }

    @Test
    public void canBuyVehicle() {
        customer.buyVehicle(electricCar);
        assertEquals(3, customer.getOwnedVehicles().size());
    }

    @Test
    public void customersMoneyDecreasesByCarValue() {
        customer.buyVehicle(electricCar);
        assertEquals(5000, customer.getMoney(), 0.00);
    }

    @Test
    public void customerCannotAffordCar() {
        customer.setMoney(30);
        customer.buyVehicle(electricCar);
        assertEquals(2, customer.getOwnedVehicles().size());
    }

}
