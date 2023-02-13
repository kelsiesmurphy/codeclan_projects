public class Car implements IMove, IStart, IStop{
    private String make;
    private String model;
    private int odometerReading;

    public Car(String make, String model){
        this.make = make;
        this.model = model;
        this.odometerReading = 0;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getOdometerReading() {
        return odometerReading;
    }

    public void move(int distance) {
        this.odometerReading += distance;
    };

    public String start(String startingSound) {
        return startingSound;
    }

    public String stop(){
        return "Slam on the brakes";
    }
}
