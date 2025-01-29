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
        
        if (userMessage.toLowerCase().includes("hello")) {
            botMessageElement.textContent = "Hi there! How are you?";
        } else if (userMessage.toLowerCase().includes("how are you?")) {
            botMessageElement.textContent = "I'm just a bot, but I'm doing great!";
        } else if (userMessage.toLowerCase().includes("bye")) {
            botMessageElement.textContent = "Goodbye! Have a nice day!";
        } else {
            botMessageElement.textContent = "Sorry, I didn't understand that.";
        }
        
        chatBox.appendChild(botMessageElement);
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
