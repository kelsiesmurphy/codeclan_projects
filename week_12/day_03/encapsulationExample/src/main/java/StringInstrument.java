public class StringInstrument {
    private String name;
    private int numOfStrings;
    private String colour;

    public StringInstrument(String name, int numOfStrings, String colour) {
        this.name = name;
        this.numOfStrings = numOfStrings;
        this.colour = colour;
    }

    public int getNumOfStrings() {
        return numOfStrings;
    }

    public void setNumOfStrings(int numOfStrings) {
        this.numOfStrings = numOfStrings;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
