document.addEventListener("DOMContentLoaded", function() {
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  const chatMessages = document.getElementById("chat-messages");

  sendButton.addEventListener("click", function() {
    const message = messageInput.value.trim();
    if (message !== "") {
      addMessage("You", message);
      messageInput.value = "";
    }
  });

  function addMessage(user, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    const userDiv = document.createElement("div");
    userDiv.classList.add("message-user");
    userDiv.textContent = user;

    const textDiv = document.createElement("div");
    textDiv.classList.add("message-text");
    textDiv.textContent = text;

    messageDiv.appendChild(userDiv);
    messageDiv.appendChild(textDiv);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
