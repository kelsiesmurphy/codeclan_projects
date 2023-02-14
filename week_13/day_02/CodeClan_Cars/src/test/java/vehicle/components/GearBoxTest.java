package vehicle.components;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class GearBoxTest {
    private GearBox gearBox;
    @Before
    public void setup() {
        gearBox = new GearBox(6);
    }

    @Test
    public void getGearNum() {
    assertEquals(6, gearBox.getGearsNum());
    }
}
