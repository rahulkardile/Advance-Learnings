package Java.patterns;

public class Pattern {

    // *****
    // *****
    // *****
    // *****
    public static void Pattern1() {
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Pattern1();
    }

}