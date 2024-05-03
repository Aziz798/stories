"use client";
import { fetchFilteredStories } from "@/app/lib/actions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type FilteredStories = {
    id: string;
    title: string;
    photoUrl: string;
    description: string;
}
export default function StoriesSearched() {
    const [stories, setStories] = useState<FilteredStories[]>([]);
    const searchParams = useSearchParams();
    const term = searchParams.get("story");
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFilteredStories(term);
            setStories(data);
        }
        fetchData();
    }, [term])
    return (
       <div className=" flex justify-center">
         <div className={`absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-scroll w-1/2 ${stories.length === 0 ? 'hidden' : 'h-[30vh]'} bg-slate-500 rounded-e-badge`}>
            {stories.map((story) => (
                <div key={story.id} className="card w-fit h-45 bg-base-100 shadow-xl image-full">
                    <figure><img src={story.photoUrl} alt={story.title}/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{story.title}</h2>
                        <p>{story.description}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/story/${story.id}`} className="btn btn-primary">Read {story.title}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       </div>
    )
}