"use client";
import { storyCompleted } from "@/app/lib/actions";

export default function UpdateStatusButton({id}: {id: string}) {
    const updateStoryStatus = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await storyCompleted(id);
    }
    return(
        <form onSubmit={updateStoryStatus}>
            <button type="submit" className="btn btn-lg btn-outline btn-info">Declare that the story is finished</button>
        </form>
    )
}