public class Runner {
    private static Elephant elephant;
    private Duck duck;

    public static void main(String[] args) {
        elephant = new Elephant("Dumbo", 4, 70);

        elephant.getNoise("Pawoo!");
    }
}
