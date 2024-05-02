"use client";
import { ChatHistory } from "@/app/types/definitions";
import { run } from "@/utils/gemini";
import { ReactEventHandler, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
export default function ChatForm({ setHistory, history,setLoading }: { setHistory: Function, history: ChatHistory,setLoading:Function }) {
    const [question, setQuestion] = useState({
        role: "user",
        parts: [{
            text: ""
        }]
    })
    const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        // Update chat history with user question
        setHistory((prev: any) => ({
            ...prev,
            history: [...prev.history, { role: "user", parts: [{ text: question.parts[0].text }] }],
        }));

        try {
            // Call run function to process question with Gemini
            const answer = await run(history, question.parts[0].text);
            setLoading(false);
            setHistory((prev:any) => ({
                ...prev,
                history: [...prev.history, { role: "model", parts: [{ text: answer }] }],
            }));
        } catch (error) {
            console.error(error);
            // Handle error (e.g., display user-friendly message)
        }
    };
    return (
        <form onSubmit={formHandler}>
            <div className="flex gap-1">
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-xs w-full max-w-xs" onChange={(e) => setQuestion({ role: "user", parts: [{ text: e.target.value }] })}></textarea>
                <button className="btn btn-square btn-outline"><IoSendSharp /></button>
            </div>
        </form>
    )
}