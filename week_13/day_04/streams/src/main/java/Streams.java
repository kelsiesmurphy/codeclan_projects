import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Streams {
    public static int addTwo(int input) {
        return input + 2;
    }

    public static void main(String[] args) {
//        List<String> names = Arrays.asList("Paul", "Brian", "James", "Amanda", "Annie");
//
//        names.stream()
//                .map(String::toUpperCase)
//                .collect(Collectors.toList());
////                .forEach(result -> System.out.println(result));
//
//        Stream<String> fruits = Stream.of("Apple", "Pear", "Banana");
//
//        fruits
//                .map(String::toLowerCase)
//                .forEach(System.out::println);
//
//        Stream<Integer> intStream = Stream.of(1, 2, 3, 4, 5);
////                .map(Streams::addTwo)
////                .forEach(System.out::println);
//        int total = intStream.reduce(0, (sum, nextNum) -> sum + nextNum);
//        System.out.println(total);


//        Stream.of(1, 2, 3, 4, 5, 6, 7, 8)
//                .filter(num -> num % 2 == 0)
//                .forEach(System.out::println);

//        Stream.of(2, 6, 3, 1, 5, 4, 7, 8)
//                .sorted()
//                .forEach(System.out::println);


//        Stream.of("Apple", "Pear", "Banana")
//                .limit(2)
//                .forEach(System.out::println);

//        double avg = Stream.of(2, 6, 3, 1, 5, 4, 7, 8)
//                .mapToInt(n -> n)
//                .average()
//                .getAsDouble();
//        System.out.println(avg);
//
//        Stream.of(2, 6, 3, 1, 5, 4, 7, 8)
//                .mapToInt(n -> n)
//                .max()
//                .getAsInt();


        double avg = IntStream.of(2,6,6,8,9,9,5)
                .average()
                .getAsDouble();
        System.out.println(avg);
    }
}