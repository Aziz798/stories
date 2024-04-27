"use client";
import { createChapter } from "@/app/lib/actions";
import { ChapterState } from "@/app/types/definitions";
import { UploadButton } from "@/utils/uploadthing";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useFormState } from "react-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CreateChapter({ storyId }: { storyId: string }) {
    const [photoUrl, setPhotoUrl] = useState("")
    const initialState: ChapterState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createChapter, initialState);
    const user = useUser()
    console.log(state.message);

    return (
        <div className="text-center flex flex-col content-around h-fit gap-7">
            <ToastContainer />
            <div className="text-center text-2xl">Write your next chapter: </div>
            <div className="text-center">
                {/* @ts-ignore */}
                <button id="photo" className="btn btn-outline btn-warning btn-wide" onClick={() => document.getElementById('my_modal_2').showModal()}>Add photo to your new chapter</button>
            </div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Click the butto to choose a photo</h3>
                    <UploadButton endpoint="imageUploader" onClientUploadComplete={(res) => {
                        setPhotoUrl(res[0].url)
                        toast.success("photo added")
                        document.getElementById("photo")?.classList.add("btn-disabled")
                        {/*@ts-ignore*/ }
                        document.getElementById("photo").innerText = "photo added"
                    }} />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <form action={dispatch}>
                <input type="hidden" name="storyId" value={storyId} />
                <input type="hidden" name="userId" value={user.user?.id} />
                <div className="flex flex-col items-center gap-8">
                {
                        state.errors?.title && state.errors?.title.map((error, ind) => <li className="text-error font-semibold" key={ind}>{error}</li>)
                    }
                    <input type="text" placeholder="Chapter Title" className="input input-accent input-bordered input-lg w-full max-w-xl" name="title" />
                    <input type="hidden" className="input input-accent input-bordered input-lg w-full max-w-xl" name="photoUrl" value={photoUrl} />
                    {
                        state.errors?.content && state.errors?.content.map((error, ind) => <li className="text-error font-semibold" key={ind}>{error}</li>)
                    }
                    <textarea placeholder="Chapter content" className="textarea textarea-accent textarea-bordered textarea-lg w-full max-w-full h-dvh max-h-full" name="content" ></textarea>
                </div>
                <button type="submit" className="btn btn-wide btn-primary m-5">Submit</button>
            </form>
        </div>
    )
}
