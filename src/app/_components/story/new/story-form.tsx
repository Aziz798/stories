"use client";
import { MdTitle } from "react-icons/md";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Image from "next/image";
import { UploadButton } from "@/utils/uploadthing";
import { useFormState } from "react-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoryState } from "@/app/types/definitions";
import { createStory } from "@/app/lib/actions";

export default function StoryForm() {
    const [photoUrl, setPhotoUrl] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const user = useUser();

    const initialState: StoryState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createStory, initialState);
    console.log(state.errors);

    return (
        <>
            <ToastContainer />
            <div className="text-center">
            {
                state.errors?.photoUrl && state.errors?.photoUrl.map((error, i) => <li key={i} className="text-center text-error mt-2">{error}</li>)
            }
                {/* @ts-ignore */}
                <button id="photo-button" className="btn btn-outline btn-warning btn-wide mt-4" onClick={() => document.getElementById('my_modal_2').showModal()}>{loading ? (<span id="photo" className="loading loading-dots loading-lg"></span>) : (<span id="photo" >Add photo to your new Story</span>)}</button>
            </div>
            {
                photoUrl != "" && <Image className="m-auto mt-2" src={photoUrl} alt="photo uploaded" width={400} height={400} loading="lazy" />
            }
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Click the butto to choose a photo</h3>
                    <UploadButton endpoint="imageUploader"
                        onUploadError={(res) => {
                            setLoading(false);
                            toast.error("Photo upload failed");
                            console.log(res.cause);
                            
                        }}
                        onUploadProgress={() => { setLoading(true) }} onClientUploadComplete={(res) => {
                            setLoading(false);
                            setPhotoUrl(res[0].url)
                            toast.success("Photo added")
                            document.getElementById("photo-button")?.classList.add("btn-disabled")
                            {/*@ts-ignore*/ }
                            document.getElementById("photo").innerText = "Photo added";
                        }} />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <form action={dispatch}>
                <input type="hidden" name="userId" value={user?.user?.id} />
                <input type="hidden" name="photoUrl" value={photoUrl} />
                <div className="flex flex-col gap-6 m-7 items-center">
                {
                        state.errors?.title && state.errors?.title.map((error, i) => <li key={i} className="text-center text-error">{error}</li>)
                    }
                    <label htmlFor="title" className="input input-bordered flex items-center gap-2">
                        <span><MdTitle /></span>
                        <input type="text" className="grow" placeholder="Title" name="title" />
                    </label>
                    {
                        state.errors?.description && state.errors?.description.map((error, i) => <li key={i} className="text-center text-error">{error}</li>)
                    }
                    <textarea placeholder="Story description" className="textarea textarea-bordered textarea-lg w-full h-72" name="description"></textarea>
                    <button type="submit" className="btn btn-primary btn-wide">Create Story</button>
                </div>
            </form>
        </>
    )
}