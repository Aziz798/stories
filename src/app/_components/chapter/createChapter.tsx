"use client";
import {  createChapter } from "@/app/lib/actions";
import { ChapterState } from "@/app/types/definitions";
import { useUser } from "@clerk/nextjs";
import { useFormState } from "react-dom";

export default function CreateChapter({ storyId }: { storyId: string }) {
    const initialState:ChapterState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createChapter, initialState);
    const user = useUser()
    console.log(state.message);
    
    return (
        <div className="text-center flex flex-col content-around h-fit gap-7">
            <div className="text-center text-2xl">Write your next chapter: </div>
            <form action={dispatch}>
                <input type="hidden" name="storyId" value={storyId} />
                <input type="hidden" name="userId" value={user.user?.id} />
                <div className="flex flex-col items-center gap-8">
                    <input type="text" placeholder="Chapter Title" className="input input-accent input-bordered input-lg w-full max-w-xl" name="title" />
                    <input type="text" placeholder="Chapter Title" className="input input-accent input-bordered input-lg w-full max-w-xl" name="photoUrl" />
                    <textarea placeholder="Chapter content" className="textarea textarea-accent textarea-bordered textarea-lg w-full max-w-full h-dvh max-h-full" name="content" ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
"storyId, title, content, photoUrl,userId"