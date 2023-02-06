import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class PlanetTest {
    private Planet mars;

    @Before
    public void setup() {
        mars = new Planet("Mars", 908973);
    }

    @Test
    public void planetHasName() {
        assertEquals("Mars", mars.getName());
    }

    @Test
    public void planetHasSize() {
        assertEquals(908973, mars.getSize());
    }

    @Test
    public void planetCanExplode() {
        assertEquals("Boom! Mars has exploded.", mars.explode());
    }
}


