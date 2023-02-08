import java.util.ArrayList;

public class River {
    private ArrayList<Salmon> fish;

    public River() {
        this.fish = new ArrayList<>();
    }

    public void addFish(Salmon salmon) {
        this.fish.add(salmon);
    }

    public Salmon removeFish() {
        return this.fish.remove(0);
    }

    public int fishCount() {
        return this.fish.size();
    }
}
