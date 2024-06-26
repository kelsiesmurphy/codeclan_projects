public class Runner {
    private Singleton singleton;

    public static void main(String[] args) {
        Singleton singleton1 = Singleton.getInstance();
        System.out.println(singleton1.getData());

        Singleton singleton2 = Singleton.getInstance();
        System.out.println(singleton2.getData().toUpperCase());
        singleton2.setData("The data has been changed");

        Singleton singleton3 = Singleton.getInstance();
        System.out.println(singleton3.getData());
    }
}
