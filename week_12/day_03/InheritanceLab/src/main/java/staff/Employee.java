package staff;

public abstract class Employee {
    private String name;
    private String niNumber;
    protected double salary;

    public Employee(String name, String niNumber, Double salary) {
        this.name = name;
        this.niNumber = niNumber;
        this.salary = salary;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        if (name != null) {
            this.name = name;
        }
    }

    public String getNiNumber() {
        return this.niNumber;
    }

    public double getSalary() {
        return this.salary;
    }

    public void raiseSalary(double raiseAmount) {
        if(raiseAmount > 0) {
            this.salary += raiseAmount;
        }
    }

    public void payBonus() {
        this.salary *= 0.01;
    }
}
