import { getStoryById } from "@/app/lib/actions";
import { Story } from "@/app/types/definitions";

export default async function StoryIntroduction({id}:{id:string}) {
    const storyfromDb = await getStoryById(id)
    const story = storyfromDb[0] 
    const date = new Date(story.createdAt)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('fr-FR', options)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url('${story.photoUrl}')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{story.title}</h1>
                    <p className="mb-5">{story.description}</p>
                    <br />
                    <p className="mb-5">Posted on {formattedDate}</p>

                </div>
            </div>
        </div>
    )
}