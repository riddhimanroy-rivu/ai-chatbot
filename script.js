
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const typing = document.getElementById("typing");


// Send message
function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // Display user message
    addMessage(message, "user");

    userInput.value = "";

    // Show typing indicator
    typing.style.display = "block";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Generate bot response after a short delay
    setTimeout(() => {

        typing.style.display = "none";

        const response = getBotResponse(message);

        addMessage(response, "bot");

    }, 800);
}


// Add message to chat
function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add(
        "message",
        sender === "user" ? "user-message" : "bot-message"
    );

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = sender === "user" ? "👤" : "🤖";

    const content = document.createElement("div");
    content.classList.add("message-content");

    const paragraph = document.createElement("p");
    paragraph.textContent = message;

    content.appendChild(paragraph);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


// Generate chatbot response
function getBotResponse(message) {

    const text = message.toLowerCase();

    // Greetings
    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {
        return "Hello! 👋 Nice to meet you. How can I help you today?";
    }

    // How are you
    if (
        text.includes("how are you") ||
        text.includes("how r u")
    ) {
        return "I'm doing great! 🤖 Thanks for asking.";
    }

    // Name
    if (
        text.includes("your name") ||
        text.includes("who are you")
    ) {
        return "I'm your AI Assistant 🤖. You can ask me simple questions and I'll try to help!";
    }

    // JavaScript
    if (
        text.includes("javascript") ||
        text.includes("js")
    ) {
        return "JavaScript is a programming language commonly used to make websites interactive and dynamic.";
    }

    // HTML
    if (text.includes("html")) {
        return "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.";
    }

    // CSS
    if (text.includes("css")) {
        return "CSS stands for Cascading Style Sheets. It controls the appearance and layout of websites.";
    }

    // Programming
    if (
        text.includes("programming") ||
        text.includes("coding")
    ) {
        return "Coding is the process of writing instructions that computers can understand and execute. 💻";
    }

    // GitHub
    if (text.includes("github")) {
        return "GitHub is a platform where developers can store, manage and collaborate on software projects.";
    }

    // Joke
    if (
        text.includes("joke") ||
        text.includes("funny")
    ) {
        return "Why do programmers prefer dark mode? Because light attracts bugs! 😂";
    }

    // Thanks
    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {
        return "You're welcome! 😄";
    }

    // Bye
    if (
        text.includes("bye") ||
        text.includes("goodbye")
    ) {
        return "Goodbye! 👋 See you next time!";
    }

    // Help
    if (
        text.includes("help") ||
        text.includes("what can you do")
    ) {
        return "I can answer simple questions about HTML, CSS, JavaScript, GitHub, programming, and more! 🤖";
    }

    // Default response
    const defaultResponses = [
        "That's interesting! 🤔 Can you tell me a little more?",
        "I'm still learning! Try asking me about programming, JavaScript, HTML, CSS or GitHub.",
        "Hmm... I don't know that one yet. 😅 Try asking something else!",
        "Interesting question! I'm a simple AI chatbot, so my knowledge is limited."
    ];

    return defaultResponses[
        Math.floor(Math.random() * defaultResponses.length)
    ];
}


// Quick message buttons
function quickMessage(message) {

    userInput.value = message;
    sendMessage();

}


// Send button
sendBtn.addEventListener("click", sendMessage);


// Press Enter to send
userInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// Clear chat
clearBtn.addEventListener("click", function() {

    chatBox.innerHTML = "";

    addMessage(
        "Chat cleared! 👋 How can I help you?",
        "bot"
    );

});

