import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class BearTest {
    private Bear bear;

    @Before
    public void setup() {
        bear = new Bear("Baloo", 25, 95.62, 'f');
    }

//    Name
    @Test
    public void bearHasAName() {
        assertEquals("Baloo", bear.getName());
    }
    @Test
    public void bearSetNewName() {
        bear.setName("Jeff");
        assertEquals("Jeff", bear.getName());
    }

//    Age
    @Test
    public void bearHasAnAge() {
        assertEquals(25, bear.getAge());
    }
    @Test
    public void bearSetNewAge() {
        bear.setAge(32);
        assertEquals(32, bear.getAge());
    }

//    Weight
    @Test
    public void bearHasAWeight() {
        assertEquals(95.62, bear.getWeight(), 0.0);
    }
    @Test
    public void bearSetNewWeight() {
        bear.setWeight(70.2);
        assertEquals(70.2, bear.getWeight(), 0.0);
    }

//    Hibernate
    @Test
    public void bearIsReadyToHibernateAbove80() {
        assertTrue(bear.readyToHibernate());
    }
    @Test
    public void bearIsNotReadyToHibernateAbove80() {
        Bear lightBear = new Bear("Baloo", 25, 62.42, 'f');
        assertFalse(lightBear.readyToHibernate());
    }

//    Has a Sex
    @Test
    public void bearHasASex() {
        assertEquals('f', bear.getSex());
    }
}
