import { Story } from "@/app/types/definitions";
import Image from "next/image";
export default function StoryIntroduction({story}: {story: Story}) {
    const date = new Date(story.createdAt)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('fr-FR', options)
    return(
        <div>
            <h1>{story.title}</h1>
            <p>{story.description}</p>  
            <Image src={story.photoUrl} alt={story.title} width={500} height={500} loading="lazy" className="w-fit h-fit"/>
            <p>{formattedDate}</p>
        </div>
    )
}