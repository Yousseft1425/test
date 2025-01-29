document.getElementById("submitButton").addEventListener("click", async function() {
    const userInput = document.getElementById("userInput").value;
    const aiResponseElement = document.getElementById("aiResponse");

    // Basic validation to check if the user input is empty
    if (!userInput.trim()) {
        aiResponseElement.textContent = "Please enter a question.";
        return;
    }

    aiResponseElement.textContent = "Loading...";  // Placeholder for loading

    // OpenAI API endpoint (this needs to be implemented via a server or serverless function)
    const apiEndpoint = "https://api.openai.com/v1/completions"; // Or use any available API endpoint
    const apiKey = "YOUR_OPENAI_API_KEY";  // You'll need to replace this with your OpenAI API key

    try {
        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "text-davinci-003",  // Example model, replace with the latest model you want
                prompt: userInput,
                max_tokens: 150
            })
        });

        const data = await response.json();
        aiResponseElement.textContent = data.choices[0].text.trim();
    } catch (error) {
        aiResponseElement.textContent = "Error fetching AI response.";
    }
});
