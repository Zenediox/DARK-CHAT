const socket = io();
const messagesDiv = document.getElementById("messages");

function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  if (username && message) {
    socket.emit("chatMessage", { username, message });
    document.getElementById("message").value = "";
  }
}

socket.on("chatMessage", (data) => {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${data.username}:</strong> ${data.message}`;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
