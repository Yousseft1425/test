
public class Dawah {

    public static void main(String[] args) {
        var scanner = new java.util.Scanner(System.in);
        scanner.useLocale(java.util.Locale.ENGLISH);

        System.out.println("Hey, this is a test! What is you're name?");

        String name = scanner.nextLine();

        System.out.println("Hello " + name + "!");

        while (true) {
            System.out.println("How many apples do you have?");
            String answer = scanner.nextLine();
            if (answer.contains("1") && answer.contains("apple")) {
                System.out.println("Ah you have 1 apple!");
                break;
            } else if (answer.contains("2") && answer.contains("apple")) {
                System.out.println("Ah you have 2 apples!");
                break;
            } else {
                System.out.println("Sorry couldn't understand you, can you rephrase it?");
            }
        }

        while (true) {
            System.out.println("Where do you live?");
            String answer = scanner.nextLine();
            if (answer.contains("Danmark")) {
                System.out.println("Wow Danmark thats a very flat land");
                break;
            } else if (answer.contains("Palestine")) {
                System.out.println("Wow Palestine is the holy land, where a genocide is happening!");
                break;
            } else {
                System.out.println("Sorry couldn't understand you, can you rephrase it?");
            }
        }

        scanner.close();
    }
}
