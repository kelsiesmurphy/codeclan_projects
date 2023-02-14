package vehicle;

import org.junit.Before;
import org.junit.Test;
import vehicle.components.Engine;
import vehicle.components.GearBox;
import vehicle.components.Tyres;

import static org.junit.Assert.assertEquals;

public class CarTest {
    private Car car;

    @Before
    public void setup() {
        Engine engine = new Engine(1.8, 200);
        GearBox gearbox = new GearBox(6);
        Tyres tyres = new Tyres(4);
        car = new Car(engine, gearbox, tyres, "green", 19000, 200);
    }

    @Test
    public void carHasPrice(){
        assertEquals(19000, car.getPrice(), 0.00);
    }
}
