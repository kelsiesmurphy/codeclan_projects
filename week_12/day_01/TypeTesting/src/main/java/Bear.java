public class Bear {
    private String name;
    private int age;
    private double weight;

    private char sex;

    public Bear(String name, int age, double weight, char sex) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.sex = sex;
    }

    public String getName() {
        return this.name;
    }
    public int getAge() {
        return this.age;
    }
    public double getWeight() {
        return this.weight;
    }
    public char getSex() {
        return this.sex;
    }


    public void setName(String newName) {
        this.name = newName;
    }
    public void setAge(int newAge) {
        this.age = newAge;
    }
    public void setWeight(double newWeight) {
        this.weight = newWeight;
    }

    public boolean readyToHibernate() {
        return this.weight >= 80.00;
    }

}

