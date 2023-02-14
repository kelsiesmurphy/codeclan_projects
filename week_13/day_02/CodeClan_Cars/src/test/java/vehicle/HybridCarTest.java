package vehicle;

import org.junit.Before;
import org.junit.Test;
import vehicle.components.Engine;
import vehicle.components.GearBox;
import vehicle.components.Tyres;

import static org.junit.Assert.assertEquals;

public class HybridCarTest {
    private HybridCar hybridCar;

    @Before
    public void setup() {
        Engine engine = new Engine(1.8, 200);
        GearBox gearbox = new GearBox(6);
        Tyres tyres = new Tyres(4);
        hybridCar = new HybridCar(engine, gearbox, tyres, "blue", 35000, 20000, 2000, 200);
    }

    @Test
    public void carHasPrice(){
        assertEquals("blue", hybridCar.getColour());
    }
}
