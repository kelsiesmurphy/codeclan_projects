import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args){
        HashMap<String, Integer> ages = new HashMap<>();

        ages.put("Ash", 100);
        ages.put("Ben", 21);
        ages.put("Steve", 80);
        ages.put("Henry the Caterpillar", 10);

        ages.containsValue(21);

        String output = String.format("Cat's age is %s", ages.containsValue(21));

        System.out.println(output);
    }
}
