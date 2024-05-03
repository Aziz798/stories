"use client"

import { useUser } from "@clerk/nextjs";
import ChatForm from "./chatForm";
import { useEffect, useState } from "react";
import { ChatHistory } from "@/app/types/definitions";
import {  getStoryDescription } from "@/app/lib/actions";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";

export default function ChatRoom({ storyId }: { storyId: string }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [history, setHistory] = useState<ChatHistory>({history: [],})
    const user = useUser();

    useEffect(() => {
        const getStory = async (id: string) => {
            const response = await getStoryDescription(id);
            setHistory({
                history: [
                    {
                        role: "user",
                        parts: [{ text: `this is the story description the entire conversation will be about creating one chapter for it. description: ${response && response[0].description }` }]
                    },
                    {
                        role: "model",
                        parts: [{ text: "ok ask me the questions" }]
                    }
                ]
            })
            
        }
        getStory(storyId)
    },[storyId]);

    return (
        <>
            <div className="dropdown dropdown-top dropdown-end w-full">
                <div tabIndex={0} role="button" className="btn btn-outline btn-primary btn-wide">Get geminiAi help in writing your chapter</div>
                <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-primary-content rounded-box w-full">
                    {
                        history.history.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.role === "user" && index!=0 && (<div className="chat chat-start ">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt={user?.user?.username ? user?.user.username : "user"} src={user?.user?.imageUrl ? user?.user.imageUrl : "/user.png"} />
                                            </div>
                                        </div>
                                        <div className="chat-header">
                                            {user?.user?.username ? user?.user?.username : "user"}
                                        </div>
                                        <div className="chat-bubble">{item.parts[0].text}</div>
                                        <div className="chat-footer opacity-50">
                                            Delivered
                                        </div>
                                    </div>)}
                                    {item.role === "model" && (

                                        <div className="chat chat-end">
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img alt="Google Gemini AI" src="/Google-Gemini-AI-Icon.png" />
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                Gemini
                                            </div>
                                            <div className="chat-bubble">{item.parts[0].text}</div>
                                            <button  onClick={()=> {
                                                navigator.clipboard.writeText(item.parts[0].text);
                                                toast.info("Copied to clipboard");
                                            }} className="chat-footer btn btn-sm btn-outline"><IoCopy/> </button>
                                        </div>
                                    )}
                                </div>
                            )
                        })
                    }
                    {loading && (
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Google Gemini AI" src="/Google-Gemini-AI-Icon.png" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Gemini
                            </div>
                            <div className="chat-bubble">
                                <span className="loading loading-dots loading-md"></span>
                            </div>
                        </div>
                    )}
                    <ChatForm setHistory={setHistory} history={history} setLoading={setLoading} />
                </div>

            </div>

        </>
    )
}