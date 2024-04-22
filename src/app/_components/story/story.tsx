import { Story } from "@/app/types/definitions";

export default function StoryIntroduction({story}: {story: Story}) {
    const date = new Date(story.createdAt)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('fr-FR', options)
    return(
        <div>
            <h1>{story.title}</h1>
            <p>{story.description}</p>  
            <img src={story.photoUrl} alt={story.title}/>
            <p>{formattedDate}</p>
        </div>
    )
}