public class Elephant extends Animal{
    private int trunkLengthCm;

    public Elephant(String name, int legNum, int trunkLengthCm) {
        super(name, legNum);
        this.trunkLengthCm = trunkLengthCm;
    }

    public int getTrunkLength() {
        return trunkLengthCm;
    }
}
