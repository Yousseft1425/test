import java.util.Scanner;
import java.util.Locale;

public class tt {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.ENGLISH);

        // General welcome message
        System.out.println("Hey, this is a test! What is your name?");
        String name = scanner.nextLine();
        System.out.println("Hello " + name + "!");

        // Asking about apples
        askQuestion(scanner, "How many apples do you have?", 
            new String[] { "1 apple", "2 apples" }, 
            new String[] { "Ah you have 1 apple!", "Ah you have 2 apples!" });

        // Asking about location
        askQuestion(scanner, "Where do you live?", 
            new String[] { "Danmark", "Palestine" }, 
            new String[] { "Wow Danmark, that's a very flat land.", "Wow Palestine is the holy land, where a genocide is happening!" });

        scanner.close();
    }

    private static void askQuestion(Scanner scanner, String question, String[] validAnswers, String[] responses) {
        while (true) {
            System.out.println(question);
            String answer = scanner.nextLine().toLowerCase(); // Make the input case-insensitive

            for (int i = 0; i < validAnswers.length; i++) {
                if (answer.contains(validAnswers[i].toLowerCase())) {
                    System.out.println(responses[i]);
                    return; // Exit the method after a valid answer
                }
            }

            System.out.println("Sorry, I couldn't understand you. Can you rephrase it?");
        }
    }
}
