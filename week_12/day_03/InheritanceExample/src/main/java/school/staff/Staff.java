package school.staff;

import school.Person;

public class Staff extends Person {
    private double salary;

    public Staff(String name, int age, String favouriteColour, double salary) {
        super(name, age, favouriteColour);
        this.salary = salary;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}
