import Chapters from "@/app/_components/story/chapters";
import StoryIntroduction from "@/app/_components/story/storyIntoduction";
import { Chapter } from "@/app/types/definitions";
import { getStoryByIdWithChapters } from "@/app/lib/actions"
import Link from "next/link";
import { Suspense } from "react";
import { ChaptersSkeleton } from "@/app/_components/shared/skeletons";
import { FaRegSmileBeam } from "react-icons/fa";

export default async function Story({ params }: { params: { id: string } }) {
    const story = await getStoryByIdWithChapters(params.id);
    const allChapters: Chapter[] = story.flatMap(storyItem => storyItem.chapters || []);


    return (
        <div>
            <Suspense fallback={<div>waiting</div>}>
                <Chapters chapters={allChapters} />
            </Suspense>
            <div className="text-center mt-7 mb-7">
                {
                    !story[0].stories.completed ?
                        (<Link className="btn btn-lg btn-outline btn-accent" href={`/story/${params.id}/new-chapter`}>Right the next chapter </Link>)
                        : (<h2 className="text-3xl font-bold flex justify-center gap-2 text-emerald-700">
                            <span>storyCompleted</span>  <FaRegSmileBeam />
                        </h2>)
                }
            </div>
        </div>
    )
}