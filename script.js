// Function to add a new message to the chat log
function addMessageToChat(message, sender) {
    const chatLog = document.getElementById("chat-log");
    const newMessage = document.createElement("div");
    newMessage.classList.add(sender);
    newMessage.innerText = message;
    chatLog.appendChild(newMessage);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the latest message
}

// Simulate a response from ChatGPT
function getChatGPTResponse(userMessage) {
    // Simple mock response for demonstration purposes
    return "ChatGPT: You said, '" + userMessage + "'.";
}

// Handle message sending when the user clicks "Send"
document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput) {
        addMessageToChat(userInput, "user-message");
        const botResponse = getChatGPTResponse(userInput);
        setTimeout(function() {
            addMessageToChat(botResponse, "chatgpt-message");
        }, 1000); // Simulate a delay for ChatGPT response
        document.getElementById("user-input").value = ""; // Clear the input field
    }
});

// Allow the user to press Enter to send a message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("send-btn").click();
    }
});
