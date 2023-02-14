package vehicle.components;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EngineTest {
    private Engine engine;
    @Before
    public void setup(){
        engine = new Engine(1.8, 200);
    }

    @Test
    public void getEngineSize() {
        assertEquals(1.8, engine.getEngineSize(), 1.8);
    }
}