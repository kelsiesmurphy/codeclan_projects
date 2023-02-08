package staff.management;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class DirectorTest {
    private Director director;

    @Before
    public void before() {
        director = new Director("Lucy", "PW6636123", 50000.00, "Logistics", 500000.00);
    }

    @Test
    public void getDirectorName() {
        assertEquals("Lucy", director.getName());
    }
    @Test
    public void setName() {
        director.setName("penelope");
        assertEquals("penelope", director.getName());
    }
    @Test
    public void setNameCannotBeNull() {
        director.setName(null);
        assertEquals("Lucy", director.getName());
    }
    @Test
    public void getDirectorNINumber() {
        assertEquals("PW6636123", director.getNiNumber());
    }
    @Test
    public void getSalary() {
        assertEquals(50000.00, director.getSalary(), 0.0);
    }
    @Test
    public void getDeptName() {
        assertEquals("Logistics", director.getDeptName());
    }
    @Test
    public void getBudget() {
        assertEquals(500000.00, director.getBudget(), 0.0);
    }

    @Test
    public void raiseSalaryByAmount() {
        director.raiseSalary(5000.00);
        assertEquals(55000.00, director.getSalary(), 0.0);
    }
    @Test
    public void raiseSalaryByAmountNotNegative() {
        director.raiseSalary(-5000.00);
        assertEquals(50000.00, director.getSalary(), 0.0);
    }
    @Test
    public void give1PercentBonus() {
        director.payBonus();
        assertEquals(1000.00, director.getSalary(), 0.0);
    }
}
