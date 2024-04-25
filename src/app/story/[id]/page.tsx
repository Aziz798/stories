import Chapters from "@/app/_components/story/chapters";
import StoryIntroduction from "@/app/_components/story/storyIntoduction";
import { Chapter } from "@/app/types/definitions";
import { getStoryByIdWithChapters } from "@/app/lib/actions"
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Story({params}:{params:{id:string}}) {
    const story = await getStoryByIdWithChapters(params.id);
    const allChapters : Chapter[] = story.flatMap(storyItem => storyItem.chapters || []);
    const {userId} = auth()
    return(
        <div>
            <Chapters chapters={allChapters}/>
            <div className="text-center mt-7 mb-7">
                {
                    !story[0].stories.completed && (<Link className="btn btn-lg btn-outline btn-accent" href={`/story/${params.id}/new-chapter`}>Right the next chapter </Link>) 
                }
            </div>
        </div>
    )
}