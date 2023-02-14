package vehicle;

import org.junit.Before;
import org.junit.Test;
import vehicle.components.Engine;
import vehicle.components.GearBox;
import vehicle.components.Tyres;

import static org.junit.Assert.assertEquals;

public class ElectricCarTest {
    private ElectricCar electricCar;

    @Before
    public void setup() {
        Engine engine = new Engine(1.8, 200);
        GearBox gearbox = new GearBox(6);
        Tyres tyres = new Tyres(4);
        electricCar = new ElectricCar(engine, gearbox, tyres, "white", 35000, 20000, 2000);
    }

    @Test
    public void carHasPrice(){
        assertEquals(2000, electricCar.getBattery(), 0.00);
    }
}
