package techStaff;

import org.junit.Before;
import org.junit.Test;
import staff.techStaff.DatabaseAdmin;

import static org.junit.Assert.assertEquals;

public class DatabaseAdminTest {
    private DatabaseAdmin databaseAdmin;

    @Before
    public void before() {
        databaseAdmin = new DatabaseAdmin("Jerry", "PW14444444", 31000.00);
    }

    @Test
    public void getDatabaseAdminName() {
        assertEquals("Jerry", databaseAdmin.getName());
    }
    @Test
    public void setName() {
        databaseAdmin.setName("Rebecca");
        assertEquals("Rebecca", databaseAdmin.getName());
    }
    @Test
    public void setNameCannotBeNull() {
        databaseAdmin.setName(null);
        assertEquals("Jerry", databaseAdmin.getName());
    }
    @Test
    public void getDatabaseAdminNINumber() {
        assertEquals("PW14444444", databaseAdmin.getNiNumber());
    }
    @Test
    public void getSalary() {
        assertEquals(31000.00, databaseAdmin.getSalary(), 0.0);
    }

    @Test
    public void raiseSalaryByAmount() {
        databaseAdmin.raiseSalary(100.00);
        assertEquals(31100.00, databaseAdmin.getSalary(), 0.0);
    }
    @Test
    public void raiseSalaryByAmountNotNegative() {
        databaseAdmin.raiseSalary(-5000.00);
        assertEquals(31000.00, databaseAdmin.getSalary(), 0.0);
    }
    @Test
    public void give1PercentBonus() {
        databaseAdmin.payBonus();
        assertEquals(310.00, databaseAdmin.getSalary(), 0.0);
    }
}
