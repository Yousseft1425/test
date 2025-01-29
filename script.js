// This function is used to send the message when the user presses Enter or clicks the Send button.
function sendMessage(event) {
    // Only proceed if the key pressed is Enter or if the Send button was clicked
    if (event && event.key !== "Enter" && event.type !== 'click') return;
    
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim();
    
    if (userMessage === "") return;
    
    // Display the user's message
    const chatBox = document.getElementById("chat-box");
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message", "user-message");
    userMessageElement.textContent = userMessage;
    chatBox.appendChild(userMessageElement);
    
    // Clear the input field
    userInput.value = "";
    
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Simulate a bot response after a short delay
    setTimeout(() => {
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("message", "bot-message");

        // Normalize the message to lowercase
        const lowerCaseMessage = userMessage.toLowerCase();

        // Keywords and responses
        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            botMessageElement.textContent = "Hi there! How can I help you today?";
        } else if (lowerCaseMessage.includes("how") && lowerCaseMessage.includes("are you")) {
            botMessageElement.textContent = "I'm just a bot, but I'm doing great!";
        } else if (lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye")) {
            botMessageElement.textContent = "Goodbye! Have a great day!";
        } else if (lowerCaseMessage.includes("thanks") || lowerCaseMessage.includes("thank you")) {
            botMessageElement.textContent = "You're welcome!";
        } else if (lowerCaseMessage.includes("name")) {
            botMessageElement.textContent = "I’m a friendly chatbot here to help you!";
        } else if (lowerCaseMessage.includes("what") && lowerCaseMessage.includes("time")) {
            botMessageElement.textContent = `The time is: ${new Date().toLocaleTimeString()}`;
        } else {
            botMessageElement.textContent = "Sorry, I didn't quite catch that. Could you rephrase?";
        }
        
        chatBox.appendChild(botMessageElement);
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
