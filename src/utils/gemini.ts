import { ChatHistory } from "@/app/types/definitions";

const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv/config");
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

export async function run(history:ChatHistory,msg:string):Promise<string> {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat(history)
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    return response.text();
    
}
