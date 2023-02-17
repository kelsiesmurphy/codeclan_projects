public class Duck extends Animal{
    private int beakLength;

    public Duck(String name, int legNum, int beakLength) {
        super(name, legNum);
        this.beakLength = beakLength;
    }

    public int getBeakLength() {
        return beakLength;
    }
}
