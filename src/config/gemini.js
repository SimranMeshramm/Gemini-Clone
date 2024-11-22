const apiKey = "AIzaSyDMAzVqKXDM_XaeSc39SLOliX_ZXd0GXrI";  // Insert API key here
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(apiKey);  // Use the API key

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runChat(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      // Your chat history can go here
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");  // Replace with your message
  console.log(result.response.text());
  return response.text();
}

export default runChat;
