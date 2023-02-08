package staff.management;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ManagerTest {
    private Manager manager;

    @Before
    public void before() {
        manager = new Manager("Bob", "PW9229072", 28600.00, "Logistics");
    }

    @Test
    public void getManagerName() {
        assertEquals("Bob", manager.getName());
    }
    @Test
    public void setName() {
        manager.setName("Charles");
        assertEquals("Charles", manager.getName());
    }
    @Test
    public void setNameCannotBeNull() {
        manager.setName(null);
        assertEquals("Bob", manager.getName());
    }
    @Test
    public void getManagerNINumber() {
        assertEquals("PW9229072", manager.getNiNumber());
    }
    @Test
    public void getSalary() {
        assertEquals(28600.00, manager.getSalary(), 0.0);
    }
    @Test
    public void getDeptName() {
        assertEquals("Logistics", manager.getDeptName());
    }

    @Test
    public void raiseSalaryByAmount() {
        manager.raiseSalary(200.00);
        assertEquals(28800.00, manager.getSalary(), 0.0);
    }
    @Test
    public void raiseSalaryByAmountNotNegative() {
        manager.raiseSalary(-5000.00);
        assertEquals(28600.00, manager.getSalary(), 0.0);
    }
    @Test
    public void give1PercentBonus() {
        manager.payBonus();
        assertEquals(286.00, manager.getSalary(), 0.0);
    }
}
