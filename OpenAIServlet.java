import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class OpenAIServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get user input from form
        String userInput = request.getParameter("userInput");

        // Simulate the response from OpenAI (replace this with actual OpenAI API calls)
        String aiResponse = generateAIResponse(userInput);

        // Set the response
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        // Output HTML with AI response
        out.println("<html>");
        out.println("<head><title>OpenAI Interface</title></head>");
        out.println("<body>");
        out.println("<h1>Welcome to OpenAI Interface</h1>");
        out.println("<p>Interact with OpenAI through this interface.</p>");
        out.println("<form action='/process' method='POST'>");
        out.println("<textarea name='userInput' required></textarea>");
        out.println("<button type='submit'>Submit</button>");
        out.println("</form>");
        out.println("<div class='response'>");
        out.println("<h2>AI Response:</h2>");
        out.println("<p>" + aiResponse + "</p>");
        out.println("</div>");
        out.println("</body>");
        out.println("</html>");
    }

    // Simulate an AI response (this should be replaced with actual OpenAI API calls)
    private String generateAIResponse(String userInput) {
        return "This is a simulated response to: " + userInput;
    }
}
