package vehicle.components;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TyresTest {
    private Tyres tyres;

    @Before
    public void setup() {
        tyres = new Tyres(4);
    }

    @Test
    public void getTyresNum() {
        assertEquals(4, tyres.getTyreNum());
    }
}
