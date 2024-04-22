import StoryIntroduction from "@/app/_components/story/story";
import { Chapter } from "@/app/types/definitions";
import { getStoryById } from "@/server/actions"
import Image from "next/image";


export default async function Story({params}:{params:{id:string}}) {
    const story = await getStoryById(params.id);
    const allChapters : Chapter[] = story.flatMap(storyItem => storyItem.chapters || []);
    return(
        <div>
            <StoryIntroduction story={story[0].stories}/>
            {
                allChapters.map(chapter=>{
                    return(
                        <div key={chapter.id}>
                            <h1>{chapter.title}</h1>
                            <p>{chapter.content}</p>
                            {chapter.photoUrl && <Image src={chapter.photoUrl} alt={chapter.title} height={500} width={500} loading="lazy" className="w-fit h-fit"/>}
                        </div>
                    )
                })
            }
        </div>
    )
}