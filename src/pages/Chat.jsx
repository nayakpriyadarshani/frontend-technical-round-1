import { useState } from "react";
import { getGeminiResponse } from "../services/gemini";
import "./Chat.css";

function Chat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm your AI Employee Assistant. How can I help you today?",
    },
  ]);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const aiResponse = await getGeminiResponse(message);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiResponse,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, I couldn't process your request. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-page">
      <h1>AI Employee Assistant</h1>

      <div className="chat-box">
        <div className="messages">
          {messages.map((item, index) => (
            <div
              key={index}
              className={`message ${item.sender}`}
            >
              {item.text}
            </div>
          ))}

          {loading && (
            <div className="message ai">
              AI is thinking...
            </div>
          )}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            disabled={loading}
          />

          <button onClick={handleSend} disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;