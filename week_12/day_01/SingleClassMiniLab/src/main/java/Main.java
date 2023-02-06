public class Main {
    public static void main(String[] args) {
        Planet mars = new Planet("Mars", 908973);
        System.out.println(mars.getName() + " is " + mars.getSize());
        mars.explode();
        System.out.println(mars.explode());
    }
}
