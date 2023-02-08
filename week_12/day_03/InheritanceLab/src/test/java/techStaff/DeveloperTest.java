package techStaff;

import org.junit.Before;
import org.junit.Test;
import staff.techStaff.Developer;

import static org.junit.Assert.assertEquals;

public class DeveloperTest {
    private Developer developer;

    @Before
    public void before() {
        developer = new Developer("Kelsie", "PW1235353", 32400.00);
    }

    @Test
    public void getDeveloperName() {
        assertEquals("Kelsie", developer.getName());
    }
    @Test
    public void setName() {
        developer.setName("Chris");
        assertEquals("Chris", developer.getName());
    }
    @Test
    public void setNameCannotBeNull() {
        developer.setName(null);
        assertEquals("Kelsie", developer.getName());
    }
    @Test
    public void getDeveloperNINumber() {
        assertEquals("PW1235353", developer.getNiNumber());
    }
    @Test
    public void getSalary() {
        assertEquals(32400.00, developer.getSalary(), 0.0);
    }

    @Test
    public void raiseSalaryByAmount() {
        developer.raiseSalary(300.00);
        assertEquals(32700.00, developer.getSalary(), 0.0);
    }
    @Test
    public void raiseSalaryByAmountNotNegative() {
        developer.raiseSalary(-5000.00);
        assertEquals(32400.00, developer.getSalary(), 0.0);
    }
    @Test
    public void give1PercentBonus() {
        developer.payBonus();
        assertEquals(324.00, developer.getSalary(), 0.0);
    }
}
