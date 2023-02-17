public abstract class Animal {
    private String name;
    private int legNum;

    public Animal(String name, int legNum) {
        this.name = name;
        this.legNum = legNum;
    }

    public String getName() {
        return name;
    }

    public int getLegNum() {
        return legNum;
    }

    public void getNoise(String noise){
        System.out.println(noise);
    }

}
