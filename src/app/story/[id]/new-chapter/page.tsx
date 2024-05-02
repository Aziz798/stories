import CreateChapter from "@/app/_components/chapter/createChapter";
import ChatRoom from "@/app/_components/gemini_chat/geminiChatRoom";
import StoryIntroduction from "@/app/_components/story/storyIntoduction";
import { Suspense } from "react";

export default function NewChapter({ params }: { params: { id: string } }) {


    return (
        <div>
            <CreateChapter storyId={params.id}/>
            <div>
            <ChatRoom storyId={params.id}/>
            </div>
        </div>
    );
}