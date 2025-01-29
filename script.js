function sendMessage(event) {
    if (event && event.key !== "Enter") return;
    
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
    
    // Simulate a bot response
    setTimeout(() => {
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("message", "bot-message");
        
        if (userMessage.toLowerCase() === "hello") {
            botMessageElement.textContent = "Hi there! How are you?";
        } else if (userMessage.toLowerCase() === "how are you?") {
            botMessageElement.textContent = "I'm just a bot, but I'm doing great!";
        } else if (userMessage.toLowerCase() === "bye") {
            botMessageElement.textContent = "Goodbye! Have a nice day!";
        } else {
            botMessageElement.textContent = "Sorry, I didn't understand that.";
        }
        
        chatBox.appendChild(botMessageElement);
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
